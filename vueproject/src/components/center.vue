<template>
  <div>
    <!--
     一、水平居中
    使用CSS控制水平居中很简单：
    块级元素 设置width,并设置margin auto
    内联元素 父元素设置text-align center
  -->
    <div>

      <!-- 1、块级元素水平居中 -->
      <div>
        <div class="container">
          <div class="content"></div>
        </div>
      </div>

      <!-- 内联元素水平居中 -->
      <div>
        <div class="inner-container">
          <div class="inner-content"></div>
        </div>
      </div>
    </div>

    <!-- 二、水平垂直居中
    方法                             条件                兼容性
    flex                            无条件              IE10+
    margin+absolute                 知道子元素宽高       IE8+
    transform+absolute              无，子元素宽高为偶数 IE10+
    absolute+margin负值             知道子元素宽高       
    absolute+calc                   知道子元素宽高       IE9+
    line-height + vertical-align    知道父元素宽高

     -->
    <div>
      <!-- 1、flex布局  flex布局出现以后，垂直居中就很方便了，直接设置父元素：
        display: flex
        align-items: center
      -->
      <div>
        <div class="flex-container">
          <div class="flex-content">flex布局水平垂直居中呢</div>
        </div>
      </div>

      <!-- 2、 margin+ position:absolute布局通过设置top/bottom, left/right这两对属性，可以让元素在垂直方向和水平方向分别具有了自适应的特性 -->
      <div>
        <div class="mp-container">
          <div class="mp-content"> margin+ position:absolute</div>
        </div>
      </div>

      <!-- 3、 transform + absolute -->
      <div>
        <div class="tp-container">
          <div class="tp-content">transform + absolute</div>
        </div>
      </div>

      <!-- 4、absolute+margin负值 -->
      <div>
        <div class="ab-container">
          <div class="ab-content">absolute+margin负值</div>
        </div>
      </div>

      <!-- 5、absolute + calc 需要知道子元素的宽高：-->
      <div>
        <div class="ac-container">
          <div class="ac-content">absolute + calc</div>
        </div>
      </div>

      <!-- 6、 line-height + vertical-align -->
      <div>
        <div class="lv-container">
          <div class="lv-content">line-heightn</div>
        </div>
      </div>

    </div>

  </div>

</template>
<style scoped>
.container {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
.content {
  width: 1rem;
  height: 1rem;
  margin: 0 auto;
  border: 1px solid blue;
}
.inner-container {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  text-align: center;
}
.inner-content {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 1px solid blue;
}
.flex-container {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}
.flex-content {
  border: 1px solid blue;
}
.mp-container {
  width: 200px;
  height: 200px;
  position: relative;
  border: 1px solid red;
}
.mp-content {
  border: 1px solid green;
  width: 10rem;
  height: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.tp-container {
  width: 200px;
  height: 200px;
  position: relative;
  border: 1px solid red;
}
.tp-content {
  border: 1px solid green;
  width: 10rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.ab-container {
  width: 200px;
  height: 200px;
  position: relative;
  border: 1px solid red;
}
.ab-content {
  border: 1px solid blue;
  width: 10rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -5rem;
  margin-top: -1rem;
}
.ac-container {
  width: 200px;
  height: 200px;
  position: relative;
  border: 1px solid red;
}
.ac-content {
  border: 1px solid blue;
  width: 10rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  left: calc(50% - 5rem);
  top: calc(50% - 1rem);
}
.lv-container {
  width: 200px;
  height: 200px;
  line-height: 200px;
  border: 1px solid red;
  text-align: center;
}
.lv-content {
  display: inline-block;
  border: 1px solid green;
  vertical-align: middle;
  width: 10rem;
  height: 2rem;
  line-height: 2rem;
}
</style>