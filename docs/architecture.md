# Architecture notes

WhimsyUI starts from the unmodified Next.js App Router starter page. Product features will be added only when their requirements are known.

## Decisions

- Prefer React Server Components for routes and read-only composition. Add `"use client"` only at interaction boundaries.
- Use TanStack Query for client-side server state that needs caching, refetching, optimistic updates, or offline behavior. Keep one-time server reads in Server Components.
- Validate external data at runtime with Zod and infer TypeScript types from the schemas so API boundaries have one source of truth.
- Use React Hook Form for substantial forms, with Zod-backed validation and accessible inline error summaries.
- Treat authentication as a server concern. Authorization checks belong beside protected data access and mutations, not only in client navigation.
- Build reusable components with semantic HTML, visible focus states, keyboard support, and WCAG 2.2 AA contrast. Storybook includes the accessibility addon for isolated review.
- Design loading, empty, error, and offline states alongside every data-backed feature rather than as follow-up work.
- Use Vitest and React Testing Library for behavior-focused unit/component tests and Playwright for critical browser journeys.
- Record Lighthouse HTML reports locally under `reports/` and track meaningful regressions in CI once deployment requirements are selected.
