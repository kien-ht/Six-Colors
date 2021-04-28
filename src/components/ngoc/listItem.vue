<template>
   <div class="wapper">
    <div class="checkout">
         <h3 class="Tittel">Danh sách đơn hàng </h3>
       <b-container class="content-address" v-for="(item,index) in list" :key='index'>
           <b-row>
               <b-col md='2'>
                   <img :src="item.img" alt="hinhanh"/>
               </b-col>
                <b-col md='8'>
                  {{item.name}}
               </b-col>
                 <b-col md='2'>
                  {{ Number(item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "VNĐ"}}
               </b-col>
           </b-row>
       </b-container>
    </div>
   </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Ngoc',
  data () {
    return {
      list: []
    }
  },
  created () {
    axios.get('http://192.168.10.245:3030/api/items', {
      headers: {
        authorization: `${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        this.list = res.data.data
        // eslint-disable-next-line no-unused-vars
        let a = 0
        for (let i = 0; i < res.data.data.length; i++) {
          // eslint-disable-next-line no-const-assign
          a += res.data.data[i].price
        }
        localStorage.setItem('TotalMoney', a)
        localStorage.setItem('listItem', JSON.stringify(res.data.data))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>
<style scoped>
.content-address img{
    max-width: 50px;
}
</style>
