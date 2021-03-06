$(document).ready(
    (function (r) {
        r(".owl-carousel").owlCarousel({ loop: !0, margin: 0, dots: !1, autoplay: !0, responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } } }),
            (wow = new WOW({ boxClass: "wow", animateClass: "animated", offset: 100, mobile: !0, live: !0 })),
            wow.init(),
            r(function () {
                r.scrollUp();
            });
        new SmoothScroll('[data-easing="easeInOutQuad"]', { easing: "easeInOutQuad" });
        r(document).ready(function () {
            r("#sticker").sticky({ topSpacing: 0 });
        }),
            r(".slider-area").ripples({ dropRadius: 20, perturbance: 0.02, duration: 0.7, opacity: 0.4 }),
            setInterval(function () {
                var e = r(".slider-area"),
                    o = Math.random() * e.outerWidth(),
                    a = Math.random() * e.outerHeight(),
                    t = 0.04 + 0.04 * Math.random();
                e.ripples("drop", o, a, 20, t);
            }, 800),
            r(".html").rProgressbar({ percentage: 90, fillBackgroundColor: "#2BA8E0" }),
            r(".psd").rProgressbar({ percentage: 80, fillBackgroundColor: "#2BA8E0" }),
            r(".bootstrap").rProgressbar({ percentage: 85, fillBackgroundColor: "#2BA8E0" }),
            r(".mern").rProgressbar({ percentage: 35, fillBackgroundColor: "#2BA8E0" }),
            r(".wordpress").rProgressbar({ percentage: 70, fillBackgroundColor: "#2BA8E0" }),
            r(".count-num").rCounter({ duration: 90 });
        mixitup(".protfulio-content");
        r(".image-link").magnificPopup({ type: "image" });
    })(jQuery)
);