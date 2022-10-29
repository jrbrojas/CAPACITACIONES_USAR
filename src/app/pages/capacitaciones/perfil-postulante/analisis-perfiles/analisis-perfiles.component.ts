import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPerfilesComponent } from '../add-perfiles/add-perfiles.component';

export interface administrado {
  dni : string;
  apellidosNombres: string;
  tipoCertificacion : string;
  aptitudFisica: string;
  nivelExperiencia: string;
  estado : string;
}

@Component({
  selector: 'app-analisis-perfiles',
  templateUrl: './analisis-perfiles.component.html',
  styleUrls: ['./analisis-perfiles.component.scss']
})
export class AnalisisPerfilesComponent implements OnInit {

  public boolOp = true
  public arrAdministrados : administrado[] = []

  arrCursos: any [] = [
    {        
      nivel: 'Básico',
      nombre : 'Curso Básico del Sistema de Comando de Incidentes',
      descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
      codigo : 'D-311',
    },
    {        
      nivel: 'Básico',
      nombre : 'Primera Respuesta a Incidentes con Materiales Peligrosos',
      descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
      codigo : 'P-101',
    },
    {        
      nivel: 'Intermedio',
      nombre : 'Rescate con Cuerdas',
      descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
      codigo : 'FI-110',
    },
    {        
      nivel: 'Intermedio',
      nombre : 'Curso de Primeros Auxilios y Atención PreHospitalaria',
      descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
      codigo : 'FI-210',
    },
    {        
      nivel: 'Básico',
      nombre : 'Curso de rescate es estructuras colapsadas en el Nivel Liviano  ',
      descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
      codigo : 'L-180',
    },
    {        
      nivel: 'Básico',
      nombre : 'Curso de rescate en espacios confinados',
      descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
      codigo : 'L-280',
    },
    {        
      nivel: 'Básico',
      nombre : 'Curso de Instructores',
      descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
      codigo : 'M-410',
    },
    {        
      nivel: 'Básico',
      nombre : 'Curso de búsqueda canina',
      descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
      codigo : 'M-410',
    },
    
  ]
  
  constructor(
    private modalService : NgbModal,
  ) { }

  ngOnInit(): void {
    this.arrAdministrados.push({
      dni : '74239485',
      apellidosNombres : 'Olivera Perez Manuel',
      tipoCertificacion : 'GIRED',
      aptitudFisica: 'Arduo',
      nivelExperiencia: 'Media',
      estado : 'Activo'
    },
    {
      dni : '12345678',
      apellidosNombres : 'Caballero Ramos Lucas',
      tipoCertificacion : 'USAR',
      aptitudFisica: 'Moderado',
      nivelExperiencia: 'Alta',
      estado : 'Activo'
    },
    {
      dni : '74239485',
      apellidosNombres : 'Paredes Sanchez María',
      tipoCertificacion : 'GIRED',
      aptitudFisica: 'Ligero',
      nivelExperiencia: 'Baja',
      estado : 'Activo'
    })
  }

  verPerfil(){
    const modalRef = this.modalService.open(AddPerfilesComponent, {
        size: 'xl',
        ariaLabelledBy: 'modal',
        centered: true,
        windowClass: 'modal',
        backdrop: 'static'
    })

    modalRef.componentInstance.idUsuario = 1;
    modalRef.result.then((res) => {

    }, (reason) => {

    })

  }

  limpiarFecha(){

  }
  filtrar(){
    this.boolOp = false;
  }

}
