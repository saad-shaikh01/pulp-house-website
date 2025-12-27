<?php
include_once(dirname(__FILE__) . "/common/header2.php");
?>

<!-- <head> -->
<!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
<!-- <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&family=Inter:wght@300;400;600&display=swap"
        rel="stylesheet"> -->
<!-- GSAP will be loaded by the JS file but you can preload fonts or CDN here if you want -->
<!-- jQuery -->
<!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" /> -->
<!-- </head> -->

<main class="site-main">
    <!-- <section class="hero" aria-label="Get Your Manuscript Ready to Sell">
        <div class="hero-bg" aria-hidden="true">
            <video class="hero-video" autoplay muted playsinline loop preload="metadata"
                poster="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80">
                <source src="./assets/frontend/videos/Book Publishing book fair video v2.webm" type="video/webm" />
                <source src="./assets/frontend/videos/hero-video.mp4" type="video/mp4" />
            </video>
            <div class="hero-overlay-gradient"></div>
            <div class="hero-shape shape-1" aria-hidden="true"></div>
            <div class="hero-shape shape-2" aria-hidden="true"></div>
            <div class="hero-shape shape-3" aria-hidden="true"></div>
        </div>

        <div class="container hero-inner">
            <div class="hero-content">
                <span class="eyebrow">Trusted Full-Service Book Publishing • USA</span>
                <h1 class="hero-title-main">
                    Get Your Manuscript <br /><span class="accent-typed">Ready</span> to Sell
                </h1>
                <p class="hero-lead">Ghostwriting • Editing • Design • Global Distribution • Marketing — we do the heavy
                    lifting while you create.</p>

                <div class="hero-ctas">
                    <a class="btn btn-primary" href="/get-free-quote">Book Free Consultation</a>
                    <a class="btn btn-outline btn-call" href="/tel:888-909-9431"> <img
                            src="./assets/frontend/images/icons/call-us.svg" class="img-fluid d-block  lazyloaded"
                            alt="Call Us" title="Call Us" width="17" height="17"
                            src="./assets/frontend/images/icons/call-us.svg">888-909-9431</a>
                </div>

                <div class="hero-stats" aria-label="Company statistics">
                    <div class="stat">
                        <strong class="counter" data-target="5000">0</strong>
                        <span>Authors Published</span>
                    </div>
                    <div class="stat">
                        <strong class="counter" data-target="100">0</strong>
                        <span>Five-Star Reviews</span>
                    </div>
                    <div class="stat">
                        <strong class="counter" data-target="1000">0</strong>
                        <span>Returning Clients</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const counters = document.querySelectorAll('.counter');
            const speed = 400;
            let animated = false;

            const animateCounters = () => {
                if (animated) return;
                animated = true;

                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.target);
                    const increment = target / speed;

                    const updateCount = () => {
                        let count = parseInt(counter.innerText);
                        if (count < target) {
                            counter.innerText = Math.ceil(count + increment);
                            setTimeout(updateCount, 10);
                        } else {
                            counter.innerText = target.toLocaleString() + "+";
                        }
                    };

                    updateCount();
                });
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) animateCounters();
                });
            }, { threshold: 0.1 });

            observer.observe(document.querySelector('.hero-stats'));
        });
    </script> -->

    <section class="hero" aria-label="Get Your Manuscript Ready to Sell">
        <div class="hero-bg" aria-hidden="true">

            <!-- Preload LCP poster -->
            <link rel="preload" as="image"
                href="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=60">

            <!-- LIGHTWEIGHT Poster loads instantly (LCP improves!) -->
            <video class="hero-video" autoplay muted playsinline loop preload="none"
                poster="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=60">
                <source src="./assets/frontend/videos/Book Publishing book fair video v2.webm" type="video/webm">
                <source src="./assets/frontend/videos/hero-video.mp4" type="video/mp4">
            </video>

            <div class="hero-overlay-gradient"></div>
            <div class="hero-shape shape-1" aria-hidden="true"></div>
            <div class="hero-shape shape-2" aria-hidden="true"></div>
            <div class="hero-shape shape-3" aria-hidden="true"></div>
        </div>

        <div class="container hero-inner">
            <div class="hero-content">

                <span class="eyebrow">Trusted Full-Service Book Publishing • USA</span>

                <h1 class="hero-title-main">
                    Get Your Manuscript <br />
                    <span class="accent-typed">Ready</span> to Sell
                </h1>

                <p class="hero-lead">
                    Ghostwriting • Editing • Design • Global Distribution • Marketing — we do the heavy lifting while
                    you create.
                </p>

                <div class="hero-ctas">
                    <a class="btn btn-primary" href="/get-free-quote">Book Free Consultation</a>

                    <a class="btn btn-outline btn-call" href="tel:888-909-9431">
                        <img src="./assets/frontend/images/icons/call-us.svg" width="17" height="17" alt="">
                        888-909-9431
                    </a>
                </div>

                <div class="hero-stats" aria-label="Company statistics">
                    <div class="stat">
                        <strong class="counter" data-target="5000">0</strong>
                        <span>Authors Published</span>
                    </div>
                    <div class="stat">
                        <strong class="counter" data-target="100">0</strong>
                        <span>Five-Star Reviews</span>
                    </div>
                    <div class="stat">
                        <strong class="counter" data-target="1000">0</strong>
                        <span>Returning Clients</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <script defer>
        document.addEventListener("DOMContentLoaded", () => {

            const counters = document.querySelectorAll(".counter");
            let done = false;

            const animate = () => {
                if (done) return;
                done = true;

                counters.forEach(counter => {
                    const target = +counter.dataset.target;
                    let value = 0;
                    const step = Math.max(1, target / 120); // smoother + faster

                    const run = () => {
                        value += step;
                        if (value < target) {
                            counter.textContent = Math.floor(value);
                            requestAnimationFrame(run);
                        } else {
                            counter.textContent = target.toLocaleString() + "+";
                        }
                    };
                    run();
                });
            };

            const io = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) animate();
            }, { threshold: 0.2 });

            io.observe(document.querySelector(".hero-stats"));
        });
    </script>




    <section class="best-publishers text-lg-start text-center">
        <div class="container">
            <div class="row gx-5 gy-5">
                <div class="col-lg-7">
                    <h2  style="text-transform: none !important;">Trusted Publishers in the U.S. for
                        Bestselling Authors</h2>
                    <p>Writing comes naturally to some; others take pride in design, while many simply want their
                        stories
                        told. Whether you’re finishing your first novel or are a seasoned writer ready to publish your
                        fifth title, you’re in the right place. </p>
                    <p>At The Pulp House Publishing, we help independent authors publish professionally without the
                        hassle of pursuing a literary agent or enduring years of waiting.</p>
                    <p>Our self publishing services for indie authors range from ghostwriting and manuscript evaluation
                        to editing and proofreading, as well as book cover design, illustration, interior layout, and
                        formatting for print and eBook.</p>
                    <p>We also handle audiobook production, uploading, metadata and keyword optimization, global
                        distribution setup, and author website creation. To help you reach readers, we provide full
                        publicity, branding, book marketing services for self-publishing authors in USA.</p>
                    <p>This makes us the only partner you’ll ever need to publish seamlessly and professionally.</p>
                    <div class="pub-text">
                        <a class="btn btn-primary" href="/get-free-quote">Need Publishing Support?</a>
                        <!-- <span class="best-text">Let's Partner to Make Your Book a Worldwide Success Story.</span> -->
                    </div>
                </div>
                <div class="col-lg-5">
                    <img src="./assets/frontend/images/home/ctaImage.webp"
                        class="img-fluid lazyload d-block mx-auto" alt="Best Book Publishers In USA"
                        title="Best Book Publishers In USA" loading="lazy" width=413 height=500 />
                </div>
            </div>
        </div>
    </section>
    <section class="quote-section">
        <div class="quote-wrap">
            <!-- left quote image -->
            <img src="./assets/frontend/images/home/qright.webp" class="quote-icon left" alt="quote left" />


            <h2 class="quote-text">There is no greater agony than bearing an untold story inside you.</h2>
            <p class="quote-author">— Maya Angelou</p>


            <!-- right quote image -->
            <img src="./assets/frontend/images/home/qleft.webp" class="quote-icon right" alt="quote right" />
        </div>
    </section>
    <!-- Page 2: Stats -->
    <section class="page page-2" id="page2">
        <div class="container">
            <div class="stats-section">
                <div class="stats-content">
                    <h2>The Pulp House Publishing at a Quick Glance</h2>
                    <p>The Most Trusted Self-publishing Service for New Authors in the United States</p>
                    <div class="buttons-start">
                        <a class="btn btn-primary" href="/get-free-quote">Get In Touch</a>
                        <a class="btn btn-outline-primary" href="tel:888-909-9431">888-909-9431</a>
                    </div>
                </div>

                <div class="stats-visual">
                    <div class="stat-bubble bubble-1">
                        <div class="stat-number">5000+</div>
                        <div class="stat-label">Independent Authors
                            <br /> Published
                        </div>
                    </div>

                    <div class="stat-bubble bubble-2">
                        <div class="stat-number">1000+</div>
                        <div class="stat-label">Returning Clients</div>
                        <div class="growth-badge growth-1">+1.27% ▲</div>
                        <div class="avatar avatar-2">
                            <img src="./assets/frontend/images/home/Ellipse-6.webp" alt="books" class="img-fluid ">
                        </div>
                    </div>

                    <div class="stat-bubble bubble-3">
                        <div class="stat-number">100+</div>
                        <div class="stat-label">Five-Star Reviews</div>
                        <div class="growth-badge growth-2">+1.27% ▲</div>
                        <div class="avatar avatar-3"><img src="./assets/frontend/images/home/Ellipse-7.webp" alt="books"
                                class="img-fluid "></div>
                    </div>

                    <div class="stat-bubble bubble-4">
                        <div class="stat-number">24/7</div>
                        <div class="stat-label">Support Team</div>
                        <div class="avatar avatar-1"><img src="./assets/frontend/images/home/Ellipse-5.webp" alt="books"
                                class="img-fluid "></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script>
        function scrollToPage(pageNum) {
            const page = document.getElementById(`page${pageNum}`);
            page.scrollIntoView({ behavior: 'smooth' });

            // Update nav dots
            document.querySelectorAll('.nav-dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === pageNum - 1);
            });
        }

        // Update active nav dot on scroll
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const pages = document.querySelectorAll('.page');

            pages.forEach((page, index) => {
                const pageTop = page.offsetTop;
                const pageBottom = pageTop + page.offsetHeight;

                if (scrollPosition >= pageTop && scrollPosition < pageBottom) {
                    document.querySelectorAll('.nav-dot').forEach((dot, dotIndex) => {
                        dot.classList.toggle('active', dotIndex === index);
                    });
                }
            });
        });
    </script>

    <section role="region" aria-label="Company Publication Journey" style="background: #f8eff2">
        <div class="container-fluid pb-5 partnership-model">
            <div class="container" style="text-align: center;">
                <h2 class="mb-3">Your Publishing Journey Starts Here.</h4>
                    <div class="row banner-num d-flex justify-content-center mt-3 mb-3">
                        <div class="col-6 col-sm-6 col-md-2 col-lg-2 mt-5">
                            <div class="d-flex justify-content-center">
                                <img src="./assets/frontend/images/home/one.webp" class="img-fluid text-center"
                                    alt="...">

                            </div>
                            <h5 class="text-center fw-bold">Submissions</h5>
                        </div>
                        <div class="col-6 col-sm-6  col-md-2 col-lg-2 mt-5">
                            <div class="d-flex justify-content-center">
                                <img src="./assets/frontend/images/home/two.webp" class="img-fluid text-center"
                                    alt="...">
                            </div>
                            <h5 class="text-center fw-bold">Production &amp; Design</h5>
                        </div>
                        <div class="col-6 col-sm-6  col-md-2 col-lg-2 mt-5">
                            <div class="d-flex justify-content-center">
                                <img src="./assets/frontend/images/home/three.webp" class="img-fluid text-center"
                                    alt="...">
                            </div>
                            <h5 class="text-center fw-bold">Marketing</h5>
                        </div>
                        <div class="col-6 col-sm-6  col-md-2 col-lg-2 mt-5">
                            <div class="d-flex justify-content-center">
                                <img src="./assets/frontend/images/home/four.webp" class="img-fluid text-center"
                                    alt="...">
                            </div>
                            <h5 class="text-center fw-bold">Distribution</h5>
                        </div>
                        <div class="col-12 col-sm-12  col-md-2 col-lg-2 mt-5">
                            <div class="d-flex justify-content-center">
                                <img src="./assets/frontend/images/home/five.webp" class="img-fluid text-center"
                                    alt="...">
                            </div>
                            <h5 class="text-center fw-bold">Royalties</h5>
                        </div>
                    </div>
                    <div class="cta-actions mb-3">
                        <a class="btn btn-primary" href="/get-free-quote">Request a Quote</a>
                        <a class="btn btn-outline-primary" href="tel:888-909-9431">888-909-9431</a>
                    </div>
            </div>
        </div>
    </section>

    <section class="contact-section mt-5 p-4 container">
        <div class="mb-3 mb-lg-0">
            <h2>LET'S GET STARTED</h2>
            <div class="contact-form">
                <form style="display:contents;" id="horiForm">
                    <input type="hidden" name="brand_id" value="20">
                    <input type="hidden" name="url" value="redrockbookpublishers.com/lp/">
                    <div class="input-field"><input type="text" name="name" placeholder="Name"></div>
                    <div class="input-field"><input type="email" name="email" placeholder="Email"></div>
                    <div class="input-field"><input type="tel" name="phone" placeholder="Phone"></div>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form>
                <script>
                    const horiForm = document.getElementById('horiForm');

                    horiForm.addEventListener('submit', async (event) => {
                        event.preventDefault();

                        const formData = new FormData(horiForm);
                        formData.append('fullPageUrl', window.location.href);
                        formData.append('companyName',
                            'The Pulp House Publishing'); // Replace 'YourCompanyName' with actual company name

                        const object = {};
                        formData.forEach((value, key) => {
                            object[key] = value;
                        });

                        try {
                            const response = await fetch('https://americanseohub.com/api/v1/register   ', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(object),
                            });

                            if (response.ok) {
                                horiForm.reset();
                                window.location.href = 'https://thepulphousepublishing.com/thankyou.php';
                            } else {
                                alert('Form submission failed: ' + (response.statusText || 'Unknown error'));
                                console.error('API error:', response.status, response.statusText);
                            }
                        } catch (error) {
                            alert('Form submission failed: ' + error.message);
                            console.error('Fetch error:', error);
                        }
                    });
                </script>
            </div>

        </div>
    </section>

    <div class="container py-5 mt-5 process">
        <div class="row text-center justify-content-center process-head">
            <div class="col-lg-8 col-md-10">
                <h2 class="uperTitle">We Understand the<br>Roadblocks on the Way to</h2>
                <div class="pan-point-title"><span class="span">SELF </span>PUBLISHING</div>
                <p class="subtitle">Does this sound like you?</p>
            </div>
        </div>
        <section class="row process-step-2 py-5 clr-l text-center text-md-start">
            <div class="number col-md-2">
                <span class="heading f-55 fw-700">01</span>
            </div>
            <div class="col-md-10">
                <h3>I have a story to tell, but I don’t know how to bring it to life.</h3>
                <p>Our ghostwriters and editors help write your ideas exactly the way you’ve imagined, making them into
                    a compelling, publishable manuscript that sounds authentically like you.</p>
            </div>
        </section>

        <section class="row process-step-2 py-5 clr-l text-center text-md-start">
            <div class="number col-md-2">
                <span class="heading f-55 fw-700">02</span>
            </div>
            <div class="col-md-10">
                <h3>I keep going back and fixing mistakes in my book, but it’s still not perfect.</h3>
                <p>We enhance your draft with expert editing, turning rough pages into a polished, professional book.
                </p>
            </div>
        </section>

        <section class="row process-step-2 py-5 clr-l text-center text-md-start">
            <div class="number col-md-2">
                <span class="heading f-55 fw-700">03</span>
            </div>
            <div class="col-md-10">
                <h3>Print, eBook, and audiobooks; it’s all so confusing!</h3>
                <p>We manage the entire publishing process: print, eBook, and audiobook, allowing you to focus solely on
                    your story while we handle the rest.</p>
            </div>
        </section>

        <section class="row process-step-2 py-5 clr-l text-center text-md-start">
            <div class="number col-md-2">
                <span class="heading f-55 fw-700">04</span>
            </div>
            <div class="col-md-10">
                <h3>I’m worried about making a mistake that could affect my royalties or rights.</h3>
                <p>Our team ensures that your copyrights, ISBNs, and royalties are correctly managed to protect your
                    rights and earnings.</p>
            </div>
        </section>

        <section class="row process-step-2 py-5 clr-l text-center text-md-start">
            <div class="number col-md-2">
                <span class="heading f-55 fw-700">05</span>
            </div>
            <div class="col-md-10">
                <h3>I want a professional cover that is true to my story.</h3>
                <p>We provide elaborate book cover design and layout services that reflect your story and stand out on
                    every bookshelf and online store.</p>
            </div>
        </section>

        <section class="row process-step-2 py-5 clr-l text-center text-md-start">
            <div class="number col-md-2">
                <span class="heading f-55 fw-700">06</span>
            </div>
            <div class="col-md-10">
                <h3>My book doesn’t look like something from a bookstore. I want it to feel professional inside and out.
                </h3>
                <p>Our layout and formatting experts provide your book with a clean, bookstore-quality finish both
                    inside and out.</p>
            </div>
        </section>

        <section class="row process-step-2 py-5 clr-l text-center text-md-start">
            <div class="number col-md-2">
                <span class="heading f-55 fw-700">07</span>
            </div>
            <div class="col-md-10">
                <h3>I want my book to be adapted into a movie. I just don’t know how.</h3>
                <p>We help you package your book professionally for film and TV consideration, including script writing,
                    adaptation support, pitching guidance, and industry connections.</p>
            </div>
        </section>

        <section class="row process-step-2 py-5 clr-l text-center text-md-start">
            <div class="number col-md-2">
                <span class="heading f-55 fw-700">08</span>
            </div>
            <div class="col-md-10">
                <h3>There are so many publishing platforms. I don’t know where to start or how to upload my book
                    correctly.</h3>
                <p>We set up and upload your book across all major platforms correctly the first time: Amazon,
                    IngramSpark, and beyond.</p>
            </div>
        </section>

        <section class="row process-step-2 py-5 clr-l text-center text-md-start">
            <div class="number col-md-2">
                <span class="heading f-55 fw-700">09</span>
            </div>
            <div class="col-md-10">
                <h3>I want to reach readers but don’t know how to market my book effectively.</h3>
                <p>Our book marketing specialists create targeted campaigns to connect your book with the readers who
                    will love it the most.</p>
            </div>
        </section>

        <section class="row process-step-2 py-5 clr-l text-center text-md-start">
            <div class="number col-md-2">
                <span class="heading f-55 fw-700">10</span>
            </div>
            <div class="col-md-10">
                <h3>I want to present myself as a professional author online, but I don’t know how to build my author
                    brand.</h3>
                <p>We help craft your professional author brand, from logo and website to media kit, to build lasting
                    visibility and trust.</p>
            </div>
        </section>

    </div>

    <div class="cta--1 text-lg-start text-center" style="position: relative;">
        <div class="container">
            <div class="row align-items-center gx-5 gy-4">
                <div class="col-lg-6">
                    <h2 class="h2">The Premium Self-Publishing Partner for U.S. and International Markets</h2>
                    <p>You poured your effort into writing the book. Now, leave the publishing to our professional
                        staff,
                        with great attention, and global coverage. We ensure you have a shining project and have the
                        ultimate benefit: 100% of the royalties are yours. Every single time.</p>

                    <div class="cta__buttons">
                        <a class="btn btn-white" href="/get-free-quote">Book Free Consultation</a>
                        <a class="btn btn-outline-light " href="/tel:888-909-9431">888-909-9431</a>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <img src="./assets/frontend/images/home/cta1.webp" alt="">
                </div>
            </div>
        </div>
    </div>

    <section class="trusted-section">
        <div class="container">
            <h2 class="trusted-title">Trusted by Leading Self Publishing Platforms</h2>
            <p class="trusted-subtitle">
                We collaborate with world-class publishing partners and global distribution networks
                to give your book professional reach and credibility.
            </p>


            <!-- Swiper -->
            <div class="swiper trusted-slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="./assets/frontend/images/bg/amazon.svg" alt="Amazon Kindle">
                    </div>
                    <div class="swiper-slide"><img src="./assets/frontend/images/bg/ingram-spark.png"
                            alt="IngramSpark">
                    </div>
                    <div class="swiper-slide"><img src="./assets/frontend/images/bg/google-play-book.png"
                            alt="GooglePlayBook"></div>
                    <div class="swiper-slide"><img src="./assets/frontend/images/bg/kindle.svg" alt="IngramSpark"></div>
                    <div class="swiper-slide"><img src="./assets/frontend/images/bg/acx.png" alt="ACX"></div>
                    <div class="swiper-slide"><img src="./assets/frontend/images/home/pub_logo_8.webp" alt="Apple Book">
                    </div>
                    <div class="swiper-slide"><img src="./assets/frontend/images/bg/kobo.svg" alt="Kobo">
                    </div>
                    <div class="swiper-slide"><img src="./assets/frontend/images/home/pub_logo_5.webp" alt="iBooks">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="page-wrap">
        <div class="serv-grid">
            <section class="serv-card hero_card ">
                <h2>Our Book Publishing<br>Services for Indie Authors</h2>
                <div class="cta-actions mb-3">
                    <a class="btn btn-primary" href="/get-free-quote">Request a Quote</a>
                    <a class="btn btn-outline-primary" href="tel:888-909-9431">888-909-9431</a>
                </div>
            </section>

            <article class="serv-card card--prod ">
                <div class="card__media">
                    <img src="./assets/frontend/images/home/book-production.webp" alt="Machinery printing books">
                </div>
                <h2 class="card__title">Book Production</h2>
                <div class="card__subtitle">Blank Pages into a Polished Manuscript</div>
                <p class="card__text">
                    Our ghostwriting, editorial development, and professional book editing services help you write
                    and refine your story, strengthen your message, and perfect your voice.
                </p>
                <a href="/start-now" class="btn btn--purple" type="button">
                    Get Started <span class="btn__arrow" aria-hidden="true">→</span>
                </a>
            </article>

            <article class="serv-card card--design ">
                <div class="card__media">
                    <img src="./assets/frontend/images/home/book-design.webp" alt="Custom book cover mockups">
                </div>
                <h2 class="card__title">Book Design</h2>
                <div class="card__subtitle">Beautiful Books That Captivate</div>
                <p class="card__text">
                    Our design team specializes in stunning book covers, elegant page layouts, and creative
                    illustrations.
                    We craft visuals that make your story irresistible.
                </p>
                <a href="/start-now" class="btn btn--pink" type="button">
                    Get Started <span class="btn__arrow" aria-hidden="true">→</span>
                </a>
            </article>

            <article class="serv-card card--blue ">
                <div class="card__media">
                    <img src="./assets/frontend/images/home/digital-physical.webp"
                        alt="Freshly printed books on a press">
                </div>
                <h3 class="card__title">Digital &amp; Physical<br>Production</h3>
                <div class="card__subtitle">Your Book Available Everywhere Readers Are</div>
                <p class="card__text">
                    We convert, format, and produce your book for print, eBook, and audiobook.
                    Explore our publishing packages to find what suits your requirements.
                </p>
                <a href="/start-now" class="btn btn--blue" type="button">
                    Get Started <span class="btn__arrow" aria-hidden="true">→</span>
                </a>
            </article>

            <article class="serv-card card--navy ">
                <div class="card__media">
                    <img src="./assets/frontend/images/home/marketing.webp" alt="Author browsing colorful bookshelves">
                </div>
                <h3 class="card__title">Marketing &amp;<br>Author Branding</h3>
                <div class="card__subtitle card__subtitle--cool">Get Noticed and Build Your Author Brand</div>
                <p class="card__text" style="color: #fff !important;">
                    We manage launch campaigns, social media, SEO, author websites, and more so readers find (and
                    remember) you.
                </p>
                <a href="/start-now" class="btn btn--navy" type="button">
                    Get Started <span class="btn__arrow" aria-hidden="true">→</span>
                </a>
            </article>

            <section class="serv-card card--global ">
                <div class="gd__media">
                    <img src="./assets/frontend/images/home/global-distribution.webp"
                        alt="Readers browsing stacks of books in a shop">
                </div>
                <div class="gd__content">
                    <h3 class="gd__title">Global Distribution</h3>
                    <div class="gd__kicker">Reach Readers Worldwide</div>
                    <p class="gd__text">
                        We facilitate book distribution for self-published authors through Amazon, Apple Books,
                        Kobo, IngramSpark, and more. Focus on your next masterpiece while we handle the setup and global
                        reach.
                    </p>
                    <a href="/start-now" class="btn btn--charcoal" type="button">
                        Get Started <span class="btn__arrow" aria-hidden="true">→</span>
                    </a>
                </div>
            </section>
        </div>
    </div>

    <section class="container position-relative  py-5">
        <div class="cta--support text-center container-xl">
            <div class="row justify-content-center align-items-center	">
                <div class="col-lg-3 col-6 p-0  d-none d-lg-block">
                    <img class="lozad cta-left" alt="Book marketing experts"
                        src="./assets/frontend/images/home/cta-left.webp">
                </div>
                <div class="col-lg-6 col-md-8 col-11 align-self-center	py-4">
                    <h2 class="">Your Book Deserves the Best Publishing Support</h2>
                    <p>We understand that every author’s journey is unique. Contact us to learn how our personalized
                        book publishing services can help you achieve your publishing goals with ease. </p>
                    <div class="cta-actions">
                        <a class="btn btn-primary" href="/get-free-quote">★ ★ Get Started ★ ★</a>
                        <a class="btn btn-outline-primary" href="/tel:888-909-9431">888-909-9431</a>
                    </div>
                </div>
                <div class="col-lg-3 col-4 p-0 d-none d-md-block">
                    <img class="lozad cta-right" alt="online book promotion"
                        src="./assets/frontend/images/home/cta-right.webp">
                </div>
            </div>
        </div>
    </section>

    <div id="services" class="ex-sec">
        <div class="container" style="position: relative">
            <div class="intro-grid">
                <div>
                    <h2>
                        Here’s How It <span class="highlight">Works</span>
                    </h2>
                </div>
                <div class="intro-text">
                    <h4>
                        Every step is transparent, collaborative, and tailored to your goals.
                    </h4>
                </div>
            </div>

            <div class="content-grid">
                <div class="left-section">
                    <div class="content-section">
                        <div class="content-header">
                            <div class="icon-box"><img src="./assets/frontend/images/home/icon1.svg" alt="">
                            </div>
                            <h2>Talk to Us</h2>
                        </div>
                        <p>We begin with a conversation about your goals and your book. This includes an editorial
                            review and critical evaluation of your manuscript, followed by further discussions until we
                            achieve the desired outcome for your book.</p>
                    </div>

                    <div class="content-section">
                        <div class="content-header">
                            <div class="icon-box"><img src="./assets/frontend/images/home/icon2.svg" alt=""></div>
                            <h2>Refine Your Manuscript</h2>
                        </div>
                        <p>Our experienced book editors and ghostwriters will enhance your story in whatever way you
                            require. This process takes a few months and is entirely human-generated. Perfection cannot
                            be rushed.</p>
                    </div>

                    <div class="content-section">
                        <div class="content-header">
                            <div class="icon-box"><img src="./assets/frontend/images/home/icon3.svg" alt=""></div>
                            <h2>Design & Format</h2>
                        </div>
                        <p>We provide your book with a professional visual identity. This includes eye-catching covers,
                            visuals (such as maps and illustrations), and precise formatting that is nothing less than
                            traditional book publishing service.</p>
                    </div>

                    <div class="content-section">
                        <div class="content-header">
                            <div class="icon-box"><img src="./assets/frontend/images/home/icon4.svg" alt=""></div>
                            <h2>Publish & Launch Your Book</h2>
                        </div>
                        <p>We expertly prepare your book for all major platforms, including Amazon, Barnes & Noble,
                            IngramSpark, and more! Our services include providing ISBNs, protecting your rights, and
                            distributing to both online platforms and physical bookstores. After your book is published,
                            you can collaborate with us for audiobook production and scriptwriting for screen
                            adaptation!</p>
                    </div>

                    <div class="content-section">
                        <div class="content-header">
                            <div class="icon-box"><img src="./assets/frontend/images/home/icon5.svg" alt=""></div>
                            <h2>Promote & Grow</h2>
                        </div>
                        <p>We focus on marketing, branding, and publicity to expand your readership. From a website and
                            press releases to author social media manager, we provide everything.</p>
                    </div>
                </div>
                <div class="right-section">
                    <img src="./assets/frontend/images/home/how-work.webp" alt="tiktok services image">
                </div>
            </div>
        </div>
    </div>

    <div id="discover" class="cta cta--discover">
        <div class="container">
            <div class="cta__grid">
                <div class="cta__content">
                    <h2 class="cta__title">Your e-Book Deserves to Be Read</h2>
                    <p class="cta__description">You’ve put your heart into writing your story now let us help you share
                        it with the world. From expert editing to eye-catching design and global distribution, we make
                        publishing simple, smooth, and stress-free.</p>
                    <div class="cta__buttons">
                        <a href="/get-free-quote" class="btn btn-white">Get in Touch</a>
                        <a href="tel:888-909-9431" class="btn btn-outline-light">888-909-9431</a>
                    </div>
                </div>
                <div class="cta__image-wrapper">
                    <!-- TODO: Replace with actual image 'Group 173.webp' -->
                    <img src="./assets/frontend/images/home/cta-1.webp" alt="Person reading book on chair"
                        class="cta__image" aria-hidden="true">
                </div>
            </div>
        </div>
    </div>
    <!-- <section class="page page-1" id="page1">
        <div class="container">
            <div class="row align-items-center gx-5 gy-4">
                <div class="d-none d-lg-block col-lg-4">
                    <div class="card">
                        <div class="card-number">01</div>
                        <div class="card-content">
                            <p>"I have a story to tell, but I don't know how to bring it to life."</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-number">02</div>
                        <div class="card-content">
                            <p>"I keep going back and fixing mistakes in my book, but it's still not perfect."</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-number">03</div>
                        <div class="card-content">
                            <p>"Print, eBook, and audiobooks; it's all so confusing!"</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-number">04</div>
                        <div class="card-content">
                            <p>"I'm worried about making a mistake that could affect my royalties or rights."</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 text-center">
                    <div class="uperTitle">We Understand the<br>Roadblocks on the Way to</div>
                    <div class="pan-point-title"><span class="span">SELF </span>PUBLISHING</div>
                    <p class="subtitle">Does this sound like you?</p>
                </div>

                <div class="d-none d-lg-block col-lg-4">
                    <div class="card">
                        <div class="card-number">01</div>
                        <div class="card-content">
                            <p>Our ghostwriters and editors help write your ideas exactly the way you've imagined,
                                making them into a compelling,</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-number">02</div>
                        <div class="card-content">
                            <p>We enhance your draft with expert editing, turning rough pages into a polished,
                                professional book.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-number">03</div>
                        <div class="card-content">
                            <p>We manage the entire publishing process: print, eBook, and audiobook, allowing you to
                                focus solely on your story while we handle the rest.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-number">04</div>
                        <div class="card-content">
                            <p>Our team ensures that your copyrights, ISBNs, and royalties are correctly managed to
                                protect your rights and earnings.</p>
                        </div>
                    </div>
                </div>

                <div class="cards-grid d-lg-none">
                    <div class="card">
                        <div class="card-number">01</div>
                        <div class="card-content">
                            <p>"I have a story to tell, but I don't know how to bring it to life."</p>
                        </div>
                    </div>



                    <div class="card">
                        <div class="card-number">01</div>
                        <div class="card-content">
                            <p>Our ghostwriters and editors help write your ideas exactly the way you've imagined,
                                making them into a compelling,</p>
                        </div>
                    </div>




                    <div class="card">
                        <div class="card-number">02</div>
                        <div class="card-content">
                            <p>"I keep going back and fixing mistakes in my book, but it's still not perfect."</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-number">02</div>
                        <div class="card-content">
                            <p>We enhance your draft with expert editing, turning rough pages into a polished,
                                professional book.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-number">03</div>
                        <div class="card-content">
                            <p>"Print, eBook, and audiobooks; it's all so confusing!"</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-number">03</div>
                        <div class="card-content">
                            <p>We manage the entire publishing process: print, eBook, and audiobook, allowing you to
                                focus solely on your story while we handle the rest.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-number">04</div>
                        <div class="card-content">
                            <p>"I'm worried about making a mistake that could affect my royalties or rights."</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-number">04</div>
                        <div class="card-content">
                            <p>Our team ensures that your copyrights, ISBNs, and royalties are correctly managed to
                                protect your rights and earnings.</p>
                        </div>
                    </div>
                </div>

                <div class="buttons">
                    <button class="btn btn-primary">Get In Touch</button>
                    <button class="btn btn-outline-primary">Explore Our Services</button>
                </div>
            </div>
        </div>
        <div class="pan-shape shape-1" aria-hidden="true"></div>
        <div class="pan-shape shape-2" aria-hidden="true"></div>
        <div class="pan-shape shape-3" aria-hidden="true"></div>
    </section> -->

    <section id="why-choose-us" class="wcu section">
        <div class="wcu__wrap">
            <h2 class="wcu__title">Why Authors Choose Us</h2>
            <div class="wcu__grid">
                <article class="wcu__item">
                    <div class="wcu__icon">
                        <img src="./assets/frontend/images/home/choose1.webp" alt=""
                            aria-hidden="true"><!-- TODO: add icon -->
                    </div>
                    <div class="wcu__copy">
                        <h3>100% <br /> creative control</h3>
                    </div>
                </article>
                <article class="wcu__item">
                    <div class="wcu__icon">
                        <img src="./assets/frontend/images/home/choose2.webp" alt="" aria-hidden="true"><!-- TODO -->
                    </div>
                    <div class="wcu__copy">
                        <h3>Retain all your rights &amp; royalties</h3>
                    </div>
                </article>
                <article class="wcu__item">
                    <div class="wcu__icon">
                        <img src="./assets/frontend/images/home/choose3.webp" alt="" aria-hidden="true"><!-- TODO -->
                    </div>
                    <div class="wcu__copy">
                        <h3>Personalized Communication throughout the publishing process</h3>
                    </div>
                </article>
                <article class="wcu__item">
                    <div class="wcu__icon">
                        <img src="./assets/frontend/images/home/choose4.webp" alt="" aria-hidden="true"><!-- TODO -->
                    </div>
                    <div class="wcu__copy">
                        <h3>Comprehensive Services all in one place</h3>
                    </div>
                </article>
                <article class="wcu__item">
                    <div class="wcu__icon">
                        <img src="./assets/frontend/images/home/choose5.webp" alt="" aria-hidden="true"><!-- TODO -->
                    </div>
                    <div class="wcu__copy">
                        <h3>World-class Publishing make your book stand out</h3>
                    </div>
                </article>
                <article class="wcu__item">
                    <div class="wcu__icon">
                        <img src="./assets/frontend/images/home/choose6.webp" alt="" aria-hidden="true"><!-- TODO -->
                    </div>
                    <div class="wcu__copy">
                        <h3>Transparent Pricing no hidden fees, no surprise costs</h3>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <section class="testimonials home-testi text-lg-start text-center">
        <div class="container">
            <h2 class="h1">Real Authors. Real Stories. Beautifully Published.</h2>
            <p class="text-center">Books we’ve had the privilege to bring to life through our book publishing services.
            </p>
        </div>
        <?php
        include_once(dirname(__FILE__) . "/common/review.php")
            ?>
    </section>

    <!--<div class="container my-5" role="region" aria-labelledby="communityHeading">-->
    <!--    <div class="row">-->
    <!--        <div class="col-11 mx-auto">-->
    <!--            <div class="card--2 cardBrdr">-->
    <!--                <h2 tabindex="0" class="text-center mt-3">-->
    <!--                    <span class="bgClr font-weight-bold">The Pulp House Publishing</span>-->
    <!--                    <span>Community</span>-->
    <!--                </h2>-->
    <!--                <div class="card-body--2">-->
    <!--                    <div class="card--iner">-->
    <!--                        <div class="image-block my-3 me-3">-->
    <!--                            <img src="./assets/frontend/images/home/cummunity1.webp" alt="" class="img-fluid">-->
    <!--                        </div>-->
    <!--                        <div class="flex-grow-1">-->
    <!--                            <div class="card--flex">-->
    <!--                              <h4>Don't just take our word for it. listen the reviews from authors, just like you, across the country that experienced the quality and commitment of The Pulp House Publishing.</h4>-->
    <!--                            </div>-->
    <!--                            <div class="card--flex mt-2" style="align-items: center;">-->
    <!--                                <button class="ampCommnityBtn">Compaigns</button>-->
    <!--                            </div>-->
                               
    <!--                        </div>-->
    <!--                        <div class="image-block my-3 ms-3">-->
    <!--                            <img src="./assets/frontend/images/home/cummunity5.webp" alt="" class="img-fluid">-->
    <!--                        </div>-->
    <!--                    </div>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--</div>-->


    <!-- How It Works Section -->
    <!-- <section id="how-it-works" class="hiw section">
        <div class="container hiw__grid">
            <div class="hiw__intro">
                <h2>Here’s How It Works</h2>
                <p>Every step is transparent, collaborative, and tailored to your goals.</p>
            </div>

            <div class="hiw__canvas" aria-hidden="false">

                <article class="hiw__step hiw__step--1" style="--step-x:18%; --step-y:95%; --step-order:2;">
                    <span class="hiw__step-no" aria-hidden="true">1</span>
                    <img src="./assets/frontend/images/home/1.webp">
                    <h3>Talk to Us</h3>
                    <p>We begin with a conversation about your goals and your book. This includes an editorial review
                        and critical evaluation of your manuscript, followed by further discussions until we achieve the
                        desired outcome for your book.</p>
                </article>

                <article class="hiw__step hiw__step--2" style="--step-x:18%; --step-y:28%; --step-order:4;">
                    <img src="./assets/frontend/images/home/2.webp">
                    <span class="hiw__step-no" aria-hidden="true">2</span>
                    <h3>Refine Your Manuscript</h3>
                    <p>Our experienced book editors and ghostwriters will enhance your story in whatever way you
                        require. This process takes a few months and is entirely human-generated. Perfection cannot be
                        rushed.</p>
                </article>

                <article class="hiw__step hiw__step--3" style="--step-x:50%; --step-y:12%; --step-order:6;">
                    <img src="./assets/frontend/images/home/3.webp">
                    <span class="hiw__step-no" aria-hidden="true">3</span>
                    <h3>Design &amp; Format</h3>
                    <p>We provide your book with a professional visual identity. This includes eye-catching covers,
                        visuals (such as maps and illustrations), and precise formatting that is nothing less than
                        traditional book publishing service.</p>
                </article>

                <article class="hiw__step hiw__step--4" style="--step-x:84%; --step-y:30%; --step-order:8;">
                    <img src="./assets/frontend/images/home/4.webp">
                    <span class="hiw__step-no" aria-hidden="true">4</span>
                    <h3>Publish &amp; Launch Your Book</h3>
                    <p>We expertly prepare your book for all major platforms, including Amazon, Barnes & Noble,
                        IngramSpark, and more! Our services include providing ISBNs, protecting your rights, and
                        distributing to both online platforms and physical bookstores. After your book is published, you
                        can collaborate with us for audiobook production and scriptwriting for screen adaptation!</p>
                </article>

                <article class="hiw__step hiw__step--5" style="--step-x:84%; --step-y:95%; --step-order:10;">
                    <img src="./assets/frontend/images/home/5.webp">
                    <span class="hiw__step-no" aria-hidden="true">5</span>
                    <h3>Promote &amp; Grow</h3>
                    <p>We focus on marketing, branding, and publicity to expand your readership. From a website and
                        press releases to author social media manager, we provide everything.</p>
                </article>
            </div>

            <div class="hiw__actions">
                <a class="btn btn-white" href="#contact">
                    Get in Touch <span class="hiw__btn-arrow" aria-hidden="true">&rarr;</span>
                </a>
                <a class="btn btn-outline-light" href="#services">
                    Explore Our Services <span class="hiw__btn-arrow" aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
    </section> -->

    <div class="testimonials home-testi  text-center">
        <div class="container">
            <hr class="border-t" />
            <span class="sub-title text-center">Client Testimonials</span>
            <h2>Verified Reviews of Our Publishing Services</h2>
            <p class="text-center mx-auto" style="max-width: 700px">Don't just take our word for it. listen the
                reviews from authors, just like you, across the country that experienced the quality and
                commitment of The Pulp House Publishing.</p>
            <div class=" row " style="place-content: center;">
                <div class="col-12 col-md-6 col-lg-4">
                    <video src="https://video.thepulphousepublishing.com/home-video.webm" autoplay muted loop controls
                        playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <video src="https://video.thepulphousepublishing.com/testi-01.webm" autoplay muted loop controls playsinline
                        class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <video src="https://video.thepulphousepublishing.com/testi-02.webm" autoplay muted loop
                        controls playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <video src="https://video.thepulphousepublishing.com/WhatsApp%20Video%202025-11-20%20at%206.02.06%20PM.webm" autoplay muted loop
                        controls playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <video src="https://video.thepulphousepublishing.com/book-publishing/8.webm" autoplay muted loop
                        controls playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <video src="https://video.thepulphousepublishing.com/ghostwriting/8.webm" autoplay muted loop
                        controls playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
                </div>
            </div>
        </div>
    </div>

    <!-- === Section 5: Start With Us === -->
    <section id="start" class="cta cta--start">
        <div class="container">
            <div class="cta__grid">
                <div class="cta__content">
                    <h2 class="cta__title">Still Not Sure?</h2>
                    <p class="cta__subtitle">Let Our Clients Change Your Mind.</p>
                    <div class="cta__buttons ">
                        <a href="/get-free-quote" class="btn btn-white">Get in Touch</a>
                        <a href="tel:888-909-9431" class="btn btn-outline">888-909-9431</a>
                    </div>
                </div>
                <div class="cta__image-wrapper">
                    <img src="./assets/frontend/images/home/cta-3.webp" alt="Typewriter with STORY text illustration"
                        class="cta__image" aria-hidden="true">
                </div>
            </div>
        </div>
    </section>

    <section class="success-stories-section">
        <div class="vertical-text">SUCCESS STORIES</div>

        <div class="content-wrapper">
            <div class="testimonial-container">
                <div class="swiper testimonialSwiper">
                    <div class="swiper-wrapper sliderSwiper">
                        <div class="swiper-slide">
                            <div class="testimonial-content">
                                <div class="testimonial-top">
                                    <h3 class="author-name">Jessica M.</h3>
                                    <p class="author-title">- Memoir Author, “Finding My Way”</p>
                                </div>
                                <p class="testimonial-text">
                                    “I’d been sitting on my memoir for almost two years because I didn’t know where to
                                    begin. I wanted it to be written in my voice and to look professional, but I was
                                    intimidated by all the publishing steps. But working with The Pulp House Publishing
                                    made it easy! My writer was patient, the designer captured the emotion of my story
                                    perfectly, and they even helped me set up my Amazon page and market my book. When I
                                    held my printed book for the first time, I actually cried. I felt accomplished.
                                    10/10.”
                                </p>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="testimonial-content">
                                <div class="testimonial-top">
                                    <h3 class="author-name">Aaron B.</h3>
                                    <p class="author-title">- Fantasy Author, “The Shadow Gate”</p>
                                </div>
                                <p class="testimonial-text">
                                    “I had a finished manuscript but no idea what to do next. I tried researching
                                    self-publishing on my own, but it was overwhelming. Formats, ISBNs, cover specs,
                                    everything. I didn’t even know the meaning of most of those things. The team at The
                                    Pulp House Publishing took over and handled it all professionally while keeping me
                                    involved creatively. My book cover blew me away, and now my novel is available on
                                    Amazon and Apple Books. I finally feel like a real author.”
                                </p>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="testimonial-content">
                                <div class="testimonial-top">
                                    <h3 class="author-name">Maya L.</h3>
                                    <p class="author-title">- Children’s Book Author, “The Little Star Who Could”</p>
                                </div>
                                <p class="testimonial-text">
                                    “I had a story and a few sketches, but I wasn’t sure if I could actually make a
                                    children’s book on my own. They paired me with an illustrator who brought my
                                    characters to life. Every page looked magical. The writer only had my illustrations
                                    to work with, but they knew exactly what I wanted to say. They also handled the
                                    layout, printing, and eBook version so it would reach parents and teachers easily.
                                    Now I see photos of kids reading my book. It’s the most amazing feeling.”
                                </p>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="testimonial-content">
                                <div class="testimonial-top">
                                    <h3 class="author-name">David R.</h3>
                                    <p class="author-title">- Business Author, “Lead Like You Mean It”</p>
                                </div>
                                <p class="testimonial-text">
                                    “As a corporate trainer, I’d wanted to turn my workshop material into a book for
                                    years, but I didn’t know how it was possible, especially with my busy schedule. The
                                    editorial team helped me turn my scattered notes into a structured, engaging
                                    business book. The design looked clean and professional, absolutely perfect for my
                                    audience. I had to give them only three revisions, perfectionist that I am, and they
                                    catered well. Within weeks of launching, my book became a powerful tool for my
                                    speaking engagements. I recommend The Pulp House Publishing.”
                                </p>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="testimonial-content">
                                <div class="testimonial-top">
                                    <h3 class="author-name">Sofia T.</h3>
                                    <p class="author-title">- Poet, “Echoes Between Lines”</p>
                                </div>
                                <p class="testimonial-text">
                                    “Well, I guess this is it. The book seems to be a hit with my family! I thought
                                    self-publishing poetry would be too niche or complicated, but they completely
                                    changed my mind. They treated my work like art (as it was), helping me choose
                                    typography, layout, and even the paper texture to match the tone of my poems. Ah,
                                    couldn’t have asked for a better team! The final book felt personal and beautiful,
                                    like a piece of me in print. It’s now available worldwide, and I’m so proud of it.
                                    Thank you, The Pulp House Publishing!”
                                </p>
                            </div>
                        </div>

                        <!-- <div class="swiper-slide">
                            <div class="testimonial-content">
                                <div class="testimonial-top">
                                    <h3 class="author-name">Dr. Neil A.</h3>
                                    <p class="author-title">- Academic Writer, “Modern Learning Frontiers”</p>
                                </div>
                                <p class="testimonial-text">
                                    “I’d published academic papers before, but turning my research into a book for a
                                    general audience was a new challenge. The Pulp House Publishing was a great help.
                                    Their editors helped me make complex ideas accessible without losing credibility or
                                    voice. The formatting team was meticulous, and they guided me through ISBN
                                    registration and distribution. The finished product exceeded every expectation. It
                                    was truly professional, polished, and globally available.”
                                </p>
                            </div>
                        </div> -->

                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>

            <div class="books-container">
                <button class="nav-arrow nav-arrow-left">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="19" stroke="currentColor" stroke-width="2" />
                        <path d="M22 14L16 20L22 26" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>

                <div class="books-arc">
                    <div class="book-wrapper book-position-1" data-book-index="0">
                        <img src="./assets/frontend/images/home/book1.webp" alt="Book Cover 1" class="book-cover">
                    </div>
                    <div class="book-wrapper book-position-2" data-book-index="1">
                        <img src="./assets/frontend/images/home/book2.webp" alt="Book Cover 2" class="book-cover">
                    </div>
                    <div class="book-wrapper book-position-3" data-book-index="2">
                        <img src="./assets/frontend/images/home/book3.webp" alt="Book Cover 3" class="book-cover">
                    </div>
                    <div class="book-wrapper book-position-4" data-book-index="3">
                        <img src="./assets/frontend/images/home/book4.webp" alt="Book Cover 4" class="book-cover">
                    </div>
                    <div class="book-wrapper book-position-5" data-book-index="4">
                        <img src="./assets/frontend/images/home/book5.webp" alt="Book Cover 5" class="book-cover">
                    </div>
                </div>

                <button class="nav-arrow nav-arrow-right">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="19" stroke="currentColor" stroke-width="2" />
                        <path d="M18 14L24 20L18 26" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
        const testimonialSwiper = new Swiper('.testimonialSwiper', {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            // autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: false,
            // },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            loop: true,
            speed: 800,
            on: {
                init: function () {
                    updateActiveBook(this.realIndex);
                },
                slideChange: function () {
                    updateActiveBook(this.realIndex);
                }
            }
        });

        // Function to update active book based on current slide
        function updateActiveBook(activeIndex) {
            // Get all book wrappers
            const bookWrappers = document.querySelectorAll('.book-wrapper');

            // Remove active class from all books
            bookWrappers.forEach(book => {
                book.classList.remove('active');
            });

            // Add active class to the matching book
            bookWrappers.forEach(book => {
                const bookIndex = parseInt(book.getAttribute('data-book-index'));
                if (bookIndex === activeIndex) {
                    book.classList.add('active');
                }
            });
        }

        // Connect navigation arrows to testimonial slider
        document.querySelector('.nav-arrow-left').addEventListener('click', () => {
            testimonialSwiper.slidePrev();
        });

        document.querySelector('.nav-arrow-right').addEventListener('click', () => {
            testimonialSwiper.slideNext();
        });

        // Optional: Click on book to navigate to that testimonial
        document.querySelectorAll('.book-wrapper').forEach(bookWrapper => {
            bookWrapper.addEventListener('click', () => {
                const bookIndex = parseInt(bookWrapper.getAttribute('data-book-index'));
                testimonialSwiper.slideToLoop(bookIndex);
            });
        });
    </script>




    <!-- === Section 4: Schedule a Free Consultation === -->
    <section id="consultation" class="cta cta--consultation">
        <div class="container">
            <div class="cta__grid">
                <div class="cta__content">
                    <h2 class="cta__title">Schedule a Free Consultation</h2>
                    <p class="cta__description">Connect with our publishing specialists to explore customized strategies
                        for editing, design, and distribution crafted to help your eBook succeed.</p>
                    <div class="cta__buttons">
                        <a href="/get-free-quote" class="btn btn-white">Get in Touch</a>
                        <a href="tel:888-909-9431" class="btn btn-outline-light">888-909-9431</a>
                    </div>
                </div>
                <div class="cta__image-wrapper">
                    <!-- TODO: Replace with actual image 'CTA's (4).webp' -->
                    <img src="./assets/frontend/images/home/cta2.webp" alt="Consultation meeting illustration"
                        class="cta__image" aria-hidden="true">
                </div>
            </div>
        </div>
    </section>

    <div class="faq-section" id="faq">
        <div class="container">
            <div class="faq-layout">
                <div class="faq-left">
                    <div class="faq-header">
                        <h2>Frequently asked questions</h2>
                        <p>Everything You Wanted to Know About Us.</p>
                    </div>
                    <aside class="faq-contact-card">
                        <!-- <h3>Still have a question?</h3>
                        <p>Can't find the answer to your question? Send us an email and we'll get back to you as soon as
                            possible!</p> -->
                        <form id="signupForm">
                            <div class="row" style="gap: 10px;">
                                <div>
                                    <label for="name">Full name</label>
                                    <input id="name" name="name" type="text" placeholder="Your Name" required
                                        minlength="2" />
                                </div>
                                <div>
                                    <label for="email">Email</label>
                                    <input id="email" name="email" type="email" placeholder="you@example.com"
                                        required />
                                </div>
                                <div>
                                    <label for="phone">Phone number</label>
                                    <input id="phone" name="phone" type="tel" placeholder="+92 300 1234567"
                                        pattern="^\+?\d{7,15}$" required />
                                </div>
                                <div>
                                    <label for="message">Message</label>
                                    <textarea id="message" name="message" type="text"
                                        placeholder="Your Message..."></textarea>
                                </div>
                            </div>
                            <div class="actions">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                        <script>
                            const signupForm = document.getElementById('signupForm');

                            signupForm.addEventListener('submit', async (event) => {
                                event.preventDefault();

                                const formData = new FormData(signupForm);
                                formData.append('fullPageUrl', window.location.href);
                                formData.append('companyName',
                                    'The Pulp House Publishing'); // Replace 'YourCompanyName' with actual company name

                                const object = {};
                                formData.forEach((value, key) => {
                                    object[key] = value;
                                });

                                try {
                                    const response = await fetch('https://americanseohub.com/api/v1/register   ', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify(object),
                                    });

                                    if (response.ok) {
                                        signupForm.reset();
                                        window.location.href = 'https://thepulphousepublishing.com/thankyou.php';
                                    } else {
                                        alert('Form submission failed: ' + (response.statusText || 'Unknown error'));
                                        console.error('API error:', response.status, response.statusText);
                                    }
                                } catch (error) {
                                    alert('Form submission failed: ' + error.message);
                                    console.error('Fetch error:', error);
                                }
                            });
                        </script>
                    </aside>
                </div>

                <div class="faq-accordion" role="tablist">
                    <!-- <article class="faq-item is-active">
                        <button class="faq-question" aria-expanded="true">
                            <span>Do I need a finished manuscript before contacting you?</span>
                            <span class="faq-toggle-icon" aria-hidden="true"></span>
                        </button>
                        <div class="faq-answer">
                            <p>Not at all. Many of our authors come to us while they're still writing or even just
                                developing their concept. We can help at any stage, whether you need ghostwriting,
                                writing
                                coaching, or editorial development to turn your idea into a complete manuscript.</p>
                        </div>
                    </article> -->

                    <article class="faq-item is-active">
                        <button class="faq-question" aria-expanded="true">
                            <span>Do I need a finished manuscript before contacting you?</span>
                            <span class="faq-toggle-icon" aria-hidden="true"></span>
                        </button>
                        <div class="faq-answer">
                            <p>Not at all. Many of our authors come to us while they’re still writing or even just
                                developing their concept. We can help at any stage, whether you need ghostwriting
                                services, writing coaching, or editorial development to turn your idea into a complete
                                manuscript.</p>
                        </div>
                    </article>

                    <article class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>What’s the difference between self-publishing and traditional publishing?</span>
                            <span class="faq-toggle-icon" aria-hidden="true"></span>
                        </button>
                        <div class="faq-answer">
                            <p>In traditional publishing, you find an agent who submits your manuscript to a publisher,
                                and they decide whether to accept it. They control design, pricing, and royalties. In
                                self-publishing, you retain full ownership of your rights, your profits, and your
                                creative direction. We simply provide the professional expertise to make your
                                self-published book look, read, and perform like those published traditionally.</p>
                        </div>
                    </article>

                    <article class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>Will I keep the rights to my book?</span>
                            <span class="faq-toggle-icon" aria-hidden="true"></span>
                        </button>
                        <div class="faq-answer">
                            <p>Yes! 100% of your rights remain yours. Always. We believe your work belongs to you. Our
                                role is to provide print and digital book distribution platforms for authors. We help
                                you publish and launch it professionally while you maintain full creative and legal
                                ownership.</p>
                        </div>
                    </article>

                    <article class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>What if my manuscript needs a lot of work?</span>
                            <span class="faq-toggle-icon" aria-hidden="true"></span>
                        </button>
                        <div class="faq-answer">
                            <p>That’s completely fine and extremely common! We offer developmental editing, manuscript
                                evaluations, and even ghostwriting support to help strengthen your story, structure, and
                                language. Our editors are here to help you make your book the best version of itself.
                            </p>
                        </div>
                    </article>

                    <article class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>How much does publishing a book cost?</span>
                            <span class="faq-toggle-icon" aria-hidden="true"></span>
                        </button>
                        <div class="faq-answer">
                            <p>It depends on your goals and the services you choose. We are the most affordable self
                                publishing company in USA. After a short consultation, we’ll provide a custom quote that
                                fits your project and budget (with no hidden fees).</p>
                        </div>
                    </article>

                    <article class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>Can you design both the cover and the interior of my book?</span>
                            <span class="faq-toggle-icon" aria-hidden="true"></span>
                        </button>
                        <div class="faq-answer">
                            <p>Absolutely. Our design team handles everything from book cover art and typography to page
                                layout and formatting for print and eBook. We’ll make sure your book looks beautiful
                                inside and out, across all platforms and devices.</p>
                        </div>
                    </article>

                    <article class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>Where will my book be available once it’s published?</span>
                            <span class="faq-toggle-icon" aria-hidden="true"></span>
                        </button>
                        <div class="faq-answer">
                            <p>Your book can be distributed worldwide through major online retailers and platforms such
                                as Amazon, Apple Books, Barnes & Noble, Kobo, Google Play, and IngramSpark. You can also
                                avail our print on demand options for indie authors.</p>
                        </div>
                    </article>

                    <article class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>Can you help me market my book once it’s published?</span>
                            <span class="faq-toggle-icon" aria-hidden="true"></span>
                        </button>
                        <div class="faq-answer">
                            <p>Yes! That’s one of our specialties. We offer launch campaigns, social media strategies,
                                press releases, and book advertising support to help you reach readers. We also assist
                                with author branding, websites, and SEO so your audience can find you easily.</p>
                        </div>
                    </article>

                    <article class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>How long does the publishing process take?</span>
                            <span class="faq-toggle-icon" aria-hidden="true"></span>
                        </button>
                        <div class="faq-answer">
                            <p>It varies depending on your project’s scope. A simple edit-and-publish might take a few
                                weeks, while full production with design, editing, and marketing could take a few
                                months. We’ll create a personalized timeline so you always know what to expect.</p>
                        </div>
                    </article>

                    <article class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>What makes your publishing services different from doing it all myself?</span>
                            <span class="faq-toggle-icon" aria-hidden="true"></span>
                        </button>
                        <div class="faq-answer">
                            <p>DIY platforms give you the tools but not the expertise. We bring together experienced
                                editors, designers, marketers, and publishing specialists to handle every detail,
                                ensuring your book meets professional book publishing standards, stands out visually,
                                and reaches readers effectively.</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
    <!-- === Section 1: Ready to see your story on shelves === -->
    <div id="story-shelves" class="cta cta--story-shelves">
        <div class="container">
            <div class="cta__grid">
                <div class="cta__content">
                    <h2 class="cta__title">Ready to see your story on shelves?</h2>
                    <p class="cta__subtitle">Let's make it happen.</p>
                    <p class="cta__description">Avail the Best Self-Publishing Tools for Indie Authors in USA</p>
                    <div class="cta__buttons">
                        <a href="/get-free-quote" class="btn btn-white">Request a Quote</a>
                        <a href="tel:888-909-9431" class="btn btn-outline">888-909-9431</a>
                    </div>
                </div>
                <div class="cta__image-wrapper">
                    <img src="./assets/frontend/images/home/cta4.webp" alt="Man reading on armchair" class="cta__image"
                        aria-hidden="true">
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="latest-blog" id="blog">
        <div class="container">
            <div class="latest-blog-header">
                <div style="max-width: 700px;">
                    <span class="eyebrow-title">OUR LATEST BLOG</span>
                    <h2>Learn the Secrets of Successful Publishing</h2>
                    <p class="latest-blog-subtitle">Dispelling The Old Myths: What The Public Gets Wrong About
                        Self-Publishing In 2025</p>
                    <a class="latest-blog-link" href="/blog">Visit The Blog &rarr;</a>
                </div>
                <div class="blogHeaderImg d-none d-lg-block">
                    <img src="./assets/frontend/images/home/blogHeader.webp" style="border-radius: 20px" alt="">
                </div>
            </div>

            <div class="blog-carousel" aria-live="polite">
                <div class="blog-track">
                    <article class="blog-card">
                        <div class="blog-card-media">
                            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
                                alt="Stacked books on a keyboard" loading="lazy">
                        </div>
                        <div class="blog-card-body">
                            <h3>Dispelling The Old Myths: What The Public Gets Wrong About Self-Publishing In 2025</h3>
                            <p>We debunk the most common misconceptions about modern indie publishing and share the new
                                realities shaping successful launches.</p>
                        </div>
                        <a class="blog-card-btn" href="/blog">Visit The Blog &rarr;</a>
                    </article>

                    <article class="blog-card">
                        <div class="blog-card-media">
                            <img src="https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=800&q=80"
                                alt="Open book on a table" loading="lazy">
                        </div>
                        <div class="blog-card-body">
                            <h3>The #1 Mistake Self-Publishing Authors Make (It's Not What You Think)</h3>
                            <p>Learn the overlooked strategic misstep that keeps promising manuscripts from reaching the
                                bestseller lists.</p>
                        </div>
                        <a class="blog-card-btn" href="/blog">Visit The Blog &rarr;</a>
                    </article>

                    <article class="blog-card">
                        <div class="blog-card-media">
                            <img src="./assets/frontend/images/home/blog1.webp" alt="Tablet and stacked books"
                                loading="lazy">
                        </div>
                        <div class="blog-card-body">
                            <h3>15 Books That Publishers Rejected Before Becoming Indie Bestsellers</h3>
                            <p>These inspiring case studies prove that rejection letters are often just the beginning of
                                an indie success story.</p>
                        </div>
                        <a class="blog-card-btn" href="/blog">Visit The Blog &rarr;</a>
                    </article>

                    <article class="blog-card">
                        <div class="blog-card-media">
                            <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
                                alt="Person holding an e-reader" loading="lazy">
                        </div>
                        <div class="blog-card-body">
                            <h3>How to Turn Beta Reader Notes Into a Publish-Ready Game Plan</h3>
                            <p>Structure feedback, set priorities, and turn raw comments into an efficient revision
                                roadmap.</p>
                        </div>
                        <a class="blog-card-btn" href="/blog">Visit The Blog &rarr;</a>
                    </article>

                    <article class="blog-card">
                        <div class="blog-card-media">
                            <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
                                alt="Books displayed on store shelves" loading="lazy">
                        </div>
                        <div class="blog-card-body">
                            <h3>Distribution in 2025: Where Indie Authors Must Show Up</h3>
                            <p>Navigate the expanding landscape of print, digital, and audio storefronts to maximize
                                your
                                visibility.</p>
                        </div>
                        <a class="blog-card-btn" href="/blog">Visit The Blog &rarr;</a>
                    </article>

                    <article class="blog-card">
                        <div class="blog-card-media">
                            <img src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=800&q=80"
                                alt="Hands writing in notebook" loading="lazy">
                        </div>
                        <div class="blog-card-body">
                            <h3>From Outline to Launch: A 6-Month Indie Publishing Checklist</h3>
                            <p>Stay on schedule with a week-by-week plan that keeps writing, production, and marketing
                                on
                                track.</p>
                        </div>
                        <a class="blog-card-btn" href="/blog">Visit The Blog &rarr;</a>
                    </article>
                </div>
            </div>
            <div class="blog-dots" role="tablist" aria-label="Featured blog navigation"></div>
        </div>
    </div> -->

    <div class="platforms_publishing">
        <div class="container">
            <div class="platforms_publishing_wrapper">
                <div class="row" style="place-items: center;">
                    <div class="col-lg-7">
                        <div class="platforms_publishing_items_wrapper">

                            <ul>
                                <li> <img src="./assets/frontend/images/home/pub_logo_1.webp"> </li>
                                <li> <img src="./assets/frontend/images/home/pub_logo_2.webp"> </li>
                                <li> <img src="./assets/frontend/images/home/pub_logo_3.webp"> </li>
                                <li> <img src="./assets/frontend/images/home/pub_logo_4.webp"> </li>
                            </ul>

                            <ul>
                                <li> <img src="./assets/frontend/images/home/pub_logo_5.webp"> </li>
                                <li> <img src="./assets/frontend/images/home/pub_logo_6.webp"> </li>
                                <li> <img src="./assets/frontend/images/home/pub_logo_7.webp"> </li>
                                <li> <img src="./assets/frontend/images/home/pub_logo_8.webp"> </li>
                            </ul>

                            <ul>
                                <li> <img src="./assets/frontend/images/home/pub_logo_9.webp"> </li>
                                <li> <img src="./assets/frontend/images/home/pub_logo_10.webp"> </li>
                                <li> <img src="./assets/frontend/images/home/pub_logo_11.webp"> </li>
                                <li> <img src="./assets/frontend/images/home/pub_logo_12.webp"> </li>
                            </ul>

                        </div>
                    </div>


                    <div class="col-lg-5">
                        <div class="publishing_platforms_side_img">
                            <img src="./assets/frontend/images/home/last-cta.webp">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>



<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>


<!-- <script>
    $(".reviews-silder").slick({
        dots: !0,
        infinite: !0,
        arrows: !1,
        autoplay: !0,
        speed: 3e3,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: !0,
        vertical: !0,
        verticalSwiping: !0,
        focusOnSelect: !0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: !1
            }
        },]
    })
</script> -->

<script>
    (function () {
        const faqItems = document.querySelectorAll('.faq-item');
        if (!faqItems.length) return;

        const collapseItem = (item) => {
            item.classList.remove('is-active');
            const trigger = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            if (trigger) {
                trigger.setAttribute('aria-expanded', 'false');
            }
            if (answer) {
                answer.style.maxHeight = null;
            }
        };

        const expandItem = (item) => {
            item.classList.add('is-active');
            const trigger = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            if (trigger) {
                trigger.setAttribute('aria-expanded', 'true');
            }
            if (answer) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        };

        faqItems.forEach((item) => {
            const button = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            if (item.classList.contains('is-active') && answer && button) {
                button.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else if (button) {
                button.setAttribute('aria-expanded', 'false');
            }

            button?.addEventListener('click', () => {
                if (item.classList.contains('is-active')) {
                    collapseItem(item);
                    return;
                }

                faqItems.forEach(collapseItem);
                expandItem(item);
            });
        });

        window.addEventListener('resize', () => {
            const activeAnswer = document.querySelector('.faq-item.is-active .faq-answer');
            if (activeAnswer) {
                activeAnswer.style.maxHeight = activeAnswer.scrollHeight + 'px';
            }
        });
    })();

    (function () {
        const carousel = document.querySelector('.blog-carousel');
        const dotsWrapper = document.querySelector('.blog-dots');
        if (!carousel || !dotsWrapper) return;

        const track = carousel.querySelector('.blog-track');
        const cards = Array.from(track.children);
        if (!cards.length) return;

        let cardsPerView = getCardsPerView();
        let slideCount = computeSlideCount();
        let currentSlide = 0;

        function getCardsPerView() {
            const width = window.innerWidth;
            if (width <= 640) return 1;
            if (width <= 1024) return 2;
            return 3;
        }

        function computeSlideCount() {
            return Math.max(1, cards.length - cardsPerView + 1);
        }

        function buildDots() {
            dotsWrapper.innerHTML = '';
            for (let i = 0; i < slideCount; i += 1) {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = 'blog-dot';
                dot.setAttribute('aria-label', `Show blog slide ${i + 1}`);
                if (i === currentSlide) {
                    dot.classList.add('is-active');
                }
                dot.addEventListener('click', () => goToSlide(i));
                dotsWrapper.appendChild(dot);
            }
        }

        function updateDots() {
            dotsWrapper.querySelectorAll('.blog-dot').forEach((dot, index) => {
                dot.classList.toggle('is-active', index === currentSlide);
            });
        }

        function goToSlide(index) {
            const maxIndex = Math.max(slideCount - 1, 0);
            currentSlide = Math.max(0, Math.min(index, maxIndex));
            const styles = window.getComputedStyle(track);
            const gapValue = parseFloat(styles.columnGap || styles.gap || '0');
            const cardWidth = cards[0]?.offsetWidth || 0;
            const offset = (cardWidth + gapValue) * currentSlide;
            track.style.transform = `translateX(-${offset}px)`;
            updateDots();
        }

        function recalcLayout() {
            const nextCardsPerView = getCardsPerView();
            if (nextCardsPerView !== cardsPerView) {
                cardsPerView = nextCardsPerView;
                slideCount = computeSlideCount();
                if (currentSlide > slideCount - 1) {
                    currentSlide = Math.max(slideCount - 1, 0);
                }
                buildDots();
            }
            goToSlide(currentSlide);
        }

        buildDots();
        goToSlide(0);
        window.addEventListener('resize', recalcLayout);
    })();
</script>

<script>
    const swiper = new Swiper(".trusted-slider", {
        slidesPerView: 5,
        spaceBetween: 40,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        speed: 3000,
        allowTouchMove: false,
        breakpoints: {
            200: { slidesPerView: 2 },
            480: { slidesPerView: 2 },
            550: { slidesPerView: 3 },
            700: { slidesPerView: 5 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 5 },
        },
    });

</script>


<!-- <script src="./assets/frontend/js/test.js" defer></script> -->
<script>
    // Minimal JavaScript for future interactions if needed
    // All animations handled via CSS

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        document.querySelectorAll('.cta__content, .cta__image').forEach(el => {
            el.style.animation = 'none';
        });
    }
</script>
<?php
include_once(dirname(__FILE__) . "/common/footer.php");
?>