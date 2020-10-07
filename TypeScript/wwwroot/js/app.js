var mount1 = {
    name: 'Kilimanjaro',
    height: 19341
};
var mount2 = {
    name: 'Everest',
    height: 29029
};
var mount3 = {
    name: 'Denali',
    height: 20310
};
var mountains = [
    mount1, mount2, mount3
];
//let mountains: Mountain[] = [{
//        name: 'Kilimanjaro',
//        height: 19341,
//    },
//    {
//        name: 'Everest',
//        height: 29029,
//    },
//    {      
//        name: 'Denali',
//        height: 20310,
//    }
//];
function findNameOfTallestMountain(Mountain) {
    var num = 0;
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mount = mountains_1[_i];
        if (mount.height > num) {
            num = mount.height;
        }
        else {
            console.log(mount.name + ' is the tallest mountain at ' + num + ' ft.');
        }
    }
    //for (var i = 0; i < mountains.length; i++) {
    //    if (mountains[i].height === num) {
    //        return 'The tallest mountain is ' + mountains[i].name;
    //    }
    //}
}
var prod1 = {
    name: 'Samsung Note',
    price: 1200
};
var prod2 = {
    name: 'Philips Monitor',
    price: 1300
};
var prod3 = {
    name: 'Samsung Laptop',
    price: 1500
};
var products = [
    prod1, prod2, prod3
];
//let products: Product[] = [
//    {
//        name: 'Samsung Note',
//        price: 1200,
//    },
//    {
//        name: 'Philips Monitor',
//        price: 1300,
//    },
//    {
//        name: 'Samsung Laptop',
//        price: 1500,
//    }
//];
function calcAverageProductPrice(Products) {
    var sum = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var prod = products_1[_i];
        sum = prod.price + sum;
    }
    ;
    var avg = sum / products.length;
    console.log('Average product price is ' + avg);
}
var item1 = {
    product: {
        name: 'motor',
        price: 10,
    },
    quantity: 10,
};
var item2 = {
    product: {
        name: 'sensor',
        price: 12.50,
    },
    quantity: 4,
};
var item3 = {
    product: {
        name: 'LED',
        price: 1,
    },
    quantity: 10,
};
var inventory = [
    item1, item2, item3
];
function calcInventoryValue(Inventory) {
    var prodValue = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var iItem = inventory_1[_i];
        prodValue = iItem.quantity * iItem.product.price;
    }
    ;
    var iValue = prodValue * inventory.length;
    console.log('The Inventory value is ' + iValue);
}
//# sourceMappingURL=app.js.map