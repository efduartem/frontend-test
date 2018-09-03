export class Event {
  id?: number;
  title: string;
  eventImage: string; // URL
  description: string;
  dates: string[];
  location: string;
  constructor() {
    this.eventImage = ''; // Prevent img TAG null load
  }
}

export class EventDate {
  date: string;
  time: string;
  constructor(date: string, time: string) {
    this.date = date;
    this.time = time;
  }
}
