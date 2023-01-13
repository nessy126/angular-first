import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWigetComponent } from './todo-wiget.component';

describe('TodoWigetComponent', () => {
  let component: TodoWigetComponent;
  let fixture: ComponentFixture<TodoWigetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoWigetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoWigetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
