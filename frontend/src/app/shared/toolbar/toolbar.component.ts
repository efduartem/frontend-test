import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  _showBackButton: boolean;
  @Input()
  set showBackButton(showBackButton: boolean) {
    this._showBackButton = showBackButton || false;
  }
  get showBackButton(): boolean { return this._showBackButton; }
}
