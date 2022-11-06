import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IProduct } from './models/products';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';

// @Input count: number;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-app';
  loading: boolean = false
  products$: Observable<IProduct[]>
  term = ""

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
    // this.productsService.getAll().subscribe( products => {
    //   this.products = products
    //   this.loading = false
    //  })
  }
  ngOnDestroy() { // перед удалением компонента - размонтирование
    console.log('OnDestroy')
  }
}
