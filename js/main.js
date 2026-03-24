/* ========================================================
   DrainCleaningNearMe.us — Main JavaScript
   Lightweight, no-dependency interactivity
   ======================================================== */

(function () {
    'use strict';

    // ---- Sticky Header (show/hide on scroll) ----
    const header = document.getElementById('header');
    let lastScroll = 0;
    const SCROLL_THRESHOLD = 80;

    function handleHeaderScroll() {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            header.classList.remove('header--hidden');
            return;
        }
        if (currentScroll > lastScroll && currentScroll > SCROLL_THRESHOLD) {
            header.classList.add('header--hidden');
        } else if (currentScroll < lastScroll) {
            header.classList.remove('header--hidden');
        }
        lastScroll = currentScroll;
    }

    // ---- Sticky Mobile CTA (show after scrolling past hero) ----
    const stickyCta = document.getElementById('sticky-cta');
    const hero = document.getElementById('hero');

    function handleStickyCta() {
        if (!hero || !stickyCta) return;
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        if (window.pageYOffset > heroBottom - 100) {
            stickyCta.classList.add('sticky-cta--visible');
        } else {
            stickyCta.classList.remove('sticky-cta--visible');
        }
    }

    // ---- Scroll handler (throttled via rAF) ----
    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                handleHeaderScroll();
                handleStickyCta();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
        });
    });

    // ---- Intersection Observer for reveal animations ----
    function initRevealAnimations() {
        var revealElements = document.querySelectorAll(
            '.service-card, .why-us__card, .step, .faq__item, .area-chip'
        );

        if (!revealElements.length) return;

        // Add reveal class
        revealElements.forEach(function (el) {
            el.classList.add('reveal');
        });

        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal--visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px'
            });

            revealElements.forEach(function (el) {
                observer.observe(el);
            });
        } else {
            // Fallback: show everything
            revealElements.forEach(function (el) {
                el.classList.add('reveal--visible');
            });
        }
    }

    // ---- Tel link click tracking (future analytics hook) ----
    function trackCallClicks() {
        document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
            link.addEventListener('click', function () {
                // Google Analytics 4 event (if gtag is loaded)
                if (typeof gtag === 'function') {
                    gtag('event', 'call_click', {
                        event_category: 'engagement',
                        event_label: this.id || 'unknown',
                        value: 1
                    });
                }
                // Google Ads conversion (if loaded)
                if (typeof gtag_report_conversion === 'function') {
                    gtag_report_conversion();
                }
                // Console log for debugging
                console.log('[CTA] Call click:', this.id || 'tel-link');
            });
        });
    }

    // ---- Init ----
    document.addEventListener('DOMContentLoaded', function () {
        initRevealAnimations();
        trackCallClicks();

        // ---- Cookie Consent ----
        function initCookieConsent() {
            var banner = document.getElementById('cookie-banner');
            if (!banner) return;
            if (localStorage.getItem('cookie_consent')) return;
            setTimeout(function () { banner.classList.add('cookie-banner--visible'); }, 1200);
            document.getElementById('cookie-accept').addEventListener('click', function () {
                localStorage.setItem('cookie_consent', 'accepted');
                banner.classList.remove('cookie-banner--visible');
                loadAnalytics();
            });
            document.getElementById('cookie-decline').addEventListener('click', function () {
                localStorage.setItem('cookie_consent', 'declined');
                banner.classList.remove('cookie-banner--visible');
            });
        }

        function loadAnalytics() {
            var GA_ID = 'G-XXXXXXXXXX'; // Replace with your real GA4 ID
            if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') return;
            var s = document.createElement('script');
            s.async = true;
            s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
            document.head.appendChild(s);
            window.dataLayer = window.dataLayer || [];
            window.gtag = function () { window.dataLayer.push(arguments); };
            gtag('js', new Date());
            gtag('config', GA_ID);
        }

        initCookieConsent();
    });

})();
gtag('js', new Date());
gtag('config', GA_ID);
        }

initCookieConsent();
    });

}) ();
