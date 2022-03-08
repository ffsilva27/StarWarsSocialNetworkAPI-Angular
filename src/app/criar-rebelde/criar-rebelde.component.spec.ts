import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarRebeldeComponent } from './criar-rebelde.component';

describe('CriarRebeldeComponent', () => {
  let component: CriarRebeldeComponent;
  let fixture: ComponentFixture<CriarRebeldeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarRebeldeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarRebeldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
