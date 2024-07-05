import { Component, inject } from '@angular/core';
// Este es nuestro servicio para hacer las peticiones a nuestro backend
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productsService = inject(ProductsService);
  allProducts : any[] = [];

  // Acá obtenemos la información al hacer la petición get
  // Acá obtenemos nuestro productos


  obtenerProductos(){
    console.log("Este es mi método obtener productos")
    this.productsService.getProducts().subscribe((res: any)=> {
      if(res){
        console.log(res);
        this.allProducts = res;
      } else{
        console.error("Ups, hubo un error");
      }
    });
  }


  // Método que permite que se rendericen los productos con el sitio web
  ngOnInit(){
    this.obtenerProductos();
  }

}
