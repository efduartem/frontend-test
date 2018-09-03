import { Injectable } from '@angular/core';
import { Event } from './models/eventModels';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class EventsService {
  apiBaseUrl = `${environment.apiUrl}/events`;
  eventList: Event[];
  featuredEventList: Event[];
  constructor(private httpClient: HttpClient) { }

  async getEventList() {
    let response;
    try {
      response = await this.httpClient.get(this.apiBaseUrl).toPromise();
      this.eventList = response['events'];
    } catch (error) {
      console.error(error);
    }
    return response;
  }

  async getFeaturedEventList() {
    let response;
    try {
      response = await this.httpClient.get(`${this.apiBaseUrl}/featured`).toPromise();
      this.featuredEventList = response['events'];
    } catch (error) {
      console.error(error);
    }
    return response;
  }

  async getEventById(eventId: number) {
    let response;
    try {
      response = await this.httpClient.get(`${this.apiBaseUrl}/${eventId}`).toPromise();
    } catch (error) {
      console.error(error);
    }
    return response;
  }

  async createEvent(event: Event) {
    let response;
    const data = {
      event
    };
    try {
      response = await this.httpClient.post(`${this.apiBaseUrl}`, data).toPromise();
    } catch (error) {
      console.error(error);
    }
    return response;
  }
}
