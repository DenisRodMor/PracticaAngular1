import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-producto-hijo-c',
  templateUrl: './producto-hijo-c.component.html',
  styleUrls: ['./producto-hijo-c.component.css']
})
export class ProductoHijoCComponent implements OnInit {

  @Input() productoDeLista:Producto;
  @Input() indice: number;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }





}
