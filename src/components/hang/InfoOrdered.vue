<template>
    <div>
        <div class="order-status">
        <div  v-bind:class="['item-status', { 'active-status' : status === 'DRAFT' }]">
            <div class="icon-status">
                <img src="@/assets/images/stt1.png">
            </div>
            
            <p>Đơn đang chờ xác nhận</p>
            <p class="date-status">12:11 17-12-2020</p>
        </div>
        <div  v-bind:class="['item-status', { 'active-status' : status === 'INTRANSIT' }]">
            <div class="icon-status">
                <img src="@/assets/images/stt2.png">
            </div>
            
            <p>Đơn hàng đang giao</p>
            <p class="date-status">12:11 17-12-2020</p>
        </div>
        <div v-bind:class="['item-status', { 'active-status' : status === 'COMPLETE' }]">
             <div class="icon-status">
                <img src="@/assets/images/stt3.png">
             </div>
            
            <p>Đơn hàng đã nhận</p>
            <p class="date-status">12:11 17-12-2020</p>
        </div>
        <div  v-bind:class="['item-status', { 'active-status' : status === 'RETURN' }]">
            <div class="icon-status">
                <img src="@/assets/images/stt4.png">
            </div>
            
            <p>Đơn hàng đã hoàn trả</p>
            <p class="date-status">12:11 17-12-2020</p>
        </div>
        <div  v-bind:class="['item-status', { 'active-status' : status === 'CANCEL' }]">
            <div class="icon-status">
                <img src="@/assets/images/stt5.png">
            </div>
            
            <p>Đơn hàng đã hủy</p>
            <p class="date-status">12:11 17-12-2020</p>
        </div>

    </div>
    </div>
</template>

<script>

export default {
    data(){
        return { 
            idActive: '',
            totalOrder: {}
        }
    },
     props: ['status'],
    mounted(){
        console.log('status', status)
    },
    created(){
    },
    methods: {
       
    }
}
</script>

<style scoped>
.order-status {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.icon-status {
    
    width: 60px;
    height: 60px;
    border: 3px solid #2dc258;
    border-radius: 100%;
    margin: auto;
    line-height: 50px;
    text-align: center;
    margin-bottom: 10px;
    position: relative;
}
.active-status .icon-status{
    background: #2dc258;
}
.item-status p{
    margin: 0;
}
.item-status .date-status{
    margin: 0;
}
p.date-status {
    color: #bfbebe;
    font-size: 13px;
    margin-top: 5px !important;
}
.icon-status:after {
        width: 200%;
    height: 3px;
    background: #2dc258;
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 100%;
    z-index: 999;
}
.icon-status::before {
        width: 200%;
    height: 3px;
    background: #2dc258;
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    right: 100%;
    z-index: 999;
}
.item-status:first-child .icon-status::before{
    display: none;
}
.item-status:last-child .icon-status::after{
    display: none;
}

</style>
