<template>
  <div>
    <!--子组件A props获取父组件的值-->
    <div>我是子组件，我从父组件props获取的是：</div>
    <div>{{toChildrenAMsg}}</div>
    <button @click="emitMsg">给父组件传值</button>

    <div>我是子组件，父组件通过$children给的值是：</div>
    <div>{{messageA}}</div>
    <div>获取父组件的值为: {{parentVal}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      emitIndex: '1',
      messageA: 'this is old'
    }
  },
  props: {
    toChildrenAMsg: {
      type: String,
      default: '如果没传我是默认值'
    }
  },
  methods: {
    emitMsg () {
      this.$emit("onEmitIndex", this.emitIndex++);
    },
    sayHello () {
      console.log('hello')
    }
  },
  computed: {
    parentVal () {
      return this.$parent.msg;
    }
  }
}
</script>
<style lang="less" scoped>
div {
  line-height: 0.4rem;
  font-size: 0.24rem;
}
</style>