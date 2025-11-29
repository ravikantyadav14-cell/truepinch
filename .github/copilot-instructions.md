# Copilot instructions — TruePinch (concise)

Purpose: help AI assistants and contributors get productive quickly with TruePinch.

Project snapshot
- Expo (managed, SDK 54) mobile app using file-based routing in `app/`.
- Small server pieces under `functions/` (Firebase Cloud Functions).
- Tests: unit tests in `__tests__` and `functions/__tests__`.
- CI: `.github/workflows/ci.yml` runs lint, unit tests and function tests.

Key locations (start here)
- app/                — screens & routes (compose, feed, chat)
- components/PostCard.js — per-image like UI and toggles
- app/compose.js      — composer supporting up to 2 media (image/video)
- app/chat-list.js, app/chat-room.js — realtime DM UI
- functions/index.js  — server-side per-image like aggregation
- firestore.rules     — Firestore security example

Data & patterns (important)
- Post media: up to 2 items — schema stored in post meta document.
- Per-image likes: stored under `posts/{postId}/media/{index}/likes/{uid}`.
- Realtime DMs: stored under `chats/{chatId}/messages/{messageId}`; clients use Firestore listeners.
- Block/report: `users/{uid}.blocked` and `posts/{postId}/flags` provide basic moderation scaffolding.

Dev & test shortcuts
- Start dev server: `npm install && npx expo start`
- Add packages: prefer `npx expo install <pkg>`
- Tests: run `npm test` (root) and `cd functions && npm test`
- Firebase config: fill placeholders in `src/firebase.js` or `firebase.js` (do NOT commit secrets)

Agent rules (must follow)
- Always create a feature branch and add tests for behavioral changes.
- Update CI (`.github/workflows/ci.yml`) for added tests / jobs.
- If you change Firestore shapes or rules, add a `firestore.rules` update + CI/emulator test.
