<?php
include_once(dirname(__FILE__) . "/common/header.php")
    ?>
<section class="pub-service text-lg-start text-center">
    <div class="container">
        <div class="row gx-5">
            <div class="col-lg-6">
                <h1 class="h1">Give Your Book a Visual Edge with Our Art</h1>
                <!--<h2 class="h4">-->
                <!--    Speak To Readers Through Art <br />With Book Illustration In UK-->
                <!--</h2>-->
                <p class="photo-bk7">We’re a USA-based crew dedicated to helping American writers turn their stories
                    into something special with bold, hand-crafted book illustrations. Our artists create images that
                    pull readers in and make your words hit harder. Whether you’re working on a kids’ book, a graphic
                    novel, or a serious novel, our Book Illustration Services are built to make your project pop in the
                    crowded U.S. publishing scene. We focus on quality and originality, ensuring every picture feels
                    like it belongs to your story. </p>
                <div class="features">
                    <h2 class="h4">How We Build Your Book’s Art</h2>
                    <p class="photo-bk7">Our book illustration company teams up with USA authors to make their ideas
                        real. We dig into your story, readers, and style to get it right. Here’s how we do it: </p>
                    <ul>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            First Chat: We talk about your book’s goals, genre, and look.
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            Rough Sketches: Our illustrators draw early ideas to match your story’s feel.
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            Full Artwork: We create top-notch illustrations, digital or hand-drawn.
                        </li>
                        <li>
                            <i class="fa-solid fa-check"></i>
                            Your Input: We adjust the art based on your thoughts to nail it.
                            <!--</li>-->
                            <!--    <i class="fa-solid fa-check"></i>-->
                            <!-- Ad Precision: We run sharp ads on Amazon and socials to drive clicks and conversions.-->
                            <!--</li>-->
                    </ul>
                </div>
            </div>
            <div class="col-lg-6">
                <form id="form2" class="service-form">
                    <span class="h5">Begin With Your Book Illustartion</span>
                    <span class="h5">Tell Us About You</span>
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
        <h2 class="h1 d-block text-center">Why Pictures Make Your Story Better</h2>
        <p class="text-center">Good illustrations don’t just dress up a book; they bring it to life. For authors in the
            USA, our custom book illustrations set the mood, stir up feelings, and keep readers hooked. From bright, fun
            art for children’s stories to detailed drawings for teen novels, our book illustrators shape images that
            feel like part of your narrative, turning every page into something readers won’t forget.</p>
        <!--<p class="text-center">Whether you want a custom cover page, characters or any scene, we’ve got you covered.The-->
        <!--    emotions you stir in the words will be boosted a thousand times with our visuals, eventually jazzing up your-->
        <!--    story. Precisely, we keep your audience bonded till the end of the book with creative visuals ready to-->
        <!--    unfold your story right!</p>-->
        <div class="row mt-2 gx-4 gy-4 align-items-center">
            <div class="col-lg-6">
                <img src="./assets/frontend/images/simple/professional-book-illustrators.webp"
                    class="img-fluid lazyload d-block mx-auto" alt="Professional Book Illustrators"
                    title="Professional Book Illustrators" width=548 height=325 />
            </div>
            <div class="col-lg-6">
                <h2 class="h5">Art Services for Every American Writer</h2>
                <p>Whether you’re just starting out or you’ve got a shelf full of books, our Book Illustration Services
                    are made for you. As a USA-based team, we work only with American authors, so our art fits right
                    into the U.S. publishing world. We cover kids’ book art, cover designs, graphic novel drawings, and
                    more, all crafted to make your book impossible to miss.</p>
                <!--<p>Our book illustrators design mind-blowing visuals from professional academic, story, vivid,-->
                <!--    children's, picture, and cartoon to comic book Illustrations. Moreover, our book cover illustrations-->
                <!--    will charm up your exterior to make it a hit!</p>-->
                <div class="btn-flex">
                    <a class="btn-order" href="https://thepulphousepublishing.com/get-free-quote">Illustrate My Book</a>
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
                <span class="sub-title">Revenue Sharing? Not Anymore!</span>
                <h2 class="h1">Get in touch today to talk about your project and see how our Book Illustration Services
                    can turn your book into a hit.</h2>
            </div>
        </div>
    </div>
</section>
<section class="sub-services text-lg-start text-center">
    <div class="container">
        <div class="row gy-3">
            <div class="col-lg-6 gx-4 mb-3">
                <h2 class="h1">Bright, Fun Art for Kids’ Books</h2>
                <p>Kids’ books need lively, imaginative pictures to grab young readers. Our book illustrators are great
                    at creating colorful, engaging art that brings characters and stories to life. Our children’s Book
                    Illustration Services offer:</p>
                <ul>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b> Characters Kids Love:</b>
                            We draw figures that stick in kids’ minds and hearts.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b> Pictures That Tell the Story:</b>
                            Each image moves your tale forward smoothly.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b>Right for Their Age: </b>
                            Art is shaped for the kids you’re writing for.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b>Fun and Engaging:</b>
                            We make images that get kids thinking and playing.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b> Same Style All Through:</b>
                            We keep the look steady for a polished book.
                        </span>
                    </li>
                    <li class="points">
                        <i class="fa-solid fa-circle"></i>
                        <span>
                            <b> Ready for Publishing: </b>
                            Pictures are set for print or digital formats.
                        </span>
                    </li>
                </ul>
                <a class="btn-order" href="https://thepulphousepublishing.com/get-free-quote">Begin Your Book
                    Illustration</a>
                <a class="btn-chat" href="tel:<?php echo $PhoneNumberLink ?>">
                    <img src="./assets/frontend/images/icons/call-us.svg"
                        class="img-fluid lazyload d-block mx-auto" alt="Call Us" title="Call Us" width=17
                        height=17 /><?php echo $PhoneNumber ?>
                </a>
            </div>
            <div class="col-lg-6 me-lg-auto">
                <div class="row gy-4">
                    <div class="col-sm-6">
                        <img src="./assets/frontend/images/simple/book-illustration-sample-1.webp"
                            class="d-block ms-sm-auto me-sm-0 mx-auto img-fluid lazyload"
                            alt="Book Illustration Sample 1" title="book-illustration Sample 1" loading="lazy" width=244
                            height=250 />
                    </div>
                    <div class="col-sm-6">
                        <img src="./assets/frontend/images/simple/book-illustration-sample-2.webp"
                            class="d-block me-sm-auto ms-sm-0 mx-auto img-fluid lazyload"
                            alt="Book Illustration Sample 2" title="Book Illustration Sample 2" loading="lazy" width=244
                            height=250 />
                    </div>
                    <div class="col-lg-12">
                        <img src="./assets/frontend/images/simple/british-book-authors.webp"
                            class="d-block mx-auto img-fluid lazyload" alt="The Pulp House Publishing" title="The Pulp House Publishing"
                            loading="lazy" width=301 height=85 />
                    </div>
                    <div class="col-sm-6">
                        <img src="./assets/frontend/images/simple/book-illustration-sample-3.webp"
                            class="d-block ms-sm-auto me-sm-0 mx-auto img-fluid lazyload"
                            alt="Book Illustration Sample 3" title="Book Illustration Sample 3" load ing="lazy"
                            width=244 height=250 />
                    </div>
                    <div class="col-sm-6">
                        <img src="./assets/frontend/images/simple/book-illustration-sample-4.webp"
                            class="d-block mx-auto me-sm-auto ms-sm-0 img-fluid lazyload"
                            alt="Book Illustration Sample 4" title="Emotion Evoking Storytelling" loading="lazy"
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
                <span class="sub-title">Break Your Sales Records!</span>
                <h2 class="h2">Great Art Without the Crazy Price Tag</h2>
                <p>We think every author should get awesome book illustrations without emptying their wallet. Our Book
                    Illustration Services are priced to fit different budgets while keeping the quality high. As a
                    USA-based crew, we keep pricing clear and offer packages that work for your project, so you get real
                    bang for your buck.</p>
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
                <span class="p-text">We’ve been the award-winning agency in Wales for straight 5 years.</span>
            </div>
        </div>
    </div>
</section>
<section class="we-assist text-lg-start text-center">
    <div class="container">
        <hr class="border-t" />
        <h2 class="h1">What Makes Our Artists Different</h2>
        <p>Great book illustrators can take your book from solid to unforgettable. Our team brings skill, imagination,
            and heart to every job, creating pictures that lift your story up. Here’s why our illustrators stand out:
        </p>
        <ul>
            <li>All Kinds of Looks: From gentle watercolors to sharp digital designs, we’ve got every style covered.
            </li>
            <li>Know the U.S. Scene: We get how American publishing works and make art that fits.</li>
            <li>Made Just for You: Every picture is built to match your story’s voice and readers.</li>
            <li> No Detail Missed: We sweat the small stuff to keep things clean and pro.</li>
            <li>On Time, Every Time: We hit your deadlines with work that’s top-notch.</li>
            <li>Love for Stories: Our artists care about making your book’s story stronger.</li>
            <!--<li>We never limit your imagination. Even complex emotions will be induced by visuals.</li>-->
            <!--<li>Give your book persuading graphics with flat or 3D vector illustration designs.</li>-->
        </ul>
        <hr class="border-b" />
    </div>
</section>
<section class="pub-banner text-center">
    <div class="container">
        <span class="h1 text-center">Ready to make your book look as good as it reads? Our book illustrators have helped
            the following sellers
            Best-Sellers</span>
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
        <span class="sub-title text-center">Clients Sharing Their Experiences</span>
        <h2 class="h1">Our Book Illustrations Are Shining With 5 Star Reviews In USA</h2>
        <p>Our dedication is reflected in the words of our clients. Dig to unfold what the fuss is all about.</p>
    </div>
    <?php
    include_once(dirname(__FILE__) . "/common/review.php")
        ?>
</section>
<?php
include_once(dirname(__FILE__) . "/common/footer.php")
    ?>