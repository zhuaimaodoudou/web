<template>
  <div class="g-container">
    1111
    <input type="color">
    <input type="range">
  </div>
</template>
<script>
import { myMixin } from './mixin/mixin';

export default {
  mixins: [myMixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data)
  },
  methods: {
    out () {
      var outp = function (i) {
        setTimeout(() => {
          console.log(new Date, i)

        })
      }
      for (var i = 0; i < 5; i++) {
        outp(i);
      }
      console.log('iiii', i)
      setTimeout(() => {
        console.log(new Date, i)
      }, i * 5);

    }
  }
}
</script>
<style lang="less" scoped>
.g-container {
  width: 200px;
  height: 200px;
  clip-path: polygon(-1000% 0, 1000% 0, 1000% 100%, -1000% 100%);
}
</style>