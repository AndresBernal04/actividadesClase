// Inyección de directivas de angular, trabajo con formularios.

import { Component, inject} from '@angular/core';
// Esto nos érmite interactuar con los formularios
import { FormsModule } from '@angular/forms';
// Esto nos permita hacer la redirección a otra página
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

// Vamos a inyectar nuestra directiva del router
  router = inject(Router);

  // Vamos a dar unos datos para validar administración
  administrador = {
    correo: "admin@gmail.com",
    contrasena: "123"
  };

  correo: string = "";
  contrasena: string = "";

  // Viene la lógica para redireccionar a la otra página

  iniciarSesion(){
    if(this.correo === this.administrador.correo && this.contrasena === this.administrador.contrasena){
      alert("Bienvenido, administrador.");
      this.router.navigate(["/admin"]);
    } else{
        alert("Correo o contraseña incorrectos.")
    }
  }
}
