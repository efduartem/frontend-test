import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../models/eventModels';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  @Input('eventList') eventList: Event[];
  @Input('eventListTitle') eventListTitle: string;
  constructor() { }

  ngOnInit() {
  }

}
// highlight
// highlight
// highlight
