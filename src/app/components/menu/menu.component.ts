import { Component, HostBinding, HostListener, AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @HostBinding('class')
  hostClass = 'hidden'
  skipCklick = false

  title = 'appComponent'

  constructor() { }

  ngOnInit(): void {
  }


  @HostListener('click', ['$event'])
  hostCklick(event: Event) {
     event.stopPropagation()
  }

  show() {
    this.hostClass = ''
    this.skipCklick = true
  }

  @HostListener('window:click', ['$event'])
  hide() {

    if (this.skipCklick) {
      this.skipCklick = false
      return
    }

    this.hostClass = 'hidden'
  }



}
