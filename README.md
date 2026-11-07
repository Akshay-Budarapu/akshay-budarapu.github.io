# Cybersecurity Portfolio Website (SOC & Security Operations)

A truthful, evidence-led, responsive cybersecurity portfolio built for a Computer Engineering student (Pacific School of Engineering, GTU context) transitioning into **SOC Analyst / Cybersecurity Analyst / Security Operations** and entry-level **VAPT** roles.

## Why This Stack Was Chosen (Beginner-Friendly & Zero Build Complexity)

To make your first web app easy to understand, inspect, and update on your **HP OMEN 16 (Windows 11)** laptop without needing complex Node.js build servers or heavy dependencies:

1. **`index.html` (Structure)**: Semantic HTML5 with accessible landmarks, SEO/OpenGraph metadata, and Tailwind CSS via CDN.
2. **`assets/js/portfolio-data.js` (Your Content Database)**: All of your bio details, internship facts, 4-state skills, 6 case studies (with all 16 documentation fields), 24-item project roadmap, and study notes live in one clean JavaScript file. You can update text, dates, and links here just like editing a Python dictionary.
3. **`assets/js/app.js` (Interactive Behaviour)**: Handles navigation tabs, mobile menu, live search, category/state filters, the 16-section Case Study Inspector modal, Markdown export, and the in-browser Profile Customizer.
4. **`assets/css/styles.css` (Theme & Accessibility)**: Defines the dark SOC aesthetic, keyboard focus rings (`:focus-visible`), and subtle tactical grid background.

---

## How to Run Locally (Zero Installation Required)

### Option A — Double-Click in File Explorer (Fastest)
1. Unzip `cybersecurity_portfolio_project.zip` into a folder on your laptop.
2. Double-click `index.html` to open it in Microsoft Edge, Google Chrome, or Firefox.

### Option B — Run with Python's Built-In Web Server (Since You Are Learning Python!)
Open a terminal or Command Prompt inside the project folder and run:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

---

## How to Update Your Portfolio Content

Open `assets/js/portfolio-data.js` in VS Code, Cursor, or any text editor:

1. **Confirm Your Public Name & Contact Links**:
   In `window.PORTFOLIO_DATA.profile`, replace `"[Name Placeholder — To Be Confirmed]"` with your preferred public name, and fill in `githubUrl`, `linkedinUrl`, and `publicEmail` once you want them public.
2. **Add Lab Screenshots, Logs, or Repo Links**:
   In `window.PORTFOLIO_DATA.projects`, locate the `evidenceList`, `repoLink`, `reportLink`, `createdDate`, and `updatedDate` fields on any case study and replace `"Evidence pending"` or `"Date to be added"` with your verified files/dates.
3. **Move a Roadmap Project from `Planned` to `In Progress`**:
   When you start building one of the 24 roadmap items (such as `#1 Enterprise SOC Home Lab`), update its `status` in `window.PORTFOLIO_DATA.roadmap` and add a full 16-section case study entry to `window.PORTFOLIO_DATA.projects`.

---

## How to Deploy for Free (GitHub Pages / Netlify / Vercel)

1. Create a new public GitHub repository (e.g., `cybersecurity-portfolio`).
2. Upload `index.html`, `assets/`, `README.md`, and `.gitignore`.
3. In your GitHub repository, go to **Settings -> Pages**, select **Deploy from a branch (`main` / root)**, and click **Save**. Your portfolio will be live at `https://<your-username>.github.io/cybersecurity-portfolio/`.

---

## Responsible Security & Privacy Checklist Before Pushing to GitHub

- Never commit `.env` files, real passwords, API keys (e.g., VirusTotal / AbuseIPDB keys), or private SSH keys.
- Sanitise all screenshots, logs, and PCAPs so personal serial numbers, hardware IDs, real personal data, or non-lab IP addresses are redacted.
- Apply an MIT Licence only to original code you wrote yourself.
