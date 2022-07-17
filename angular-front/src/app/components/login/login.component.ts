import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tittle: string = 'Login Form';

  constructor() { }

  ngOnInit(): void {
  }

}
