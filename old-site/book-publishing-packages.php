<?php
include_once(dirname(__FILE__) . "/common/header.php")
    ?>
<link rel="stylesheet" href="./assets/frontend/css/packages.css">
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
                    <span class="h6" style="line-height: 28px !important">Publish Your Work with Confidence at The Pulp House Publishing Affordable Packages for Every Author!</span>
                    <ol class="gs-steps">
                        <li class="gs-steps">At The Pulp House Publishing, we make publishing your book a smooth and affordable experience. Whether you're a first-time author or a seasoned writer, our tailored publishing packages offer everything you need to get your work into the world. With expert support every step of the way, we’re here to help your story reach its full potential. Explore our packages and choose the one that’s right for you today!</li>
                        <!--<li class="gs-steps">2. Decide which of our services you prefer.</li>-->
                        <!--<li class="gs-steps">3. Select your package and fill in the form.</li>-->
                    </ol>
                </div>
                <div class="col-lg-6 text-center">
                    <img style="border-radius: 10px; margin; 0px !important; "
                        src="./assets/frontend/images/certificate.png" alt="Getting Started Steps Illustration"
                        class="img-fluid certi-img" />
                </div>
            </div>
        </div>
    </section>

    <section class="ph-packages-section">
        <div class="ph-packages-inner">
            <!-- Section Title -->
            <h2 class="ph-packages-title">Packages</h2>

            <!-- Cards Grid -->
            <div class="ph-card-grid">
                <!-- Basic Package -->
                <div class="ph-card">
                    <div class="ph-card-header">
                        <div class="ph-card-title">Basic Package</div>
                        <div class="ph-card-price">$700 USD</div>
                    </div>

                    <ul class="ph-feature-list">
                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Preparing Your Manuscript
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Editorial Support
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Proofreading
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Typesetting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Layout Adjustment
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Basic Formatting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>2 Revisions Per Draft
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Book Publishing
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Creation
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Verification
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Optimization
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Kindle
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>eBook Format
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Guarantees
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>No Royalties Share
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>100% Ownership Rights
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>100% Satisfaction
                        </li>
                    </ul>

                    <div class="ph-card-actions">
                        <a href="/get-free-quote" class="btn ph-cta-btn package-get-started-btn text-md mt-7">
                            GET A QUOTE
                        </a>
                    </div>

                    <div class="ph-card-footer">
                        <div>
                            <span class="ph-footer-label">Share your idea!</span>
                            <a class="ph-phone" href="tel:(888) 909-9431">(888) 909-9431</a>
                        </div>
                        <span class="ph-footer-divider"></span>
                        <div>
                            <span class="ph-footer-label">Want to discuss?</span>
                            <button class="ph-chat chatss" type="button">
                                Live Chat Now
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Start Up Package -->
                <div class="ph-card">
                    <div class="ph-card-header">
                        <div class="ph-card-title">Start Up Package</div>
                        <div class="ph-card-price">$2,000 USD</div>
                    </div>

                    <ul class="ph-feature-list">
                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Preparing Your Manuscript
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Editorial Support
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Proofreading
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Typesetting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Layout Adjustment
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Publishing Standard Formatting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>3 Revisions Per Draft
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Designing your Cover
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Graphic OR Illustrated Design
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Cover Layout
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Cover Formatting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Front, Back &amp; Spine
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Book Publishing
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Creation
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Verification
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Optimization
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Amazon &amp; Kindle
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>eBook Format
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Paperback Format
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Guarantees
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>No Royalties Share
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>100% Ownership Rights
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>100% Satisfaction
                        </li>
                    </ul>

                    <div class="ph-card-actions">
                        <a href="/get-free-quote" class="btn ph-cta-btn package-get-started-btn text-md mt-7">
                            GET A QUOTE
                        </a>
                    </div>

                    <div class="ph-card-footer">
                        <div>
                            <span class="ph-footer-label">Share your idea!</span>
                            <a class="ph-phone" href="tel:(888) 909-9431">(888) 909-9431</a>
                        </div>
                        <span class="ph-footer-divider"></span>
                        <div>
                            <span class="ph-footer-label">Want to discuss?</span>
                            <button class="ph-chat chatss" type="button">
                                Live Chat Now
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Standard Package -->
                <div class="ph-card">
                    <img loading="lazy" width="80" height="80" decoding="async" class="ph-card-badge package-badge"
                        style="color: transparent" src="./assets/frontend/images/icons/badge.webp"
                        alt="Package badge" />
                    <div class="ph-card-header">
                        <div class="ph-card-title">Standard Package</div>
                        <div class="ph-card-price">$3,000 USD</div>
                    </div>

                    <ul class="ph-feature-list">
                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Preparing Your Manuscript
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Editorial Support
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Proofreading
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Typesetting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Layout Adjustment
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Publishing Standard Formatting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>5 Revisions Per Draft
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Designing your Cover
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Graphic OR Illustrated Design
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Cover Layout
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Cover Formatting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Front, Back &amp; Spine
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>ISBN + Barcode (2X)
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Book Publishing
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Creation
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Verification
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Optimization
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Amazon &amp; Kindle
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Barnes &amp; Noble
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>eBook Format
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Paperback Format
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Hardcover Format
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Guarantees
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>No Royalties Share
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>100% Ownership Rights
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>100% Satisfaction
                        </li>
                    </ul>

                    <div class="ph-card-actions">
                        <a href="/get-free-quote" class="btn ph-cta-btn package-get-started-btn text-md mt-7">
                            GET A QUOTE
                        </a>
                    </div>

                    <div class="ph-card-footer">
                        <div>
                            <span class="ph-footer-label">Share your idea!</span>
                            <a class="ph-phone" href="tel:(888) 909-9431">(888) 909-9431</a>
                        </div>
                        <span class="ph-footer-divider"></span>
                        <div>
                            <span class="ph-footer-label">Want to discuss?</span>
                            <button class="ph-chat chatss" type="button">
                                Live Chat Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Comparison Button -->
            <button class="ph-compare-btn btn ph-cta-btn compare-now-btn mb-10 mt-5" type="button"
                id="phCompareToggleBasic">
                Comparison
                <span class="ph-btn-arrow">&#9660;</span>
            </button>

            <!-- Comparison Table Wrapper -->
            <div class="ph-comparison collapsed container-compare" id="phComparisonBasic">
                <div class="ph-table-wrap md:w-full w-[500px] responsive-width">
                    <table class="ph-table bundle-comparison-chart table-fixed">
                        <thead>
                            <tr>
                                <th style="background: none !important" class="mainpage-regular"></th>
                                <th class="font-poppins">
                                    <div class="heading">Basic Package</div>
                                </th>
                                <th class="font-poppins">
                                    <div class="heading">Start Up Package</div>
                                </th>
                                <th class="font-poppins">
                                    <div class="heading">Standard Package</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr class="m-4">
                                <th class="text-2xl md:text-2xl text-start p-3 font-bold tbl_second_heading" colspan="4"
                                    scope="row">
                                    <span>Preparing Your Manuscript</span>
                                </th>
                            </tr>
                            <tr>
                                <td>Editorial Support</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Proofreading</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Typesetting</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Layout Adjustment</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Basic Formatting</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Publishing Standard Formatting</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Revisions Per Draft</td>
                                <td>2</td>
                                <td>3</td>
                                <td>5</td>
                            </tr>

                            <tr class="m-4">
                                <th class="text-2xl md:text-2xl text-start p-3 font-bold pl-5 tbl_second_heading"
                                    colspan="4" scope="row">
                                    <span>Preparing your Book Cover</span>
                                </th>
                            </tr>
                            <tr>
                                <td>Graphic OR Illustrated Design</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Cover Layout</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Cover Formatting</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Front, Back &amp; Spine</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>ISBN + Barcode (2X)</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>

                            <tr class="m-4">
                                <th class="text-2xl md:text-2xl text-start p-3 font-bold pl-5 tbl_second_heading"
                                    colspan="4" scope="row">
                                    <span>Preparing for Print and Distribution</span>
                                </th>
                            </tr>
                            <tr>
                                <td>Account Creation</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Account Verification</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Account Optimization</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Kindle</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Barnes and Noble</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>eBook Format</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Paperback Format</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Hardcover Format</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>

                            <tr class="m-4">
                                <th class="text-2xl md:text-2xl text-start p-3 font-bold pl-5 tbl_second_heading"
                                    colspan="4" scope="row">
                                    <span>Guarantees</span>
                                </th>
                            </tr>
                            <tr>
                                <td>No Royalties Share</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>100% Ownership Rights</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>100% Satisfaction</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </section>

    <section class="ph-packages-section">
        <div class="ph-packages-inner">

            <!-- Cards Grid -->
            <div class="ph-card-grid">
                <!-- Expert Package -->
                <div class="ph-card">
                    <div class="ph-card-header">
                        <div class="ph-card-title">Expert Package</div>
                        <div class="ph-card-price">$7,000 USD</div>
                    </div>

                    <ul class="ph-feature-list">
                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Preparing Your Manuscript
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Editorial Support
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Proofreading
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Typesetting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Layout Adjustment
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Publishing Standard Formatting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>5 Revisions Per Draft
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Designing your Cover
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Graphic OR Illustrated Design
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Cover Layout
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Cover Formatting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Front, Back &amp; Spine
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>ISBN + Barcode (2X)
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Book Publishing
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Creation
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Verification
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Optimization
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Amazon &amp; Kindle
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Barnes &amp; Noble
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Google Books
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>eBook Format
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Paperback Format
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Hardcover Format
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Online Presence
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>3 - 5 Page Authors Website
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>1 - Year Domain &amp; Hosting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>30 - 60 Seconds Book Trailer
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Guarantees
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>No Royalties Share
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>100% Ownership Rights
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>100% Satisfaction
                        </li>
                    </ul>

                    <div class="text-center">
                        <h5 style="color: #ffffff; margin-bottom: 0 !important;"
                            class=" flex justify-center items-center gap-3">
                            EASY PAYMENT PLAN
                            <div class="tooltip">
                                <img loading="lazy" width="20" height="20" decoding="async" class="icon"
                                    style="color: transparent"
                                    src="./assets/frontend/images/icons/question-icon.webp" />
                                <span class="tooltip-content">
                                    <ul>
                                        <li>50% PAYMENT UPFRONT.</li>
                                        <li>
                                            REMAINING 50% CAN BE PAID IN 2-3 MONTHS
                                            INSTALLMENTS
                                        </li>
                                        OR
                                        <li>AFTER THE DELIVERY OF 3 CHAPTERS.</li>
                                    </ul>
                                </span>
                            </div>
                        </h5>
                    </div>

                    <div class="ph-card-actions">
                        <a href="/get-free-quote" class="btn ph-cta-btn package-get-started-btn text-md">
                            GET A QUOTE
                        </a>
                    </div>

                    <div class="ph-card-footer">
                        <div>
                            <span class="ph-footer-label">Share your idea!</span>
                            <a class="ph-phone" href="tel:(888) 909-9431">(888) 909-9431</a>
                        </div>
                        <span class="ph-footer-divider"></span>
                        <div>
                            <span class="ph-footer-label">Want to discuss?</span>
                            <button class="ph-chat chatss" type="button">
                                Live Chat Now
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Premium Package -->
                <div class="ph-card">
                    <img loading="lazy" width="80" height="80" decoding="async" class="ph-card-badge package-badge"
                        style="color: transparent" src="./assets/frontend/images/icons/badge.webp"
                        alt="Package badge" />
                    <div class="ph-card-header">
                        <div class="ph-card-title">Premium Package</div>
                        <div class="ph-card-price">$15,000 USD</div>
                    </div>

                    <ul class="ph-feature-list">
                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Preparing Your Manuscript
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Editorial Support
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Proofreading
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Typesetting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Layout Adjustment
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Publishing Standard Formatting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>5 Revisions Per Draft
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Designing your Cover
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Graphic OR Illustrated Design
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Cover Layout
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Cover Formatting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Front, Back &amp; Spine
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>ISBN + Barcode (2X)
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Book Publishing
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Creation
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Verification
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Optimization
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Amazon &amp; Kindle
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Barnes &amp; Noble
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Google Books
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Smashwords
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>eBook Format
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Paperback Format
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Hardcover Format
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            12 Months Brand Marketing
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Logo Design (Complimentary)
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>3 - 5 Page Authors Website
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>1 - Year Domain &amp; Hosting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>30 - 60 Seconds Book Trailer
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Organic Google Marketing
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Social Media Marketing (Facebook, Instagram
                            &amp;
                            Twitter)
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Guarantees
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>No Royalties Share
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>100% Ownership Rights
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>100% Satisfaction
                        </li>
                    </ul>

                    <div class="text-center">
                        <h5 style="color: #ffffff; margin-bottom: 0 !important;"
                            class="font-poppins text-xl flex justify-center items-center gap-3">
                            EASY PAYMENT PLAN
                            <div class="tooltip">
                                <img loading="lazy" width="20" height="20" decoding="async" class="icon"
                                    style="color: transparent"
                                    src="./assets/frontend/images/icons/question-icon.webp" />
                                <span class="tooltip-content">
                                    <ul>
                                        <li>50% PAYMENT UPFRONT.</li>
                                        <li>
                                            REMAINING 50% CAN BE PAID IN 2-3 MONTHS
                                            INSTALLMENTS
                                        </li>
                                        OR
                                        <li>AFTER THE DELIVERY OF 3 CHAPTERS.</li>
                                    </ul>
                                </span>
                            </div>
                        </h5>
                    </div>

                    <div class="ph-card-actions">
                        <a href="/get-free-quote" class="btn ph-cta-btn package-get-started-btn text-md mt-8">
                            GET A QUOTE
                        </a>
                    </div>

                    <div class="ph-card-footer">
                        <div>
                            <span class="ph-footer-label">Share your idea!</span>
                            <a class="ph-phone" href="tel:(888) 909-9431">(888) 909-9431</a>
                        </div>
                        <span class="ph-footer-divider"></span>
                        <div>
                            <span class="ph-footer-label">Want to discuss?</span>
                            <button class="ph-chat chatss" type="button">
                                Live Chat Now
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Enterprise Package -->
                <div class="ph-card">
                    <div class="ph-card-header">
                        <div class="ph-card-title">Enterprise Package</div>
                        <div class="ph-card-price">$25,000 USD</div>
                    </div>

                    <ul class="ph-feature-list">
                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Preparing Your Manuscript
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Editorial Support
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Proofreading
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Typesetting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Layout Adjustment
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Publishing Standard Formatting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>5 Revisions Per Draft
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Designing your Cover
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Graphic OR Illustrated Design
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Cover Layout
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Cover Formatting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Front, Back &amp; Spine
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>ISBN + Barcode (2X)
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Book Publishing
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Creation
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Verification
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Account Optimization
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Amazon &amp; Kindle
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Barnes &amp; Noble
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Google Books
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Smashwords
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on Draft2Digital
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Available on ACX
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>eBook Format
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Paperback Format
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Hardcover Format
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Audiobook Format
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            24 Months Brand Marketing
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Logo Design (Complimentary)
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>3 - 5 Page Authors Website
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>2 - Year Domain &amp; Hosting
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>60 - 90 Seconds Video Trailer
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Organic Google Marketing
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Blogs &amp; Article Postings
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Press Releases (150+ Platforms)
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>Social Media Marketing (Facebook, Instagram,
                            Twitter,
                            YouTube, TikTok)
                        </li>

                        <li class="flex gap-2 mb-5 items-center items-center text-xl">
                            Guarantees
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>No Royalties Share
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>100% Ownership Rights
                        </li>
                        <li>
                            <span class="ph-feature-icon">&#10003;</span>100% Satisfaction
                        </li>
                    </ul>

                    <div class="text-center">
                        <h5 style="color: #ffffff; margin-bottom: 0 !important;"
                            class="font-poppins text-xl flex justify-center items-center gap-3">
                            EASY PAYMENT PLAN
                            <div class="tooltip">
                                <img loading="lazy" width="20" height="20" decoding="async" class="icon"
                                    style="color: transparent"
                                    src="./assets/frontend/images/icons/question-icon.webp" />
                                <span class="tooltip-content">
                                    <ul>
                                        <li>50% PAYMENT UPFRONT.</li>
                                        <li>
                                            REMAINING 50% CAN BE PAID IN 2-3 MONTHS
                                            INSTALLMENTS
                                        </li>
                                        OR
                                        <li>AFTER THE DELIVERY OF 3 CHAPTERS.</li>
                                    </ul>
                                </span>
                            </div>
                        </h5>
                    </div>

                    <div class="ph-card-actions">
                        <a href="/get-free-quote" class="btn ph-cta-btn package-get-started-btn text-md mt-8">
                            GET A QUOTE
                        </a>
                    </div>

                    <div class="ph-card-footer">
                        <div>
                            <span class="ph-footer-label">Share your idea!</span>
                            <a class="ph-phone" href="tel:(888) 909-9431">(888) 909-9431</a>
                        </div>
                        <span class="ph-footer-divider"></span>
                        <div>
                            <span class="ph-footer-label">Want to discuss?</span>
                            <button class="ph-chat chatss" type="button">
                                Live Chat Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Comparison Button -->
            <button class="ph-compare-btn btn ph-cta-btn compare-now-btn mb-10 mt-5" type="button"
                id="phCompareTogglePro">
                Comparison
                <span class="ph-btn-arrow">&#9660;</span>
            </button>

            <!-- Comparison Table Wrapper -->
            <div class="ph-comparison collapsed container-compare" id="phComparisonPro">
                <div class="ph-table-wrap md:w-full w-[500px] responsive-width">
                    <table class="ph-table bundle-comparison-chart table-fixed">
                        <thead>
                            <tr>
                                <th style="background: none !important" class="mainpage-regular"></th>
                                <th class="font-poppins">
                                    <div class="heading">Expert Package</div>
                                </th>
                                <th class="font-poppins">
                                    <div class="heading">Premium Package</div>
                                </th>
                                <th class="font-poppins">
                                    <div class="heading">Enterprise Package</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr class="m-4">
                                <th class="text-2xl md:text-2xl text-start p-3 font-bold tbl_second_heading" colspan="4"
                                    scope="row">
                                    <span>Preparing Your Manuscript</span>
                                </th>
                            </tr>
                            <tr>
                                <td>Editorial Support</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Proofreading</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Typesetting</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Layout Adjustment</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Basic Formatting</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Publishing Standard Formatting</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Revisions Per Draft</td>
                                <td>5</td>
                                <td>5</td>
                                <td>5</td>
                            </tr>

                            <tr class="m-4">
                                <th class="text-2xl md:text-2xl text-start p-3 font-bold pl-5 tbl_second_heading"
                                    colspan="4" scope="row">
                                    <span>Preparing your Book Cover</span>
                                </th>
                            </tr>
                            <tr>
                                <td>Graphic OR Illustrated Design</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Cover Layout</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Cover Formatting</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Front, Back &amp; Spine</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>ISBN + Barcode (2X)</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>

                            <tr class="m-4">
                                <th class="text-2xl md:text-2xl text-start p-3 font-bold pl-5 tbl_second_heading"
                                    colspan="4" scope="row">
                                    <span>Preparing for Print and Distribution</span>
                                </th>
                            </tr>
                            <tr>
                                <td>Account Creation</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Account Verification</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Account Optimization</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Kindle</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Barnes and Noble</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Google Books</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Smashwords</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Draft2Digital</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>ACX</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>eBook Format</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Paperback Format</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Hardcover Format</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Audiobook Format</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>

                            <tr class="m-4">
                                <th class="text-2xl md:text-2xl text-start p-3 font-bold pl-5 tbl_second_heading"
                                    colspan="4" scope="row">
                                    <span>Online Presence</span>
                                </th>
                            </tr>
                            <tr>
                                <td>Authors Website</td>
                                <td>3-5 Pages</td>
                                <td>3-5 Pages</td>
                                <td>3-5 Pages</td>
                            </tr>
                            <tr>
                                <td>Domain &amp; Hosting</td>
                                <td>1 Year</td>
                                <td>1 Year</td>
                                <td>2 Year</td>
                            </tr>

                            <tr class="m-4">
                                <th class="text-2xl md:text-2xl text-start p-3 font-bold pl-5 tbl_second_heading"
                                    colspan="4" scope="row">
                                    <span>Marketing &amp; Branding</span>
                                </th>
                            </tr>
                            <tr>
                                <td>Book Trailer</td>
                                <td>30-60 Seconds</td>
                                <td>30-60 Seconds</td>
                                <td>60-90 Seconds</td>
                            </tr>
                            <tr>
                                <td>Social Media Marketing</td>
                                <td class="ph-cross">&#10005;</td>
                                <td>3 Platforms</td>
                                <td>6 Platforms</td>
                            </tr>
                            <tr>
                                <td>Organic Google Marketing</td>
                                <td class="ph-cross">&#10005;</td>
                                <td>6 Months</td>
                                <td>12 Months</td>
                            </tr>
                            <tr>
                                <td>Blogs &amp; Article Postings</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>Press Releases</td>
                                <td class="ph-cross">&#10005;</td>
                                <td class="ph-cross">&#10005;</td>
                                <td>150+ Platforms</td>
                            </tr>

                            <tr class="m-4">
                                <th class="text-2xl md:text-2xl text-start p-3 font-bold pl-5 tbl_second_heading"
                                    colspan="4" scope="row">
                                    <span>Guarantees</span>
                                </th>
                            </tr>
                            <tr>
                                <td>100% Royalties</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                            </tr>
                            <tr>
                                <td>100% Ownership Rights</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
                                <td class="ph-check">&#10003;</td>
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
        <a href="/contact-us" class="cta-button" style="color: #000;">Get Free Consultation</a>
    </div>


    <div class="container text-center" style="padding: 20px 0px">
        <h2 style="padding: 20px 0px;">What Our Clients Say</h2>
        <div class="row" style="place-content: center;">
            <div class="col-12 col-md-6 col-lg-4">
                <video src=https://video.thepulphousepublishing.com/home-video.webm" autoplay muted loop controls
                    playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <video src="https://video.thepulphousepublishing.com/book-publishing/6.webm" autoplay muted loop
                    controls playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <video src="https://video.thepulphousepublishing.com/ghostwriting/8.webm" autoplay muted loop controls
                    playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <video src="https://video.thepulphousepublishing.com/book-publishing/8.webm" autoplay muted loop
                    controls playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
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