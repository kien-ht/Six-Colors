<template>
  <div id='list-item'> 
   
 <nav class="navbar navbar-light bg-light">
                
<div>
    <b class="home" @click="filterPrice(0)"><i class="fas fa-home"></i></b>
  <b-dropdown type='submit' id="dropdown-1" text="Price Filter"  @click="test(1)" class="m-md-2">
    <b-dropdown-item @click="filterPrice(1)" > Dưới 100000</b-dropdown-item>
    <b-dropdown-item  @click="filterPrice(2)"> 100000 - 600000 </b-dropdown-item>
    <b-dropdown-item  @click="filterPrice(3)"> Trên 600000 </b-dropdown-item>
   
  </b-dropdown>
  
</div>
              <div >
                  <div class="row">
                      <div class="col-md-8"><input  v-on:keyup.enter="filteredListItem" v-model="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></div>
                <div class="col"><button v-on:click="filteredListItem" class="btn btn-outline-success" >Search</button>
                </div></div>
               </div>
            </nav>
        <div class="row" > 
        
          <div class=' col-md-4' v-for="item in listProduct" :key="item.id" >
              <router-link to='/'>
                
                <div class="card" style="width: 18rem;">
  <img :src='item.img' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{item.name}}</h5>
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i>Shop: {{item.seller}}</i></li>
    <li class="list-group-item">Price: {{item.price}}</li>
    <li class="list-group-item">Quantity-Sold: {{item.quantitySold}}</li>
  </ul>
  <div class="card-body">
    <small  class='text-muted'>{{item.averageRate}} <i class="far fa-star"></i></small>
  </div>
</div>

              </router-link>
          </div>
        </div>
        <div class="paging">
            <button id='page' class="btn btn-primary" @click="back">Back</button>
          {{page}} / {{totalPage}}  
          <button  id='page' class="btn btn-primary" @click="next">Next</button>
          </div>
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
            quantity:6,
            totalPage:1,
            averageRates:[],
            listFilter:[],
            average:0
        }
    },
    methods: {
      
        filteredListItem(){    
            this.page=1
            if(this.search===''){
                 this.getList();
            }
            else{  
                const arr = this.listFilter.filter((item)=> item.name.includes(this.search))
            this.list = arr
            this.getListProduct()
            }

        },
        getListProduct(){
            this.totalPage=Math.ceil(this.list.length/this.quantity)   
            console.log('this.page -1', this.page -1);
            console.log('this.quantity', this.quantity);
            const arr = this.list.slice((this.page -1)*this.quantity, this.quantity *this.page)
            this.listProduct =arr
               
        },
      
        next(){
            if(this.page<this.totalPage){
                this.page++
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
                this.list=response.data      
                let arr = []
                this.list.forEach(element => {
                let arrRate=element.rates.map(el=>el.rate);
                let tb = Math.round((arrRate.reduce((accumulator, currentValue) => accumulator + currentValue)/arrRate.length)*10)/10
                    const item = {
                        ...element,
                        averageRate:tb
                    }
                    arr.push(item)
                     
                });
                this.list = arr
                this.listFilter=arr
                this.getListProduct()
                console.log('this.listFilter', this.listFilter)
                
            } catch (err) {
                console.log(err.message)
            }
        },
        filterPrice(value){
            let arr;
            this.page=1
            console.log('value', value)
            switch (value) {
                case 1:
                    arr = this.listFilter.filter((item)=> item.price<100000)
                    break;
                case 2:
                    arr = this.listFilter.filter((item)=> item.price>=100000&& item.price<=600000)
                    break;
                case 3:
                    arr = this.listFilter.filter((item)=> item.price>600000)
                    break;
                default:
                    arr =this.listFilter

                    break;
        
            }
            this.list = arr
            console.log('arr',this.list);
            this.getListProduct()
        }
    },

    created(){
        this.getList()
    },
    
}
</script>

<style scoped>
#list-item {
margin-top: 20px;
background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-RxWOfdMDWFK4I9fgIDowJyIB3xZKjrgTubraCbl1wVVAtrYFZzseN9CpS4em-b5I5EQ&usqp=CAU');
}
.card-title {
    font-weight: bold;
}
.paging{
    margin-top: 20px;
}
nav{
    margin-top: 20px;
    margin-bottom: 20px;
}
.card-body{
border: 1px,solid,black;
}
.home{
    font-size: 30px;
    margin-right: 40px;
    color:teal;
}
#page{
    margin-left: 10px;
    margin-right: 10px;
}

</style>
