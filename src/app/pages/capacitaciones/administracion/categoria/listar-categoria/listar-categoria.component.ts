import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/shared/services/alert.service';
import { TYPE_ALERT } from 'src/app/shared/services/config';
import { CrearCategoriaComponent } from '../crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from '../editar-categoria/editar-categoria.component';

export interface Categoria {
  acronimo: string;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.scss']
})
export class ListarCategoriaComponent implements OnInit {

  public arrCategorias: Array<Categoria> = []

  constructor(
    private modalService: NgbModal,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.arrCategorias.push(
      {
        acronimo: 'C001',
        nombre: 'Comando de Área',
        descripcion: 'Descripcion de Comando de Área'
      },
      {
        acronimo: 'C002',
        nombre: 'Comandante de Incidente / Personal de Comando',
        descripcion: 'Descripcion de Comandante de Incidente / Personal de Comando'
      },
      {
        acronimo: 'C003',
        nombre: 'Fuego prescrito',
        descripcion: 'Descripcion de Fuego prescrito'
      },
      {
        acronimo: 'C004',
        nombre: 'Operaciones ',
        descripcion: 'Descripcion de Operaciones '
      },
      {
        acronimo: 'C005',
        nombre: 'Operaciones aéreas',
        descripcion: 'Descripcion de Operaciones aéreas'
      },
      {
        acronimo: 'C006',
        nombre: 'Planificación',
        descripcion: 'Descripcion de Planificación'
      },
      {
        acronimo: 'C007',
        nombre: 'Logística',
        descripcion: 'Descripcion de Logística'
      },
      {
        acronimo: 'C008',
        nombre: 'Finanzas/administración',
        descripcion: 'Descripcion de Finanzas/administración'
      },
      {
        acronimo: 'C009',
        nombre: 'Despacho',
        descripcion: 'Descripcion de Despacho'
      },
      {
        acronimo: 'C010',
        nombre: 'Prevención / Educación',
        descripcion: 'Descripcion de Prevención / Educación '
      },
      {
        acronimo: 'C011',
        nombre: 'Investigación',
        descripcion: 'Descripcion de Investigación'
      },
    )
  }

  registrarCategoria() {
    this.modalService.open(CrearCategoriaComponent, {
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    })
  }

  verEditarCategoria() {
    this.modalService.open(EditarCategoriaComponent, {
      size: 'xl',
      ariaLabelledBy: 'modal',
      centered: true,
      windowClass: 'modal',
      backdrop: 'static'
    })
  }

  eliminarCategoria() {
    this.alertService.questionAlertConfirm(
      '¿Está seguro que desea eliminar la categoria?',
      '',
      'Si, Eliminar',
      TYPE_ALERT.QUESTION
    ).then(
      (result) => {
        if (result.value) {
          this.alertService.toastSuccess('Categoria Eliminado Correctamente');
        } else {

        }
      }
    );
  }

}
