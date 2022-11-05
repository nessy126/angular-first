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

  public step: number = 1;
  public default: number = 0;

  public ngDoCheck() { //после обновления
    console.log('DoCheck');
    this.isNull = this.count === this.default
    this.isTen = this.count === 10
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
    this.step = settings.step
    this.default = settings.default
    this.count = settings.default
  }


}
