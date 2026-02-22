# Specification

## Summary
**Goal:** Build a digital timetable app that extracts schedule data from uploaded images and enforces time-restricted task completion tracking.

**Planned changes:**
- Implement image upload functionality for timetable images
- Extract timetable data using OCR (days, time slots, tasks, optional locations)
- Display extracted data in an editable table with Day, Time, Task, and Done checkbox columns
- Implement time-restricted Done checkboxes that only enable during scheduled time slots
- Store timetable data and completion status in backend with JSON synchronization
- Handle unclear images gracefully without crashing
- Provide JSON export functionality
- Apply warm, energetic color scheme (orange, yellow, green tones) with clean, modern design

**User-visible outcome:** Users can upload their timetable image, see it extracted into an editable table, and mark tasks as done only during their scheduled time slots. The app enforces discipline by preventing early or late task completion marking.
