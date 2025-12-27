<?php
include_once(dirname(__FILE__) . "/common/header.php")
    ?>
<section class="pub-service text-lg-start text-center">
    <div class="container">
        <div class="row gx-5">
            <div class="col-lg-6">
                <h1 class="h1">Turn Your Manuscript into a Published Book with Our Expert Services</h1>

                <p class="photo-bk8">Every writer imagines their book in readers’ hands, sparking joy or sparking
                    thought. We can help you see that vision through at our publishing house with such services as
                    designing and making your manuscript special. No matter what kind of author you are, a beginner or a
                    veteran, we walk you through the process with caution and dexterity. Be it acute proofreading to
                    accurate editing, we check that your book stands out in glory. Ready to share your story? Let’s
                    bring it to life.</p>
                <div class="features">
                    <h2 class="h4">Catching Every Slip</h2>
                    <ul>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            Error Hunting: We look at typos, misspelling, and grammatical slip-ups askew.
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            Coherent Appearance: We uniformly format, punctuate, and capitalize to give it a neat
                            conclusion.
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            Fluid Movement: We refine awkward wordings to keep the readers glued without distorting your
                            style.
                        </li>
                        <!--<li>-->
                        <!--    <i class="fa-solid fa-check"></i>-->
                        <!--   Punctuation Flair: We make commas, dashes, and everything easier to read.-->
                        <!--</li>-->
                    </ul>
                </div>
            </div>
            <div class="col-lg-6">
                <form id="form2" class="service-form">
                    <span class="h5">Start Your Book Cover Design Journey
                    </span>

                    <div class="row gy-4">
                        <div class="col-12"><label for="name" class="form-label">Name:</label><input type="text"
                                class="form-control " id="name" name="name" placeholder="Enter Your Full Name"
                                aria-label="Full Name" required=""></div>
                        <div class="col-12"><label for="email" class="form-label">Email:</label><input type="email"
                                class="form-control " id="email" name="email" placeholder="Enter Your Email"
                                aria-label="Email" required=""></div>
                        <div class="col-12"><label for="phone" class="form-label">Phone No:</label><input type="number"
                                class="form-control " id="phone" name="phone" placeholder="Enter Your Phone No."
                                aria-label="Phone No." required=""></div>
                        <div class="col-12"><label for="message" class="form-label">Tell Us About Your
                                Project:</label><textarea class="form-control " name="message" id="message"
                                aria-label="Your Message" placeholder="Write Your Project Details" rows="4" cols="50"
                                maxlength="1500" required=""></textarea></div>

                        <div class="col-12"><button type="submit" class="btn-order btn-md send">Proceed To
                                Publishing</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<section class="our-authors text-lg-start text-center">
    <div class="container">
        <h2 class="h1 d-block text-center">PWhy Partner with Us for Your Publishing Path?</h2>
        <p class="text-center">We’re your allies in storytelling. Our deep experience, passion for great writing, and
            focus on quality set us apart. We treat your manuscript with the respect it deserves, offering personal
            attention to make it shine.
        </p>
        <p class="text-center">
            With us, you’re creating a book readers will love for years to come. We catch typos, spelling errors, and
            grammar slips with precision. We align punctuation, capitalization, and layout for a polished look. We
            refine awkward phrasing to enmity.
        </p>
        <div class="row mt-2 gx-4 gy-4 align-items-center">
            <div class="col-lg-6">
                <img src="./assets/frontend/images/simple/edit-and-proofreading.webp"
                    class="img-fluid lazyload d-block mx-auto" alt="eBook Proofreading" title="eBook Proofreading"
                    width=548 height=325 />
            </div>
            <div class="col-lg-6">
                <h2 class="h5">Readying Your Book for Readers</h2>
                <p>In a crowded publishing world, a flawless manuscript is key. We carefully review every word and
                    sentence, ensuring your book is error-free and packed with impact. Whether you’re self-publishing or
                    aiming for traditional presses, we deliver a manuscript that grabs attention and holds it. Ready to
                    publish a book you’re proud of? Team up with us today to make it real!</p>

                <div class="btn-flex">
                    <a class="btn-order" href="https://thepulphousepublishing.com/get-free-quote">Proofread My Book</a>
                    <a class="btn-chat" href="tel:<?php echo $PhoneNumberLink ?>">
                        <img src="./assets/frontend/images/icons/call-us.svg"
                            class="img-fluid lazyload d-block mx-auto" alt="Call Us" title="Call Us" width=17
                            height=17 /><?php echo $PhoneNumber ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="service-banner text-lg-start text-center">
    <div class="container">
        <div class="row align-items-center gy-3">
            <div class="col-lg-5">
                <img src="./assets/frontend/images/simple/satisfaction-guarantee.webp"
                    class="d-block mx-auto img-fluid lazyload" alt="Satisfaction Guarantee"
                    title="Satisfaction Guarantee" loading="lazy" width=280 height=281 />
            </div>
            <div class="col-lg-5">
                <span class="sub-title">Reach Out Experts, Now</span>
                <h2 class="h1">Want a book that’s truly yours? Get a custom quote today!</h2>
            </div>
        </div>
    </div>
</section>
<section class="sub-services text-lg-start text-center">
    <div class="container">
        <div class="row gy-3">
            <div class="col-lg-6 gx-4 mb-3">
                <h2 class="h1">Shaping Your Tale with Editing and Proofreading Service</h2>
                <p>A great book needs careful sculpting. Our editing and proofreading services blend to strengthen your
                    manuscript’s structure, style, and clarity. We work closely with you, refining your narrative and
                    sharpening your voice to keep readers hooked from start to finish, all while ensuring your story
                    stays yours.</p>
                <ul>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b>Story Flow:</b>
                            We craft a narrative arc that keeps readers glued to the page.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b>Voice Preservation:</b>
                            We clarify your writing while keeping its unique tone intact.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b> Sentence Polish:</b>
                            We smooth awkward phrasing for clarity and impact.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b>Fact-Checking:</b>
                            We verify details to make your work trustworthy.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b> Vivid Dialogue:</b>
                            We refine conversations to sound natural and character-driven.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b> Final Cleanup:</b>
                            We sweep away any remaining errors for a print-ready book.
                        </span>
                    </li>
                </ul>
                <a class="btn-order" href="https://thepulphousepublishing.com/get-free-quote">Avail Consultation</a>
                <a class="btn-chat" href="tel:<?php echo $PhoneNumberLink ?>">
                    <img src="./assets/frontend/images/icons/call-us.svg"
                        class="img-fluid lazyload d-block mx-auto" alt="Call Us" title="Call Us" width=17
                        height=17 /><?php echo $PhoneNumber ?>
                </a>
            </div>
            <div class="col-lg-6 me-lg-auto">
                <div class="row gy-4">
                    <div class="col-sm-6">
                        <img src="./assets/frontend/images/simple/editing-proofreading-sample-1.webp"
                            class="d-block ms-sm-auto me-sm-0 mx-auto img-fluid lazyload"
                            alt="Editing Proofreading Sample 1" title="Editing Proofreading Sample 1" loading="lazy"
                            width=244 height=250 />
                    </div>
                    <div class="col-sm-6">
                        <img src="./assets/frontend/images/simple/editing-proofreading-sample-2.webp"
                            class="d-block me-sm-auto ms-sm-0 mx-auto img-fluid lazyload"
                            alt="Editing Proofreading Sample 2" title="Editing Proofreading Sample 2" loading="lazy"
                            width=244 height=250 />
                    </div>
                    <div class="col-lg-12">
                        <img src="./assets/frontend/images/simple/british-book-authors.webp"
                            class="d-block mx-auto img-fluid lazyload" alt="The Pulp House Publishing" title="The Pulp House Publishing"
                            loading="lazy" width=301 height=85 />
                    </div>
                    <div class="col-sm-6">
                        <img src="./assets/frontend/images/simple/editing-proofreading-sample-3.webp"
                            class="d-block ms-sm-auto me-sm-0 mx-auto img-fluid lazyload"
                            alt="Editing Proofreading Sample 3" title="Editing Proofreading Sample 3" load ing="lazy"
                            width=244 height=250 />
                    </div>
                    <div class="col-sm-6">
                        <img src="./assets/frontend/images/simple/editing-proofreading-sample-4.webp"
                            class="d-block mx-auto me-sm-auto ms-sm-0 img-fluid lazyload"
                            alt="Editing Proofreading Sample 4" title="Editing Proofreading Sample 4" loading="lazy"
                            width=244 height=250 />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="award-banner text-lg-start text-center">
    <div class="container">
        <div class="row align-items-center gx-5 gy-4">
            <div class="col-lg-6">
                <span class="sub-title">Making Publication Easy</span>
                <h2 class="h2">Formatting for Flawless Presentation</h2>
                <p>The content of a book is very important, but the format is important as well. Your manuscript will
                    look as good as it reads because we apply professional layouts that satisfy the industry's
                    expectations. We take care of each detail, such as the font, chapter headings, etc, to give your
                    book a reader-friendly and professional look that improves its quality.</p>
            </div>
            <div class="col-lg-6 text-center">
                <img src="./assets/frontend/images/bg/cmi-awards.webp" class="img-fluid d-in-line mx-auto lazyload"
                    alt="CMI Awards" title="CMI Awards" loading="lazy" width=120 height=124 />
                <img src="./assets/frontend/images/bg/ipa-awards.webp"
                    class="img-fluid d-in-line mx-auto lazyload me-2 ms-2" alt="IPA Awards" title="IPA Awards"
                    loading="lazy" width=120 height=124 />
                <img src="./assets/frontend/images/bg/the-business-bank-book-awards.webp"
                    class="img-fluid d-in-line mx-auto lazyload" alt="The Business Bank Book Awards"
                    title="The Business Bank Book Awards" loading="lazy" width=120 height=124 />
                <span class="p-text">We’re rated as the #1 website for publishing experts with high-quality
                    services.</span>
            </div>
        </div>
    </div>
</section>
<section class="we-assist text-lg-start text-center">
    <div class="container">
        <hr class="border-t" />
        <h2 class="h1">Your Story, Your Way with Custom Editing and Proofreading</h2>
        <p>Each manuscript is unique, and so are our services. We tailor our proofreading and editing to your best
            needs, whether you write novels, memoirs, or non-fiction. We will fit your genre and intentions, so that
            your book is prepared to impress readers or make publishers go crazy.</p>
        <ul>
            <li>Genre-Specific Skill: We adjust ourselves to fiction writing, non-fiction writing, or academic writing.
            </li>
            <li>Transparent Comments: We provide numerous remarks to describe edits and inform you about what is going
                on.</li>
            <li>Custom Options: Use light proofreading, copyediting, or extensive revisions.</li>
            <li>Confidentiality: The manuscript is well-meaning with confidentiality.</li>
            <li>Craft Quality: We are quality-standard in print or digital publishing.</li>
            <li>
                Just in case you need assistance with something else other than proofreading, like <a class="link-pages"
                    href="https://thepulphousepublishing.com/book-cover-design">eBook cover designers</a>
                – we can help.
            </li>
            <li>Our team shares detailed feedback with each client so they understand the flawed areas of their
                manuscript.</li>
            <li>Unsure if your book needs editing or not? Worry not! You can get our free consultancy to make the right
                choice.</li>
        </ul>
        <hr class="border-b" />
    </div>
</section>
<section class="pub-banner text-center">
    <div class="container">
        <span class="h1 text-center">Ready to publish a book you’re proud of? Team up with us today to make it
            real!</span>
        <img src="./assets/frontend/images/bg/amazon.svg" class="img-fluid lazyload d-in-line" alt="Amazon"
            title="Amazon" loading="lazy" width=102 height=31 />
        <img src="./assets/frontend/images/bg/kindle.svg" class="img-fluid lazyload d-in-line" alt="Kindle"
            title="Kindle" loading="lazy" width=102 height=36 />
        <img src="./assets/frontend/images/bg/barnes-and-noble.svg" class="img-fluid lazyload d-in-line"
            alt="Barnes and Noble" title="Barnes and Noble" loading="lazy" width=102 height=36 />
        <img src="./assets/frontend/images/bg/kobo.svg" class="img-fluid lazyload d-in-line" alt="Kobo"
            title="Kobo" loading="lazy" width=102 height=52 />
        <img src="./assets/frontend/images/bg/apple-book.svg" class="img-fluid lazyload d-in-line" alt="Apple Book"
            title="Apple Book" loading="lazy" width=120 height=42 />
        <img src="./assets/frontend/images/bg/google-play-book.svg" class="img-fluid lazyload d-in-line"
            alt="Google Play Books" title="Google Play Books" loading="lazy" width=130 height=42 />
    </div>
</section>
<section class="testimonials text-lg-start text-center">
    <div class="container">
        <hr class="border-t" />
        <span class="sub-title text-center">Our Reviews</span>
        <h2 class="h1">We’re Called the ‘Best Proofreading Site’ by USA Authors</h2>
        <p>Read reviews from the authors who’ve worked with us!

        </p>
    </div>
    <?php
    include_once(dirname(__FILE__) . "/common/review.php")
        ?>
</section>
<?php
include_once(dirname(__FILE__) . "/common/footer.php")
    ?>