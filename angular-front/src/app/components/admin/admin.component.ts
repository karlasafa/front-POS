import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  props : any;
  btnprops1 : any;
  datausers : any;
  data : any
  totaldata : any
  people : any

  constructor(private judulService: Title,private service: PostService) { }

  ngOnInit(): void {
    this.judulService.setTitle('Admin Page');
    this.service.getPeople() 
    .subscribe(response => {
      this.data= response
      this.totaldata= this.data.count
      this.people= this.data.results
      console.log(this.people)

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
