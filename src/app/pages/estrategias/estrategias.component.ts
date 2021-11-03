import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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

  closeResult = '';
  displayedColumns: string[] = ['Estrategias', ' '];
  dataSource = ELEMENT_DATA;
  expandedElement: PeriodicElement | null;

  constructor(private modalService: NgbModal) {
    this.expandedElement = null;

  }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

export interface PeriodicElement {
  Estrategias: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Estrategias: "ESTRATEGIA: GESTIÓN DE LA EDUCACIÓN SUPERIOR",
    description: `Desarrollar el trabajo político ideológico con los cuadros, trabajadores y estudiantes, para alcanzar las transformaciones necesarias que consoliden un claustro revolucionario de excelencia y formen profesionales competentes comprometidos con la Revolución, que sean capaces de contribuir a la implementación de los Lineamientos de la Política Económica y Social del Partido y la Revolución y enfrentar a la subversión ideológica del enemigo.`
  }, {
    Estrategias: "ESTRATEGIA: GESTIÓN DE LA EDUCACIÓN SUPERIOR",
    description: `Desarrollar el trabajo político ideológico con los cuadros, trabajadores y estudiantes, para alcanzar las transformaciones necesarias que consoliden un claustro revolucionario de excelencia y formen profesionales competentes comprometidos con la Revolución, que sean capaces de contribuir a la implementación de los Lineamientos de la Política Económica y Social del Partido y la Revolución y enfrentar a la subversión ideológica del enemigo.`
  }, {
    Estrategias: "ESTRATEGIA: GESTIÓN DE LA EDUCACIÓN SUPERIOR",
    description: `Desarrollar el trabajo político ideológico con los cuadros, trabajadores y estudiantes, para alcanzar las transformaciones necesarias que consoliden un claustro revolucionario de excelencia y formen profesionales competentes comprometidos con la Revolución, que sean capaces de contribuir a la implementación de los Lineamientos de la Política Económica y Social del Partido y la Revolución y enfrentar a la subversión ideológica del enemigo.`
  },
];



