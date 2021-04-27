<template>
  <button class='btn' v-on:click="showListItem"> HOME </button>
</template>

<script>
import itemList from './fakeData.js'
export default {
    name:'List',
    props:{
        val:{
            
        }

    },
    data(){
        return {
            listItem:[]

        }
    },
methods: {
    showListItem () {
         this.$emit('updateListItem',this.listItem)
    }
},
created(){
        console.log('data', itemList.getList())
        this.listItem= itemList.getList()
    }
}
</script>

<style>

</style>