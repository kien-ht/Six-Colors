<template>
  <div>
    <h1>Your cart</h1>
    <cart-list :addedProducts="addedProducts" @handleDeleteInCart="handleDelete" />
    <div class="cart-footer">
      <div>
        <b-button variant="danger" @click="toggleDeleteBulkModal">Bulk Delete</b-button>
      </div>
      <div class="cart-footer__right">
        <p class="fw-600">Total price: $100</p>
        <b-button variant="primary">Checkout</b-button>
      </div>
    </div>
    <confirmation-modal
      :isShow="isModalShown"
      @confirmDeleteProduct="confirmDeleteBulk"
      @cancelDeleteProduct="cancelDeleteBulk"
    />
  </div>
</template>

<script>
import ConfirmationModal from '../../components/thaont/ConfirmationModal.vue'
import CartList from './CartList.vue'
import dummyProducts from '../../json/products.json'
export default {
  components: { CartList, ConfirmationModal },

  name: 'Cart',

  data() {
    return {
      addedProducts: [],
      isModalShown: false
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
    },

    handleDelete(item) {
      const newAddProducts = this.addedProducts.filter((product) => {
        return product.id !== item.id
      })
      this.addedProducts = newAddProducts
      localStorage.setItem('productsInCart', JSON.stringify(newAddProducts))
    },

    toggleDeleteBulkModal() {
      this.isModalShown = !this.isModalShown
    },

    confirmDeleteBulk() {
      console.log(11)
    },
    
    cancelDeleteBulk() {
      this.isModalShown = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../scss/pages/cart.scss');
</style>
