class item{
 itemid:number;
 itemname: string;
 itemprice: number;
 category:string;

 constructor(itemid:number,itemname:string, itemprice:number, category:string) {
    this.itemid=itemid;
    this.itemname=itemname;
    this.itemprice=itemprice;
    this.category=category;
    

 }
}
let o = new item(1,'book',30,'stationary')
let print1 =(o:item)=>{console.log(o);}
print1(o);