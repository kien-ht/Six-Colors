<template>
  <div class="login">
    <div class="main">
      <div class="header">Вход</div>
      <div class="content">
        <b-row>
          <b-col md='4'>  <label for="email">E-mail</label></b-col>
            <b-col md='8'><input id="email" type="text" v-model="email"></b-col>
        </b-row>
      
         <b-row>
          <b-col md='4'> <label for="password">password</label></b-col>
            <b-col md='8'> <input id="password" type="password" v-model="password" @keyup.enter="makeLogin"></b-col>
        </b-row>
       
      </div>
      <div class="buttons">
        <button @click="makeLogin">login</button>
      </div>

      <div class="error" v-if="error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
// import { AuthService } from '@/services/auth.service'
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },

  methods: {
    changeLocation (link) {
      window.location = link
    },
    makeLogin () {
      if (this.email === '') {
        // eslint-disable-next-line no-undef
        swal('Email không được bỏ trống')
      } else {
        axios.post('http://192.168.10.245:3030/api/users/login', {
          email: this.email,
          password: this.password
        })
          .then((response) => {
            if (response.data.success) {
              // eslint-disable-next-line no-undef
              localStorage.setItem('token', response.data.data.token)
              localStorage.setItem('inforUser', JSON.stringify(response.data.data))
              this.changeLocation('/Checkout')
            // eslint-disable-next-line no-undef
            } else { swal(response.data.message) }
          }, (error) => {
            console.log(error)
          })
      }
    }
    // async makeLogin () {
    //   try {
    //     await AuthService.makeLogin({ email: this.email, password: this.password })
    //     this.error = ''
    //     await this.$store.dispatch('user/getCurrent')
    //     await this.$router.push('profile')
    //   } catch (error) {
    //     this.$store.commit('toast/NEW', { type: 'error', message: error.message })
    //     this.error = error.status === 404 ? 'User with same email not found' : error.message
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  .main {
    padding: 30px 15px;
    background: #fff;
    width: 400px;
    border-radius: 2px;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2),
    0 24px 38px 3px rgba(0, 0, 0, .14),
    0 9px 46px 8px rgba(0, 0, 0, .12);

    .header {
      text-align: center;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
    }

    .error {
      background-color: red;
      padding: 10px;
      font-size: 12px;
      opacity: 1;
      transition: all 0.5s;
    }
  }
}
</style>
