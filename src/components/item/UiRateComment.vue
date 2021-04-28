<template>
    <div>
        <div class="comment-rate" v-for="(cm, i) in comments" v-bind:key="i">
            <div class="creatorName">{{ cm.creatorName }}</div>
            <div class="rate">{{cm.rate}}</div>
            <div class="content">{{cm.content}}</div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'UiRateComment',
    props:{
        comments: {
            type: Array
        }
    },
 
    // data () {
    //     return {
    //         localComments: this.comments,     
    //     }
    // },

    // watch: {
    //     comments: {
    //         handler () {
    //             this.localComments = this.comments
    //         },
    //         deep: true
    //     }
    // },

    // beforeUpdate () {
    //     console.log('beforeUpdate child', this.$refs.item.textContent)
    //     this.localComments = this.comments
    // },

    // updated () {
    //     console.log('updated child', this.$refs.item.textContent)
    // },

    // created () {
    //     setTimeout(() => {
    //         this.localComments = [
    //             {
    //                 creatorName: 'dqwdqwd',
    //                 rate: '3',
    //                 content: 'dasdq3dawd12dqwdasdfqwd dqw dqwdqw',

    //             }
    //         ]
    //     }, 3000)
    // }

    
}
</script>

<style scoped>
    
</style>