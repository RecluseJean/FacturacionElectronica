import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar-facturador',
  templateUrl: './generar-facturador.component.html',
  styleUrls: []
})
export class GenerarFacturadorComponent implements OnInit {
  view = false;
  viewt = false;
  viewmp = false;
  viewad = false;
  viewbmp = true;
  viewbad = true;
  constructor() { }

  ngOnInit(): void {
  }
  
  mostrar(a : any){
    switch (a) {
      case 1:
        this.view = true;
        break;
      case 2:
        this.viewt = true;
        break;
      case 3:
        this.viewmp = true;
        this.viewbmp = false;
        break;
      case 4:
        this.viewad = true;       
        this.viewbad = false;
        break;
      case 5: 
        this.viewbmp = true;       
        this.viewmp = false;
        break;
      case 6:  
        this.viewbad = true 
        this.viewad = false;       
        break;
      default:
        break;
    }
  }
  


}
