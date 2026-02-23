import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';


type SharePlatform = 'telegram' | 'whatsapp';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  //@Output() changed = new EventEmitter<void>();
  @Output() delete = new EventEmitter<number>();

 like(): void {
    this.product.likes += 1;
    //this.product.isFavorite = this.product.likes > 0;
    //this.changed.emit();
  }

  unlike(): void {
    if (this.product.likes > 0) this.product.likes -= 1;
    //this.product.isFavorite = this.product.likes > 0;
    //this.changed.emit();
  }

  selectedImage = '';

  ngOnInit(): void {
    this.selectedImage = this.product.image;
  }

  stars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  fullStars(): number {
    return Math.floor(this.product.rating);
  }
}