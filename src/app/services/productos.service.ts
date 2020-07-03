import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto, ProductoIdx } from '../interfases/info-pagina.info';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoIdx[] = [];
  productosFiltrado: ProductoIdx[] = [];


  constructor(private http: HttpClient) {

    this.cargarProducto();
  }

  private cargarProducto() {

    return new Promise((resolve, rejects) => {

      this.http.get('https://angular-porfolio-1e62a.firebaseio.com/productos_idx.json')
        .subscribe((resp: ProductoIdx[]) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
        });

    })

  }

  getProducto(id: string) {
    return this.http.get(`https://angular-porfolio-1e62a.firebaseio.com/productos/${id}.json`);

  }
  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      this.cargarProducto().then(() => {
        this.filtarProductos(termino);
      });
    } else {
      this.filtarProductos(termino);
    }
  }

  private filtarProductos(termino: string) {

    this.productosFiltrado = [];
    termino = termino.toLowerCase();

    this.productos.forEach(prod => {

      const tituloLower = prod.titulo.toLowerCase();

      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrado.push(prod);
      }
    })
  }
}
