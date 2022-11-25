import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit, OnChanges {
  phone = '+491772569756';
  user = {
    name: 'Jons',
    surname: 'Doe',
  };
  boldText = `<b>I'm a bold text</b>`;
  login = ''
  password = ''

  constructor() {}

  get fullName() {
    return this.user.name + ' ' + this.user.surname;
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.updatePhone();
    }, 3000);
  }

  updatePhone() {
    this.phone = Math.round(Math.random() * 1000000) + '';
  }

  onInput(event: Event, num: number, user: object) {
    const target = event.target as HTMLInputElement;
    this.phone = target.value;
    // console.log(event);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.user.name);
  }

  onSubmit() {
    if(this.login && this.password) {
      alert(`You are autorized as ${this.login} with password ${this.password}`)
      console.log(this.login, this.password);
      this.login = this.password = ''
    }
    alert(`login and password are required fields!`)
  }

}
