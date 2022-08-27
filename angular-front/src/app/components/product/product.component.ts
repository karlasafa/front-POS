import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostService } from 'src/app/services/post.service';

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
  data: any;
  starships: any;

  constructor(private judulService: Title,private service: PostService) { }

  ngOnInit(): void {
    this.judulService.setTitle('Product Page');
    this.service.getStarships()
    .subscribe(response =>{
      this.data = response
      this.starships = this.data.results
      console.log(this.data)
    }) 
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

