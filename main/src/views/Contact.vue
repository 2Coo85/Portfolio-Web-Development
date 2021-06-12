<template>
    <div class="flex-container secondary">
        <main class="contact-page-body">
            <header class="page-header">
                <h2>Contact Me</h2>
            </header>
            <section>
                <section class="address info-box">
                    <h4>Address</h4>
                    <p>2114 Jasmine Path</p>
                    <p>Round Rock, Tx 78664</p>
                </section>
                <section class="email info-box">
                    <h4>Email</h4>
                    <p>thenderson1785@gmail.com</p>
                </section>
                <section class="github info-box">
                    <h4>GitHub</h4>
                    <p><router-link to="https://github.com/2Coo85/Tasya-MainHub">https://github.com/2Coo85/Tasya-MainHub</router-link></p>
                </section>
            </section>
        </main>
        <nav class="main-nav">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/projects">Projects</router-link></li>
                <li><router-link to="/resume">Resume</router-link></li>
            </ul>
        </nav>
    </div>
</template>