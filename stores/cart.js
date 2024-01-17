import { defineStore } from 'pinia';
import productsData from '../public/products.json';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartProducts: {},
    }),
    getters: {
        formattedCart() {
            return Object.keys(this.cartProducts).map(productId => {
                const productInfo = this.cartProducts[productId];
                if (productInfo) {
                    return {
                        id: productId,
                        image: productInfo.image,
                        title: productInfo.title,
                        regular_price: productInfo.regular_price,
                        quantity: productInfo.quantity,
                        cost: productInfo.quantity * productInfo.regular_price.value,
                    };
                } else {
                    return {
                        id: '',
                        image: '',
                        title: '',
                        regular_price: 0,
                        quantity: 0,
                        cost: 0,
                    };
                }
            });
        },
        total() {
            return Object.keys(this.cartProducts).reduce((acc, id) => {
                const productInfo = this.cartProducts[id];
                if (productInfo) {
                    return acc + productInfo.regular_price.value * productInfo.quantity;
                }
                return acc;
            }, 0);
        },
        productsTotal() {
            return Object.keys(this.cartProducts).reduce((acc, id) => {
                const productInfo = this.cartProducts[id];
                if (productInfo) {
                    return acc + productInfo.quantity;
                }
                return acc;
            }, 0);
        },
    },
    actions: {
        add(productId) {
            if (this.cartProducts.hasOwnProperty(productId)) {
                this.cartProducts[productId].quantity += 1;
            } else {
                const product = productsData.find(p => p.id === productId);
                if (product) {
                    this.cartProducts[productId] = {
                        image: product.image,
                        title: product.title,
                        regular_price: product.regular_price,
                        quantity: 1,
                    };
                }
            }
        },
        remove(productId) {
            if (!this.cartProducts[productId]) {
                return;
            }
            this.cartProducts[productId].quantity -= 1;

            if (this.cartProducts[productId].quantity === 0) {
                delete this.cartProducts[productId];
            }
        },
        removeProduct(productId) {
            delete this.cartProducts[productId];
        },
    },
});