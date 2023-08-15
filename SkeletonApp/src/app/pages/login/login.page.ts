import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /**
   * Se genera el modelo user con dos claves
   * cada clave tiene su valor inicial
   */
  user={
    usuario:"",
    password:""
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  ingresar(){
    console.log(this.user)
    // Se declara e instancia un elemento de tipo NavigationExtras
    let navigationextras: NavigationExtras={
      state:{
        user: this.user //Al state le asigno un objeto con clave valor
      }
    }
    this.router.navigate(['/home'],navigationextras);
  }
}
