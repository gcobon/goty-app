import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game.interface';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css'],
})
export class GotyComponent implements OnInit {
  public juegos: Game[] = [];
  public btnDisabled = false;
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getNominados();
  }

  getNominados() {
    this.gameService.getNominados().subscribe((res) => (this.juegos = res));
  }

  onVotar(id: string) {
    this.btnDisabled = true;

    this.gameService
      .votarJuego(id)
      .subscribe((res: { ok: boolean; message: string }) => {
        if (res.ok) {
          Swal.fire('Gracias', res.message, 'success');
        } else {
          Swal.fire('Error', res.message, 'error');
        }

        this.btnDisabled = false;
      });
  }
}
