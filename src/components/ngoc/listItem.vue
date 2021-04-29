<template>
   <div class="wapper">
    <div class="checkout">
        <h3 class="Tittel">Danh sách đơn hàng </h3>
            <Item v-for="(item,index) in list" :key='index' :Itemdata='item'/>
    </div>
   </div>
</template>
<script>
import Item from './Item.vue'
import axios from 'axios'
export default {
  name: 'Ngoc',
  components: {
    Item
  },
  data() {
    return {
      list: []
    }
  },
  created() {
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
<style >
.content-address img{
    max-width: 50px;
}
</style>
