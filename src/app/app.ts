import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CATEGORIES, PRODUCTS } from './data/products';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  query = '';
  selectedCategoryId = signal<number | null>(null);

  categories: Category[] = CATEGORIES;
  allProducts: Product[] = PRODUCTS;

  showLikedOnly = signal(false);

toggleLikedOnly() {
  this.showLikedOnly.update(v => !v);
}

  selectCategory(id: number) {
    this.selectedCategoryId.set(id);
  }
  
  //favorites: Product[] = [];

  //toggleFavorite(productId: number): void {
    //const product = this.allProducts.find(p => p.id === productId);
    //if (!product) return;

    //product.isFavorite = !product.isFavorite;

    //this.favorites = this.allProducts.filter(p => p.isFavorite);
  //}
  
  //constructor() {
    //this.favorites = this.allProducts.filter(p => p.isFavorite);
  //}
  selectedProducts = computed(() => {
    const id = this.selectedCategoryId();
    const showFav = this.showLikedOnly();
    const q = this.query.trim().toLowerCase();

    let list = this.allProducts;

    if (id !== null) list = list.filter(p => p.categoryId === id);
    if (showFav) list = list.filter(p => p.likes > 0);
    if (q) list = list.filter(p => p.name.toLowerCase().includes(q));

    return list;
  });
  
}