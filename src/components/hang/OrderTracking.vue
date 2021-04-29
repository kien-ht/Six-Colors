<template>
  <div class="order">
    <info-ordered :status="orderInfo.status"></info-ordered>
    <div class="info-user">
      <div class="_1AsWWl"></div>
      <div class="info-content">
        <h5 class="title-info">{{ orderInfo.recipientName }}</h5>
        <p class="name-user">{{ orderInfo.recipientAddress }}</p>
        <p class="detail-user">{{ orderInfo.recipientPhone }}</p>
      </div>
      <div class="_1AsWWl"></div>
    </div>
    <list-ordered :orderInfo="orderInfo"></list-ordered>
    <div class="action">
      <button
        type="button"
        @click="updateUser('COMPLETE')"
        class="btn btn-success"
      >
        Thông báo đã nhận hàng
      </button>
      <button
        type="button"
        @click="updateUser('CANCEL')"
        class="btn btn-danger"
      >
        Hủy
      </button>
      <button
        type="button"
        @click="updateUser('RETURN')"
        class="btn btn-warning"
      >
        Hoàn hàng
      </button>
    </div>
  </div>
</template>

<script>
import infoOrdered from "./InfoOrdered.vue";
import listOrdered from "./ListOrdered.vue";
import axios from "axios";
export default {
  data() {
    return {
      listProduct: [],
      status: "",
      orderInfo: {},
      dataAll: {},
      token:'',
      urlServer: ''
    };
  },
  created() {
    
    const token = localStorage.getItem('token')
      const urlServer = "http://192.168.10.245:3030/";
    this.token =token
    this.urlServer =urlServer
    
  },
    mounted(){
        this.getOrderInfor();
    },
  methods: {
    getOrderInfor() {
        
        const url = `${this.urlServer}api/users/verify`
        console.log('this.urlServer', this.urlServer)
      axios
        .get(url, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            Authorization: this.token,
          },
        })
        .then((res) => {
          console.log("res", res);
          this.dataAll = res.data.data;
          const orderInfo = res.data.data.orders.find(
            (item) => item.orderId === +this.$route.params.id
          );

          this.orderInfo = orderInfo;
          console.log("orderInfo", orderInfo);
        });
    },
    updateUser(status) {
      const url = `${this.urlServer}api/users/update`
      const indexOrder = this.dataAll.orders.findIndex(
        (item) => item.orderId === +this.$route.params.id
      );
      const orderChangeStatus = (this.dataAll.orders[
        indexOrder
      ].status = status);
      const data = {
        ...this.dataAll,
        orders: [
          ...this.dataAll.orders,
          (this.dataAll.orders[indexOrder] = {
            ...this.dataAll.orders[indexOrder],
            status: orderChangeStatus,
          }),
        ],
      };
      axios
        .put(url, data, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            Authorization: this.token,
          },
        })
        .then((res) => {
            const message = status === "COMPLETE"? 'Thông báo đơn hàng đã nhận thành công !': status === "CANCEL"? 'Hủy đơn hàng thành công': status === "RETURN"? 'Hoàn đơn hàng thành công':''
            this.$bvToast.toast(message, {
                variant: 'success',
                solid: true
            })
          this.getOrderInfor();
        }).catch((err) => {
            const message = status === "COMPLETE"? 'Thông báo đơn hàng đã nhận thất bại !': status === "CANCEL"? 'Hủy đơn hàng thất bại': status === "RETURN"? 'Hoàn đơn hàng thất bại':''
            this.$bvToast.toast(message, {
                variant: 'danger',
                solid: true
            })
        });
    },
  },
  components: {
    "list-ordered": listOrdered,
    "info-ordered": infoOrdered,
  },
};
</script>

<style scoped>
.order {
  background-color: #fff;
  padding: 20px;
}
#list-item {
  margin-top: 20px;
}
.card-title {
  font-weight: bold;
}

._1AsWWl {
  height: 0.1875rem;
  width: 100%;
  background-position-x: -1.875rem;
  background-size: 7.25rem 0.1875rem;
  background-image: repeating-linear-gradient(
    45deg,
    #6fa6d6,
    #6fa6d6 33px,
    transparent 0,
    transparent 41px,
    #f18d9b 0,
    #f18d9b 74px,
    transparent 0,
    transparent 82px
  );
}
.info-user {
  margin: 30px 0;
}
.info-content {
  padding-top: 15px;
}
.action button {
  margin: 0 10px;
}
</style>
