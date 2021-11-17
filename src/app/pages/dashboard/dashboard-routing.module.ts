import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { PlantillasDocumentosComponent } from './ingresos/plantillas-documentos/plantillas-documentos.component';
import { GenerarDocumentoComponent } from './ingresos/plantillas-documentos/generar-documento/generar-documento.component';
import { EditarDocumentoComponent } from './ingresos/plantillas-documentos/editar-documento/editar-documento.component';
import { PercepcionComponent } from './ingresos/percepcion/percepcion.component';
import { GenerarPercepcionComponent } from './ingresos/percepcion/generar-percepcion/generar-percepcion.component';
import { EditarPercepcionComponent } from './ingresos/percepcion/editar-percepcion/editar-percepcion.component';
import { FacturadorComponent } from './ingresos/facturador/facturador.component';
import { GenerarFacturadorComponent } from './ingresos/facturador/generar-facturador/generar-facturador.component';

import { CargaMasivaComponent } from './carga-masiva/carga-masiva.component';

import { ClienteComponent } from './catalogos/cliente/cliente.component';
import { ProductoComponent } from './catalogos/producto/producto.component';
import { CuentasBancariasComponent } from './catalogos/cuentas-bancarias/cuentas-bancarias.component';

import { UsuariosComponent } from './administracion/usuarios/usuarios.component';
import { SerieComponent } from './administracion/serie/serie.component';
import { LocalComponent } from './administracion/local/local.component';
import { EmpresasComponent } from './administracion/empresas/empresas.component';

import { MonitoreoComponent } from './monitoreo/monitoreo.component';

const routesDash : Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [

      { path: '', redirectTo: 'ingresos/plantilla-documento', pathMatch: 'full' },  

      { path: 'ingresos', redirectTo: 'ingresos/plantilla-documento', pathMatch: 'full' },  
      { path: 'carga', redirectTo: 'carga/documentos', pathMatch: 'full' }, 
      { path: 'catalogos', redirectTo: 'catalogos/cliente', pathMatch: 'full' }, 
      { path: 'administracion', redirectTo: 'administracion/usuarios', pathMatch: 'full' },  
      { path: 'monitoreo', redirectTo: 'monitoreo', pathMatch: 'full' }, 

      { path: 'ingresos/plantilla-documento', component: PlantillasDocumentosComponent},
      { path: 'ingresos/plantilla-documento/generar-documento', component: GenerarDocumentoComponent},
      { path: 'ingresos/plantilla-documento/editar-documento', component: EditarDocumentoComponent},
      { path: 'ingresos/percepcion', component: PercepcionComponent},
      { path: 'ingresos/percepcion/generar-percepcion', component: GenerarPercepcionComponent},
      { path: 'ingresos/percepcion/editar-percepcion', component: EditarPercepcionComponent},
      { path: 'ingresos/facturador', component: FacturadorComponent},
      { path: 'ingresos/facturador/generar-facturador', component: GenerarFacturadorComponent},


      { path: 'carga/documentos', component: CargaMasivaComponent},

      { path: 'catalogos/cliente', component: ClienteComponent},
      { path: 'catalogos/producto', component: ProductoComponent},
      { path: 'catalogos/cuentas-bancarias', component: CuentasBancariasComponent},

      { path: 'administracion/usuarios', component: UsuariosComponent},
      { path: 'administracion/serie', component: SerieComponent},
      { path: 'administracion/local', component: LocalComponent},
      { path: 'administracion/empresa', component: EmpresasComponent},

      { path: 'monitoreo', component: MonitoreoComponent},
            
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routesDash)
  ],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
