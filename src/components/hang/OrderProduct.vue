<template>
    <div>
        
            <img v-bind:src="productItem.img" >
            <span class="name-product">{{productItem.name}}</span>
            <span class="price">{{productItem.price}} đ</span>
        
    
    </div>
</template>

<script>

export default {
    data(){
        return { 
            idActive: '',
            listProduct: []
        }
    },
     props: ['productItem'],
    mounted(){
        
    },
    created(){
    },
    methods: {
       
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
