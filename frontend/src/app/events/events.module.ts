import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EventsMaterialModule } from './events.material.module';

import { EventsIndexComponent } from './views/index/events-index.component';
import { EventsCardComponent } from './components/events-card/events-card.component';
import { EventsHighlightListComponent } from './components/events-highlight-list/events-highlight-list.component';


@NgModule({
  imports: [
    CommonModule,
    EventsMaterialModule,
    FlexLayoutModule,
    EventsRoutingModule
  ],
  declarations: [EventsIndexComponent, EventsCardComponent, EventsHighlightListComponent]
})
export class EventsModule { }
