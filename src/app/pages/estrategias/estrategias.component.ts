import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-estrategias',
  templateUrl: './estrategias.component.html',
  styleUrls: ['./estrategias.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class EstrategiasComponent implements OnInit {

  displayedColumns: string[] = ['Estrategia', ' '];
  dataSource = ELEMENT_DATA;
  expandedElement: PeriodicElement | null;

  constructor() { 
    this.expandedElement = null;
  }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  Estrategia: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Estrategia: "ESTRATEGIA: GESTIÓN DE LA EDUCACIÓN SUPERIOR",
    description: `Desarrollar el trabajo político ideológico con los cuadros, trabajadores y estudiantes, para alcanzar las transformaciones necesarias que consoliden un claustro revolucionario de excelencia y formen profesionales competentes comprometidos con la Revolución, que sean capaces de contribuir a la implementación de los Lineamientos de la Política Económica y Social del Partido y la Revolución y enfrentar a la subversión ideológica del enemigo.`
  }, {
    Estrategia: "ESTRATEGIA: GESTIÓN DE LA EDUCACIÓN SUPERIOR",
    description: `Desarrollar el trabajo político ideológico con los cuadros, trabajadores y estudiantes, para alcanzar las transformaciones necesarias que consoliden un claustro revolucionario de excelencia y formen profesionales competentes comprometidos con la Revolución, que sean capaces de contribuir a la implementación de los Lineamientos de la Política Económica y Social del Partido y la Revolución y enfrentar a la subversión ideológica del enemigo.`
  }, {
    Estrategia: "ESTRATEGIA: GESTIÓN DE LA EDUCACIÓN SUPERIOR",
    description: `Desarrollar el trabajo político ideológico con los cuadros, trabajadores y estudiantes, para alcanzar las transformaciones necesarias que consoliden un claustro revolucionario de excelencia y formen profesionales competentes comprometidos con la Revolución, que sean capaces de contribuir a la implementación de los Lineamientos de la Política Económica y Social del Partido y la Revolución y enfrentar a la subversión ideológica del enemigo.`
  }, 
];
