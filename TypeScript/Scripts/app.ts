interface Mountain {
    name: String,
    height: number,
}

let mount1: Mountain = {
    name: 'Kilimanjaro',
    height: 19341
};
let mount2: Mountain = {
    name: 'Everest',
    height: 29029
};
let mount3: Mountain = {
    name: 'Denali',
    height: 20310
};
let mountains: Mountain[] = [
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

function findNameOfTallestMountain(Mountain:Mountain) {

    let num = 0;    

    for (let mount of mountains) {
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
interface Product {
    name: String,
    price: number,
}

let prod1: Product = {
    name: 'Samsung Note',
    price: 1200
};
let prod2: Product = {
    name: 'Philips Monitor',
    price: 1300
};
let prod3: Product = {
    name: 'Samsung Laptop',
    price: 1500
};
let products: Product[] = [
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

function calcAverageProductPrice(Products:Product) {
    let sum = 0;
    for (let prod of products) {
        sum = prod.price + sum
    };
    let avg = sum / products.length
    console.log('Average product price is ' + avg);
   
}

interface InventoryItem /*extends Product*/{
    product: Product,
    quantity: number,

}
let item1: InventoryItem = {
    product: {
        name: 'motor',
        price: 10,
    },
    quantity: 10,
};
let item2: InventoryItem = {
    product: {
        name: 'sensor',
        price: 12.50,
    },
    quantity: 4,
}
let item3: InventoryItem = {
    product: {
        name: 'LED',
        price: 1,
    },
    quantity: 10,
}
let inventory: InventoryItem[] = [
    item1, item2, item3
];

function calcInventoryValue(Inventory: InventoryItem) {
    let prodValue = 0;
    for (let iItem of inventory) {
        prodValue = iItem.quantity * iItem.product.price
    };
    let iValue = prodValue * inventory.length
    console.log('The Inventory value is ' + iValue);
}