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
          <span class="h6" style="line-height: 28px !important">Bring Your Story to Life with The Pulp House Publishing Affordable, Professional, and Tailored for You!</span>
          <ol class="gs-steps">
            <li class="gs-steps">At The Pulp House Publishing, we believe in turning your ideas into captivating stories without the hefty price tag. Our expert ghostwriters work closely with you to craft your vision into a published masterpiece. Explore our custom packages designed to fit your needs and budget. Let’s make your literary dream a reality today!</li>
            <!--<li class="gs-steps">2. Decide which of our services you prefer.</li>-->
            <!--<li class="gs-steps">3. Select your package and fill in the form.</li>-->
          </ol>
        </div>
        <div class="col-lg-6 text-center">
          <img style="border-radius: 10px; margin; 0px !important; "
            src="./assets/frontend/images/certificate.png" alt="Getting Started Steps Illustration" class="img-fluid certi-img" />
        </div>
      </div>
    </div>
  </section>

  <style>
    .ph-packages-section {
      background: radial-gradient(circle at 18% 20%,
          rgba(158, 39, 168, 0.32) 0%,
          transparent 32%),
        radial-gradient(circle at 82% 12%,
          rgba(255, 161, 255, 0.25) 0%,
          transparent 30%),
        linear-gradient(135deg, #150d1b 0%, #2b1535 100%);
      padding: 25px 16px 80px;
      color: #f8efff;
      position: relative;
      overflow: hidden;
    }

    .ph-packages-inner {
      max-width: 1220px;
      margin: 0 auto;
      text-align: center;
    }

    .ph-packages-title {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 28px;
      letter-spacing: 0.5px;
      color: #fff9ff;
    }

    .ph-card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
      width: 100%;
    }

    .ph-card {
      position: relative;
      background: linear-gradient(160deg,
          rgba(255, 255, 255, 0.12),
          rgba(255, 255, 255, 0.06));
      border: 1px solid rgba(255, 255, 255, 0.16);
      border-radius: 16px;
      padding: 22px 18px 18px;
      box-shadow: 0 24px 50px rgba(0, 0, 0, 0.38);
      backdrop-filter: blur(10px);
      min-height: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .ph-card-badge {
      position: absolute;
      top: 14px;
      right: 14px;
      width: 58px;
      height: auto;
    }

    .ph-card-header {
      text-align: center;
      margin-bottom: 6px;
    }

    .ph-card-title {
      font-size: 1.05rem;
      font-weight: 800;
      margin-bottom: 6px;
      color: #fdf7ff;
    }

    .ph-card-price {
      font-size: 1.3rem;
      font-weight: 800;
      color: #ffbdf7;
      letter-spacing: 0.3px;
      text-shadow: 0 6px 16px rgba(0, 0, 0, 0.42);
    }

    .ph-feature-list {
      list-style: none;
      margin: 8px 0 0;
      padding: 0 6px 0 0;
      max-height: 230px;
      overflow-y: auto;
    }

    .ph-feature-list li {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      font-size: 0.96rem;
      line-height: 1.45;
      padding: 9px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      color: #ffffff;
    }

    .ph-feature-list li:last-child {
      border-bottom: none;
    }

    .ph-feature-icon {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: linear-gradient(145deg, #ffbdf7 0%, #9e27a8 100%);
      color: #190a21;
      font-weight: 800;
      font-size: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
    }

    /* Firefox */
    .ph-feature-list {
      scrollbar-width: thin !important;
      scrollbar-color: #ffffffff #ffe4e406 !important;
    }

    .ph-card-actions {
      text-align: center;
      margin-top: 6px;
    }

    .btn {
      align-items: center;
      gap: 0.625rem;
      padding: 0.5rem 2rem;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      border: none;
      position: relative;
      overflow: hidden;
    }

    .btn::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      transform: translate(-50%, -50%);
      transition: width 0.6s, height 0.6s;
    }

    .btn:hover::before {
      width: 300px;
      height: 300px;
    }

    .ph-cta-btn {
      background: linear-gradient(135deg, #7c3aed, #ec4899);
      color: #ffffff;
      box-shadow: 0 10px 30px rgba(124, 58, 237, 0.35);
    }

    .ph-cta-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(124, 58, 237, 0.45);
    }

    .ph-cta-btn:active {
      transform: translateY(0);
    }

    .ph-card-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.18);
      padding-top: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 0.95rem;
    }

    .ph-footer-divider {
      width: 1px;
      height: 32px;
      background: rgba(255, 255, 255, 0.28);
      flex-shrink: 0;
    }

    .ph-footer-label {
      display: block;
      font-weight: 700;
      margin-bottom: 2px;
      color: #fdf7ff;
    }

    .ph-phone,
    .ph-chat {
      font-weight: 800;
      color: #fdf7ff;
      text-decoration: none;
    }

    .ph-chat {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      color: #ffbdf7;
    }

    .ph-compare-btn {
      margin: 28px auto 10px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      /* background: linear-gradient(135deg, #ffbdf7 0%, #9e27a8 100%);
      color: #1b0c24;
      border: 1px solid rgba(255, 255, 255, 0.55);
      border-radius: 999px;
      padding: 10px 18px;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.26);*/
      transition: transform 0.18s ease, box-shadow 0.18s ease;
    }

    .ph-compare-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
    }

    .ph-btn-arrow {
      display: inline-block;
      transition: transform 0.2s ease;
      font-size: 0.9rem;
    }

    .ph-comparison {
      width: 100%;
      max-width: 1220px;
      margin: 0 auto;
      transition: max-height 0.35s ease, opacity 0.3s ease, padding 0.3s ease,
        border 0.3s ease;
      border-radius: 14px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.18);
    }

    .ph-comparison.collapsed {
      max-height: 0;
      opacity: 0;
      padding: 0;
      border-width: 0;
      pointer-events: none;
      margin-top: 0;
    }

    .ph-comparison.expanded {
      max-height: 1600px;
      opacity: 1;
      padding: 14px;
      margin-top: 14px;
    }

    .ph-table-wrap {
      width: 100%;
      overflow-x: auto;
      border-radius: 12px;
      box-shadow: 0 18px 36px rgba(0, 0, 0, 0.18);
    }

    .ph-table {
      width: 100%;
      min-width: 780px;
      border-collapse: collapse;
      /* background: linear-gradient(180deg, #fdf3ff 0%, #f6ddff 100%); */
      color: #2c142f;
    }

    .ph-table thead th {
      background: linear-gradient(135deg, #9e27a8 0%, #c646d5 100%);
      color: #fff9ff;
      padding: 14px 10px;
      font-weight: 800;
      /* border: 1px solid rgba(255, 255, 255, 0.22); */
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
    }

    .ph-table thead th:first-child {
      width: 32%;
      border-left: 0;
    }

    .ph-table thead th:last-child {
      border-right: 0;
    }

    .ph-table tbody {
      background: linear-gradient(180deg, #fdf3ff 0%, #f6ddff 100%);
    }

    .ph-table tbody tr:nth-child(odd) {
      background: rgba(255, 255, 255, 1);
    }

    .ph-table tbody tr:nth-child(even) {
      background: rgba(255, 255, 255, 0.1);
    }

    .ph-table td {
      padding: 12px 10px;
      border: 1px solid rgba(158, 39, 168, 0.22);
      font-weight: 700;
      color: #2c142f;
    }

    .ph-table td:first-child {
      text-align: left;
      color: #2c142f;
      width: 32%;
    }

    .ph-table td:not(:first-child) {
      text-align: center;
      color: #2c142f;
    }

    .ph-check {
      color: #41d6a0 !important;
      font-size: 1.1rem;
    }

    .ph-cross {
      color: #f96d9c !important;
      font-size: 1.1rem;
    }

    @media (max-width: 960px) {
      .ph-packages-title {
        font-size: 1.6rem;
      }

      .ph-card-grid {
        gap: 18px;
      }

      .ph-card {
        padding: 18px 16px;
      }
    }

    @media (max-width: 640px) {
      .ph-packages-section {
        padding: 48px 12px 64px;
      }

      .ph-card-footer {
        flex-direction: column;
        align-items: center;
      }

      .ph-footer-divider {
        width: 100%;
        height: 1px;
      }

      .ph-compare-btn {
        width: 100%;
        justify-content: center;
      }
    }

    /* Easy payment tooltip (for lower packages) */
    .package .tooltip {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .package .tooltip-content {
      display: block;
      position: absolute;
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translate(-50%, 6px);
      background: linear-gradient(135deg, #2b1535, #9e27a8);
      color: #fff9ff;
      padding: 12px 14px;
      border-radius: 10px;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.18s ease, transform 0.18s ease;
      min-width: 220px;
      z-index: 5;
    }

    .package .tooltip-content ul {
      margin: 0;
      padding-left: 16px;
      text-align: left;
      line-height: 1.4;
      font-size: 0.95rem;
    }

    .package .tooltip-content::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 8px;
      border-style: solid;
      border-color: #2b1535 transparent transparent transparent;
    }

    .package .tooltip:hover .tooltip-content,
    .package .tooltip:focus-within .tooltip-content {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0);
    }
  </style>

  <section class="ph-packages-section">
    <div class="ph-packages-inner">
      <h2 class="ph-packages-title">Packages</h2>
      <div class="ph-card-grid">
        <div class="ph-card">
          <div class="ph-card-header">
            <div class="ph-card-title">Silver Package</div>
            <div class="ph-card-price">$2,999 USD</div>
          </div>
          <ul class="ph-feature-list">
            <li><span class="ph-feature-icon">&#10003;</span>Dedicated Project Manager</li>
            <li><span class="ph-feature-icon">&#10003;</span>Pre-Planning and Research</li>
            <li><span class="ph-feature-icon">&#10003;</span>Questionnaire/Brief Forms</li>
            <li><span class="ph-feature-icon">&#10003;</span>Strategy Sessions (with Senior Project Manager)</li>
            <li><span class="ph-feature-icon">&#10003;</span>Outline Creation</li>
            <li><span class="ph-feature-icon">&#10003;</span>Upto 25 Minute of Interview Session</li>
            <li><span class="ph-feature-icon">&#10003;</span>Mid-Level Writer</li>
            <li><span class="ph-feature-icon">&#10003;</span>Writing upto 50 - 70 Pages</li>
          </ul>
          <div class="ph-card-actions">
            <a href="/get-free-quote" class="btn ph-cta-btn">GET A QUOTE</a>
          </div>
          <div class="ph-card-footer">
            <div>
              <span class="ph-footer-label">Share your idea!</span>
              <a class="ph-phone" href="tel:(888) 909-9431">(888) 909-9431</a>
            </div>
            <span class="ph-footer-divider"></span>
            <div>
              <span class="ph-footer-label">Want to discuss?</span>
              <button class="ph-chat chatss" type="button">Live Chat Now</button>
            </div>
          </div>
        </div>
        <div class="ph-card">
          <div class="ph-card-header">
            <div class="ph-card-title">Gold Package</div>
            <div class="ph-card-price">$4,499 USD</div>
          </div>
          <ul class="ph-feature-list">
            <li><span class="ph-feature-icon">&#10003;</span>Dedicated Project Manager</li>
            <li><span class="ph-feature-icon">&#10003;</span>Pre-Planning and Research</li>
            <li><span class="ph-feature-icon">&#10003;</span>Questionnaire/Brief Forms</li>
            <li><span class="ph-feature-icon">&#10003;</span>Strategy Sessions (with Senior Project Manager)</li>
            <li><span class="ph-feature-icon">&#10003;</span>Detailed Outline Creation</li>
            <li><span class="ph-feature-icon">&#10003;</span>Upto 35 Minute of Interview Session</li>
            <li><span class="ph-feature-icon">&#10003;</span>Senior-Level Writer</li>
            <li><span class="ph-feature-icon">&#10003;</span>Writing upto 70 - 150 Pages</li>
            <li><span class="ph-feature-icon">&#10003;</span>Include upto 30 Images</li>
          </ul>
          <div class="ph-card-actions">
            <a href="/get-free-quote" class="btn ph-cta-btn">GET A QUOTE</a>
          </div>
          <div class="ph-card-footer">
            <div>
              <span class="ph-footer-label">Share your idea!</span>
              <a class="ph-phone" href="tel:(888) 909-9431">(888) 909-9431</a>
            </div>
            <span class="ph-footer-divider"></span>
            <div>
              <span class="ph-footer-label">Want to discuss?</span>
              <button class="ph-chat chatss" type="button">Live Chat Now</button>
            </div>
          </div>
        </div>
        <div class="ph-card">
          <img loading="lazy" width="80" height="80" decoding="async" data-nimg="1" class="ph-card-badge"
            style="color: transparent" src="./assets/frontend/images/icons/badge.webp" alt="Package badge" />
          <div class="ph-card-header">
            <div class="ph-card-title">Platinum Package</div>
            <div class="ph-card-price">$6,499 USD</div>
          </div>
          <ul class="ph-feature-list">
            <li><span class="ph-feature-icon">&#10003;</span>Dedicated Project Manager</li>
            <li><span class="ph-feature-icon">&#10003;</span>Pre-Planning and Research</li>
            <li><span class="ph-feature-icon">&#10003;</span>Questionnaire/Brief Forms</li>
            <li><span class="ph-feature-icon">&#10003;</span>Strategy Sessions (with Senior Project Manager)</li>
            <li><span class="ph-feature-icon">&#10003;</span>Detailed Outline Creation</li>
            <li><span class="ph-feature-icon">&#10003;</span>Upto 45 Minute of Interview Session</li>
            <li><span class="ph-feature-icon">&#10003;</span>Premium Writer</li>
            <li><span class="ph-feature-icon">&#10003;</span>Writing upto 150 - 300 Pages</li>
            <li><span class="ph-feature-icon">&#10003;</span>Include upto 40 Images</li>
          </ul>
          <div class="ph-card-actions">
            <a href="/get-free-quote" class="btn ph-cta-btn">GET A QUOTE</a>
          </div>
          <div class="ph-card-footer">
            <div>
              <span class="ph-footer-label">Share your idea!</span>
              <a class="ph-phone" href="tel:(888) 909-9431">(888) 909-9431</a>
            </div>
            <span class="ph-footer-divider"></span>
            <div>
              <span class="ph-footer-label">Want to discuss?</span>
              <button class="ph-chat chatss" type="button">Live Chat Now</button>
            </div>
          </div>
        </div>
      </div>
      <button class="ph-compare-btn btn ph-cta-btn" type="button" id="phCompareToggle">
        Comparison <span class="ph-btn-arrow">&#9660;</span>
      </button>
      <div class="ph-comparison collapsed" id="phComparison">
        <div class="ph-table-wrap">
          <table class="ph-table">
            <thead>
              <tr>
                <th style="background: none !important"></th>
                <th>Silver Package</th>
                <th>Gold Package</th>
                <th>Platinum Package</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dedicated Project Manager</td>
                <td class="ph-check">&#10003;</td>
                <td class="ph-check">&#10003;</td>
                <td class="ph-check">&#10003;</td>
              </tr>
              <tr>
                <td>Pre-Planning and Research</td>
                <td class="ph-check">&#10003;</td>
                <td class="ph-check">&#10003;</td>
                <td class="ph-check">&#10003;</td>
              </tr>
              <tr>
                <td>Questionnaire/Brief Forms</td>
                <td class="ph-check">&#10003;</td>
                <td class="ph-check">&#10003;</td>
                <td class="ph-check">&#10003;</td>
              </tr>
              <tr>
                <td>Strategy Sessions with Senior Project Manager</td>
                <td class="ph-check">&#10003;</td>
                <td class="ph-check">&#10003;</td>
                <td class="ph-check">&#10003;</td>
              </tr>
              <tr>
                <td>Outline Creation</td>
                <td>Basic</td>
                <td>Detailed</td>
                <td>Detailed</td>
              </tr>
              <tr>
                <td>Interview Session timeline</td>
                <td>Upto 25 Minutes</td>
                <td>Upto 35 Minutes</td>
                <td>Upto 45 Minutes</td>
              </tr>
              <tr>
                <td>Writers Level</td>
                <td>Mid Level Writer</td>
                <td>Senior Level Writer</td>
                <td>Premium Level Writer</td>
              </tr>
              <tr>
                <td>Writers Experience</td>
                <td>1 - 5 Years</td>
                <td>5 - 10 Years</td>
                <td>10 - 15 Years</td>
              </tr>
              <tr>
                <td>Writing</td>
                <td>50-70 Pages</td>
                <td>70-150 Pages</td>
                <td>150-300 Pages</td>
              </tr>
              <tr>
                <td>Production Timeline (Divided into Weeks)</td>
                <td>2-4 Months</td>
                <td>3-6 Months</td>
                <td>4-7 Months</td>
              </tr>
              <tr>
                <td>Include Images</td>
                <td>20</td>
                <td>30</td>
                <td>40</td>
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
              <tr>
                <td>Editorial Support</td>
                <td class="ph-cross">&#10005;</td>
                <td class="ph-check">&#10003;</td>
                <td class="ph-check">&#10003;</td>
              </tr>
              <tr>
                <td>Dedication page (If required)</td>
                <td class="ph-cross">&#10005;</td>
                <td class="ph-check">&#10003;</td>
                <td class="ph-check">&#10003;</td>
              </tr>
              <tr>
                <td>About the Author</td>
                <td class="ph-cross">&#10005;</td>
                <td class="ph-check">&#10003;</td>
                <td class="ph-check">&#10003;</td>
              </tr>
              <tr>
                <td>Book Synopsis</td>
                <td class="ph-cross">&#10005;</td>
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
        <video src=https://video.thepulphousepublishing.com/home-video.webm" autoplay muted loop controls playsinline
          class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <video src="https://video.thepulphousepublishing.com/book-publishing/6.webm" autoplay muted loop controls
          playsinline class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
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
        <video src="https://video.thepulphousepublishing.com/Marketing/7.webm" autoplay muted loop controls playsinline
          class="h-lg-600" style="max-height: 500px; border-radius: 10px;"></video>
      </div>
    </div>
  </div>
</div>


<?php
include_once(dirname(__FILE__) . "/common/footer.php")
  ?>