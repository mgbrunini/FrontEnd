import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
<<<<<<< HEAD
  URL = 'https://backend-mgb.herokuapp.com/personas/';
=======
  URL = environment.URL + 'personas/';
>>>>>>> dbccedd5c18384aa757cbb7ab7d9f7f3bc0e7672

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }
}
