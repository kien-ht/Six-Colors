<template>
  <b-modal title="Delete product from cart" hide-footer v-model="isShow">
    Do you want to delete this product from cart?
    <div class="c-modal__ft">
      <b-button variant="outline-primary" @click="onNo">Cancel</b-button>
      <b-button variant="danger" @click="onYes">Delete</b-button>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'ConfirmationModal',

  data() {
    return {
      isShow: false
    }
  },

  methods: {
    onYes() {
      this.$emit('confirmDeleteProduct')
    },

    onNo() {
      this.$emit('cancelDeleteProduct')
    }
  }
}
</script>
