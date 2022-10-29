import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProfileComponent } from 'src/app/pages/profile/add-profile/add-profile.component';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddPerfilesComponent } from '../add-perfiles/add-perfiles.component';
import { TYPE_ALERT } from 'src/app/shared/services/config';
import { MatDialog } from '@angular/material/dialog';

export interface DataBasicProfile{
  dni : string;
  namesCompetitor : string;
  lastNameCompetitor : string;
  birthDate : string;
  civilState : string;
  genCompetitor : string;
  typeProfile : string;
  estado : string;
}

@Component({
  selector: 'app-list-perfiles',
  templateUrl: './list-perfiles.component.html',
  styleUrls: ['./list-perfiles.component.scss']
})
export class ListPerfilesComponent implements OnInit {

  public dataBasicProfile : DataBasicProfile[] = []

  constructor(
    public dialog: MatDialog,
    private modalService : NgbModal,
    private alert : AlertService
  ) { }

  ngOnInit(): void {
    this.dataBasicProfile.push(
      {
        dni : '74239486',
        namesCompetitor : 'Manuel',
        lastNameCompetitor : 'Olivera Perez',
        birthDate : '24/10/1995',
        civilState : 'Soltero',
        genCompetitor : 'Masculino',
        typeProfile : 'USAR',
        estado : "Observado"
      },
      {
        dni: '05879578',
        namesCompetitor : 'Patricio',
        lastNameCompetitor : 'Zamora Zamora',
        birthDate : '26/10/1990',
        civilState : 'Casado',
        genCompetitor : 'Masculino',
        typeProfile : 'USAR',
        estado : "aprobado",
      },
      {
        dni: '07531593',
        namesCompetitor : 'Victoria Maria',
        lastNameCompetitor : 'Gonzales Hall',
        birthDate : '05/01/2000',
        civilState : 'Divorciada',
        genCompetitor : 'Femenina',
        typeProfile : 'USAR',
        estado : "por aprobar",
      },

    )
  }

  editarCompetitor(){
    const dialogRef = this.dialog.open(AddPerfilesComponent, {
      minHeight: '90%',
      data: {idUsuario: 1},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    /*const modalRef = this.modalService.open(AddPerfilesComponent, {
        size: 'xl',
        ariaLabelledBy: 'modal',
        centered: true,
        windowClass: 'modal',
        backdrop: 'static'
    })

    modalRef.componentInstance.idUsuario = 1;
    modalRef.result.then((res) => {

    }, (reason) => {

    })*/
  }

  addCompetitor(){
    const dialogRef = this.dialog.open(AddPerfilesComponent, {
      minHeight: '90%',
      data: {idUsuario: 0},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    /*this.modalService.open(AddPerfilesComponent, {

        size: 'xl',
        ariaLabelledBy: 'modal',
        centered: true,
        windowClass: 'modal',
        backdrop: 'static'

    })*/
  }

  eliminar() {
    this.alert.questionAlertConfirm(`¿Está seguro de eliminar ?`, '', `Si, Eliminar`, TYPE_ALERT.QUESTION).then(
      (result) => {

      }
    );
  }

  aprobar(type : number){
    let mensaje = "aprobar"
    if(type == 2) mensaje = "desaprobar"
    if(type == 3) mensaje = "observar"
    this.alert.questionAlertConfirm(`¿Está seguro de ${mensaje} ?`, '', `Si, ${mensaje}`, TYPE_ALERT.QUESTION).then(
      (result) => {

      }
    );
  }

}
