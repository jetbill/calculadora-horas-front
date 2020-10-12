import { Component, OnInit } from '@angular/core';
import { ReporteService } from './reporte.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Hora } from './hora';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html'
})

export class HorasComponent implements OnInit {

  hora: Hora = new Hora();

  titulo: string = 'Horas de servicio';
  constructor() {

  }
  ngOnInit() {

  }

  calcularHoras() {
    alert("por implementar");

  }


}

