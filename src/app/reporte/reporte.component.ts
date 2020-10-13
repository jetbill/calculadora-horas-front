import { Component, OnInit } from '@angular/core';
import { Reporte } from './reporte';
import { ReporteService } from './reporte.service';
import swal from 'sweetalert2';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html'
})
export class reporteComponent implements OnInit {

 reportes: Reporte[];

  constructor(private reporteService: ReporteService) { }

  ngOnInit() {
    this.cargarReportes();

  }

  cargarReportes():void {
    this.reporteService.getReportes().subscribe(data => {
      this.reportes = data
    },
      err => {
        console.log(err);
      }

    );
   }




}
