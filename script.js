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


//Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyDWIzHuvJ_l_4T_ssKTlofHNMIrk2b5aAQ",
    authDomain: "real-estate-c4061.firebaseapp.com",
    projectId: "real-estate-c4061",
    storageBucket: "real-estate-c4061.appspot.com",
    messagingSenderId: "366838411581",
    appId: "1:366838411581:web:014ebe0a68755c2c4e9554"
};

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection

const db = firestore.collection("realEstate")


//Get submit form

let submitButton = document.getElementById('submit')

//Create Event Listner to allow form submission

submitButton.addEventListener("click", (e) => {
    //Prevent default form submision behavior
    e.preventDefault()

    //Get form Values
    let Name = document.getElementById('name').value
    let Email = document.getElementById('email').value
    let Subject = document.getElementById('subject').value
    let Message = document.getElementById('message').value

    //save form data to firebase
    db.doc().set({
        name: Name,
        email: Email,
        subject: Subject,
        message: Message
    }).then(() => {
        console.log("Data Saved")
    }).catch((error) => {
        console.log(error)
    })
})