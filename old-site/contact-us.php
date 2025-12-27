<?php
include_once(dirname(__FILE__) . "/common/header.php")
    ?>
    
    <head>
    <link rel="stylesheet" href="./assets/frontend/css/icons.css" />
</head>
    
<section class="contact-info text-lg-start text-center">
    <div class="container">
        <div class="row gy-5 gx-4">
            <div class="col-lg-6" id="contact_form">
              <form class="quote-form" id="form2">
  <h1 class="h4">Got a project? Let's look into your options!</h1>
  <p>Are you prepared to publish your book on all the major platforms? Get in touch with us, and we'll make success your future.</p>

  <div class="row gy-3 mt-4">
    <div class="col-12 col-md-6">
      <label for="name" class="form-label">Full Name:</label>
      <input type="text" class="form-control" id="name" name="name" placeholder="Full Name" aria-label="Full Name" required>
    </div>

    <div class="col-12 col-md-6">
      <label for="Email" class="form-label">Email:</label>
      <input type="email" class="form-control" id="email" name="email" placeholder="Email" aria-label="Email" required>
    </div>

    <div class="col-12">
      <label for="Number" class="form-label">Phone No:</label>
      <input type="number" class="form-control" id="phone_no" name="phone" placeholder="Phone Number" aria-label="Phone No." required>
    </div>

    <div class="col-12">
      <label for="message" class="form-label">Tell Us About Your Project:</label>
      <textarea class="form-control" name="message" id="message" aria-label="Your Message" placeholder="Message" rows="3" cols="50" maxlength="1200" required></textarea>
    </div>

    <!-- ✅ SMS Consent Checkbox -->
    <div class="col-12" style="margin-top:10px; text-align:left;">
      <label style="font-size:14px; line-height:20px; color:#555;">
        <input type="checkbox" name="sms_consent" required>
        By checking this box, you agree to receive SMS text messages from The Pulp House Publishing regarding customer questions, order updates, promotional offers, newsletter updates, and other support inquiries. Reply STOP to opt-out at any time. Reply HELP for customer care information. Message and data rates may apply. Message frequency may vary.
        You may review our 
        <a href="/privacy-policy" target="_blank" style="color:#0066cc;">Privacy Policy</a> and 
        <a href="/terms-of-service" target="_blank" style="color:#0066cc;">Terms of Service</a> 
        to learn how your data is used.
      </label>
    </div>

    <div class="col-12">
      <button type="submit" class="btn-order send">Let’s Begin</button>
    </div>
  </div>
</form>
            </div>
        
             <div class="col-lg-6 text-center" style="z-index: 1;">
                <img style="width: 490px; border-radius: 10px; margin; 0px !important;"
                    src="./assets/frontend/images/certificate.png" alt="Getting Started Steps Illustration"
                    class="img-fluid" />
            </div>
        </div>
    </div>
</section>

<div class="container text-center" style="padding: 20px 0px">
    <h2 style="padding: 20px 0px;" >What Our Clients Say</h2>
    <div class="row" style="place-content: center;">
        <div class="col-12 col-md-6 col-lg-4">
            <video src="https://video.thepulphousepublishing.com/Marketing/7.webm" autoplay muted loop controls
                playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <video src="https://video.thepulphousepublishing.com/book-publishing/8.webm" autoplay muted loop controls playsinline
                class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <video src="https://video.thepulphousepublishing.com/ghostwriting/4.webm" autoplay muted loop controls
                playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
        </div>
    </div>
    <div class="row" style="place-content: center;">
        <div class="col-12 col-md-6 col-lg-4">
            <video src="https://video.thepulphousepublishing.com/Marketing/10.webm" autoplay muted loop controls
                playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <video src="https://video.thepulphousepublishing.com/ghostwriting/8.webm" autoplay muted loop controls
                playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <video src="https://video.thepulphousepublishing.com/Marketing/5.webm" autoplay muted loop controls
                playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
        </div>
    </div>
</div>

<section class="our-results text-center">
    <div class="container">
        <div class="row gx-4 gy-3">
            <div class="col-lg-4 col-md-6">
                <img src="./assets/frontend/images/icons/royalty-free-publishing.svg"
                    class="img-fluid lazyload d-block mx-auto" alt="Royalty Free Publishing"
                    title="Royalty Free Publishing" loading="lazy" width=75 height=61 />
                <h2 class="h5">100% Royalty-Free Publishing</h2>
                <p>You get to keep all the earnings, because we will never ask you to share the earnings.</p>
            </div>
            <div class="col-lg-4 col-md-6">
                <img src="./assets/frontend/images/icons/top-publishers.svg"
                    class="img-fluid lazyload d-block mx-auto" alt="Top Publishers" title="Top Publishers"
                    loading="lazy" width=75 height=61 />
                <h2 class="h5">Top Publishers at Your Fingertips</h2>
                <p>Over 45+ publishers have their hands raised to publish your dream with no issue.</p>
            </div>
            <div class="col-lg-4 col-md-6 mx-auto">
                <img src="./assets/frontend/images/icons/millions-copies-faster.svg"
                    class="img-fluid lazyload d-block mx-auto" alt="Sell Millions of Copies"
                    title="Sell Millions of Copies" loading="lazy" width=75 height=61 />
                <h2 class="h5">Sell Millions of Books faster</h2>
                <p>Awesome results and 2x sales for the instant!</p>
            </div>
        </div>
    </div>
</section>
<?php
include_once(dirname(__FILE__) . "/common/footer.php")
    ?>