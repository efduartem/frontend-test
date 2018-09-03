import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../events.service';
import { Event } from '../../models/eventModels';

@Component({
  selector: 'app-events-index',
  templateUrl: './events-index.component.html',
  styleUrls: ['./events-index.component.scss']
})
export class EventsIndexComponent implements OnInit {
  eventList: Event[] = [];
  featuredEventList: Event[] = [];
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.loadEventList();
    this.loadFeaturedEventList();
  }

  async loadEventList() {
    // Prevent New Request if Event Service already contain the eventList
    if (this.eventsService.eventList) {
      this.eventList = this.eventsService.eventList;
      return;
    }
    const eventListResponse = await this.eventsService.getEventList();
    this.eventList = eventListResponse.events;
    // console.log(this.eventList);
  }

  async loadFeaturedEventList() {
    // Prevent New Request if Event Service already contain the featuredEventList
    if (this.eventsService.featuredEventList) {
      this.featuredEventList = this.eventsService.featuredEventList;
      return;
    }
    const featuredEventListResponse = await this.eventsService.getFeaturedEventList();
    this.featuredEventList = featuredEventListResponse.events;
    // console.log(this.featuredEventList);
  }

}
