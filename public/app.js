* {
  box-sizing: border-box;
}

:root {
  --bg: #0b0d12;
  --bg-alt: #121821;
  --panel: rgba(17, 22, 31, 0.8);
  --panel-strong: rgba(24, 31, 44, 0.96);
  --line: rgba(255, 255, 255, 0.08);
  --text: #edf4ff;
  --muted: #a6b5c9;
  --amber: #ffa63d;
  --orange: #ff6b35;
  --pink: #ff4fb4;
  --pink-soft: rgba(255, 79, 180, 0.18);
  --cyan: #4de0ff;
  --green: #88f7b4;
  --shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(255, 79, 180, 0.18), transparent 30%),
    radial-gradient(circle at top right, rgba(255, 166, 61, 0.16), transparent 32%),
    linear-gradient(180deg, #080a0d 0%, #101722 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1160px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 88px 0;
}

.eyebrow {
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.72rem;
  color: var(--muted);
}

.glow {
  color: var(--amber);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(18px);
  background: rgba(9, 11, 16, 0.65);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
  gap: 20px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-block h1 {
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.35rem;
  letter-spacing: 0.08em;
}

.brand-mark {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--pink), var(--amber));
  color: #120b09;
  font-weight: 900;
  box-shadow: 0 0 24px rgba(255, 166, 61, 0.6);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 28px;
  color: var(--muted);
}

.main-nav a {
  position: relative;
  transition: color 0.2s ease;
}

.main-nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--pink), var(--amber));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.main-nav a:hover {
  color: var(--text);
}

.main-nav a:hover::after {
  transform: scaleX(1);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: 1px solid var(--line);
  color: var(--text);
  padding: 0.55rem 0.8rem;
  border-radius: 10px;
}

.hero {
  padding-top: 84px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  align-items: center;
  gap: 48px;
}

.hero-copy h2 {
  font-size: clamp(3rem, 6vw, 5.2rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
  margin: 0 0 20px;
  max-width: 620px;
}

.lead {
  color: var(--muted);
  font-size: 1.07rem;
  line-height: 1.8;
  max-width: 640px;
}

.cta-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 0.95rem 1.5rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn.primary {
  color: #180d0a;
  background: linear-gradient(135deg, var(--amber), #ffcf70);
  box-shadow: 0 18px 36px rgba(255, 166, 61, 0.38);
}

.btn.secondary {
  background: rgba(255, 255, 255, 0.02);
  border-color: var(--line);
}

.hero-meta {
  display: flex;
  gap: 28px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.hero-meta div {
  min-width: 160px;
}

.hero-meta span {
  display: block;
  color: var(--muted);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 6px;
}

.hero-meta strong {
  font-size: 1rem;
}

.hero-visual {
  position: relative;
  min-height: 540px;
  display: grid;
  place-items: center;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(18px);
  opacity: 0.7;
}

.orb-one {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 79, 180, 0.75), rgba(255, 79, 180, 0));
  top: 48px;
  right: 18px;
}

.orb-two {
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(255, 166, 61, 0.8), rgba(255, 166, 61, 0));
  left: 8px;
  bottom: 36px;
}

.hero-card {
  position: relative;
  z-index: 2;
  width: min(420px, 100%);
  padding: 28px 28px 22px;
  border: 1px solid var(--line);
  background: rgba(14, 18, 25, 0.75);
  border-radius: 28px;
  box-shadow: var(--shadow);
}

.glass-panel {
  border: 1px solid var(--line);
  background: rgba(18, 26, 35, 0.7);
  box-shadow: var(--shadow);
}

.card-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.pill {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.3rem 0.75rem;
  font-size: 0.76rem;
  font-weight: 700;
}

.pill.live {
  background: rgba(136, 247, 180, 0.12);
  border: 1px solid rgba(136, 247, 180, 0.35);
  color: var(--green);
}

.hero-card h3 {
  margin: 18px 0 12px;
  font-size: clamp(2rem, 5vw, 3rem);
  letter-spacing: -0.06em;
}

.hero-card p {
  color: var(--muted);
  line-height: 1.7;
}

.mini-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.mini-stats div {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  padding: 14px 12px;
  border-radius: 18px;
}

.mini-stats strong {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 4px;
}

.mini-stats span {
  color: var(--muted);
  font-size: 0.78rem;
}

.stats-block {
  padding-top: 40px;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.stat-box {
  padding: 26px 20px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(17, 22, 31, 0.88);
}

.stat-box strong {
  display: block;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  margin-bottom: 8px;
  letter-spacing: -0.06em;
}

.stat-box span {
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 28px;
  align-items: center;
}

.story-copy h3,
.section-head h3,
.booking-copy h3,
.contact-card h3,
.mission-panel h3,
.crew-panel h3,
.schedule-panel h3 {
  margin: 0 0 14px;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.06em;
}

.story-copy p {
  color: var(--muted);
  line-height: 1.8;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 22px 0 0;
  display: grid;
  gap: 14px;
}

.feature-list li {
  color: var(--text);
  padding-left: 22px;
  position: relative;
}

.feature-list li::before {
  content: '✦';
  position: absolute;
  left: 0;
  color: var(--amber);
}

.story-cards {
  padding: 18px;
  border-radius: 30px;
}

.story-card {
  padding: 22px 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
}

.story-card + .story-card {
  margin-top: 18px;
}

.tag {
  display: inline-flex;
  margin-bottom: 10px;
  border-radius: 999px;
  padding: 0.34rem 0.7rem;
  border: 1px solid rgba(255, 166, 61, 0.35);
  background: rgba(255, 166, 61, 0.1);
  color: var(--amber);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.tag.accent {
  background: rgba(255, 79, 180, 0.12);
  border-color: rgba(255, 79, 180, 0.35);
  color: var(--pink);
}

.story-card h4 {
  margin: 0 0 8px;
  font-size: 1.25rem;
}

.story-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.operations-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.operation-box {
  padding: 24px 18px;
  border: 1px solid var(--line);
  background: rgba(20, 26, 35, 0.8);
  border-radius: 20px;
}

.operation-box strong {
  display: block;
  font-size: 1.6rem;
  margin-bottom: 6px;
  letter-spacing: -0.06em;
}

.operation-box span {
  color: var(--muted);
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 32px;
}

.section-head.narrow {
  justify-content: flex-start;
}

.chip-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-chip {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--muted);
  border-radius: 999px;
  padding: 0.6rem 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-chip.active {
  color: #1b130f;
  background: linear-gradient(135deg, var(--amber), #ffcf70);
  border-color: transparent;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.menu-card {
  background: rgba(18, 24, 31, 0.82);
  border: 1px solid var(--line);
  border-radius: 26px;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.menu-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 166, 61, 0.45);
}

.menu-card-image {
  position: relative;
  height: 210px;
  background-size: cover;
  background-position: center;
}

.menu-card-tag {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(4, 7, 11, 0.78);
  border: 1px solid rgba(255, 166, 61, 0.38);
  color: var(--amber);
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.menu-card-body {
  padding: 18px 18px 22px;
}

.menu-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}

.menu-card-head h4 {
  margin: 0;
  font-size: 1.22rem;
}

.price {
  color: var(--amber);
  font-weight: 800;
}

.category {
  display: inline-block;
  margin-bottom: 10px;
  color: var(--muted);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.menu-card p {
  margin: 0;
  line-height: 1.7;
  color: var(--muted);
}

.roster-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.roster-card {
  padding: 22px 18px;
  border-radius: 24px;
  border: 1px solid var(--line);
  background: rgba(18, 24, 31, 0.8);
}

.roster-card .initial {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--pink), var(--amber));
  display: grid;
  place-items: center;
  margin-bottom: 16px;
  color: #170d0d;
  font-weight: 800;
}

.roster-card h4 {
  margin: 0 0 6px;
  font-size: 1.15rem;
}

.role-tag {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--amber);
}

.roster-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.schedule-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
}

.schedule-item {
  padding: 20px 18px;
  border-radius: 20px;
  border: 1px solid var(--line);
  background: rgba(17, 22, 31, 0.82);
}

.schedule-item strong {
  display: block;
  font-size: 1.3rem;
  margin-bottom: 8px;
  letter-spacing: -0.04em;
}

.schedule-item span {
  color: var(--muted);
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.gallery-item {
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid var(--line);
  background: rgba(18, 24, 31, 0.7);
}

.gallery-image {
  height: 270px;
  background-size: cover;
  background-position: center;
}

.gallery-item figcaption {
  padding: 18px 16px 20px;
}

.gallery-item strong {
  display: block;
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.gallery-item p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.quote-card {
  padding: 22px 20px 18px;
  border-radius: 24px;
  border: 1px solid var(--line);
  background: rgba(17, 23, 32, 0.8);
}

.quote-mark {
  color: var(--amber);
  font-size: 2rem;
  line-height: 1;
}

.quote-card p {
  margin: 14px 0 16px;
  color: var(--muted);
  line-height: 1.8;
}

.quote-card strong {
  display: block;
  font-size: 1rem;
}

.quote-card span {
  color: var(--muted);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.booking-section {
  padding-top: 50px;
}

.booking-grid,
.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 22px;
}

.booking-copy p,
.contact-card ul {
  color: var(--muted);
  line-height: 1.8;
}

.mini-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 28px;
}

.metric-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 18px 16px;
}

.metric-box strong {
  display: block;
  margin-bottom: 6px;
  font-size: 1.35rem;
}

.metric-box span {
  color: var(--muted);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.form-panel {
  padding: 22px;
  border-radius: 28px;
}

form {
  display: grid;
  gap: 18px;
}

.field-row {
  display: grid;
  gap: 18px;
}

.field-row.two-up {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

label {
  display: grid;
  gap: 8px;
  color: var(--text);
  font-weight: 600;
}

input,
select,
textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 14px;
  color: var(--text);
  padding: 0.92rem 1rem;
}

input::placeholder,
textarea::placeholder {
  color: rgba(166, 181, 201, 0.7);
}

.submit-btn {
  cursor: pointer;
  border: none;
  width: 100%;
}

.contact-card,
.contact-card ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-card {
  padding: 24px 22px;
  border-radius: 28px;
}

.contact-card li + li {
  margin-top: 10px;
}

.contact-card a {
  color: var(--amber);
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 32px 0 48px;
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}

.footer-wrap span {
  color: var(--muted);
}

.footer-links {
  display: flex;
  gap: 18px;
  color: var(--muted);
}

.toast {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 50;
  background: rgba(18, 25, 34, 0.96);
  border: 1px solid rgba(136, 247, 180, 0.4);
  color: var(--text);
  box-shadow: var(--shadow);
  border-radius: 16px;
  padding: 0.9rem 1rem;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

.hidden {
  display: none !important;
}

@media (max-width: 980px) {
  .hero-grid,
  .split-layout,
  .booking-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .operations-grid,
  .menu-grid,
  .roster-grid,
  .gallery-grid,
  .schedule-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .testimonial-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .nav-toggle {
    display: inline-flex;
  }

  .main-nav {
    display: none;
    position: absolute;
    top: 82px;
    left: 16px;
    right: 16px;
    background: rgba(12, 16, 24, 0.95);
    border: 1px solid var(--line);
    border-radius: 20px;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .main-nav.open {
    display: flex;
  }

  .section {
    padding: 70px 0;
  }

  .stat-grid,
  .operations-grid,
  .menu-grid,
  .roster-grid,
  .gallery-grid,
  .schedule-grid,
  .field-row.two-up,
  .mini-metrics {
    grid-template-columns: 1fr;
  }

  .section-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-copy h2 {
    max-width: 100%;
  }
}
