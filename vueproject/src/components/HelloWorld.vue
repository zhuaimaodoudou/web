<template>
  <div class="hello">
    <csstest></csstest>
    <clippath></clippath>
    <htmlTest></htmlTest>
  </div>
</template>

<script>
import csstest from './csstest'
import clippath from './clippath'
import htmlTest from './H5'
export default {
  name: 'HelloWorld',

  components: {
    csstest,
    clippath,
    htmlTest
  },
  method: {
    sort () {
      let list = [1, 3, 5, 2, 4];
      for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length - i; j++) {
          let temp;
          if (list[j] > list[j + 1]) {
            temp = list[j];
            list[j] = list[j + 1];
            list[j + 1] = temp;
          }
        }
      }
      console.log(list)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
