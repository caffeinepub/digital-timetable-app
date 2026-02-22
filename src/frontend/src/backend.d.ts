import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface OCRResult {
    day: DayOfWeek;
    endHour: bigint;
    subject: string;
    endMinute: bigint;
    startMinute: bigint;
    location?: string;
    startHour: bigint;
}
export interface TimeSlot {
    endHour: bigint;
    endMinute: bigint;
    startMinute: bigint;
    startHour: bigint;
}
export interface Task {
    day: DayOfWeek;
    subject: string;
    completed: boolean;
    inProgress: boolean;
    location?: string;
    timeSlot: TimeSlot;
}
export enum DayOfWeek {
    Saturday = "Saturday",
    Thursday = "Thursday",
    Sunday = "Sunday",
    Tuesday = "Tuesday",
    Friday = "Friday",
    Wednesday = "Wednesday",
    Monday = "Monday"
}
export interface backendInterface {
    getAllTasks(): Promise<Array<[DayOfWeek, Task]>>;
    getCurrentTask(): Promise<Task | null>;
    getTaskCompletionStatus(day: DayOfWeek, taskIndex: bigint): Promise<boolean>;
    getTasksByDay(day: DayOfWeek): Promise<Array<Task>>;
    getTimeRemainingForTask(day: DayOfWeek, taskIndex: bigint): Promise<bigint | null>;
    getTimetableImage(): Promise<ExternalBlob | null>;
    getWeeklySchedule(): Promise<Array<[DayOfWeek, Array<Task>]>>;
    markTaskInProgress(day: DayOfWeek, taskIndex: bigint): Promise<void>;
    processOCRResult(ocrResults: Array<OCRResult>): Promise<void>;
    toggleTaskCompletion(day: DayOfWeek, taskIndex: bigint): Promise<void>;
    updateTimetableImage(blob: ExternalBlob): Promise<void>;
}
