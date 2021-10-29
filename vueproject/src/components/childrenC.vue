<template>
  <div>
    <h1>我是C子组件</h1>
    <button @click="receiveBMsg(messageC)">点我让B组件接收到数据</button>
    <p>因为点了B，所以C的信息发生了变化：{{CMessage}}</p>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup () {
    const store = useStore();
    const CMessage = computed(() => store.state.CMsg)
    const receiveBMsg = messageC => store.commit("receiveBMsg", messageC)

    return {
      CMessage,
      receiveBMsg
    }
  },
  data () {
    return {
      messageC: {
        Msg: 'hello, B组件，我是C组件'
      }
    }
  },
}
</script>