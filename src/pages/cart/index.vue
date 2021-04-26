<template>
  <div>
    <h1>Your cart</h1>
    <cart-list :addedProducts="addedProducts" />
    <div class="cart-footer">
      <p class="fw-600">Total price: $100</p>
      <b-button variant="primary">Checkout</b-button>
    </div>
  </div>
</template>

<script>
import CartList from './CartList.vue'
import dummyProducts from '../../json/products.json'
export default {
  components: { CartList },

  name: 'Cart',

  data() {
    return {
      addedProducts: []
    }
  },

  created() {
    this.fetchProductsInCart()
  },

  methods: {
    fetchProductsInCart() {
      let initialAddedProducts
      const savedProducts = localStorage.getItem('productsInCart')
      if (savedProducts) {
        try {
          initialAddedProducts = JSON.parse(savedProducts)
          this.addedProducts = initialAddedProducts
        } catch (error) {
          console.log(error)
        }
      } else {
        initialAddedProducts = dummyProducts
        localStorage.setItem('productsInCart', JSON.stringify(initialAddedProducts))
      }
    }
  }
}
</script>

<style>
  @import url('../../scss/pages/cart.scss');
</style>
