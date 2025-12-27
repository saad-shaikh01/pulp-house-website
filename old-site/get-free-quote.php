<?php
include_once(dirname(__FILE__) . "/common/header.php")
    ?>
<section class="pub-service text-lg-start text-center">
    <div class="container">
        <div class="form-area">
            <div class="row gx-5 gy-4">
                <div class="col-lg-8" id="quote_form">
                    <form id="form2">
                        <h1 class="h1 mb-4">Expert Book Publishers Awaits Your Call</h1>
                        <div class="row">
                            <div class="col-12">
                                <div class="row gy-3">
                                    <div class="col-12 col-sm-6">
                                        <div class="form-group"><label for="name">Name:</label><input type="text"
                                                class="form-control " id="name" name="name"
                                                placeholder="Enter Your Full Name" aria-label="Full Name" required="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <div class="form-group"><label for="email">Email:</label><input type="email"
                                                class="form-control " id="email" name="email"
                                                placeholder="Enter Your Email" aria-label="Email" required=""></div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <div class="form-group"><label for="phone">No:</label><input type="number"
                                                class="form-control " id="phone_no" name="phone_no"
                                                placeholder="Enter Your Phone No." aria-label="Phone No." required="">
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <div class="form-group"><label for="genre">Select Genre:</label><select
                                                id="genre" name="genre" class="form-control " aria-label="Select Genre"
                                                required="">
                                                <option value="">Select Genre</option>
                                                <option value="Action-Adventure">Action-Adventure</option>
                                                <option value="Celebrity Biographies">Celebrity Biographies</option>
                                                <option value="Classical Drama">Classical Drama</option>
                                                <option value="Comparative Religion">Comparative Religion</option>
                                                <option value="Contemporary Romance">Contemporary Romance</option>
                                                <option value="Cookbooks">Cookbooks</option>
                                                <option value="Crime">Crime</option>
                                                <option value="Cyberpunk">Cyberpunk</option>
                                                <option value="Dystopian">Dystopian</option>
                                                <option value="Fairy Tale Retellings">Fairy Tale Retellings</option>
                                                <option value="Fantasy">Fantasy</option>
                                                <option value="Gothic Horror">Gothic Horror</option>
                                                <option value="Historical Fiction">Historical Fiction</option>
                                                <option value="Historical Romance">Historical Romance</option>
                                                <option value="Horror">Horror</option>
                                                <option value="Literary Fiction">Literary Fiction</option>
                                                <option value="Manga">Manga</option>
                                                <option value="Memoir">Memoir</option>
                                                <option value="Motivational">Motivational</option>
                                                <option value="Mystery/Thriller">Mystery/Thriller</option>
                                                <option value="Paranormal">Paranormal</option>
                                                <option value="Personal Development">Personal Development</option>
                                                <option value="Philosophy">Philosophy</option>
                                                <option value="Picture Books">Picture Books</option>
                                                <option value="Political Biographies">Political Biographies</option>
                                                <option value="Psychological Horror">Psychological Horror</option>
                                                <option value="Psychological Thriller">Psychological Thriller</option>
                                                <option value="Psychology">Psychology</option>
                                                <option value="Religion/Spirituality">Religion/Spirituality</option>
                                                <option value="Romance">Romance</option>
                                                <option value="Science Fiction">Science Fiction</option>
                                                <option value="Self-Help">Self-Help</option>
                                                <option value="Slam Poetry">Slam Poetry</option>
                                                <option value="Spiritual Guides">Spiritual Guides</option>
                                                <option value="Superhero Comics">Superhero Comics</option>
                                                <option value="Survival">Survival</option>
                                                <option value="Suspense">Suspense</option>
                                                <option value="Traditional Poetry">Traditional Poetry</option>
                                                <option value="Travel">Travel</option>
                                                <option value="Urban Fantasy">Urban Fantasy</option>
                                                <option value="Other">Other</option>
                                            </select></div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group"><label for="book_title">Book Title:</label><input
                                                type="text" class="form-control " id="book_title" name="book_title"
                                                aria-label="Book Title" placeholder="Write Your Book Title" required="">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group"><label for="details">Details:</label><textarea
                                                class="form-control " name="message" id="message"
                                                aria-label="Your Message" placeholder="Write Your Project Details"
                                                rows="4" cols="50" maxlength="1500" required=""></textarea></div>
                                    </div>
                                    <div class="col-md-12 text-lg-start text-center">
                                        <div>
                                            <div>
                                                <div class="grecaptcha-badge" data-style="bottomright"
                                                    style="width: 256px; height: 60px; display: block; transition: right 0.3s; position: fixed; bottom: 14px; right: -186px; box-shadow: gray 0px 0px 5px; border-radius: 2px; overflow: hidden;">
                                                    <div class="grecaptcha-logo"><iframe title="reCAPTCHA" width="256"
                                                            height="60" role="presentation" name="a-54yncsn0cwn7"
                                                            frameborder="0" scrolling="no"
                                                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcQpZopAAAAAIxLl8xCWrUzQruXsOUbg4U0M5aO&amp;co=aHR0cHM6Ly93d3cuYnJpdGlzaGJvb2twdWJsaXNoZXJzLmNvLnVrOjQ0Mw..&amp;hl=en&amp;type=image&amp;v=h7qt2xUGz2zqKEhSc8DD8baZ&amp;theme=dark&amp;size=invisible&amp;badge=bottomright&amp;cb=kki05hpiu9e"></iframe>
                                                    </div>
                                                    <div class="grecaptcha-error"></div><textarea
                                                        id="g-recaptcha-response" name="g-recaptcha-response"
                                                        class="g-recaptcha-response"
                                                        style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
                                                </div><iframe style="display: none;"></iframe>
                                            </div>
                                        </div><button type="submit" class="btn-order">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4">
                    <div class="content-quote"><span class="h6">Submission Guide:</span>
                        <p>We welcome manuscripts from all genres. Whether you're a new or published author, The Pulp House Publishing wants to hear from you. Our review process may take up 48 hours, and we'll
                            notify you once a decision is made.</p>
                        <p class="text-hard">To get your book considered for publishing, please send us a details that
                            includes:</p>
                        <ol>
                            <li><span>1</span> A cover letter. </li>
                            <li><span>2</span> A copy of your manuscript. </li>
                            <li><span>3</span> Include any previous book details if you've been published before. </li>
                            <li><span>4</span> Complete name, email id and contact number. </li>
                        </ol>
                        <p> Submit your manuscript, please fill the form with all details or email us at <a
                                href="mailto:info@thepulphousepublishing.com"> info@thepulphousepublishing.com </a>
                            and we will get back to you. </p>
                        <!-- </div><span class="h6">Recent Release:</span>
                    <div class="row g-4">
                        <div class="col-md-3 col-6"><img
                                src="https://cdn.thepulphousepublishing.com/assets/frontend/images/slider-image/sample-1.webp"
                                class="img-fluid mx-auto ls-is-cached lazyloaded" alt="Recent Release"
                                title="Recent Release" loading="lazy" width="110" height="166"
                                src="https://cdn.thepulphousepublishing.com/assets/frontend/images/slider-image/sample-1.webp">
                        </div>
                        <div class="col-md-3 col-6"><img
                                src="https://cdn.thepulphousepublishing.com/assets/frontend/images/slider-image/sample-2.webp"
                                class="img-fluid mx-auto ls-is-cached lazyloaded" alt="Recent Release"
                                title="Recent Release" loading="lazy" width="110" height="166"
                                src="https://cdn.thepulphousepublishing.com/assets/frontend/images/slider-image/sample-2.webp">
                        </div>
                        <div class="col-md-3 col-6"><img
                                src="https://cdn.thepulphousepublishing.com/assets/frontend/images/slider-image/sample-3.webp"
                                class="img-fluid mx-auto ls-is-cached lazyloaded" alt="Recent Release"
                                title="Recent Release" loading="lazy" width="110" height="166"
                                src="https://cdn.thepulphousepublishing.com/assets/frontend/images/slider-image/sample-3.webp">
                        </div>
                        <div class="col-md-3 col-6"><img
                                src="https://cdn.thepulphousepublishing.com/assets/frontend/images/slider-image/sample-4.webp"
                                class="img-fluid mx-auto ls-is-cached lazyloaded" alt="Recent Release"
                                title="Recent Release" loading="lazy" width="110" height="166"
                                src="https://cdn.thepulphousepublishing.com/assets/frontend/images/slider-image/sample-4.webp">
                        </div>
                    </div> -->
                    </div>
                </div>
            </div>
        </div>
</section>
<?php
include_once(dirname(__FILE__) . "/common/footer.php")
    ?>