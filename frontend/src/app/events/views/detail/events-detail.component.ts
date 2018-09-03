import { Component, OnInit } from '@angular/core';
import { EventDate, Event } from '../../models/eventModels';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.scss'],
})
export class EventsDetailComponent implements OnInit {
  eventId: number;
  event: Event = new Event();
  eventDatesTableDisplayedColumns: string[] = ['date', 'time'];
  eventDatesTableDataSource: MatTableDataSource<EventDate> = new MatTableDataSource();
  constructor(private activatedRoute: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.eventId = Number(paramMap.get('id'));
      const eventByIdResponse = await this.eventsService.getEventById(this.eventId);
      this.event = eventByIdResponse.event;
      const eventList = this.event.dates.map((dateString: string) => {
        const date = dateString.split(' ')[0];
        const time = dateString.split(' ')[1];
        return new EventDate(date, time);
      });
      this.eventDatesTableDataSource.data = eventList;
    });
  }

}
