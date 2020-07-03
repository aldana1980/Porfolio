import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfases/info-pagina.info';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: Producto;
  id: string;


  constructor(private route: ActivatedRoute,
    private productoservice: ProductosService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(parametros => {

        this.productoservice.getProducto(parametros.id)
          .subscribe((producto: Producto) => {
            this.producto = producto;
            this.id = parametros.id;
          });
      });
  }

}
