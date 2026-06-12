---
name: Precision Portfolio
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5e27e6'
  on-secondary: '#ffffff'
  secondary-container: '#774aff'
  on-secondary-container: '#f8f2ff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001f27'
  on-tertiary-container: '#0090ae'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e7deff'
  secondary-fixed-dim: '#ccbeff'
  on-secondary-fixed: '#1f0060'
  on-secondary-fixed-variant: '#4d00d2'
  tertiary-fixed: '#b4ebff'
  tertiary-fixed-dim: '#3cd7ff'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#004e5f'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  surface-white: '#FFFFFF'
  border-soft: '#E5E5E5'
  text-muted: '#666666'
  accent-cyan: '#E0F7FA'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system is engineered for a premium web design service that prioritizes technical excellence, clarity, and refined aesthetics. The brand personality is professional, restrained, and highly structured, evoking the feeling of a high-end architectural firm or a sophisticated software product.

The visual style follows a **Modern / Corporate** movement with a lean toward **Minimalism**. It rejects decorative clutter in favor of generous whitespace, a strict "product-first" layout, and subtle depth. The emotional response should be one of immediate trust, precision, and quiet confidence. Every element is intentional, with high-quality typography serving as the primary visual anchor rather than loud imagery.

## Colors

The palette is anchored in a high-contrast foundation of off-white and near-black to ensure maximum legibility and a sophisticated, "ink-on-paper" feel. 

- **Primary:** A deep charcoal (#121212) used for primary headings and critical UI elements.
- **Secondary:** A vibrant violet (#6633EE) derived from the reference, used sparingly for interaction cues and subtle brand moments.
- **Tertiary:** A soft cyan is introduced for secondary accents, specifically for highlight states and subtle "glassy" overlays.
- **Neutral:** A clean off-white (#FAFAFA) serves as the primary canvas, providing a softer experience than pure white while maintaining high clarity.

The color application is restrained; color should only be used to guide the eye or indicate interactivity.

## Typography

The typography system utilizes **Inter** for all primary communication. It is selected for its clinical precision and excellent readability at all scales. To introduce a technical, service-oriented edge, **JetBrains Mono** is used for small labels, tags, and metadata.

- **Headlines:** Use tight tracking and heavy weights. Large headlines should be the hero of the page, replacing the need for decorative images.
- **Body:** Generous line-height (1.6) ensures long-form case studies remain accessible.
- **Labels:** Monospaced labels provide a "designed" feel to technical details like project dates, categories, or tech stacks.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop, transitioning to a fluid model for mobile. 

- **Grid:** A 12-column grid with 24px gutters. Content should be centered within a 1280px max-width container.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Sectioning:** Significant vertical breathing room (120px+) is required between major content blocks to emphasize the premium, "gallery-like" presentation.
- **Mobile:** On mobile, margins reduce to 20px, and the 12-column grid collapses to a 1-column stack. Typography scales down specifically for the `headline-lg` level to prevent awkward wrapping.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Ambient Shadows**. Instead of heavy shadows, the system uses "layered surfaces."

- **Surface Levels:** The base is #FAFAFA. Interactive cards sit on #FFFFFF with a 1px border (#E5E5E5).
- **Shadows:** Use extremely diffused, low-opacity shadows (e.g., `0px 4px 20px rgba(0,0,0,0.04)`). The goal is for the shadow to be felt rather than seen.
- **Backdrop:** For navigation or overlays, use a subtle backdrop blur (12px) with 80% opacity white to maintain a sense of environmental depth.

## Shapes

The shape language is **Soft (Level 1)**. 

- **Primary Radius:** 0.25rem (4px) for small components like buttons and inputs.
- **Secondary Radius:** 0.5rem (8px) for cards and containers.
- **Logical Flow:** The tight corner radius maintains the professional, architectural feel, avoiding the playfulness of fully rounded or pill-shaped elements.

## Components

- **Buttons:** Primary buttons use a solid #121212 background with white text. Secondary buttons use a transparent background with a 1px #E5E5E5 border. Hover states should introduce a subtle #6633EE border or text color shift.
- **Cards:** Portfolio cards feature a white background (#FFFFFF), a 1px soft gray border, and a subtle ambient shadow. On hover, the shadow deepens slightly and the card may lift 2px.
- **Inputs:** Fields are clean with 1px borders. Focus states use a 1px #6633EE ring with a soft cyan glow.
- **Chips/Tags:** Use the `label-mono` typography style. Backgrounds should be a very light gray (#F0F0F0) or the `accent-cyan` for featured tags.
- **Lists:** Use horizontal dividers (1px #E5E5E5) with significant padding (24px) between items to maintain the minimalist rhythm.
- **Navigation:** A persistent top bar with a glassmorphism blur effect, keeping the focus on site-wide movement without obscuring the content.