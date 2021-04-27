<template>
  <div id='list-item'> 
      <list-product val='' @updateListItem='resetList'></list-product>
            <nav class="navbar navbar-light bg-light">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-8"><input  v-model="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></div>
                <div class="col"><button v-on:click="filteredListItem" class="btn btn-outline-success" >Search</button>
                </div></div>
               </div>
            </nav>

        
        <div class="row" > 
        
          <div class='card col-md-4' v-for="item in list" :key="item.id" >
              <router-link to='/'>
                  <img width="400" height="200" :src='item.img' class="img-fluid" alt='...' />
                  <div class='card-body'>
                       <h5 class='card-title'>{{item.nameProduct}}</h5>
                       <p class='card-text'><i>Shop: {{item.nameShop}}</i></p>
                       <p class='card-text'>Price: {{item.price}}</p>
                        <p class='card-text'>Quantity-Sold: {{item.quantitySold}}</p> 
                        <p class='card-text'><small  class='text-muted'>{{item.review}} <i class="far fa-star"></i></small></p> 
                </div>
              </router-link>
          </div>
        </div>
  </div>
</template>

<script lang='js'>
import itemList from './fakeData.js'
import ListProduct from './List.vue'
export default {
    name: 'ListItem',
    data(){
        return { 
            list:[],
            search:''
        }
    },
    methods: {
      
        filteredListItem(){    
            if(this.search===''){
                console.log(this.search);
                this.list= itemList.getList()
            }else{
                console.log(this.search);
                const arr = this.list.filter((item)=> item.nameProduct.includes(this.search))
            this.list = arr
            }
            
        },
        resetList(value){
            console.log(value);
            this.list=value
        }
    },
    // created(){
    //     console.log('data', itemList.getList())
    //     this.list= itemList.getList()
    // },
     components:{
         listProduct: ListProduct
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
