<template>
  <div>
    <h1>我是B子组件</h1>
    <button @click="receiveCMsg(messageB)">点我让C组件接收到数据</button>
    <p>因为点了C，所以B的信息发生了变化：{{BMessage}}</p>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {


  setup () {

    const store = useStore()

    const BMessage = computed(() => store.state.BMsg);
    const fullName = computed(() => store.getters.fullName);
    const target = computed(() => store.state.subModel.target);
    const receiveCMsg = messageB => store.commit("receiveCMsg", messageB)
    // const load = () => store.dispath('methodName', data)

    return {
      BMessage,
      fullName,
      target,
      receiveCMsg
    }
  },
  data () {
    return {
      messageB: {
        Msg: 'hello, C组件，我是B组件'
      }
    }
  },


}
</script>