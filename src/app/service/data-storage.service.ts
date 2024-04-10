import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }
  // store data in localstorage
  storeCardData(data:any)
  {
    let cardData = JSON.stringify(data);
    localStorage.setItem('cart-data',cardData);
  }
  // get data from localStorage
  getCartData()
  {
    let getData:any = localStorage.getItem('cart-data');
    return JSON.parse(getData);
  }
}
