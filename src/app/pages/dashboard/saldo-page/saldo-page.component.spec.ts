import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoPageComponent } from './saldo-page.component';

describe('SaldoPageComponent', () => {
  let component: SaldoPageComponent;
  let fixture: ComponentFixture<SaldoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaldoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
