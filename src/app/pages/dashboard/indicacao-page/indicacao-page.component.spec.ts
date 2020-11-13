import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicacaoPageComponent } from './indicacao-page.component';

describe('IndicacaoPageComponent', () => {
  let component: IndicacaoPageComponent;
  let fixture: ComponentFixture<IndicacaoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicacaoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
