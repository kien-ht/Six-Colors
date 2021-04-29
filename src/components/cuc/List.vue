<template>
<div>

 <router-link :to="`/uitem-detail/${product.id}`">
                
                <div class="card" style="width: 18rem;">
  <img :src='product.img' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i>Shop: {{product.seller}}</i></li>
    <li class="list-group-item">Price: {{product.price}}</li>
    <li class="list-group-item">Quantity-Sold: {{product.quantitySold}}</li>
  </ul>
  <div class="card-body">
    <small  class='text-muted'>{{product.averageRate}} <i class="far fa-star"></i></small>
  </div>
</div>

</router-link>
 
  </div>
</template>

<script>
export default {
  props:{
    product:{}
  }
}


</script>

<style>

</style>