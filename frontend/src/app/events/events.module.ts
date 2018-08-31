import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsMaterialModule } from './events.material.module';

import { EventsIndexComponent } from './views/index/events-index.component';
import { EventsCardComponent } from './components/events-card/events-card.component';
import { EventsHighlightListComponent } from './components/events-highlight-list/events-highlight-list.component';
import { EventsDetailComponent } from './views/detail/events-detail.component';
import { EventsCreateComponent } from './views/create/events-create.component';

@NgModule({
  imports: [
    CommonModule,
    EventsMaterialModule,
    FlexLayoutModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EventsIndexComponent,
    EventsCardComponent,
    EventsHighlightListComponent,
    EventsCreateComponent,
    EventsDetailComponent
  ]
})
export class EventsModule { }
