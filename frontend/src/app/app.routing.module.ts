import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'events', loadChildren: './events/events.module#EventsModule' },
    { path: '**', pathMatch: 'full', redirectTo: 'events' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
