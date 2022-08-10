import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rekening',
  templateUrl: './rekening.component.html',
  styleUrls: ['./rekening.component.css']
})
export class RekeningComponent implements OnInit {
  props : any;
  btnprops1 : any;

  constructor(private judulService: Title) { }

  ngOnInit(): void {
    this.judulService.setTitle('Rekening Page');
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
