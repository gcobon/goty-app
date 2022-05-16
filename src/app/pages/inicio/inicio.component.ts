import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  public graficoData: { name: string; value: number }[] = [];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
      .collection('goty')
      .valueChanges()
      .pipe(
        map((res) => {
          return res.map((juego: any) => ({
            name: juego.name,
            value: juego.votos,
          }));
        })
      )
      .subscribe((juegos) => {
        this.graficoData = juegos;
      });
  }
}
