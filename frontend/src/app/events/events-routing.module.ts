import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsIndexComponent } from './views/index/events-index.component';

const routes: Routes = [
  {
    path: '',
    component: EventsIndexComponent
  },
  {
    path: 'create',
    component: EventsIndexComponent
  },
  {
    path: ':id',
    component: EventsIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
