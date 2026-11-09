# Akshay Budarapu — Cybersecurity & Security Operations Portfolio

A complete, responsive, editorial-style portfolio website for Akshay Budarapu. This repository uses the **full portfolio source supplied by Akshay** as its homepage. The original page includes its own CSS, structured portfolio data, JavaScript rendering logic, navigation, project case-study reader, and knowledge-library interactions.

## Live website

After enabling GitHub Pages, the website URL will be:

`https://YOUR-GITHUB-USERNAME.github.io/cybersecurity-portfolio/`

Replace `YOUR-GITHUB-USERNAME` with your GitHub username.

## What's included

The complete `index.html` contains the original portfolio content and interactive experience, including:

- Recruiter-focused home page and profile
- About, career journey, education, target roles, and contact information
- Code In Yourself offline cybersecurity internship details and topic coverage
- Lab environment and hardware/virtualisation details
- Four-state skills taxonomy: Hands-on Practice, Currently Learning, Concepts Studied, and Planned to Explore
- Six seeded technical case studies with detailed documentation fields and evidence status
- Expanded project and practical documentation library across nine categories
- 24-item future project roadmap and an eight-step suggested SOC build order
- Cybersecurity and Security Operations content, including SOC, VAPT, network security, and detection topics
- Cryptography & Network Security (CNS) topic library
- Artificial Intelligence & Machine Learning topic library
- 13-subject Computer Engineering academic technical knowledge base
- Windows 11 vs Kali Linux networking and troubleshooting reference material
- Individual security-tool documentation pages
- Current-exploration tracker and GitHub repository standards
- Responsive styling, accessible focus states, navigation, filters, and detailed case-study modal

The page is self-contained: the CSS, portfolio data, and JavaScript are embedded in `index.html`. No build process, npm installation, or backend server is required.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in Chrome, Edge, Firefox, or another modern browser.

Optional local server:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish using GitHub Pages

### Option A — Upload through the GitHub website

1. Sign in to GitHub and create a **public** repository named `cybersecurity-portfolio`.
2. You can leave the new repository empty.
3. Open the repository and choose **Add file → Upload files**.
4. Upload the files and folders from this project ZIP. Make sure `index.html` is directly in the repository root.
5. Enter a commit message such as `Add complete cybersecurity portfolio`.
6. Select **Commit changes**.
7. Open **Settings → Pages**.
8. Under **Build and deployment**, choose **Deploy from a branch**.
9. Select branch **main** and folder **/(root)**, then click **Save**.
10. Wait for GitHub Pages to finish deploying. Your website will be published at:

    `https://YOUR-GITHUB-USERNAME.github.io/cybersecurity-portfolio/`

### Option B — Upload using Git

Extract the ZIP, open a terminal inside the extracted `akshay-cybersecurity-portfolio` folder, and run:

```bash
git init
git add .
git commit -m "Add complete cybersecurity portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/cybersecurity-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. Then enable GitHub Pages using steps 7–9 above.

## Before publishing — personal checks

- Confirm that the displayed education, internship dates, program details, and hardware specifications are accurate and appropriate to publish.
- Add your real GitHub and LinkedIn profile URLs where the source currently leaves them blank.
- Add a resume link only after uploading the resume you want to make public.
- Review the public contact email and decide whether you want it visible.
- Replace any evidence-pending labels only after adding genuine, sanitised evidence.
- Review all dates and status labels; do not present planned work as completed work.

## Accuracy and lab-safety notes

The source intentionally distinguishes practical work, learning exercises, studied concepts, and planned work. Preserve those distinctions when editing.

- The Metasploit case study records `sessions -l` reporting no active sessions; it does not claim successful exploitation.
- The Windows 11 network-adapter diagnostic case study does not claim a final resolution where the source says it is unverified.
- Evidence placeholders are not proof of completion. Add screenshots or reports only when they genuinely exist and have been sanitised.
- Keep Metasploitable2, DVWA, and other intentionally vulnerable targets in isolated, authorised lab environments. Do not expose them to public networks.

## Repository structure

```text
cybersecurity-portfolio/
├── index.html
├── README.md
├── LICENSE
├── SECURITY.md
├── CONTRIBUTING.md
├── SOURCE-NOTES.md
├── .gitignore
└── .nojekyll
```

## Contact

Email: [mr.akshay0421@gmail.com](mailto:mr.akshay0421@gmail.com)
