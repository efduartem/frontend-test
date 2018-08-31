import { Component, OnInit } from '@angular/core';
import { EventDate, Event } from '../../models/eventModels';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.scss'],
})
export class EventsDetailComponent implements OnInit {
  eventDatesTableDisplayedColumns: string[] = ['date', 'time'];
  eventDatesTableDataSource: MatTableDataSource<EventDate> = new MatTableDataSource();
  eventDateList: EventDate[] = [];
  constructor() { }

  ngOnInit() {}

}
