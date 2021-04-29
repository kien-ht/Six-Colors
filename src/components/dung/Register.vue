<template>
  <div id="app">
    <h1>Register form</h1>
    <br/>
    <br/>
    <br/>
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input required name="email" v-model.trim="user.email" placeholder="email" type="email" class="form-control" aria-describedby="emailHelp">
        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
      </div>
      <br/>
        
      <div>
        <label for="password">Password</label>
        <!-- <input required class="form-control" name="password" v-model="user.password" placeholder="password" type="password"> -->
        <TextInput :alo = user.password :blo = "password" ></TextInput>
      </div>
      <br/>
      <div>
        <label for="phone">Số điện thoại</label>
         <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
        <div class="input-group-text">+84</div>
        </div>
        <input required type="tel" v-model.trim="user.phoneNumber" class="form-control" placeholder="Phone">
  </div>
      </div>
      <br/>
      <div>
        <label for="name">Tên</label>
        <!-- <input required class="form-control" name="name" v-model.trim="user.name" placeholder="name"> -->
        <TextInput :alo = user.name :blo = "name" :type = type></TextInput>
      </div>
      <br/>
    <div>
        <label for="birth">Ngày sinh</label>
        <input required class="form-control" name="birth" v-model.trim="user.birth" type="date">
      </div>
      <br/>
      <div>
        <label for="address">Địa chỉ</label>
        <input required class="form-control" name="address" v-model.trim="user.address" placeholder="address">
      </div>
      <br/>
      <div>
        <label for="gioitinh">Giới tính</label>
        <select required class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      </div>
      <br/>
      <div>
        <label for="bank">Tài khoản ngân hàng</label>
        <input required type="number" class="form-control" v-model.trim="user.bank" name="bank">
      </div>
      <br/>
      <div>
        <label for="userName">User name</label>
        <input required type="text" class="form-control" v-model.trim="user.userName" name="userName">
      </div>
      <br/>
      <input :disabled='!isFormValid' @click="onSubmit" type="submit" class="btn btn-primary" value="Register">
    </form>
  </div>
</template>

<script>
import TextInput from './TextInput.vue'
import DungService from '@/services/dung.services'
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export default {
    name: 'Register',
  data () {
    return {
      user : {
        email: "",
        password: "",
        phoneNumber: "",
        name: "",
        birth: "",
        address: "",
        gioitinh: "",
        bank: "",
        userName: "",
        
      },
      type:'text'
    }
  },
  computed: {
        isFormValid () {
            return (
                this.isValid('email') 
                // this.isValid('password') && 
                // this.isValid('phoneNumber') && 
                // this.isValid('name') && 
                // this.isValid('birth') &&
                // this.isValid('address') &&
                // this.isValid('gioitinh') &&
                // this.isValid('bank')
            )
        }
  },
  methods: {
      isValid(prop) {
            switch (prop) {
                case 'email':
                    return this.user.email.length != 0
                    // return emailRegex.test(this.user.email)
                    break
                case 'password':
                    return this.user.password.length != 0
                    break
                case 'phoneNumber':
                    return this.user.phoneNumber.length != 0
                    break
                case 'name':
                    return this.user.name.length != 0
                    break
                case "birth":
                    return this.user.birth.length != 0
                    break
                case "address":
                    return this.user.address.length != 0
                    break
                case "gioitinh":
                    return this.user.gioitinh.length != 0
                    break  
                case "bank":
                    return this.user.bank.length != 0
                    break      
                default:
                    return false
            }
        },
        resetUser () {
            this.user.email = ''
            this.user.password = ''
            this.user.phoneNumber = ''
            this.user.name = ''
            this.user.birth = ''
            this.user.address = ''
            this.user.gioitinh = ''
            this.user.bank = ''
            this.user.userName = ''
        },
        async makeRegister () {
            try {
                const respone = await DungService({
                    url: '/api/users/register',
                    method: 'POST',
                    data: Object.assign({}, this.user)
                })
                if (respone.success) {
                  localStorage.setItem('token', respone.data.token)
                }
                console.log(respone)
            } catch (err) {
                console.log(err)
            }
        },
        onSubmit (event) {
            event.preventDefault()
            this.makeRegister()
            this.resetUser()

        }
  },
  mounted () {
    
  },
  components: {
    TextInput
  }
}
</script>

<style>

</style>
