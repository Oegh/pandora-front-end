import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Dessert {
  calories: string;
  name: string;
}

interface Food {
  value: string;
  viewValue: string;
}

export interface DialogData {
  animal: string;
  name: string;
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
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Bases de Datos', name: 140, weight: 40, symbol: 0, cp: 1, s: 1, pl: 1, t: 1, ce: 1, total: 10 },
  { position: 'Bases de Datos', name: 140, weight: 40, symbol: 0, cp: 1, s: 1, pl: 1, t: 1, ce: 1, total: 10 },
  { position: 'Bases de Datos', name: 140, weight: 40, symbol: 0, cp: 1, s: 1, pl: 1, t: 1, ce: 1, total: 10 },
  { position: 'Bases de Datos', name: 140, weight: 40, symbol: 0, cp: 1, s: 1, pl: 1, t: 1, ce: 1, total: 10 },
  { position: 'Bases de Datos', name: 140, weight: 40, symbol: 0, cp: 1, s: 1, pl: 1, t: 1, ce: 1, total: 10 },
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
  animal: string = "";
  name: string = "";

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'cp', 's', 'pl', 't', 'ce', 'symbol', 'cp', 's', 'pl', 't', 'ce', 'symbol', 'cp', 's', 'pl', 't', 'ce', 'total'];
  dataSource = ELEMENT_DATA;

  sortedData: Dessert[];

  constructor(public dialog: MatDialog) { this.sortedData = this.desserts.slice(); }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '100%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

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

@Component({
  selector: 'app-cargadepartamento',
  templateUrl: './dialog-overview-example-dialog.html',
  styleUrls: ['./cargadepartamento.component.css']
})
export class DialogOverviewExampleDialog {
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
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(
    public dialogRef: MatDialogRef<DialogAdicionarAsignatura>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(DialogAdicionarAsignatura, {
      width: '50%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-cargadepartamento',
  templateUrl: './dialog-adicionar-asignatura.html',
  styleUrls: ['./cargadepartamento.component.css']
})
export class DialogAdicionarAsignatura {
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
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

