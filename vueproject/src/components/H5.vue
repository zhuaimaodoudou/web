<template>
  <div>
    <details>
      <summary>HTML5 </summary>
      for the latest updates from the HTMLWG, possibly including important bug fixes, please look at the editor
    </details>
    <label for="country">Choose your country from the list:</label>
    <input list="countries" name="country" id="country">
    <datalist id="countries">
      <option value="UK" />
      <option value="Germany" />
      <option value="USA" />
      <option value="Japan" />
    </datalist>
    <div onclick="console.log('first div',event.target)">
      <div onclick="console.log('second div',event.target)">
        <button onclick="console.log('button',event.target)">
          Click!
        </button>
      </div>
    </div>

    <div id="content">外层div
      <div id="msg">内层div</div>
    </div>

    <div>
      目标<MARK>10</MARK>个亿
    </div>
    <p v-html="marktext"></p>

    <!-- 瀑布流 -->
    <div class="waterfall">
      <div v-for="(item,index) in 20" :style="{height:50+ 'px',background:colors[Math.floor(Math.random()*12)],}"
        :key="index">
        {{item}}
      </div>
    </div>

    <div>阴影</div>
    <label for="name">姓名</label>
    <input type="text" name="name" id="name" />

    <span>背景色</span>
    <div class="bgc"></div>

    <p class="special">I'm real element</p>

    <div class="outer">
      <div class="fixed">fffffff</div>
      <div class="auto">rrrrrrr</div>
    </div>

    <div class="parent">
      <div class="child">
      </div>
      <div class="child">
      </div>
    </div>
    <br />
    <div class="parent">
      <div class="child">
      </div>
      <div class="child">
      </div>
      <div class="child">
      </div>
      <div class="child">
      </div>
      <div class="child">
      </div>
    </div>
  </div>

</template>
<script>
import { myMixin } from './mixin/mixin';

export default {
  mixins: [myMixin], //混入  相当把 混入对象的 属性 都 写在了当前 组件里。

  data () {
    return {
      'marktext': '首月<MARK>8.0</MARK>元起',
      list: [200, 250, 150, 300],
      //颜色尽量随机,区别每个模块
      colors: ['#eccf2c', '#b8232c', '#125d9e', '#367945', '#fca91b', '#26ada7', '#77bfbf', '#ff5c87',
        '#f40', '#ee2061', '#feee39', '#f5a79a', '#ec70d0', '#b4a1cf']
    }
  },
  created () {
    console.log('demoB-created')
  },
  mounted () {
    console.log('demoB-mounted');
    // this.hello('demoB');  //调用混入对象中methods中的方法   -> hello from mixin!demoB
  }
}
</script>
<style lang="less">
#content {
  width: 140px;
  border: 1px solid blue;
}
#msg {
  width: 100px;
  height: 100px;
  margin: 20px;
  border: 1px solid red;
}
mark {
  background-color: #fff;
  font-size: 20px;
  color: #ccc;
}
.waterfall {
  width: 400px;
  margin: 0 auto;
  column-count: 3;
  column-gap: 10px;
  break-inside: avoid;
}
input {
  padding: 4px;
  border: solid 1px #e5e5e5;
  width: 200px;
  background: transparent;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
input:focus {
  border-color: #c9c9c9;
}
.bgc {
  width: 200px;
  height: 200px;
  border: 1px solid #fcf;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(blue),
    to(red),
    color-stop(20%, green),
    color-stop(50%, yellow)
  );
}

p.special::before {
  display: block;
  content: counter(chapno, upper-roman) ". ";
}
.fixed {
  width: 200px;
}
.fixed,
.auto {
  height: 300px;
  outline: solid 1px blue;
}

.fixed {
  display: inline-block;
  vertical-align: top;
}
.auto {
  margin-left: -200px;
  padding-left: 200px;
  box-sizing: border-box;
  width: 100%;
  display: inline-block;
  vertical-align: top;
}

.parent {
  display: flex;
  width: 300px;
  justify-content: center;
  align-content: center;
  align-items: stretch;
}
.child {
  width: 50px;
  height: 100px;
  outline: solid 1px;
}
</style>