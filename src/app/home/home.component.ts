import { Component , OnInit} from '@angular/core';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private getData:GetDataService){}
  getCategoriesData:any;
  getapplicationceProductData:any=[];
  getfashionproductData:any = []
  bannerImage = [
    {
      id:1,
      img:'https://i.pcmag.com/imagery/reviews/04jlYF4fsF2M5cejiU8lw7G-2.fit_lim.size_840x473.v1685028816.jpg'
    },
    {
      id:2,
      img:'https://cdn.mos.cms.futurecdn.net/J4JXcSkDiDJ2gWjXYKMHNm.jpg'
    },
    {
      id:3,
      img:'https://images.herzindagi.info/image/2022/May/clothes-to-repeat-fashion-tips.jpg'
    }
  ]
  ngOnInit(): void {
     this.getCategoriesData = this.getData.categoriesData;
     this.getData.productData.filter((ele:any)=> {
      if(ele.pdCategory == 'appliance')
      {
          this.getapplicationceProductData.push(ele);
      }
      if(ele.pdCategory == 'fashion')
      {
        this.getfashionproductData.push(ele);
      }
     })
  }
}

