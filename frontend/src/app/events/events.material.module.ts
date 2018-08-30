import { NgModule } from '@angular/core';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatTooltipModule, MatMenuModule } from '@angular/material';

@NgModule({
    imports: [
        MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatTooltipModule, MatMenuModule
    ],
    exports: [
        MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatTooltipModule, MatMenuModule
    ],
})
export class EventsMaterialModule { }
