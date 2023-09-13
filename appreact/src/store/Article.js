import { makeAutoObservable } from "mobx";

class Article {

    // Attributs
    _id;
    _name;
    _description;
    _price;
    _picture;
    _quantity;
    _alt;

    // Constructeur
    constructor (id, name, description, price, picture, quantity, alt) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._price = price;
        this._picture = picture;
        this._quantity = quantity;
        this._alt = alt;
        makeAutoObservable(this);
    }

    // Accesseurs de lecture
    get id() { return this._id; }
    get name() { return this._name; }
    get description() { return this._description; }
    get price() { return this._price; }
    get picture() { return this._picture; }
    get quantity() { return this._quantity; }
    get alt() { return this._alt; }

    // Accesseurs d'écriture
    set name (name) { this._name = name; }
    set description (description) { this._description = description; }
    set price (price) { this._price = price; }
    set picture (picture) { this._picture = picture; }
    set quantity (quantity) { this._quantity = quantity; }
    set alt(alt) { this._alt = alt; }
}
export default Article;