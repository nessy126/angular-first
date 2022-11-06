import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ISettings } from '../../../models/products';

@Component({
  selector: 'app-counter-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent  {
  public oneStep: number = +"1"
  public defaultNumber: number = +"0"

  @Input() count: number = this.defaultNumber
  @Output() onSave = new EventEmitter()

  public save($event: object): void {
    const settings: ISettings = {
      step: this.oneStep < 1 ? 1 : this.oneStep,
      default: this.defaultNumber
    }
    this.onSave.emit(settings)
    console.log(this.onSave);
  }


}
