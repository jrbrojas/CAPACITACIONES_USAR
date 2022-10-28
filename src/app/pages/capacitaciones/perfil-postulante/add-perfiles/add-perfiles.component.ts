import { Component, Inject, Input, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';
import Swal from 'sweetalert2';
import { AddPerfilesExperienciaComponent } from '../add-perfiles-experiencia/add-perfiles-experiencia.component';

export class FichaPerfil {
  numId : number = 0
  InfoFormacion : Formacion[] = []
}

export class Formacion {
  numId : number = 0;
  txtTipoFormacion : string = ''
  detalleFormacion : string = ''
}

@Component({
  selector: 'app-add-perfiles',
  templateUrl: './add-perfiles.component.html',
  styleUrls: ['./add-perfiles.component.scss']
})
export class AddPerfilesComponent implements OnInit {

  idUsuario: number = 0;
  fichaPerfil : FichaPerfil = new FichaPerfil();
  public form: FormGroup
  isChecked: boolean = false;
  public list1: any;
  public l1: boolean = false;
  public l2: boolean = false;
  public l3: boolean = false;
  public list2: any;
  public list3: any;

  listaFamilia: any[] = [
    {
      textNombre: '',
      txtApellidos: '',
      txtDuracion: '',
      textFunciones: '',
      intEdad: 0
    }
  ];

  public data1: any = [
    {
      id: 1,
      nombre: "Organizar equipos",
      descripcion: "Tarea que determina como organizar equipos ante una emergencia",
      cumplio: false
    },
    {
      id: 2,
      nombre: "Elaborar plan de emergencia",
      descripcion: "Tarea que determina como realizar un plan ante una emergencia",
      cumplio: false
    },
    {
      id: 3,
      nombre: "Elaborar procedimiento de atención de un incendio",
      descripcion: "Tarea que determina como realizar un procedimiento para atender un incendio",
      cumplio: false
    },
    {
      id: 4,
      nombre: "Elaborar plan de emergencia",
      descripcion: "Tarea que determina como realizar un plan ante una emergencia",
      cumplio: false
    },
    {
      id: 5,
      nombre: "Elaborar procedimiento de atención de un incendio",
      descripcion: "Tarea que determina como realizar un procedimiento para atender un incendio",
      cumplio: false
    },
  ]

  public data2: any = [
    {
      id: 1,
      nombre: "Elaborar plan de emergencia",
      descripcion: "Tarea que determina como realizar un plan ante una emergencia",
      cumplio: false
    },
    {
      id: 2,
      nombre: "Elaborar plan de emergencia",
      descripcion: "Tarea que determina como realizar un plan ante una emergencia",
      cumplio: false
    },
    {
      id: 3,
      nombre: "Elaborar procedimiento de atención de un incendio",
      descripcion: "Tarea que determina como realizar un procedimiento para atender un incendio",
      cumplio: false
    }
  ]

  public data3: any = [
    {
      id: 1,
      nombre: "Elaborar procedimiento de atención de un incendio",
      descripcion: "Tarea que determina como realizar un procedimiento para atender un incendio",
      cumplio: false
    },
    {
      id: 2,
      nombre: "Elaborar plan de emergencia",
      descripcion: "Tarea que determina como realizar un plan ante una emergencia",
      cumplio: false
    },
    {
      id: 3,
      nombre: "Elaborar procedimiento de atención de un incendio",
      descripcion: "Tarea que determina como realizar un procedimiento para atender un incendio",
      cumplio: false
    },
    {
      id: 4,
      nombre: "Elaborar plan de emergencia",
      descripcion: "Tarea que determina como realizar un plan ante una emergencia",
      cumplio: false
    }
  ]


  biEsperiencia: boolean = false;

  selectEstadosCivil: any;
  selectGeneros: any;
  selectDepartamentos: any;
  selectProvincias: any;
  selectDistritos: any;
  selectTipoFamiliar: any;
  selectTipoEspecializacion: any;
  selectTipoFormacion: any;
  selectCursos: any;
  selectPais: any;
  selectAreasEstudio: any;
  selectEstados: any;
  selectActividadesEmpresa: any;
  selectNivelesExperiencia: any;
  selectAreasPuesto: any;
  selectSubAreasPuesto: any;;
  selectAptitudFisica: any;
  selectLTP: any;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private modalService : NgbModal,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private alert: AlertService
  ) {
    this.idUsuario = data.idUsuario;
    this.form = this.fb.group({
      tarea: [''],
      isCheck: [''],

      dni: [''],
      apellidos: [''],
      nombres: [''],
      fechaNacimiento: [''],
      estadoCivil: [''],
      genero: [''],
      correoElectronico: [''],
      telefono: [''],
      celular: [''],
      direccion: [''],
      departamento: [''],
      provincia: [''],
      distrito: [''],
      tipoFamiliar: [''],
      familiarNombre: [''],
      familiarApellidos: [''],
      familiarEdad: [''],
      tipoEspecializacion: [''],
      tipoFormacion: [''],
      curso: [''],
      pais: [''],
      areaEstudio: [''],
      institucion: [''],
      estado: [''],
      fechaInicio: [''],
      fechaFin: [''],
      aptitudFisica: [''],
    })

    this.getListadoSelects();
  }

  ngOnInit(): void {
    if(this.idUsuario && this.idUsuario > 0 ){
      this.mostrarDatos();
    }

  }

  mostrarDatos(){
    this.addSkillFormacion();

    this.form.patchValue({
      dni: '12345678',
      apellidos: 'Olivera Perez',
      nombres: 'Manuel',
      fechaNacimiento: '2022-10-18',
      estadoCivil: this.selectEstadosCivil[0],
      genero: this.selectGeneros[0],
      correoElectronico: 'oliveraperezmanual@correo.com',
      telefono: '45678915',
      celular: '98574585',
      direccion: 'av calle los tecnologicos',
      departamento: this.selectDepartamentos[0],
      provincia: this.selectProvincias[0],
      distrito: this.selectDistritos[0],
      tipoFamiliar: this.selectTipoFamiliar[0],
      familiarNombre: 'Mario',
      familiarApellidos: 'Olvera Sanchez',
      familiarEdad: 17,
      tipoEspecializacion: this.selectTipoEspecializacion[0],
      tipoFormacion: this.selectTipoFormacion[0],
      curso: this.selectCursos[0],
      pais: this.selectPais[0],
      areaEstudio: this.selectAreasEstudio[0],
      institucion: 'COEN',
      estado: this.selectEstados[0],
      fechaInicio: '2021-10-15',
      fechaFin: '2021-10-30',
      aptitudFisica: this.selectAptitudFisica[0]
    })
  }

  checked(event: any) {
    if (event.checked) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

  changeEvent(event: any) {
    if (event.target.value == 1) {
      this.l1 = true;
      this.l2 = false;
      this.l3 = false;
      this.list1 = this.data1
    } else if (event.target.value == 2) {
      this.l2 = true;
      this.l3 = false;
      this.l1 = false;
      this.list2 = this.data2
    } else if (event.target.value == 3) {
      this.l3 = true;
      this.l2 = false;
      this.l1 = false;
      this.list3 = this.data3
    }
  }

  getListadoSelects(){
    this.selectEstadosCivil = [
      {
        id: 1,
        nombre: 'Soltero(a)'
      },
      {
        id: 2,
        nombre: 'Casado(a)'
      },
      {
        id: 3,
        nombre: 'Divorciado(a)'
      }
    ];
    this.selectGeneros = [
      {
        id: 1,
        nombre: 'Masculino'
      },
      {
        id: 2,
        nombre: 'Femenino'
      }
    ];

    this.selectDepartamentos = [
      {
        id: 1,
        nombre: 'Lima'
      },
      {
        id: 2,
        nombre: 'Arequipa'
      }
    ]

    this.selectProvincias = [{
        id: 1,
        nombre: 'Lima'
      },
      {
        id: 2,
        nombre: 'Arequipa'
      }
    ]

    this.selectDistritos = [{
        id: 1,
        nombre: 'Lima'
      },
      {
        id: 2,
        nombre: 'Los Olivos'
      }
    ]

    this.selectTipoFamiliar = [
      {
        id: 1,
        nombre: 'Hijo (a)'
      },
      {
        id: 2,
        nombre: 'Conyuge'
      }
    ];

    this.selectTipoEspecializacion = [
      {
        id: 1,
        nombre: 'GIRED'
      },
      {
        id: 2,
        nombre: 'USAR'
      },
      {
        id: 3,
        nombre: 'Combatientes del Fuego'
      }
    ];

    this.selectTipoFormacion = [
      {
        id: 1,
        nombre: 'Superior Tecnico'
      },
      {
        id: 2,
        nombre: 'Universitario'
      },
      {
        id: 3,
        nombre: 'Posgrado'
      },
      {
        id: 4,
        nombre: 'Cursos'
      },
      {
        id: 5,
        nombre: 'Cursos Forestales'
      },
      {
        id: 4,
        nombre: 'Master'
      },
      {
        id: 5,
        nombre: 'Doctorado'
      }
    ];


    this.selectCursos = [
      { id: 1, nombre: 'Despachador de Ataque Inicial'},
      { id: 2, nombre: 'Prevención y Educación de Incendios Forestales'},
      { id: 3, nombre: 'Operaciones de Incendios Forestales y Protección de la Escena de Origen para Primeros Respondientes'},
      { id: 4, nombre: 'Investigación de origen y causa de incendios forestales'},
      { id: 5, nombre: 'Factores Humanos en la Línea de Fuego'},
      { id: 6, nombre: 'De la Subordinación al Liderazgo'},
      { id: 7, nombre: 'Instructor Facilitador Equivalencia CPI Curso de Formación de Instructores'},
      { id: 8, nombre: 'Repaso del Combatiente de Incendios forestales'},
      { id: 9, nombre: 'Curso Introductorio Combatiente de Incendios Forestales, Equivalencia Curso de Bombero Forestal.'},
      { id: 10, nombre: 'Combatiente forestal'},
      { id: 11, nombre: 'Combatiente de Incendios Forestales Tipo 1'},
      { id: 12, nombre: 'Introducción al Comportamiento de Fuego'},
      { id: 13, nombre: 'Comandante de Incidente de Ataque Inicial – CI Tipo 4'},
      { id: 14, nombre: 'Motobombas Portátiles y Uso Efectivo de Agua'},
      { id: 15, nombre: 'Motosierras en Incendios Forestales'},
      { id: 16, nombre: 'Operaciones de Supresión en Incendios de Interfase Urbano Forestal'},
      { id: 17, nombre: 'Miembro de Brigada Helitransportada'},
      { id: 18, nombre: 'Operaciones de ignición'},
      { id: 19, nombre: 'Jefe de Brigada-Recurso Singular'},
      { id: 20, nombre: 'Equipo Pesado'},
      { id: 21, nombre: 'Básico de Operaciones aéreas'},
      { id: 22, nombre: 'Miembro de Brigada Helitransportada'},
      { id: 23, nombre: 'Comandante de Incidentes de Ataque Ampliado'},
      { id: 24, nombre: 'Supervisor de División'},
      { id: 25, nombre: 'Manejador de Helibases'},
      { id: 26, nombre: 'Introducción a los Cálculos de Comportamiento de Fuego'},
      { id: 27, nombre: 'Jefe de la Sección de Operaciones'},
      { id: 28, nombre: 'Jefe de la Sección de Planificación'},
      { id: 29, nombre: 'Jefe de la Sección de logística'},
      { id: 30, nombre: 'Introducción al Sistema de Comando de Incidentes Equivalencia SCI- Básico del Sistema de Comando de Incidentes'},
      { id: 31, nombre: 'Sistema de Comando de Incidentes para Recurso Singulares y Acción de los Incidentes Equivalencia con SCI-Intermedio de Sistema de Comando de Incidentes'},
      { id: 32, nombre: 'Sistema de Comando de Incidentes para Recurso Singulares y Acción de los Incidentes Equivalencia con SCI-Intermedio de Sistema de Comando de Incidentes'},
      { id: 33, nombre: 'Intermedio del Sistema de Comando de Incidentes para incidentes en expansión'},
      { id: 34, nombre: 'Avanzado para comando y personal general, incidentes complejos y MACS'},
      { id: 35, nombre: 'Ejecutivo del Sistema de Comando de Incidentes'},
      { id: 36, nombre: 'Implementación de Fuego Prescrito'},
      { id: 37, nombre: 'Introducción a los Efectos del Fuego'},
      { id: 38, nombre: 'Preparación de Plan de Fuego Prescrito'},
      { id: 39, nombre: 'Técnicas de Manejo de Humo'},
      { id: 40, nombre: 'Avanzado de Efectos de Fuego'},
      { id: 41, nombre: 'Atención Prehospitalaria'},
      { id: 42, nombre: 'Primera Respuesta a Incidentes con Materiales Peligrosos'},
      { id: 43, nombre: 'Curso de Formación Ambiental'}
    ];

    this.selectPais = [
      {
        id: 1,
        nombre: 'España'
      },
      {
        id: 2,
        nombre: 'Perú'
      }
    ]

    this.selectAreasEstudio = [
      {
        id: 1,
        nombre: 'Apago de incendios'
      },
      {
        id: 2,
        nombre: 'Desactivacion de explosivos'
      }
    ]

    this.selectEstados = [
      {
        id: 1,
        nombre: 'Completo'
      },
      {
        id: 2,
        nombre: 'En curso'
      },
      {
        id: 3,
        nombre: 'Trunco'
      }
    ]

    this.selectActividadesEmpresa = [
      {
        id: 1,
        nombre: 'Servicios Generales'
      },
      {
        id: 2,
        nombre: 'Gestión de Riegos de Desastres'
      }
    ]

    this.selectNivelesExperiencia = [
      {
        id: 1,
        nombre: 'Nivel 1'
      },
      {
        id: 2,
        nombre: 'Nivel 2'
      }
    ]

    this.selectAreasPuesto = [
      {
        id: 1,
        nombre: 'Área 1'
      },
      {
        id: 2,
        nombre: 'Área 2'
      }
    ]

    this.selectSubAreasPuesto = [
      {
        id: 1,
        nombre: 'Subárea 1'
      },
      {
        id: 2,
        nombre: 'Subárea 2'
      }
    ]

    this.selectAptitudFisica = [
      {
        id: 1,
        nombre: 'Arduo'
      },
      {
        id: 2,
        nombre: 'Moderado'
      },
      {
        id: 3,
        nombre: 'Ligero'
      }
    ]

    this.selectLTP = [
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
      }
    ]
  }

  closeModal(){
    //this.modalService.dismissAll()
    this.dialogRef.close();
  }

  addSkillFormacion(){
    this.fichaPerfil.InfoFormacion.push({
      numId : 0,
      txtTipoFormacion : '',
      detalleFormacion : ''
    })
  }

  addListaFamilia() {
    this.listaFamilia.push(
      {
        textNombre: '',
        txtApellidos: '',
        intEdad: 0
      }
    );
  }

  saveModal() {
    this.alert
      .questionAlertConfirm(
        '¿Está seguro que desea registrar?',
        '',
        'Si, Registrar',
        TYPE_ALERT.QUESTION
      )
      .then((result) => {
        if (result.value) {
          this.closeModal()
        } else {
          //this.closeModal()
        }
      });
  }

  guardarExperiencia() {
    this.biEsperiencia = !this.biEsperiencia;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Guardado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }

  onAddExperiencia() {
    //this.biEsperiencia = true;
    /*const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });*/
    const modalRef = this.modalService.open(AddPerfilesExperienciaComponent, {
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    })

  }

}



@Component({
  selector: 'add-perfiles-exp.component',
  templateUrl: 'add-perfiles-exp.component.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}