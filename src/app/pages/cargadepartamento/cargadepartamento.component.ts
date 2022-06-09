import { Component, OnInit } from '@angular/core';

export interface Dessert {
  calories: string;
  name: string;
}

interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: number;
  position: string;
  weight: number;
  symbol: number;
  cp: number;
  s: number;
  pl: number;
  t: number;
  ce: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Bases de Datos', name: 140, weight: 40, symbol: 0, cp: 1, s: 1, pl: 1, t: 1, ce: 1 },
  { position: 'Bases de Datos', name: 140, weight: 40, symbol: 0, cp: 1, s: 1, pl: 1, t: 1, ce: 1 },
  { position: 'Bases de Datos', name: 140, weight: 40, symbol: 0, cp: 1, s: 1, pl: 1, t: 1, ce: 1 },
  { position: 'Bases de Datos', name: 140, weight: 40, symbol: 0, cp: 1, s: 1, pl: 1, t: 1, ce: 1 },
  { position: 'Bases de Datos', name: 140, weight: 40, symbol: 0, cp: 1, s: 1, pl: 1, t: 1, ce: 1 },
];

@Component({
  selector: 'app-cargadepartamento',
  templateUrl: './cargadepartamento.component.html',
  styleUrls: ['./cargadepartamento.component.css']
})
export class CargadepartamentoComponent implements OnInit {
  desserts: Dessert[] = [
    { name: 'C', calories: 'Conferencia' },
    { name: 'CP', calories: 'CLase Práctica' },
    { name: 'S', calories: 'Seminario' },
    { name: 'PL', calories: 'Práctica Laboratorio' },
    { name: 'T', calories: 'Taller' },
    { name: 'CE', calories: 'Clase Encuentro' },
    { name: 'Horas Plan', calories: 'Horas de la asignatura según el Plan de Estudio' },
    { name: 'Horas Asig', calories: 'Horas de la asignatura que se han distribuido hasta el momento' },
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  sortedData: Dessert[];

  constructor() { this.sortedData = this.desserts.slice(); }

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

