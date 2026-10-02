---
description: How to run locally, commit changes, and deploy to GitHub Pages
---

## Project Info

- **Live URL:** https://Firstmove1.github.io/firstmove
- **GitHub Repo:** https://github.com/Firstmove1/firstmove
- **Local Dev URL:** http://localhost:5173/firstmove/
- **Project Path:** /Users/sameershaikh/.gemini/antigravity/scratch/firstmove

---

## Step 1 — Start Local Dev Server

```bash
cd /Users/sameershaikh/.gemini/antigravity/scratch/firstmove
npm run dev
```

Then open: http://localhost:5173/firstmove/

---

## Step 2 — Make Your Changes

Edit files inside `src/`. Key files:

| File | Purpose |
|------|---------|
| `src/pages/Sports.jsx` | Sports page — icon selector, playbook, FAQ |
| `src/pages/Home.jsx` | Home page — assembles all sections |
| `src/pages/learn-a-sport/Schools.jsx` | Schools page |
| `src/pages/learn-a-sport/Private.jsx` | Private Coaching page |
| `src/components/layout/Navbar.jsx` | Top navigation bar |
| `src/components/layout/Footer.jsx` | Footer |
| `src/components/home/Hero.jsx` | Hero / landing banner |
| `src/components/home/WhoWeServe.jsx` | "Benefits of Sports" section |
| `src/index.css` | Global CSS variables & styles |

---

## Step 3 — Commit Changes to Git

// turbo
```bash
cd /Users/sameershaikh/.gemini/antigravity/scratch/firstmove && git add -A && git commit -m "update: describe your changes here"
```

---

## Step 4 — Push to GitHub + Deploy to Live

// turbo
```bash
cd /Users/sameershaikh/.gemini/antigravity/scratch/firstmove && git push origin main && npm run deploy
```

> **Note:** If push fails with authentication error, update the remote URL with your GitHub PAT:
> ```bash
> git remote set-url origin https://YOUR_GITHUB_PAT@github.com/Firstmove1/firstmove.git
> ```
> Then re-run Step 4.

---

## Pending / Future Tasks

- [ ] Banner videos (Task #3) — awaiting media from client
- [ ] Sports carousel on Home with clickable sport buttons (Task #6)
- [ ] Transparent logo file — awaiting asset from client
- [ ] Testimonial photos — awaiting real photos from client
- [ ] Locker Room page content
- [ ] About Us page content
