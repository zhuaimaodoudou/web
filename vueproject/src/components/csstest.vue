<template>
  <div id="dashed1">
    73211193628725
  </div>

  <div class="run">
    <div class='zhezhao'>
    </div>
  </div>
</template>
<script>
export default {
  methods: {

  },
}
</script>
<style lang="less" scoped>
//实线变成虚线
#dashed1 {
  outline: 1px solid #333;
  outline-offset: -1px;

  &:hover {
    outline: none;
  }

  &:hover {
    border: none;
    background: linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
      linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
      linear-gradient(0deg, #333 50%, transparent 0) repeat-y,
      linear-gradient(0deg, #333 50%, transparent 0) repeat-y;
    background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
    background-position: 0 0, 0 100%, 0 0, 100% 0;
  }
}
//虚线边框
// #dashed1 {
//   background: linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
//     linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
//     linear-gradient(0deg, #333 50%, transparent 0) repeat-y,
//     linear-gradient(0deg, #333 50%, transparent 0) repeat-y;
//   background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
//   background-position: 0 0, 0 100%, 0 0, 100% 0;

//   height: 20px;
// }

#dashed1:hover {
  animation: linearGradientMove 0.3s infinite linear;
}

@keyframes linearGradientMove {
  100% {
    background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
  }
}

.run {
  margin: 50px;
  position: relative;
  height: 50px;
  width: 50px;
  // display: flex; //为了遮罩
  // justify-content: center; //为了遮罩
  &::after {
    content: "";
    position: absolute;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#399953, #399953),
      linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33),
      linear-gradient(#377af5, #377af5);
  }
}

.run {
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

// .zhezhao {
//   width: 195%;
//   height: 195%;
//   top: -48%;
//   background-color: #fff;
//   position: absolute;
//   z-index: 1;
// }
</style>