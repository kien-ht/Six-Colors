<template>
<<<<<<< HEAD
  <div>cartitem</div>
=======
  <b-list-group-item class="c-item">
    <b-form-checkbox class="w-checkbox"></b-form-checkbox>
    <div class="w-product c-item__product">
      <div class="c-item__img">
        <a href="">
          <b-img :src="addedProduct.image" :alt="addedProduct.title"></b-img>
        </a>
      </div>
      <p class="c-item__title fw-600">
        <a href="">{{ addedProduct.title }}</a>
      </p>
      <p>variation: {{ addedProduct.variation }}</p>
    </div>
    <p class="c-item__uprice w-unit-price">${{ addedProduct.price }}</p>
    <p class="c-item__ft w-quantity">
      <b-button variant="outline-primary" @click="onDecreaseQuantity">-</b-button>
      <b-form-input :value="quantity" @change="handleChangeQuantity($event)" />
      <b-button variant="outline-primary" @click="onIncreaseQuantity">+</b-button>
    </p>
    <p class="w-price">${{ totalPriceOfProduct }}</p>
    <div>
      <b-button variant="danger" @click="onOpenDeleteModal(addedProduct)">x</b-button>
    </div>
  </b-list-group-item>
>>>>>>> 32f9fab (add component in cart component)
</template>

<script>
export default {
<<<<<<< HEAD
  name: 'CartItem'
}
</script>

<style>

</style>
=======
  name: 'CartItem',

  props: {
    addedProduct: {
      type: Object
    },
    handleDeleteOneProduct: {
      type: Function
    }
  },

  data() {
    return {
      quantity: 0
    }
  },

  created() {
    this.quantity = this.addedProduct.quantity
  },

  computed: {
    totalPriceOfProduct() {
      return this.addedProduct.price * this.quantity
    }
  },

  methods: {
    onOpenDeleteModal(item) {
      this.$emit('handleOpenDeleteModal', item)
    },

    onDecreaseQuantity() {
      this.quantity = this.addedProduct.quantity--
    },

    onIncreaseQuantity() {
      this.quantity = this.addedProduct.quantity++
    },

    handleChangeQuantity() {
      console.log(11)
    }
  }
}
</script>
>>>>>>> 32f9fab (add component in cart component)
