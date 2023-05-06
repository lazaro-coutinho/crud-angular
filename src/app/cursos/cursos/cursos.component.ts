import { Component } from '@angular/core';
import { Curso, CursosService } from '../services/cursos.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  cursos$: Observable<Curso[]>;

  constructor(
    private cursoService: CursosService,
    private dialog: MatDialog) {
    this.cursos$ = this.cursoService
      .listar()
      .pipe(
        catchError(error => {
          this.onError('Ocorreu um erro!');
          return of([]);
        })
      );
  }

  colunas = ['nome', 'categoria'];

  onError(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: message
    });
  }
}
