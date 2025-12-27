<?php
include_once(dirname(__FILE__) . '/config.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset=utf-8 />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name=viewport content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name=csrf-token content="JRcEI8GzqOpx3UJF0LzJmUV2Hno7X0C6qqdtH0tr" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type=image/png sizes="32x32" href="./assets/frontend/images/logo/favicon.webp" />
    <link rel="icon" type=image/png sizes="32x32" href="./assets/frontend/images/logo/favicon.webp" />
    <link rel="icon" type=image/png sizes="16x16" href="./assets/frontend/images/logo/favicon.webp" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name=msapplication-TileColor content="#341e36" />
    <meta name=msapplication-TileImage content="/mstile-144x144.png" />
    <meta name=theme-color content="#341e36" />
    <meta name=yandex-verification content="272e32052341c454" />
    <title>Self-Publish Your Book With Expert The Pulp House Publishing in USA</title>
    <meta name=description
        content="Trust the USA&#039;s best book publishing services for the fastest publishing on Amazon, Kobo, or any platform! We cover all genres and offer 100% royalty-free." />
    <meta name=googlebot content="index, follow" />
    <meta name=robots content="index, follow, archive" />
    <!-- <link rel="canonical" href="https://thepulphousepublishing.com" /> -->
    <meta property="og:title" content="Self-Publish Your Book With Expert The Pulp House Publishing in USA" />
    <meta property="og:description"
        content="Trust the USA&#039;s best book publishing services for the fastest publishing on Amazon, Kobo, or any platform! We cover all genres and offer 100% royalty-free." />
    <meta property="og:type" content="Website" />

    <!-- <meta property="og:url" content="https://thepulphousepublishing.com" /> -->
    <meta property="og:image" content="./assets/frontend/images/logo/logo-white-bp.webp" />
    <meta name=twitter:card content="summary" />
    <meta name=twitter:site content="@The Pulp House Publishing" />
    <meta name=twitter:title content="Self-Publish Your Book With Expert The Pulp House Publishing in USA" />
    <meta name=twitter:description
        content="Trust the USA&#039;s best book publishing services for the fastest publishing on Amazon, Kobo, or any platform! We cover all genres and offer 100% royalty-free." />
 
    <link rel="preload" as="image" href="./assets/frontend/images/bg/logo-purple.webp" />
    <link rel="preload" as="image" href="./assets/frontend/images/logo/logo-white-bp.webp" />
    
        <style>
        :root {
            --ticker-bg: #b91c1c;
            /* red */
            --ticker-bg-2: #7c3aed;
            /* purple */
            --ticker-text: #ffffff;
            --ticker-btn: #ffffff;
            --ticker-btn-text: #111827;
        }

        .promo-ticker {
            position: relative;
            width: 100%;
            z-index: 9999;
            background: linear-gradient(90deg, var(--ticker-bg), var(--ticker-bg-2));
            color: var(--ticker-text);
            overflow: hidden;
            border-bottom: 1px solid rgba(255, 255, 255, .2);
        }

        /* If you want it fixed at very top */
        .promo-ticker.is-sticky {
            position: fixed;
            top: 0;
            left: 0;
        }

        .promo-ticker .inner {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 12px;
        }

.promo-ticker .marquee {
            flex: 1;
            overflow: hidden;
            white-space: nowrap;
        }

        .promo-ticker .track {
            display: flex;
            width: max-content;
            /* padding-left: 100%; */
            animation: promoMarquee 24s linear infinite;
        }

        .promo-ticker:hover .track {
            animation-play-state: paused;
        }

        @keyframes promoMarquee {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-50%);
            }
        }

        .promo-ticker .msg {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 700;
            letter-spacing: .2px;
            padding-right: 40px;
        }

        .promo-ticker .badge {
            background: rgba(255, 255, 255, .18);
            border: 1px solid rgba(255, 255, 255, .25);
            padding: 4px 10px;
            border-radius: 999px;
            font-weight: 800;
        }

        /* Mobile tweaks */
        @media (max-width: 769px) {
            /* optional */

            .promo-ticker .btn {
                display: none !important;
            }

            .promo-ticker .track {
                animation-duration: 14s;
            }
        }
    </style>
    <style>
        /* HERO SECTION */
        .hero {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            color: #ffffff;
            background: linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 100%);
        }

        /* Background with video */
        .hero-bg {
            position: absolute;
            inset: 0;
            z-index: 0;
        }

        .hero-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
            display: block;
            opacity: 0.35;
        }

        /* Enhanced gradient overlay */
        .hero-overlay-gradient {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg,
                    rgba(124, 58, 237, 0.15) 0%,
                    rgba(10, 10, 15, 0.8) 50%,
                    rgba(236, 72, 153, 0.15) 100%);
            backdrop-filter: blur(2px);
        }

        /* Animated floating shapes */
        .hero-shape {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.6;
            animation: float 20s ease-in-out infinite;
        }

        .hero-shape.shape-1 {
            width: 500px;
            height: 500px;
            left: -10%;
            top: 10%;
            background: linear-gradient(135deg, var(--primary-1), var(--primary-2));
            animation-delay: 0s;
        }

        .hero-shape.shape-2 {
            width: 400px;
            height: 400px;
            right: -8%;
            bottom: 15%;
            background: linear-gradient(90deg, #ffd6f0, rgba(236, 72, 153, 0.4));
            animation-delay: -5s;
        }

        .hero-shape.shape-3 {
            width: 350px;
            height: 350px;
            left: 50%;
            top: -10%;
            background: linear-gradient(180deg, rgba(124, 58, 237, 0.5), transparent);
            animation-delay: -10s;
        }

        @keyframes float {

            0%,
            100% {
                transform: translate(0, 0) scale(1);
            }

            33% {
                transform: translate(30px, -30px) scale(1.1);
            }

            66% {
                transform: translate(-20px, 20px) scale(0.9);
            }
        }

        .hero-inner {
            position: relative;
            z-index: 2;
            width: 100%;
            padding: 0rem 0 6rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hero-content {
            max-width: 1000px;
            text-align: center;
            animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Eyebrow badge */
        .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(236, 72, 153, 0.2));
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #ffffff;
            padding: 0.5rem 1.25rem;
            border-radius: 999px;
            font-weight: 600;
            font-size: 0.875rem;
            margin-bottom: 1.5rem;
            animation: fadeInUp 1s ease-out 0.2s both;
            box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
        }

        .eyebrow::before {
            content: "✨";
            font-size: 1rem;
        }

        /* Hero title */
        .hero-title-main {
            font-size: clamp(2.5rem, 6vw, 4.5rem) !important;
            line-height: 1.1 !important;
            margin: 0 0 1rem;
            font-weight: 800 !important;
            letter-spacing: -0.03em;
            animation: fadeInUp 1s ease-out 0.4s both;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            color: #ffffff !important;
            display: block;
            content-visibility: auto;
        }

        .accent-typed {
            background: linear-gradient(135deg, var(--primary-1), var(--primary-2), #f59e0b);
            background-size: 200% 200%;
            -webkit-background-clip: text !important;
            background-clip: text;
            color: transparent;
            animation: gradientShift 4s ease infinite, fadeInUp 1s ease-out 0.4s both;
            position: relative;
        }

        @keyframes gradientShift {

            0%,
            100% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }
        }

        /* Hero description */
        .hero-lead {
            margin: 1.5rem auto 2rem;
            color: rgba(255, 255, 255, 0.85);
            font-size: clamp(1rem, 2vw, 1.25rem);
            line-height: 1.6;
            max-width: 750px;
            animation: fadeInUp 1s ease-out 0.6s both;
            font-weight: 400;
        }

        /* CTA buttons */
        .hero-ctas {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 3rem;
            animation: fadeInUp 1s ease-out 0.8s both;
        }

        @media (max-width: 768px) {
            .hero-video {
                display: none;
            }
        }
    </style>
    <link rel="stylesheet" href="./assets/frontend/css/header.css">
    <link rel="stylesheet" href="./assets/frontend/css/test.css">
    <link rel="stylesheet" href="./assets/frontend/css/reviews.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/fontawesome.min.css">

    <link rel="stylesheet" href="./assets/frontend/css/icons.css">

<!--<link rel="preload" href="./assets/frontend/css/header.css" as="style" onload="this.rel='stylesheet'">-->
<!--<noscript><link rel="stylesheet" href="./assets/frontend/css/header.css"></noscript>-->

<!--<link rel="preload" href="./assets/frontend/css/test.css" as="style" onload="this.rel='stylesheet'">-->
<!--<noscript><link rel="stylesheet" href="./assets/frontend/css/test.css"></noscript>-->

<!--<link rel="preload" href="./assets/frontend/css/reviews.css" as="style" onload="this.rel='stylesheet'">-->
<!--<noscript><link rel="stylesheet" href="./assets/frontend/css/reviews.css"></noscript>-->

<!--<link rel="preload" href="./assets/frontend/css/icons.css" as="style" onload="this.rel='stylesheet'">-->
<!--<noscript><link rel="stylesheet" href="./assets/frontend/css/icons.css"></noscript>-->


    <!--<link rel="stylesheet" href="./assets/frontend/css/header.css" />-->
    <!--<link rel="stylesheet" href="./assets/frontend/css/test.css" />-->
    <!--<link rel="stylesheet" href="./assets/frontend/css/icons.css" />-->
    <!--<link rel="stylesheet" href="./assets/frontend/css/reviews.css" />-->
    <!--<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">-->


    <link rel="preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" as="style">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" media="print"
        onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    </noscript> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">
     <!-- Start of LiveChat (www.livechat.com) code -->
<script>
    window.__lc = window.__lc || {};
    window.__lc.license = 19391817;
    window.__lc.integration_name = "manual_channels";
    window.__lc.product_name = "livechat";
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
</script>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var chatButtons = document.querySelectorAll(".chatss");
            var visibility = "minimized";

            LiveChatWidget.on("ready", function (data) {
                if (data && data.state && data.state.visibility) {
                    visibility = data.state.visibility;
                }

                chatButtons.forEach(function (btn) {
                    btn.addEventListener("click", function () {
                        if (visibility !== "maximized") {
                            LiveChatWidget.call("maximize");
                        } else {
                            LiveChatWidget.call("minimize");
                        }
                    });
                });

                LiveChatWidget.on("visibility_changed", function (data) {
                    if (data && data.visibility) {
                        visibility = data.visibility;
                    }
                });

                // function openChatAfterDelay() {
                //     if (visibility !== "maximized") {
                //         LiveChatWidget.call("maximize");
                //         visibility = "maximized";
                //     }
                // }

                // setInterval(openChatAfterDelay, 15002);

                setTimeout(function () {
                    LiveChatWidget.call("maximize");
                    visibility = "maximized";
                }, 15000);
            });
        });
    </script>
<noscript><a href="https://www.livechat.com/chat-with/19391817/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a></noscript>
<!-- End of LiveChat code -->
   
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17775399716"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17775399716');
</script>

<script id="vtag-ai-js" async src="https://r2.leadsy.ai/tag.js" data-pid="voDXfWVGm1HFWAcq" data-version="062024"></script>
</head>

<body>
        <div class="promo-ticker is-sticky" id="promoTicker" role="region" aria-label="Christmas Discount Announcement">
        <div class="inner">
            <div class="marquee" aria-live="polite">
                <div class="track">
                    <div class="msg">
                        <span class="badge">CHRISTMAS SPECIAL</span>
                        <span>Limited Time Offer — Flat <strong>50% OFF</strong> on Publishing Packages. Call Now:
                            <?php echo $PhoneNumber ?>.</span>
                        <span style="opacity:.7">•</span>
                        <span>Get your book published & marketed with experts — <strong>Save 50%</strong> today!</span>
                        <span style="opacity:.7">•</span>
                        <span>Offer Ends Soon — Book Your Slot Now.</span>
                    </div>
                    <div class="msg">
                        <span class="badge">CHRISTMAS SPECIAL</span>
                        <span>Limited Time Offer — Flat <strong>50% OFF</strong> on Publishing Packages. Call Now:
                            <?php echo $PhoneNumber ?>.</span>
                        <span style="opacity:.7">•</span>
                        <span>Get your book published & marketed with experts — <strong>Save 50%</strong> today!</span>
                        <span style="opacity:.7">•</span>
                        <span>Offer Ends Soon — Book Your Slot Now.</span>
                    </div>
                </div>
            </div>

            <a class="btn btn-outline" href="/get-free-quote">Get Free Quote</a>

            <!-- <button class="close-btn" type="button" aria-label="Close announcement" id="promoTickerClose">×</button> -->
        </div>
    </div>

    <script>
        (function () {
            const key = "promoTickerClosed_v1";
            const bar = document.getElementById("promoTicker");

            // Add top padding so fixed ticker doesn't overlap header
            function applyBodyOffset() {
                if (!bar || bar.style.display === "none") return;
                const h = bar.offsetHeight || 0;
                document.body.style.paddingTop = h + "px";
            }
            window.addEventListener("load", applyBodyOffset);
            window.addEventListener("resize", applyBodyOffset);
        })();
    </script>
    <header class="main-header pt-0 pb-0">
        <div class="top-bar">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="topbar-right">
                            <a href="https://thepulphousepublishing.com/" aria-label="navigate to home page">
                                 <img src=./assets/frontend/images/logo/logo-white-bp.webp
                                    alt="The Pulp House Publishing" width="347" height="99" loading="eager"
                                    fetchpriority="high" class="img-fluid" />
                            </a>
                            <span class="description">The Most Trusted Publishing Partners Of New And Seasoned Authors
                                In USA</span>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <a href="tel:888-909-9431" class="chat-us">
                            <img src="./assets/frontend/images/icons/whats-app.svg" class="img-fluid lazyload"
                                alt="Call Us" title="Call Us" loading="lazy" width=22 height=15 />Call Us :
                            <?php echo $PhoneNumber ?>
                        </a>
                        <a class="message" href="mailto:info@thepulphousepublishing.com">
                            <i class="fa-regular fa-envelope"></i>
                            info@thepulphousepublishing.com
                        </a>
                    </div>
                    <div class="col-lg-3 text-end">
                        <a href="/get-free-quote" class="btn-chat">Submission</a>
                        <button class="btn-live d-none" onclick="openLiveChat()" type=button role="button">Start Live
                            Chat</button>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg" id="scroll-control">
            <div class="container-fluid">
                <a href="/" aria-label="navigate to home page">
                    <img src="./assets/frontend/images/logo/british-books-publishers.webp" class="img-fluid d-none"
                        alt="The Pulp House Publishing" title="The Pulp House Publishing" loading="eager" width=347
                        height=99 />
                </a>
                <button class="navbar-toggler" type=button data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <ul class="navbar-nav align-items-center">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about-us">About us </a>
                        </li>
                        <li class="nav-item dropdown">
                            <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">Services</span>
                            <ul class="dropdown-menu">
                                <div class="box">
                                    <li>
                                        <a class="dropdown-item" href="/ebook-publishing">Ebook Publishing </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/book-marketing">Book Marketing </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/book-cover-design">Book Cover Design </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/book-illustration">Book Illustration </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/editing-proofreading">Editing And Proofreading
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/book-formatting-service">Book Formatting Service
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/art-book-publishing">Art Book Publishing </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/business-book-publishing">Business Book
                                            Publishing </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/photo-book-publishing">Photo Book Publishing
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/audio-book-publishing">Audiobook Publishing </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/poetry-publishing">Poetry Publishing </a>
                                    </li>

                                    <li>
                                        <a class="dropdown-item" href="/kindle-direct-publishing">Kindle Direct
                                            Publishing </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/text-book-publishing">Textbook Publishing </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/book-printing">Book Printing </a>
                                    </li>

                                    <li>
                                        <a class="dropdown-item" href="/book-layout-design">Book Layout and Design </a>
                                    </li>

                                    <li>
                                        <a class="dropdown-item" href="/childrens-book-publishing">Children's Book
                                            Publishing </a>
                                    </li>

                                    <li>
                                        <a class="dropdown-item" href="/author-branding">Author Branding </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/fiction-book-publishers">Fiction Book Publishers
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/reviews">Reviews </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact-us">Contact us </a>
                        </li>
                        <li class="nav-item dropdown">
                            <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">Packages</span>
                            <ul class="dropdown-menu">
                                <div class="box">
                                    <li>
                                        <a class="dropdown-item" href="/book-publishing-packages">Book Publishing Packages </a>
                                    </li>
                                    
                                    <li>
                                        <a class="dropdown-item" href="/ghostwriting-packages">Ghostwriting Packages </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/holiday-packages">Holiday Packages </a>
                                    </li>
                                    
                                </div>
                            </ul>
                        </li>
                        <!--<li class="nav-item">-->
                        <!--    <a class="nav-link" href="/start-now">Get Started</a>-->
                        <!--</li>-->
                        <li class="nav-item">
                            <a class="nav-link" href="/bookstore">Book Store</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/book-reviews">Book Reviews</a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="https://questionnaire.thepulphousepublishing.com/referral/">Referral</a>
                        </li> -->
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="https://thepulphousepublishing.com/blog/">Blog </a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </header>