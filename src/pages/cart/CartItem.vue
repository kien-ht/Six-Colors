<template>
  <b-list-group-item class="c-item">
    <b-form-checkbox
      class="w-checkbox"
      :checked="isChecked"
      @change="toggleCheckbox($event, addedProduct)"
    ></b-form-checkbox>
    <div class="w-product c-item__product">
      <div class="c-item__img">
        <a href="">
          <b-img :src="addedProduct.img" :alt="addedProduct.name"></b-img>
        </a>
      </div>
      <p class="c-item__title fw-600">
        <a href="">{{ addedProduct.name }}</a>
      </p>
      <div class="c-item__variants">
        <p class="c-item__variants__item" v-for="(variant, index) in addedProduct.selectedVariant" :key="index">
          {{ variant.name }}: {{ variant.selectedOption }}
        </p>
      </div>
    </div>
    <p class="c-item__uprice w-unit-price">${{ addedProduct.price }}</p>
    <p class="c-item__ft w-quantity">
      <b-button variant="outline-primary" @click="onDecreaseQuantity">-</b-button>
      <!-- <b-form-input :value="quantity" @change="handleChangeQuantity($event)" /> -->
      <span>{{ quantity }}</span>
      <b-button variant="outline-primary" @click="onIncreaseQuantity">+</b-button>
    </p>
    <p class="w-price">${{ totalPriceOfProduct }}</p>
    <div>
      <b-button variant="danger" @click="onOpenDeleteModal(addedProduct)">x</b-button>
    </div>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'CartItem',

  props: {
    addedProduct: {
      type: Object
    }
  },

  data() {
    return {
      quantity: 0,
      isChecked: false
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
      this.$emit('toggleDeleteModal')
      this.$emit('onDelete', item)
    },

    toggleCheckbox(e, item) {
      this.isChecked = !this.isChecked
      this.$emit('handleSelectProduct', item)
    },

    onDecreaseQuantity() {
      this.quantity--
      const product = this.addedProduct
      product.quantity = this.quantity
      this.$emit('handleDecreaseQuantity', product)
    },

    onIncreaseQuantity() {
      this.quantity++
      const product = this.addedProduct
      product.quantity = this.quantity
      this.$emit('handleIncreaseQuantity', product)
    }

    // handleChangeQuantity() {
    //   console.log(11)
    // }
  }
}
</script>
