import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar-documento',
  templateUrl: './generar-documento.component.html',
  styleUrls: []
})
export class GenerarDocumentoComponent implements OnInit {
  view = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrar(){
    this.view = true;
  }

}
