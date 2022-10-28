import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Necesidades } from 'src/app/shared/models/preliminar.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PreliminarService } from 'src/app/shared/services/preliminar.service';

@Component({
  selector: 'app-agregar-necesidades-recursos',
  templateUrl: './agregar-necesidades-recursos.component.html',
  styleUrls: ['./agregar-necesidades-recursos.component.scss']
})
export class AgregarNecesidadesRecursosComponent implements OnInit {

  public formCrearNecesidades: FormGroup;
  @Input() fromNecesidad: any;
  @Input() fromNecesidadEdit: any;

  public necesidad: any;
  public recurso: any;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private alertService: AlertService,
    private preliminarService: PreliminarService,
  ) {
    this.formCrearNecesidades = this.fb.group({
      idTipoNecesidad: [''],
      tipoNecesidad: [''],
      idNecesidad: ['', Validators.required],
      necesidad: ['', Validators.required],
      idTipoRecurso: [''],
      tipoRecurso: [''],
      cantidad: [''],
      idAnalisisNecesidad: ['']
    });
  }

  ngOnInit(): void {
    this.getNecesidad(1);
    this.getDetailsNecesida(this.fromNecesidadEdit.idNecesidad);
  }

  agregarNecesidad() {
    const data: Necesidades = {
      idTipoNecesidad: 2,
      tipoNecesidad: 'NECESIDAD DE RECURSOS MATERIALES Y/O EQUIPOS PARA SERVICIOS COMUNALES',
      idNecesidad: Number(this.formCrearNecesidades.value.idNecesidad),
      necesidad: this.formCrearNecesidades.value.necesidad,
      idTipoRecurso: Number(this.formCrearNecesidades.value.idTipoRecurso),
      tipoRecurso: this.formCrearNecesidades.value.tipoRecurso,
      cantidad: Number(this.formCrearNecesidades.value.cantidad),
      analisisNecesidad: {
        id: this.fromNecesidad
      }
    }

    this.preliminarService.crearNecesidad(data).subscribe((res: any) => {
      this.alertService.toastSuccess(`${res.message}`);
      this.closeModal();
    })
  }

  actualizarNecesidad() {
    const data: Necesidades = {
      id: this.fromNecesidadEdit.idNecesidad,
      idTipoNecesidad: Number(this.formCrearNecesidades.value.idTipoNecesidad),
      tipoNecesidad: this.formCrearNecesidades.value.tipoNecesidad,
      idNecesidad: Number(this.formCrearNecesidades.value.idNecesidad),
      necesidad: this.formCrearNecesidades.value.necesidad,
      idTipoRecurso: Number(this.formCrearNecesidades.value.idTipoRecurso),
      tipoRecurso: this.formCrearNecesidades.value.tipoRecurso,
      cantidad: Number(this.formCrearNecesidades.value.cantidad),
      analisisNecesidad: {
        id: this.formCrearNecesidades.value.idAnalisisNecesidad
      }
    }

    this.preliminarService.crearNecesidad(data).subscribe((res: any) => {
      this.alertService.toastSuccess(`${res.message}`);
      this.closeModal();
    })
  }

  getDetailsNecesida(id: number) {
    this.preliminarService.getAnalisisNecesidadesOne(id).subscribe(res => {
      this.formCrearNecesidades.controls['idTipoNecesidad'].setValue(res.idTipoNecesidad);
      this.formCrearNecesidades.controls['tipoNecesidad'].setValue(res.tipoNecesidad);
      this.formCrearNecesidades.controls['idNecesidad'].setValue(res.idNecesidad);
      this.formCrearNecesidades.controls['necesidad'].setValue(res.necesidad);
      this.formCrearNecesidades.controls['idTipoRecurso'].setValue(res.idTipoRecurso);
      this.formCrearNecesidades.controls['tipoRecurso'].setValue(res.tipoRecurso);
      this.formCrearNecesidades.controls['cantidad'].setValue(res.cantidad);
      this.formCrearNecesidades.controls['idAnalisisNecesidad'].setValue(res.analisisNecesidad.id);
      this.getRecurso(Number(res.idNecesidad))
    })
  }

  getNecesidad(id: number) {
    this.preliminarService.getMaeNecesidad(id).subscribe(res => {
      this.necesidad = res;
    })
  }

  getRecurso(id: number) {
    this.preliminarService.getMaeRecurso(id).subscribe(res => {
      this.recurso = res;
    })
  }

  changeNecesidad(event: any) {
    const id = event.target.value;
    this.getRecurso(id);
    const select = event.target;
    const val = select.options[select.selectedIndex].getAttribute('name');
    this.formCrearNecesidades.controls['necesidad'].setValue(val);
  }

  changeRecurso(event: any) {
    const select = event.target;
    const val = select.options[select.selectedIndex].getAttribute('name');
    this.formCrearNecesidades.controls['tipoRecurso'].setValue(val);
  }

  closeModal() {
    this.activeModal.close();
  }
}
