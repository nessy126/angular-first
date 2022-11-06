import { Component, DoCheck } from '@angular/core';
import { ISettings } from '../../../models/products';

@Component({
  selector: 'app-counter-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})


export class ContentComponent implements DoCheck {
  public count: number = 0;
  public isDisabled: boolean = true;
  public isNull: boolean = false;
  public isTen: boolean = false;

  public step: number = 3;
  public default: number = 1;

  public ngDoCheck() { //после обновления
    const isItNull = ():boolean => {
      if (this.count - this.step < 0) {
        return true
      }
      return false
    }
    const isItTen = ():boolean => {
      if (this.count + this.step > 10) {
        return true
      }
      return false
    }

    this.isNull = isItNull()
    this.isTen = isItTen()
  }

  public add(): void {
    this.isDisabled = false
      this.count += this.step
  }

  public subtruct(): void {
    this.isDisabled = false
      this.count -= this.step

  }
  public defaultCount(): void {
    this.count = this.default
  }

  public getSettings(settings: ISettings): void {
    if(settings.step === 0) {
      this.step = 1
    }

    this.step = settings.step
    this.default = settings.default
    this.count = settings.default
  }


}
