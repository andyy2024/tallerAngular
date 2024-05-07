import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Serie[] = [];
  seasonsAvarage: number = 0;

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.getSeasonsAvarage();
    });
  }

  getSeasonsAvarage(): number {
    let sum = 0;
    this.series.forEach(s => {
      sum += s.seasons;
    });
    this.seasonsAvarage = sum / this.series.length;
    return this.seasonsAvarage;
  }

}
