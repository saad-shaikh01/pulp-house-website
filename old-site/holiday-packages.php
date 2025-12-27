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
                    <span class="h6" style="line-height: 28px !important">Bring Your Story to Life with The Pulp House
                        Publishing Affordable, Professional, and Tailored for You!</span>
                    <ol class="gs-steps">
                        <li class="gs-steps">At The Pulp House Publishing, we believe in turning your ideas into
                            captivating stories without the hefty price tag. Our expert ghostwriters work closely with
                            you to craft your vision into a published masterpiece. Explore our custom packages designed
                            to fit your needs and budget. Let’s make your literary dream a reality today!</li>
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
            font-size: 2.5rem !important;
            font-weight: 800 !important; 
            margin-bottom: 35px !important;
            letter-spacing: 0.5px !important;
            color: #fff;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 0, 0, 0.3);
            position: relative;
            display: inline-block;
            padding: 0 60px;
            /* Space for trees */
        }

        .ph-packages-title::before,
        .ph-packages-title::after {
            content: '';
            width: 40px;
            height: 40px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23228B22' d='M256 32L32 352h448L256 32z'/%3E%3Cpath fill='%23006400' d='M256 32L144 192h224L256 32z'/%3E%3Crect x='224' y='352' width='64' height='128' fill='%238B4513'/%3E%3Ccircle cx='256' cy='32' r='16' fill='%23FFD700'/%3E%3Ccircle cx='180' cy='280' r='12' fill='%23FF0000'/%3E%3Ccircle cx='320' cy='150' r='12' fill='%23FF0000'/%3E%3Ccircle cx='300' cy='300' r='12' fill='%23FFFF00'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-size: contain;
        }

        .ph-packages-title::before {
            left: 0px;
        }

        .ph-packages-title::after {
            right: 0px;
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
            padding: 40px 18px 18px;
            box-shadow: 0 24px 50px rgba(0, 0, 0, 0.38);
            backdrop-filter: blur(10px);
            min-height: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            overflow: visible;
        }

        /* Snow Cap on Card */
        .ph-card::before {
            content: '';
            position: absolute;
            top: -12px;
            left: -2px;
            right: -2px;
            height: 35px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' preserveAspectRatio='none'%3E%3Cpath fill='%23ffffff' fill-opacity='0.9' d='M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            z-index: 10;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
            filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
        }

        /* Santa Hat Sticker */
        .sticker-hat {
            position: absolute;
            top: -30px;
            left: -20px;
            width: 60px;
            height: 60px;
            z-index: 20;
            transform: rotate(-15deg);
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23D32F2F' d='M416 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z'/%3E%3Cpath fill='%23D32F2F' d='M110.5 291.6c22.3-38.4 75-88.7 151.6-119.6C374.3 126.8 444 86.8 448 32c-38.7 2.3-94.8 16.5-156.4 56.7-72.8 47.4-142.6 117.1-181.1 202.9z'/%3E%3Cpath fill='%23ffffff' d='M448 96c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z'/%3E%3Cpath fill='%23ffffff' d='M48 352c0-17.7 14.3-32 32-32h352c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32v-32z'/%3E%3C/svg%3E");
            background-size: contain;
            background-repeat: no-repeat;
            filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
        }

        .sticker-gift {
            position: absolute;
            top: -30px;
            right: -20px;
            width: 60px;
            height: 60px;
            z-index: 20;
            transform: rotate(15deg);
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23D32F2F' d='M32 128h176v288H32z'/%3E%3Cpath fill='%23B71C1C' d='M304 128h176v288H304z'/%3E%3Cpath fill='%23FFD700' d='M208 128h96v288h-96z'/%3E%3Cpath fill='%23FFD700' d='M32 192h448v64H32z'/%3E%3Cpath fill='%23FFA000' d='M208 0h96v128h-96z'/%3E%3Cpath fill='%23FFD700' d='M64 32h176v64H64z'/%3E%3Cpath fill='%23FFD700' d='M272 32h176v64H272z'/%3E%3C/svg%3E");
            background-size: contain;
            background-repeat: no-repeat;
            filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
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
            font-size: 1.8rem ;
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
                font-size: 1.8rem;
                padding: 0;
            }

            .ph-packages-title::before,
            .ph-packages-title::after {
                width: 30px;
                height: 30px;
                position: relative;
                display: inline-block;
                margin: 0 10px;
                transform: none;
                top: 5px;
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
           /* Falling Snow Animation */
        .snow-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        }

        .snowflake {
            position: absolute;
            top: -10px;
            background: white;
            border-radius: 50%;
            opacity: 0.8;
            animation: fall linear infinite;
        }

        @keyframes fall {
            0% {
                transform: translateY(-10px);
                opacity: 0.8;
            }
            100% {
                transform: translateY(100vh);
                opacity: 0;
            }
        }
    </style>

    <section class="ph-packages-section">
        <div class="snow-container" id="snow-container"></div>
        <div class="ph-packages-inner">
            <h2 class="ph-packages-title">Christmas Holiday Packages</h2>
            <div class="ph-card-grid">

                <!-- Package 2 -->
                <div class="ph-card">
                    <div class="ph-card-header">
                        <div class="sticker-hat"></div>

                        <div class="ph-card-title">Professional Author Package</div>
                        <div class="ph-card-price">$499 USD</div>
                    </div>

                    <ul class="ph-feature-list">
                        <li><span class="ph-feature-icon">&#10003;</span>Research</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Editing</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Proofreading</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Typesetting</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Layout Adjustment</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Formatting</li>
                        <li><span class="ph-feature-icon">&#10003;</span>100% Ownership Rights</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Book Cover Design</li>
                        <li><span class="ph-feature-icon">&#10003;</span>ISBN</li>

                        <li><span class="ph-feature-icon">&#10003;</span><strong>Publication On:</strong></li>
                        <li><span class="ph-feature-icon">&#10003;</span>Amazon Kindle (KDP)</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Barnes &amp; Noble Press</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Draft2digital</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Apple Books</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Kobo</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Google Play Books</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Scribd</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Tolino</li>
                        <li><span class="ph-feature-icon">&#10003;</span>OverDrive</li>
                        <li><span class="ph-feature-icon">&#10003;</span>CloudLibrary</li>

                        <li><span class="ph-feature-icon">&#10003;</span>EBook, Paperback, Hardcover (3 Formats of Your
                            Book)</li>
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

                <!-- Package 3 -->
                <div class="ph-card">
                    <div class="sticker-gift"></div>

                    <div class="ph-card-header">
                        <div class="ph-card-title">Global Publishing Package</div>
                        <div class="ph-card-price">$1099 USD</div>
                    </div>

                    <ul class="ph-feature-list">
                        <li><span class="ph-feature-icon">&#10003;</span>Research</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Editing</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Proofreading</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Typesetting</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Layout Adjustment</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Formatting</li>
                        <li><span class="ph-feature-icon">&#10003;</span>100% Ownership Rights</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Book Cover Design</li>
                        <li><span class="ph-feature-icon">&#10003;</span>ISBN</li>

                        <li><span class="ph-feature-icon">&#10003;</span><strong>Publication On:</strong></li>
                        <li><span class="ph-feature-icon">&#10003;</span>Amazon Kindle (KDP)</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Barnes &amp; Noble Press</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Draft2digital</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Apple Books</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Kobo</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Google Play Books</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Scribd</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Tolino</li>
                        <li><span class="ph-feature-icon">&#10003;</span>OverDrive</li>
                        <li><span class="ph-feature-icon">&#10003;</span>CloudLibrary</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Book Depository</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Waterstones</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Books-A-Million</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Target</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Blackwell&apos;s</li>
                        <li><span class="ph-feature-icon">&#10003;</span>IngramSpark</li>

                        <li><span class="ph-feature-icon">&#10003;</span>EBook, Paperback, Hardcover (3 Formats of Your
                            Book)</li>
                        <li><span class="ph-feature-icon">&#10003;</span>Global Distribution to over 40,000 retailers
                            worldwide</li>
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

<script>
    // Create snowflakes
    function createSnowflakes() {
        const container = document.getElementById('snow-container');
        const snowflakeCount = 40;

        for (let i = 0; i < snowflakeCount; i++) {
            const flake = document.createElement('div');
            flake.classList.add('snowflake');

            // Random positioning and animation properties
            flake.style.left = Math.random() * 100 + '%';
            // Varied sizes for round snowflakes
            const size = Math.random() * 5 + 3; // 3px to 8px
            flake.style.width = size + 'px';
            flake.style.height = size + 'px';
            flake.style.opacity = Math.random() * 0.5 + 0.3;

            const duration = Math.random() * 5 + 3; // 3 to 8 seconds
            flake.style.animationDuration = duration + 's';

            const delay = Math.random() * 5;
            flake.style.animationDelay = delay + 's';

            container.appendChild(flake);
        }
    }

    document.addEventListener('DOMContentLoaded', createSnowflakes);
</script>
<?php
include_once(dirname(__FILE__) . "/common/footer.php")
    ?>