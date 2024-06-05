import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductDetailsComponent,HttpClientModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers:[ProductService]
})
export class HomeComponent implements OnInit {
  products:Array<any>=[]

constructor(private service :ProductService ){

}
  ngOnInit(): void {
    this.service.getAllProductsWithLimit().subscribe({next:(result)=>{
      this.products=result;
      console.log(this.products);
      
    }})
  }
}
