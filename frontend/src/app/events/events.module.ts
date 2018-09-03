import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsMaterialModule } from './events.material.module';
import { HttpClientModule } from '@angular/common/http';

import { EventsIndexComponent } from './views/index/events-index.component';
import { EventsCardComponent } from './components/events-card/events-card.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventsDetailComponent } from './views/detail/events-detail.component';
import { EventsCreateComponent } from './views/create/events-create.component';

import { EventsService } from './events.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EventsMaterialModule,
    FlexLayoutModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    EventsIndexComponent,
    EventsCardComponent,
    EventsListComponent,
    EventsCreateComponent,
    EventsDetailComponent
  ],
  providers: [EventsService]
})
export class EventsModule { }
