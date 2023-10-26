// window.addEventListener('beforeunload', function () {
//     // Scroll to the top of the page.
//     window.scrollTo(0, 0);
// });

$(".ph-list").click(function() {
    gsap.from(".header2 a", {
        delay: 0.2,
        duration: 0.2,
        y: 20,
        opacity: 0,
        stagger:0.1,
    });
});


$(document).ready(function() {
    // Function to toggle the login box
    $(document).ready(function() {
        // Function to toggle the login box
        $(".ph-list").click(function() {
            $(".ph-list").toggleClass("ph-x");
            $(".header2").toggleClass("show");
        });
    });


    // Function to remove the "show" class when an anchor tag inside "header2" is clicked
    $(".header2 a").click(function() {
        $(".ph-list").removeClass("ph-x").addClass("ph-list");
        $(".header2").removeClass("show");
   });

});

var tl1 = gsap.timeline({delay:0.5, duration:0.2,});

tl1.from(".a1", {
    y:-100,
    opacity:0,
})

tl1.from(".a2", {
    x:-100,
    opacity:0,
})

tl1.from(".a3", {
    x:100,
    opacity:0,
})

tl1.from(".a4",{
    scale:0,
})

gsap.from('.a5', {
    x:-100,
    opacity:0, 
    scrollTrigger: {
      trigger:".section2",
      markers:false,
      start:"top center",
      duration:0.6,
    }
});

gsap.from('.a6', {
    x:100,
    opacity:0, 
    scrollTrigger: {
      trigger:".section2",
      markers:false,
      start:"top center",
      duration:0.6,
    }
});

gsap.from('.sec3-cont h2', {
    y:50,
    opacity:0,
    scrollTrigger: {
      trigger:".section3",
      markers:false,
      start:"top center",
      duration:0.6,
    }
});

gsap.from('.a7', {
    x:-100,
    opacity:0,
    scrollTrigger: {
      trigger:".section3",
      markers:false,
      start:"top center",
      duration:0.8,
    }
});

gsap.to('.a8', {
    x:"-100%",
    scrollTrigger: {
      trigger:".section3",
      markers:false,
      start:"top center",
      duration:0.8,
    }
});

gsap.from('.a9', {
    x:-100,
    opacity:0,
    scrollTrigger: {
      trigger:".section4",
      markers:false,
      start:"top center",
      duration:0.9,
    }
});

gsap.from('.a10', {
    scale:0,
    stagger:0.1,
    scrollTrigger: {
      trigger:".section4",
      markers:false,
      start:"top center",
      duration:0.6,
    }
});

gsap.from('.a11', {
    y:50,
    opacity:0,
    scrollTrigger: {
      trigger:".section5",
      markers:false,
      start:"top center",
      duration:0.6,
    }
});

gsap.from('.a12', {
    y:50,
    opacity:0,
    stagger:0.2,
    scrollTrigger: {
      trigger:".section5",
      markers:false,
      start:"top center",
      duration:0.6,
    }
});

gsap.from('.a13', {
    y:50,
    opacity:0,
    scrollTrigger: {
      trigger:".section6",
      markers:false,
      start:"top center",
      duration:0.6,
    }
});

gsap.from('.a14', {
    x:-100,
    opacity:0,
    scrollTrigger: {
      trigger:".section6",
      markers:false,
      start:"top center",
      duration:0.6,
    }
});

gsap.from('.a15', {
    x:100,
    opacity:0,
    scrollTrigger: {
      trigger:".section6",
      markers:false,
      start:"top center",
      duration:0.6,
    }
});

gsap.from('.a16', {
    y:100,
    opacity:0,
    scrollTrigger: {
      trigger:".section7",
      markers:false,
      start:"top center",
      duration:0.6,
    }
});

gsap.from('.a17', {
    scale:0,
    opacity:0,
    stagger:0.2,
    scrollTrigger: {
      trigger:".section7",
      markers:false,
      start:"top center",
      duration:0.6,
    }
});


$(document).ready(function() {
  // Get the navigation links that you want to add the active class to
  var navLinks1 = $('.menus a');
  var navLinks2 = $('.header2 a');

  // Define the sections you want to track and their custom offsets
  var sections = [
      { id: '#sec1', offset: 10 },
      { id: '#sec2', offset: 200 },
      { id: '#sec3', offset: 200 },
      { id: '#sec4', offset: 250 },
      { id: '#sec5', offset: 300 },
      { id: '#sec6', offset: 350 },
      { id: '#sec7', offset: 400 }
  ];

  // Listen for scroll events
  $(window).scroll(function() {
      // Get the current scroll position
      var scrollPosition = $(this).scrollTop();

      // Loop through sections and add active class to the correct link based on custom offsets
      for (var i = sections.length - 1; i >= 0; i--) {
          var section = sections[i];

          if (scrollPosition >= $(section.id).offset().top - section.offset) {
              setActiveLink(section.id);
              break; // Exit the loop once an active section is found
          }
      }
  });

  // Function to set the active link
  function setActiveLink(targetId) {
      // Remove the active class from all navigation links
      navLinks1.removeClass('active');
      navLinks2.removeClass('active');

      // Add the active class to the specific navigation link
      $('.menus a[href="' + targetId + '"]').addClass('active');
  }
});




