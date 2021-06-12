<template>
  <div class="flex-container primary">
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
