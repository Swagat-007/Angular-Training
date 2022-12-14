var item = /** @class */ (function () {
    function item(itemid, itemname, itemprice, category) {
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    return item;
}());
var o = new item(1, 'book', 30, 'stationary');
var print1 = function (o) { console.log(o); };
print1(o);
