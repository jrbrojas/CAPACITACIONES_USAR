import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';
import { CrearCursoComponent } from '../crear-curso/crear-curso.component';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';

export interface Curso {
  nombre : string;
  lineaTematica : string;
  nivel : string;
  descripcion : string;
  codigo : string;
}

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.scss']
})
export class ListarCursosComponent implements OnInit {


  public arrCursos : Array<Curso> = [];

  constructor(
    private modalService : NgbModal,
    private alertService : AlertService
  ) { }

  ngOnInit(): void {
    this.arrCursos.push(
      {
        lineaTematica : 'Despacho',
        nivel: 'Intermedio',
        nombre : 'Despachador de Ataque Inicial',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'D-311',
      },
      {
        lineaTematica : 'Prevención',
        nivel: 'Básico',
        nombre : 'Prevención y Educación de Incendios Forestales',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'P-101',
      },
      {
        lineaTematica : 'Investigación',
        nivel: 'Intermedio',
        nombre : 'Operaciones de Incendios Forestales y Protección de la Escena de Origen para Primeros Respondientes',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'FI-110',
      },
      {
        lineaTematica : 'Investigación',
        nivel: 'Intermedio',
        nombre : 'Investigación de origen y causa de incendios forestales',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'FI-210',
      },
      {
        lineaTematica : 'Liderazgo',
        nivel: 'Básico',
        nombre : 'Factores Humanos en la Línea de Fuego',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'L-180',
      },
      {
        lineaTematica : 'Liderazgo',
        nivel: 'Básico',
        nombre : 'De la Subordinación al Liderazgo',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'L-280',
      },
      {
        lineaTematica : 'Manejo',
        nivel: 'Básico',
        nombre : 'Instructor Facilitador Equivalencia CPI Curso de Formación de Instructores',
        descripcion : 'Este curso es para reforzar el liderazgos frente a peligros de incendios forestales',
        codigo : 'M-410',
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Repaso Anual',
        nombre : 'Repaso del Combatiente de Incendios forestales',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'CR-130'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Introductorio',
        nombre : 'Curso Introductorio Combatiente de Incendios Forestales, Equivalencia Curso de Bombero Forestal.',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'CICIF'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Básico',
        nombre : 'Combatiente forestal',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-130'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'Combatiente de Incendios Forestales Tipo 1',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-131'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Básico',
        nombre : 'Introducción al Comportamiento de Fuego',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-190'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'Comandante de Incidente de Ataque Inicial – CI Tipo 4',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-200'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'Motobombas Portátiles y Uso Efectivo de Agua',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-211'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'Motosierras en Incendios Forestales',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-212'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'Operaciones de Supresión en Incendios de Interfase Urbano Forestal',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-215'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'Miembro de Brigada Helitransportada',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-217'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'Operaciones de ignición',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-219'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'Jefe de Brigada-Recurso Singular',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-230'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'Equipo Pesado',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-236'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'Básico de Operaciones aéreas',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-270'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'Miembro de Brigada Helitransportada',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-271'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'CCCC',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-290'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'Comandante de Incidentes de Ataque Ampliado',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-300'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'Supervisor de División',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-339'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Intermedio',
        nombre : 'Manejador de Helibases',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-371'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Avanzado',
        nombre : 'Introducción a los Cálculos de Comportamiento de Fuego',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-390'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Avanzado',
        nombre : 'Jefe de la Sección de Operaciones',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-430'
      },
      {
        lineaTematica : 'Supresion',
        nivel: 'Avanzado',
        nombre : 'Jefe de la Sección de Planificación',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-440'
      },
      {
        lineaTematica : 'Planificación',
        nivel: 'Avanzado',
        nombre : 'Jefe de la Sección de logística',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'S-450'
      },
      {
        lineaTematica : 'Logística',
        nivel: 'Introducción',
        nombre : 'Introducción al Sistema de Comando de Incidentes Equivalencia SCI- Básico del Sistema de Comando de Incidentes',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'SCI-100'
      },
      {
        lineaTematica : 'Sistema de Comando de Incidentes',
        nivel: 'Básico',
        nombre : 'Sistema de Comando de Incidentes para Recurso Singulares y Acción de los Incidentes Equivalencia con SCI-Intermedio de Sistema de Comando de Incidentes',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'SCI-200'
      },
      {
        lineaTematica : 'Sistema de Comando de Incidentes',
        nivel: 'Básico',
        nombre : 'Sistema de Comando de Incidentes para Recurso Singulares y Acción de los Incidentes Equivalencia con SCI-Intermedio de Sistema de Comando de Incidentes',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'SCI-200'
      },
      {
        lineaTematica : 'Sistema de Comando de Incidentes',
        nivel: 'Intermedio',
        nombre : 'Intermedio del Sistema de Comando de Incidentes para incidentes en expansión',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'SCI-300'
      },
      {
        lineaTematica : 'Sistema de Comando de Incidentes',
        nivel: 'Avanzado',
        nombre : 'Avanzado para comando y personal general, incidentes complejos y MACS',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'SCI-400'
      },
      {
        lineaTematica : 'Sistema de Comando de Incidentes',
        nivel: 'Ejecutivo',
        nombre : 'Ejecutivo del Sistema de Comando de Incidentes',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'SCI-402'
      },
      {
        lineaTematica : 'Fuego Prescrito',
        nivel: 'Avanzado',
        nombre : 'Implementación de Fuego Prescrito',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'RX-301'
      },
      {
        lineaTematica : 'Fuego Prescrito',
        nivel: 'Avanzado',
        nombre : 'Introducción a los Efectos del Fuego',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'RX-310'
      },
      {
        lineaTematica : 'Fuego Prescrito',
        nivel: 'Avanzado',
        nombre : 'Preparación de Plan de Fuego Prescrito',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'RX-341'
      },
      {
        lineaTematica : 'Fuego Prescrito',
        nivel: 'Avanzado',
        nombre : 'Técnicas de Manejo de Humo',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'RX-410'
      },
      {
        lineaTematica : 'Fuego Prescrito',
        nivel: 'Avanzado',
        nombre : 'Avanzado de Efectos de Fuego',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'RX-510'
      },
      {
        lineaTematica : 'Adicional',
        nivel: 'Básico',
        nombre : 'Atención Prehospitalaria',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'APH'
      },
      {
        lineaTematica : 'Adicional',
        nivel: 'Básico',
        nombre : 'Primera Respuesta a Incidentes con Materiales Peligrosos',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'PRIMAP'
      },
      {
        lineaTematica : 'Adicional',
        nivel: 'Básico',
        nombre : 'Curso de Formación Ambiental',
        descripcion : 'Este curso es para mejorar las tacticas de combatientes de fuego en incendios forestales',
        codigo : 'CFA'
      },
    )
  }

  registrarCurso(){
    this.modalService.open(CrearCursoComponent, {
      
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    });
  }

  eliminarCurso(){
    this.alertService.questionAlertConfirm(
      '¿Está seguro que desea eliminar el curso?',
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
  

  editarVerCurso(){
    this.modalService.open(EditarCursoComponent, {
      size : 'xl',
      ariaLabelledBy : 'modal',
      centered : true,
      windowClass : 'modal',
      backdrop : 'static'
    })
  }

}
