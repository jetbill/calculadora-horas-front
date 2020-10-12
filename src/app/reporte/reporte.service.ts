import { Injectable } from '@angular/core';
import { Reporte } from './reporte';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';

import { Router } from '@angular/router';

@Injectable()
export class ReporteService {
  private urlEndPoint: string = 'http://localhost:8090/api/v1/reporte';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  public getReportes(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(this.urlEndPoint);


  }

  public create(reporte: Reporte): Observable<Reporte> {
    return this.http.post(this.urlEndPoint, reporte, { headers: this.httpHeaders }).pipe(
      map((response: any) => response.reporte as Reporte),
      catchError(e => {

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

 

}
