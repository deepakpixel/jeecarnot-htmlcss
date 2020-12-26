(function ($) {
    "use strict";
    $(function () {
        // AMIMATED NUMBER



        $('.progress-bar-number .num3').appear(function () {
            // setTimeout(function () {
            //     $('.progress-bar-number .num3').countTo();
            // }, 1);
            let counter = document.querySelector('.num3');
            let speed = 100; //Lower is faster
            // counters.forEach(counter => {
            let updateCount = () => {
                let target = +counter.dataset.target;
                let current = +counter.innerText;
                let inc = Math.ceil(target / speed);


                if (current < target) {
                    // Add inc to count and output in counter
                    counter.innerText = current + inc;
                    // Call function every ms
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount()

            // } )
        });
        $('.progress-bar-number .num1').appear(function () {
            // setTimeout(function () {
            //     $('.progress-bar-number .num1').countTo();
            // }, 1);
            let counter = document.querySelector('.num1');
            let speed = 200;
            // counters.forEach(counter => {
            let updateCount = () => {
                let target = +counter.dataset.target;
                let current = +counter.innerText;
                let inc = Math.ceil(target / speed);


                if (current < target) {
                    // Add inc to count and output in counter
                    counter.innerText = current + inc;
                    // Call function every ms
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount()

            // })
        });

        // $('.pricing .inner-number1').appear(function () {
        //     setTimeout(function () {
        //         $('.pricing .inner-number1').countTo();
        //     }, 100);
        // });
        // $('.pricing .inner-number2').appear(function () {
        //     setTimeout(function () {
        //         $('.pricing .inner-number2').countTo();
        //     }, 100);
        // });
        // $('.pricing .inner-number3').appear(function () {
        //     setTimeout(function () {
        //         $('.pricing .inner-number3').countTo();
        //     }, 100);
        // });

        // -------------------------------------//
        // WFECT FOR SECTION PRICING
        if ($(window).width() > 600) {
            $('.pricing-widget').hover(function () {
                $('.pricing').find('.pricing-widget.main').removeClass('active');
            }, function () {
                $('.pricing-widget.main').addClass('active');
            });
        }
        else {
            $('.pricing').find('.pricing-widget.main').removeClass('active');
        }
        // -------------------------------------//

        // INITIALIZE ISOTOPE WHEN NEWTAB ACTIVE
        $('.picture-gallery-wrapper a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $('.grid').isotope({
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth: '.grid-item'
                }
            });
        });

    });

    $(window).load(function () {

        // GALLERY ISSOTOPE
        $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-item'
            }
        });

        // -------------------------------------//
        // SHOW IMAGE GALLERY
        $(".fancybox-button").fancybox({
            prevEffect: 'none',
            nextEffect: 'none',
            closeBtn: false,
            helpers: {
                title: { type: 'inside' },
                buttons: {}
            }
        });
        // -------------------------------------//
        // SET WIDTH - HEIGHT FOR LOADING
        $('.body-2').width($(window).width());
        $('.body-2').height($(window).height());
        // LOADING FOR HOMEPAGE
        setTimeout(function () {
            $('.body-2').removeClass('loading');
            $('.body-2').addClass('loaded');

        }, 800);
        document.getElementById("header").style.visibility = "visible";
        document.getElementById("wrapper-content").style.visibility = "visible";
        document.getElementById("footer").style.visibility = "visible";
        // document.getElementById("myModal").style.display = "block";
    });

})(jQuery);


function subscribeMailingList() {
    document.getElementById("mailer-message").innerHTML = "";
    let email = document.getElementById("emailForSub").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        var req = new XMLHttpRequest();
        req.open("GET", "hello.php?email=" + email, true);
        req.onload = function () {
            // alert(this.responseText);
            if (this.responseText == "success") {
                document.getElementById("mailer-message").style.color = "lightgreen";
                document.getElementById("mailer-message").innerHTML = "Thanks for subscribing!";
                document.getElementById("emailForSub").value = "";

            }
            if (this.responseText == "error") {
                document.getElementById("mailer-message").style.color = "orange";
                document.getElementById("mailer-message").innerHTML = "Error while processing!";
            }
        }
        req.send();
        req.onerror = function () {
            document.getElementById("mailer-message").style.color = "orange";
            document.getElementById("mailer-message").innerHTML = "Something went wrong!";
        }

    }
    else {
        document.getElementById("mailer-message").style.color = "orange";
        document.getElementById("mailer-message").innerHTML = "Please enter a valid email!";
    }
}

