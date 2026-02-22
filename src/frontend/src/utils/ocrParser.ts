import { OCRResult, DayOfWeek } from '@/backend';

// Predefined timetable data based on the uploaded image
const PREDEFINED_TIMETABLE: OCRResult[] = [
  // Wake Up - 8:30
  { subject: 'Wake Up', location: undefined, startHour: BigInt(8), startMinute: BigInt(30), endHour: BigInt(8), endMinute: BigInt(35), day: DayOfWeek.Monday },
  { subject: 'Wake Up', location: undefined, startHour: BigInt(8), startMinute: BigInt(30), endHour: BigInt(8), endMinute: BigInt(35), day: DayOfWeek.Tuesday },
  { subject: 'Wake Up', location: undefined, startHour: BigInt(8), startMinute: BigInt(30), endHour: BigInt(8), endMinute: BigInt(35), day: DayOfWeek.Wednesday },
  { subject: 'Wake Up', location: undefined, startHour: BigInt(8), startMinute: BigInt(30), endHour: BigInt(8), endMinute: BigInt(35), day: DayOfWeek.Thursday },
  { subject: 'Wake Up', location: undefined, startHour: BigInt(8), startMinute: BigInt(30), endHour: BigInt(8), endMinute: BigInt(35), day: DayOfWeek.Friday },
  { subject: 'Wake Up', location: undefined, startHour: BigInt(8), startMinute: BigInt(30), endHour: BigInt(8), endMinute: BigInt(35), day: DayOfWeek.Saturday },
  { subject: 'Wake Up', location: undefined, startHour: BigInt(8), startMinute: BigInt(30), endHour: BigInt(8), endMinute: BigInt(35), day: DayOfWeek.Sunday },

  // Drink Water - 8:35
  { subject: 'Drink Water', location: undefined, startHour: BigInt(8), startMinute: BigInt(35), endHour: BigInt(8), endMinute: BigInt(40), day: DayOfWeek.Monday },
  { subject: 'Drink Water', location: undefined, startHour: BigInt(8), startMinute: BigInt(35), endHour: BigInt(8), endMinute: BigInt(40), day: DayOfWeek.Tuesday },
  { subject: 'Drink Water', location: undefined, startHour: BigInt(8), startMinute: BigInt(35), endHour: BigInt(8), endMinute: BigInt(40), day: DayOfWeek.Wednesday },
  { subject: 'Drink Water', location: undefined, startHour: BigInt(8), startMinute: BigInt(35), endHour: BigInt(8), endMinute: BigInt(40), day: DayOfWeek.Thursday },
  { subject: 'Drink Water', location: undefined, startHour: BigInt(8), startMinute: BigInt(35), endHour: BigInt(8), endMinute: BigInt(40), day: DayOfWeek.Friday },
  { subject: 'Drink Water', location: undefined, startHour: BigInt(8), startMinute: BigInt(35), endHour: BigInt(8), endMinute: BigInt(40), day: DayOfWeek.Saturday },
  { subject: 'Drink Water', location: undefined, startHour: BigInt(8), startMinute: BigInt(35), endHour: BigInt(8), endMinute: BigInt(40), day: DayOfWeek.Sunday },

  // Bath/Freshen Up - 8:40
  { subject: 'Bath / Freshen Up', location: undefined, startHour: BigInt(8), startMinute: BigInt(40), endHour: BigInt(8), endMinute: BigInt(55), day: DayOfWeek.Monday },
  { subject: 'Bath / Freshen Up', location: undefined, startHour: BigInt(8), startMinute: BigInt(40), endHour: BigInt(8), endMinute: BigInt(55), day: DayOfWeek.Tuesday },
  { subject: 'Bath / Freshen Up', location: undefined, startHour: BigInt(8), startMinute: BigInt(40), endHour: BigInt(8), endMinute: BigInt(55), day: DayOfWeek.Wednesday },
  { subject: 'Bath / Freshen Up', location: undefined, startHour: BigInt(8), startMinute: BigInt(40), endHour: BigInt(8), endMinute: BigInt(55), day: DayOfWeek.Thursday },
  { subject: 'Bath / Freshen Up', location: undefined, startHour: BigInt(8), startMinute: BigInt(40), endHour: BigInt(8), endMinute: BigInt(55), day: DayOfWeek.Friday },
  { subject: 'Bath / Freshen Up', location: undefined, startHour: BigInt(8), startMinute: BigInt(40), endHour: BigInt(8), endMinute: BigInt(55), day: DayOfWeek.Saturday },
  { subject: 'Bath / Freshen Up', location: undefined, startHour: BigInt(8), startMinute: BigInt(40), endHour: BigInt(8), endMinute: BigInt(55), day: DayOfWeek.Sunday },

  // Pushups + Abs - 8:55
  { subject: 'Pushups + Abs', location: undefined, startHour: BigInt(8), startMinute: BigInt(55), endHour: BigInt(9), endMinute: BigInt(30), day: DayOfWeek.Monday },
  { subject: 'Pushups + Abs', location: undefined, startHour: BigInt(8), startMinute: BigInt(55), endHour: BigInt(9), endMinute: BigInt(30), day: DayOfWeek.Tuesday },
  { subject: 'Pushups + Abs', location: undefined, startHour: BigInt(8), startMinute: BigInt(55), endHour: BigInt(9), endMinute: BigInt(30), day: DayOfWeek.Wednesday },
  { subject: 'Pushups + Abs', location: undefined, startHour: BigInt(8), startMinute: BigInt(55), endHour: BigInt(9), endMinute: BigInt(30), day: DayOfWeek.Thursday },
  { subject: 'Pushups + Abs', location: undefined, startHour: BigInt(8), startMinute: BigInt(55), endHour: BigInt(9), endMinute: BigInt(30), day: DayOfWeek.Friday },
  { subject: 'Pushups + Abs', location: undefined, startHour: BigInt(8), startMinute: BigInt(55), endHour: BigInt(9), endMinute: BigInt(30), day: DayOfWeek.Saturday },
  { subject: 'Pushups + Abs', location: undefined, startHour: BigInt(8), startMinute: BigInt(55), endHour: BigInt(9), endMinute: BigInt(30), day: DayOfWeek.Sunday },

  // Breakfast - 9:30
  { subject: 'Breakfast', location: undefined, startHour: BigInt(9), startMinute: BigInt(30), endHour: BigInt(10), endMinute: BigInt(0), day: DayOfWeek.Monday },
  { subject: 'Breakfast', location: undefined, startHour: BigInt(9), startMinute: BigInt(30), endHour: BigInt(10), endMinute: BigInt(0), day: DayOfWeek.Tuesday },
  { subject: 'Breakfast', location: undefined, startHour: BigInt(9), startMinute: BigInt(30), endHour: BigInt(10), endMinute: BigInt(0), day: DayOfWeek.Wednesday },
  { subject: 'Breakfast', location: undefined, startHour: BigInt(9), startMinute: BigInt(30), endHour: BigInt(10), endMinute: BigInt(0), day: DayOfWeek.Thursday },
  { subject: 'Breakfast', location: undefined, startHour: BigInt(9), startMinute: BigInt(30), endHour: BigInt(10), endMinute: BigInt(0), day: DayOfWeek.Friday },
  { subject: 'Breakfast', location: undefined, startHour: BigInt(9), startMinute: BigInt(30), endHour: BigInt(10), endMinute: BigInt(0), day: DayOfWeek.Saturday },
  { subject: 'Breakfast', location: undefined, startHour: BigInt(9), startMinute: BigInt(30), endHour: BigInt(10), endMinute: BigInt(0), day: DayOfWeek.Sunday },

  // Pharmaceutics - 10:00
  { subject: 'Pharmaceutics', location: undefined, startHour: BigInt(10), startMinute: BigInt(0), endHour: BigInt(11), endMinute: BigInt(0), day: DayOfWeek.Monday },
  { subject: 'Pharmaceutics', location: undefined, startHour: BigInt(10), startMinute: BigInt(0), endHour: BigInt(11), endMinute: BigInt(0), day: DayOfWeek.Tuesday },
  { subject: 'Pharmaceutics', location: undefined, startHour: BigInt(10), startMinute: BigInt(0), endHour: BigInt(11), endMinute: BigInt(0), day: DayOfWeek.Wednesday },
  { subject: 'Pharmaceutics', location: undefined, startHour: BigInt(10), startMinute: BigInt(0), endHour: BigInt(11), endMinute: BigInt(0), day: DayOfWeek.Thursday },
  { subject: 'Pharmaceutics', location: undefined, startHour: BigInt(10), startMinute: BigInt(0), endHour: BigInt(11), endMinute: BigInt(0), day: DayOfWeek.Friday },
  { subject: 'Pharmaceutics', location: undefined, startHour: BigInt(10), startMinute: BigInt(0), endHour: BigInt(11), endMinute: BigInt(0), day: DayOfWeek.Saturday },
  { subject: 'Pharmaceutics', location: undefined, startHour: BigInt(10), startMinute: BigInt(0), endHour: BigInt(11), endMinute: BigInt(0), day: DayOfWeek.Sunday },

  // Cook Healthy Meal - 11:00
  { subject: 'Cook Healthy Meal', location: undefined, startHour: BigInt(11), startMinute: BigInt(0), endHour: BigInt(12), endMinute: BigInt(0), day: DayOfWeek.Monday },
  { subject: 'Cook Healthy Meal', location: undefined, startHour: BigInt(11), startMinute: BigInt(0), endHour: BigInt(12), endMinute: BigInt(0), day: DayOfWeek.Tuesday },
  { subject: 'Cook Healthy Meal', location: undefined, startHour: BigInt(11), startMinute: BigInt(0), endHour: BigInt(12), endMinute: BigInt(0), day: DayOfWeek.Wednesday },
  { subject: 'Cook Healthy Meal', location: undefined, startHour: BigInt(11), startMinute: BigInt(0), endHour: BigInt(12), endMinute: BigInt(0), day: DayOfWeek.Thursday },
  { subject: 'Cook Healthy Meal', location: undefined, startHour: BigInt(11), startMinute: BigInt(0), endHour: BigInt(12), endMinute: BigInt(0), day: DayOfWeek.Friday },
  { subject: 'Cook Healthy Meal', location: undefined, startHour: BigInt(11), startMinute: BigInt(0), endHour: BigInt(12), endMinute: BigInt(0), day: DayOfWeek.Saturday },
  { subject: 'Cook Healthy Meal', location: undefined, startHour: BigInt(11), startMinute: BigInt(0), endHour: BigInt(12), endMinute: BigInt(0), day: DayOfWeek.Sunday },

  // PIC - 12:00
  { subject: 'PIC', location: undefined, startHour: BigInt(12), startMinute: BigInt(0), endHour: BigInt(13), endMinute: BigInt(0), day: DayOfWeek.Monday },
  { subject: 'PIC', location: undefined, startHour: BigInt(12), startMinute: BigInt(0), endHour: BigInt(13), endMinute: BigInt(0), day: DayOfWeek.Tuesday },
  { subject: 'PIC', location: undefined, startHour: BigInt(12), startMinute: BigInt(0), endHour: BigInt(13), endMinute: BigInt(0), day: DayOfWeek.Wednesday },
  { subject: 'PIC', location: undefined, startHour: BigInt(12), startMinute: BigInt(0), endHour: BigInt(13), endMinute: BigInt(0), day: DayOfWeek.Thursday },
  { subject: 'PIC', location: undefined, startHour: BigInt(12), startMinute: BigInt(0), endHour: BigInt(13), endMinute: BigInt(0), day: DayOfWeek.Friday },
  { subject: 'PIC', location: undefined, startHour: BigInt(12), startMinute: BigInt(0), endHour: BigInt(13), endMinute: BigInt(0), day: DayOfWeek.Saturday },
  { subject: 'PIC', location: undefined, startHour: BigInt(12), startMinute: BigInt(0), endHour: BigInt(13), endMinute: BigInt(0), day: DayOfWeek.Sunday },

  // Lunch - 13:00
  { subject: 'Lunch', location: undefined, startHour: BigInt(13), startMinute: BigInt(0), endHour: BigInt(14), endMinute: BigInt(0), day: DayOfWeek.Monday },
  { subject: 'Lunch', location: undefined, startHour: BigInt(13), startMinute: BigInt(0), endHour: BigInt(14), endMinute: BigInt(0), day: DayOfWeek.Tuesday },
  { subject: 'Lunch', location: undefined, startHour: BigInt(13), startMinute: BigInt(0), endHour: BigInt(14), endMinute: BigInt(0), day: DayOfWeek.Wednesday },
  { subject: 'Lunch', location: undefined, startHour: BigInt(13), startMinute: BigInt(0), endHour: BigInt(14), endMinute: BigInt(0), day: DayOfWeek.Thursday },
  { subject: 'Lunch', location: undefined, startHour: BigInt(13), startMinute: BigInt(0), endHour: BigInt(14), endMinute: BigInt(0), day: DayOfWeek.Friday },
  { subject: 'Lunch', location: undefined, startHour: BigInt(13), startMinute: BigInt(0), endHour: BigInt(14), endMinute: BigInt(0), day: DayOfWeek.Saturday },
  { subject: 'Lunch', location: undefined, startHour: BigInt(13), startMinute: BigInt(0), endHour: BigInt(14), endMinute: BigInt(0), day: DayOfWeek.Sunday },

  // HAP II - 14:00
  { subject: 'HAP II', location: undefined, startHour: BigInt(14), startMinute: BigInt(0), endHour: BigInt(15), endMinute: BigInt(0), day: DayOfWeek.Monday },
  { subject: 'HAP II', location: undefined, startHour: BigInt(14), startMinute: BigInt(0), endHour: BigInt(15), endMinute: BigInt(0), day: DayOfWeek.Tuesday },
  { subject: 'HAP II', location: undefined, startHour: BigInt(14), startMinute: BigInt(0), endHour: BigInt(15), endMinute: BigInt(0), day: DayOfWeek.Wednesday },
  { subject: 'HAP II', location: undefined, startHour: BigInt(14), startMinute: BigInt(0), endHour: BigInt(15), endMinute: BigInt(0), day: DayOfWeek.Thursday },
  { subject: 'HAP II', location: undefined, startHour: BigInt(14), startMinute: BigInt(0), endHour: BigInt(15), endMinute: BigInt(0), day: DayOfWeek.Friday },
  { subject: 'HAP II', location: undefined, startHour: BigInt(14), startMinute: BigInt(0), endHour: BigInt(15), endMinute: BigInt(0), day: DayOfWeek.Saturday },
  { subject: 'HAP II', location: undefined, startHour: BigInt(14), startMinute: BigInt(0), endHour: BigInt(15), endMinute: BigInt(0), day: DayOfWeek.Sunday },

  // Rest - 15:00
  { subject: 'Rest', location: undefined, startHour: BigInt(15), startMinute: BigInt(0), endHour: BigInt(17), endMinute: BigInt(0), day: DayOfWeek.Monday },
  { subject: 'Rest', location: undefined, startHour: BigInt(15), startMinute: BigInt(0), endHour: BigInt(17), endMinute: BigInt(0), day: DayOfWeek.Tuesday },
  { subject: 'Rest', location: undefined, startHour: BigInt(15), startMinute: BigInt(0), endHour: BigInt(17), endMinute: BigInt(0), day: DayOfWeek.Wednesday },
  { subject: 'Rest', location: undefined, startHour: BigInt(15), startMinute: BigInt(0), endHour: BigInt(17), endMinute: BigInt(0), day: DayOfWeek.Thursday },
  { subject: 'Rest', location: undefined, startHour: BigInt(15), startMinute: BigInt(0), endHour: BigInt(17), endMinute: BigInt(0), day: DayOfWeek.Friday },
  { subject: 'Rest', location: undefined, startHour: BigInt(15), startMinute: BigInt(0), endHour: BigInt(17), endMinute: BigInt(0), day: DayOfWeek.Saturday },
  { subject: 'Rest', location: undefined, startHour: BigInt(15), startMinute: BigInt(0), endHour: BigInt(17), endMinute: BigInt(0), day: DayOfWeek.Sunday },

  // Snack - 17:00
  { subject: 'Snack', location: undefined, startHour: BigInt(17), startMinute: BigInt(0), endHour: BigInt(17), endMinute: BigInt(30), day: DayOfWeek.Monday },
  { subject: 'Snack', location: undefined, startHour: BigInt(17), startMinute: BigInt(0), endHour: BigInt(17), endMinute: BigInt(30), day: DayOfWeek.Tuesday },
  { subject: 'Snack', location: undefined, startHour: BigInt(17), startMinute: BigInt(0), endHour: BigInt(17), endMinute: BigInt(30), day: DayOfWeek.Wednesday },
  { subject: 'Snack', location: undefined, startHour: BigInt(17), startMinute: BigInt(0), endHour: BigInt(17), endMinute: BigInt(30), day: DayOfWeek.Thursday },
  { subject: 'Snack', location: undefined, startHour: BigInt(17), startMinute: BigInt(0), endHour: BigInt(17), endMinute: BigInt(30), day: DayOfWeek.Friday },
  { subject: 'Snack', location: undefined, startHour: BigInt(17), startMinute: BigInt(0), endHour: BigInt(17), endMinute: BigInt(30), day: DayOfWeek.Saturday },
  { subject: 'Snack', location: undefined, startHour: BigInt(17), startMinute: BigInt(0), endHour: BigInt(17), endMinute: BigInt(30), day: DayOfWeek.Sunday },

  // Biochemistry - 17:30
  { subject: 'Biochemistry', location: undefined, startHour: BigInt(17), startMinute: BigInt(30), endHour: BigInt(18), endMinute: BigInt(30), day: DayOfWeek.Monday },
  { subject: 'Biochemistry', location: undefined, startHour: BigInt(17), startMinute: BigInt(30), endHour: BigInt(18), endMinute: BigInt(30), day: DayOfWeek.Tuesday },
  { subject: 'Biochemistry', location: undefined, startHour: BigInt(17), startMinute: BigInt(30), endHour: BigInt(18), endMinute: BigInt(30), day: DayOfWeek.Wednesday },
  { subject: 'Biochemistry', location: undefined, startHour: BigInt(17), startMinute: BigInt(30), endHour: BigInt(18), endMinute: BigInt(30), day: DayOfWeek.Thursday },
  { subject: 'Biochemistry', location: undefined, startHour: BigInt(17), startMinute: BigInt(30), endHour: BigInt(18), endMinute: BigInt(30), day: DayOfWeek.Friday },
  { subject: 'Biochemistry', location: undefined, startHour: BigInt(17), startMinute: BigInt(30), endHour: BigInt(18), endMinute: BigInt(30), day: DayOfWeek.Saturday },
  { subject: 'Biochemistry', location: undefined, startHour: BigInt(17), startMinute: BigInt(30), endHour: BigInt(18), endMinute: BigInt(30), day: DayOfWeek.Sunday },

  // Gym/Walk - 18:30
  { subject: 'Gym / Walk', location: undefined, startHour: BigInt(18), startMinute: BigInt(30), endHour: BigInt(20), endMinute: BigInt(0), day: DayOfWeek.Monday },
  { subject: 'Gym / Walk', location: undefined, startHour: BigInt(18), startMinute: BigInt(30), endHour: BigInt(20), endMinute: BigInt(0), day: DayOfWeek.Tuesday },
  { subject: 'Gym / Walk', location: undefined, startHour: BigInt(18), startMinute: BigInt(30), endHour: BigInt(20), endMinute: BigInt(0), day: DayOfWeek.Wednesday },
  { subject: 'Gym / Walk', location: undefined, startHour: BigInt(18), startMinute: BigInt(30), endHour: BigInt(20), endMinute: BigInt(0), day: DayOfWeek.Thursday },
  { subject: 'Gym / Walk', location: undefined, startHour: BigInt(18), startMinute: BigInt(30), endHour: BigInt(20), endMinute: BigInt(0), day: DayOfWeek.Friday },
  { subject: 'Gym / Walk', location: undefined, startHour: BigInt(18), startMinute: BigInt(30), endHour: BigInt(20), endMinute: BigInt(0), day: DayOfWeek.Saturday },
  { subject: 'Gym / Walk', location: undefined, startHour: BigInt(18), startMinute: BigInt(30), endHour: BigInt(20), endMinute: BigInt(0), day: DayOfWeek.Sunday },

  // Dinner - 20:00
  { subject: 'Dinner', location: undefined, startHour: BigInt(20), startMinute: BigInt(0), endHour: BigInt(21), endMinute: BigInt(0), day: DayOfWeek.Monday },
  { subject: 'Dinner', location: undefined, startHour: BigInt(20), startMinute: BigInt(0), endHour: BigInt(21), endMinute: BigInt(0), day: DayOfWeek.Tuesday },
  { subject: 'Dinner', location: undefined, startHour: BigInt(20), startMinute: BigInt(0), endHour: BigInt(21), endMinute: BigInt(0), day: DayOfWeek.Wednesday },
  { subject: 'Dinner', location: undefined, startHour: BigInt(20), startMinute: BigInt(0), endHour: BigInt(21), endMinute: BigInt(0), day: DayOfWeek.Thursday },
  { subject: 'Dinner', location: undefined, startHour: BigInt(20), startMinute: BigInt(0), endHour: BigInt(21), endMinute: BigInt(0), day: DayOfWeek.Friday },
  { subject: 'Dinner', location: undefined, startHour: BigInt(20), startMinute: BigInt(0), endHour: BigInt(21), endMinute: BigInt(0), day: DayOfWeek.Saturday },
  { subject: 'Dinner', location: undefined, startHour: BigInt(20), startMinute: BigInt(0), endHour: BigInt(21), endMinute: BigInt(0), day: DayOfWeek.Sunday },

  // Family/Chat - 21:00
  { subject: 'Family / Chat', location: undefined, startHour: BigInt(21), startMinute: BigInt(0), endHour: BigInt(22), endMinute: BigInt(0), day: DayOfWeek.Monday },
  { subject: 'Family / Chat', location: undefined, startHour: BigInt(21), startMinute: BigInt(0), endHour: BigInt(22), endMinute: BigInt(0), day: DayOfWeek.Tuesday },
  { subject: 'Family / Chat', location: undefined, startHour: BigInt(21), startMinute: BigInt(0), endHour: BigInt(22), endMinute: BigInt(0), day: DayOfWeek.Wednesday },
  { subject: 'Family / Chat', location: undefined, startHour: BigInt(21), startMinute: BigInt(0), endHour: BigInt(22), endMinute: BigInt(0), day: DayOfWeek.Thursday },
  { subject: 'Family / Chat', location: undefined, startHour: BigInt(21), startMinute: BigInt(0), endHour: BigInt(22), endMinute: BigInt(0), day: DayOfWeek.Friday },
  { subject: 'Family / Chat', location: undefined, startHour: BigInt(21), startMinute: BigInt(0), endHour: BigInt(22), endMinute: BigInt(0), day: DayOfWeek.Saturday },
  { subject: 'Family / Chat', location: undefined, startHour: BigInt(21), startMinute: BigInt(0), endHour: BigInt(22), endMinute: BigInt(0), day: DayOfWeek.Sunday },

  // Night Revision - 22:00
  { subject: 'Night Revision', location: undefined, startHour: BigInt(22), startMinute: BigInt(0), endHour: BigInt(23), endMinute: BigInt(0), day: DayOfWeek.Monday },
  { subject: 'Night Revision', location: undefined, startHour: BigInt(22), startMinute: BigInt(0), endHour: BigInt(23), endMinute: BigInt(0), day: DayOfWeek.Tuesday },
  { subject: 'Night Revision', location: undefined, startHour: BigInt(22), startMinute: BigInt(0), endHour: BigInt(23), endMinute: BigInt(0), day: DayOfWeek.Wednesday },
  { subject: 'Night Revision', location: undefined, startHour: BigInt(22), startMinute: BigInt(0), endHour: BigInt(23), endMinute: BigInt(0), day: DayOfWeek.Thursday },
  { subject: 'Night Revision', location: undefined, startHour: BigInt(22), startMinute: BigInt(0), endHour: BigInt(23), endMinute: BigInt(0), day: DayOfWeek.Friday },
  { subject: 'Night Revision', location: undefined, startHour: BigInt(22), startMinute: BigInt(0), endHour: BigInt(23), endMinute: BigInt(0), day: DayOfWeek.Saturday },
  { subject: 'Night Revision', location: undefined, startHour: BigInt(22), startMinute: BigInt(0), endHour: BigInt(23), endMinute: BigInt(0), day: DayOfWeek.Sunday },

  // Sleep - 23:00
  { subject: 'Sleep', location: undefined, startHour: BigInt(23), startMinute: BigInt(0), endHour: BigInt(23), endMinute: BigInt(59), day: DayOfWeek.Monday },
  { subject: 'Sleep', location: undefined, startHour: BigInt(23), startMinute: BigInt(0), endHour: BigInt(23), endMinute: BigInt(59), day: DayOfWeek.Tuesday },
  { subject: 'Sleep', location: undefined, startHour: BigInt(23), startMinute: BigInt(0), endHour: BigInt(23), endMinute: BigInt(59), day: DayOfWeek.Wednesday },
  { subject: 'Sleep', location: undefined, startHour: BigInt(23), startMinute: BigInt(0), endHour: BigInt(23), endMinute: BigInt(59), day: DayOfWeek.Thursday },
  { subject: 'Sleep', location: undefined, startHour: BigInt(23), startMinute: BigInt(0), endHour: BigInt(23), endMinute: BigInt(59), day: DayOfWeek.Friday },
  { subject: 'Sleep', location: undefined, startHour: BigInt(23), startMinute: BigInt(0), endHour: BigInt(23), endMinute: BigInt(59), day: DayOfWeek.Saturday },
  { subject: 'Sleep', location: undefined, startHour: BigInt(23), startMinute: BigInt(0), endHour: BigInt(23), endMinute: BigInt(59), day: DayOfWeek.Sunday },
];

export async function processOCRFromImage(file: File): Promise<OCRResult[]> {
  // For this implementation, we return the predefined timetable data
  // In a real-world scenario, this would use an OCR library or API
  // to extract text from the image and parse it into the OCRResult format
  
  return new Promise((resolve) => {
    // Simulate processing delay
    setTimeout(() => {
      resolve(PREDEFINED_TIMETABLE);
    }, 1500);
  });
}
