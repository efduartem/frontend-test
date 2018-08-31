export interface Event {
  id?: number;
  title: string;
  eventImage: string; // URL
  description: string;
  dates: string[];
  location: string;
}

export class EventDate {
  date: string;
  time: string;
  constructor(date: string, time: string) {
    this.date = date;
    this.time = time;
  }
}
