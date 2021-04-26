<template>
  <div>
    <div v-if="addedProducts.length">
      <b-list-group class="c-list">
        <div class="cart-header">
          <div class="cart-header__checkbox w-checkbox"></div>
          <div class="cart-header__product w-product">Product</div>
          <div class="cart-header__unit-price w-unit-price">Price</div>
          <div class="cart-header__quantity w-quantity">Quantity</div>
          <div class="cart-header__price w-price">Total</div>
          <div class="cart-header__action w-action">Action</div>
        </div>
        <div v-for="addedProduct in addedProducts" :key="addedProduct.id">
          <cart-item :addedProduct="addedProduct" @handleOpenDeleteModal="handleOpenDeleteModal" />
        </div>
      </b-list-group>
      <confirmation-modal v-show="isModalShown" />
    </div>
    <div v-else>No products in cart</div>
  </div>
</template>

<script>
import ConfirmationModal from '../../components/thaont/ConfirmationModal.vue'
import CartItem from './CartItem.vue'

export default {
  components: { CartItem, ConfirmationModal },

  name: 'CartList',

  props: {
    addedProducts: {
      type: Array
    }
  },

  data() {
    return {
      isModalShown: false
    }
  },

  methods: {
    handleOpenDeleteModal(item) {
      console.log(item)
    }

    // toggleDeleteModal() {
    //   this.isModalShown = !this.isModalShown
    // }
  }
}
</script>
