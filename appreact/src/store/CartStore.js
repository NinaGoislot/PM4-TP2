import { makeAutoObservable} from "mobx";


class CartStore {
    _cart; // Tableau pour stocker les articles du panier

    constructor() {
        let currentCart = localStorage.getItem("Panier");
        if (currentCart == null) {
            this._cart = [];
        } else {
           this._cart = JSON.parse(currentCart);
        }
        
        makeAutoObservable(this);
    }

    get cart() { return this._cart; }

    set cart(cart) { this._cart = cart; }

    //Sauvegarde le panier dans le localStorage
    saveCart ()  {
        localStorage.setItem("Panier", JSON.stringify(this.cart)); 
    }

    //Ajoute un article dans le panier
    addCart (article) {
        let foundArticle = this.cart.find (item => item.id == article.id );
        if (foundArticle != undefined) {
            foundArticle.quantity++;
        } else {
            article.quantity = 1;
            this.cart.push(article);
        }
        this.saveCart();
    }

    //Retire un article du panier
    removeFromCart (article) {
        this.cart = this.cart.filter(item => item.id != article.id);
        this.saveCart();
    }

    changeQuantity(article, quantity) {
        let foundArticle = this.cart.find (item => item.id == article.id );
        if (foundArticle != undefined) {
            foundArticle.quantity+= quantity;
            if (foundArticle.quantity <= 0) {
                this.removeFromCart(foundArticle);
            } else {
                this.saveCart();
            }
        }
    }

    //Récupère le nombre total d'articles dans le panier
    getNumberArticle() {
        let number = 0;
        for (let item of this.cart) {
            number += item.quantity;
        }
        return number;
    }

    //Récupère le montant total du panier
    getTotalPrice() {
        let total = 0;
        for (let item of this.cart) {
            total += item.quantity * item.price;
        }
        return total;
    }

    //Récupère la quantité d'un article présent dans le panier
    getQuantityForArticle(article) {
        const foundArticle = this.cart.find((item) => item.id === article.id);
        return foundArticle ? foundArticle.quantity : 0;
      }
   
    //Récupère le contenu du panier sous forme d'objet
    getCartContents() {
        const cartContents = [];
        for (const item of this.cart) {
            cartContents.push({
                id: item._id,
                name: item._name,
                quantity: item._quantity,
                price: item._price
            });
        }
        return cartContents;
    }

     // Vide le localStorage
     clearLocalStorage() {
        localStorage.removeItem("Panier");
        this._cart = [];
        this.saveCart();
    }

}

export default CartStore;