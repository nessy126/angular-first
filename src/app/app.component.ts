import { Component, OnInit, OnDestroy, Input, ViewEncapsulation } from '@angular/core';
import { IProduct } from './models/products';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { IWords } from './models/words';
import { WordsService } from './services/words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-app';
  loading: boolean = false
  products$: Observable<IProduct[]>
  words$: Observable<IWords[]>
  term = ""

  constructor(
    private productsService: ProductsService,
    private wordsService: WordsService
    ) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
    this.words$ = this.wordsService.getAll().pipe(
      tap(() => this.loading = false)
    )
    console.log(this.words$);
    // this.productsService.getAll().subscribe( products => {
    //   this.products = products
    //   this.loading = false
    //  })
  }
  ngOnDestroy() { // перед удалением компонента - размонтирование
    console.log('OnDestroy')
  }
}
