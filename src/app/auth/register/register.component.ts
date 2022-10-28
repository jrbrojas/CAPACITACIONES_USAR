import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FichaPerfil } from 'src/app/pages/capacitaciones/perfil-postulante/add-perfiles/add-perfiles.component';
import Swal from 'sweetalert2';
import { TYPE_ALERT } from '../../shared/services/config';
import { AlertService } from '../../shared/services/alert.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  public idsPerfilesUsuario: number[] = new Array<number>();

  public isId: any;
  public selectProfile: any;
  public selectRegion: any;
  public selectProvincia: any;
  public selectDistrito: any;
  public createUser: FormGroup;
  public nomProfile: string = '';
  public descripcionRegion: string = '';
  public descripcionProvincia: string = '';
  public descripcionPerfilNivel: string = '';
  public descripcionDistrito: string = '';
  public user: any;
  public disEdit = false
  public existedniusuario: boolean =  false;
  public existednisolicitudusuario: boolean =  false;
  public existeEmailUsuario: boolean  = false;
  public existeEmailSolicitudUsuario: boolean = false;


  public HabilitarPerfil: boolean = true;
  public loadButton = false;

  disbled: boolean = false;
  public counter: number = 0;
  public nivel: number = 0

  constructor(
      private alert : AlertService,
      private route : Router
    ) {
    }

  ngOnInit(): void {
  }

  get idPerfil() {
    return null;
  }



  createUsuarios() {

  }

  cancelProject() {
    this.route.navigate(['/auth']);
  }

  // Perfil
  getProfile() {
  }


  getSelectProfile(event: any) {
  }


  //Region
  getRegion() {
  }

  getSelectRegion(event: any) {
  }

  //Provincia
  getProvincia(codRegion: string) {
  }

  getSelectProvincia(event: any) {
  }

  //Distrito
  getDistrito(codRegionProv: string) {
  }

  getSelectDistrito(event: any) {
  }

  setvalue() {
  }


  existeDniUser(dni: any){
  }

  existeDniSolicitudUser(dni:any){
  }


  consultarDni(){
  }

  onKey(event: any) {
    this.counter = event.target.value.length;
  }

  HabUigeo(Ubigeo: any){
  }

  ExisteEmail(email: any){

  
}

  ExisteEmailSoLicitud(email: any){
  }

ValidacionEmail(){

}

guardarUsuario(){
  this.alert.questionAlertConfirm(
    '¿Está seguro que desea registrar el usuario?',
    '',
    'Si, Registrar',
    TYPE_ALERT.QUESTION
  ).then(
    (result) => {
      if (result.value) {
        this.route.navigate(['/auth']);
      } else {

      }
    }
  );
}

}
