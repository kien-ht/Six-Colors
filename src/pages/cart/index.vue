<template>
  <div>
    <h1>Your cart</h1>
    <div>
      <cart-list />
    </div>
  </div>
</template>

<script>
import CartList from './CartList.vue'
export default {
  components: { CartList },

  name: 'Cart',

  data () {
    return {
      addedProducts: []
    }
  },

  methods: {
    fetchProductsInCart () {
      let initialAddedProducts
      const savedProducts = localStorage.get(
        'addedProducts',
        JSON.parse(initialAddedProducts)
      )
      try {
        if (savedProducts) {
          this.addedProducts = savedProducts
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
</style>
