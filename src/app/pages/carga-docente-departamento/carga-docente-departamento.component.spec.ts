import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDocenteDepartamentoComponent } from './carga-docente-departamento.component';

describe('CargaDocenteDepartamentoComponent', () => {
  let component: CargaDocenteDepartamentoComponent;
  let fixture: ComponentFixture<CargaDocenteDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaDocenteDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDocenteDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
