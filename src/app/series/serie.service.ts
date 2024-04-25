import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Serie } from './Serie'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private apiUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }

}
