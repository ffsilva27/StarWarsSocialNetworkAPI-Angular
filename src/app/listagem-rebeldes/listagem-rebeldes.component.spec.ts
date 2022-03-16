import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemRebeldesComponent } from './listagem-rebeldes.component';

describe('ListagemRebeldesComponent', () => {
  let component: ListagemRebeldesComponent;
  let fixture: ComponentFixture<ListagemRebeldesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemRebeldesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemRebeldesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
