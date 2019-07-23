<template>
  <div>
    <div v-if="isShow">
      <span @click="isShow = false" id="contentMsg" :class=" {finish: info.isFinish}">{{info.contentMsg}}</span>
      <div style="float: right;padding-top: 20px;">
        <input type="checkbox" v-model="info.isFinish" @change="updateItem" :id="info.id">
        <label :for="info.id"></label>
      </div>
    </div>
    <div v-if="!isShow" @keypress.enter="updateItem"><input type="text" v-model="info.contentMsg"></div>

  </div>
</template>

<script>
  export default {
    name: "Item",
    props: {
      info: Object
    },
    data() {
      return {
        isShow: true,
      }
    },
    methods: {
      updateItem() {
        this.isShow = true
        let putItem = {
          "isFinish":this.info.isFinish,
          "contentMsg":this.info.contentMsg
        }
        this.$put('/todo/'+this.info.id,putItem).then((res) => {
          this.$store.commit('updateMsg',res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
