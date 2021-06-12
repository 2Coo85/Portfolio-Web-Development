<template>
    <div class="flex-container secondary">
        <main class="resume-page-body">
            <header class="page-header">
                <h2>Resume</h2>
            </header>
            <figure class="icons">
                <a href="#Education">
                    <i class="fa fa-graduation-cap"></i>     
                </a>
                <a href="#Experience">
                    <i class="fa fa-briefcase"></i>     
                </a>
                <a href="#References">
                    <i class="fa fa-pencil-alt"></i>    
                </a>
            </figure>
            <section class="resume-section info-box education popup" id="Education">
                <section class="x">
                    <a href="#">X</a>
                </section>
                <h4>Education</h4>
                <p class="date">
                    <i class="far fa-dot-circle"></i>
                    April - current
                </p>
                <p class="description">
                    <strong>WEB DEVELOPMENT</strong>
                    <br>
                    OpenClassrooms.com
                </p>
                <p class="date">
                    <i class="fa fa-circle"></i>
                    September 2018 - October 2019
                    Round Rock, TX
                </p>
                <p class="description">
                    <strong>WEB DEVELOPMENT</strong>
                    <br>
                    Austin Community College
                </p>
                <p class="date">
                    <i class="fa fa-circle"></i>
                    April - May 2013
                </p>
                <p class="description">
                    <strong>C++ Programming</strong>
                    <br>
                    ExpertRating Online
                </p>
                <p class="date">
                    <i class="fa fa-circle"></i>
                    June 2011 - December 2012
                    Arvada, CO
                </p>
                <p class="description">
                    <strong>Animation Production</strong>
                    <br>
                    Kolbe Film School
                </p>
                <p class="date">
                    <i class="fa fa-circle"></i>
                    January 2010 - July 2011
                    Arvada, CO
                </p>
                <p class="description">
                    <strong>3D Animation</strong>
                    <br>
                    Kolbe Film School
                </p>
                <p class="date">
                    <i class="fa fa-circle"></i>
                    Aug 2003-Dec 2008
                    Lubbock, TX
                </p>
                <p class="description">
                    <strong>Texas Tech University</strong>
                    <br>
                    Bachelors of Science in Family and Consumer Science<br>
                    Minors: Architecture, Interior Design, and Human Development and Family Studies (HDFS)
                </p>
            </section>
            <section class="info-box experience popup" id="Experience">
                <section class="x">
                    <a href="#">X</a>
                </section>
                <h4>Experience</h4>
                <section class="resume-section">
                    <p class="date">
                        <i class="far fa-dot-circle"></i>
                        June 2017 - Current<br>
                        San Marcos, TX
                    </p>
                    <p class="description">
                        <strong>Amazon.com, LLC</strong>
                        <br>
                        Picking customer orders from storage pods and placing them in totes to get packed
                    </p>
                    <p class="date">
                        <i class="fa fa-circle"></i>
                        December 2010 - February 2019<br>
                        Colorado Springs, CO; Austin, TX
                    </p>
                    <p class="description">
                        <strong>RGIS, LLC</strong>
                        <br>
                        Supervised teams from 3-40 people in small-medium stores (7-Eleven, Old Navy) to ensure an accurate count of the store's inventory for the quarter or year
                    </p>
                </section>
            </section>
            <section class="info-box reference popup" id="References">
                <section class="x">
                    <a href="#">X</a>
                </section>
                <h4>References</h4>
                <p class="contact-card">
                Marquon Quiller
                <br>
                Area Manager, Amazon.com, LLC
                <br>
                Phone:
                <br>
                Email:
            </p>
            </section>
        </main>

        <nav class="main-nav">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/projects">Projects</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </nav>
    </div>
</template>