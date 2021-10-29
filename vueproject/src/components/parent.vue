<template>
  <!-- 父子组件传值 props/$emit-->
  <div>
    <!-- <div>我是父组件,props给子组件值：</div>
    <childrenA :toChildrenAMsg='propsMsg'></childrenA>

    <div>我是父组件,没有props给子组件值：</div>
    <childrenA></childrenA>

    <div>我是父组件，子组件$emit给我传的值是：</div>
    <childrenA @onEmitIndex='onEmitIndex'></childrenA>
    <p>{{currentIndex}}</p> -->

    <!-- 父组件往子组件传值 $parent/$children-->
    <!-- <div>我是父组件，通过$children[0]改变子组件值：</div>
    <childrenA></childrenA>
    <button @click="changeA">点击改变子组件值</button> -->

    <!-- 父组件往子组件传值 $ref/$refs-->
    <div>我是父组件，通过$ref改变子组件值：</div>
    <!-- <childrenA ref='childrenRef'></childrenA>
    <button @click="changeByRef">ref改变子组件值</button> -->
    <childrenB />
    <childrenC />
  </div>
</template>
<script>
//import childrenA from './childrenA.vue'
import childrenB from './childrenB.vue'
import childrenC from './childrenC.vue'
export default {
  name: 'parent',
  data () {
    return {
      currentIndex: -1,
      propsMsg: '我是父组件给子组件的值奥',
      msg: '我是要$children给子组件的值'
    }
  },
  components: {
    //childrenA,
    childrenB, childrenC
  },

  methods: {
    onEmitIndex (idx) {
      this.currentIndex = idx;
    },
    changeA () {
      this.$children[0].messageA = 'this is new value'
    },
    changeByRef () {
      this.$refs.childrenRef.messageA = 'this is new ref value'
    }
    // Vuex： view——>commit——>mutations——>state变化——>view变化（同步操作）
    //        view——>dispatch——>actions——>mutations——>state变化——>view变化（异步操作
  }
}
</script>
