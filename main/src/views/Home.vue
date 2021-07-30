<template>
  <div id="home" class="flex-container">
    <main class="title-body" >
      <header class="name-header">
        <ul>
          <li>Tasya</li>
          <li>Henderson</li>
        </ul>
      </header>
      <header class="title-header">
        <h2>Web Developer</h2>
      </header>
      <div id="waterfall">
        <div class="top">
          <div class="streak st1"></div>
          <div class="streak st2"></div>
          <div class="streak st3"></div>
          <div class="streak st4"></div>
          <div class="streak st5"></div>
        </div>
        <div class="middle">
          <div class="streak sm1"></div>
          <div class="streak sm2"></div>
          <div class="streak sm3"></div>
          <div class="streak sm4"></div>
          <div class="streak sm5"></div>
        </div>
        <div class="bottom">
          <div class="streak sb1"></div>
          <div class="streak sb2"></div>
          <div class="streak sb3"></div>
          <div class="streak sb4"></div>
          <div class="streak sb5"></div>
        </div>
      </div>
    </main>
    <nav class="main-nav">
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/resume">Resume</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="scss">
@keyframes falling {
  0%{transform-origin: top; transform: scaleY(0.1); visibility: hidden;}
  25%{visibility: visible;background-color: lighten($color: #1e9906, $amount: 65);}
  60%{transform: scaleY(1.8);}
  85%{opacity: 0.1;background-color: lighten($color: #1e9906, $amount: 45);}
  100%{transform: scaleY(0); visibility: hidden;}
}
.streak{
  display: flex;
  flex-flow: column;
  height: 100px;
  width: 4px;
  
  visibility: hidden;
}
.st1, .st2, .st3, .st4, .st5, .sm1, .sm2, .sm3, .sm4, .sm5, .sb1, .sb2, .sb3, .sb4, .sb5 {
  background-color: lighten($color: #1e9906, $amount: 45);
}
.st1{
  animation: falling 2.5s linear 2.95s infinite both;
}
.st2{
  animation: falling 2.65s linear 3.95s infinite both;
}
.st3{
  animation: falling 2.3s linear 4.9s infinite both;
}
.st4{
  animation: falling 2.2s linear 6s infinite both;
}
.st5{
  animation: falling 2s linear 6.8s infinite both;
}
.sm1{
  animation: falling 2.4s linear 3.35s infinite both;
}
.sm2{
  animation: falling 2.3s linear 4.35s infinite both;
}
.sm3{
  animation: falling 2.2s linear 5.3s infinite both;
}
.sm4{
  animation: falling 2.1s linear 6.4s infinite both;
}
.sm5{
  animation: falling 2s linear 7.2s infinite both;
}
.sb1{
  animation: falling 2.3s linear 3.1s infinite both;
}
.sb2{
  animation: falling 2.2s linear 4.1s infinite both;
}
.sb3{
  animation: falling 2.1s linear 5s infinite both;
}
.sb4{
  animation: falling 2s linear 6.1s infinite both;
}
.sb5{
  animation: falling 1.9s linear 6.9s infinite both;
}
@media screen and (min-width: 1500px){
  .streak {
    height: 100px;
    width: 2px;
    margin-bottom: 5px;
  }
  .top{
    position: absolute;
    top: 8%;
    left: 40.3%;
    z-index: -1;
  }
  .middle{
    position: absolute;
    top: 8%;
    left: 40.8%;
    z-index: -1;
  }
  .bottom{
    position: absolute;
    top: 8%;
    left: 41.2%;
    z-index: -1;
  }
}

</style>
