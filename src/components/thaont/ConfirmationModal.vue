<template>
  <b-modal title="Delete product from cart" hide-footer>
    Do you want to delete this product from cart?
    <div>
      <b-button variant="danger" @click="onYes">Delete</b-button>
      <b-button variant="outline-primary" @click="onNo">Cancel</b-button>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'ConfirmationModal',
  methods: {
    onYes() {
      console.log(1)
    },

    onNo() {
      console.log(2)
    }
  }
}
</script>
