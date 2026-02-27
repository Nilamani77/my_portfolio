# Nilamani Kundu - 3D Portfolio Website Specification

## Project Overview
- **Project Name**: Nilamani Kundu Portfolio
- **Type**: Single-page 3D portfolio website
- **Core Functionality**: Interactive 3D portfolio showcasing AI/ML B.Tech student skills, projects, and achievements
- **Target Users**: Recruiters, hiring managers, tech companies

## UI/UX Specification

### Layout Structure
- **Sections**: Hero, About, Skills, Projects, Internship, Workshops, Education, Contact
- **Navigation**: Fixed top navigation with smooth scroll
- **Responsive Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Visual Design

#### Color Palette
- **Primary Background**: Linear gradient from #0a0a1a (deep blue) to #1a0a2e (purple)
- **Accent Colors**:
  - Neon Cyan: #00f5ff
  - Neon Pink: #ff00ff
  - Neon Purple: #8b5cf6
  - Neon Blue: #3b82f6
  - Gold: #fbbf24
- **Glass Effect**: rgba(255, 255, 255, 0.05) with backdrop-filter blur
- **Text Primary**: #ffffff
- **Text Secondary**: #a0a0b0

#### Typography
- **Heading Font**: 'Orbitron', sans-serif (futuristic)
- **Body Font**: 'Exo 2', sans-serif
- **Hero Name**: 4rem (desktop), 2.5rem (mobile)
- **Section Titles**: 2.5rem
- **Body Text**: 1rem

#### Spacing System
- Section padding: 100px vertical
- Container max-width: 1200px
- Card padding: 30px
- Element gaps: 20px

### Visual Effects
- Glassmorphism cards with blur and border glow
- 3D floating elements using Three.js
- Particle background animation
- Neon glow effects on hover
- Smooth scroll with parallax
- Typing animation for skills
- Counter animations for stats

### Components

#### 1. Loading Screen
- 3D rotating "NK" logo
- Progress bar animation
- Fade out transition

#### 2. Navigation
- Glassmorphism background
- Logo on left
- Menu items: Home, About, Skills, Projects, Contact
- Active state indicator with glow

#### 3. Hero Section
- 3D rotating holographic brain/sphere (Three.js)
- Name with gradient text
- Subtitle with typing effect
- CTA buttons with glow effect

#### 4. About Section
- Glassmorphism card with floating animation
- Profile summary text
- Animated skill bars with percentage

#### 5. Skills Section
- 3D floating skill cards
- Category tabs (Languages, Web, Database, Core)
- Glow effect on hover
- Floating tech icons

#### 6. Projects Section
- 3D tilt cards
- Project images
- Tech stack badges
- GitHub link button
- Hover tilt animation

#### 7. Timeline Sections (Internship, Education)
- Vertical timeline with glowing nodes
- Alternating left/right cards (desktop)
- Staggered animation on scroll

#### 8. Contact Section
- Glassmorphism form
- Input fields with floating labels
- Animated submit button
- Social links with hover effects

## Functionality Specification

### Core Features
1. **3D Scene**: Three.js scene with floating elements
2. **Particle System**: Interactive particle background
3. **Typing Effect**: Animated text cycling through skills
4. **Scroll Animations**: Elements fade/slide in on scroll
5. **3D Tilt Cards**: Perspective transform on mouse move
6. **Counter Animation**: Number count-up for stats
7. **Smooth Navigation**: Click to scroll to section
8. **Form Validation**: Client-side form validation
9. **Cursor Effect**: Custom cursor with glow trail

### User Interactions
- Hover effects on all interactive elements
- Click navigation for menu items
- Form submission (visual feedback only)
- Social link opens in new tab

### Data Handling
- Static content (no backend)
- Form data logged to console (demo)

## Acceptance Criteria
1. ✓ Page loads within 3 seconds
2. ✓ All sections visible and properly styled
3. ✓ 3D elements render correctly
4. ✓ Smooth scroll works for all sections
5. ✓ Responsive on mobile, tablet, desktop
6. ✓ All animations play smoothly
7. ✓ No console errors
8. ✓ All external links work
