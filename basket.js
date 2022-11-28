class Basket {

    constructor(){
        let basket = localStorage.getItem("basket");
        if(basket == null){
            this.basket = [];
        }else{
            this.basket = JSON.parse(basket);
        }
    }

    save(){
        localStorage.setItem("basket", JSON.stringify(this.basket));
    }
   
    add(product){
        let foundProduct = this.basket.find(p => p.id == product.id);
        if(foundProduct != undefined){
            foundProduct.quantity++;
        }else{
            product.quantity = 1;
            this.basket.push(product);
        }
        this.save();
    }
    
    remove(product){
        this.basket = basket.filter(p => p.id != product.id);
        this.save();
    }
    
    changeQuantity(product,quantity){
        let foundProduct = this.basket.find(p => p.id == product.id);
        if(foundProduct != undefined){
            foundProduct.quantity += quantity;
            if(foundProduct.quantity <=0){
                this.remove(foundProduct);
            }else{
                this.save();
            }
        }
    }
    getNumberProduct(){
        let number = 0;
        for(let product of this.basket){
            number += product.quantity;
        }
        return number;
    }
    getTotalPrice(){
        let total = 0;
        for(let product of this.basket){
            total += product.quantity * product.prix;
        }
        return total;
    }
}