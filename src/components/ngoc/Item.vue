<template>
  <b-container class="content-address">
    <b-row>
      <b-col md="2">
        <img :src="Itemdata.img" alt="hinhanh" />
      </b-col>
      <b-col md="8">
        {{ Itemdata.name }}
      </b-col>
      <b-col md="2">
        {{
          Number(Itemdata.price)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'VNĐ'
        }}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ['Itemdata']
}
</script>

<style>
</style>
