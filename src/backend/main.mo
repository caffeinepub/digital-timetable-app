import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";
import Int "mo:core/Int";

actor {
  include MixinStorage();

  type DayOfWeek = {
    #Monday;
    #Tuesday;
    #Wednesday;
    #Thursday;
    #Friday;
    #Saturday;
    #Sunday;
  };

  module DayOfWeek {
    public func compare(day1 : DayOfWeek, day2 : DayOfWeek) : Order.Order {
      let dayToInt = func(day : DayOfWeek) : Int {
        switch (day) {
          case (#Monday) { 1 };
          case (#Tuesday) { 2 };
          case (#Wednesday) { 3 };
          case (#Thursday) { 4 };
          case (#Friday) { 5 };
          case (#Saturday) { 6 };
          case (#Sunday) { 7 };
        };
      };
      Int.compare(dayToInt(day1), dayToInt(day2));
    };
  };

  type TimeSlot = {
    startHour : Nat;
    startMinute : Nat;
    endHour : Nat;
    endMinute : Nat;
  };

  type Task = {
    subject : Text;
    location : ?Text;
    timeSlot : TimeSlot;
    day : DayOfWeek;
    completed : Bool;
    inProgress : Bool;
  };

  type Timetable = {
    tasks : [Task];
    timetableImage : Storage.ExternalBlob;
  };

  public type OCRResult = {
    subject : Text;
    location : ?Text;
    startHour : Nat;
    startMinute : Nat;
    endHour : Nat;
    endMinute : Nat;
    day : DayOfWeek;
  };

  let tasks = Map.empty<DayOfWeek, List.List<Task>>();
  var currentTask : ?Task = null;
  var timetableImage : ?Storage.ExternalBlob = null;

  func getCurrentTime() : (Nat, Nat, DayOfWeek) {
    let currentTime = Time.now();
    let seconds = currentTime / 1_000_000_000;
    let minutes = (seconds / 60) % 60;
    let hours = (seconds / 3600) % 24;
    let daysToDayOfWeek = func(days : Int) : DayOfWeek {
      switch (days % 7) {
        case (0) { #Thursday };
        case (1) { #Friday };
        case (2) { #Saturday };
        case (3) { #Sunday };
        case (4) { #Monday };
        case (5) { #Tuesday };
        case (6) { #Wednesday };
        case _ { #Monday };
      };
    };
    let dayOfWeek = daysToDayOfWeek(seconds / (3600 * 24));
    (hours.toNat(), minutes.toNat(), dayOfWeek);
  };

  func isWithinTimeSlot(timeSlot : TimeSlot, currentHour : Nat, currentMinute : Nat) : Bool {
    let currentTotalMinutes = currentHour * 60 + currentMinute;
    let startTotalMinutes = timeSlot.startHour * 60 + timeSlot.startMinute;
    let endTotalMinutes = timeSlot.endHour * 60 + timeSlot.endMinute;
    currentTotalMinutes >= startTotalMinutes and currentTotalMinutes <= endTotalMinutes
  };

  public shared ({ caller }) func processOCRResult(ocrResults : [OCRResult]) : async () {
    for (result in ocrResults.values()) {
      await addTask(result);
    };
  };

  func addTask(ocrResult : OCRResult) : async () {
    let task : Task = {
      subject = ocrResult.subject;
      location = ocrResult.location;
      timeSlot = {
        startHour = ocrResult.startHour;
        startMinute = ocrResult.startMinute;
        endHour = ocrResult.endHour;
        endMinute = ocrResult.endMinute;
      };
      day = ocrResult.day;
      completed = false;
      inProgress = false;
    };

    let dayTasks = switch (tasks.get(ocrResult.day)) {
      case (null) { List.empty<Task>() };
      case (?currentTasks) { currentTasks };
    };

    dayTasks.add(task);
    tasks.add(ocrResult.day, dayTasks);
  };

  public shared ({ caller }) func toggleTaskCompletion(day : DayOfWeek, taskIndex : Nat) : async () {
    let (currentHour, currentMinute, currentDay) = getCurrentTime();

    if (currentDay != day) {
      Runtime.trap("Task completion can only be toggled on the scheduled day");
    };

    switch (tasks.get(day)) {
      case (null) { Runtime.trap("Day not found") };
      case (?dayTasks) {
        if (taskIndex >= dayTasks.size()) { Runtime.trap("Task index out of bounds") };

        let task = switch (dayTasks.at(taskIndex)) {
          case (task) { task };
        };
        if (not isWithinTimeSlot(task.timeSlot, currentHour, currentMinute)) {
          Runtime.trap("Task must be toggled within the scheduled time slot");
        };

        let updatedTasks = List.empty<Task>();
        let iter = dayTasks.values();
        var i = 0;
        while (i < dayTasks.size()) {
          if (i == taskIndex) {
            let updatedTask = {
              task with
              completed = not task.completed;
            };
            updatedTasks.add(updatedTask);
          } else {
            switch (iter.next()) {
              case (null) {};
              case (?otherTask) { updatedTasks.add(otherTask) };
            };
          };
          i += 1;
        };
        tasks.add(day, updatedTasks);
      };
    };
  };

  public shared ({ caller }) func markTaskInProgress(day : DayOfWeek, taskIndex : Nat) : async () {
    let (_, _, currentDay) = getCurrentTime();

    if (currentDay != day) {
      Runtime.trap("Task can only be marked in progress on the scheduled day");
    };

    switch (tasks.get(day)) {
      case (null) { Runtime.trap("Day not found") };
      case (?dayTasks) {
        if (taskIndex >= dayTasks.size()) { Runtime.trap("Task index out of bounds") };

        let iter = dayTasks.values();
        let updatedTasks = Array.tabulate(
          dayTasks.size(),
          func(i) {
            let task = switch (dayTasks.at(i)) {
              case (task) { task };
            };
            if (i == taskIndex) {
              {
                task with
                inProgress = not task.inProgress;
              };
            } else {
              task;
            };
          },
        );

        let taskList = List.empty<Task>();
        let updatedIter = updatedTasks.values();
        taskList.addAll(updatedIter);
        tasks.add(day, taskList);
      };
    };
  };

  public query ({ caller }) func getTasksByDay(day : DayOfWeek) : async [Task] {
    switch (tasks.get(day)) {
      case (null) { [] };
      case (?dayTasks) { dayTasks.toArray() };
    };
  };

  public query ({ caller }) func getCurrentTask() : async ?Task {
    let (currentHour, currentMinute, currentDay) = getCurrentTime();

    switch (tasks.get(currentDay)) {
      case (null) { null };
      case (?dayTasks) {
        let taskIter = dayTasks.values();
        var currentTask : ?Task = null;
        switch (taskIter.next()) {
          case (null) { return null };
          case (?task) {
            if (isWithinTimeSlot(task.timeSlot, currentHour, currentMinute)) {
              currentTask := ?task;
            };
          };
        };
        currentTask;
      };
    };
  };

  public query ({ caller }) func getWeeklySchedule() : async [(DayOfWeek, [Task])] {
    tasks.entries().toArray().sort(func(a, b) { DayOfWeek.compare(a.0, b.0) }).map(
      func(entry) {
        let (day, dayTasks) = entry;
        let tasksArray = dayTasks.toArray().reverse();
        (day, tasksArray);
      }
    );
  };

  public query ({ caller }) func getAllTasks() : async [(DayOfWeek, Task)] {
    let allTasks = List.empty<(DayOfWeek, Task)>();

    for ((day, dayTasks) in tasks.entries()) {
      let taskIter = dayTasks.values();
      switch (taskIter.next()) {
        case (null) {};
        case (?task) { allTasks.add((day, task)) };
      };
    };

    allTasks.toArray();
  };

  public shared ({ caller }) func updateTimetableImage(blob : Storage.ExternalBlob) : async () {
    timetableImage := ?blob;
  };

  public query ({ caller }) func getTimetableImage() : async ?Storage.ExternalBlob {
    timetableImage;
  };

  public query ({ caller }) func getTaskCompletionStatus(day : DayOfWeek, taskIndex : Nat) : async Bool {
    switch (tasks.get(day)) {
      case (null) { Runtime.trap("Day not found") };
      case (?dayTasks) {
        if (taskIndex >= dayTasks.size()) { Runtime.trap("Task index out of bounds") };
        let task = switch (dayTasks.at(taskIndex)) {
          case (task) { task };
        };
        task.completed;
      };
    };
  };

  public query ({ caller }) func getTimeRemainingForTask(day : DayOfWeek, taskIndex : Nat) : async ?Int {
    let (currentHour, currentMinute, currentDay) = getCurrentTime();

    switch (tasks.get(day)) {
      case (null) { null };
      case (?dayTasks) {
        if (taskIndex >= dayTasks.size()) { null } else {
          let task = switch (dayTasks.at(taskIndex)) {
            case (task) { task };
          };
          if (currentDay != day) { null } else {
            let currentMinutes = currentHour * 60 + currentMinute;
            let endMinutes = task.timeSlot.endHour * 60 + task.timeSlot.endMinute;
            ?(endMinutes - currentMinutes);
          };
        };
      };
    };
  };
};
