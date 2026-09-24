# rafflemania

UK prize competition site. Next.js (App Router) + TypeScript + Tailwind, Payload CMS, Postgres, Stripe.

## Status

Scaffold only. Build backlog tracked on the [project board](https://github.com/users/tufanbutuner/projects/2) (63 issues across 8 sprints).

**Sprint 0 must complete before any build work begins** — it contains blockers, including written confirmation that Stripe accepts this business type.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js, App Router |
| Language | TypeScript, strict |
| Styling | Tailwind CSS |
| CMS | Payload v3 (Postgres adapter) |
| Database | Postgres, managed, PITR enabled |
| Payments | Stripe Checkout |
| Email | Resend |
| Monitoring | Sentry |
