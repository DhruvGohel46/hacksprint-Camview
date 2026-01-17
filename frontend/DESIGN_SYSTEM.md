# CAMVIEW AI - Professional Design System

## Design Philosophy
- **Minimal & Modern**: Clean, uncluttered interfaces with intentional use of whitespace
- **Production-Ready**: Industry-standard design patterns suitable for enterprise applications
- **Consistent**: Unified design language across all components and pages
- **Accessible**: Proper contrast ratios, readable typography, and clear hierarchy

## Color Palette

### Primary Colors (Content & Actions)
- **Dark**: #1e293b (Primary text, active states)
- **Main**: #334155 (Default UI elements)
- **Light**: #475569 (Secondary text, disabled states)

### Neutral Colors (Backgrounds & Borders)
- **White**: #ffffff (Card backgrounds)
- **50**: #f8fafc (Page backgrounds)
- **100**: #f1f5f9 (Hover states, light backgrounds)
- **200**: #e2e8f0 (Borders, dividers)
- **500**: #64748b (Secondary text)
- **900**: #0f172a (Dark text, emphasis)

### Status Colors (Semantic)
- **Success**: #22c55e (Positive actions, online status)
- **Warning**: #eab308 (Cautionary states)
- **Error**: #ef4444 (Errors, critical alerts)
- **Info**: #0ea5e9 (Information, secondary actions)

## Typography

### Font Family
Primary: System UI fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto')
Mono: 'SF Mono', Monaco, Consolas, 'Courier New'

### Font Sizes & Weights
- **Display**: 2.25rem (44px) - Bold - Page headings
- **Large**: 1.875rem (30px) - Semibold - Section titles
- **Medium**: 1.5rem (24px) - Semibold - Subsection titles
- **Base**: 1rem (16px) - Regular - Body text
- **Small**: 0.875rem (14px) - Medium - Secondary text
- **Tiny**: 0.75rem (12px) - Regular - Labels, captions

## Spacing System
- 2px (0.125rem) - Tight spacing
- 4px (0.25rem) - Minimal spacing
- 8px (0.5rem) - Small spacing
- 12px (0.75rem) - Comfortable spacing
- 16px (1rem) - Standard spacing
- 24px (1.5rem) - Generous spacing
- 32px (2rem) - Large spacing
- 48px (3rem) - Extra large spacing
- 64px (4rem) - Maximum spacing

## Components

### Header
- Fixed position at top, maintains 80px height
- Clean white background with subtle shadow
- Status indicators: online/offline, FPS, uptime
- Responsive menu toggle on smaller screens

### Sidebar Navigation
- 280px width on desktop, full-width mobile drawer
- Smooth slide animation
- Active state with left border highlight
- Descriptive menu items with icons

### Stat Cards
- 300px minimum width, responsive grid
- Hover effect: 4px lift with shadow
- Icon (60px container), value, label, optional trend
- Status variants (warning, alert) with subtle backgrounds

### Charts
- Two-column grid on desktop, single on mobile
- 400px height for optimal viewing
- Placeholder style with dashed borders
- Descriptive titles and metadata

### Event Items
- Left border indicator (4px)
- Icon + title + description + severity badge
- Hover effect with subtle lift
- Responsive layout that stacks on mobile

### Buttons
- Padding: 8px horizontally, 4px vertically (base)
- Border radius: 8px (rounded edges, not pill-shaped)
- Smooth transitions: 200ms ease
- State variants: default, hover, active

## Layout

### Desktop (1024px+)
- Max width: 1600px, centered container
- Sidebar visible alongside main content
- Multi-column grids (2-4 columns)
- Full spacing and typography

### Tablet (768px - 1024px)
- Single-column grid layouts
- Sidebar drawer with overlay
- Reduced padding: 16px
- Touch-friendly button sizing

### Mobile (< 768px)
- Full-width layout
- 12px padding for content
- Single column everything
- Drawer menu with close button
- Optimized font sizes

## Shadows
- **Subtle**: 0 1px 2px (cards, borders)
- **Light**: 0 4px 6px (hover states, modest elevation)
- **Medium**: 0 10px 15px (floating elements, modals)
- **Heavy**: 0 20px 25px (modal backdrops, overlays)

## Animations
- **Transitions**: 200-300ms ease-out
- **Entrance**: Fade + slight translate
- **Interactions**: Subtle scale, opacity changes
- **No**: Disruptive, over-the-top animations

## Accessibility
- Minimum contrast: 4.5:1 for text
- Clear focus states on interactive elements
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support

## Best Practices Applied
✓ No gradient colors - solid, professional palette
✓ Consistent spacing using 4px base unit
✓ Unified typography hierarchy
✓ Proper component structure and reusability
✓ Responsive design for all breakpoints
✓ Production-ready, enterprise-suitable design
✓ Clear visual hierarchy and information architecture
✓ Professional animations (not distracting)
✓ Accessible color contrasts and text sizing
✓ Clean code organization with CSS variables
