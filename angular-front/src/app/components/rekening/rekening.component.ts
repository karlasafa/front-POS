import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rekening',
  templateUrl: './rekening.component.html',
  styleUrls: ['./rekening.component.css']
})
export class RekeningComponent implements OnInit {
  props : any;
  btnprops1: any;
  datausers: any;

  constructor(private judulService: Title) { }

  ngOnInit(): void {
    this.judulService.setTitle('Rekening Page');
    this.datausers = [
      {
      id:1,
      name:"Severus",
      rekening:"BCA"
      },
      {
        id:2,
        name:"Lily",
        rekening:"Mandiri"
      },
      {
        id:3,
        name:"Nastaya",
        rekening:"BNI"

      }
    ]

  }
  Muncul(state:any){

    if(state){
      this.props = state;
      this.btnprops1 = 'none';
    }
    else{
      this.props = state;
      this.btnprops1 = 'block';     
    }
  }

}
