<template>
  <div class="wapper">
    <div class="checkout">
       <b-container class="content-address">
         <h3 class="Tittel">Thông tin đơn hàng</h3>
       
      <b-row v-if="change">
         <b-col md="12"><h5> Thông tin nhận hàng </h5> </b-col>
          <b-col md="8">
            <p>Họ tên: {{ name}}</p>
            <p>Số điện thoại: {{ phone}}</p>
           <p>Địa chỉ: {{ address}}</p>
            <p>thời gian giao hàng: {{ time.slice(8,10)}} -  {{ time.slice(5,7)}} -  {{ time.slice(0,4)}}</p>
            <p>Ghi chú: {{ note}}</p>
           
          </b-col>
                  <b-col md="4"><span class="notechange" @click="Comback()">Thay đổi</span></b-col>
      </b-row>
       <b-row v-else>
         <b-col md="12"><h5> Thông tin nhận hàng </h5> </b-col>
      <b-col md="3"><p>Họ tên:</p> </b-col>
              <b-col md="9" class="inputstyle"><b-form-input v-model="name" placeholder="Họ tên"/></b-col>
              <b-col md="3" class="inputstyle"><p>Số điện thoại:</p> </b-col>
              <b-col md="9" class="inputstyle"><b-form-input v-model="phone" placeholder="Số điện thoại"/></b-col>
              <b-col md="3" class="inputstyle"><p>Địa chỉ:</p> </b-col>
              <b-col md="9" class="inputstyle"> <b-form-input v-model="address" placeholder="Địa chỉ"/></b-col>
              <b-col md="3" class="inputstyle"><p>thời gian giao hàng:</p> </b-col>
              <b-col md="9" class="inputstyle">
                <b-form-datepicker id="example-datepicker" v-model="time" class="mb-2"></b-form-datepicker>
                 
                 </b-col>
              <b-col md="3" class="inputstyle"><p>Ghi chú:</p> </b-col>
              <b-col md="9" class="inputstyle"> <b-form-textarea
                              id="textarea"
                              v-model="note"
                              placeholder="Ghi chú..."
                              rows="3"
                              max-rows="6"></b-form-textarea></b-col>
               
              <b-col md="12">
                <b-button @click="Comback()" class="ButtonStyle">Quay lại</b-button>
               
              </b-col>
      </b-row>
      </b-container>
      <ListItem/>
      <b-container class="content">
        <b-row>
         
          <b-col md="3"> Chọn phương thức thanh toán </b-col>
          <b-col md="9">
            <b-form-select
              v-model="selected"
              :options="options"
            ></b-form-select>
          </b-col>
          <b-col md="3"  class="totalMoney"> Tổng tiền:  </b-col>
          <b-col md="9"  class="totalMoney">
           <h5>{{ Number(money).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "VNĐ"}}</h5>
          </b-col>

            <b-col md="12" class="buttonStylenho">
                <b-button @click="Comback()" class="ButtonStyle">Quay lại trang giỏ hàng</b-button>
                <b-button @click="SaveThongTinTT()" variant="success"  class="ButtonStyle">Đặt đơn</b-button>
              </b-col>
        </b-row>
      </b-container>
  
    </div>
    <div class="BoxAlert">

        <b-alert
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
      class="alert"
    >
     Cập nhật thành công
    </b-alert>
    </div>
    
  </div>
</template>
<script>
import axios from 'axios'
import ListItem from './listItem'
// eslint-disable-next-line no-unused-vars
const User = JSON.parse(localStorage.getItem('inforUser'))
const listItemdata = JSON.parse(localStorage.getItem('listItem'))
export default {
  name: 'Ngoc',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ListItem
  },
  data() {
    return {
      selected: '1',
      dismissSecs: 3,
      save: false,
      dismissCountDown: 0,
      change: true,
      address: User.address ? User.address : '',
      name: User.userName ? User.userName : '',
      phone: User.phoneNumber ? User.phoneNumber : '',
      note: '',
      time: '',
      money: localStorage.getItem('TotalMoney') ? localStorage.getItem('TotalMoney') : 0,
      options: [
        {
          value: '1',
          text: 'Thanh toán qua thẻ'
        },
        {
          value: '2',
          text: 'Thanh toán trực tiếp khi nhận hàng'
        }
      ]
    }
  },
 
  methods: {
    changeLocation(link) {
      window.location = link
    },
    Comback() {
      this.change = !this.change
    },
    SaveThongTinTT() {
      const file = {
        totalAmount: this.money,
        recipientName: this.name,
        orderId: Math.random(),
        recipientPhone: this.phone,
        recipientAddress: this.note,
        additionalNote: this.note,
        deliveryTime: Date(this.time),
        listItem: listItemdata

      }
      // eslint-disable-next-line no-undef
      axios.put('http://192.168.10.245:3030/api/users/update', {
        email: User.email,
        password: User.password,
        phoneNumber: User.phoneNumber,
        address: User.address,
        userName: User.userName,
        orders: [file],
        id: User.id,
        createdAt: User.createdAt
      }, {
        headers: {
          authorization: `${localStorage.getItem('token')}`
        }
      }
      )
        .then((response) => {
          if (response.data.success) {
            // eslint-disable-next-line no-undef
            localStorage.setItem('inforUser', JSON.stringify(response.data.data))
            swal('Good job!', 'Đặt thành công', 'success').then((success) => {
              if (success) {
                this.changeLocation('/cart')
              }
            })
            // eslint-disable-next-line no-undef
          } else { swal(response.data.message) }
        }, (error) => {
          console.log(error)
        })
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  
  }
  
}
</script>
<style>
.wapper {
  width: 100%;
padding: 20px 0px;
  text-align: center;
}
.notechange{
  cursor: pointer;
}
.inputstyle{
  margin: 5px 0px;
}
.totalMoney{
  padding: 10px 0px;
}
.notechange:hover
{
  color: blue;
  text-decoration: underline;
}
.content-address {
  padding: 20px 0px;
  margin: 10px 0px;
  text-align: left;
  background: #e8dcde;
}
.ButtonStyle{
  margin:10px;
}
.content {
  padding: 20px 0px;
  margin: 10px 0px;
  text-align: left;
  background: #e8dcde;
}
.content-address p{
  margin: 0px;
  padding: 2px 0px;
}
.checkout {
  padding: 0px;
  margin: 0px auto;
  text-align: center;
  max-width: 1000px;
}
.Tittel {
  color: red;
  text-align: center;
}
.checkout h5 {
  text-align: left;
}
.BoxAlert{
  position: relative;
  max-width: 300px;
}
.alert{
  position: fixed  !important;
  right: 20px;
  bottom: 20px;
 
}
.buttonStylenho{
  margin: 20px 0px 0px 0px;
}
@media only screen and (max-width: 300px) {
  .alert{
  position: fixed  !important;
  right: 0px;
  bottom: 0px;
 
}
}
</style>
