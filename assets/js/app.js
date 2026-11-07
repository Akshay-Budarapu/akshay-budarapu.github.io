// ============================================================================
// CYBERSECURITY PORTFOLIO — APPLICATION CONTROLLER (app.js)
// ============================================================================
// Renders structured data from window.PORTFOLIO_DATA into accessible,
// filterable components and manages modals, search, and profile customisation.
// ============================================================================

(function () {
  const DATA = window.PORTFOLIO_DATA;

  // Application State
  const state = {
    activeView: "all", // 'all' | 'about' | 'skills' | 'projects' | 'roadmap' | 'notes' | 'journey' | 'github' | 'guide'
    skillStateFilter: "All",
    skillCategoryFilter: "All",
    skillSearch: "",
    projectCategoryFilter: "All",
    projectStatusFilter: "All",
    projectSearch: "",
    roadmapDomainFilter: "All",
    roadmapSocPriorityOnly: false,
    roadmapSearch: "",
    expandedRoadmapIds: { 1: true, 3: true },
    notesCategoryFilter: "All",
    notesSearch: "",
    selectedCaseStudyId: null,
    customizerOpen: false,
    mobileMenuOpen: false,
    beginnerStepIndex: 0,
    cryptoCategoryFilter: "All",
    cryptoSearch: "",
    aiCategoryFilter: "All",
    aiSearch: "",
    activeTechHubTab: "python",
    activeToolDocId: "all",
    academicSearch: "",
    libCategoryFilter: "All"
  };

  // Safe localStorage wrapper (Canvas sandbox safe)
  function loadSavedProfileOverrides() {
    try {
      const raw = window.localStorage.getItem("cyber_portfolio_profile_overrides_v2");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          if (typeof parsed.name === "string" && parsed.name.trim()) DATA.profile.name = parsed.name.trim();
          if (typeof parsed.githubUrl === "string") DATA.profile.githubUrl = parsed.githubUrl.trim();
          if (typeof parsed.linkedinUrl === "string") DATA.profile.linkedinUrl = parsed.linkedinUrl.trim();
          if (typeof parsed.publicEmail === "string") DATA.profile.publicEmail = parsed.publicEmail.trim();
        }
      }
    } catch (e) {
      // Ignore storage restrictions in sandboxed environments
    }
  }

  function saveProfileOverrides(overrides) {
    try {
      window.localStorage.setItem("cyber_portfolio_profile_overrides_v2", JSON.stringify(overrides));
    } catch (e) {
      // Ignore storage restrictions
    }
  }

  // HTML escaping utility
  function esc(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Toast Notification (Replaces blocked alert/confirm)
  let toastTimeout = null;
  function showToast(message, type) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const colorClasses =
      type === "success"
        ? "border-emerald-500/60 bg-slate-900/95 text-emerald-200"
        : "border-sky-500/60 bg-slate-900/95 text-sky-200";

    container.innerHTML = `
      <div class="flex items-center gap-3 px-4 py-3 rounded-lg border shadow-xl backdrop-blur ${colorClasses} text-sm">
        <span class="w-2 h-2 rounded-full ${type === "success" ? "bg-emerald-400" : "bg-sky-400"}"></span>
        <span>${esc(message)}</span>
      </div>
    `;
    container.classList.remove("hidden");
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      container.classList.add("hidden");
    }, 3400);
  }

  // Clipboard helper with fallback
  function copyTextToClipboard(text, label) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast(label || "Copied to clipboard!", "success");
    } catch (err) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          showToast(label || "Copied to clipboard!", "success");
        });
      }
    }
  }

  // Badge color helpers for Honest States
  function getSkillStateBadge(skillState) {
    switch (skillState) {
      case "Hands-on Practice":
        return `<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Hands-on Practice</span>`;
      case "Currently Learning":
        return `<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-500/15 text-sky-300 border border-sky-500/30"><span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>Currently Learning</span>`;
      case "Concepts Studied":
        return `<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/30"><span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>Concepts Studied</span>`;
      default:
        return `<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30"><span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>Planned to Explore</span>`;
    }
  }

  function getProjectStatusBadge(status) {
    if (status.indexOf("Case Study") !== -1) {
      return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">${esc(status)}</span>`;
    }
    if (status.indexOf("In Progress") !== -1) {
      return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-sky-500/15 text-sky-300 border border-sky-500/30">${esc(status)}</span>`;
    }
    return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">${esc(status)}</span>`;
  }

  // Inline SVG Architecture Diagrams for Case Studies
  function renderArchitectureDiagram(type) {
    if (type === "virtualbox-lab") {
      return `
        <div class="bg-slate-950/90 border border-slate-800 rounded-lg p-4 overflow-x-auto">
          <div class="text-xs font-mono text-slate-400 mb-2 flex items-center justify-between">
            <span>DIAGRAM: ISOLATED VIRTUALBOX HOST-ONLY LAB TOPOLOGY (16 GB RAM BUDGET)</span>
            <span class="text-emerald-400">No External Internet Egress</span>
          </div>
          <svg viewBox="0 0 760 190" class="w-full max-w-full h-auto" role="img" aria-label="VirtualBox Host-Only Network Topology Diagram">
            <rect x="8" y="8" width="744" height="174" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
            <text x="24" y="30" fill="#94a3b8" font-size="11" font-family="monospace">HOST: HP OMEN 16 (Windows 11, Core i5, 16 GB RAM, 512 GB SSD) — Oracle VirtualBox</text>
            <rect x="24" y="45" width="215" height="120" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="38" y="68" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace">Kali Linux Analyst VM</text>
            <text x="38" y="88" fill="#e2e8f0" font-size="10" font-family="monospace">lo: 127.0.0.1/8 (Loopback)</text>
            <text x="38" y="104" fill="#e2e8f0" font-size="10" font-family="monospace">eth0: 192.0.2.102/24*</text>
            <text x="38" y="122" fill="#94a3b8" font-size="10" font-family="monospace">Tools: Nmap, Wireshark,</text>
            <text x="38" y="136" fill="#94a3b8" font-size="10" font-family="monospace">tcpdump, msfconsole, UFW</text>
            <text x="38" y="154" fill="#64748b" font-size="9" font-family="monospace">*Hist. lab: 192.168.56.102/24</text>

            <rect x="285" y="65" width="190" height="80" rx="8" fill="#0f172a" stroke="#10b981" stroke-dasharray="4 3" stroke-width="1.5"/>
            <text x="303" y="92" fill="#10b981" font-size="11" font-weight="bold" font-family="monospace">Host-Only Virtual Switch</text>
            <text x="303" y="110" fill="#cbd5e1" font-size="10" font-family="monospace">Isolated Private Subnet</text>
            <text x="303" y="126" fill="#94a3b8" font-size="9" font-family="monospace">Authorised Lab Traffic Only</text>

            <line x1="239" y1="105" x2="285" y2="105" stroke="#38bdf8" stroke-width="2"/>
            <line x1="475" y1="105" x2="521" y2="105" stroke="#f59e0b" stroke-width="2"/>

            <rect x="521" y="45" width="215" height="120" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="535" y="68" fill="#fbbf24" font-size="12" font-weight="bold" font-family="monospace">Vulnerable Target VM</text>
            <text x="535" y="88" fill="#e2e8f0" font-size="10" font-family="monospace">Metasploitable2 / DVWA</text>
            <text x="535" y="104" fill="#e2e8f0" font-size="10" font-family="monospace">eth0: 192.0.2.101/24*</text>
            <text x="535" y="122" fill="#94a3b8" font-size="10" font-family="monospace">Services: vsFTPd 2.3.4,</text>
            <text x="535" y="136" fill="#94a3b8" font-size="10" font-family="monospace">Apache / PHP / MySQL</text>
            <text x="535" y="154" fill="#64748b" font-size="9" font-family="monospace">*Hist. lab: 192.168.56.101/24</text>
          </svg>
        </div>
      `;
    }
    if (type === "windows-driver-stack") {
      return `
        <div class="bg-slate-950/90 border border-slate-800 rounded-lg p-4 overflow-x-auto">
          <div class="text-xs font-mono text-slate-400 mb-2 flex items-center justify-between">
            <span>DIAGRAM: WINDOWS 11 ADAPTER CLASS CONFIGURATION &amp; DIAGNOSTIC FLOW</span>
            <span class="text-amber-400">Outcome: Unverified in Available Notes</span>
          </div>
          <svg viewBox="0 0 760 185" class="w-full max-w-full h-auto" role="img" aria-label="Windows 11 Network Driver Troubleshooting Flow Diagram">
            <rect x="8" y="8" width="744" height="169" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
            <rect x="22" y="26" width="220" height="132" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="34" y="48" fill="#fbbf24" font-size="11" font-weight="bold" font-family="monospace">1. Adapter Symptoms</text>
            <text x="34" y="68" fill="#e2e8f0" font-size="10" font-family="monospace">• Intel Wi-Fi 6E AX211 (24.70 err)</text>
            <text x="34" y="85" fill="#e2e8f0" font-size="10" font-family="monospace">• Realtek GbE (rtcx21x64.inf)</text>
            <text x="34" y="102" fill="#e2e8f0" font-size="10" font-family="monospace">• USB RNDIS Internet Sharing</text>
            <text x="34" y="122" fill="#fca5a5" font-size="10" font-weight="bold" font-family="monospace">Status: Code 56</text>
            <text x="34" y="138" fill="#fca5a5" font-size="9" font-family="monospace">CM_PROB_NEED_CLASS_CONFIG</text>

            <line x1="242" y1="92" x2="274" y2="92" stroke="#94a3b8" stroke-width="2"/>

            <rect x="274" y="26" width="220" height="132" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="286" y="48" fill="#38bdf8" font-size="11" font-weight="bold" font-family="monospace">2. Services &amp; Store Checks</text>
            <text x="286" y="68" fill="#86efac" font-size="10" font-family="monospace">✓ NlaSvc: Running</text>
            <text x="286" y="85" fill="#86efac" font-size="10" font-family="monospace">✓ DeviceInstall: Running</text>
            <text x="286" y="102" fill="#86efac" font-size="10" font-family="monospace">✓ NetSetupSvc: Running</text>
            <text x="286" y="122" fill="#cbd5e1" font-size="10" font-family="monospace">• pnputil: Multiple netwtw08</text>
            <text x="286" y="138" fill="#cbd5e1" font-size="10" font-family="monospace">• Tried netcfg -d / Winsock reset</text>

            <line x1="494" y1="92" x2="526" y2="92" stroke="#94a3b8" stroke-width="2"/>

            <rect x="526" y="26" width="212" height="132" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="1.5"/>
            <text x="538" y="48" fill="#a5b4fc" font-size="11" font-weight="bold" font-family="monospace">3. DISM Image Checks</text>
            <text x="538" y="68" fill="#e2e8f0" font-size="10" font-family="monospace">• CheckHealth / ScanHealth:</text>
            <text x="538" y="83" fill="#fde047" font-size="10" font-family="monospace">  Component store repairable</text>
            <text x="538" y="103" fill="#e2e8f0" font-size="10" font-family="monospace">• RestoreHealth Result:</text>
            <text x="538" y="118" fill="#fca5a5" font-size="10" font-weight="bold" font-family="monospace">  Failed: Error 0x800f0915</text>
            <text x="538" y="138" fill="#94a3b8" font-size="9" font-family="monospace">  (Offline WIM source needed)</text>
          </svg>
        </div>
      `;
    }
    if (type === "dvwa-web-flow") {
      return `
        <div class="bg-slate-950/90 border border-slate-800 rounded-lg p-4 overflow-x-auto">
          <div class="text-xs font-mono text-slate-400 mb-2">
            DIAGRAM: VULNERABLE INPUT HANDLING VS. DEFENSIVE REMEDIATION (DVWA STUDY)
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
            <div class="p-3 rounded border border-rose-500/30 bg-rose-950/20">
              <div class="text-rose-300 font-semibold mb-1">Vulnerable Pattern (Concept Studied)</div>
              <div class="text-slate-300">HTTP Input -> Raw String Concatenation -> SQL Query Structure Altered (SQLi) OR Unencoded HTML Output -> Browser Script Execution (XSS)</div>
            </div>
            <div class="p-3 rounded border border-emerald-500/30 bg-emerald-950/20">
              <div class="text-emerald-300 font-semibold mb-1">Defensive Pattern (Remediation)</div>
              <div class="text-slate-300">HTTP Input -> Parameterised Prepared Statement (Data Separated from Code) + Context-Aware Output Encoding &amp; CSP</div>
            </div>
          </div>
        </div>
      `;
    }
    return `
      <div class="bg-slate-950/90 border border-slate-800 rounded-lg p-4 overflow-x-auto">
        <div class="text-xs font-mono text-slate-400 mb-2">
          DIAGRAM: PYTHON + MYSQL PRACTICE INTEGRATION (FICTIONAL SAMPLE SCHEMA a01.the)
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
          <div class="p-3 rounded border border-sky-500/30 bg-slate-900">
            <div class="text-sky-300 font-semibold">1. Python 3 Script</div>
            <div class="text-slate-400 mt-1">Variables, loops, functions, OOP &amp; <code>mysql.connector</code></div>
          </div>
          <div class="p-3 rounded border border-indigo-500/30 bg-slate-900">
            <div class="text-indigo-300 font-semibold">2. Parameterised Cursor</div>
            <div class="text-slate-400 mt-1"><code>cursor.execute(sql, params)</code> connecting locally</div>
          </div>
          <div class="p-3 rounded border border-emerald-500/30 bg-slate-900">
            <div class="text-emerald-300 font-semibold">3. MySQL Schema <code>a01.the</code></div>
            <div class="text-slate-400 mt-1">Columns: <code>id, name, city, phone, email</code> (Fictional rows only)</div>
          </div>
        </div>
      </div>
    `;
  }

  // Generate Markdown export for any Case Study
  function buildCaseStudyMarkdown(proj) {
    const lines = [
      `# ${proj.title}`,
      `- **Category**: ${proj.category} (${proj.secondaryCategories.join(", ")})`,
      `- **Status**: ${proj.status}`,
      `- **Verification Note**: ${proj.honestBadge}`,
      `- **Created / Updated**: ${proj.createdDate} / ${proj.updatedDate}`,
      ``,
      `## 1. Overview & Problem Statement`,
      proj.overview,
      ``,
      `## 2. Learning Objectives & Authorised Scope`,
      ...proj.objectivesAndScope.map(function (o) { return `- ${o}`; }),
      ``,
      `## 3. Lab Environment & Architecture`,
      `- **Host**: ${proj.labEnvironment.host}`,
      `- **Network Mode**: ${proj.labEnvironment.networkMode}`,
      `- **Context / Sanitisation Note**: ${proj.labEnvironment.addressNote}`,
      ``,
      `## 4. Tools Actually Used`,
      ...proj.toolsUsed.map(function (t) { return `- ${t}`; }),
      ``,
      `## 5. Installation & Configuration`,
      ...proj.configurationSteps.map(function (c) { return `- ${c}`; }),
      ``,
      `## 6. Methodology & Workflow`,
      ...proj.methodology.map(function (m) { return `- ${m}`; }),
      ``,
      `## 7. Test Scenarios & Recorded Observations`,
      ...proj.testScenarios.map(function (ts) {
        return `### ${ts.scenario}\n\`\`\`\n${ts.command}\n\`\`\`\n- **Expected**: ${ts.expected}\n- **Observed**: ${ts.observed}`;
      }),
      ``,
      `## 8. Evidence Status`,
      ...proj.evidenceList.map(function (ev) { return `- **${ev.item}**: ${ev.status}`; }),
      ``,
      `## 9. Findings & Analysis`,
      proj.findingsAndAnalysis,
      ``,
      `## 10. Detection Logic & Technical Explanation`,
      proj.detectionAndTechnical,
      ``,
      `## 11. Limitations & False Positives`,
      proj.limitationsAndFalsePositives,
      ``,
      `## 12. Remediation & Defensive Recommendations`,
      ...proj.remediation.map(function (r) { return `- ${r}`; }),
      ``,
      `## 13. Challenges & Troubleshooting`,
      proj.challengesAndTroubleshooting,
      ``,
      `## 14. Lessons Learned`,
      ...proj.lessonsLearned.map(function (l) { return `- ${l}`; }),
      ``,
      `## 15. References`,
      ...proj.references.map(function (ref) { return `- ${ref}`; }),
      ``,
      `## 16. Repository & Report Links`,
      `- **Repository**: ${proj.repoLink}`,
      `- **Report**: ${proj.reportLink}`
    ];
    return lines.join("\n");
  }

  // Render Top Header & Navigation
  function renderHeader() {
    const navItems = [
      { id: "all", label: "Full Portfolio" },
      { id: "about", label: "About & Lab" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects & Case Studies" },
      { id: "tools-docs", label: "9 Security Tools" },
      { id: "cryptography", label: "Cryptography (CNS)" },
      { id: "ai-ml", label: "AI & ML" },
      { id: "tech-hubs", label: "Python / SQL / Linux / Net" },
      { id: "academic", label: "Academic Foundation (13)" },
      { id: "roadmap", label: "24-Item Roadmap" },
      { id: "notes", label: "Study Notes" },
      { id: "journey", label: "Journey & Exploring" },
      { id: "github", label: "GitHub & Contact" },
      { id: "guide", label: "Beginner Walkthrough" }
    ];

    const navHtml = navItems
      .map(function (item) {
        const active = state.activeView === item.id;
        return `
          <button
            type="button"
            data-action="switch-view"
            data-view="${item.id}"
            class="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
              active
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/40"
                : "text-slate-300 hover:text-white hover:bg-slate-800/70"
            }"
          >
            ${esc(item.label)}
          </button>
        `;
      })
      .join("");

    const headerEl = document.getElementById("site-header");
    if (!headerEl) return;

    headerEl.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 gap-3">
          <div class="flex items-center gap-3 min-w-0">
            <button
              type="button"
              data-action="switch-view"
              data-view="all"
              class="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div class="w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-500/40 flex items-center justify-center text-sky-400 font-mono font-bold text-sm shrink-0">
                SOC
              </div>
              <div class="truncate">
                <div class="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors truncate">
                  ${esc(DATA.profile.name)}
                </div>
                <div class="text-[11px] text-slate-400 font-mono truncate">
                  SOC &amp; Security Operations Portfolio
                </div>
              </div>
            </button>
          </div>

          <!-- Desktop Nav -->
          <nav aria-label="Main Navigation" class="hidden xl:flex items-center gap-1 overflow-x-auto py-1">
            ${navHtml}
          </nav>

          <div class="flex items-center gap-2 shrink-0">
            <button
              type="button"
              data-action="open-customizer"
              class="px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition-colors"
              title="Test filling in your real name, GitHub URL, or email"
            >
              Customize My Details
            </button>
            <button
              type="button"
              data-action="toggle-mobile-menu"
              aria-expanded="${state.mobileMenuOpen ? "true" : "false"}"
              aria-label="Toggle navigation menu"
              class="xl:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${
                  state.mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile / Tablet Navigation Drawer -->
        <div class="${state.mobileMenuOpen ? "block" : "hidden"} xl:hidden pb-4 pt-2 border-t border-slate-800/80">
          <div class="flex flex-wrap gap-1.5">
            ${navHtml}
          </div>
        </div>
      </div>
    `;
  }

  // Render Section: Beginner Interactive Step-by-Step Guide Banner
  function renderBeginnerWalkthroughSection() {
    const steps = DATA.beginnerWalkthroughSteps;
    const current = steps[state.beginnerStepIndex] || steps[0];

    return `
      <section id="section-guide" aria-labelledby="heading-guide" class="mb-12">
        <div class="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/30 p-5 sm:p-6 shadow-lg">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono bg-sky-500/15 text-sky-300 border border-sky-500/30 mb-2">
                <span>STEP-BY-STEP BEGINNER APP WALKTHROUGH</span>
                <span>•</span>
                <span>Step ${current.stepNumber} of ${steps.length}</span>
              </div>
              <h2 id="heading-guide" class="text-lg sm:text-xl font-bold text-white">
                ${esc(current.title)}
              </h2>
            </div>
            <div class="flex items-center gap-1.5 flex-wrap">
              ${steps
                .map(function (s, idx) {
                  const isCurr = idx === state.beginnerStepIndex;
                  return `
                    <button
                      type="button"
                      data-action="select-guide-step"
                      data-step-index="${idx}"
                      class="px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                        isCurr
                          ? "bg-sky-500 text-slate-950 font-semibold"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }"
                    >
                      Step ${s.stepNumber}
                    </button>
                  `;
                })
                .join("")}
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div class="text-xs font-mono uppercase tracking-wider text-sky-400 mb-1">What This Part Does</div>
              <p class="text-sm text-slate-200 leading-relaxed">${esc(current.whatItDoes)}</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div class="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">Why It's Simple for a Beginner</div>
              <p class="text-sm text-slate-200 leading-relaxed">${esc(current.whyBeginnerFriendly)}</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <div class="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">Try It Right Now</div>
                <p class="text-sm text-slate-200 leading-relaxed">${esc(current.tryItNow)}</p>
              </div>
              <div class="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  data-action="prev-guide-step"
                  ${state.beginnerStepIndex === 0 ? "disabled" : ""}
                  class="px-3 py-1 rounded text-xs font-medium ${
                    state.beginnerStepIndex === 0
                      ? "text-slate-600 cursor-not-allowed"
                      : "text-slate-300 hover:text-white bg-slate-800"
                  }"
                >
                  ← Previous Step
                </button>
                <button
                  type="button"
                  data-action="next-guide-step"
                  ${state.beginnerStepIndex === steps.length - 1 ? "disabled" : ""}
                  class="px-3 py-1 rounded text-xs font-medium ${
                    state.beginnerStepIndex === steps.length - 1
                      ? "text-slate-600 cursor-not-allowed"
                      : "text-sky-300 hover:text-white bg-sky-500/20 border border-sky-500/30"
                  }"
                >
                  Next Step →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // Render Section: Hero / Home
  function renderHeroSection() {
    const p = DATA.profile;
    return `
      <section id="section-home" aria-labelledby="heading-hero" class="mb-14">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/75 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div class="max-w-4xl">
            <div class="flex flex-wrap items-center gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                ${esc(p.careerStage)}
              </span>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                ${esc(p.degree)} • ${esc(p.institution)}
              </span>
            </div>

            <h1 id="heading-hero" class="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              ${esc(p.name)}
            </h1>
            <p class="mt-2 text-lg sm:text-xl font-semibold text-sky-400">
              ${esc(p.headline)}
            </p>
            <p class="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              ${esc(p.subheadline)}
            </p>

            <!-- Target Roles Strip -->
            <div class="mt-6 pt-5 border-t border-slate-800/90 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Primary Target Roles</div>
                <div class="flex flex-wrap gap-1.5">
                  ${p.targetRolesPrimary
                    .map(function (r) {
                      return `<span class="px-2.5 py-1 rounded-md text-xs font-medium bg-sky-500/15 text-sky-200 border border-sky-500/30">${esc(r)}</span>`;
                    })
                    .join("")}
                </div>
              </div>
              <div>
                <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Secondary / Related Interest</div>
                <div class="flex flex-wrap gap-1.5">
                  ${p.targetRolesSecondary
                    .map(function (r) {
                      return `<span class="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-500/15 text-indigo-200 border border-indigo-500/30">${esc(r)}</span>`;
                    })
                    .join("")}
                </div>
              </div>
            </div>

            <!-- Honest Portfolio Pledge Banner -->
            <div class="mt-6 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
              <span class="text-sky-400 font-mono font-bold shrink-0 mt-0.5">[EVIDENCE-LED POLICY]</span>
              <span>
                This portfolio strictly separates <strong>Hands-on Practice</strong>, <strong>Currently Learning</strong>, <strong>Concepts Studied</strong>, and <strong>Planned Roadmap Ideas</strong>. No metrics, exploitation outcomes, or dates are invented; items awaiting screenshots or links are explicitly marked <code>Evidence pending</code> or <code>To be confirmed</code>.
              </span>
            </div>

            <!-- Calls to Action -->
            <div class="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                data-action="switch-view"
                data-view="projects"
                class="px-4 py-2.5 rounded-xl text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors"
              >
                Inspect Hands-On Case Studies (6)
              </button>
              <button
                type="button"
                data-action="switch-view"
                data-view="roadmap"
                class="px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
              >
                Explore 24-Item SOC Roadmap
              </button>
              <button
                type="button"
                data-action="switch-view"
                data-view="about"
                class="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-800 transition-colors"
              >
                About &amp; Home Lab Specs
              </button>
              <button
                type="button"
                data-action="switch-view"
                data-view="github"
                class="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-800 transition-colors"
              >
                GitHub Standards &amp; Contact
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // Render Section: About & Lab Environment
  function renderAboutAndLabSection() {
    const p = DATA.profile;
    const lab = DATA.labEnvironment;

    return `
      <section id="section-about" aria-labelledby="heading-about" class="mb-14">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-sky-400">Section 01 • Background &amp; Lab Infrastructure</div>
            <h2 id="heading-about" class="text-2xl font-bold text-white mt-1">About Me &amp; Personal Lab Environment</h2>
          </div>
          <span class="text-xs font-mono text-slate-400">Pacific School of Engineering (GTU Context)</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Left: Narrative & Career Direction -->
          <div class="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between">
            <div>
              <h3 class="text-lg font-semibold text-white mb-3">Transitioning from Computer Engineering into Security Operations</h3>
              <p class="text-sm text-slate-300 leading-relaxed mb-4">
                I am a Computer Engineering student at <strong>Pacific School of Engineering</strong> (GTU context; seventh-semester context documented in my internship report) building practical foundations for an entry-level role as a <strong>SOC Analyst</strong>, <strong>Cybersecurity Analyst</strong>, or <strong>Security Operations Analyst</strong>, alongside a strong interest in entry-level <strong>Vulnerability Assessment and Penetration Testing (VAPT)</strong>.
              </p>
              <p class="text-sm text-slate-300 leading-relaxed mb-4">
                My learning approach focuses on understanding how systems actually behave underneath the surface: inspecting network interfaces and packets in Kali Linux, testing intentionally vulnerable targets (Metasploitable2 and DVWA) inside isolated VirtualBox host-only networks, troubleshooting real Windows 11 driver and network stack failures, and building growing programming and database query skills in Python and MySQL.
              </p>
              <p class="text-sm text-slate-300 leading-relaxed">
                Rather than presenting myself as a seasoned expert, I use this portfolio to document what I have genuinely practised, the exact errors I encountered, what I learned from troubleshooting them, and the structured 24-project roadmap I am following next.
              </p>
            </div>

            <div class="mt-6 pt-5 border-t border-slate-800">
              <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">Longer-Term Technical Interests</div>
              <div class="flex flex-wrap gap-1.5">
                ${p.longTermInterests
                  .map(function (interest) {
                    return `<span class="px-2.5 py-1 rounded-md text-xs bg-slate-800/90 text-slate-200 border border-slate-700/80">${esc(interest)}</span>`;
                  })
                  .join("")}
              </div>
            </div>
          </div>

          <!-- Right: Workstation & VirtualBox Lab Card -->
          <div class="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-white">Workstation &amp; Virtual Lab Specs</h3>
              <span class="px-2.5 py-0.5 rounded text-xs font-mono bg-sky-500/15 text-sky-300 border border-sky-500/30">16 GB Host Budget</span>
            </div>

            <div class="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 mb-4">
              <div class="text-xs font-mono text-slate-400 uppercase mb-2">Primary Host Laptop</div>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <div><span class="text-slate-400">System:</span> <span class="text-white font-medium">${esc(lab.hostHardware.model)}</span></div>
                <div><span class="text-slate-400">CPU:</span> <span class="text-white font-medium">${esc(lab.hostHardware.cpu)}</span></div>
                <div><span class="text-slate-400">Memory:</span> <span class="text-emerald-300 font-mono font-medium">${esc(lab.hostHardware.ram)}</span></div>
                <div><span class="text-slate-400">Storage:</span> <span class="text-white font-medium">${esc(lab.hostHardware.storage)}</span></div>
                <div><span class="text-slate-400">Graphics:</span> <span class="text-white font-medium">${esc(lab.hostHardware.gpu)}</span></div>
                <div><span class="text-slate-400">Host OS:</span> <span class="text-white font-medium">${esc(lab.hostHardware.os)}</span></div>
              </div>
            </div>

            <div class="space-y-2.5 mb-4">
              ${lab.virtualizationAndTargets
                .map(function (vm) {
                  return `
                    <div class="p-3 rounded-lg bg-slate-950/50 border border-slate-800/80">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-semibold text-white">${esc(vm.name)}</span>
                        <span class="text-[11px] font-mono text-sky-400">${esc(vm.role)}</span>
                      </div>
                      <p class="text-xs text-slate-400 mt-1">${esc(vm.detail)}</p>
                    </div>
                  `;
                })
                .join("")}
            </div>

            <div class="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200/90 space-y-1.5">
              <div class="font-semibold text-amber-300 font-mono">Lab Networking &amp; 16 GB RAM Planning Note</div>
              <p>${esc(lab.networkingNote.ramConstraintStrategy)}</p>
              <p class="text-[11px] text-amber-200/75">${esc(lab.networkingNote.ipAddressDisclaimer)}</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // Render Section: Skills (4 Honest States, Zero Percentage Bars)
  function renderSkillsSection() {
    const statesOrder = ["All", "Hands-on Practice", "Currently Learning", "Concepts Studied", "Planned to Explore"];
    const categoriesOrder = ["All", "Security Operations", "Security & VAPT", "Networking & Lab", "Linux & OS", "Programming", "Databases & SQL", "Cloud & Containers"];

    const filteredSkills = DATA.skills.filter(function (s) {
      const matchState = state.skillStateFilter === "All" || s.state === state.skillStateFilter;
      const matchCat = state.skillCategoryFilter === "All" || s.category === state.skillCategoryFilter;
      const q = state.skillSearch.trim().toLowerCase();
      const matchSearch =
        !q ||
        s.name.toLowerCase().indexOf(q) !== -1 ||
        s.context.toLowerCase().indexOf(q) !== -1 ||
        s.category.toLowerCase().indexOf(q) !== -1;
      return matchState && matchCat && matchSearch;
    });

    // Counts per state
    const counts = {
      "Hands-on Practice": DATA.skills.filter(function (s) { return s.state === "Hands-on Practice"; }).length,
      "Currently Learning": DATA.skills.filter(function (s) { return s.state === "Currently Learning"; }).length,
      "Concepts Studied": DATA.skills.filter(function (s) { return s.state === "Concepts Studied"; }).length,
      "Planned to Explore": DATA.skills.filter(function (s) { return s.state === "Planned to Explore"; }).length
    };

    return `
      <section id="section-skills" aria-labelledby="heading-skills" class="mb-14">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-sky-400">Section 02 • Honest Skill Matrix</div>
            <h2 id="heading-skills" class="text-2xl font-bold text-white mt-1">Tools, Technologies &amp; Concepts by Readiness State</h2>
          </div>
          <span class="text-xs font-mono text-slate-400">No arbitrary percentage bars • Grouped by actual exposure</span>
        </div>

        <!-- Summary State Cards -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <button
            type="button"
            data-action="filter-skill-state"
            data-state="Hands-on Practice"
            class="p-4 rounded-xl border text-left transition-all ${
              state.skillStateFilter === "Hands-on Practice"
                ? "border-emerald-400 bg-emerald-950/30"
                : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
            }"
          >
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono text-emerald-400">Hands-on Practice</span>
              <span class="text-lg font-bold text-white font-mono">${counts["Hands-on Practice"]}</span>
            </div>
            <p class="text-xs text-slate-400 mt-1">Used directly in local VM labs, SQL workbench, or host diagnostics</p>
          </button>

          <button
            type="button"
            data-action="filter-skill-state"
            data-state="Currently Learning"
            class="p-4 rounded-xl border text-left transition-all ${
              state.skillStateFilter === "Currently Learning"
                ? "border-sky-400 bg-sky-950/30"
                : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
            }"
          >
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono text-sky-400">Currently Learning</span>
              <span class="text-lg font-bold text-white font-mono">${counts["Currently Learning"]}</span>
            </div>
            <p class="text-xs text-slate-400 mt-1">Active daily/weekly practice in Python, SQL, DVWA, and Linux</p>
          </button>

          <button
            type="button"
            data-action="filter-skill-state"
            data-state="Concepts Studied"
            class="p-4 rounded-xl border text-left transition-all ${
              state.skillStateFilter === "Concepts Studied"
                ? "border-indigo-400 bg-indigo-950/30"
                : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
            }"
          >
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono text-indigo-400">Concepts Studied</span>
              <span class="text-lg font-bold text-white font-mono">${counts["Concepts Studied"]}</span>
            </div>
            <p class="text-xs text-slate-400 mt-1">Covered in internship &amp; study notes; transitioning to lab practice</p>
          </button>

          <button
            type="button"
            data-action="filter-skill-state"
            data-state="Planned to Explore"
            class="p-4 rounded-xl border text-left transition-all ${
              state.skillStateFilter === "Planned to Explore"
                ? "border-amber-400 bg-amber-950/30"
                : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
            }"
          >
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono text-amber-400">Planned to Explore</span>
              <span class="text-lg font-bold text-white font-mono">${counts["Planned to Explore"]}</span>
            </div>
            <p class="text-xs text-slate-400 mt-1">Future roadmap tools (Wazuh, Splunk, Sysmon, Volatility, etc.)</p>
          </button>
        </div>

        <!-- Filter Controls -->
        <div class="p-4 rounded-xl border border-slate-800 bg-slate-900/50 mb-6 space-y-3">
          <div class="flex flex-col md:flex-row gap-3 justify-between">
            <div class="flex flex-wrap gap-1.5 items-center">
              <span class="text-xs font-mono text-slate-400 mr-1">State:</span>
              ${statesOrder
                .map(function (st) {
                  const active = state.skillStateFilter === st;
                  return `
                    <button
                      type="button"
                      data-action="filter-skill-state"
                      data-state="${esc(st)}"
                      class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                        active
                          ? "bg-sky-500 text-slate-950 font-semibold"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }"
                    >
                      ${esc(st)}
                    </button>
                  `;
                })
                .join("")}
            </div>

            <div class="w-full md:w-64">
              <label for="skill-search-input" class="sr-only">Search skills or tools</label>
              <input
                id="skill-search-input"
                type="text"
                value="${esc(state.skillSearch)}"
                placeholder="Filter skills (e.g. Nmap, SQL, UFW)..."
                class="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500"
              />
            </div>
          </div>

          <div class="flex flex-wrap gap-1.5 items-center pt-2 border-t border-slate-800/80">
            <span class="text-xs font-mono text-slate-400 mr-1">Domain:</span>
            ${categoriesOrder
              .map(function (cat) {
                const active = state.skillCategoryFilter === cat;
                return `
                  <button
                    type="button"
                    data-action="filter-skill-category"
                    data-category="${esc(cat)}"
                    class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                      active
                        ? "bg-indigo-500/30 text-indigo-200 border border-indigo-400/50"
                        : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
                    }"
                  >
                    ${esc(cat)}
                  </button>
                `;
              })
              .join("")}
          </div>
        </div>

        <!-- Skill Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${
            filteredSkills.length === 0
              ? `<div class="col-span-full p-8 rounded-xl border border-slate-800 bg-slate-900/40 text-center text-sm text-slate-400">
                   No skills match the current filter. Click <button type="button" data-action="reset-skill-filters" class="text-sky-400 underline">Reset Filters</button>.
                 </div>`
              : filteredSkills
                  .map(function (item) {
                    return `
                      <div class="portfolio-card rounded-xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col justify-between">
                        <div>
                          <div class="flex items-start justify-between gap-2 mb-2">
                            <span class="text-[11px] font-mono text-slate-400">${esc(item.category)}</span>
                            ${getSkillStateBadge(item.state)}
                          </div>
                          <h3 class="text-sm font-semibold text-white">${esc(item.name)}</h3>
                          <p class="text-xs text-slate-300 mt-2 leading-relaxed">${esc(item.context)}</p>
                        </div>
                      </div>
                    `;
                  })
                  .join("")
          }
        </div>
      </section>
    `;
  }

  // Render Section: Hands-On Projects & Case Studies (Separated from Planned Roadmap)
  function renderProjectsAndCaseStudiesSection() {
    const categories = ["All", "SOC", "Network Security", "Web Security", "Python", "SQL", "VAPT", "Automation"];
    const statuses = ["All", "In Progress", "Practice / In Progress", "Case Study — Outcome Unverified", "Learning / Practice", "Learning"];

    const filteredProjects = DATA.projects.filter(function (proj) {
      const matchCat =
        state.projectCategoryFilter === "All" ||
        proj.category === state.projectCategoryFilter ||
        proj.secondaryCategories.indexOf(state.projectCategoryFilter) !== -1;
      const matchStatus =
        state.projectStatusFilter === "All" || proj.status === state.projectStatusFilter;
      const q = state.projectSearch.trim().toLowerCase();
      const matchSearch =
        !q ||
        proj.title.toLowerCase().indexOf(q) !== -1 ||
        proj.summary.toLowerCase().indexOf(q) !== -1 ||
        proj.toolsUsed.join(" ").toLowerCase().indexOf(q) !== -1;
      return matchCat && matchStatus && matchSearch;
    });

    return `
      <section id="section-projects" aria-labelledby="heading-projects" class="mb-14">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-sky-400">Section 03 • Hands-On Labs, Troubleshooting &amp; Case Studies</div>
            <h2 id="heading-projects" class="text-2xl font-bold text-white mt-1">Documented Practice &amp; Technical Case Studies</h2>
          </div>
          <span class="text-xs font-mono text-emerald-400">Strictly separated from the 24 Planned Roadmap ideas</span>
        </div>

        <!-- Filters -->
        <div class="p-4 rounded-xl border border-slate-800 bg-slate-900/50 mb-6 space-y-3">
          <div class="flex flex-col md:flex-row gap-3 justify-between">
            <div class="flex flex-wrap gap-1.5 items-center">
              <span class="text-xs font-mono text-slate-400 mr-1">Category:</span>
              ${categories
                .map(function (c) {
                  const active = state.projectCategoryFilter === c;
                  return `
                    <button
                      type="button"
                      data-action="filter-project-category"
                      data-category="${esc(c)}"
                      class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                        active
                          ? "bg-sky-500 text-slate-950 font-semibold"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }"
                    >
                      ${esc(c)}
                    </button>
                  `;
                })
                .join("")}
            </div>

            <div class="w-full md:w-64">
              <label for="project-search-input" class="sr-only">Search case studies</label>
              <input
                id="project-search-input"
                type="text"
                value="${esc(state.projectSearch)}"
                placeholder="Search labs (e.g. Code 56, vsftpd, SQL)..."
                class="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500"
              />
            </div>
          </div>

          <div class="flex flex-wrap gap-1.5 items-center pt-2 border-t border-slate-800/80">
            <span class="text-xs font-mono text-slate-400 mr-1">Status:</span>
            ${statuses
              .map(function (st) {
                const active = state.projectStatusFilter === st;
                return `
                  <button
                    type="button"
                    data-action="filter-project-status"
                    data-status="${esc(st)}"
                    class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                      active
                        ? "bg-indigo-500/30 text-indigo-200 border border-indigo-400/50"
                        : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
                    }"
                  >
                    ${esc(st)}
                  </button>
                `;
              })
              .join("")}
          </div>
        </div>

        <!-- Case Studies Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          ${
            filteredProjects.length === 0
              ? `<div class="col-span-full p-8 rounded-xl border border-slate-800 bg-slate-900/40 text-center text-sm text-slate-400">
                   No projects or case studies match that filter. <button type="button" data-action="reset-project-filters" class="text-sky-400 underline">Reset Filters</button>
                 </div>`
              : filteredProjects
                  .map(function (proj) {
                    return `
                      <article class="portfolio-card rounded-2xl border border-slate-800 bg-slate-900/70 p-6 flex flex-col justify-between">
                        <div>
                          <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <div class="flex flex-wrap items-center gap-1.5">
                              <span class="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-800 text-sky-300 border border-slate-700">${esc(proj.category)}</span>
                              ${proj.secondaryCategories
                                .map(function (sc) {
                                  return `<span class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800">${esc(sc)}</span>`;
                                })
                                .join("")}
                            </div>
                            ${getProjectStatusBadge(proj.status)}
                          </div>

                          <h3 class="text-lg font-bold text-white leading-snug">
                            ${esc(proj.title)}
                          </h3>

                          <div class="mt-2 px-3 py-1.5 rounded-lg bg-slate-950/90 border border-slate-800 text-xs font-mono text-amber-300">
                            Accuracy Note: ${esc(proj.honestBadge)}
                          </div>

                          <p class="mt-3 text-sm text-slate-300 leading-relaxed">
                            ${esc(proj.summary)}
                          </p>

                          <!-- Key Recorded Scenario Preview -->
                          <div class="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800/90">
                            <div class="text-[11px] font-mono text-slate-400 uppercase mb-1">Recorded Command / Check Highlight</div>
                            <pre class="text-xs font-mono text-sky-300 overflow-x-auto whitespace-pre-wrap">${esc(proj.testScenarios[0].command)}</pre>
                            <div class="text-xs text-slate-300 mt-1.5">
                              <span class="text-slate-400 font-medium">Observed:</span> ${esc(proj.testScenarios[0].observed)}
                            </div>
                          </div>

                          <!-- Tools -->
                          <div class="mt-4 flex flex-wrap gap-1.5">
                            ${proj.toolsUsed
                              .map(function (tool) {
                                return `<span class="px-2 py-0.5 rounded text-[11px] bg-slate-800/80 text-slate-300">${esc(tool)}</span>`;
                              })
                              .join("")}
                          </div>
                        </div>

                        <div class="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                          <div class="text-xs font-mono text-slate-400">
                            Repo: <span class="text-slate-300">${esc(proj.repoLink)}</span> • Date: <span class="text-slate-300">${esc(proj.updatedDate)}</span>
                          </div>
                          <div class="flex items-center gap-2">
                            <button
                              type="button"
                              data-action="copy-case-markdown"
                              data-project-id="${esc(proj.id)}"
                              class="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                            >
                              Copy MD
                            </button>
                            <button
                              type="button"
                              data-action="open-case-study"
                              data-project-id="${esc(proj.id)}"
                              class="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors"
                            >
                              Inspect Full Case Study (16 Sections) →
                            </button>
                          </div>
                        </div>
                      </article>
                    `;
                  })
                  .join("")
          }
        </div>
      </section>
    `;
  }

  // Render Section: 24-Item Long-Term Project Roadmap & 8-Step SOC Priority Order
  function renderRoadmapSection() {
    const domains = [
      "All",
      "SOC and Security Operations",
      "Threat Hunting and Detection Engineering",
      "DFIR",
      "VAPT",
      "Cloud",
      "Specialized"
    ];

    const filteredRoadmap = DATA.roadmap.filter(function (item) {
      const matchDomain = state.roadmapDomainFilter === "All" || item.domain === state.roadmapDomainFilter;
      const matchSocPriority = !state.roadmapSocPriorityOnly || item.socOrder !== null;
      const q = state.roadmapSearch.trim().toLowerCase();
      const matchSearch =
        !q ||
        item.title.toLowerCase().indexOf(q) !== -1 ||
        item.objective.toLowerCase().indexOf(q) !== -1 ||
        item.tools.join(" ").toLowerCase().indexOf(q) !== -1;
      return matchDomain && matchSocPriority && matchSearch;
    });

    if (state.roadmapSocPriorityOnly) {
      filteredRoadmap.sort(function (a, b) {
        return (a.socOrder || 99) - (b.socOrder || 99);
      });
    }

    return `
      <section id="section-roadmap" aria-labelledby="heading-roadmap" class="mb-14">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-amber-400">Section 04 • Long-Term Architecture &amp; Learning Plan</div>
            <h2 id="heading-roadmap" class="text-2xl font-bold text-white mt-1">24-Item Project Roadmap (All Status: Planned)</h2>
          </div>
          <span class="text-xs font-mono text-slate-400">Ideas for future implementation • Never mixed with completed work</span>
        </div>

        <!-- Suggested 8-Step SOC Build Order Banner -->
        <div class="rounded-2xl border border-sky-500/30 bg-slate-900/80 p-5 mb-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h3 class="text-base font-bold text-white">Suggested 8-Step SOC Priority Build Order</h3>
              <p class="text-xs text-slate-300">Recommended sequence to build core SOC, SIEM, endpoint detection, threat hunting, and forensics skills systematically on a 16 GB RAM host.</p>
            </div>
            <button
              type="button"
              data-action="toggle-soc-priority"
              class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
                state.roadmapSocPriorityOnly
                  ? "bg-sky-500 text-slate-950"
                  : "bg-sky-500/15 text-sky-300 border border-sky-500/30 hover:bg-sky-500/25"
              }"
            >
              ${state.roadmapSocPriorityOnly ? "Showing 8-Step SOC Priority Only (Click for All 24)" : "Filter by 8-Step SOC Priority Order"}
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            ${DATA.socBuildOrder
              .map(function (ord) {
                return `
                  <button
                    type="button"
                    data-action="focus-roadmap-item"
                    data-roadmap-id="${ord.roadmapId}"
                    class="p-3 rounded-xl bg-slate-950/90 border border-slate-800 hover:border-sky-500/50 text-left transition-colors"
                  >
                    <div class="flex items-center justify-between text-xs font-mono">
                      <span class="text-sky-400 font-bold">STEP 0${ord.step}</span>
                      <span class="text-slate-400">Roadmap #${ord.roadmapId}</span>
                    </div>
                    <div class="text-xs font-semibold text-white mt-1">${esc(ord.shortName)}</div>
                    <div class="text-[11px] text-slate-400 mt-0.5 truncate">${esc(ord.detail)}</div>
                  </button>
                `;
              })
              .join("")}
          </div>
        </div>

        <!-- Roadmap Filter Bar -->
        <div class="p-4 rounded-xl border border-slate-800 bg-slate-900/50 mb-6 space-y-3">
          <div class="flex flex-col md:flex-row gap-3 justify-between">
            <div class="flex flex-wrap gap-1.5 items-center">
              <span class="text-xs font-mono text-slate-400 mr-1">Domain:</span>
              ${domains
                .map(function (dom) {
                  const active = state.roadmapDomainFilter === dom;
                  return `
                    <button
                      type="button"
                      data-action="filter-roadmap-domain"
                      data-domain="${esc(dom)}"
                      class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                        active
                          ? "bg-amber-500 text-slate-950 font-semibold"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }"
                    >
                      ${esc(dom)}
                    </button>
                  `;
                })
                .join("")}
            </div>

            <div class="w-full md:w-64">
              <label for="roadmap-search-input" class="sr-only">Search 24 roadmap items</label>
              <input
                id="roadmap-search-input"
                type="text"
                value="${esc(state.roadmapSearch)}"
                placeholder="Search tool or idea (e.g. Wazuh, YARA)..."
                class="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500"
              />
            </div>
          </div>
        </div>

        <!-- 24 Roadmap Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${
            filteredRoadmap.length === 0
              ? `<div class="col-span-full p-8 rounded-xl border border-slate-800 bg-slate-900/40 text-center text-sm text-slate-400">
                   No roadmap items match your search. <button type="button" data-action="reset-roadmap-filters" class="text-sky-400 underline">Reset Roadmap Filters</button>
                 </div>`
              : filteredRoadmap
                  .map(function (item) {
                    const isExpanded = !!state.expandedRoadmapIds[item.id];
                    return `
                      <div id="roadmap-card-${item.id}" class="portfolio-card rounded-xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col justify-between">
                        <div>
                          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <div class="flex items-center gap-2">
                              <span class="px-2 py-0.5 rounded text-xs font-mono font-bold bg-slate-800 text-slate-300">#${item.id}</span>
                              <span class="text-xs font-mono text-slate-400">${esc(item.domain)}</span>
                            </div>
                            <div class="flex items-center gap-1.5">
                              ${
                                item.socOrder
                                  ? `<span class="px-2 py-0.5 rounded text-[11px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/40">SOC Track Step ${item.socOrder}</span>`
                                  : ""
                              }
                              <span class="px-2.5 py-0.5 rounded text-xs font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">Status: ${esc(item.status)}</span>
                            </div>
                          </div>

                          <h3 class="text-base font-bold text-white">${esc(item.title)}</h3>
                          <p class="text-xs text-slate-300 mt-1.5 leading-relaxed">${esc(item.objective)}</p>

                          <div class="mt-3 flex flex-wrap gap-1">
                            ${item.tools
                              .map(function (t) {
                                return `<span class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800">${esc(t)}</span>`;
                              })
                              .join("")}
                          </div>

                          ${
                            isExpanded
                              ? `
                                <div class="mt-4 pt-3 border-t border-slate-800 space-y-3 text-xs">
                                  <div>
                                    <div class="font-mono text-sky-400 uppercase text-[11px] mb-1">Prerequisites &amp; 16 GB Host Planning</div>
                                    <ul class="list-disc list-inside text-slate-300 space-y-0.5">
                                      ${item.prerequisites.map(function (pr) { return `<li>${esc(pr)}</li>`; }).join("")}
                                    </ul>
                                  </div>
                                  <div>
                                    <div class="font-mono text-emerald-400 uppercase text-[11px] mb-1">Expected Learning Outcomes</div>
                                    <ul class="list-disc list-inside text-slate-300 space-y-0.5">
                                      ${item.outcomes.map(function (out) { return `<li>${esc(out)}</li>`; }).join("")}
                                    </ul>
                                  </div>
                                  <div>
                                    <div class="font-mono text-amber-400 uppercase text-[11px] mb-1">Planned Evidence Checklist (To Be Added When Built)</div>
                                    <ul class="list-disc list-inside text-slate-300 space-y-0.5">
                                      ${item.evidenceChecklist.map(function (ev) { return `<li>${esc(ev)} — <span class="text-slate-400 font-mono">Planned</span></li>`; }).join("")}
                                    </ul>
                                  </div>
                                </div>
                              `
                              : ""
                          }
                        </div>

                        <div class="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                          <span class="text-[11px] font-mono text-slate-400">Repo: Not yet created (Planned)</span>
                          <button
                            type="button"
                            data-action="toggle-roadmap-expand"
                            data-roadmap-id="${item.id}"
                            class="text-xs font-medium text-sky-400 hover:text-sky-300"
                          >
                            ${isExpanded ? "Hide Prerequisites & Evidence Checklist ↑" : "View Prerequisites & Evidence Checklist ↓"}
                          </button>
                        </div>
                      </div>
                    `;
                  })
                  .join("")
          }
        </div>
      </section>
    `;
  }

  // Render Section: Study Notes & Write-Ups
  function renderStudyNotesSection() {
    const categories = ["All", "Security Fundamentals", "Identity & Access", "Networking", "Network & Data Protection", "Network Security", "Web Security & VAPT", "SOC Operations"];

    const filteredNotes = DATA.studyNotes.filter(function (n) {
      const matchCat = state.notesCategoryFilter === "All" || n.category === state.notesCategoryFilter;
      const q = state.notesSearch.trim().toLowerCase();
      const matchSearch =
        !q ||
        n.title.toLowerCase().indexOf(q) !== -1 ||
        n.summary.toLowerCase().indexOf(q) !== -1 ||
        n.keyPoints.join(" ").toLowerCase().indexOf(q) !== -1;
      return matchCat && matchSearch;
    });

    return `
      <section id="section-notes" aria-labelledby="heading-notes" class="mb-14">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-sky-400">Section 05 • Structured Concept Notes</div>
            <h2 id="heading-notes" class="text-2xl font-bold text-white mt-1">Study Notes &amp; Security Foundations</h2>
          </div>
          <span class="text-xs font-mono text-slate-400">Practical explanations connected to my lab &amp; troubleshooting experience</span>
        </div>

        <div class="p-4 rounded-xl border border-slate-800 bg-slate-900/50 mb-6 flex flex-col md:flex-row gap-3 justify-between">
          <div class="flex flex-wrap gap-1.5 items-center">
            ${categories
              .map(function (c) {
                const active = state.notesCategoryFilter === c;
                return `
                  <button
                    type="button"
                    data-action="filter-notes-category"
                    data-category="${esc(c)}"
                    class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                      active
                        ? "bg-sky-500 text-slate-950 font-semibold"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }"
                  >
                    ${esc(c)}
                  </button>
                `;
              })
              .join("")}
          </div>
          <div class="w-full md:w-64">
            <label for="notes-search-input" class="sr-only">Search study notes</label>
            <input
              id="notes-search-input"
              type="text"
              value="${esc(state.notesSearch)}"
              placeholder="Search notes (e.g. Zero Trust, DNS, MFA)..."
              class="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          ${filteredNotes
            .map(function (note) {
              return `
                <article class="portfolio-card rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 text-xs font-mono mb-2">
                      <span class="text-sky-400">${esc(note.category)}</span>
                      <span class="text-slate-400">${esc(note.sourceContext)}</span>
                    </div>
                    <h3 class="text-base font-bold text-white">${esc(note.title)}</h3>
                    <p class="text-xs text-slate-300 mt-1.5">${esc(note.summary)}</p>
                    <ul class="mt-3 space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                      ${note.keyPoints.map(function (kp) { return `<li class="leading-relaxed">${esc(kp)}</li>`; }).join("")}
                    </ul>
                  </div>
                  <div class="mt-4 pt-3 border-t border-slate-800/80 text-xs bg-slate-950/60 p-3 rounded-lg">
                    <span class="font-mono text-emerald-400 font-semibold">Lab / Practical Connection: </span>
                    <span class="text-slate-300">${esc(note.practicalExample)}</span>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  // Render Section: Internship & Learning Journey Timeline
  function renderJourneyAndInternshipSection() {
    const intern = DATA.internship;
    return `
      <section id="section-journey" aria-labelledby="heading-journey" class="mb-14">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-sky-400">Section 06 • Verified Dates &amp; Progression</div>
            <h2 id="heading-journey" class="text-2xl font-bold text-white mt-1">Internship &amp; Learning Journey</h2>
          </div>
          <span class="text-xs font-mono text-slate-400">Only verified dates shown • Unknown dates labeled "Date to be added"</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Internship Highlight Card -->
          <div class="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mb-3">
              Verified Dates: ${esc(intern.duration)}
            </div>
            <h3 class="text-xl font-bold text-white">${esc(intern.program)}</h3>
            <p class="text-sm text-sky-400 font-medium mt-0.5">${esc(intern.subject)} — ${esc(intern.role)}</p>
            <p class="text-xs text-slate-300 mt-2 leading-relaxed">${esc(intern.academicContext)} ${esc(intern.natureNote)}</p>

            <div class="mt-5">
              <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">Topics Covered During the 1-Month Program</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                ${intern.topicsCovered
                  .map(function (t) {
                    return `
                      <div class="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                        <div class="text-xs font-semibold text-white">${esc(t.title)}</div>
                        <p class="text-[11px] text-slate-400 mt-1 leading-relaxed">${esc(t.detail)}</p>
                      </div>
                    `;
                  })
                  .join("")}
              </div>
            </div>

            <div class="mt-5 pt-4 border-t border-slate-800">
              <div class="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">Verification &amp; Evidence Placeholders</div>
              <div class="space-y-1.5">
                ${intern.evidencePlaceholders
                  .map(function (ep) {
                    return `
                      <div class="flex items-center justify-between text-xs p-2 rounded bg-slate-950 border border-slate-800">
                        <span class="text-slate-300">${esc(ep.label)}</span>
                        <span class="font-mono text-amber-300">${esc(ep.status)}</span>
                      </div>
                    `;
                  })
                  .join("")}
              </div>
            </div>
          </div>

          <!-- Chronological Learning Journey -->
          <div class="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 class="text-lg font-bold text-white mb-1">Learning Journey Milestones</h3>
            <p class="text-xs text-slate-400 mb-5">Strict date accuracy: Only the July–August 2026 internship dates are confirmed; other learning milestones use honest placeholders until exact dates are added.</p>

            <div class="space-y-4 relative before:absolute before:top-2 before:bottom-2 before:left-2.5 before:w-0.5 before:bg-slate-800">
              ${DATA.learningJourney
                .map(function (step) {
                  return `
                    <div class="relative pl-8">
                      <span class="absolute left-1 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                        step.verifiedDate
                          ? "bg-emerald-400 border-emerald-950"
                          : "bg-slate-800 border-sky-400"
                      }"></span>
                      <div class="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                        <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-1">
                          <span class="${step.verifiedDate ? "text-emerald-300 font-semibold" : "text-amber-300"}">${esc(step.dateLabel)}</span>
                          <span class="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">${esc(step.category)}</span>
                        </div>
                        <h4 class="text-sm font-semibold text-white">${esc(step.title)}</h4>
                        <p class="text-xs text-slate-300 mt-1 leading-relaxed">${esc(step.description)}</p>
                      </div>
                    </div>
                  `;
                })
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // Render Section: GitHub Repository Architecture, Contact & Missing-Evidence Handoff Checklist
  function renderGitHubAndContactSection() {
    const gh = DATA.githubStandards;
    const p = DATA.profile;

    const githubDisplay = p.githubUrl ? p.githubUrl : "GitHub URL Placeholder — To be confirmed";
    const linkedinDisplay = p.linkedinUrl ? p.linkedinUrl : "LinkedIn Profile Placeholder — To be confirmed";
    const emailDisplay = p.publicEmail ? p.publicEmail : "Public Email Placeholder — To be confirmed";

    return `
      <section id="section-github" aria-labelledby="heading-github" class="mb-14">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-sky-400">Section 07 • Repository Standards, Ethics &amp; Contact</div>
            <h2 id="heading-github" class="text-2xl font-bold text-white mt-1">GitHub Structure, Responsible Security &amp; Contact</h2>
          </div>
          <span class="text-xs font-mono text-slate-400">Zero fabricated links or fake contact backends</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- GitHub Standard & Tree -->
          <div class="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 class="text-lg font-bold text-white">GitHub Repository Taxonomy &amp; Documentation Standard</h3>
              <span class="px-2.5 py-0.5 rounded text-xs font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">Username: To be confirmed</span>
            </div>
            <p class="text-xs text-slate-300 mb-4">${esc(gh.statusNote)}</p>

            <div class="mb-4">
              <div class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">12 Preferred Repository Categories</div>
              <div class="flex flex-wrap gap-1.5">
                ${gh.preferredCategories
                  .map(function (cat) {
                    return `<span class="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-sky-300 border border-slate-800">${esc(cat)}</span>`;
                  })
                  .join("")}
              </div>
            </div>

            <div class="mb-4">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-xs font-mono uppercase tracking-wider text-slate-400">Standard Project Repository Layout</span>
                <button
                  type="button"
                  data-action="copy-repo-tree"
                  class="text-xs font-mono text-sky-400 hover:text-sky-300"
                >
                  Copy Tree Structure
                </button>
              </div>
              <pre class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto">${esc(gh.repoTreeTemplate)}</pre>
            </div>

            <div>
              <div class="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">Responsible Security, Sanitisation &amp; Licensing Commitments</div>
              <ul class="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                ${gh.responsiblePrinciples.map(function (rp) { return `<li>${esc(rp)}</li>`; }).join("")}
              </ul>
            </div>
          </div>

          <!-- Contact & Readiness Checklist -->
          <div class="lg:col-span-5 space-y-6">
            <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 class="text-lg font-bold text-white mb-2">Public Contact Channels</h3>
              <p class="text-xs text-slate-300 mb-4">
                To protect privacy, no personal phone number, private email address, or home address is exposed here. No fake contact form backend is used. Click <strong>Customize My Details</strong> to test adding your public links.
              </p>

              <div class="space-y-3 text-xs">
                <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2">
                  <div>
                    <div class="font-mono text-slate-400">GitHub Profile</div>
                    <div class="text-white font-medium mt-0.5 break-all">${esc(githubDisplay)}</div>
                  </div>
                  ${
                    p.githubUrl
                      ? `<a href="${esc(p.githubUrl)}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 shrink-0">Open ↗</a>`
                      : `<span class="px-2 py-0.5 rounded font-mono text-[11px] bg-amber-500/15 text-amber-300 shrink-0">Placeholder</span>`
                  }
                </div>

                <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2">
                  <div>
                    <div class="font-mono text-slate-400">LinkedIn</div>
                    <div class="text-white font-medium mt-0.5 break-all">${esc(linkedinDisplay)}</div>
                  </div>
                  ${
                    p.linkedinUrl
                      ? `<a href="${esc(p.linkedinUrl)}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 shrink-0">Open ↗</a>`
                      : `<span class="px-2 py-0.5 rounded font-mono text-[11px] bg-amber-500/15 text-amber-300 shrink-0">Placeholder</span>`
                  }
                </div>

                <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2">
                  <div>
                    <div class="font-mono text-slate-400">Public Email (mailto only when supplied)</div>
                    <div class="text-white font-medium mt-0.5 break-all">${esc(emailDisplay)}</div>
                  </div>
                  ${
                    p.publicEmail
                      ? `<a href="mailto:${esc(p.publicEmail)}" class="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">Email ✉</a>`
                      : `<span class="px-2 py-0.5 rounded font-mono text-[11px] bg-amber-500/15 text-amber-300 shrink-0">Placeholder</span>`
                  }
                </div>
              </div>

              <div class="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span class="text-xs text-slate-400">Want to preview with your real name &amp; links?</span>
                <button
                  type="button"
                  data-action="open-customizer"
                  class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors"
                >
                  Open Profile Customizer
                </button>
              </div>
            </div>

            <!-- Items Needing Your Confirmation / Evidence Checklist -->
            <div class="rounded-2xl border border-amber-500/30 bg-slate-900/70 p-6">
              <h3 class="text-sm font-bold text-amber-300 font-mono uppercase tracking-wider mb-2">
                Handoff Checklist: Items To Confirm or Attach Later
              </h3>
              <ul class="space-y-2 text-xs text-slate-300">
                <li class="flex items-start gap-2">
                  <span class="text-amber-400 font-mono">1.</span>
                  <span><strong>Public Identity &amp; Links</strong>: Confirm your preferred public name, GitHub username, LinkedIn URL, and public email in <code>portfolio-data.js</code>.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-amber-400 font-mono">2.</span>
                  <span><strong>Metasploit Lab Screenshots</strong>: Add sanitised terminal output of <code>sessions -l</code> and Nmap scan of Metasploitable2.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-amber-400 font-mono">3.</span>
                  <span><strong>Windows 11 Case Study Outcome</strong>: Confirm whether the Code 56 / <code>DISM 0x800f0915</code> issue was eventually resolved (and how), or keep the current verified status note.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-amber-400 font-mono">4.</span>
                  <span><strong>DVWA, Python &amp; SQL Evidence</strong>: Attach sanitised DVWA screenshots, your ATM Python practice script, and fictional MySQL <code>a01.the</code> query scripts.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // Render Case Study Full 16-Point Inspector Modal
  function renderCaseStudyModal() {
    const modalContainer = document.getElementById("case-study-modal");
    if (!modalContainer) return;

    if (!state.selectedCaseStudyId) {
      modalContainer.classList.add("hidden");
      modalContainer.innerHTML = "";
      return;
    }

    const proj = DATA.projects.find(function (p) {
      return p.id === state.selectedCaseStudyId;
    });
    if (!proj) {
      modalContainer.classList.add("hidden");
      return;
    }

    modalContainer.classList.remove("hidden");
    modalContainer.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-sm overflow-y-auto" data-action="backdrop-close-case">
        <div class="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl p-5 sm:p-8">
          <!-- Modal Header -->
          <div class="flex items-start justify-between gap-4 pb-5 border-b border-slate-800 sticky top-0 bg-slate-900/95 backdrop-blur z-10 pt-1">
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-2">
                <span class="px-2.5 py-0.5 rounded text-xs font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30">${esc(proj.category)}</span>
                ${getProjectStatusBadge(proj.status)}
                <span class="text-xs font-mono text-slate-400">16-Point Project Documentation Standard</span>
              </div>
              <h2 class="text-xl sm:text-2xl font-bold text-white">${esc(proj.title)}</h2>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <button
                type="button"
                data-action="copy-case-markdown"
                data-project-id="${esc(proj.id)}"
                class="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
              >
                Copy Full Markdown
              </button>
              <button
                type="button"
                data-action="close-case-study"
                aria-label="Close Case Study Inspector"
                class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700"
              >
                ✕
              </button>
            </div>
          </div>

          <div class="space-y-6 mt-6 text-sm">
            <!-- Accuracy Banner -->
            <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs font-mono">
              VERIFICATION &amp; ACCURACY BOUNDARY: ${esc(proj.honestBadge)}
            </div>

            <!-- Architecture / Topology Diagram -->
            ${renderArchitectureDiagram(proj.labEnvironment.topologyDiagramType)}

            <!-- 1 & 2: Overview + Objectives & Scope -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-sky-400 mb-2">01. Overview &amp; Problem Statement</h3>
                <p class="text-slate-300 leading-relaxed text-xs sm:text-sm">${esc(proj.overview)}</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-sky-400 mb-2">02. Learning Objectives &amp; Authorised Scope</h3>
                <ul class="list-disc list-inside text-slate-300 space-y-1.5 text-xs sm:text-sm">
                  ${proj.objectivesAndScope.map(function (o) { return `<li>${esc(o)}</li>`; }).join("")}
                </ul>
              </div>
            </div>

            <!-- 3 & 4: Lab Environment + Tools Actually Used -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-sky-400 mb-2">03. Lab Environment &amp; Architecture</h3>
                <div class="space-y-1.5 text-xs text-slate-300">
                  <div><strong class="text-white">Host:</strong> ${esc(proj.labEnvironment.host)}</div>
                  <div><strong class="text-white">Network Mode:</strong> ${esc(proj.labEnvironment.networkMode)}</div>
                  <div><strong class="text-white">Context &amp; Sanitisation Note:</strong> ${esc(proj.labEnvironment.addressNote)}</div>
                </div>
              </div>
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-sky-400 mb-2">04. Tools Actually Used</h3>
                <div class="flex flex-wrap gap-1.5">
                  ${proj.toolsUsed.map(function (t) { return `<span class="px-2.5 py-1 rounded bg-slate-900 text-slate-200 border border-slate-800 text-xs">${esc(t)}</span>`; }).join("")}
                </div>
              </div>
            </div>

            <!-- 5 & 6: Configuration + Methodology -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-sky-400 mb-2">05. Installation &amp; Configuration</h3>
                <ul class="list-disc list-inside text-slate-300 space-y-1.5 text-xs">
                  ${proj.configurationSteps.map(function (c) { return `<li>${esc(c)}</li>`; }).join("")}
                </ul>
              </div>
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-sky-400 mb-2">06. Methodology &amp; Workflow</h3>
                <ul class="list-disc list-inside text-slate-300 space-y-1.5 text-xs">
                  ${proj.methodology.map(function (m) { return `<li>${esc(m)}</li>`; }).join("")}
                </ul>
              </div>
            </div>

            <!-- 7: Test Scenarios & Recorded Checks -->
            <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <h3 class="text-xs font-mono uppercase text-sky-400 mb-3">07. Test Scenarios, Commands &amp; Recorded Observations</h3>
              <div class="space-y-3">
                ${proj.testScenarios
                  .map(function (ts) {
                    return `
                      <div class="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                        <div class="text-xs font-semibold text-white mb-1.5">${esc(ts.scenario)}</div>
                        <pre class="p-2.5 rounded bg-slate-950 text-sky-300 font-mono text-xs overflow-x-auto whitespace-pre-wrap">${esc(ts.command)}</pre>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs">
                          <div><span class="text-slate-400">Expected:</span> <span class="text-slate-200">${esc(ts.expected)}</span></div>
                          <div><span class="text-slate-400">Observed:</span> <span class="text-emerald-300">${esc(ts.observed)}</span></div>
                        </div>
                      </div>
                    `;
                  })
                  .join("")}
              </div>
            </div>

            <!-- 8 & 9: Evidence Status + Findings & Analysis -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-amber-400 mb-2">08. Evidence Status (Sanitised Placeholders)</h3>
                <div class="space-y-2 text-xs">
                  ${proj.evidenceList
                    .map(function (ev) {
                      return `
                        <div class="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between gap-2">
                          <span class="text-slate-200">${esc(ev.item)}</span>
                          <span class="font-mono text-amber-300 shrink-0">${esc(ev.status)}</span>
                        </div>
                      `;
                    })
                    .join("")}
                </div>
              </div>
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-sky-400 mb-2">09. Findings &amp; Analysis</h3>
                <div class="text-xs text-slate-300 whitespace-pre-line leading-relaxed">${esc(proj.findingsAndAnalysis)}</div>
              </div>
            </div>

            <!-- 10 & 11: Detection Logic + False Positives & Limitations -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-emerald-400 mb-2">10. Detection Logic &amp; SOC Technical Explanation</h3>
                <div class="text-xs text-slate-300 whitespace-pre-line leading-relaxed">${esc(proj.detectionAndTechnical)}</div>
              </div>
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-amber-400 mb-2">11. Limitations &amp; Unverified Boundaries</h3>
                <p class="text-xs text-slate-300 leading-relaxed">${esc(proj.limitationsAndFalsePositives)}</p>
              </div>
            </div>

            <!-- 12 & 13: Remediation + Challenges/Troubleshooting -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-emerald-400 mb-2">12. Remediation &amp; Defensive Recommendations</h3>
                <ul class="list-disc list-inside text-slate-300 space-y-1.5 text-xs">
                  ${proj.remediation.map(function (r) { return `<li>${esc(r)}</li>`; }).join("")}
                </ul>
              </div>
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-sky-400 mb-2">13. Challenges &amp; Troubleshooting</h3>
                <p class="text-xs text-slate-300 leading-relaxed">${esc(proj.challengesAndTroubleshooting)}</p>
              </div>
            </div>

            <!-- 14, 15, 16: Lessons Learned, References, Metadata -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-sky-400 mb-2">14. Lessons Learned</h3>
                <ul class="list-disc list-inside text-slate-300 space-y-1 text-xs">
                  ${proj.lessonsLearned.map(function (l) { return `<li>${esc(l)}</li>`; }).join("")}
                </ul>
              </div>
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-sky-400 mb-2">15. References</h3>
                <ul class="list-disc list-inside text-slate-300 space-y-1 text-xs">
                  ${proj.references.map(function (ref) { return `<li>${esc(ref)}</li>`; }).join("")}
                </ul>
              </div>
              <div class="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <h3 class="text-xs font-mono uppercase text-sky-400 mb-2">16. Status &amp; Links</h3>
                <div class="space-y-1 text-xs text-slate-300 font-mono">
                  <div>Status: <span class="text-white">${esc(proj.status)}</span></div>
                  <div>Created: <span class="text-amber-300">${esc(proj.createdDate)}</span></div>
                  <div>Updated: <span class="text-amber-300">${esc(proj.updatedDate)}</span></div>
                  <div>Repo: <span class="text-amber-300">${esc(proj.repoLink)}</span></div>
                  <div>Report: <span class="text-amber-300">${esc(proj.reportLink)}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Render Profile Customizer Modal
  function renderCustomizerModal() {
    const modal = document.getElementById("customizer-modal");
    if (!modal) return;
    if (!state.customizerOpen) {
      modal.classList.add("hidden");
      modal.innerHTML = "";
      return;
    }

    const p = DATA.profile;
    modal.classList.remove("hidden");
    modal.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm" data-action="backdrop-close-customizer">
        <div class="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h2 class="text-lg font-bold text-white">Customize Profile Placeholders</h2>
              <p class="text-xs text-slate-400">Preview your real display name and public links live in the browser</p>
            </div>
            <button type="button" data-action="close-customizer" class="p-1.5 rounded-lg text-slate-400 hover:text-white">✕</button>
          </div>

          <form id="customizer-form" class="space-y-4 mt-4 text-xs">
            <div>
              <label for="cust-name" class="block font-mono text-slate-300 mb-1">Public Display Name</label>
              <input id="cust-name" type="text" value="${esc(p.name)}" class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
            </div>
            <div>
              <label for="cust-github" class="block font-mono text-slate-300 mb-1">Public GitHub URL (leave blank for placeholder)</label>
              <input id="cust-github" type="url" value="${esc(p.githubUrl)}" placeholder="https://github.com/your-username" class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
            </div>
            <div>
              <label for="cust-linkedin" class="block font-mono text-slate-300 mb-1">Public LinkedIn URL (leave blank for placeholder)</label>
              <input id="cust-linkedin" type="url" value="${esc(p.linkedinUrl)}" placeholder="https://linkedin.com/in/your-profile" class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
            </div>
            <div>
              <label for="cust-email" class="block font-mono text-slate-300 mb-1">Public Contact Email (for mailto link; leave blank for placeholder)</label>
              <input id="cust-email" type="email" value="${esc(p.publicEmail)}" placeholder="you@example.com" class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white" />
            </div>

            <div class="flex items-center justify-between pt-3 border-t border-slate-800 gap-2">
              <button
                type="button"
                data-action="reset-customizer"
                class="px-3 py-2 rounded-lg font-medium bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                Restore Default Placeholders
              </button>
              <div class="flex items-center gap-2">
                <button
                  type="button"
                  data-action="copy-profile-config"
                  class="px-3 py-2 rounded-lg font-medium bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700"
                >
                  Copy Config JSON
                </button>
                <button
                  type="submit"
                  class="px-4 py-2 rounded-lg font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950"
                >
                  Apply Live Preview
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    `;
  }


  // Render Authenticity Legend & Currently Exploring Banner
  function renderAuthenticityAndExploringSection() {
    if (!DATA.authenticityLevels || !DATA.currentlyExploring) return "";
    return `
      <section id="section-currently-exploring" aria-labelledby="heading-exploring" class="mb-14">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-2">
            <div>
              <div class="text-xs font-mono uppercase tracking-wider text-emerald-400">Accuracy &amp; Authenticity Framework</div>
              <h2 id="heading-exploring" class="text-xl font-bold text-white mt-0.5">6-Level Experience Distinction &amp; Currently Exploring</h2>
            </div>
            <span class="text-xs font-mono text-slate-400">Academic study is never conflated with commercial implementation</span>
          </div>

          <!-- 6-Level Legend -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            ${DATA.authenticityLevels
              .map(function (lvl) {
                return `
                  <div class="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div class="text-xs font-mono font-semibold text-sky-300">${esc(lvl.label)}</div>
                    <p class="text-[11px] text-slate-400 mt-1 leading-relaxed">${esc(lvl.desc)}</p>
                  </div>
                `;
              })
              .join("")}
          </div>

          <!-- Currently Exploring Live Cards -->
          <div class="pt-4 border-t border-slate-800">
            <div class="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">Currently Exploring &amp; Active Learning Focus</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${DATA.currentlyExploring
                .map(function (ce) {
                  return `
                    <div class="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between">
                      <div>
                        <div class="flex items-center justify-between gap-2 mb-1">
                          <span class="text-xs font-bold text-white">${esc(ce.topic)}</span>
                          <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">${esc(ce.status)}</span>
                        </div>
                        <p class="text-xs text-slate-300 leading-relaxed">${esc(ce.detail)}</p>
                      </div>
                    </div>
                  `;
                })
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // Render Section: 9 Individual Security Tool Documentation Pages
  function renderSecurityToolsDocsSection() {
    if (!DATA.toolsDocumentation) return "";
    const tools = DATA.toolsDocumentation;
    const filtered =
      state.activeToolDocId === "all"
        ? tools
        : tools.filter(function (t) { return t.id === state.activeToolDocId; });

    return `
      <section id="section-tools-docs" aria-labelledby="heading-tools-docs" class="mb-14">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-sky-400">Dedicated Tool Documentation Pages</div>
            <h2 id="heading-tools-docs" class="text-2xl font-bold text-white mt-1">Security Tools &amp; Hands-On Lab Documentation (9 Tools)</h2>
          </div>
          <span class="text-xs font-mono text-slate-400">Purpose • Setup • Commands • Practical Lab Examples • Observations</span>
        </div>

        <!-- Tool Selector Bar -->
        <div class="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 mb-6 flex flex-wrap gap-1.5 items-center">
          <span class="text-xs font-mono text-slate-400 mr-1">Select Tool Page:</span>
          <button
            type="button"
            data-action="select-tool-doc"
            data-tool-id="all"
            class="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              state.activeToolDocId === "all"
                ? "bg-sky-500 text-slate-950 font-semibold"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }"
          >
            All 9 Tools
          </button>
          ${tools
            .map(function (t) {
              const active = state.activeToolDocId === t.id;
              return `
                <button
                  type="button"
                  data-action="select-tool-doc"
                  data-tool-id="${esc(t.id)}"
                  class="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    active
                      ? "bg-sky-500 text-slate-950 font-semibold"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }"
                >
                  ${esc(t.name)}
                </button>
              `;
            })
            .join("")}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          ${filtered
            .map(function (t) {
              return `
                <article class="portfolio-card rounded-2xl border border-slate-800 bg-slate-900/70 p-6 flex flex-col justify-between">
                  <div>
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span class="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-800 text-sky-300 border border-slate-700">${esc(t.category)}</span>
                      <span class="px-2.5 py-0.5 rounded text-xs font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">${esc(t.authenticity)}</span>
                    </div>
                    <h3 class="text-lg font-bold text-white">${esc(t.name)}</h3>
                    <p class="text-xs text-slate-300 mt-2 leading-relaxed"><strong class="text-white">Purpose:</strong> ${esc(t.purpose)}</p>
                    <p class="text-xs text-slate-300 mt-1.5 leading-relaxed"><strong class="text-white">Setup / Lab Context:</strong> ${esc(t.setup)}</p>

                    <div class="mt-4">
                      <div class="text-xs font-mono uppercase text-sky-400 mb-2">Important Commands &amp; Syntax</div>
                      <div class="space-y-2">
                        ${t.commands
                          .map(function (c) {
                            return `
                              <div class="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                                <code class="text-xs font-mono text-emerald-300 block">${esc(c.cmd)}</code>
                                <div class="text-[11px] text-slate-400 mt-1">${esc(c.desc)}</div>
                              </div>
                            `;
                          })
                          .join("")}
                      </div>
                    </div>

                    <div class="mt-4 space-y-2 text-xs text-slate-300">
                      <div><strong class="text-white">Practical Lab Activity:</strong> ${esc(t.practicalExample)}</div>
                      <div><strong class="text-white">Results &amp; Observations:</strong> ${esc(t.observations)}</div>
                      <div><strong class="text-emerald-300">Lessons Learned:</strong> ${esc(t.lessonsLearned)}</div>
                    </div>
                  </div>

                  <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-amber-300">
                    Evidence / Screenshots Status: ${esc(t.evidenceStatus)}
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  // Render Section: 9-Category Professional Project & Practical Documentation Library
  function renderExpandedProjectLibrarySection() {
    if (!DATA.expandedProjectLibrary) return "";
    const cats = [
      "All",
      "Cybersecurity",
      "Cryptography",
      "Python",
      "MySQL",
      "Networking",
      "Linux",
      "Artificial Intelligence",
      "Windows Troubleshooting",
      "Academic Technical Projects"
    ];

    const filtered = DATA.expandedProjectLibrary.filter(function (item) {
      return state.libCategoryFilter === "All" || item.category === state.libCategoryFilter;
    });

    return `
      <section id="section-project-library" aria-labelledby="heading-project-library" class="mb-14">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-emerald-400">12-Point Project Documentation Library</div>
            <h2 id="heading-project-library" class="text-2xl font-bold text-white mt-1">Cross-Domain Technical &amp; Academic Project Library (9 Categories)</h2>
          </div>
          <span class="text-xs font-mono text-slate-400">Prioritising practical labs, troubleshooting &amp; verified academic work</span>
        </div>

        <div class="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 mb-6 flex flex-wrap gap-1.5 items-center">
          <span class="text-xs font-mono text-slate-400 mr-1">Domain Category:</span>
          ${cats
            .map(function (c) {
              const active = state.libCategoryFilter === c;
              return `
                <button
                  type="button"
                  data-action="filter-lib-category"
                  data-category="${esc(c)}"
                  class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                    active
                      ? "bg-emerald-500 text-slate-950 font-semibold"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }"
                >
                  ${esc(c)}
                </button>
              `;
            })
            .join("")}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          ${filtered
            .map(function (item) {
              return `
                <article class="portfolio-card rounded-2xl border border-slate-800 bg-slate-900/70 p-6 flex flex-col justify-between">
                  <div>
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span class="px-2.5 py-0.5 rounded text-xs font-mono bg-sky-500/15 text-sky-300 border border-sky-500/30">${esc(item.category)}</span>
                      <span class="px-2.5 py-0.5 rounded text-xs font-mono bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">${esc(item.authenticity)}</span>
                    </div>
                    <h3 class="text-base font-bold text-white">${esc(item.title)}</h3>

                    <div class="mt-3 space-y-1.5 text-xs text-slate-300">
                      <div><strong class="text-white">1. Objective:</strong> ${esc(item.objective)}</div>
                      <div><strong class="text-white">2. Problem Statement:</strong> ${esc(item.problemStatement)}</div>
                      <div><strong class="text-white">3. Environment:</strong> ${esc(item.environment)}</div>
                      <div><strong class="text-white">4. Methodology:</strong> ${esc(item.methodology)}</div>
                      <div><strong class="text-white">5. Implementation:</strong> ${esc(item.implementation)}</div>
                      <div><strong class="text-amber-300">6. Evidence Status:</strong> ${esc(item.evidence)}</div>
                      <div><strong class="text-emerald-300">7. Results:</strong> ${esc(item.results)}</div>
                      <div><strong class="text-white">8. Challenges Faced:</strong> ${esc(item.challenges)}</div>
                      <div><strong class="text-white">9. Lessons Learned:</strong> ${esc(item.lessonsLearned)}</div>
                      <div><strong class="text-sky-300">10. Future Improvements:</strong> ${esc(item.futureImprovements)}</div>
                    </div>

                    <div class="mt-3 flex flex-wrap gap-1.5">
                      ${item.technologies
                        .map(function (tech) {
                          return `<span class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800">${esc(tech)}</span>`;
                        })
                        .join("")}
                    </div>
                  </div>

                  ${
                    item.linkedCaseId
                      ? `
                        <div class="mt-4 pt-3 border-t border-slate-800 flex justify-end">
                          <button
                            type="button"
                            data-action="open-case-study"
                            data-project-id="${esc(item.linkedCaseId)}"
                            class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40"
                          >
                            Open Linked 16-Section Case Study →
                          </button>
                        </div>
                      `
                      : ""
                  }
                </article>
              `;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  // Render Section: Cryptography & Network Security (CNS)
  function renderCryptographySection() {
    if (!DATA.cryptographySection) return "";
    const cns = DATA.cryptographySection;
    const categories = [
      "All",
      "Core Concepts",
      "Encryption Models",
      "Symmetric Ciphers",
      "Asymmetric Ciphers",
      "Key Exchange",
      "Block Cipher Modes",
      "Hash Functions",
      "Authentication & Integrity",
      "Digital Signature Schemes",
      "Key Infrastructure",
      "Security Properties",
      "Network Security"
    ];

    const filtered = cns.topics.filter(function (t) {
      const matchCat = state.cryptoCategoryFilter === "All" || t.category === state.cryptoCategoryFilter;
      const q = state.cryptoSearch.trim().toLowerCase();
      const matchSearch =
        !q ||
        t.title.toLowerCase().indexOf(q) !== -1 ||
        t.explanation.toLowerCase().indexOf(q) !== -1 ||
        t.workingPrinciple.toLowerCase().indexOf(q) !== -1;
      return matchCat && matchSearch;
    });

    return `
      <section id="section-cryptography" aria-labelledby="heading-cryptography" class="mb-14">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-sky-400">Dedicated Academic &amp; Technical Knowledge Section</div>
            <h2 id="heading-cryptography" class="text-2xl font-bold text-white mt-1">Cryptography &amp; Network Security (CNS — 18 Core Topics)</h2>
          </div>
          <span class="px-2.5 py-1 rounded text-xs font-mono bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">Studied Academically &amp; Safe Python Demos</span>
        </div>

        <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-6">
          ${esc(cns.disclaimer)}
        </div>

        <!-- Inline SVG Diagram: CBC Mode, RSA/DH Key Exchange & Digital Signatures -->
        <div class="bg-slate-950/90 border border-slate-800 rounded-xl p-4 mb-6 overflow-x-auto">
          <div class="text-xs font-mono text-sky-400 mb-2">
            TECHNICAL DIAGRAM: SYMMETRIC (AES/DES + CBC CHAINING) VS. ASYMMETRIC (RSA / DH / SCHNORR &amp; ELGAMAL SIGNATURES)
          </div>
          <svg viewBox="0 0 780 185" class="w-full max-w-full h-auto" role="img" aria-label="Cryptography Architecture Diagram">
            <rect x="6" y="6" width="768" height="173" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
            <rect x="20" y="22" width="235" height="142" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="32" y="44" fill="#38bdf8" font-size="11" font-weight="bold" font-family="monospace">1. Symmetric &amp; CBC Mode</text>
            <text x="32" y="64" fill="#e2e8f0" font-size="10" font-family="monospace">• DES: 64b block, 56b key, 16-rd Feistel</text>
            <text x="32" y="82" fill="#e2e8f0" font-size="10" font-family="monospace">• AES: 128b block, 128/192/256b SPN</text>
            <text x="32" y="100" fill="#86efac" font-size="10" font-family="monospace">• CBC: C_i = E_K(P_i XOR C_{i-1})</text>
            <text x="32" y="118" fill="#cbd5e1" font-size="10" font-family="monospace">• C_1 uses unpredictable random IV</text>
            <text x="32" y="138" fill="#94a3b8" font-size="9" font-family="monospace">Fast bulk encryption for TLS / Disk</text>

            <rect x="272" y="22" width="235" height="142" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="1.5"/>
            <text x="284" y="44" fill="#a5b4fc" font-size="11" font-weight="bold" font-family="monospace">2. Asymmetric &amp; Key Exchange</text>
            <text x="284" y="64" fill="#e2e8f0" font-size="10" font-family="monospace">• RSA: n=p*q, e*d ≡ 1 mod phi(n)</text>
            <text x="284" y="82" fill="#e2e8f0" font-size="10" font-family="monospace">  Enc: C = M^e mod n | Dec: M = C^d</text>
            <text x="284" y="100" fill="#fde047" font-size="10" font-family="monospace">• Diffie-Hellman: K = g^(ab) mod p</text>
            <text x="284" y="118" fill="#cbd5e1" font-size="10" font-family="monospace">• Public Key encrypts / verifies</text>
            <text x="284" y="138" fill="#94a3b8" font-size="9" font-family="monospace">Solves key distribution over untrusted net</text>

            <rect x="524" y="22" width="236" height="142" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
            <text x="536" y="44" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace">3. Hashing &amp; Digital Signatures</text>
            <text x="536" y="64" fill="#e2e8f0" font-size="10" font-family="monospace">• SHA-512: 1024b block, 80 rds, 512b</text>
            <text x="536" y="82" fill="#e2e8f0" font-size="10" font-family="monospace">• Schnorr: DLP, short (e, s) sig</text>
            <text x="536" y="100" fill="#e2e8f0" font-size="10" font-family="monospace">• ElGamal: DLP, unique nonce k req.</text>
            <text x="536" y="118" fill="#86efac" font-size="10" font-family="monospace">• Integrity + Non-Repudiation</text>
            <text x="536" y="138" fill="#94a3b8" font-size="9" font-family="monospace">Sign Hash(M) w/ PrivKey; Verify w/ PubKey</text>
          </svg>
        </div>

        <!-- Filters -->
        <div class="p-4 rounded-xl border border-slate-800 bg-slate-900/50 mb-6 flex flex-col md:flex-row gap-3 justify-between">
          <div class="flex flex-wrap gap-1.5 items-center">
            ${categories
              .map(function (c) {
                const active = state.cryptoCategoryFilter === c;
                return `
                  <button
                    type="button"
                    data-action="filter-crypto-category"
                    data-category="${esc(c)}"
                    class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                      active
                        ? "bg-sky-500 text-slate-950 font-semibold"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }"
                  >
                    ${esc(c)}
                  </button>
                `;
              })
              .join("")}
          </div>
          <div class="w-full md:w-64">
            <label for="crypto-search-input" class="sr-only">Search CNS topics</label>
            <input
              id="crypto-search-input"
              type="text"
              value="${esc(state.cryptoSearch)}"
              placeholder="Search CNS (e.g. AES, Schnorr, CBC)..."
              class="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500"
            />
          </div>
        </div>

        <!-- 18 CNS Topic Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          ${filtered
            .map(function (t) {
              return `
                <article class="portfolio-card rounded-xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-2">
                      <span class="text-[11px] font-mono text-sky-400">${esc(t.category)}</span>
                      <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">${esc(t.level)}</span>
                    </div>
                    <h3 class="text-sm font-bold text-white">${esc(t.title)}</h3>
                    <div class="mt-2.5 space-y-2 text-xs text-slate-300">
                      <div><strong class="text-white">Explanation:</strong> ${esc(t.explanation)}</div>
                      <div><strong class="text-sky-300">Working Principle:</strong> ${esc(t.workingPrinciple)}</div>
                      <div><strong class="text-emerald-300">Practical Applications:</strong> ${esc(t.applications)}</div>
                      <div><strong class="text-amber-300">Security Importance:</strong> ${esc(t.securityImportance)}</div>
                    </div>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>

        <!-- Safe Educational Python Cryptography Demos -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          ${cns.pythonDemos
            .map(function (demo) {
              return `
                <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                  <div class="flex items-center justify-between gap-2 mb-2">
                    <h3 class="text-sm font-bold text-white">${esc(demo.title)}</h3>
                    <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/15 text-emerald-300">${esc(demo.level)}</span>
                  </div>
                  <pre class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-sky-300 overflow-x-auto whitespace-pre-wrap">${esc(demo.code)}</pre>
                </div>
              `;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  // Render Section: Artificial Intelligence & Machine Learning (24 Topics)
  function renderAiMlSection() {
    if (!DATA.aiMlSection) return "";
    const ai = DATA.aiMlSection;
    const categories = ["All", "AI Foundations", "Search & Problem Solving", "Knowledge & Logic", "Machine Learning & DL", "Applied AI"];

    const filtered = ai.topics.filter(function (t) {
      const matchCat = state.aiCategoryFilter === "All" || t.category === state.aiCategoryFilter;
      const q = state.aiSearch.trim().toLowerCase();
      const matchSearch =
        !q ||
        t.title.toLowerCase().indexOf(q) !== -1 ||
        t.summary.toLowerCase().indexOf(q) !== -1 ||
        t.cyberLink.toLowerCase().indexOf(q) !== -1;
      return matchCat && matchSearch;
    });

    return `
      <section id="section-ai-ml" aria-labelledby="heading-ai-ml" class="mb-14">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-indigo-400">Dedicated Academic &amp; Technical Knowledge Section</div>
            <h2 id="heading-ai-ml" class="text-2xl font-bold text-white mt-1">Artificial Intelligence &amp; Machine Learning (24 Core Concepts)</h2>
          </div>
          <span class="px-2.5 py-1 rounded text-xs font-mono bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">B.E. Computer Engineering Curriculum</span>
        </div>

        <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-6">
          ${esc(ai.disclaimer)}
        </div>

        <!-- Inline SVG Diagram: State-Space Search & AI/ML/DL Hierarchy -->
        <div class="bg-slate-950/90 border border-slate-800 rounded-xl p-4 mb-6 overflow-x-auto">
          <div class="text-xs font-mono text-indigo-400 mb-2">
            TECHNICAL DIAGRAM: STATE-SPACE SEARCH (BFS / DFS / A*) &amp; AI → MACHINE LEARNING → DEEP LEARNING PARADIGMS
          </div>
          <svg viewBox="0 0 780 175" class="w-full max-w-full h-auto" role="img" aria-label="AI Search and ML Hierarchy Diagram">
            <rect x="6" y="6" width="768" height="163" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/>
            <rect x="20" y="22" width="240" height="132" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="32" y="44" fill="#38bdf8" font-size="11" font-weight="bold" font-family="monospace">1. Search &amp; Problem Solving</text>
            <text x="32" y="64" fill="#e2e8f0" font-size="10" font-family="monospace">• BFS: FIFO Queue, Optimal unit cost</text>
            <text x="32" y="82" fill="#e2e8f0" font-size="10" font-family="monospace">• DFS: LIFO Stack, O(b*m) memory</text>
            <text x="32" y="100" fill="#86efac" font-size="10" font-family="monospace">• A* Search: f(n) = g(n) + h(n)</text>
            <text x="32" y="118" fill="#cbd5e1" font-size="10" font-family="monospace">• Admissible h(n) guarantees optimal</text>

            <rect x="275" y="22" width="235" height="132" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="1.5"/>
            <text x="287" y="44" fill="#a5b4fc" font-size="11" font-weight="bold" font-family="monospace">2. Knowledge &amp; Logic Engines</text>
            <text x="287" y="64" fill="#e2e8f0" font-size="10" font-family="monospace">• Propositional: Boolean rules</text>
            <text x="287" y="82" fill="#e2e8f0" font-size="10" font-family="monospace">• Predicate (FOL): ∀x, ∃y quantifiers</text>
            <text x="287" y="100" fill="#fde047" font-size="10" font-family="monospace">• Forward Chaining: Data → Alert</text>
            <text x="287" y="118" fill="#cbd5e1" font-size="10" font-family="monospace">• Backward Chaining: Goal → Evidence</text>

            <rect x="525" y="22" width="235" height="132" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
            <text x="537" y="44" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace">3. ML, DL &amp; Applied AI</text>
            <text x="537" y="64" fill="#e2e8f0" font-size="10" font-family="monospace">• Supervised: Classification / Reg.</text>
            <text x="537" y="82" fill="#e2e8f0" font-size="10" font-family="monospace">• Unsupervised: Clustering / Anomaly</text>
            <text x="537" y="100" fill="#e2e8f0" font-size="10" font-family="monospace">• Decision Trees, Neural Nets, RL</text>
            <text x="537" y="118" fill="#86efac" font-size="10" font-family="monospace">• NLP, Computer Vision &amp; GenAI</text>
          </svg>
        </div>

        <!-- Filter & Search -->
        <div class="p-4 rounded-xl border border-slate-800 bg-slate-900/50 mb-6 flex flex-col md:flex-row gap-3 justify-between">
          <div class="flex flex-wrap gap-1.5 items-center">
            ${categories
              .map(function (c) {
                const active = state.aiCategoryFilter === c;
                return `
                  <button
                    type="button"
                    data-action="filter-ai-category"
                    data-category="${esc(c)}"
                    class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                      active
                        ? "bg-indigo-500 text-white font-semibold"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }"
                  >
                    ${esc(c)}
                  </button>
                `;
              })
              .join("")}
          </div>
          <div class="w-full md:w-64">
            <label for="ai-search-input" class="sr-only">Search AI and ML topics</label>
            <input
              id="ai-search-input"
              type="text"
              value="${esc(state.aiSearch)}"
              placeholder="Search AI/ML (e.g. A*, BFS, Neural)..."
              class="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          ${filtered
            .map(function (t) {
              return `
                <article class="portfolio-card rounded-xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-2">
                      <span class="text-[11px] font-mono text-indigo-400">${esc(t.category)}</span>
                      <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/15 text-indigo-300">${esc(t.level)}</span>
                    </div>
                    <h3 class="text-sm font-bold text-white">${esc(t.title)}</h3>
                    <p class="text-xs text-slate-300 mt-2 leading-relaxed">${esc(t.summary)}</p>
                  </div>
                  <div class="mt-3 pt-2.5 border-t border-slate-800/80 text-[11px] text-emerald-300">
                    <strong>Security / IT Relevance:</strong> ${esc(t.cyberLink)}
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>

        ${ai.pythonDemos
          .map(function (demo) {
            return `
              <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <div class="flex items-center justify-between gap-2 mb-2">
                  <h3 class="text-sm font-bold text-white">${esc(demo.title)}</h3>
                  <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/15 text-emerald-300">${esc(demo.level)}</span>
                </div>
                <pre class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-sky-300 overflow-x-auto whitespace-pre-wrap">${esc(demo.code)}</pre>
              </div>
            `;
          })
          .join("")}
      </section>
    `;
  }

  // Render Section: Expanded Python, MySQL, Linux, Networking & Windows/Kali Comparison Hubs
  function renderTechnicalHubsSection() {
    if (!DATA.technicalHubs) return "";
    const hubs = DATA.technicalHubs;
    const tabs = [
      { id: "python", label: "Python & Security Scripting" },
      { id: "mysql", label: "MySQL & DBMS Management" },
      { id: "linux", label: "Linux & Kali CLI" },
      { id: "networking", label: "Computer Networking" },
      { id: "win-vs-kali", label: "Windows 11 vs. Kali Networking" }
    ];

    let tabBody = "";
    if (state.activeTechHubTab === "python") {
      tabBody = `
        <div class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${hubs.python.topics
              .map(function (t) {
                return `
                  <div class="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div class="flex items-center justify-between gap-2 mb-1">
                      <span class="text-xs font-bold text-white">${esc(t.name)}</span>
                      <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/15 text-sky-300 shrink-0">${esc(t.state)}</span>
                    </div>
                    <p class="text-xs text-slate-400">${esc(t.detail)}</p>
                  </div>
                `;
              })
              .join("")}
          </div>
          <div>
            <h3 class="text-sm font-bold text-white mb-3 font-mono uppercase text-emerald-400">Educational Security &amp; Networking Python Script Templates</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              ${hubs.python.educationalScripts
                .map(function (sc) {
                  return `
                    <div class="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div class="flex items-center justify-between gap-2 mb-1">
                        <span class="text-xs font-bold text-white">${esc(sc.name)}</span>
                        <span class="text-[10px] font-mono text-amber-300">${esc(sc.status)}</span>
                      </div>
                      <p class="text-xs text-slate-400 mb-2">${esc(sc.desc)}</p>
                      <pre class="p-3 rounded-lg bg-slate-900 text-xs font-mono text-sky-300 overflow-x-auto whitespace-pre-wrap">${esc(sc.code)}</pre>
                    </div>
                  `;
                })
                .join("")}
            </div>
          </div>
        </div>
      `;
    } else if (state.activeTechHubTab === "mysql") {
      tabBody = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${hubs.mysql.practicedVsStudied
            .map(function (grp) {
              return `
                <div class="p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <h3 class="text-sm font-bold text-sky-300 font-mono mb-3">${esc(grp.group)}</h3>
                  <ul class="space-y-2 text-xs text-slate-300 list-disc list-inside">
                    ${grp.items.map(function (it) { return `<li>${esc(it)}</li>`; }).join("")}
                  </ul>
                </div>
              `;
            })
            .join("")}
        </div>
      `;
    } else if (state.activeTechHubTab === "linux") {
      tabBody = `
        <div class="space-y-3">
          ${hubs.linux.commandReference
            .map(function (row) {
              return `
                <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div class="lg:w-1/3">
                    <div class="text-xs font-bold text-white">${esc(row.topic)}</div>
                    <div class="text-xs text-slate-400 mt-0.5">${esc(row.explanation)}</div>
                  </div>
                  <pre class="lg:w-2/3 p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto">${esc(row.cmd)}</pre>
                </div>
              `;
            })
            .join("")}
        </div>
      `;
    } else if (state.activeTechHubTab === "networking") {
      tabBody = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${hubs.networking.coreTopics
            .map(function (ct) {
              return `
                <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <h3 class="text-sm font-bold text-sky-300 mb-1.5">${esc(ct.name)}</h3>
                  <p class="text-xs text-slate-300 leading-relaxed">${esc(ct.detail)}</p>
                </div>
              `;
            })
            .join("")}
        </div>
      `;
    } else {
      tabBody = `
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="border-b border-slate-800 text-slate-400 font-mono">
                <th class="py-3 px-4">Networking Aspect</th>
                <th class="py-3 px-4 text-amber-300">Windows 11 Host (HP OMEN 16 Context)</th>
                <th class="py-3 px-4 text-sky-300">Kali Linux VM (VirtualBox Guest Context)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/80 text-slate-300">
              ${(DATA.windowsVsKaliNetworking || [])
                .map(function (r) {
                  return `
                    <tr>
                      <td class="py-3 px-4 font-semibold text-white">${esc(r.aspect)}</td>
                      <td class="py-3 px-4">${esc(r.windows11)}</td>
                      <td class="py-3 px-4">${esc(r.kaliLinux)}</td>
                    </tr>
                  `;
                })
                .join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    return `
      <section id="section-technical-hubs" aria-labelledby="heading-tech-hubs" class="mb-14">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-sky-400">Expanded Technical Knowledge Hubs</div>
            <h2 id="heading-tech-hubs" class="text-2xl font-bold text-white mt-1">Python, MySQL/DBMS, Linux OS, Networking &amp; Windows vs. Kali</h2>
          </div>
          <span class="text-xs font-mono text-slate-400">Select a domain tab to inspect commands, scripts &amp; architecture</span>
        </div>

        <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div class="flex flex-wrap gap-2 pb-5 mb-6 border-b border-slate-800">
            ${tabs
              .map(function (t) {
                const active = state.activeTechHubTab === t.id;
                return `
                  <button
                    type="button"
                    data-action="select-tech-hub"
                    data-hub="${esc(t.id)}"
                    class="px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                      active
                        ? "bg-sky-500 text-slate-950"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }"
                  >
                    ${esc(t.label)}
                  </button>
                `;
              })
              .join("")}
          </div>
          ${tabBody}
        </div>
      </section>
    `;
  }

  // Render Section: Academic Technical Foundation (13 Computer Engineering Subjects)
  function renderAcademicFoundationSection() {
    if (!DATA.academicFoundation) return "";
    const q = state.academicSearch.trim().toLowerCase();
    const filtered = DATA.academicFoundation.filter(function (sub) {
      return (
        !q ||
        sub.subject.toLowerCase().indexOf(q) !== -1 ||
        sub.concepts.toLowerCase().indexOf(q) !== -1 ||
        sub.realWorldApplication.toLowerCase().indexOf(q) !== -1
      );
    });

    return `
      <section id="section-academic-foundation" aria-labelledby="heading-academic" class="mb-14">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div class="text-xs font-mono uppercase tracking-wider text-indigo-400">B.E. Computer Engineering Curriculum (GTU Context)</div>
            <h2 id="heading-academic" class="text-2xl font-bold text-white mt-1">Academic Technical Foundation (13 Engineering Subjects)</h2>
          </div>
          <div class="w-full sm:w-64">
            <label for="academic-search-input" class="sr-only">Search academic subjects</label>
            <input
              id="academic-search-input"
              type="text"
              value="${esc(state.academicSearch)}"
              placeholder="Search (e.g. GSM, Compiler, Big Data)..."
              class="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${filtered
            .map(function (sub) {
              return `
                <article class="portfolio-card rounded-xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-2">
                      <span class="text-[11px] font-mono text-sky-400">${esc(sub.domain)}</span>
                      <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/15 text-indigo-300">Studied Academically</span>
                    </div>
                    <h3 class="text-sm font-bold text-white">${esc(sub.subject)}</h3>
                    <p class="text-xs text-slate-300 mt-2 leading-relaxed"><strong class="text-white">Core Technical Concepts:</strong> ${esc(sub.concepts)}</p>
                  </div>
                  <div class="mt-3 pt-3 border-t border-slate-800/80 text-xs text-emerald-300">
                    <strong>Cybersecurity &amp; IT Connection:</strong> ${esc(sub.realWorldApplication)}
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </section>
    `;
  }

  // Render Main View Container
  function renderMain() {
    renderHeader();
    const mainEl = document.getElementById("main-content");
    if (!mainEl) return;

    const v = state.activeView;
    const chunks = [];

    if (v === "all" || v === "guide") {
      chunks.push(renderBeginnerWalkthroughSection());
    }
    if (v === "all") {
      chunks.push(renderHeroSection());
      chunks.push(renderAuthenticityAndExploringSection());
    }
    if (v === "all" || v === "about") {
      chunks.push(renderAboutAndLabSection());
    }
    if (v === "all" || v === "skills") {
      chunks.push(renderSkillsSection());
    }
    if (v === "all" || v === "projects") {
      chunks.push(renderProjectsAndCaseStudiesSection());
      chunks.push(renderExpandedProjectLibrarySection());
    }
    if (v === "all" || v === "tools-docs") {
      chunks.push(renderSecurityToolsDocsSection());
    }
    if (v === "all" || v === "cryptography") {
      chunks.push(renderCryptographySection());
    }
    if (v === "all" || v === "ai-ml") {
      chunks.push(renderAiMlSection());
    }
    if (v === "all" || v === "tech-hubs") {
      chunks.push(renderTechnicalHubsSection());
    }
    if (v === "all" || v === "academic") {
      chunks.push(renderAcademicFoundationSection());
    }
    if (v === "all" || v === "roadmap") {
      chunks.push(renderRoadmapSection());
    }
    if (v === "all" || v === "notes") {
      chunks.push(renderStudyNotesSection());
    }
    if (v === "all" || v === "journey") {
      if (v === "journey") chunks.push(renderAuthenticityAndExploringSection());
      chunks.push(renderJourneyAndInternshipSection());
    }
    if (v === "all" || v === "github") {
      chunks.push(renderGitHubAndContactSection());
    }

    mainEl.innerHTML = chunks.join("");
    renderCaseStudyModal();
    renderCustomizerModal();
    bindSearchInputs();
  }

  // Bind live search input listeners after render
  function bindSearchInputs() {
    const skillInput = document.getElementById("skill-search-input");
    if (skillInput) {
      skillInput.oninput = function (e) {
        const pos = e.target.selectionStart;
        state.skillSearch = e.target.value;
        renderMain();
        const nextInput = document.getElementById("skill-search-input");
        if (nextInput) {
          nextInput.focus();
          nextInput.setSelectionRange(pos, pos);
        }
      };
    }

    const projInput = document.getElementById("project-search-input");
    if (projInput) {
      projInput.oninput = function (e) {
        const pos = e.target.selectionStart;
        state.projectSearch = e.target.value;
        renderMain();
        const nextInput = document.getElementById("project-search-input");
        if (nextInput) {
          nextInput.focus();
          nextInput.setSelectionRange(pos, pos);
        }
      };
    }

    const roadmapInput = document.getElementById("roadmap-search-input");
    if (roadmapInput) {
      roadmapInput.oninput = function (e) {
        const pos = e.target.selectionStart;
        state.roadmapSearch = e.target.value;
        renderMain();
        const nextInput = document.getElementById("roadmap-search-input");
        if (nextInput) {
          nextInput.focus();
          nextInput.setSelectionRange(pos, pos);
        }
      };
    }

    const notesInput = document.getElementById("notes-search-input");
    if (notesInput) {
      notesInput.oninput = function (e) {
        const pos = e.target.selectionStart;
        state.notesSearch = e.target.value;
        renderMain();
        const nextInput = document.getElementById("notes-search-input");
        if (nextInput) {
          nextInput.focus();
          nextInput.setSelectionRange(pos, pos);
        }
      };
    }

    const cryptoInput = document.getElementById("crypto-search-input");
    if (cryptoInput) {
      cryptoInput.oninput = function (e) {
        const pos = e.target.selectionStart;
        state.cryptoSearch = e.target.value;
        renderMain();
        const nextInput = document.getElementById("crypto-search-input");
        if (nextInput) {
          nextInput.focus();
          nextInput.setSelectionRange(pos, pos);
        }
      };
    }

    const aiInput = document.getElementById("ai-search-input");
    if (aiInput) {
      aiInput.oninput = function (e) {
        const pos = e.target.selectionStart;
        state.aiSearch = e.target.value;
        renderMain();
        const nextInput = document.getElementById("ai-search-input");
        if (nextInput) {
          nextInput.focus();
          nextInput.setSelectionRange(pos, pos);
        }
      };
    }

    const acadInput = document.getElementById("academic-search-input");
    if (acadInput) {
      acadInput.oninput = function (e) {
        const pos = e.target.selectionStart;
        state.academicSearch = e.target.value;
        renderMain();
        const nextInput = document.getElementById("academic-search-input");
        if (nextInput) {
          nextInput.focus();
          nextInput.setSelectionRange(pos, pos);
        }
      };
    }

    const form = document.getElementById("customizer-form");
    if (form) {
      form.onsubmit = function (e) {
        e.preventDefault();
        const nameVal = document.getElementById("cust-name").value.trim();
        const ghVal = document.getElementById("cust-github").value.trim();
        const liVal = document.getElementById("cust-linkedin").value.trim();
        const emVal = document.getElementById("cust-email").value.trim();

        DATA.profile.name = nameVal || "Akshay Budarapu";
        DATA.profile.githubUrl = ghVal;
        DATA.profile.linkedinUrl = liVal;
        DATA.profile.publicEmail = emVal;

        saveProfileOverrides({
          name: DATA.profile.name,
          githubUrl: DATA.profile.githubUrl,
          linkedinUrl: DATA.profile.linkedinUrl,
          publicEmail: DATA.profile.publicEmail
        });

        state.customizerOpen = false;
        renderMain();
        showToast("Updated profile preview in browser!", "success");
      };
    }
  }

  // Global Event Delegation for all buttons and interactive controls
  function setupEventDelegation() {
    document.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const action = btn.getAttribute("data-action");

      if (action === "switch-view") {
        const targetView = btn.getAttribute("data-view") || "all";
        state.activeView = targetView;
        state.mobileMenuOpen = false;
        renderMain();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (action === "toggle-mobile-menu") {
        state.mobileMenuOpen = !state.mobileMenuOpen;
        renderHeader();
      } else if (action === "select-guide-step") {
        state.beginnerStepIndex = parseInt(btn.getAttribute("data-step-index"), 10) || 0;
        renderMain();
      } else if (action === "prev-guide-step") {
        if (state.beginnerStepIndex > 0) {
          state.beginnerStepIndex -= 1;
          renderMain();
        }
      } else if (action === "next-guide-step") {
        if (state.beginnerStepIndex < DATA.beginnerWalkthroughSteps.length - 1) {
          state.beginnerStepIndex += 1;
          renderMain();
        }
      } else if (action === "filter-skill-state") {
        state.skillStateFilter = btn.getAttribute("data-state") || "All";
        renderMain();
      } else if (action === "filter-skill-category") {
        state.skillCategoryFilter = btn.getAttribute("data-category") || "All";
        renderMain();
      } else if (action === "reset-skill-filters") {
        state.skillStateFilter = "All";
        state.skillCategoryFilter = "All";
        state.skillSearch = "";
        renderMain();
      } else if (action === "filter-project-category") {
        state.projectCategoryFilter = btn.getAttribute("data-category") || "All";
        renderMain();
      } else if (action === "filter-project-status") {
        state.projectStatusFilter = btn.getAttribute("data-status") || "All";
        renderMain();
      } else if (action === "reset-project-filters") {
        state.projectCategoryFilter = "All";
        state.projectStatusFilter = "All";
        state.projectSearch = "";
        renderMain();
      } else if (action === "open-case-study") {
        state.selectedCaseStudyId = btn.getAttribute("data-project-id");
        renderCaseStudyModal();
      } else if (action === "close-case-study" || (action === "backdrop-close-case" && e.target === btn)) {
        state.selectedCaseStudyId = null;
        renderCaseStudyModal();
      } else if (action === "copy-case-markdown") {
        const pid = btn.getAttribute("data-project-id");
        const proj = DATA.projects.find(function (p) { return p.id === pid; });
        if (proj) {
          copyTextToClipboard(buildCaseStudyMarkdown(proj), "Copied 16-section Markdown report to clipboard!");
        }
      } else if (action === "filter-roadmap-domain") {
        state.roadmapDomainFilter = btn.getAttribute("data-domain") || "All";
        renderMain();
      } else if (action === "toggle-soc-priority") {
        state.roadmapSocPriorityOnly = !state.roadmapSocPriorityOnly;
        renderMain();
      } else if (action === "reset-roadmap-filters") {
        state.roadmapDomainFilter = "All";
        state.roadmapSocPriorityOnly = false;
        state.roadmapSearch = "";
        renderMain();
      } else if (action === "toggle-roadmap-expand") {
        const rid = parseInt(btn.getAttribute("data-roadmap-id"), 10);
        state.expandedRoadmapIds[rid] = !state.expandedRoadmapIds[rid];
        renderMain();
      } else if (action === "focus-roadmap-item") {
        const rid = parseInt(btn.getAttribute("data-roadmap-id"), 10);
        state.roadmapDomainFilter = "All";
        state.expandedRoadmapIds[rid] = true;
        renderMain();
        const card = document.getElementById("roadmap-card-" + rid);
        if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (action === "filter-notes-category") {
        state.notesCategoryFilter = btn.getAttribute("data-category") || "All";
        renderMain();
      } else if (action === "filter-crypto-category") {
        state.cryptoCategoryFilter = btn.getAttribute("data-category") || "All";
        renderMain();
      } else if (action === "filter-ai-category") {
        state.aiCategoryFilter = btn.getAttribute("data-category") || "All";
        renderMain();
      } else if (action === "select-tech-hub") {
        state.activeTechHubTab = btn.getAttribute("data-hub") || "python";
        renderMain();
      } else if (action === "select-tool-doc") {
        state.activeToolDocId = btn.getAttribute("data-tool-id") || "all";
        renderMain();
      } else if (action === "filter-lib-category") {
        state.libCategoryFilter = btn.getAttribute("data-category") || "All";
        renderMain();
      } else if (action === "copy-repo-tree") {
        copyTextToClipboard(DATA.githubStandards.repoTreeTemplate, "Copied repository directory tree!");
      } else if (action === "open-customizer") {
        state.customizerOpen = true;
        renderCustomizerModal();
      } else if (action === "close-customizer" || (action === "backdrop-close-customizer" && e.target === btn)) {
        state.customizerOpen = false;
        renderCustomizerModal();
      } else if (action === "reset-customizer") {
        DATA.profile.name = "Akshay Budarapu";
        DATA.profile.githubUrl = "";
        DATA.profile.linkedinUrl = "";
        DATA.profile.publicEmail = "mr.akshay0421@gmail.com";
        saveProfileOverrides({
          name: DATA.profile.name,
          githubUrl: "",
          linkedinUrl: "",
          publicEmail: "mr.akshay0421@gmail.com"
        });
        state.customizerOpen = false;
        renderMain();
        showToast("Restored confirmed profile defaults (Akshay Budarapu).", "info");
      } else if (action === "copy-profile-config") {
        const snippet = JSON.stringify(
          {
            name: document.getElementById("cust-name") ? document.getElementById("cust-name").value : DATA.profile.name,
            githubUrl: document.getElementById("cust-github") ? document.getElementById("cust-github").value : DATA.profile.githubUrl,
            linkedinUrl: document.getElementById("cust-linkedin") ? document.getElementById("cust-linkedin").value : DATA.profile.linkedinUrl,
            publicEmail: document.getElementById("cust-email") ? document.getElementById("cust-email").value : DATA.profile.publicEmail
          },
          null,
          2
        );
        copyTextToClipboard(snippet, "Copied profile config JSON!");
      }
    });

    // Keyboard Escape handler for modals
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (state.selectedCaseStudyId) {
          state.selectedCaseStudyId = null;
          renderCaseStudyModal();
        }
        if (state.customizerOpen) {
          state.customizerOpen = false;
          renderCustomizerModal();
        }
      }
    });
  }

  window.addEventListener("DOMContentLoaded", function () {
    loadSavedProfileOverrides();
    setupEventDelegation();
    renderMain();
  });
})();
