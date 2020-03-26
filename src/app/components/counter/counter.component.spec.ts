import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase counter value', () => {
    component.increase();
    component.increase();

    expect(component.counter).toBe(2);
  });

  it('should decrease counter value', () => {
    component.decrease();

    expect(component.counter).toBe(-1);
  });

  it('should show "Counter:" label', () => {
    const counterDiv = el.queryAll(By.css('.counter'));

    expect(counterDiv.length).toBe(1);
  });
});
