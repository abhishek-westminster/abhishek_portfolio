# Passive Bat Mascot Theme Toggle Design

## Goal

Add a tiny bat mascot to the existing header theme toggle so it stays perched above the active theme icon and shifts subtly between dark and light positions when the user toggles the theme.

## Scope

This change is intentionally isolated to the existing theme toggle component used in the header navbar.

In scope:

- Add a tiny visible bat mascot to the theme toggle
- Keep the existing sun and moon icon behavior
- Keep the existing `next-themes` dark and light logic
- Add subtle idle motion to the bat
- Add a small theme-switch movement between the moon perch and sun perch
- Respect reduced motion

Out of scope:

- Header layout changes
- Theme system rewrites
- Global page animations
- Any second theme toggle instance

## Existing Context

- The site is a Next.js app using Tailwind CSS
- `next-themes` is already configured with `defaultTheme="dark"` and `enableSystem={false}`
- `motion` is already installed and available
- The existing toggle is implemented in `src/app/_components/Themes.tsx`
- The toggle is mounted only from `src/app/_components/Header.tsx`

## User Experience

The bat is always visible once the toggle is rendered. It behaves like a tiny mascot sitting above the active icon.

- In dark theme, the bat sits above the moon
- In light theme, the bat sits above the sun
- On initial page load, the bat is already in the correct resting position
- The initial render must not play an entrance animation
- On theme toggle, the bat moves only a short distance to the other perch
- The bat never disappears
- The animation must feel calm, premium, and understated

## Visual Constraints

- Bat size target: `14px` to `18px`, default `16px`
- Idle movement radius: `2px` to `6px` total, implemented closer to `1px` vertical breathing and low-angle rotation
- Theme switch movement radius: `10px` to `20px` maximum
- No layout shift
- No pointer interference with the button

## Motion Model

### Theme-switch motion

The bat uses one outer motion wrapper for perch movement:

- Dark perch: near the moon, above the toggle center
- Light perch: near the sun, slightly offset but still perched above the icon
- Transition style: short, smooth, low-amplitude position shift with small rotation adjustment
- `initial={false}` is required so the bat does not animate into place on first load

### Idle motion

Idle movement uses inner motion layers so it does not conflict with theme-switch transforms.

- Head tilt: `rotate -3deg` to `3deg`
- Body breathing: `y -1px` to `1px`
- Tiny wing twitch: `scaleX 0.96` to `1.02`
- Looping behavior: `repeat: Infinity` and `repeatType: "mirror"`
- Durations should be staggered slightly so the motion feels organic but restrained

### Reduced motion

When reduced motion is preferred:

- Disable the infinite idle loop
- Keep the bat statically perched in the correct theme position
- Keep theme-switch movement minimal or nearly instant

## Component Design

Implementation stays in `src/app/_components/Themes.tsx`.

The component will contain:

- The existing toggle button
- The existing sun and moon icons
- A tiny inline bat SVG or local `BatIcon` component defined in the same file
- An absolute bat overlay with `pointer-events-none`
- Nested motion wrappers:
  - outer wrapper for dark/light perch movement
  - inner wrapper for breathing and head tilt
  - wing groups inside the SVG for the subtle twitch

## Positioning

The toggle remains a fixed-size relative button so there is no layout change.

- The bat is absolutely positioned inside the button wrapper
- It visually sits above the icon like a mounted mascot
- The button must remain clickable across the full area
- The bat must not clip outside the button due to overflow rules

## Risk Mitigation

### Initial-load mismatch

Do not keep the final visual hidden behind a mounted placeholder state. The bat and the icons should render in the correct resting pose immediately so hydration does not create a visible pop-in.

### First-load accidental animation

Use `initial={false}` on motion elements tied to theme state so there is no slide-in on first load.

### Transform conflicts

Use separate motion layers for perch movement and idle motion so the transforms remain readable and stable.

### Cheap-looking wing animation

Animate wing groups independently instead of stretching the full bat silhouette.

### Accessibility

Keep the bat decorative with `aria-hidden="true"` and `pointer-events-none`. The existing button label remains the accessible control.

## Testing Plan

Targeted verification should confirm:

- Default dark theme shows the bat already perched above the moon
- No entrance animation happens on initial load
- Dark to light toggle moves the bat slightly toward the sun and keeps it visible
- Light to dark toggle moves the bat slightly back toward the moon and keeps it visible
- Reduced-motion mode disables the looping idle motion
- The toggle remains clickable on mobile and desktop
- No layout shift or clipping occurs in the header

## Implementation Boundary

Expected code changes:

- `src/app/_components/Themes.tsx`

Optional only if the implementation reads cleaner:

- a tiny local helper component kept in the same file

No unrelated files should change.
