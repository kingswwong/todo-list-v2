<template>
  <div id="container">
    <h1>Todo List</h1>
    <div id="msgInput">
      <input type="text" v-model="todoMsg" @focus="buttonShow = true"
             @blur="todoMsg === '' ? buttonShow = false : buttonShow = true"
             :placeholder="!buttonShow ? 'Write SomeThing : ' + inputPlaceMsgList[Math.floor(Math.random() * 10)] : ''"><span><button
      @click="addTodoMsg"
      v-if="buttonShow">Add</button></span>
    </div>
    <ItemList ref='itemList'></ItemList>
  </div>
</template>

<script>
  import ItemList from "@/components/ItemList";

  export default {
    name: "Container",
    components: {ItemList},
    data() {
      return {
        todoMsg: "",
        buttonShow: false,
        inputPlaceMsgList: [
          "Yshenj is so handsome!!",
          "lzhou is so beautiful!!",
          "Let's Have a Rest",
          "Let's Have a Lunch",
          "Nice Weather!",
          "I Like You",
          "Just...",
          "Emmm....",
          "Remember to see the doctor",
          "Nice to meet you",
          "Go to buy the breakfast",
          "It is Friday!",
        ]
      }
    },
    methods: {
      addTodoMsg() {
        let item = {
          isFinish:false,
          contentMsg:this.todoMsg
        }
        this.$post('/todo',item).then((res) => {
          this.$store.commit('pushItem',res);
        })
        this.todoMsg = ""
        this.buttonShow = false
      }
    }
  }
</script>

<style scoped>

</style>
