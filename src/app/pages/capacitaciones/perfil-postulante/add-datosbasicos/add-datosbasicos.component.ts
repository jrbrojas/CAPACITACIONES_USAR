import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-datosbasicos',
  templateUrl: './add-datosbasicos.component.html',
  styleUrls: ['./add-datosbasicos.component.scss']
})
export class AddDatosbasicosComponent implements OnInit {

  listaFamilia: any[] = [
    {
      textNombre: '',
      txtApellidos: '',
      txtDuracion: '',
      textFunciones: '',
      intEdad: 0
    }
  ];
  
  constructor(
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalService.dismissAll()
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
}
