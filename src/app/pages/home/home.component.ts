import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

interface Facultad {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Heydi', weight: 97100408555, symbol: 'DISERTIC'},
  { name: 'Layday', weight: 97100408555, symbol: 'DISERTIC'},
  { name: 'Oscar', weight: 97100408555, symbol: 'DISERTIC'},
  { name: 'Dianette', weight: 97100408555, symbol: 'DISERTIC'},
  { name: 'Carlos', weight: 97100408555, symbol: 'DISERTIC'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  facultades: Facultad[] = [
    {value: 'steak-0', viewValue: 'Facultad de Ingeniería Informática'},
    {value: 'pizza-1', viewValue: 'Facultad de Ingeniería Civil'},
    {value: 'tacos-2', viewValue: 'Facultad de Ingeniería Mecánica'},
  ];

  departamentos: Facultad[] = [
    {value: 'steak-0', viewValue: 'Departamento de Ingeniería de Software'},
    {value: 'pizza-1', viewValue: 'Departamento de Inteligencia Artificial'},
    {value: 'tacos-2', viewValue: 'Departamento de Bases de Datos'},
  ];

}

