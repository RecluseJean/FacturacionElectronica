import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { ComponentsModule } from '../components/components.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { DashboardComponent } from './dashboard.component';

import { PlantillasDocumentosComponent } from './ingresos/plantillas-documentos/plantillas-documentos.component';
import { PercepcionComponent } from './ingresos/percepcion/percepcion.component';
import { FacturadorComponent } from './ingresos/facturador/facturador.component';

import { CargaMasivaComponent } from './carga-masiva/carga-masiva.component';

import { ClienteComponent } from './catalogos/cliente/cliente.component';
import { ProductoComponent } from './catalogos/producto/producto.component';
import { CuentasBancariasComponent } from './catalogos/cuentas-bancarias/cuentas-bancarias.component';

import { UsuariosComponent } from './administracion/usuarios/usuarios.component';
import { SerieComponent } from './administracion/serie/serie.component';
import { LocalComponent } from './administracion/local/local.component';
import { EmpresasComponent } from './administracion/empresas/empresas.component';

import { MonitoreoComponent } from './monitoreo/monitoreo.component';


@NgModule({
  declarations: [
    DashboardComponent,

    PlantillasDocumentosComponent,
    PercepcionComponent,
    FacturadorComponent,

    CargaMasivaComponent,

    ClienteComponent,
    ProductoComponent,
    CuentasBancariasComponent,

    UsuariosComponent,
    SerieComponent,
    LocalComponent,
    EmpresasComponent,

    MonitoreoComponent,    
  ],
  imports: [
    CommonModule,
    RouterModule,   
    DashboardRoutingModule,
    ComponentsModule,
    NgxPaginationModule
        
  ]
})
export class DashboardModule { }
