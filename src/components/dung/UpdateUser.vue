<template>
 <div id="app">
    <h1>Update information</h1>
    <br/>
    <br/>
    <br/>
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input required name="email" v-model.trim="user.email" placeholder="email" type="email" class="form-control" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <br/>
      <div>
        <label for="password">Password</label>
        <input required class="form-control" name="password" v-model="user.password" placeholder="password" type="password">
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
        <input required class="form-control" name="name" v-model.trim="user.name" placeholder="name">
      </div>
      <br/>
    <div>
        <label for="birth">Ngày sinh</label>
        <input required class="form-control" name="birth" v-model.trim="user.birth" type="date">
      </div> <br/>
      <div>
        <label for="address">Địa chỉ</label>
        <input required class="form-control" name="address" v-model.trim="user.address" placeholder="address">
      </div> <br/>
      <div>
        <label for="gioitinh">Giới tính</label>
        <select required class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      </div> <br/>
      <div>
        <label for="bank">Tài khoản ngân hàng</label>
        <input required type="number" class="form-control" v-model.trim="user.bank" name="bank">
      </div> <br/>
      <div>
        <label for="userName">User name</label>
        <input required type="text" class="form-control" v-model.trim="user.userName" name="userName">
      </div> <br/>
      <input @click="onSubmit" type="submit" class="btn btn-primary" value="Update">
    </form>
  </div>
</template>

<script>
import DungService from '@/services/dung.services'
import user from '../../store/modules/user'
export default {

    data() {
        return {
            user: {}
        }
    },
    created() {
        this.getCurrentUser()
    },
    methods: {
       async getCurrentUser () {
            try {
                const respone = await DungService({
                    url: '/api/users/verify',
                    method: 'GET',
                    data: Object.assign({}, this.user)

                })
                console.log(respone)
                this.user = respone.data
                console.log('user',this.user)
            } catch (err) {
                console.log(err)
            }
        },
        onSubmit(event) {
            event.preventDefault()
            this.updateUser()

        },
        async updateUser() {
            try {
                const respone = await DungService({
                    url: '/api/users/update',
                    method: 'PUT',
                    data: Object.assign({}, this.user)

                })
                console.log(respone)
                this.user = respone.data
                console.log('user',this.user)
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>

</style>
