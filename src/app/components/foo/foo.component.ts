import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IUser } from '../../data/users';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
})

export class FooComponent implements OnInit {
  @Input()
  title = 'Input and Output';
  @Input() counter = 0;
  @Output() counterChange = new EventEmitter<number>();
  expression = true;
  deepObject: any = null
  users: IUser[] = [
    {
      id: 1,
      name: 'Anastasiia',
      template: 'bold'
    },
    {
      id: 2,
      name: 'Liubov',
      template: 'italic'
    },
    {
      id: 3,
      name: 'Bogdan',
      template: 'unknown'
    }
  ]

  orangeClass = ["orange", "widdth"]
  blueClass = { red: true, green: false, 'dark-blue': true }

  constructor() { }

  ngOnInit(): void { }

  increement() {
    this.counterChange.emit(this.counter + 1);
  }
  dicreement() {
    this.counterChange.emit(this.counter - 1);
  }

  generateUser() {
    this.deepObject = {
      user: {
        name: "Anna",
        surname: "Titova"
      }
    }
  }

  trackBy(index: number, user: IUser) {
    return user.id
  }
}
