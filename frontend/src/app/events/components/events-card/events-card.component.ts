import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.scss']
})
export class EventsCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  twitterShare() {
    window.open('https://twitter.com/intent/tweet?text=Hello Twitter', 'twitter-popup', 'height=350,width=600');
  }

}
