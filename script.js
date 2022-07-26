$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Located in the heart of Addis Ababa", "Expert on Real Estate", "Quality Designer", "Superior Contarctors", "Trusted Company", "A brand You Love"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Expert on Real Estate", "Quality Designer", "Superior Contarctors", "Trusted Company", "A brand You Love"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

const firebaseConfig = {
    apiKey: "AIzaSyAaW9wV9dzmJHzW3L8SPar9RhKsNPp4QXE",
    authDomain: "real-estate-contact-form-8da1a.firebaseapp.com",
    databaseURL: "https://real-estate-contact-form-8da1a-default-rtdb.firebaseio.com",
    projectId: "real-estate-contact-form-8da1a",
    storageBucket: "real-estate-contact-form-8da1a.appspot.com",
    messagingSenderId: "800717653252",
    appId: "1:800717653252:web:46f82de5d080041bdcbc51"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var subject = getElementVal("subject");
    var message = getElementVal("message");

    saveMessages(name, email, subject, message);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, subject, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
