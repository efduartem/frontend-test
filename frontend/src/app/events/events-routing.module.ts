import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsIndexComponent } from './views/index/events-index.component';
import { EventsDetailComponent } from './views/detail/events-detail.component';
import { EventsCreateComponent } from './views/create/events-create.component';

const routes: Routes = [
  {
    path: '',
    component: EventsIndexComponent
  },
  {
    path: 'create',
    component: EventsCreateComponent
  },
  {
    path: ':id',
    component: EventsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
