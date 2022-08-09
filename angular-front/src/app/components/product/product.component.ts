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

  constructor(private judulService: Title) { }

  ngOnInit(): void {
    this.judulService.setTitle('Product Page');
    this.props='block';
    this.btnprops1='block';
    this.warna='red'
  }

  Muncul(states:any){
    if(states === 'block'){
      this.props = states;
      this.btnprops1 = 'none'
      this.warna = 'red'

    }
    else{
      this.props = states;
      this.btnprops1 ='block'
      this.warna ='green'
    }
  }

}
