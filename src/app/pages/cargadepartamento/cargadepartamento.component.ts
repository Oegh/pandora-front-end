import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cargadepartamento',
  templateUrl: './cargadepartamento.component.html',
  styleUrls: ['./cargadepartamento.component.css']
})
export class CargadepartamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Trabajar con los datos online de SIGENU' },
    { value: 'pizza-1', viewValue: 'Trabajar con los datos almacenados en Pandora' },
  ];
  cursos: Food[] = [
    { value: 'steak-0', viewValue: '2022' },
    { value: 'pizza-1', viewValue: '2021' },
    { value: 'pizza-2', viewValue: '2020' },
    { value: 'pizza-3', viewValue: '2019' },
  ];
  semestres: Food[] = [
    { value: 'steak-0', viewValue: '1er Período' },
    { value: 'pizza-1', viewValue: '2do Período' },
    { value: 'pizza-1', viewValue: '3er Período' },
  ];

}
