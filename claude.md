# The Pulp House Publishing - Legacy Site Migration Plan

## Executive Summary
This document outlines the complete migration plan from the legacy PHP website (Bootstrap-based) to a modern Next.js application using Tailwind CSS, Shadcn UI, and Aceternity UI components. The migration will preserve all content while completely modernizing the design with dark/light mode support and high-end animations.

---

## 1. Brand Identity & Color System

### Legacy Brand Colors (Extracted from old-site)
```css
/* Primary Brand Colors */
--brand-primary: #341e36;      /* Dark Purple/Burgundy - Main brand color */
--brand-secondary: #9e27a9;    /* Bright Purple/Magenta - Accent color */
--brand-heading: #394B5E;      /* Dark Blue-Gray - Headings */

/* Ticker/Promo Colors */
--ticker-red: #b91c1c;         /* Red for promotions */
--ticker-purple: #7c3aed;      /* Purple gradient */

/* Typography */
--font-primary: 'Urbanist', sans-serif;
--font-secondary: 'Noto Sans', sans-serif;

/* Neutral Colors */
--text-primary: #212529;
--text-muted: #000;
--background-light: #fff;
```

### Tailwind CSS Variable Mapping

**Update `src/styles/globals.css` with these mappings:**

```css
:root {
  /* Brand Colors - Light Mode */
  --background: 0 0% 100%;              /* White */
  --foreground: 240 10% 3.9%;           /* Almost black */

  /* Primary: Dark Purple (#341e36) */
  --primary: 302 37% 16%;               /* HSL for #341e36 */
  --primary-foreground: 0 0% 98%;       /* White text on primary */

  /* Secondary: Bright Purple (#9e27a9) */
  --secondary: 302 63% 40%;             /* HSL for #9e27a9 */
  --secondary-foreground: 0 0% 98%;     /* White text on secondary */

  /* Accent: For headings and emphasis (#394B5E) */
  --accent: 210 24% 30%;                /* HSL for #394B5E */
  --accent-foreground: 0 0% 98%;

  /* Muted backgrounds */
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;

  /* Card backgrounds */
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;

  /* Borders */
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 302 63% 40%;                  /* Secondary purple for focus rings */

  /* Destructive (errors) */
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;

  /* Radius */
  --radius: 0.75rem;

  /* Custom brand extensions */
  --ticker-bg: 0 77% 42%;               /* #b91c1c - Red for promos */
  --ticker-bg-gradient: 262 84% 66%;    /* #7c3aed - Purple gradient */
}

.dark {
  /* Brand Colors - Dark Mode */
  --background: 240 10% 3.9%;           /* Very dark */
  --foreground: 0 0% 98%;               /* Almost white */

  /* Primary: Lighter purple for dark mode */
  --primary: 302 50% 30%;               /* Lighter version of brand primary */
  --primary-foreground: 0 0% 98%;

  /* Secondary: Brighter purple for dark mode */
  --secondary: 302 63% 50%;             /* Brighter #9e27a9 */
  --secondary-foreground: 0 0% 98%;

  /* Accent */
  --accent: 210 30% 45%;                /* Lighter heading color */
  --accent-foreground: 0 0% 98%;

  /* Muted */
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;

  /* Card */
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;

  /* Borders */
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 302 63% 58%;
}
```

### Tailwind Config Extensions

Add these custom colors to `tailwind.config.ts`:

```typescript
// Custom brand colors accessible via className
extend: {
  colors: {
    brand: {
      primary: '#341e36',
      secondary: '#9e27a9',
      heading: '#394B5E',
      ticker: {
        red: '#b91c1c',
        purple: '#7c3aed',
      }
    }
  }
}
```

---

## 2. Typography System

### Font Families
- **Primary**: Urbanist (already available in old-site/assets/frontend/fonts/)
- **Secondary**: Noto Sans (for italics/accents)
- **Body**: Inter (current Next.js setup, keep for consistency)

### Font Loading Strategy
1. Convert `.woff2` fonts from old-site to Next.js font system
2. Use `next/font/local` for custom fonts
3. Maintain font weights: 500, 600, 700, 800, 900

### Implementation
```typescript
// src/app/layout.tsx
import localFont from 'next/font/local';

const urbanist = localFont({
  src: [
    { path: '../fonts/urbanist-v17-latin-500.woff2', weight: '500' },
    { path: '../fonts/urbanist-v17-latin-600.woff2', weight: '600' },
    { path: '../fonts/urbanist-v17-latin-700.woff2', weight: '700' },
    { path: '../fonts/urbanist-v17-latin-800.woff2', weight: '800' },
    { path: '../fonts/urbanist-v17-latin-900.woff2', weight: '900' },
  ],
  variable: '--font-urbanist',
});

const notoSans = localFont({
  src: '../fonts/noto-sans-v39-latin-600italic.woff2',
  weight: '600',
  style: 'italic',
  variable: '--font-noto-sans',
});
```

---

## 3. Header Component Migration

### Old Site Structure Analysis
**Components:**
1. **Promotional Ticker Bar** (sticky top)
   - Marquee animation with Christmas/promo offers
   - CTA button: "Get Free Quote"
   - Dismissible (localStorage tracking)

2. **Top Bar** (#341e36 background)
   - Logo + Tagline
   - Phone number + Email
   - "Submission" button + "Start Live Chat" (hidden by default)

3. **Navigation Bar** (#9e27a9 background)
   - Logo (mobile only, hidden on desktop)
   - Main navigation links
   - Services dropdown (3-column grid, 18 services)
   - Packages dropdown (3 package types)
   - Book Store, Book Reviews

### New Next.js Header Structure

**File:** `src/components/layout/Header.tsx`

#### Components Breakdown:
1. **PromoTicker** (New Component)
   - Use Aceternity's `Marquee` component
   - Fixed position at top
   - Gradient background: `bg-gradient-to-r from-ticker-red to-ticker-purple`
   - Auto-dismiss after X views or manual close

2. **TopBar** (New Component)
   - Background: `bg-brand-primary` (dark purple)
   - Grid layout: Logo + Description | Contact Info | CTA Buttons
   - Dark theme by default, white text
   - Responsive: Stack on mobile

3. **MainNav** (Enhanced Current Component)
   - Background with blur: `bg-secondary/95 backdrop-blur`
   - Use Shadcn's `NavigationMenu` for desktop
   - Use Shadcn's `Sheet` for mobile menu
   - Services dropdown: Grid layout with icons
   - Packages dropdown: Card-based layout

#### Key Features:
- **Sticky behavior**: `sticky top-0` with promo ticker offset
- **Dark/Light toggle**: Add `ModeToggle` component (Shadcn)
- **Animations**:
  - Framer Motion for dropdown menus
  - Aceternity's shine effects on buttons
  - Border beams on active states

#### Navigation Data Structure

**Update:** `src/lib/data.ts`

```typescript
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/for-author", label: "For Author" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/art-book-publishing", label: "Art Book Publishing", icon: "Palette" },
      { href: "/services/business-book-publishing", label: "Business Book Publishing", icon: "Briefcase" },
      { href: "/services/photo-book-publishing", label: "Photo Book Publishing", icon: "Camera" },
      { href: "/services/audio-book-publishing", label: "Audiobook Publishing", icon: "Mic" },
      { href: "/services/poetry-publishing", label: "Poetry Publishing", icon: "Feather" },
      { href: "/services/ebook-publishing", label: "Ebook Publishing", icon: "BookOpen" },
      { href: "/services/kindle-direct-publishing", label: "Kindle Direct Publishing", icon: "Kindle" },
      { href: "/services/text-book-publishing", label: "Textbook Publishing", icon: "GraduationCap" },
      { href: "/services/book-printing", label: "Book Printing", icon: "Printer" },
      { href: "/services/book-marketing", label: "Book Marketing", icon: "Rocket" },
      { href: "/services/book-cover-design", label: "Book Cover Design", icon: "Palette" },
      { href: "/services/book-layout-design", label: "Book Layout and Design", icon: "Layout" },
      { href: "/services/book-illustration", label: "Book Illustration", icon: "Image" },
      { href: "/services/editing-proofreading", label: "Editing And Proofreading", icon: "Edit" },
      { href: "/services/childrens-book-publishing", label: "Children's Book Publishing", icon: "Baby" },
      { href: "/services/book-formatting-service", label: "Book Formatting Service", icon: "FileText" },
      { href: "/services/author-branding", label: "Author Branding", icon: "User" },
      { href: "/services/fiction-book-publishers", label: "Fiction Book Publishers", icon: "Book" },
    ]
  },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact-us", label: "Contact Us" },
  {
    href: "/packages",
    label: "Packages",
    children: [
      { href: "/packages/book-publishing-packages", label: "Book Publishing Packages" },
      { href: "/packages/ghostwriting-packages", label: "Ghostwriting Packages" },
      { href: "/packages/holiday-packages", label: "Holiday Packages" },
    ]
  },
  { href: "/bookstore", label: "Book Store" },
  { href: "/book-reviews", label: "Book Reviews" },
];
```

---

## 4. Footer Component Migration

### Old Site Structure
**Sections:**
1. **Wave Divider** (SVG decoration at top)
2. **Main Footer Grid**
   - **Column 1**: Brand info, contact card, trust badges, social links
   - **Column 2-4**: Three link columns (Company, Services, More Services)
3. **Footer Bottom**: Copyright

### New Next.js Footer Structure

**File:** `src/components/layout/Footer.tsx`

#### Components Breakdown:

1. **WaveDivider** (New Component)
   - SVG wave animation
   - Use Aceternity's animated SVG effects
   - Purple gradient fill matching brand

2. **ContactCard** (New Component - Inside Footer)
   - Icon + label layout for Phone and Location
   - Glass morphism effect: `bg-white/5 backdrop-blur`
   - Hover animations

3. **TrustBadges** (New Component)
   - Trustpilot logo/rating
   - BBB badge with link
   - Animated on hover (scale, glow)
   - Grid layout: 2 columns

4. **LinkColumns**
   - Three columns: Company, Services, More Services
   - Hover effects with purple accent color
   - Icons optional (chevron-right)

5. **SocialLinks**
   - Facebook, Instagram (from old site)
   - Icon buttons with hover animations
   - Circular design with borders

#### Key Features:
- **Background**: Dark gradient with subtle pattern
- **Animations**: Fade-in on scroll, hover effects
- **Responsive**: Stack columns on mobile
- **Dark/Light adaptation**: Automatically adapts to theme

---

## 5. Component Architecture

### Suggested File Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          (Main export)
│   │   ├── header/
│   │   │   ├── PromoTicker.tsx
│   │   │   ├── TopBar.tsx
│   │   │   ├── MainNav.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── ServicesDropdown.tsx
│   │   ├── Footer.tsx          (Main export)
│   │   └── footer/
│   │       ├── WaveDivider.tsx
│   │       ├── ContactCard.tsx
│   │       ├── TrustBadges.tsx
│   │       ├── LinkColumns.tsx
│   │       └── SocialLinks.tsx
│   ├── ui/                     (Shadcn/Aceternity - already installed)
│   └── global/
│       ├── ThemeProvider.tsx   (Already exists)
│       └── ModeToggle.tsx      (Already exists)
```

---

## 6. Animation & Interaction Strategy

### Shadcn UI Components to Use
- `NavigationMenu` - Desktop navigation with dropdowns
- `Sheet` - Mobile slide-out menu
- `Button` - CTA buttons with variants
- `Card` - Service cards, trust badges
- `Dialog` - Quote form modal
- `Separator` - Footer sections

### Aceternity UI Components to Use
- `Marquee` - Promotional ticker animation
- `ShinyButton` - CTA buttons with gradient shine
- `BorderBeam` - Active navigation state
- `BackgroundGradient` - Card hover effects
- `SpotLight` - Hero section effects (if applicable)
- `TextReveal` - Section headings on scroll
- `AnimatedModal` - Quote form

### Framer Motion Patterns
```typescript
// Dropdown animation
const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

// Ticker scroll
const tickerVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear"
      }
    }
  }
};
```

---

## 7. Responsive Design Breakpoints

### Tailwind Breakpoints (Default)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Header Behavior
- **Desktop (lg+)**: TopBar + MainNav with dropdowns
- **Tablet (md)**: TopBar + MainNav (condensed)
- **Mobile (< md)**: Logo + Hamburger → Sheet menu

### Footer Behavior
- **Desktop (lg+)**: 4-column layout
- **Tablet (md)**: 2-column layout
- **Mobile**: Stacked single column

---

## 8. Dark/Light Mode Implementation

### Theme Toggle Placement
- **Header**: Top-right corner of TopBar or MainNav
- **Component**: Shadcn's `ModeToggle` with Sun/Moon icons

### Color Adaptation Rules
1. **Light Mode**:
   - TopBar: `bg-brand-primary` (dark purple) with white text
   - MainNav: `bg-secondary/95` (bright purple) with white text
   - Footer: `bg-gradient-to-br from-gray-900 to-gray-800` with light text

2. **Dark Mode**:
   - TopBar: `bg-brand-primary/90` (slightly transparent)
   - MainNav: `bg-secondary/80` with backdrop blur
   - Footer: `bg-black/95` with adjusted gradient

3. **Auto-switching elements**:
   - Text automatically inverts via `text-foreground`
   - Cards use `bg-card` for theme-aware backgrounds
   - Borders use `border-border` for consistent theming

---

## 9. Asset Migration Strategy

### Images
**Location:** Move from `old-site/assets/frontend/images/` to `public/images/`

**Critical assets:**
- Logo (white version): `logo/logo-white-bp.webp` → `public/images/logo-white.webp`
- Logo (purple version): `logo/logo-purple.webp` → `public/images/logo-purple.webp`
- Favicon: `logo/favicon.webp` → `public/favicon.webp`
- Trust badges: `icons/trustpilot-review-footer.svg` → `public/images/trustpilot.svg`
- Platform logos: `bg/amazon.svg`, `bg/kindle.svg`, etc. → `public/images/platforms/`

### Image Optimization
- Use Next.js `<Image />` component
- Define width/height explicitly
- Use `priority` for above-fold images (logo, hero)
- Use `loading="lazy"` for below-fold

```typescript
import Image from 'next/image';

<Image
  src="/images/logo-white.webp"
  alt="The Pulp House Publishing"
  width={347}
  height={99}
  priority
/>
```

---

## 10. Third-Party Integrations

### LiveChat
- **Current**: Embedded in header.php
- **New**: Create `LiveChatWidget.tsx` component
- **Location**: `src/components/global/LiveChatWidget.tsx`
- **Mounting**: In `layout.tsx` after body

### Google Analytics
- **Current**: Inline script in header
- **New**: Use Next.js `Script` component with `strategy="afterInteractive"`
- **Location**: `src/components/global/Analytics.tsx`

### ReCaptcha
- **Current**: Inline in forms
- **New**: React component wrapper
- **Library**: `react-google-recaptcha`

---

## 11. Implementation Phases

### Phase 1: Foundation (1-2 days)
- [x] Analyze old site structure
- [x] Extract brand colors and create CSS variable mapping
- [ ] Update `globals.css` with new brand variables
- [ ] Add custom Tailwind config extensions
- [ ] Copy and optimize font files

### Phase 2: Header Components (2-3 days)
- [ ] Create `PromoTicker.tsx` with Marquee animation
- [ ] Create `TopBar.tsx` with contact info and CTA
- [ ] Enhance `MainNav.tsx` with Services mega-dropdown
- [ ] Create `MobileMenu.tsx` with Sheet component
- [ ] Add dark/light mode toggle
- [ ] Test responsive behavior

### Phase 3: Footer Components (1-2 days)
- [ ] Create `WaveDivider.tsx` with animated SVG
- [ ] Create `ContactCard.tsx` with phone/location
- [ ] Create `TrustBadges.tsx` with Trustpilot/BBB
- [ ] Build `LinkColumns.tsx` for navigation links
- [ ] Add `SocialLinks.tsx` component
- [ ] Test responsive stacking

### Phase 4: Integration & Polish (1-2 days)
- [ ] Connect LiveChat widget
- [ ] Add Google Analytics
- [ ] Implement form ReCaptcha
- [ ] Add scroll animations (fade-in, parallax)
- [ ] Test dark/light mode transitions
- [ ] Cross-browser testing
- [ ] Mobile device testing

### Phase 5: Asset Migration (1 day)
- [ ] Copy all images to `public/images/`
- [ ] Optimize images with Next.js Image
- [ ] Update all image references
- [ ] Verify loading performance

---

## 12. Code Style & Standards

### Naming Conventions
- **Components**: PascalCase (`PromoTicker.tsx`)
- **Files**: PascalCase for components, kebab-case for utilities
- **CSS classes**: Tailwind utility classes only
- **Variables**: camelCase

### TypeScript Standards
- All components must have proper type definitions
- Use interfaces for props
- Avoid `any` type
- Use const assertions where applicable

### Component Structure Template
```typescript
"use client";

import { FC } from "react";

interface ComponentNameProps {
  // Props interface
}

export const ComponentName: FC<ComponentNameProps> = ({
  // Destructured props
}) => {
  // Hooks
  // Event handlers
  // Render logic

  return (
    <div className="tailwind-classes">
      {/* JSX */}
    </div>
  );
};
```

---

## 13. Testing Checklist

### Functionality
- [ ] All navigation links work correctly
- [ ] Dropdowns open/close smoothly
- [ ] Mobile menu slides in/out
- [ ] Dark/light mode toggles properly
- [ ] Promo ticker scrolls continuously
- [ ] Contact buttons trigger correct actions
- [ ] Forms validate and submit

### Design
- [ ] Brand colors match exactly
- [ ] Typography scales correctly
- [ ] Spacing is consistent
- [ ] Animations are smooth (60fps)
- [ ] No layout shifts (CLS)
- [ ] Images load progressively

### Responsive
- [ ] Header stacks correctly on mobile
- [ ] Navigation menu is accessible on all devices
- [ ] Footer columns stack properly
- [ ] Touch targets are at least 44x44px
- [ ] No horizontal scroll

### Performance
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Total Blocking Time < 300ms
- [ ] Cumulative Layout Shift < 0.1

### Accessibility
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] ARIA labels are present
- [ ] Color contrast ratio > 4.5:1
- [ ] Screen reader friendly

---

## 14. Additional Notes

### Content Preservation
- All links from old site must be preserved exactly
- Phone numbers, emails, addresses must match
- Meta tags should be migrated to Next.js metadata API
- Keep SEO-friendly URLs

### Progressive Enhancement
- Core functionality works without JavaScript
- CSS-only fallbacks for critical UI
- No reliance on client-side only features for SEO

### Future Considerations
- Consider adding blog section (mentioned in old site but commented out)
- Plan for A/B testing of CTA buttons
- Analytics event tracking for user interactions
- Sitemap and robots.txt generation

---

## 15. Quick Reference: Color Palette

| Element | Light Mode | Dark Mode | Tailwind Class |
|---------|-----------|-----------|----------------|
| Top Bar BG | #341e36 | #341e36/90 | `bg-brand-primary` |
| Main Nav BG | #9e27a9 | #9e27a9/80 | `bg-brand-secondary` |
| Headings | #394B5E | Lighter variant | `text-accent` |
| Body Text | #212529 | #f8f9fa | `text-foreground` |
| Ticker BG | Linear gradient | Same | `bg-gradient-to-r from-ticker-red to-ticker-purple` |
| Links Hover | #9e27a9 | Brighter | `hover:text-secondary` |
| Button Primary | #341e36 | Lighter | `bg-primary` |
| Button Secondary | #9e27a9 | Brighter | `bg-secondary` |

---

## 16. Final Deliverables

### Code Files
1. Updated `src/styles/globals.css` with brand colors
2. Enhanced `src/components/layout/Header.tsx`
3. All header sub-components in `src/components/layout/header/`
4. Enhanced `src/components/layout/Footer.tsx`
5. All footer sub-components in `src/components/layout/footer/`
6. Updated `src/lib/data.ts` with complete navigation structure
7. Updated `tailwind.config.ts` with brand color extensions

### Documentation
- This migration plan (`claude.md`)
- Component usage guide
- Color system documentation
- Animation patterns library

---

## Conclusion

This migration plan provides a comprehensive roadmap to transform The Pulp House Publishing's legacy PHP website into a modern, high-performance Next.js application while maintaining brand identity and improving user experience with cutting-edge animations and dark/light mode support.

**Next Steps:**
1. Review and approve this plan
2. Begin Phase 1: Foundation setup
3. Implement components phase-by-phase
4. Test thoroughly before deployment

---

**Document Version:** 1.0
**Date:** 2025-12-29
**Author:** Claude (Sonnet 4.5)
