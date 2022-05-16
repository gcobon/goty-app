import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css'],
})
export class GraficoBarraHorizontalComponent implements OnInit, OnDestroy {
  @Input() data = [
    {
      name: 'Juego 1',
      value: 0,
    },
    {
      name: 'Juego 2',
      value: 0,
    },
    {
      name: 'Juego 3',
      value: 0,
    },
    {
      name: 'Juego 4',
      value: 0,
    },
  ];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Juegos';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votos';

  colorScheme = 'nightLights';

  private intervalo!: any;

  constructor() {}

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  ngOnInit(): void {}
}
