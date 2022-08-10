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

  constructor(private judulService: Title) { }

  ngOnInit(): void {
    this.judulService.setTitle('Admin Page');
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
