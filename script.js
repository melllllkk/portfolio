/* JS FILE */

// DOTS
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");



d1.addEventListener("mouseover", d1func);
d2.addEventListener("mouseover", d2func);
d3.addEventListener("mouseover", d3func);
d4.addEventListener("mouseover", d4func);
d5.addEventListener("mouseover", d5func);


function d1func() {
    document.getElementById("ex-title").innerHTML = "AP CSA";
    document.getElementById("ex-date").innerHTML = "August 2020 - June 2021";
    document.getElementById("ex-text").innerHTML = "My initial exposure to programming occurred during my sophomore year of high school when I enrolled in AP CSA. Although grasping the fundamental principles of programming was not particularly challenging, I had difficulty comprehending the underlying logic essential for writing functional programs. I struggled with effectively employing the concepts to develop programs capable of solving problem sets. Consequently, during the AP exam, I was unable to provide answers to any of the free reponse questions due to my lack of understanding regarding the tasks they demanded. This marked the first instance in which I felt genuinely defeated during an examination. Nevertheless, this setback served as motivation for me to strive for a deeper understanding in programming.";
}

function d2func() {
    document.getElementById("ex-title").innerHTML = "QxQ: Intro to Quantum Computing"
    document.getElementById("ex-date").innerHTML = "October 2021 - April 2022";
    document.getElementById("ex-text").innerHTML = "I initially participated in the Qubit x Qubit (QxQ) program for my college transcript. However, through QxQ, I was able to learn about the different facets of programming and the future of Computer Science. I enjoyed learning about the fundamentals of Quantum Mechanicss and how it is integrated into transforming the future of computing. I hope to pursue quantum computing in the future.";

}

function d3func() {
    document.getElementById("ex-title").innerHTML = "Carnegie Mellon PreCollege"
    document.getElementById("ex-date").innerHTML = "July 2022 - August 2022";
    document.getElementById("ex-text").innerHTML = "During the summer of 2022, I was given the opportunity to study at Carnegie Mellon University on a full-ride scholarship. I studied the Fundamentals of Computing (15-112) and Physics for Engineering Students I (33-141). Through 15-112, I was able to extensively study Python through complex problem sets and game development using the tkinter toolkit."
}

function d4func() {
    document.getElementById("ex-title").innerHTML = "Girls Who Code SIP"
    document.getElementById("ex-date").innerHTML = "July 2022 - August 2022";
    document.getElementById("ex-text").innerHTML = "I completed a self-paced summer course to develop proficiency in HTML, CSS, and Javascript. Through this program, I was introduced to the world of web development."

}

function d5func() {
    document.getElementById("ex-title").innerHTML = "Programming Tutor"
    document.getElementById("ex-date").innerHTML = "October 2022 - present";
    document.getElementById("ex-text").innerHTML = "I am currently working as a paid programming tutor. I conduct biweekly lessons with 5th graders to facilitate the discovery of programming fundamentals through block coding and Python."

}

// PORT IMAGES
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");



img1.addEventListener("mouseover", img1func);
img2.addEventListener("mouseover", img2func);
img3.addEventListener("mouseover", img3func);


function img1func() {
    document.getElementById("port-desc").innerHTML = "This is my final project for the Girls Who Code Self-Pace Program. I programmed a simple website using HTML, CSS, and Javascript to advocate for the importance of Mental Health. Click for the repl.it link.";
}

function img2func() {
    document.getElementById("port-desc").innerHTML = "For my term project at Carnegie Mellon University, I designed and programmed a 2D pixel platform game using the Python tkinter module. Click on the image for the demo video and source code.";
}

function img3func() {
    document.getElementById("port-desc").innerHTML = "I coded Tetris for a homework assignment. Click the image for the source code.";
}

