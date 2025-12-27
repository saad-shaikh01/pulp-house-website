// document.addEventListener('DOMContentLoaded', function(){

//   // COUNTERS - animate numbers when visible
//   const counters = document.querySelectorAll('.stat-number');
//   const speed = 2000;
//   if ('IntersectionObserver' in window) {
//     const obs = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if(entry.isIntersecting){
//           const el = entry.target;
//           if(!el.dataset.animated){
//             const target = +el.getAttribute('data-count');
//             let start = 0;
//             const step = Math.ceil(target / (speed/16));
//             const interval = setInterval(() => {
//               start += step;
//               if(start >= target){ el.textContent = target; clearInterval(interval); }
//               else el.textContent = start;
//             }, 16);
//             el.dataset.animated = 'true';
//           }
//         }
//       });
//     }, {threshold:0.5});
//     counters.forEach(c => obs.observe(c));
//   } else {
//     counters.forEach(c => c.textContent = c.getAttribute('data-count'));
//   }

//   // ACCORDION
//   const accBtns = document.querySelectorAll('.accordion-btn');
//   accBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//       const expanded = btn.getAttribute('aria-expanded') === 'true';
//       btn.setAttribute('aria-expanded', !expanded);
//       const panel = btn.nextElementSibling;
//       if(!expanded) panel.style.display = 'block'; else panel.style.display = 'none';
//     });
//   });

//   // LIGHTBOX for testimonials - simple approach: open video in a modal
//   const lightboxLinks = document.querySelectorAll('.lightbox-trigger');
//   lightboxLinks.forEach(a => {
//     a.addEventListener('click', function(e){
//       e.preventDefault();
//       const src = this.getAttribute('href');
//       const modal = document.createElement('div');
//       modal.className = 'simple-modal';
//       modal.innerHTML = '<div class="modal-inner"><video src="'+src+'" controls autoplay playsinline style="max-width:100%;height:auto;"></video><button class="modal-close">Close</button></div>';
//       document.body.appendChild(modal);
//       modal.querySelector('.modal-close').addEventListener('click', ()=> modal.remove());
//     });
//   });

//   // OPTIONAL: initialize any slider library here (Splide/Swiper)
// });







// home-anim.js - include <script src="./assets/frontend/js/home-anim.js" defer></script>
(function(){
  // Load GSAP + ScrollTrigger dynamically (CDN). If blocked, we fall back to basic intersection observer.
  const loadScript = (src) => new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = src; s.async = true;
    s.onload = () => res(); s.onerror = () => rej();
    document.head.appendChild(s);
  });

  // Main init
  const init = async () => {
    let gsapLoaded = false;
    try {
      await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.1/dist/gsap.min.js');
      await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.1/dist/ScrollTrigger.min.js');
      gsapLoaded = !!window.gsap;
    } catch (e) {
      gsapLoaded = false;
    }

    // Helper: reveal using IntersectionObserver fallback
    const revealFallback = () => {
      const items = document.querySelectorAll('[data-animate]');
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      }, {threshold: 0.16});
      items.forEach(i => io.observe(i));
    };

    // COUNTERS
    const runCounters = () => {
      const counters = document.querySelectorAll('.counter');
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const el = e.target;
            if (el.dataset.anim) return;
            el.dataset.anim = '1';
            const target = parseInt(el.getAttribute('data-target') || '0', 10);
            const duration = 1400;
            const stepTime = Math.max(8, Math.floor(duration / target));
            let cur = 0;
            const tick = () => {
              cur += Math.max(1, Math.floor(target / (duration / 40)));
              if (cur >= target) { el.textContent = target; } else { el.textContent = cur; requestAnimationFrame(tick); }
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      }, {threshold: 0.5});
      counters.forEach(c => io.observe(c));
    };

    // TILT (lightweight) - small mouse parallax for elements with [data-tilt]
    const initTilt = () => {
      const tiltEls = document.querySelectorAll('[data-tilt]');
      tiltEls.forEach(el => {
        el.addEventListener('pointermove', e => {
          const rect = el.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width;
          const py = (e.clientY - rect.top) / rect.height;
          const rx = (py - 0.5) * 6; // tilt degrees
          const ry = (px - 0.5) * -8;
          el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
        });
        el.addEventListener('pointerleave', () => el.style.transform = '');
      });
    };

    // Lightbox for testimonial play buttons
    const initTestimonialLightbox = () => {
      document.querySelectorAll('.play-video').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const src = btn.getAttribute('data-src');
          if (!src) return;
          const modal = document.createElement('div');
          modal.className = 'ph-modal';
          modal.innerHTML = `
            <div class="ph-modal-inner" role="dialog" aria-modal="true">
              <button class="ph-modal-close" aria-label="Close video">✕</button>
              <video controls autoplay playsinline style="max-width:100%;height:auto" src="${src}"></video>
            </div>`;
          document.body.appendChild(modal);
          modal.querySelector('.ph-modal-close').addEventListener('click', () => modal.remove());
          modal.addEventListener('click', (ev) => { if (ev.target === modal) modal.remove(); });
        });
      });
    };

    // ACCORDION
    const initAccordion = () => {
      document.querySelectorAll('.accordion-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          const panel = btn.nextElementSibling;
          if (!panel) return;
          panel.style.display = expanded ? 'none' : 'block';
        });
      });
    };

    // If GSAP loaded, build richer animations
    if (gsapLoaded) {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // Hero intro
      gsap.from('.hero-content', { y: 26, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.15 });

      // Floating shapes subtle motion
      gsap.to('.hero-shape.shape-1', { x: 20, y: -12, duration: 8, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      gsap.to('.hero-shape.shape-2', { x: -12, y: 6, duration: 10, yoyo: true, repeat: -1, ease: 'sine.inOut' });

      // Stagger reveal for all data-animate
      gsap.utils.toArray('[data-animate]').forEach((el, i) => {
        gsap.fromTo(el, { y: 36, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none none' },
          delay: i * 0.06
        });
      });

      // Counters using GSAP quickTo (smooth tween)
      document.querySelectorAll('.counter').forEach(el => {
        const target = +el.dataset.target || 0;
        let obj = { val: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(obj, {
              val: target,
              duration: 1.6,
              ease: 'power1.out',
              onUpdate: () => el.textContent = Math.floor(obj.val)
            });
          },
          once: true
        });
      });

      // small parallax on hero video scroll
      gsap.to('.hero-video', {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 }
      });

      // tilt initialisation (still fallback to pointer)
      initTilt();
    } else {
      // Fallback: reveal items with IO, counters via IO
      revealFallback();
      runCounters();
      initTilt();
    }

    // Always initialise lightbox & accordion
    initTestimonialLightbox();
    initAccordion();
    // If GSAP loaded, run counters already; otherwise ensure counters (runCounters already called in fallback)
    if (gsapLoaded) {
      // counters handled above by GSAP ScrollTrigger; but also start runCounters as robust fallback
      runCounters();
    }
  };

  // start
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  // Minimal modal CSS injection for lightbox (so it works without manual CSS)
  const css = `.ph-modal{position:fixed;inset:0;background:rgba(2,2,8,0.75);display:flex;align-items:center;justify-content:center;z-index:99999}.ph-modal-inner{max-width:980px;width:94%;background:transparent;padding:1rem;border-radius:8px}.ph-modal-close{position:absolute;right:12px;top:12px;background:transparent;border:0;color:#fff;font-size:18px;padding:6px;cursor:pointer}`;
  const style = document.createElement('style'); style.appendChild(document.createTextNode(css)); document.head.appendChild(style);

})();
