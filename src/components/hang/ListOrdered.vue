<template>
    <div>
        <div class="list-product">
        <div  v-for="item in orderInfo.listItem" :key="item.id">
            <order-product :type="display" class="product-item" :productItem="item"></order-product>
        </div>

        
    </div>
    <div class="total-order">
        <div class="order-item">
            <span class="label-order">Vận chuyển</span>
            <span class="price-order">Giao Hàng Nhanh</span>
        </div>
        <div class="order-item">
            <span class="label-order">Thời gian giao hàng</span>
            <span class="price-order">{{orderInfo.deliveryTime}}</span>
        </div>
        
        <div class="order-item">
            <span class="label-order">Tổng số tiền</span>
            <span class="price-order total">{{orderInfo.totalAmount}} đ</span>
        </div>
    </div>
    
    </div>
</template>

<script>
import OrderProduct from "./OrderProduct.vue";
export default {
    data(){
        return { 
            idActive: '',
            listProduct: [],
            display: ''
        }
    },
     props: ['orderInfo'],
    mounted(){
        
    },
    created(){
        this.display = 'block'
        console.log(orderInfo)
        this.listProduct = orderInfo.itemList
    },
    methods: {
       
    },
    components: {
        OrderProduct: OrderProduct
    }
}
</script>

<style scoped>
.product-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
.product-item img {
    width: 7%;
}
.name-product {
        margin-left: 15px;
    width: 83%;
}
.price {
        width: 10%;
    text-align: right;
    color: #ee4d2d;
}
.order-item {
    display: flex;
    padding: 10px 0;
    border-top: 1px solid #ddd;
    
}
.order-item .label-order {
    width: 80%;
    text-align: right;
    padding-right: 35px;
}
.order-item .price-order {
    width: 20%;
    text-align: right;
}
.total-order {
    margin-top: 40px;
}
span.price-order.total {
    color: #ee4d2d;
    font-size: 30px;
}

</style>
