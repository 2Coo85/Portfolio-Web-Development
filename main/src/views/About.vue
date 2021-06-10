<template>
  <div class="flex-container">
    <main class="about-page-body">
      <header class="page-header">
        <h2>About Me</h2>
      </header>
      <section class="top-box info-box">
            <h4>Background</h4>
              <p>I first experienced coding in high school when we were introduced to the language C++. I liked the end product but not neccessarily all the work that went into it.</p>
              <p>While studying in college, I found I excelled not only in math courses but in computer courses as well. Discovering this, I decided to study 3D Animation combining my love of animation with computers. While I enjoyed learning this skill, it still didn't quite fit.</p>
              <p>Fast-forward some years, and my attention was brought to Web Development as a way to use my computer skills and get back to actual coding. Once exposed, I was hooked and look forward to helping people create their websites.</p>
      </section>
      <section class="bottom-box info-box">
            <h4>Hobbies</h4>
              <ul>
                <li>Anime</li>
                <li>Aerial Silks</li>
                <li>Reading</li>
                <li>Crochet</li>
              </ul>
      </section>
    </main>

    <nav class="main-nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/resume">Resume</router-link></li>
      </ul>
    </nav>
  </div>
</template>
