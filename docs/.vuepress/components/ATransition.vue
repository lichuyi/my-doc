<template>
  <div>
    <div id="div">鼠标移动到 div 元素上，查看过渡效果。</div>
  </div>
</template>
<style  scoped>
#div {
    width: 100px;
    height: 100px;
    background: red;
    cursor: pointer;
    -webkit-transition: width 2s, height 2s, -webkit-transform 2s; /* For Safari 3.1 to 6.0 */
    transition: width 2s, height 2s, transform 2s;
}

#div:hover {
    width: 200px;
    height: 200px;
    -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
    transform: rotate(180deg);
}
</style>