# Development Guide

## Build/Lint/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- No testing framework currently configured

## Architecture
- **Stack**: Vite + React + TypeScript + Tailwind CSS + shadcn/ui
- **Structure**: `/src` contains components/, contexts/, hooks/, lib/, pages/
- **UI Components**: shadcn/ui with Radix UI primitives in `@/components/ui`
- **State**: React Context for cursor state, React Query for data fetching
- **Animation**: Framer Motion + react-lenis for smooth scrolling
- **Styling**: Tailwind CSS with CSS variables, custom cursor with mix-blend-mode

## Code Style
- **Imports**: Use `@/` alias for src imports (components, utils, ui, lib, hooks)
- **TypeScript**: Relaxed config - no implicit any checks, unused params allowed
- **Components**: Functional components with TypeScript, React.FC typing
- **Styling**: Tailwind utility classes, HSL color variables, responsive design
- **Performance**: requestAnimationFrame for animations, useMemo for expensive calculations
- **Files**: .tsx for components, camelCase naming, barrel exports from directories
