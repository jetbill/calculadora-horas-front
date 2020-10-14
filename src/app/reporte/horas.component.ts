import { Component, OnInit } from '@angular/core';
import { ReporteService } from './reporte.service';
import { Router, ActivatedRoute } from '@angular/router';
import  Hora from './hora';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html'
})

export class HorasComponent implements OnInit {
  notFound: boolean = false;
  hora: Hora;


  titulo: string = 'Horas de servicio';

  constructor(private reporteService: ReporteService,
    private router: Router,
    public activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {

  }

  calcularHoras(codigo:string,diaSemana:number) {
    this.notFound;
    this.hora = null;
    this.reporteService.calcularHoras(codigo,diaSemana).subscribe(
      (horaDelaApi:Hora)=>{
        this.hora = horaDelaApi;
      },
      (err:any)=>{
        console.log(err)
      }
      );

  }


}

