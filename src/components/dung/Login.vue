<template>
  <div class="login">
    <div class="main">
        <form>
            <div class="header">Login</div> <br/>
      <div class="content">
          <div>
            <label for="email">E-mail</label>
            <input v-focus ref="email" class="form-control" id="email" type="text" v-model="email">
          </div> <br/>
          <div>
            <label for="password">password</label>
            <input class="form-control" id="password" type="password" v-model="password" @keyup.enter="makeLogin">
          </div>
      </div> <br/>
      <div class="buttons">
        <button class="btn btn-success" @click="onSubmit">login</button>
      </div>

      <div class="error" v-if="error">
        {{ error }}
      </div>
        </form>
    </div>
  </div>
</template>

<script>
import DungService from '@/services/dung.services'
import axios from 'axios'
import user from '../../store/modules/user'
import router from '../../router'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
   directives: {
  focus: {
    // định nghĩa cho directive
    inserted: function (el) {
      el.focus()
    }
  }
},
  methods: {
     
      onSubmit(event) {
          event.preventDefault()
          this.makeLogin()
      },
    async makeLogin () {
    //   try {
    //     const a = await DungService.makeLogin({ email: this.email, password: this.password })
    //     console.log('a', a)
    //     this.error = ''
    //     await this.$store.dispatch('user/getCurrent')
    //     await this.$router.push('profile')
    //   } catch (error) {
    //     this.$store.commit('toast/NEW', { type: 'error', message: error.message })
    //     this.error = error.status === 404 ? 'User with same email not found' : error.message
    //   }
        const user = { email: this.email, password: this.password }
        try {
            const respone = await DungService({
                url: '/api/users/login',
                method: 'POST',
                data: user
            })
            if (respone.success) {
                // success
                // 1. save localStore
                localStorage.setItem('token', respone.data.token )
                // 2. chuyen trang
                // const isLogin = localStorage.getItem(isLogin)
                // if (isLogin) {
                //     // login
                // }
            }
            console.log(respone)
        } catch (err) {
            console.log(err)
        }
        

        // try {
        //     const res = await axios.post('/api/users/login',  user)
        //     console.log('res', res)
        // } catch(err) {
        //     console.log('error login', err)
        // }
    }
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
