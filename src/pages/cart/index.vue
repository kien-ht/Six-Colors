<template>
  <div>
    <h1>Your cart</h1>
    <cart-list
      :addedProducts="addedProducts"
      @handleDeleteInCart="handleDelete"
      @handleSelectMultiple="handleSelectMulti"
    />
    <div class="cart-footer">
      <div>
        <b-button variant="danger" @click="toggleDeleteBulkModal" :disabled="isBtnDeleteBulkDisabled"
          >Bulk Delete</b-button
        >
      </div>
      <div class="cart-footer__right">
        <p class="fw-600">Total price: ${{ getTotalPrice }}</p>
        <b-button variant="primary" @click="$router.push('/checkout')">Checkout</b-button>
      </div>
    </div>
    <confirmation-modal
      ref="confirmDeleteBulkModal"
      @confirmDeleteProduct="confirmDeleteBulk"
      @cancelDeleteProduct="cancelDeleteBulk"
    />
  </div>
</template>

<script>
import ConfirmationModal from '../../components/thaont/ConfirmationModal.vue'
import CartList from './CartList.vue'
export default {
  components: { CartList, ConfirmationModal },

  name: 'Cart',

  data() {
    return {
      addedProducts: [],
      deletingProducts: [],
      isBtnDeleteBulkDisabled: true
    }
  },

  created() {
    this.fetchProductsInCart()
  },

  computed: {
    getTotalPrice() {
      return this.addedProducts.reduce((sum, object) => {
        return sum + object.price * object.quantity
      }, 0)
    }
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
      this.$refs.confirmDeleteBulkModal.isShow = !this.$refs.confirmDeleteBulkModal.isShow
    },

    handleSelectMulti(arr) {
      if (arr.length) {
        this.isBtnDeleteBulkDisabled = false
      } else {
        this.isBtnDeleteBulkDisabled = true
      }
      this.deletingProducts = arr
    },

    confirmDeleteBulk() {
      const remainProducts = this.addedProducts.filter((product) => {
        return !this.deletingProducts.find((item) => {
          return item.id === product.id
        })
      })
      this.addedProducts = remainProducts
      localStorage.setItem('productsInCart', JSON.stringify(remainProducts))
      this.$refs.confirmDeleteBulkModal.isShow = false
    },

    cancelDeleteBulk() {
      this.$refs.confirmDeleteBulkModal.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../scss/pages/cart.scss');
</style>
