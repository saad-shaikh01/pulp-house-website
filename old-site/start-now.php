<?php
include_once(dirname(__FILE__) . "/common/header.php")
    ?>
<style>
      .packages-grid {
        display: grid;
        /* grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); */
        gap: 1.5rem;
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 1rem;

        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

    }

    @media (min-width: 920px) {
        .packages-grid {
            /* 6 equal tracks -> 3 cards (span 2) then 2 cards (span 3) */
            grid-template-columns: repeat(6, minmax(0, 1fr));
        }

        /* by default, each card spans 2 cols => 3 per row */
        .packages-grid>* {
            grid-column: span 2;
        }

        /* 4th & 5th card span 3 cols each => 2nd row fills completely */
        .packages-grid> :nth-child(4),
        .packages-grid> :nth-child(5) {
            grid-column: span 3;
        }

        /* agar 6th+ cards ho to wapas normal 3-per-row */
        .packages-grid> :nth-child(n+6) {
            grid-column: span 2;
        }
    }

    .packages-grid-2 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 1rem;
    }

    .package-card {
        border: 1px solid #ddd;
        border-radius: var(--radius);
        overflow: hidden;
        background: var(--colour-light);
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    .package-header {
        background: var(--colour-gold);
        color: #fff;
        padding: 0.75rem 1rem;
        font-weight: 600;
        font-size: 1rem;
        text-align: center;
    }

    .package-price {
        text-align: center;
        padding: 1rem;
        color: var(--colour-gold);
        font-size: 2rem;
        font-weight: 700;
    }

    .package-price span {
        display: block;
        font-size: 0.8rem;
        color: #666;
        font-weight: normal;
        margin-top: 0.25rem;
    }

    .package-price del {
        color: #999;
        margin-right: 0.25rem;
    }

    .package-price .discount {
        color: #aa3939;
        font-size: 0.8rem;
        font-weight: normal;
    }

    .package-content {
        padding: 0 1rem 1rem;
        flex: 1;
        display: flex;
        flex-direction: column;

        --sa-track: #e9ecef;
        --sa-thumb: #9e27a9;
        --sa-thumb-hover: #b58900;
        --sa-thumb-active: #8a6b00;
    }

    .package-content h4 {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        font-size: 1rem !important;
        font-weight: 600;
        color: var(--colour-gold);
    }

    .package-content ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .package-content li {
        position: relative;
        padding-left: 1.25rem;
        margin-bottom: 0.5rem;
        font-size: 0.9rem !important;
        line-height: 1.2;
    }

    .package-content li::before {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        background: var(--colour-gold);
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0.35rem;
    }

    .package-content .scroll-area {
        overflow-y: auto;
        padding-right: 0.5rem;
        max-height: 200px;

        /* Firefox */
        scrollbar-width: thin;
        /* auto | thin | none */
        scrollbar-color: var(--sa-thumb) var(--sa-track);
        /* Optional: avoid layout shift when scrollbar appears */
        scrollbar-gutter: stable;
    }

    .package-content .scroll-area::-webkit-scrollbar {
        width: 8px;
        /* scrollbar thickness */
    }

    .package-content .scroll-area::-webkit-scrollbar-track {
        background: var(--sa-track);
        border-radius: 8px;
    }

    .package-content .scroll-area::-webkit-scrollbar-thumb {
        background-color: var(--sa-thumb);
        border-radius: 8px;
        border: 2px solid var(--sa-track);
        /* creates a nice gap */
    }

    .package-content .scroll-area::-webkit-scrollbar-thumb:hover {
        background-color: var(--sa-thumb-hover);
    }

    .package-content .scroll-area::-webkit-scrollbar-thumb:active {
        background-color: var(--sa-thumb-active);
    }

    .get-started {
        display: block;
        margin-top: auto;
        background: var(--colour-gold);
        color: #fff;
        text-decoration: none;
        text-align: center;
        padding: 0.8rem;
        font-weight: 600;
        border-radius: 0 0 var(--radius) var(--radius);
    }

    .get-started:hover {
        opacity: 0.9;
    }

    /* Responsive tweaks */
    @media (max-width: 768px) {
        h1 {
            font-size: 1.5rem;
        }

        .package-price {
            font-size: 1.75rem;
        }
    }

    /* Steps banner styling */
    .steps-banner {
        background: #f4f4f4;
        padding: 2rem 1rem;
        border-bottom: 1px solid #e0e0e0;
    }

    .steps-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 1200px;
        margin: 0 auto;
        gap: 2rem;
        flex-wrap: wrap;
    }

    .steps-text {
        flex: 1;
        min-width: 280px;
    }

    .steps-text .label {
        display: block;
        font-size: 1rem;
        font-weight: 600;
        color: var(--colour-gold);
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .steps-list {
        margin: 0;
        padding-left: 1.25rem;
        list-style: none;
        font-size: 0.95rem;
        line-height: 1.5;
    }

    .steps-list li {
        margin-bottom: 0.4rem;
        position: relative;
        padding-left: 0.6rem;
    }

    .steps-list li::before {
        content: "";
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background: var(--colour-gold);
        position: absolute;
        left: 0;
        top: 0.45rem;
    }

    .steps-image {
        flex: 1;
        min-width: 280px;
        /* placeholder for potential illustration; keep empty for now */
    }

    @media (max-width: 768px) {
        .steps-container {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    /* Call to action banner */
    .cta-banner {
        background: #f9f3e7;
        padding: 2rem 1rem;
        text-align: center;
    }

    .cta-banner h2 {
        margin: 0;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        color: var(--colour-text);
    }

    .cta-banner p {
        margin: 0 auto 1.5rem;
        max-width: 600px;
        line-height: 1.6;
        color: #555;
    }

    .cta-banner .cta-button {
        background: var(--colour-gold);
        color: #fff;
        padding: 0.8rem 1.2rem;
        border-radius: var(--radius);
        text-decoration: none;
        font-weight: 600;
        display: inline-block;
    }

    .cta-banner .cta-button:hover {
        opacity: 0.9;
    }
</style>
<div class="">
    <section class="pub-service award-banner text-lg-start">
        <div class="container">
            <div class="row align-items-center gx-5 gy-4">
                <div class="col-lg-6">
                    <span class="h6">Getting Started is As Easy As 1-2-3:</span>
                    <ol class="gs-steps">
                        <li class="gs-steps">1. Simply select the price of your book on Amazon.</li>
                        <li class="gs-steps">2. Decide which of our services you prefer.</li>
                        <li class="gs-steps">3. Select your package and fill in the form.</li>
                    </ol>
                </div>
                                <div class="col-lg-6 text-center">
                    <img style="width: 400px ; border-radius: 10px; margin; 0px !important; "  src="./assets/frontend/images/certificate.png" alt="Getting Started Steps Illustration"
                        class="img-fluid" />
                </div>
            </div>
        </div>
    </section>
      <style>
/* ===== Comparison Table Styling ===== */
.cpmtbl {
  font-family: "Poppins", Arial, sans-serif;
  margin: 0;
  padding: 20px;
  position: relative;
  z-index: 5;
}

.cpmtbl .title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
}

/* Scrollable container with smooth scroll bar */
.cpmtbl .table-container {
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
}

/* Scrollbar styling */
.cpmtbl .table-container::-webkit-scrollbar {
  height: 10px;
}
.cpmtbl .table-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
.cpmtbl .table-container::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}
.cpmtbl .table-container::-webkit-scrollbar-thumb:hover {
  background: #999;
}

.cpmtbl table {
  width: 100%;
  min-width: 950px; /* forces horizontal scroll on mobile */
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
}

.cpmtbl thead {
  background: #2c3e50;
  color: #fff;
}
.cpmtbl th,
.cpmtbl td {
  padding: 15px 10px;
  text-align: center;
  border-bottom: 1px solid #eee;
  font-size: 17px;
}
.cpmtbl th:first-child,
.cpmtbl td:first-child {
  text-align: left;
  min-width: 250px;
}
.cpmtbl tr:hover td {
  background: #f0f8ff;
}
.cpmtbl .check {
  color: #27ae60;
  font-weight: bold;
  font-size: 20px;
}
.cpmtbl .cross {
  color: #e74c3c;
  font-weight: bold;
  font-size: 20px;
}

.cpmtbl .package-header {
  background: #1abc9c;
  font-weight: 600;
}
.cpmtbl .package-header:nth-child(3) {
  background: #3498db;
}
.cpmtbl .package-header:nth-child(4) {
  background: #9b59b6;
}

section.Comparison-sec {
  position: relative;
  z-index: 6;
  background-color: #f3f3f3;
}

/* ===== Mobile-Friendly Scroll ===== */
@media (max-width: 768px) {
  .cpmtbl .table-container {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .cpmtbl table {
    min-width: 950px;
  }
}
</style>

<section class="Comparison-sec">
  <div class="container">
    <div class="cpmtbl">
      <div class="title">Publishing Packages Comparison</div>
      <div class="table-container">
        <table id="comparisonTable">
          <thead>
            <tr>
              <th>Services Offered</th>
              <th class="package-header">Basic<br>$200</th>
              <th class="package-header">Professional<br>$600 </th>
              <th class="package-header">Global<br>$1000 </th>
            </tr>
          </thead>
         <tbody>
    <tr>
        <td>Market Positioning Research</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
    </tr>
    <tr>
        <td>Competitor & Reader Analysis</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Keyword Optimization & Metadata Setup</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td> Ghostwriting</td>
        <td class="cross">❌</td>
        <td class="cross">❌</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Co-Writing Collaboration</td>
        <td class="cross">❌</td>
        <td class="cross">❌</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Story Structuring & Chapter Development</td>
        <td class="cross">❌</td>
        <td class="cross">❌</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Illusrations (15 to 20+)</td>
        <td class="cross">❌</td>
        <td class="cross">❌</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Developmental Editing</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Line Editing</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Copyediting</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Proofreading</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Professional Typesetting</td>
        <td class="cross">✅</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Layout Adjustment</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Interior Formatting</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Font Styling & Chapter Design</td>
        <td class="cross">✅</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>100% Author Rights</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Author Branding Profile</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Custom Front Cover Design</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Spine & Back Cover Design</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Mockups & Social Media Assets</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>ISBN Assignment</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Barcode & Metadata Setup</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Library Registration</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Amazon KDP</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Barnes & Noble Press</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Apple Books / Kobo / Google Play</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Draft2Digital (15+ Retail & Library)</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>IngramSpark (40,000+ Retailers)</td>
        <td class="cross">❌</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
    </tr>
    <tr>
        <td>International Retail Partners</td>
        <td class="cross">❌</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
    </tr>
    <tr>
        <td>Library Distribution (Networks)</td>
        <td class="cross">❌</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
    </tr>
    <tr>
        <td>eBook Edition</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
    </tr>
    <tr>
        <td>Paperback Edition</td>
        <td class="cross">✅</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
    </tr>
    <tr>
        <td>Hardcover Edition</td>
         <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
    </tr>
    <tr>
        <td>Worldwide Distribution Network</td>
        <td class="cross">❌</td>
        <td class="check">❌</td>
        <td class="check">✅</td>
    </tr>
    <tr>
        <td>Royalty Reporting Dashboard</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="cross">✅</td>
    </tr>
    <tr>
        <td>Marketing Readiness Review</td>
        <td class="cross">❌</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
    </tr>
    <tr>
        <td>Dedicated Publishing Consultant</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
    </tr>
    <tr>
        <td>Launch Support Session</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
    </tr>
    <tr>
        <td>Lifetime File Storage</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
        <td class="check">✅</td>
    </tr>
</tbody>

        </table>
      </div>
    </div>
  </div>
</section>

   
    <!-- Call to action banner -->
    <div class="cta-banner">
        <h2>Still unsure?</h2>
        <p>
            Let's talk. Click below to chat with our award‑winning experts – no pushy sales,
            just answers. We'll answer everything – like process, pricing, perks, and growth.
        </p>
        <a href="/contact-us" class="cta-button" style="color: #000;" >Get Free Consultation</a>
    </div>
    
    
    <div class="container text-center" style="padding: 20px 0px">
    <h2 style="padding: 20px 0px;" >What Our Clients Say</h2>
    <div class="row" style="place-content: center;">
        <div class="col-12 col-md-6 col-lg-4">
            <video src=https://video.thepulphousepublishing.com/home-video.webm" autoplay muted loop controls
                playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <video src="https://video.thepulphousepublishing.com/book-publishing/6.webm" autoplay muted loop controls playsinline
                class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <video src="https://video.thepulphousepublishing.com/ghostwriting/8.webm" autoplay muted loop controls
                playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <video src="https://video.thepulphousepublishing.com/book-publishing/8.webm" autoplay muted loop controls
                playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <video src="https://video.thepulphousepublishing.com/ghostwriting/4.webm" autoplay muted loop controls
                playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <video src="https://video.thepulphousepublishing.com/Marketing/7.webm" autoplay muted loop controls
                playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
        </div>
    </div>
</div>
</div>


<?php
include_once(dirname(__FILE__) . "/common/footer.php")
    ?>