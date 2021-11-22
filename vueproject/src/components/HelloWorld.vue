<template>
  <div class="hello">
    <!-- <csstest></csstest>
     <clippath></clippath>
    <htmlTest></htmlTest> -->
    <!-- <parent></parent> -->
    <cssBtn></cssBtn>
  </div>
</template>

<script>
//import csstest from './csstest'
// import clippath from './clippath'
// import htmlTest from './H5'
//import parent from './parent.vue'
import cssBtn from './cssBtn.vue'
export default {
  name: 'HelloWorld',

  components: {
    // csstest,
    // clippath,
    // htmlTest,
    //parent,
    cssBtn
  },
  method: {

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
