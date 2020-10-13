import { Component, OnInit } from '@angular/core';
import { ReporteService } from './reporte.service';
import { Router, ActivatedRoute } from '@angular/router';
import  Hora from './hora';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html'
})

export class HorasComponent implements OnInit {

  hora: Hora = new Hora();
  codigo: string;
  diaSemana: number;

  titulo: string = 'Horas de servicio';
  constructor(private reporteService: ReporteService,
    private router: Router,
    public activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {

  }

  calcularHoras() {
    this.reporteService.calcularHoras(this.codigo,this.diaSemana).subscribe(
      data =>{
        this.hora = data;
      },
      err =>{
        console.error(err);
      });

  }


}

