import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {
  _showSpinner: boolean;
  @Input()
  set showSpinner(showSpinner: boolean) {
    this._showSpinner = showSpinner || false;
  }
  get showSpinner(): boolean { return this._showSpinner; }
}
