<template>
  <div>
    <div class="fa-btn btn-1 btn-1e"> click me</div>
  </div>
</template>
<style  scoped>
.fa-btn {
  font-size: 14px;
  background: none;
  cursor: pointer;
  padding: 12px 40px;
  display: inline-block;
  margin: 10px 0px;
  text-transform: uppercase;
  outline: none;
  position: relative;
  z-index: 1;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -o-border-radius: 4px;
}
.fa-btn:after {
  content: "";
  position: absolute;
  /* z-index: -1; */
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}
.btn-1 {
  border: 2px solid #ff5454;
  color: #3b3b3b;
}
/* Button 1e */
.btn-1e {
  overflow: hidden;
}
.btn-1e:after {
  width: 100%;
  height: 0;
  top: 50%;
  left: 50%;
  background: #ff5454;
  opacity: 0;
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
  -moz-transform: translateX(-50%) translateY(-50%) rotate(45deg);
  -ms-transform: translateX(-50%) translateY(-50%) rotate(45deg);
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  z-index: -1;
}
.btn-1e:hover,
.btn-1e:active {
  color: #ffffff;
  text-decoration: none;
}
.btn-1e:hover:after {
  height: 260%;
  opacity: 1;
}
.btn-1e:active:after {
  height: 400%;
  opacity: 1;
}
</style>