import { Injectable, inject } from '@angular/core';
// Esto nos permite hacer peticiones al back o a una API
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  httpClient = inject(HttpClient);

  API_URL_GET = "http://localhost:3000/obtenerProductos";
  API_URL_POST = "http://localhost:3000/registrarProducto";
  API_URL_PUT = "http://localhost:3000/actualizarProducto/:_id";
  API_URL_DELETE = "http://localhost:3000/eliminarProducto/:_id";


  // OBTENER DATOS
    getProducts(){
      // Hago la petición get
      return this.httpClient.get(this.API_URL_GET);
    } 


  // CREAR DATOS
    post_product(nombre: string, imagen: string, precio: number){

      const infoProducto = {
        nombre: nombre, 
        imagen: imagen,
        precio: precio
      }

      return this.httpClient.post(this.API_URL_POST, infoProducto)

    }


  // MODIFICAR DATOS
  putProduct(nombre: string, imagen: string, precio: number, id: string){

    const infoProducto = {
      nombre: nombre, 
      imagen: imagen,
      precio: precio,
    }

    return this.httpClient.put(`${this.API_URL_PUT}/${id}`,infoProducto)
  }


  // ELIMINAR DATOS
  deleteProduct(id:string){
    return this.httpClient.delete(`${this.API_URL_DELETE}/${id}`);

  }


}
