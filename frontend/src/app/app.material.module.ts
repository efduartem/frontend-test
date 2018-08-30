import { NgModule } from '@angular/core';
import { MatIconModule, MatToolbarModule, MatCardModule} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule, MatIconModule, MatCardModule
    ],
    exports: [
        MatToolbarModule, MatIconModule, MatCardModule
    ],
})
export class AppMaterialModule { }
