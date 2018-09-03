import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from './shared.material.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedMaterialModule
    ],
    declarations: [ LoadingSpinnerComponent, ToolbarComponent ],
    exports: [ LoadingSpinnerComponent, ToolbarComponent ]
})
export class SharedModule { }
