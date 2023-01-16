import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CounterContentComponent } from './components/counter/content/content.component';
import { ProductComponent } from './components/product/product.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { TodoModule } from './modules/todo/todo.module';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { HeaderComponent } from './components/header/header.component';
import { SettingsComponent } from './components/counter/settings/settings.component';
import { BindComponent } from './components/bind/bind.component';
import { CounterComponent } from './components/counter/counter.component';
import { VocabularyComponent } from './components/vocabulary/vocabulary.component';
import { VocabularyListComponent } from './components/vocabulary/vocabulary-list/vocabulary-list.component';
import { BindingComponent } from './components/binding/binding.component';
import { FooComponent } from './components/foo/foo.component';
import { FormWordComponent } from './components/vocabulary/form-word/form-word.component';
import { ContentComponent } from './components/content/content.component';
import { MenuComponent } from './components/menu/menu.component';
import { ParentComponent } from './components/lifecycleHooks/parent/parent.component';
import { ChildComponent } from './components/lifecycleHooks/child/child.component';
import { FromEventComponent } from './components/from-event/from-event.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    HeaderComponent,
    CounterContentComponent,
    SettingsComponent,
    BindComponent,
    CounterComponent,
    VocabularyComponent,
    VocabularyListComponent,
    BindingComponent,
    FooComponent,
    FormWordComponent,
    ContentComponent,
    MenuComponent,
    ParentComponent,
    ChildComponent,
    FromEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
