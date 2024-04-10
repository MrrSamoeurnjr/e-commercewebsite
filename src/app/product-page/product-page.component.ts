import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../service/get-data.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit{
getParamValue: any;
getProductData: any = [];
filterProductData: any = [];
getSubcategoriesOption: any = [];
constructor(private route:ActivatedRoute , private getData:GetDataService){}
ngOnInit(): void {
  this.getParamValue = this.route.snapshot.paramMap.get('name');
  this.getData.productData.filter((ele:any) => {
    if(ele.pdCategory == this.getParamValue)
    {
      this.getProductData.push(ele);
      this.filterProductData.push(ele);
    }
  });
  this.getData.subcategoriesFilterData.filter((ele:any) => {
    if(ele.categories == this.getParamValue)
    {
      this.getSubcategoriesOption.push(ele)
    }
  })
}
filterSelect(data:any)
  {
    this.filterProductData=[]
    var getfilterValue:any = data.target.value;
    console.log(getfilterValue , 'getfilterValue');
    if(getfilterValue != 'all')
    {
      this.getData.productData.filter((ele:any)=>{
        if(ele.pdSubCategory == getfilterValue)
        {
          this.filterProductData.push(ele);
        }
      });
    }
    else
    {
      this.filterProductData =  this.getProductData;
    }
  }
}
