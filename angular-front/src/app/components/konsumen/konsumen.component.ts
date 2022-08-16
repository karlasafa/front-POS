import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-konsumen',
  templateUrl: './konsumen.component.html',
  styleUrls: ['./konsumen.component.css']
})
export class KonsumenComponent implements OnInit {
  props : any;
  btnprops1 : any;
  datausers : any;

  constructor(private judulService: Title) { }

  ngOnInit(): void {
    this.judulService.setTitle('Konsumen Page');
    this.datausers = [
      {
        id:1,
        name:"Mika",
        email:"mikatambayong@gmail.com"

      },
      {
        id:2,
        name:"Riska",
        email:"Risakaaa@gmail.com"
      },
      {
        id:3,
        name:"Kinan",
        email:"KINAN22@gmail.com"
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
