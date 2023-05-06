import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Curso = {
  id: number;
  nome: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //private readonly API = '/assets/cursos.json';
  private readonly API = '/api/cursos';

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient
      .get<Curso[]>(this.API);
  }

}
