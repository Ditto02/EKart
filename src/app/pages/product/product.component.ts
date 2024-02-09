import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SlicePipe,RouterOutlet,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(public api:ApiService){ }
  title = 'products';
  data:any;
  ngOnInit(){
    this.api.getData().subscribe(response=>{
      this.data=response;
    });
  }
}
