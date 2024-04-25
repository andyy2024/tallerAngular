import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
