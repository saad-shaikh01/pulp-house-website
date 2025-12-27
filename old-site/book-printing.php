<?php
include_once(dirname(__FILE__) . "/common/header.php")
    ?>
<section class="pub-service text-lg-start text-center">
    <div class="container">
        <div class="row gx-5">
            <div class="col-lg-6">
                <h1 class="h1">Turn Your Manuscript into a Stunning Book</h1>
                <!--<h2 class="h4">Print Your Own Book with Our Book Printing Service</h2>-->
                <p class="photo-bk4">Our Book Printing Service transforms your writing into a physical book you can hold
                    with pride. Whether you're a new author, a veteran writer, or a publisher seeking reliable book
                    printing, we’re your go-to team. As a committed Book Printing agency, we focus on producing books
                    that capture your vision with skill and attention.</p>
                <div class="features">
                    <h2 class="h4">What Our Printing Process Offers:</h2>
                    <ul>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            Quality Materials: We use top-tier paper and eco-friendly inks for durability and appeal.
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            Custom Choices: Select hardcover, paperback, or spiral-bound, with sizes and finishes to
                            match your needs.
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            Clear Printing: Our presses deliver sharp text and bright images every time.
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            Speedy Delivery: We meet your deadlines without skimping on quality.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6">
                <form id="form2" class="service-form">
                    <span class="h5">Print Perfection Starts Here – Your Story, Our Craft!</span>

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
        <h2 class="h1 d-block text-center">Why Your Book Deserves Top-Quality Printing
        </h2>
        <p class="text-center">A book is more than just pages; it’s a story that should captivate readers. Book printing
            is about creating something that feels special. We understand the effort you’ve poured into your work, and
            we aim to reflect that with clear text and eye-catching covers that stand out.</p>
        <p class="text-center">Our Book Printing Service blends expert craftsmanship with modern equipment. We print all
            sorts of books, from novels and memoirs to textbooks and children’s tales. With top-notch machinery and a
            dedicated crew, we produce books that meet high standards while showing off your distinct style. Need one
            copy or thousands? We’ve got it handled.</p>
        <div class="row mt-2 gx-4 gy-4 align-items-center">
            <div class="col-lg-6">
                <img src="./assets/frontend/images/simple/book-printing-in-uk.webp"
                    class="img-fluid lazyload d-block mx-auto" alt="Book Printing in UK" title="Book Printing in UK"
                    width=548 height=325 />
            </div>
            <div class="col-lg-6">
                <h2 class="h5">Books Made to Last</h2>
                <p>Your book should endure as long as its story. Our Book Printing Service uses sturdy materials to keep
                    your book in great shape for years. We pick binding methods like perfect binding, saddle stitching,
                    or case binding to suit your book’s purpose and look. With our Book Printing agency, your readers
                    get a product that’s both durable and attractive.</p>
                <p>Every author’s book is unique, and so are its printing requirements. Our Book Printing agency offers
                    customized options to fit your vision. Whether you’re self-publishing a novel or creating a
                    limited-edition art book, we provide choices for paper, cover finishes, and binding styles. Want
                    something extra? Try embossing, foil stamping, or dust jackets to make your book pop. </p>
                <div class="btn-flex">
                    <a class="btn-order" href="https://thepulphousepublishing.com/get-free-quote">Print My Book</a>
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
                <span class="sub-title">Trust The Best For Printing Your Books</span>
                <h2 class="h1">Our Book Printing agency creates books that feel professional and special.</h2>
            </div>
        </div>
    </div>
</section>
<section class="sub-services text-lg-start text-center">
    <div class="container">
        <div class="row gy-3">
            <div class="col-lg-6 gx-4 mb-3">
                <h2 class="h1">A Simple, Worry-Free Process</h2>
                <p>Publishing a book can seem like a lot, but our Book Printing agency keeps it straightforward. Here’s
                    how we do it:</p>
                <ul>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b>File Upload: </b>
                            Send us your manuscript in formats like PDF.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b>Design Support: </b>
                            Work with our team to refine your book’s layout and cover.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b>Pre-Print Checks:</b>
                            We review your files to spot any issues early.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b>Production:</b>
                            Our facilities handle printing and binding with precision.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b> Quality Control: </b>
                            Every book is inspected to meet our high standards.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b> Shipping: </b>
                            We deliver your books on time, wherever you need them.
                        </span>
                    </li>
                </ul>
                <a class="btn-order" href="https://thepulphousepublishing.com/get-free-quote">Print My Book</a>
                <a class="btn-chat" href="tel:<?php echo $PhoneNumberLink ?>">
                    <img src="./assets/frontend/images/icons/call-us.svg"
                        class="img-fluid lazyload d-block mx-auto" alt="Call Us" title="Call Us" width=17
                        height=17 /><?php echo $PhoneNumber ?>
                </a>
            </div>
            <div class="col-lg-6 me-lg-auto">
                <div class="row gy-4">
                    <div class="col-sm-6">
                        <img src="./assets/frontend/images/simple/book-printing-sample-1.webp"
                            class="d-block ms-sm-auto me-sm-0 mx-auto img-fluid lazyload" alt="Book Printing Sample 1"
                            title="Book Printing Sample 1" loading="lazy" width=244 height=250 />
                    </div>
                    <div class="col-sm-6">
                        <img src="./assets/frontend/images/simple/book-printing-sample-2.webp"
                            class="d-block me-sm-auto ms-sm-0 mx-auto img-fluid lazyload" alt="Book Printing Sample 2"
                            title="book-printing-sample-2" loading="lazy" width=244 height=250 />
                    </div>
                    <div class="col-lg-12">
                        <img src="./assets/frontend/images/simple/british-book-authors.webp"
                            class="d-block mx-auto img-fluid lazyload" alt="The Pulp House Publishing" title="The Pulp House Publishing"
                            loading="lazy" width=301 height=85 />
                    </div>
                    <div class="col-sm-6">
                        <img src="./assets/frontend/images/simple/book-printing-sample-3.webp"
                            class="d-block ms-sm-auto me-sm-0 mx-auto img-fluid lazyload" alt="Book Printing Sample 3"
                            title="Book Printing Sample 3" load ing="lazy" width=244 height=250 />
                    </div>
                    <div class="col-sm-6">
                        <img src="./assets/frontend/images/simple/book-printing-sample-4.webp"
                            class="d-block mx-auto me-sm-auto ms-sm-0 img-fluid lazyload" alt="Book Printing Sample 4"
                            title="Book Printing Sample 4" loading="lazy" width=244 height=250 />
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
                <span class="sub-title">PDF To Book Printing</span>
                <h2 class="h2">The Value of Professional Printing</h2>
                <p>A well-printed book boosts your credibility as an author. Our Book Printing Service ensures your book
                    looks sharp and polished, from clean text to accurate colors. This careful work makes your book more
                    appealing to readers and helps it compete in the market.</p>
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
        <h2 class="h1">Why Pick Our Book Printing Agency?</h2>
        <p>Not all book printing services are equal. Our Book Printing agency stands out for its focus on excellence,
            affordability, and customer care. Here’s what sets us apart:</p>
        <ul>
            <li>Every book is thoroughly checked to come out flawless.</li>
            <li>We offer great value while keeping professional standards high.</li>
            <li>We listen to your goals and work closely to make them real.</li>
            <li>We use sustainable materials to lessen our environmental impact.</li>
            <li>We guide you from file setup to final delivery with ease.</li>
            <li>Every page is printed with precision for a perfect result.</li>
            <li>We print all kinds of books, from novels to manuals.</li>
            <li>Your books reach readers anywhere.</li>
            <li>Our presses deliver consistent, high-quality results.</li>
            <li>Our love for printing shows in every project.</li>
        </ul>
        <hr class="border-b" />
    </div>
</section>
<section class="pub-banner text-center">
    <div class="container">
        <span class="h1 text-center">We’ve Crafted Books For These Talented Authors!</span>
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
        <span class="sub-title text-center">Our Reviews Are Incredible – See Yourself</span>
        <h2 class="h1">Our Book Printing Website Is Reviewed By 80K+ Authors</h2>
        <p>Read the reviews below to gain faith and confidence in us:</p>
    </div>
    <?php
    include_once(dirname(__FILE__) . "/common/review.php")
        ?>
</section>
<?php
include_once(dirname(__FILE__) . "/common/footer.php")
    ?>