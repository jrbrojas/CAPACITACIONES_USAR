import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';
import { CrearPosicionComponent } from '../crear-posicion/crear-posicion.component';
import { EditarPosicionComponent } from '../editar-posicion/editar-posicion.component';

export interface Posicion {
  nombre : string;
  codigo : string;
  calificadoComo : string;
  aptitudFisica : number;
}

export interface Categoria {
  codigoPosicion : string;
  nombre : string;
}

export interface CapacitacionRequerida {
  codigoPosicion : string;
  codigo : string;
}

export interface CapacitacionAdicional {
  codigoPosicion : string;
  codigo : string;
}

export interface AptitudFisica {
  codigoPosicion : string;
  codigo : number;
}

@Component({
  selector: 'app-lista-posicion',
  templateUrl: './lista-posicion.component.html',
  styleUrls: ['./lista-posicion.component.scss']
})
export class ListaPosicionComponent implements OnInit {

  public arrPosiciones : Array<Posicion> = []
  public arrCategorias : Array<Categoria> = []
  public arrCapacitacionesRequeridas : Array<CapacitacionRequerida> = []
  public arrCapacitacionesAdicionales : Array<CapacitacionAdicional> = []
  public arrAptitudFisica : Array<AptitudFisica> = []

  constructor(
    private modalService : NgbModal,
    private alertService : AlertService
  ) { }

  ngOnInit(): void {
    this.arrAptitudFisica.push(
      {
        codigoPosicion : 'CIF2',
        codigo : 1,
      },
      {
        codigoPosicion : 'CIF1',
        codigo : 2,
      }
    )

    this.arrCategorias.push(
      {
        codigoPosicion : 'CIF2',
        nombre : 'Gestión'
      }
      )

    this.arrPosiciones.push(
      {
        nombre : 'Lider de Equipo',
        codigo : 'CIF2',
        calificadoComo : null,
        aptitudFisica : 1
      }
    )

    this.arrCapacitacionesRequeridas.push(
      {
        codigoPosicion : 'CIF2',
        codigo : 'SCI-100'
      },
      {
        codigoPosicion : 'CIF2',
        codigo : 'L-180',
      },
      {
        codigoPosicion : 'CIF2',
        codigo : 'CR-130'
      },
      {
        codigoPosicion : 'CIF2',
        codigo : 'S-130'
      },
      {
        codigoPosicion : 'CIF2',
        codigo : 'S-190'
      }
    )

    this.arrCapacitacionesAdicionales.push(
      {
        codigoPosicion : 'CIF2',
        codigo : null
      }
    )
  }

  registrarPosicion(){
    this.modalService.open(CrearPosicionComponent, {
      
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    
    })
  }

  eliminarPosicion(){
    this.alertService.questionAlertConfirm(
      '¿Está seguro que desea eliminar la posicion?',
      '',
      'Si, Eliminar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
       
        } else {
  
        }
      }
    );
  }

  editarVerPosicion(){
    this.modalService.open(EditarPosicionComponent, {
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    
    })
  }

}
