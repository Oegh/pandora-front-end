import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargadepartamentoComponent } from './cargadepartamento.component';

describe('CargadepartamentoComponent', () => {
  let component: CargadepartamentoComponent;
  let fixture: ComponentFixture<CargadepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargadepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargadepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
