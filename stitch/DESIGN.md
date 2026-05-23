---
name: ChronoCounter Lab K7P4
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#ca8100'
  on-tertiary-container: '#3e2400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-data:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-table:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  gutter: 12px
  margin: 16px
---

## Brand & Style
The design system is engineered for high-stakes operational environments where precision, speed of data acquisition, and reliability are paramount. The brand personality is **deterministic, analytical, and utilitarian**, stripping away decorative elements in favor of functional clarity. 

The aesthetic draws from **Modern Industrialism and Lab-grade Instrumentation**. It utilizes a dark, low-fatigue color palette to support long-duration monitoring. Visual hierarchy is established through "Operational Visibility"—prioritizing active data streams over static UI. Every pixel serves a purpose, reflecting a "No-Failure" philosophy suitable for scientific, technical, and high-performance time-tracking workflows.

## Colors
The palette is centered on a **Deep Slate** core to minimize ocular strain in low-light laboratory settings. 

- **Operation Blue (#3B82F6):** Reserved for primary system actions, focused states, and active command inputs.
- **Success Emerald (#10B981):** Exclusively signifies active timers, completed processes, and "Go" states.
- **Warning Amber (#F59E0B):** Used for threshold alerts, system errors, or pending interruptions.
- **Neutral/Surface:** The background uses #0F172A for maximum depth, while containers use #1E293B to create subtle tonal separation without relying on heavy shadows.

## Typography
Typography is split into two distinct functional roles: **Instructional** and **Quantitative**.

1.  **Instructional (Inter):** Used for all UI labels, navigation, and headers. It provides a clean, neutral tone that does not distract from the data.
2.  **Quantitative (JetBrains Mono):** This monospaced font is mandatory for all numerical time data, timestamps, and IDs. Its fixed-width nature ensures that digits remain perfectly aligned vertically in tables and dashboards, preventing "jitter" when time values increment rapidly.

Large data displays (e.g., active stopwatches) should use `display-data` to ensure visibility from a distance. Use `label-caps` for secondary metadata to maximize space while maintaining legibility.

## Layout & Spacing
This design system employs a **High-Density Fluid Grid** based on a strict 4px/8px incremental system. 

- **Density:** Padding is intentionally compact (8px–12px within containers) to maximize the "At-a-Glance" information surface. 
- **Structure:** Content is organized into modular "Instrument Panels" (Cards). Panels should use a 12-column grid on desktop but switch to a vertical stack on mobile.
- **Alignment:** All data columns must be right-aligned if they contain numerical values to ensure decimal/digit consistency. Instructional text remains left-aligned.

## Elevation & Depth
In a deterministic UI, depth is conveyed through **Tonal Layering and Low-Contrast Outlines** rather than realistic shadows.

- **Level 0 (Background):** #0F172A. The base canvas.
- **Level 1 (Panels):** #1E293B. Main containers for data groups.
- **Level 2 (Active Elements):** #334155 border. Used to define interactive inputs and hovered states.
- **Borders:** Use 1px solid borders (#334155) to separate columns and rows. Avoid drop shadows entirely to maintain the crisp, "plotted" look of a technical instrument.
- **Micro-Indicators:** Use "Glow" effects (1-2px blur) only for active status pips to simulate physical LED indicators on hardware.

## Shapes
The shape language is **geometric and precise**. 

- **Primary Radius:** 4px (`rounded-sm`). This provides a hint of modern refinement while maintaining the structural integrity of a grid-based layout.
- **Sharp Edges:** Data table headers and vertical separators should remain at 0px radius to emphasize the "Technical Grid" feel.
- **Circular Indicators:** Status pips and radio buttons are the only perfectly circular elements, used to signify state-based logic (e.g., Active, Idle, Error).

## Components
### Buttons
- **Primary:** Operation Blue background, white text. Flat, no gradient.
- **Ghost/Tertiary:** No background, Operation Blue border (1px).
- **Size:** Compact (32px height) for standard operations.

### Status Pips
- **Function:** Small 8x8px circles placed next to labels or within table rows.
- **Emerald:** Pulse animation (1s) for active timers.
- **Amber:** Static for paused states.
- **Slate:** For inactive or "Off" states.

### Data Tables
- **Density:** 4px vertical cell padding.
- **Borders:** 1px horizontal dividers in #334155.
- **Interaction:** Hovering a row should apply a slight highlight (#2D3748).

### Input Fields
- **Style:** Inset look using a darker background than the container.
- **Text:** Always JetBrains Mono for consistency with output data.
- **Focus:** 1px Operation Blue glow.

### Cards (Instrument Panels)
- **Header:** Darker sub-header strip (4px taller than content) with `label-caps` typography to define the section.