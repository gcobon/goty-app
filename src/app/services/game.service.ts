import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private url = environment.url;
  private juegosCache: Game[] = [];

  constructor(private http: HttpClient) {}

  getNominados() {
    if (this.juegosCache.length > 0) {
      console.log('Load cache');

      return of(this.juegosCache);
    } else {
      console.log('http request');

      return this.http
        .get<Game[]>(`${this.url}/goty`)
        .pipe(tap((res) => (this.juegosCache = res)));
    }
  }

  votarJuego(id: string) {
    return this.http
      .post<{ ok: boolean; message: string }>(`${this.url}/goty/${id}`, {})
      .pipe(catchError((err) => of(err.error)));
  }
}
