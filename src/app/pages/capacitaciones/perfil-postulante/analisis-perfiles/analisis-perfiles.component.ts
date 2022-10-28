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
