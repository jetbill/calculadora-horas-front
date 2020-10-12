import { Component, OnInit } from '@angular/core';
import { Reporte } from './reporte';
import { ReporteService } from './reporte.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

   reporte: Reporte = new Reporte();
  public reportes: Reporte[];
  titulo: string = "Crear Reporte";

  errores: string[];

  constructor(private reporteService: ReporteService,
     private router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.reporteService.getReportes()
    .subscribe(reportes => this.reportes = reportes);
  }

  cargarReporte(): void {
    this.reporteService.getReportes().subscribe(
      reporte => {
        this.reportes = reporte;

      });

  }



  create(): void {
    this.reporteService.create(this.reporte)
      .subscribe(
        reporte => {
          this.router.navigate(['/reportes']);
          console.log(reporte)
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }



}
