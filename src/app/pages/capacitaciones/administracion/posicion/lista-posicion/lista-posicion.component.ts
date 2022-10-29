import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';
import { CrearPosicionComponent } from '../crear-posicion/crear-posicion.component';
import { EditarPosicionComponent } from '../editar-posicion/editar-posicion.component';

export interface Categoria {
  nombre : string;
  codigo : string;
}

export interface Curso {
  codigo : string;
  tarea : string;
  asignacion : string;
  numeroSugerido : string;
  codigoCategoria : string;
}

@Component({
  selector: 'app-lista-posicion',
  templateUrl: './lista-posicion.component.html',
  styleUrls: ['./lista-posicion.component.scss']
})
export class ListaPosicionComponent implements OnInit {

  public arrCategorias : Array<Categoria> = []
  public arrCurso : Array<Curso> = []

  constructor(
    private modalService : NgbModal,
    private alertService : AlertService
  ) { }

  ngOnInit(): void {


    this.arrCategorias.push(
      {
        codigo : 'C001',
        nombre : 'Gestion'
      },
      {
        codigo : 'C002',
        nombre : 'Busqueda'
      },
      {
        codigo : 'C003',
        nombre : 'Rescate'
      },
      {
        codigo : 'C004',
        nombre : 'Medica'
      },
      {
        codigo : 'C005',
        nombre : 'Logistica'
      }
    )

    this.arrCurso.push({
      
      codigo : 'LE',
      tarea : 'Comando',
      asignacion : 'Lider de Equipo',
      numeroSugerido : 'Liviano',
      codigoCategoria : 'C001'
    },
    {
      codigo : 'LA',
      tarea : 'Coordinacion',
      asignacion : 'Lider de Equipo Designado',
      numeroSugerido : 'Liviano',
      codigoCategoria : 'C001'
    },
    {
      codigo : 'OP',
      tarea : 'Oficial de Planificación',
      asignacion : 'Oficial de Planificacion',
      numeroSugerido : 'Liviano',
      codigoCategoria : 'C001'
    },
    {
      codigo : 'OE',
      tarea : 'Oficial de Seguridad',
      asignacion : 'Oficial de Seguridad',
      numeroSugerido : 'Liviano',
      codigoCategoria : 'C001'
    },
    {
      codigo : 'IE',
      tarea : 'Lider de Tripulación',
      asignacion : 'Ingeniero Estructural',
      numeroSugerido : 'Liviano',
      codigoCategoria : 'C002'
    },
    {
      codigo : 'OS',
      tarea : 'Equipio de Busqueda y Rescato (incluyendo perros)',
      asignacion : 'Equipio de Busqueda y Rescato (incluyendo perros)',
      numeroSugerido : 'Liviano',
      codigoCategoria : 'C002'
    },
    {
      codigo : 'OC',
      tarea : 'RDC / UCC',
      asignacion : 'Especializta Médico y/o Médico/Paramédico/Enfermera',
      numeroSugerido : 'Liviano',
      codigoCategoria : 'C004'
    },
    {
      codigo : 'EBT',
      tarea : 'Busqueda Tecnica',
      asignacion : 'Gestor del Equipo de Logística',
      numeroSugerido : 'Liviano',
      codigoCategoria : 'C005'
    },
    {
      codigo : 'AP',
      tarea : 'Busqueda Canina',
      asignacion : 'Responsable de Logística',
      numeroSugerido : 'Liviano',
      codigoCategoria : 'C005'
    },
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
