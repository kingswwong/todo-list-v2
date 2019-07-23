<template>
  <div id="itemList">
    <transition-group name="slide-fade">
      <div v-for="(item, index ) in itemList" :key="index">

        <Item  :info="item"></Item>
      </div>
    </transition-group>
    <button @click="changeShow(-1)" :class="{unActiveButton: status !== -1}">All</button>
    <button @click="changeShow(0)" :class="{unActiveButton: status !== 0}">Active</button>
    <button @click="changeShow(1)" :class="{unActiveButton: status !== 1}">Complete</button>
  </div>
</template>

<script>

  import Item from "@/components/Item";

  export default {
    name: "ItemList",
    components: {Item},
    mounted(){
      this.$get('/todo').then((res) => {
        this.$store.commit('updateItemList',res)
      })
    },
    computed: {
      status() {
        return this.$store.state.status
      },
      itemList:{
        get(){
          return this.$store.getters.getShowList(this.status)
        }
      }
    },
    methods: {
      changeShow(showIndex) {
        this.$store.commit('showListChange', showIndex)
      }
    }
  }
</script>

<style scoped>

</style>
