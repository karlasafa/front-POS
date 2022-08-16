import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  props : any;
  btnprops1 : any;
  datausers : any;

  constructor(private judulService: Title) { }

  ngOnInit(): void {
    this.judulService.setTitle('Admin Page');
    this.datausers = [
      {
        id:1,
        name:"James",
        position:"Directur",
        email:"James999@gmail.com"

      },
      {
        id:2,
        name:"Lily",
        position:"Manager",
        email:"Risakaaa@gmail.com"
      },
      {
        id:3,
        name:"Haruka",
        position:"Staff",
        email:"Haruka48@gmail.com"
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
