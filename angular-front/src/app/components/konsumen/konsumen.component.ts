import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-konsumen',
  templateUrl: './konsumen.component.html',
  styleUrls: ['./konsumen.component.css']
})
export class KonsumenComponent implements OnInit {
  props : any;
  btnprops1 : any;
  datausers : any;
  data : any
  totaldata : any
  planet : any

  constructor(private judulService: Title,private service: PostService) { }

  ngOnInit(): void {
   this.service.getPlanets() 
    .subscribe(response => {
      this.data= response
      this.totaldata= this.data.count
      this.planet= this.data.results
      console.log(this.planet)
    })
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
