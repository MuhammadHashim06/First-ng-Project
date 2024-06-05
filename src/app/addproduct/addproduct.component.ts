import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss',
})
export class AddproductComponent {
  constructor(private route:Router,
    private service:ProductService,
  ){

  }
  product:{
    "title":string,
    "price":number,
    "description":string,
    "image":string,
    "category":string
  }={title:"",
    price:0,
    description:"",
    image:"",
    category:"",
  }
  saveProduct(){
this.service.createProduct(this.product).subscribe({
  next:(result)=> {
      alert("Item Succesfully added");
      this.route.navigate(['/']);
  },
})
  }
}
