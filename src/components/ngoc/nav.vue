<template>
  <div class="checkout">
        <div class="home">
    <b-row>
      <b-col md="4"
        ><router-link class="nav-link nav-link-icon" to="/">
        Trang chủ</router-link
        ></b-col
      >
      <b-col md="4"
        ><router-link class="nav-link nav-link-icon" to="/cart">
        Giỏ hàng</router-link
        ></b-col
      >
      <b-col md="4"
        ><router-link class="nav-link nav-link-icon" to="/checkout">
        checkout</router-link
        ></b-col
      >
    </b-row>
        </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home{
    padding: 10px 0px 0px 0px ;
}
.home a{
    font-size: 24px;
}
</style>
