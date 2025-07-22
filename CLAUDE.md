# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React/TypeScript website for siadlak.com built with:

- **Framework**: Vite + React 18 + TypeScript
- **UI**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router DOM
- **State**: React Query for server state, React Context for app state
- **Forms**: React Hook Form with Zod validation

## Development Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build for development environment
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Project Structure

### Key Directories

- `src/pages/` - Top-level page components (Index, About, Contact, etc.)
- `src/components/` - Reusable components organized by domain:
  - `ui/` - shadcn/ui component library
  - `layout/` - Header, Footer, Layout components
  - `sections/` - Landing page sections (Hero, CTA, etc.)
  - `podcast/` - Podcast-specific components
  - `webinar/` - Webinar-specific components
- `src/contexts/` - React Context providers
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `src/integrations/` - External service integrations

### Routing Architecture

The app uses React Router with routes defined in `src/App.tsx`. Main route categories:
- Landing pages: `/`, `/about`, `/contact`
- Courses: `/courses`, `/courses/:courseSlug`
- Webinars: `/webinar*` (registration, lobby, live, replay)
- Podcasts: `/podcasts/*` (Life Hacking, Uwazne Życie)
- Legal: `/legal`, `/assessment`

### Component Architecture

- Pages are composed of section components from `src/components/sections/`
- All UI components use shadcn/ui with custom theme tokens
- Custom color palette defined in `tailwind.config.ts` for brand consistency
- Components follow composition over inheritance pattern

## Implementation Best Practices

### Coding Standards

- **C-1 (MUST)** Use `import type { … }` for type-only imports
- **C-2 (SHOULD)** Default to `type`; use `interface` only when more readable or interface merging required
- **C-3 (SHOULD NOT)** Add comments except for critical caveats; rely on self‑explanatory code
- **C-4 (SHOULD)** Prefer simple, composable, testable functions over classes
- **C-5 (SHOULD NOT)** Extract functions unless they will be reused, are needed for testing, or drastically improve readability

### Testing Guidelines

- **T-1 (SHOULD)** For simple functions, colocate unit tests in `*.spec.ts` in same directory
- **T-2 (SHOULD)** Test edge cases, realistic input, unexpected input, and value boundaries
- **T-3 (SHOULD NOT)** Test conditions caught by the type checker
- **T-4 (SHOULD)** Use strong assertions over weak ones (`.toEqual(1)` vs `.toBeGreaterThanOrEqual(1)`)

### Component Conventions

- Use functional components with hooks
- Destructure props at component level for clarity
- Use Tailwind classes following the custom design system
- Leverage shadcn/ui components for consistent UI
- Follow established naming patterns (PascalCase for components)

### Git Conventions

- **GH-1 (MUST)** Use Conventional Commits format: https://www.conventionalcommits.org/en/v1.0.0
- **GH-2 (SHOULD NOT)** Refer to Claude or Anthropic in commit messages

## Brand Design System

The project uses a custom color palette defined in `tailwind.config.ts`:22

Custom fonts: Inter (sans-serif), Montserrat (headings)

## Content Architecture

The site focuses on:
- Personal development courses and coaching
- Webinar funnel with registration, lobby, live, and replay pages
- Podcast content (Life Hacking, Uwazne Życie)
- Community building and newsletter signup
- Assessment tools and discovery calls

## Remember Shortcuts
### QNEW

When I type "qnew", this means:

```
Understand all BEST PRACTICES listed in CLAUDE.md.
Your code SHOULD ALWAYS follow these best practices.
```

### QPLAN
When I type "qplan", this means:
```
Analyze similar parts of the codebase and determine whether your plan:
- is consistent with rest of codebase
- introduces minimal changes
- reuses existing code
```

## QCODE

When I type "qcode", this means:

```
Implement your plan and make sure your new tests pass.
Always run tests to make sure you didn't break anything else.
Always run `prettier` on the newly created files to ensure standard formatting.
Always run `turbo typecheck lint` to make sure type checking and linting passes.
```

### QCHECK

When I type "qcheck", this means:

```
You are a SKEPTICAL senior software engineer.
Perform this analysis for every MAJOR code change you introduced (skip minor changes):

1. CLAUDE.md checklist Writing Functions Best Practices.
2. CLAUDE.md checklist Writing Tests Best Practices.
3. CLAUDE.md checklist Implementation Best Practices.
```

### QCHECKF

When I type "qcheckf", this means:

```
You are a SKEPTICAL senior software engineer.
Perform this analysis for every MAJOR function you added or edited (skip minor changes):

1. CLAUDE.md checklist Writing Functions Best Practices.
```

### QCHECKT

When I type "qcheckt", this means:

```
You are a SKEPTICAL senior software engineer.
Perform this analysis for every MAJOR test you added or edited (skip minor changes):

1. CLAUDE.md checklist Writing Tests Best Practices.
```

### QUX

When I type "qux", this means:

```
Imagine you are a human UX tester of the feature you implemented. 
Output a comprehensive list of scenarios you would test, sorted by highest priority.
```

### QGIT

When I type "qgit", this means:

```
Add all changes to staging, create a commit, and push to remote.

Follow this checklist for writing your commit message:
- SHOULD use Conventional Commits format: https://www.conventionalcommits.org/en/v1.0.0
- SHOULD NOT refer to Claude or Anthropic in the commit message.
- SHOULD structure commit message as follows:
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
- commit SHOULD contain the following structural elements to communicate intent: 
fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.
```