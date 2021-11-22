<template>
  <div>
    <!-- 使用 CSS 轻松实现高频出现的各类奇形怪状按钮 
    渐变（线性渐变 linear-gradient、径向渐变 radial-gradient、多重渐变）
    遮罩 mask
    裁剪 clip-path
    变形 transform-->

    <!-- 矩形与圆角按钮 -->
    <div class='btn rect'>rect</div>
    <div class='btn circle'>circle</div>

    <!-- 梯形与平行四边形 实现它们主要使用 transform 即可，但是要注意一点，使用了 transform 之后，标签内的文字也会同样的变形，所以，我们通常使用元素的伪元素去实现造型，这样可以做到不影响按钮内的文字。-->
    <div class='btn parallelogram'>Parallelogram</div>
    <div class='btn parallelogram2'>Parallelogram</div>
    <!-- 梯形比平行四边形稍微复杂一点，它多借助了 perspective，其实是利用了一定的 3D 变换。原理就是一个矩形，绕着 X 轴旋转 -->
    <div class='btn trapezoid'>Trapezoid</div>

    <!-- 切角 -- 纯色背景 -->
    <div class="btn notching">notching</div>
    <!-- 切角 -- 渐变色背景 -->
    <!-- 借助 clip-path 切出一个切角图形，这样，背景色可以是任意定制的颜色，无论是渐变还是纯色都不在话下 -->
    <div class="btn clip-notching">notching</div>
    <!-- 箭头按钮 -->
    <div class="btn arrow">arrow</div>
    <div class="btn clip-arrow">arrow</div>

    <!-- 内切圆角 -->
    <div class="btn one-inset-circle">inset-circle</div>
    <div class="btn inset-circle">inset-circle</div>

    <div class="btn mask-inset-circle">inset-circle</div>

    <!-- 圆角不规则矩形 圆角矩形 + 圆角平行四边形组成：-->
    <div class="btn skew">Skew</div>
    <!-- 外圆角按钮 -->
    <div class="btn outside-circle">outside-circle</div>

    <!-- 三角形 -->
    <div class="box clipPolygon"></div>
    <!-- 圆形 -->
    <div class="box clipCircle"></div>
    <!-- 椭圆 -->
    <div class="box clipEllipse"></div>
    <!-- 花瓣 -->
    <div class="box clipInset"></div>
    <!-- 漫画文本框 -->
    <div class="mhbox"></div>
    <!-- 五角星 -->
    <div class="wjbox"></div>

  </div>
</template>
<style lang="less" scoped>
.btn {
  margin: 8px auto;
  flex-shrink: 0;
  width: 160px;
  height: 64px;
  line-height: 64px;
  text-align: center;
}

.rect {
  background: #f6ed8d;
}

.circle {
  border-radius: 64px;
  background: #7de3c8;
}

.parallelogram {
  position: relative;
  width: 160px;
  height: 64px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #03f463;
    transform: skewX(15deg);
  }
}

.parallelogram2 {
  background: linear-gradient(
    45deg,
    transparent 22%,
    #04e6fb 22%,
    #9006fb 78%,
    transparent 0
  );
}

.trapezoid {
  position: relative;
  width: 160px;
  height: 64px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: perspective(40px) rotateX(10deg);
    transform-origin: bottom;
    background: #ff9800;
  }
}

.notching {
  background: linear-gradient(135deg, transparent 10px, #ff1493 0) top left,
    linear-gradient(-135deg, transparent 10px, #ff1493 0) top right,
    linear-gradient(-45deg, transparent 10px, #ff1493 0) bottom right,
    linear-gradient(45deg, transparent 10px, #ff1493 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}

.clip-notching {
  background: linear-gradient(45deg, #f9d9e7, #ff1493);
  clip-path: polygon(
    15px 0,
    calc(100% - 10px) 0,
    100% 15px,
    100% calc(100% - 15px),
    calc(100% - 10px) 100%,
    15px 100%,
    0 calc(100% - 15px),
    0 15px
  );
}

.arrow {
  background: linear-gradient(
        -135deg,
        transparent 22px,
        #04e6fb 22px,
        #65ff9a 100%
      )
      top right,
    linear-gradient(-45deg, transparent 22px, #04e6fb 22px, #65ff9a 100%) bottom
      right;
  background-size: 100% 50%;
  background-repeat: no-repeat;
}
.clip-arrow {
  background: linear-gradient(45deg, #04e6fb, #65ff9a);
  clip-path: polygon(
    0 0,
    30px 50%,
    0 100%,
    calc(100% - 30px) 100%,
    100% 50%,
    calc(100% - 30px) 0
  );
}

.one-inset-circle {
  background-image: radial-gradient(
    circle at 100% 100%,
    transparent 0,
    transparent 12px,
    #2179f5 12px
  );
}
.inset-circle {
  background-size: 70% 70%;
  background-image: radial-gradient(
      circle at 100% 100%,
      transparent 0,
      transparent 12px,
      #2179f5 13px
    ),
    radial-gradient(
      circle at 0 0,
      transparent 0,
      transparent 12px,
      #2179f5 13px
    ),
    radial-gradient(
      circle at 100% 0,
      transparent 0,
      transparent 12px,
      #2179f5 13px
    ),
    radial-gradient(
      circle at 0 100%,
      transparent 0,
      transparent 12px,
      #2179f5 13px
    );
  background-repeat: no-repeat;
  background-position: right bottom, left top, right top, left bottom;
}
.mask-inset-circle {
  background: linear-gradient(45deg, #2179f5, #e91e63);
  mask: radial-gradient(
      circle at 100% 100%,
      transparent 0,
      transparent 12px,
      #2179f5 13px
    ),
    radial-gradient(
      circle at 0 0,
      transparent 0,
      transparent 12px,
      #2179f5 13px
    ),
    radial-gradient(
      circle at 100% 0,
      transparent 0,
      transparent 12px,
      #2179f5 13px
    ),
    radial-gradient(
      circle at 0 100%,
      transparent 0,
      transparent 12px,
      #2179f5 13px
    );
  mask-repeat: no-repeat;
  mask-position: right bottom, left top, right top, left bottom;
  mask-size: 70% 70%;
}

.skew {
  position: relative;
  width: 120px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background: orange;
    transform: skewX(15deg);
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: -13px;
    width: 100px;
    height: 64px;
    border-radius: 10px;
    background: orange;
  }
}
.outside-circle {
  position: relative;
  background: #e91e63;
  border-radius: 10px 10px 0 0;

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    left: -20px;
    bottom: 0;
    background: #000;
    background: radial-gradient(circle at 0 0, transparent 20px, #e91e63 21px);
  }
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    right: -20px;
    bottom: 0;
    background: #000;
    background: radial-gradient(
      circle at 100% 0,
      transparent 20px,
      #e91e63 21px
    );
  }
}

.box {
  width: 150px;
  height: 150px;
  background: black
    url(https://ununsplash.imgix.net/photo-1415302199888-384f752645d0?q=75&fm=jpg&s=823bdcc1b7ad955f5180efd352561016);
  background-size: cover;
  margin: 28px auto;
}

.clipPolygon {
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
}
.clipCircle {
  clip-path: circle(50% at 50% 50%);
}
.clipEllipse {
  clip-path: ellipse(30% 20% at 50% 50%);
}

.clipInset {
  clip-path: inset(25% 0 round 0% 25%);
}
.mhbox {
  margin: 20px auto;
  width: 150px;
  height: 150px;
  background: black
    url(https://ununsplash.imgix.net/photo-1415302199888-384f752645d0?q=75&fm=jpg&s=823bdcc1b7ad955f5180efd352561016);
  background-size: cover;
  -webkit-clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    0% 75%
  );
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    0% 75%
  );
}
.wjbox {
  width: 100px;
  height: 100px;
  margin: 25px auto;
  background: black
    url(https://ununsplash.imgix.net/photo-1415302199888-384f752645d0?q=75&fm=jpg&s=823bdcc1b7ad955f5180efd352561016);
  background-size: cover;
  -webkit-clip-path: polygon(
    50% 0%,
    63% 38%,
    100% 38%,
    69% 59%,
    82% 100%,
    50% 75%,
    18% 100%,
    31% 59%,
    0% 38%,
    37% 38%
  );
  clip-path: polygon(
    50% 0%,
    63% 38%,
    100% 38%,
    69% 59%,
    82% 100%,
    50% 75%,
    18% 100%,
    31% 59%,
    0% 38%,
    37% 38%
  );
}
</style>


