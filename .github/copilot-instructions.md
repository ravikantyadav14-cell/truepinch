# Copilot instructions — TruePinch (brief)

Welcome — this file contains the essential project knowledge an AI assistant needs to be productive with TruePinch.

Core summary
- Expo (managed, SDK 54) mobile app using file-based routing in the `app/` directory.
- Key folders:
  - app/             — screen routes & UI
  - components/      — reusable UI components (e.g., `PostCard`)
  - assets/          — static images/fonts
  - functions/       — Firebase Cloud Functions (like-count aggregation)
  - __tests__, functions/__tests__ — unit tests
  - .github/workflows/ci.yml — CI flows (lint, tests, function tests, optional deploy)

Important developer workflows (how to run)
- Start local dev server:
  npm install
  npx expo start
- Add / install packages (use expo-aware versions):
  npx expo install <pkg>
- Run unit tests (root and functions):
  npm test
  cd functions && npm test

Firebase integration / secrets
- App expects Firebase config in `src/firebase.js` (placeholder values). Do NOT commit real secrets — use repo secrets for CI and `FIREBASE_TOKEN` for deploy.
- Firestore structure used by the app:
  - posts/{postId}
    - meta/data — media array (max 2 items)
    - media/{index}/likes/{uid} — per-image likes stored per-user
  - chats/{chatId}/messages/{msgId} — realtime DMs
  - users/{uid}.blocked — block lists
- Cloud Functions: `functions/index.js` contains onLikeCreated / onLikeDeleted to maintain aggregated counts (prototype).

Patterns, constraints & examples
- A post can include at most 2 media items — composer enforces 2 items.
- Per-image likes: writers use nested docs under `posts/{id}/media/{index}/likes/{uid}`; prefer transactions or Cloud Functions to maintain counters (avoid client-side race conditions).
- Realtime features use Firestore onSnapshot listeners for instant DM updates.

How to make changes safely (AI agent demands)
- Create a feature branch, add tests for all behavior you change, run `npm test` and `cd functions && npm test`.
- Update `.github/workflows/ci.yml` if adding tests or new job requirements.
- Before changing Firestore shapes or rules, add/modify `firestore.rules` and add a short CI check or emulator-based rule tests.

Files to inspect first when working on features
- `app/compose.js` — composer & uploads
- `components/PostCard.js` — per-image like UI & toggle
- `app/chat-room.js`, `app/chat-list.js` — DM UI
- `functions/index.js` — aggregation logic
- `.github/workflows/ci.yml` — CI flow and test steps
