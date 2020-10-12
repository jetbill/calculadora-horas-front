import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { reporteComponent } from './reporte/reporte.component';
import { ReporteService} from './reporte/reporte.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './reporte/form.component';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { HorasComponent } from './reporte/horas.component';
registerLocaleData(localeES, 'es');

const routes: Routes = [


  { path: 'reportes', component: reporteComponent},
  { path: 'reportes/form', component: FormComponent },
  { path: 'horas', component: HorasComponent },
  { path: '**', redirectTo: '/reportes', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    reporteComponent,
    FormComponent,
    HorasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ReporteService, { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
