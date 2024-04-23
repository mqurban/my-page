(function ($) {
  var typed = new Typed(".type", {
    strings: [
      "",
      "Full Stak WordPress Developer",
      "Front End Developer",
      "PHP Developer",
      "Freelancer",
    ],

    typeSpeed: 110,
    loop: true,
    showCursor: false,
  });

  ////////////////////////////////////////////////////

  // . Data-Background Js

  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  ////////////////////////////////////////////////////

  //  Testimonial Slider Js

  $(".testimonial-slider").owlCarousel({
    loop: true,

    margin: 30,

    autoplay: false,

    /* smartSpeed: 500,*/

    items: 1,

    dots: true,

    /*	navText:['<span>','<span/>'],*/

    nav: false,

    responsive: {
      0: {
        items: 1,
      },

      767: {
        items: 2,
      },

      992: {
        items: 2,
      },

      1200: {
        items: 2,
      },
    },
  });
  /*MIXIT UP PLUGIN*/
  var containerEl = document.querySelector(".mix_container");
  var mixer = mixitup(containerEl, {
    selectors: {
      control: "[our-mixitup-control]",
    },
  });
  /*MIXIT UP PLUGIN*/

  ////////////////////////////////////////////////////

  //  About wf Js

  $(".about-w-f").owlCarousel({
    loop: true,

    autoplay: false,

    /* smartSpeed: 500,*/

    items: 1,

    dots: false,

    /*	navText:['<span>','<span/>'],*/

    nav: false,

    responsive: {
      0: {
        items: 1,
      },

      767: {
        items: 1,
      },

      992: {
        items: 1,
      },

      1200: {
        items: 1,
      },
    },
  });

  ////////////////////////////////////////////////////

  // 02. Scroll To Top Js

  function smoothSctollTop() {
    $(".smooth-scroll a").on("click", function (event) {
      var target = $(this.getAttribute("href"));

      if (target.length) {
        event.preventDefault();

        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: target.offset().top - 0,
            },
            1500
          );
      }
    });
  }

  smoothSctollTop();

  // Show or hide the sticky footer button

  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".scroll-up").fadeIn(200);
    } else {
      $(".scroll-up").fadeOut(200);
    }
  });

  //Animate the scroll to yop

  $(".scroll-up").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  ////////////////////////////////////////////////////

  //  Sticky Header Js

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll < 100) {
      $("#header-sticky").removeClass("sticky");
    } else {
      $("#header-sticky").addClass("sticky");
    }
  });

  /* one Page Nav */
  var top_offset = $(".header-area").height() - 10;
  $(".main-menu nav ul").onePageNav({
    currentClass: "active",
    scrollOffset: top_offset,
  });

  ////////////////////////////////////////////////////

  //  Counterup Js

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
})(jQuery);

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});



    $(document).ready(function() {
        $('#contact-form').submit(function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the form data
            var formData = {
                name: $('input[name="name"]').val(),
                email: $('input[name="email"]').val(),
                service: $('select[name="service"]').val(),
                budget: $('input[name="budget"]').val(),
                message: $('#textarea').val()
            };

            // Send the form data to Google Sheets
            $.ajax({
                url: 'https://script.google.com/macros/s/AKfycbzf4NS19p-uSsI4p1Iw-e5y1mviDjRSlc4Q_QlDcN6kD9U-vmjiMOOlERwQrpBZCTSQVg/exec',
                type: 'POST',
                data: formData,
                success: function(response) {
                    // Reset the form fields
                    $('#contact-form')[0].reset();
                    // Show a success message
                    $('.ajax-response').html('Form submitted successfully!');
                },
                error: function(xhr, status, error) {
                    // Show an error message
                    $('.ajax-response').html('Error submitting form: ' + error);
                }
            });
        });
    });
