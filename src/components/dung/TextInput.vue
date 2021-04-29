<template>
  <div>
        <input required class="form-control" :name="password" v-model="alo" placeholder="password" type="password">
        
      </div>
</template>

<script>
export default {
  props: {
      alo: '',
  }
}
</script>

<style>

</style>
