import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

export interface Curso {
  nombre : string;
  acronimo : string;
  completed : boolean;
  color : ThemePalette;
}


export interface LineaTematica {
  nombre : string;
  completed : boolean;
  color : ThemePalette;
  cursos? : Array<Curso>
}

@Component({
  selector: 'app-crear-posicion',
  templateUrl: './crear-posicion.component.html',
  styleUrls: ['./crear-posicion.component.scss']
})
export class CrearPosicionComponent implements OnInit {

  public allComplete : boolean = false;

  idCategria: number = 0;

  arrExperienciaSelect: any [] = [
    {
      id: 1,
      nombre: 'Alta'
    },
    {
      id: 2,
      nombre: 'Media'
    },
    {
      id: 3,
      nombre: 'Baja'
    }
  ];

  arrLTPSelect: any [] = [
    {
      id: 1,
      nombre: 'LTP 1'
    },
    {
      id: 2,
      nombre: 'LTP 2'
    },
    {
      id: 3,
      nombre: 'LTP 3'
    },
    {
      id: 4,
      nombre: 'LTP 4'
    },
    {
      id: 5,
      nombre: 'LTP 5'
    },
    {
      id: 6,
      nombre: 'LTP 6'
    }
  ];

  arrCategoria: any [] = [
    {
      id: 1,
      nombre: 'Comandante de Incidente / Personal de Comando'
    },
    {
      id: 2,
      nombre: 'Operaciones '
    },
    {
      id: 3,
      nombre: 'Operaciones aéreas'
    },
    {
      id: 4,
      nombre: 'Planificación'
    },
    {
      id: 5,
      nombre: 'Logística'
    },
    {
      id: 6,
      nombre: 'Despacho-coordinación ataque'
    },
    {
      id: 7,
      nombre: 'Prevención / Educación'
    },
    {
      id: 8,
      nombre: 'Investigación'
    },
    {
      id: 9,
      nombre: 'Operaciones'
    }
  ]

  arrCalificado: any[] = [
    {
      id: 1,
      idCategoria: 1,
      nombre: 'Comandante de Incidente Tipo 3',
      codigo: 'CIT3'
    }, {
      id: 2,
      idCategoria: 1,
      nombre: 'Comandante de Incidente Tipo 4',
      codigo: 'CIT4'
    }, {
      id: 3,
      idCategoria: 1,
      nombre: 'Comandante de Incidente Tipo 5',
      codigo: 'CIT5'
    }, {
      id: 4,
      idCategoria: 1,
      nombre: 'Oficial de Enlace',
      codigo: 'OFEN'
    }, {
      id: 5,
      idCategoria: 1,
      nombre: 'Oficial de Seguridad',
      codigo: 'OFSE'
    }, {
      id: 6,
      idCategoria: 1,
      nombre: 'Oficial de Información Pública',
      codigo: 'OFIP'
    }, {
      id: 7,
      idCategoria: 2,
      nombre: 'Jefe de Sección de Operaciones',
      codigo: 'JSOP'
    }, {
      id: 8,
      idCategoria: 2,
      nombre: 'Supervisor de División',
      codigo: 'SUDI'
    }, {
      id: 9,
      idCategoria: 2,
      nombre: 'Jefe de Brigada',
      codigo: 'JEFB'
    }, {
      id: 10,
      idCategoria: 2,
      nombre: 'Jefe de Cuadrilla / Combatiente de Incendios Forestales Tipo 1', 
      codigo: 'JECU / CIF1'
    }, {
      id: 11,
      idCategoria: 2,
      nombre: 'Combatiente de Incendios Forestales Tipo 2',
      codigo: 'CIF2'
    }, {
      id: 12,
      idCategoria: 3,
      nombre: 'Encargado de Helibase',
      codigo: 'ENHE'
    }, {
      id: 13,
      idCategoria: 3,
      nombre: 'Miembro de Brigada Helitransportada',
      codigo: 'MBHE'
    }, {
      id: 14,
      idCategoria: 4,
      nombre: 'Jefe de Sección de Planificación',
      codigo: 'JSPL'
    }, {
      id: 15,
      idCategoria: 5,
      nombre: 'Jefe de Sección de Logística',
      codigo: 'JSLO'
    }, {
      id: 16,
      idCategoria: 6,
      nombre: 'Despachador de ataque inicial',
      codigo: 'DEAI'
    }, {
      id: 17,
      idCategoria: 7,
      nombre: 'Miembro de Equipo de Prevención- Educación',
      codigo: 'MEPE'
    }, {
      id: 18,
      idCategoria: 8,
      nombre: 'Investigador de Incendios Forestales',
      codigo: 'INIF'
    }
  ]

  arrCursos: any[] = [
    {
      nombre: 'SCI-100'
    },
    {
      nombre: 'L-180'
    },
    {
      nombre: 'CR-130'
    },
    {
      nombre: 'S-130'
    }
  ]
  
  arrAdicional: any[] = [
    {
      nombre: 'Adicional 1'
    }
  ]

  arrEsperiencia: any[] = [
    {
      nombre: 'Esperiencia 1'
    }
  ]

  arrLTP: any[] = [
    {
      nombre: 'LTP 1'
    }
  ]

  lineaTematica : LineaTematica = {
    nombre : 'Supresion',
    completed : false,
    color : 'primary',
    cursos : [
      {
        acronimo : 'S-130',
        nombre : 'Factores Humanos en el servicio de incendios forestales',
        completed : false,
        color : 'primary'
      },
      {
        acronimo : 'S-131',
        nombre : 'Combatiente forestal',
        completed : false,
        color : 'primary' 
      },
      {
        acronimo : 'S-190',
        nombre : ' Introducción al Comportamiento de Fuego',
        completed : false,
        color : 'primary'
      },
      {
        acronimo : 'S-200',
        nombre : 'Comandante de Incidente de Ataque Inicial – CI Tipo 4',
        completed : false,
        color : 'primary'
      }
    ]
  }

  constructor(
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
  }

  cursoAdd() {
    this.arrCursos.push({nombre: ''});
  }

  experienciaAdd() {
    this.arrEsperiencia.push({nombre: ''});
  }

  ltpAdd() {
    this.arrLTP.push({nombre: ''});
  }

  adicionalAdd() {
    this.arrAdicional.push({nombre: ''});
  }

  closeModal(){
    this.modalService.dismissAll()
  }

  updateAllComplete(){
    this.allComplete = this.lineaTematica.cursos != null && this.lineaTematica.cursos.every(t => t.completed)
  }

  someComplete() : boolean {
    if(this.lineaTematica.cursos == null){
      return false
    }
    return this.lineaTematica.cursos.filter(t => t.completed).length > 0 && !this.allComplete
  }


  setAll(completed : boolean){
    this.allComplete = completed;
    
    if(this.lineaTematica.cursos == null){
      return;
    }

    this.lineaTematica.cursos.forEach(t => (t.completed = completed))
  }

  guardar() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Guardado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    this.closeModal();
  }

}
