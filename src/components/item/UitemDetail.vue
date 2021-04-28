<template>
  <div class="container">
    <div class="card">
      <div class="container-fliud">
        <div class="wrapper row">
          <div class="preview col-md-6">
            <div class="preview-pic tab-content">
              <div class="tab-pane active" id="pic-1">
                <img :src="item.img" />
              </div>
              <div class="tab-pane" id="pic-2">
                <img src="http://placekitten.com/400/252" />
              </div>
              <div class="tab-pane" id="pic-3">
                <img src="http://placekitten.com/400/252" />
              </div>
              <div class="tab-pane" id="pic-4">
                <img src="http://placekitten.com/400/252" />
              </div>
              <div class="tab-pane" id="pic-5">
                <img src="http://placekitten.com/400/252" />
              </div>
            </div>
          </div>
          <div class="details col-md-6">
            <h3 class="product-title">{{ item.name }}</h3>
            <div class="rating">
              <div class="stars">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
              <span class="review-no">41 reviews</span>
            </div>
            <p class="product-description">{{ item.description }}</p>
            <h4 class="price">
              current price: <span>${{ item.price }}</span>
            </h4>
            <p class="vote">
              <strong>91%</strong> of buyers enjoyed this product!
              <strong>(87 votes)</strong>
            </p>
            <h5 class="sizes">
              <span>
                <ul class="variantes">
                  <li v-for="(v, i) in item.variants" :key="i">
                    {{ v.name }}
                    <button
                      id="btn-size"
                      type="button"
                      class="btn btn-primary"
                      v-for="(s, index) in v.options"
                      :key="index"
                      @click="handlerClickButton(s, v.name)"
                    >
                      {{ s }}
                    </button>
                  </li>
                  <br />
                  <div>
                    <div class="selected-quantity">
                      <input type="number" v-model="item.quantity" />
                    </div>
                  </div>
                  <br />
                  <div class="action">
                    <button
                      class="add-to-cart btn btn-default"
                      type="button"
                      @click="handlerAddCart()"
                    >
                      add to cart
                    </button>
                    <button class="like btn btn-default" type="button">
                      <span class="fa fa-heart"></span>
                    </button>
                  </div>
                </ul>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
    <!-- <button @click="handleCLick">Click me</button> -->
    <div>
      <ui-rate-comment :comments="item.rates"></ui-rate-comment>
    </div>
  </div>
</template>
<script>
import axios from "axios";

const baseInstance = axios.create({
  baseURL: "http://192.168.10.245:3030",
});
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import UiRateComment from "./UiRateComment.vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
  components: { UiRateComment },
  data() {
    return {
      item: {
        id: 0,
        name: "",
        description: "",
        price: 0,
        quantitySold: 0,
        seller: "",
        variants: [],
        stockAdress: "",
        quantityInStock: 0,
        rates: [],
        createdAt: "",
        quantity: 0,
        selectedVariant: [],
      },
    };
  },

  methods: {
    async getProduct() {
      try {
        const response = await baseInstance.get("/api/items/2");
        console.log("get User");
        this.item = Object.assign(this.item, response.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    handlerClickButton(s, nameOption) {
      // xử lý dữ liệu khi khách chọn 1 sản phẩm

      if (this.item.selectedVariant.length == 0) {
        this.item.selectedVariant.push({
          name: nameOption,
          selectedOption: s,
        });
      } else {
        let index = this.getIndex(nameOption);
        if (index < 0) {
          this.item.selectedVariant.push({
            name: nameOption,
            selectedOption: s,
          });
        } else {
          this.item.selectedVariant[index] = {
            name: nameOption,
            selectedOption: s,
          };
        }
      }

      console.log(this.item.selectedVariant)
    },
    handlerAddCart() {
      if (this.item.quantity > this.item.quantityInStock) {
        console.log("Vượt quá số lượng cho phép");
        // nên hiển thị một popup cho người dùng
      }
      console.log(this.selectedVariant);
      let productSelected = Object.assign(this.item, this.selectedVariant);
      console.log(productSelected);
      this.item.quantity = 0;
    },
    getIndex(nameOption) {
      for (let i = 0; i < this.item.selectedVariant.length; i++) {
        if (this.item.selectedVariant[i].name === nameOption) {
          return i;
        }
      }
      return -1;
    },
  },

  created() {
    this.getProduct();
  },
};
</script>
<style scoped>
body {
  font-family: "open sans";
  overflow-x: hidden;
}

img {
  max-width: 100%;
}

.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
@media screen and (max-width: 996px) {
  .preview {
    margin-bottom: 20px;
  }
}

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px;
}
.preview-thumbnail.nav-tabs li {
  width: 18%;
  margin-right: 2.5%;
}
.preview-thumbnail.nav-tabs li img {
  max-width: 100%;
  display: block;
}
.preview-thumbnail.nav-tabs li a {
  padding: 0;
  margin: 0;
}
.preview-thumbnail.nav-tabs li:last-of-type {
  margin-right: 0;
}

.tab-content {
  overflow: hidden;
}
.tab-content img {
  width: 100%;
  -webkit-animation-name: opacity;
  animation-name: opacity;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
}

.card {
  margin-top: 50px;
  background: #eee;
  padding: 3em;
  line-height: 1.5em;
}

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  /* display: flex; */
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.product-title,
.price,
.sizes,
.colors {
  text-transform: UPPERCASE;
  font-weight: bold;
}

.checked,
.price span {
  color: #ff9f1a;
}

.product-title,
.rating,
.product-description,
.price,
.vote,
.sizes {
  margin-bottom: 15px;
}

.product-title {
  margin-top: 0;
}

.size {
  margin-right: 10px;
}
.size:first-of-type {
  margin-left: 40px;
}

.color {
  /* display: inline-block; */
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px;
}
.color:first-of-type {
  margin-left: 20px;
}

.add-to-cart,
.like {
  background: #ff9f1a;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: UPPERCASE;
  font-weight: bold;
  color: #fff;
  -webkit-transition: background 0.3s ease;
  transition: background 0.3s ease;
}
.add-to-cart:hover,
.like:hover {
  background: #b36800;
  color: #fff;
}

.not-available {
  text-align: center;
  line-height: 2em;
}
.not-available:before {
  font-family: fontawesome;
  content: "\f00d";
  color: #fff;
}

.orange {
  background: #ff9f1a;
}

.green {
  background: #85ad00;
}

.blue {
  background: #0076ad;
}

.tooltip-inner {
  padding: 1.3em;
}

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
