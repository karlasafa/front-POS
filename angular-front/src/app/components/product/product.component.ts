import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  props : any;
 btnprops1: any;
  warna: any;
  btnprops2: any;
  props2: any;

  constructor(private judulService: Title) { }

  ngOnInit(): void {
    this.judulService.setTitle('Product Page');
  }

  Muncul(states:any){
    if(states){
     this.props = states
      this.warna = 'green'

    }
    else{
      this.props = states
      this.warna ='red'
    }
  }
  Ada(state:any){
    if(state){
      this.props2 = state;
      this.btnprops2 = 'none';
    }
    else{
      this.props2 = state;
      this.btnprops2 = 'block';
    }
  }

}

