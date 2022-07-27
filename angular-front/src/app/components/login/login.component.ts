import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tittle: string = 'Login Form';

  constructor(private judulService: Title) { }

  ngOnInit(): void {
    this.judulService.setTitle('Login Form')
  }

}
