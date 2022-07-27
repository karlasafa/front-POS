import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rekening',
  templateUrl: './rekening.component.html',
  styleUrls: ['./rekening.component.css']
})
export class RekeningComponent implements OnInit {

  constructor(private judulService: Title) { }

  ngOnInit(): void {
    this.judulService.setTitle('Rekening Page');
  }

}
