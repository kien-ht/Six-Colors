<template>
  <div id='list-item'> 
      <div>         
      </div>
            <nav class="navbar navbar-light bg-light">
                
              <div >
                  <div class="row">
                      <div class="col-md-8"><input  v-on:keyup.enter="filteredListItem" v-model="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></div>
                <div class="col"><button v-on:click="filteredListItem" class="btn btn-outline-success" >Search</button>
                </div></div>
               </div>
            </nav>
        <div class="row" > 
        
          <div class='card col-md-4' v-for="item in listProduct" :key="item.id" >
              <router-link to='/'>
                  <img width="250"  :src='item.img' class="img-fluid" alt='...' />
                  <div class='card-body'>
                       <h5 class='card-title'>{{item.name}}</h5>
                       <p class='card-text'><i>Shop: {{item.seller}}</i></p>
                       <p class='card-text'>Price: {{item.price}}</p>
                        <p class='card-text'>Quantity-Sold: {{item.quantitySold}}</p> 
                        <p class='card-text'><small  class='text-muted'>{{item.review}} <i class="far fa-star"></i></small></p> 
                </div>
              </router-link>
          </div>
        </div>
        <div class="paging"><button class="btn btn-primary" @click="back">Back</button>{{page}}/{{totalPage}}<button class="btn btn-primary" @click="next">Next</button></div>
  </div>






</template>

<script lang='js'>
import CucService from '@/services/cuc.service.js'

import itemList from './fakeData.js'
import ListProduct from './List.vue'
export default {
    name: 'ListItem',
    data(){
        return { 
            list:[],
            listProduct:[],
            search:'',
            page:1,
            quantity:3,
            totalPage:1,
        }
    },
    methods: {
      
        filteredListItem(){    
            if(this.search===''){
                 this.getList();
            }
            else{  
                console.log('search',this.search);
                const arr = this.list.filter((item)=> item.name.includes(this.search))
            this.list = arr
            console.log('arr',arr.length);
            this.getListProduct()
            console.log("list product",this.listProduct.length);
            }

        },
        getListProduct(){
            this.totalPage=Math.ceil(this.list.length/this.quantity)
            console.log('totalPage', this.totalPage)   
            let num=this.quantity*(this.page-1)
            if(this.listProduct.length==0){
                console.log('num1',num);
                for (let i = 0; i <this.quantity; i++) {
                if(i<this.list.length-num){
                this.listProduct.push(this.list[num+i])
                 }
                }
                return;
            }else{
                console.log('num2',num);
                for (let i = 0; i <this.quantity; i++) {
                    if(i<this.list.length-num){
                        console.log("sliceeee",this.list[num+i]);
                this.listProduct.splice(i,1,this.list[num+i])
                    }else{
                        if( this.listProduct.length!=1){
                         this.listProduct.pop()
                        }
                        
                    }
                
                }
            }   
        },
      
        next(){
            if(this.page<this.totalPage){
                this.page++
                console.log(this.page);
                this.getListProduct();
            }
             
        },
        back(){
            
            if(this.page>1){
                this.page--;
                this.getListProduct();
            }
        },

        async getList () {
            try {
                const response = await CucService.get('/api/items')
                console.log(response)
                this.list=response.data
                this.getListProduct()
                
            } catch (err) {
                console.log(err.message)
            }
        }
    },

    created(){
        this.getList()
        
        
        // this.list= itemList.getList()
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
/* .paging{
    margin-top: 20px;
} */
nav{
    margin-top: 20px;
    margin-bottom: 20px;
}
.card-body{
border: 1px,solid,black;
}

</style>
