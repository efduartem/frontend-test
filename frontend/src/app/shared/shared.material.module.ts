import { NgModule } from '@angular/core';
import {
    MatIconModule, MatButtonModule, MatProgressSpinnerModule, MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatProgressSpinnerModule, MatToolbarModule, MatIconModule, MatButtonModule
    ],
    exports: [
        MatProgressSpinnerModule, MatToolbarModule, MatIconModule, MatButtonModule
    ],
})
export class SharedMaterialModule { }
