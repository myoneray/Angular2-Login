/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaobaoComponent } from './taobao.component';

describe('TaobaoComponent', () => {
  let component: TaobaoComponent;
  let fixture: ComponentFixture<TaobaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaobaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaobaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
