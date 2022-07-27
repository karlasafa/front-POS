import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-konsumen',
  templateUrl: './konsumen.component.html',
  styleUrls: ['./konsumen.component.css']
})
export class KonsumenComponent implements OnInit {

  constructor(private judulService: Title) { }

  ngOnInit(): void {
    this.judulService.setTitle('Konsumen Page');
  }

}
