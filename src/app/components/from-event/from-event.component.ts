import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {
  search$ = new Observable(observer => {
    // console.log("Start in observable");
    // observer.next(1)
    // observer.next(2)
    // observer.next(3)
    // console.log("End in observable");
  })

  constructor() { }

  ngOnInit(): void {
    this.search$.subscribe((n) => console.log(n))
  }

}
