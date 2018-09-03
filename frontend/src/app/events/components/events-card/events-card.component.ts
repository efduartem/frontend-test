import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../models/eventModels';

@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.scss']
})
export class EventsCardComponent implements OnInit {
  @Input('event') event: Event;
  constructor() { }

  ngOnInit() { }

  twitterShare(event) {
    const tweetText = encodeURI(`Iré al ${event.title} @ ${event.dates[0]}`);
    const tweetUrl = encodeURI(`${window.location.href}/${event.id}`);
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`, 'twitter-popup', 'height=350,width=600');
  }

}
