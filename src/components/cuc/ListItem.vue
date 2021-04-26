<template>
  <div class='card-group' id='list-item'>
      <div class="row" > 
          <div class='card col-md-4' v-for="item in list" :key="item.id" >
    <img width="400" height="200" :src='item.img' class="img-fluid" alt='...'>
    <div class='card-body'>
      <h5 class='card-title'>{{item.nameProduct}}</h5>
      <p class='card-text'><i>Shop: {{item.nameShop}}</i></p>
      <p class='card-text'>Price: {{item.price}}</p>
      <p class='card-text'>Quantity-Sold: {{item.quantitySold}}</p>
      <p class='card-text'><small  class='text-muted'>{{item.review}} <i class="far fa-star"></i></small></p> 
    </div>
  </div></div>
  
 
</div>
</template>

<script>
import itemList from './fakeData.js'
export default {
    data(){
        return { 
            list:[]
        }
    },
    created(){
        console.log('data', itemList.getList())
        this.list= itemList.getList()
        console.log(this.list)
    }
}
</script>

<style scoped>
#list-item {
margin-top: 20px;
}
.card-title {
    font-weight: bold;
}

</style>
