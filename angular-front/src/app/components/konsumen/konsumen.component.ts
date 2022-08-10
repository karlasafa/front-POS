import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-konsumen',
  templateUrl: './konsumen.component.html',
  styleUrls: ['./konsumen.component.css']
})
export class KonsumenComponent implements OnInit {
  props : any;
  btnprops1 : any;

  constructor(private judulService: Title) { }

  ngOnInit(): void {
    this.judulService.setTitle('Konsumen Page');
    this.props='block'
    this.btnprops1='block'

  }
  Muncul(state:any){

    if(state === 'block'){
      this.props = state;
      this.btnprops1 = 'none';
    }
    else{
      this.props = state;
      this.btnprops1 = 'block';
    }
  }

}
