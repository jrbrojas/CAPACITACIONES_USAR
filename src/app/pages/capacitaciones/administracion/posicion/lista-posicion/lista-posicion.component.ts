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
      numeroSugerido : '1',
      codigoCategoria : 'C001'
    },
    {
      codigo : 'LA',
      tarea : 'Coordinacion',
      asignacion : 'Oficial de Planificacion',
      numeroSugerido : '1',
      codigoCategoria : 'C001'
    },
    {
      codigo : 'OP',
      tarea : 'Planeacion / Seguimiento',
      asignacion : 'Oficial de Planificacion',
      numeroSugerido : '1',
      codigoCategoria : 'C001'
    },
    {
      codigo : 'OE',
      tarea : 'Enlace / Media / Reportes',
      asignacion : 'Oficial de Enlace',
      numeroSugerido : '1',
      codigoCategoria : 'C001'
    },
    {
      codigo : 'IE',
      tarea : 'Evaluacion y analisis',
      asignacion : 'Ingeniero Estructural',
      numeroSugerido : '1',
      codigoCategoria : 'C001'
    },
    {
      codigo : 'OS',
      tarea : 'Seguridad y Proteccion',
      asignacion : 'Oficial de Seguridad',
      numeroSugerido : '1',
      codigoCategoria : 'C001'
    },
    {
      codigo : 'OC',
      tarea : 'RDC / UCC',
      asignacion : 'Oficial de Coordinacion',
      numeroSugerido : '2',
      codigoCategoria : 'C001'
    },
    {
      codigo : 'EBT',
      tarea : 'Busqueda Tecnica',
      asignacion : 'Especialista de Busqueda Tecnica',
      numeroSugerido : '2',
      codigoCategoria : 'C002'
    },
    {
      codigo : 'AP',
      tarea : 'Busqueda Canina',
      asignacion : 'Adiestramiento de Perros',
      numeroSugerido : '4',
      codigoCategoria : 'C002'
    },
    {
      codigo : 'EMATPEL',
      tarea : 'Evaluacion de Materiales Peligrosos',
      asignacion : 'Especialista en MATPEL',
      numeroSugerido : '2',
      codigoCategoria : 'C002'
    },
    {
      codigo :'LERTE',
      tarea : 'Rompimiento y ruptura; corte; apuntalamiento; cuerta tecnica',
      asignacion : 'Lider Equipo de Rescate y Tecnicos de rescate',
      numeroSugerido : '14 (2 Equipos: 1 lider y 6 rescatistas c/u)',
      codigoCategoria : 'C003'
    },
    {
      codigo : 'EAP',
      tarea : 'Levantamiento y movimiento',
      asignacion : 'Especialista en aparejos pesados',
      numeroSugerido : '2',
      codigoCategoria : 'C003'
    },
    {
      codigo : 'EMMPE',
      tarea : 'Gestion del equipo medico: Coordinacion y administracion del equipo medico. Integracion con infraestructura sanitaria local. Atencion al Equipo (incluido Perros) y a las victimas encontradas',
      asignacion : 'Especialista Medico y/o Medico/Paramedico o Enfermera',
      numeroSugerido : '3',
      codigoCategoria : 'C004'
    },
    {
      codigo : 'LEL',
      tarea : 'BoO',
      asignacion : 'Lider del Equipo de logistica',
      numeroSugerido : '1',
      codigoCategoria : 'C005'
    },
    {
      codigo : 'EDT',
      tarea : 'Agua',
      asignacion : 'Especialista en Transporte',
      numeroSugerido : '1',
      codigoCategoria : 'C005'
    },
    {
      codigo : 'EEL',
      tarea : 'Alimentacion',
      asignacion : 'Especialista en logistica',
      numeroSugerido : '1',
      codigoCategoria : 'C005'
    },
    {
      codigo : 'AB',
      tarea : 'Capacidad de transporte y combustible',
      asignacion : 'Administrador de base',
      numeroSugerido : '2',
      codigoCategoria : 'C005'
    },
    {
      codigo : 'EC',
      tarea : 'Comunicaciones',
      asignacion : 'Especialista en Comunicacion',
      numeroSugerido : '1',
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
