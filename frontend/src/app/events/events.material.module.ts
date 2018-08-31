import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import {
    MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatTooltipModule, MatMenuModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatDatepickerModule, MatSnackBarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatTooltipModule, MatMenuModule,
        MatFormFieldModule, MatInputModule, MatTableModule, MatDatepickerModule, MatNativeDateModule,
        MatSnackBarModule
    ],
    exports: [
        MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatTooltipModule, MatMenuModule,
        MatFormFieldModule, MatInputModule, MatTableModule, MatDatepickerModule, MatNativeDateModule,
        MatSnackBarModule
    ],
})
export class EventsMaterialModule { }
