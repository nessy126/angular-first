import {
  Component, Input, OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import { from, fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() title: string = 'before init parent';
  destroy$ = new Subject


  constructor() {
    // console.log('ParentComponent.constructor', this.title);
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(console.log('ParentComponent.ngOnChanges', changes, 'thisTitle',this.title));
  }

  ngOnInit(): void {
    // console.log('ParentComponent.ngOnInit', this.title);

    // console.log(this.destroy$);
    fromEvent(document, 'click').pipe(
      takeUntil(this.destroy$)
      ).subscribe(console.log)
      // console.log(this.destroy$);
    }

  ngDoCheck(): void {
    // console.log('ParentComponent.ngDoCheck', this.title);
  }

  ngAfterContentInit(): void {
    // console.log('ParentComponent.ngAfterContentInit', this.title);
  }

  ngAfterContentChecked(): void {
    // console.log('ParentComponent.ngAfterContentChecked', this.title);
  }

  ngAfterViewInit(): void {
    // console.log('ParentComponent.ngAfterViewInit', this.title);
  }

  ngAfterViewChecked(): void {
    // console.log('ParentComponent.ngAfterViewChecked', this.title);
  }

  ngOnDestroy(): void {
    // console.log('ParentComponent.ngOnDestroy', this.title);

    this.destroy$.next(true)
    this.destroy$.complete()

    console.log(this.destroy$);
  }


}
