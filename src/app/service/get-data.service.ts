import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(){}
  subcategoriesFilterData = [
    {
      id:1 ,
      categories:'appliance',
      subcategories:'mobile',
    },
    {
      id:2 ,
      categories:'appliance',
      subcategories:'smart tv',
    },
    {
      id:3 ,
      categories:'appliance',
      subcategories:'air cooler',
    },
    {
      id:4 ,
      categories:'applance',
      subcategories:'refrigerator',
    },
    {
      id:5 ,
      categories:'fashion',
      subcategories:'tshirt',
    },
    {
      id:6 ,
      categories:'fashion',
      subcategories:'jeans',
    },
    {
      id:7 ,
      categories:'homeandfurniture',
      subcategories:'sofa',
    },
    {
      id:8 ,
      categories:'homeandfurniture',
      subcategories:'table',
    },
    {
      id:9 ,
      categories:'homeandfurniture',
      subcategories:'cover',
    },
    {
      id:10 ,
      categories:'toys',
      subcategories:'puzzle',
    },
    {
      id:11 ,
      categories:'toys',
      subcategories:'cars',
    },
    {
      id:12 ,
      categories:'toys',
      subcategories:'toys',
    },
  ]
  categoriesData = [
    {
      id:1,
      name:'Fashion',
      img:'https://www.realsimple.com/thmb/yla86Nr8GjRXe_9IyADQ638gPrg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fashion-trends-GettyImages-1457816153-d2982e954afe4b42bf5587f087da90d4.jpg',
      code:'fashion'
    },
    {
      id:2,
      name:'Home & Furniture',
      img:'https://5.imimg.com/data5/ANDROID/Default/2021/9/KZ/LZ/UK/43186895/product-jpeg.jpg',
      code:'homeandfurniture'
    },
    {
      id:3,
      name:'Appliance',
      img:'https://static-assets.business.amazon.com/assets/in/24th-jan/705_Website_Blog_Appliances_1450x664.jpg.transform/1450x664/image.jpg',
      code:'appliance'
    },
    {
      id:4,
      name:'Toys',
      img:'https://media.istockphoto.com/id/687165852/photo/toys.webp?b=1&s=170667a&w=0&k=20&c=aECJBVRGL3jNtrbiHOTMq1-5rSv3xeNUpZywEZYwvX4=',
      code:'toys'
    },
  ];
  productData = [
    {
      pdId: 8565,
      pdName:'SAMSUNG Galaxy F04 (Opal Green,64 GB)',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12222,
      pdCategory:'appliance',
      pdSubCategory:'mobile',
      pdImg:'https://i5.walmartimages.com/seo/Apple-iPhone-11-PRO-MAX-A2161-64GB-Space-Gray-US-Model-Factory-Unlocked-Cell-Phone-Very-Good-Condition_903e01ca-2271-40fa-bac3-62deae75a0ca.df01706b06717434601e0e4f62ec1235.jpeg'
    },
    {
      pdId: 8566,
      pdName:'Puzzle',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12265,
      pdCategory:'appliance',
      pdSubCategory:'puzzle',
      pdImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/15-puzzle_magical.svg/1200px-15-puzzle_magical.svg.png'
    },
    {
      pdId: 8567,
      pdName:'Cover',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12246,
      pdCategory:'appliance',
      pdSubCategory:'cover',
      pdImg:'https://www.shutterstock.com/image-vector/abstract-curve-shape-on-blue-600nw-2288072613.jpg'
    },
    {
      pdId: 8568,
      pdName:'Smart TV',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12254,
      pdCategory:'appliance',
      pdSubCategory:'smart tv',
      pdImg:'https://hisense.com.au/wp-content/uploads/2023/07/4-scaled.jpg'
    },
    {
      pdId: 8569,
      pdName:'Car',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12203,
      pdCategory:'appliance',
      pdSubCategory:'cars',
      pdImg:'https://robbreport.com/wp-content/uploads/2023/09/RR_50_Most_Expensive_Cars_You_Can_Buy_Right_Now_Cadillac_Celestiq.jpg?w=800'
    },
    {
      pdId: 8570,
      pdName:'Smart TV',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12202,
      pdCategory:'fashion',
      pdSubCategory:'smart tv',
      pdImg:'https://www.cnet.com/a/img/resize/19cd9565954b38cacb5e45faae57c19aac1b3085/hub/2023/04/06/0a2ae837-174a-468e-a91c-acaffaeaa1f9/roku-tv-23-06.jpg?auto=webp&fit=crop&height=675&width=1200'
    },
    {
      pdId: 8571,
      pdName:'Air cooler',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12221,
      pdCategory:'fashion',
      pdSubCategory:'air cooler',
      pdImg:'https://m.media-amazon.com/images/I/61XfqhiA-RL.jpg'
    },
    {
      pdId: 8572,
      pdName:'Toys',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12201,
      pdCategory:'fashion',
      pdSubCategory:'toys',
      pdImg:'https://planetgames.eu/wp-content/uploads/2018/04/blog-toys1.png'
    },
    {
      pdId: 8573,
      pdName:'Refrigerator',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12221,
      pdCategory:'fashion',
      pdSubCategory:'refrigerator',
      pdImg:'https://image-us.samsung.com/SamsungUS/home/05242023/gal/RF32CG5400SR_01_Stainless_Steel_SCOM.jpg?$product-details-jpg$'
    },
    {
      pdId: 8574,
      pdName:'Refrigerator',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12200,
      pdCategory:'homeandfurniture',
      pdSubCategory:'refrigerator',
      pdImg:'https://media.croma.com/image/upload/v1709644013/Croma%20Assets/Large%20Appliances/Refrigerator/Images/266717_8_hzywxn.png'
    },
    {
      pdId: 8575,
      pdName:'Home and Furniture',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12211,
      pdCategory:'homeandfurniture',
      pdSubCategory:'tshirt',
      pdImg:'https://img1.wsimg.com/isteam/ip/7f643464-f2d3-4167-90ce-28f4e8455821/31102-64-46-77-46-65-PILLOW.jpeg/:/rs=h:1000,cg:true,m'
    },
    {
      pdId: 8576,
      pdName:'Home and Furniture',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12221,
      pdCategory:'homeandfurniture',
      pdSubCategory:'jeans',
      pdImg:'https://hips.hearstapps.com/hmg-prod/images/index-furniture-65f07553eef2f.jpg?resize=2048:*'
    },
    {
      pdId: 8577,
      pdName:'Toys',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12243,
      pdCategory:'toys',
      pdSubCategory:'sofa',
      pdImg:'https://statik.tempo.co/data/2017/08/04/id_629412/629412_620.jpg'
    },
    {
      pdId: 8578,
      pdName:'Jean',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12201,
      pdCategory:'jeans',
      pdSubCategory:'table',
      pdImg:'https://images.veromoda.com/10247009/3633077/001/veromoda-vmbrendahighrisestraightfitjeans-blue.jpg?v=c8bb5e3083d6343fc12a1959b2de9523&format=webp&width=1280&quality=90&key=25-0-3'
    },
    {
      pdId: 8579,
      pdName:'Jean',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12298,
      pdCategory:'jeans',
      pdSubCategory:'table',
      pdImg:'https://www.ateliertuffery.com/cdn/shop/files/jean-femme-droit-taille-haute-stonewashed-1.jpg?v=1694596859'
    },
    {
      pdId: 8580,
      pdName:'T-Shirt',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12254,
      pdCategory:'tshirt',
      pdSubCategory:'table',
      pdImg:'https://www.okaidi.ng/2872534-large_default/basic-short-sleeved-t-shirt.webp'
    },
    {
      pdId: 8581,
      pdName:'Home and Furniture',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:17654,
      pdCategory:'homeandfurniture',
      pdSubCategory:'table',
      pdImg:'https://images.kirklands.com/is/image/Kirklands/h_122623_furnituress_hero01?$BannerWeb2019$'
    },
    {
      pdId: 8582,
      pdName:'T-Shirt',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12766,
      pdCategory:'fashion',
      pdSubCategory:'table',
      pdImg:'https://shop.fendt.com/media/catalog/product/cache/7ebdfc641d910df2cf087e8a2814fd86/f/e/fendt_herren_t-shirt_grau_melange_back.jpg'
    },
    {
      pdId: 8583,
      pdName:'Toy',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12355,
      pdCategory:'toys',
      pdSubCategory:'table',
      pdImg:'https://hips.hearstapps.com/hmg-prod/images/gh-101820-stem-toys-1602865117.png?crop=0.506xw:0.778xh;0.220xw,0.222xh&resize=640:*'
    },
    {
      pdId: 8584,
      pdName:'Toys',
      pdDesc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s',
      pdPrice:12435,
      pdCategory:'toys',
      pdSubCategory:'table',
      pdImg:'https://rewind-vintage-toys.co.uk/wp-content/uploads/2023/09/buzz-lightyear-banner.webp'
    },
  ]
}
