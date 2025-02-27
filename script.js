// Select all my  navigation links and add smooth scrolling effect to it ,so users can see the animation on the website when they using thier phones //
document.querySelectorAll('nav a').forEach(anchor => { //  Also toggles the mobile menu when the menu button is clicked.  //
anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior is important in Java,therefore By default, when you click on an <a href="#section"> (Anchor Text) link, the browser immediately jumps to the section with that id.//


        const targetId = this.getAttribute('href').substring(1); // Then it moves to Getting the target section ID from the href attribute//
        const targetSection = document.getElementById(targetId);
        if (targetSection) { // After that the code will excute and If the target section exists in my code, smoothly scroll to it so it appear clean and professional for my users //

            window.scrollTo({ //For example in this case Instead of an instant jump, we want a smooth scrolling effect,due to that is going to Prevent the default action  and allows ,me to override the browser’s behavior and replace it with this code  //
                top: targetSection.offsetTop - 70, //  which will then ensures the page scrolls smoothly instead of jumping directly. //
                behavior: 'smooth' //  And enables smooth scrolling //
            });
        }
        
    });
    
}); // Toggle mobile navigation menu when the menu button is clicked so my menu section appears on the right on the mobile responsive //
document.querySelector('.menu-toggle').addEventListener('click', function () { 
    document.querySelector('.nav-right ul').classList.toggle('active');
});

