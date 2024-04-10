import { Component , OnInit, Input} from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private dataStorage: DataStorageService){};
  // cartCount:number = 0 ;
  @Input() cartCount:number = 0;
  ngOnInit(): void {
    var getval =  this.dataStorage.getCartData();
    this.cartCount = getval ? getval.length : 0 ;
  }
}
