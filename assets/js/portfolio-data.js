// ============================================================================
// CYBERSECURITY PORTFOLIO — STRUCTURED CONTENT DATA (portfolio-data.js)
// ============================================================================
// How to update this file:
// 1. All website text, projects, case studies, skills, and roadmap items live here.
// 2. You do NOT need to touch complex HTML layout code to update your portfolio.
// 3. Replace placeholder strings (like "[Name Placeholder — To Be Confirmed]")
//    only when you are ready to publish those details publicly.
// ============================================================================

window.PORTFOLIO_DATA = {
  profile: {
    name: "Akshay Budarapu",
    headline: "Aspiring Cybersecurity Analyst | SOC & Security Operations",
    subheadline: "Computer Engineering Student (GTU, 7th-Semester Context) transitioning into Cybersecurity through structured home-lab practice, network & endpoint troubleshooting, and evidence-led documentation.",
    degree: "B.E. in Computer Engineering (Seventh-Semester Context)",
    institution: "Pacific School of Engineering ( affiliated with GTU )",
    location: "Gujarat, India",
    careerStage: "Early-Career Learner Building Practical Skills",
    targetRolesPrimary: [
      "SOC Analyst (Tier 1 / Entry-Level)",
      "Cybersecurity Analyst",
      "Security Operations Analyst"
    ],
    targetRolesSecondary: [
      "Entry-Level Vulnerability Assessment / Penetration Testing (VAPT) Analyst"
    ],
    longTermInterests: [
      "SOC Operations",
      "SIEM & Log Analysis",
      "Detection Engineering",
      "Threat Hunting",
      "Incident Response & DFIR",
      "Network Security",
      "Security Automation (Python)",
      "Web Application Security",
      "Cloud Security"
    ],
    githubUrl: "", // Leave empty until confirmed; renders safe placeholder
    linkedinUrl: "", // Leave empty until confirmed; renders safe placeholder
    publicEmail: "mr.akshay0421@gmail.com", // Confirmed public contact email
    resumeStatus: "To be confirmed / Link to be added"
  },

  internship: {
    program: "Code In Yourself (Codeinyourself) Offline Internship Program",
    role: "Cyber Security Intern (Educational Offline Program)",
    duration: "03 July 2026 – 03 August 2026 (One-Month Program)",
    subject: "Fundamentals of Cyber Security",
    academicContext: "Completed during 7th-semester B.E. Computer Engineering context at Pacific School of Engineering (GTU).",
    natureNote: "Accurately presented as a structured one-month educational offline internship program focused on core security fundamentals.",
    topicsCovered: [
      {
        title: "Networking Fundamentals",
        detail: "OSI/TCP-IP models, IPv4 addressing, subnetting concepts, ports, protocols (TCP/UDP), DNS resolution, and packet flow."
      },
      {
        title: "CIA Triad & Security Principles",
        detail: "Confidentiality, Integrity, and Availability applied to real-world systems, along with defence-in-depth and least privilege."
      },
      {
        title: "Threats, Vulnerabilities, Risk & Impact",
        detail: "Distinguishing threat actors, system weaknesses, risk likelihood/impact, and common attack vectors."
      },
      {
        title: "Authentication & Password Security",
        detail: "Password hashing concepts, credential hygiene, brute-force/stuffing risks, and Multi-Factor Authentication (MFA)."
      },
      {
        title: "Firewalls & Host Protection",
        detail: "Stateful vs. stateless packet filtering, inbound/outbound rule logic, and Linux UFW configuration concepts."
      },
      {
        title: "Web Application Security",
        detail: "HTTP request/response lifecycle, client-side vs. server-side controls, and introduction to SQL Injection (SQLi) and Cross-Site Scripting (XSS)."
      },
      {
        title: "Vulnerability Assessment Fundamentals",
        detail: "Authorised discovery, service enumeration with Nmap, identifying misconfigurations, and remediation prioritisation."
      },
      {
        title: "Basic Incident Response",
        detail: "Preparation, identification, containment, eradication, recovery, and post-incident documentation."
      }
    ],
    evidencePlaceholders: [
      { label: "Internship Completion Certificate", status: "Evidence pending / To be confirmed" },
      { label: "7th-Semester Internship Report PDF", status: "Evidence pending / Link to be added" },
      { label: "Supervisor / Mentor Attribution", status: "Not published (requires explicit confirmation)" }
    ]
  },

  labEnvironment: {
    hostHardware: {
      model: "HP OMEN 16 Laptop",
      cpu: "Intel Core i5 Processor",
      gpu: "NVIDIA Dedicated Graphics",
      ram: "16 GB DDR4/DDR5 RAM",
      storage: "512 GB NVMe SSD",
      os: "Windows 11 (Host OS)"
    },
    virtualizationAndTargets: [
      {
        name: "Oracle VirtualBox",
        role: "Type-2 Hypervisor",
        detail: "Used to run isolated virtual machines on the Windows 11 host with snapshots and restricted network modes."
      },
      {
        name: "Kali Linux VM",
        role: "Analyst / Testing Workstation",
        detail: "Used for Linux CLI practice, Nmap service discovery, Wireshark/tcpdump packet inspection, and Metasploit workflow exploration."
      },
      {
        name: "Metasploitable2 VM",
        role: "Intentionally Vulnerable Target",
        detail: "Run strictly on an isolated host-only virtual network for authorised service enumeration and module workflow practice."
      },
      {
        name: "DVWA (Damn Vulnerable Web Application)",
        role: "Web Security Training Target",
        detail: "Used in a local isolated environment to study SQL Injection, XSS, and input validation concepts."
      }
    ],
    networkingNote: {
      topologyType: "VirtualBox Private / Host-Only Networking",
      ipAddressDisclaimer: "Documentation-only / Historical Lab Context: During past isolated VirtualBox host-only sessions, temporary addresses such as 192.168.56.102/24 (Kali VM) and 192.168.56.101/24 (Metasploitable2 target) were observed. These are non-routable RFC 1918 private lab addresses from historical sessions, not permanent or public infrastructure. Public examples on this site use RFC 5737 documentation ranges (e.g., 192.0.2.0/24) or explicitly label historical 192.168.56.0/24 lab notes.",
      ramConstraintStrategy: "Because the host laptop has 16 GB total RAM (shared with Windows 11), lab topologies are intentionally designed to run 1 analyst VM (2–4 GB RAM) and 1 lightweight target VM (512 MB–2 GB RAM) concurrently, rather than running multiple heavy SIEM/server VMs simultaneously."
    }
  },

  // Honest 4-State Skill Taxonomy (No percentage bars!)
  // States: "Hands-on Practice" | "Currently Learning" | "Concepts Studied" | "Planned to Explore"
  skills: [
    // Hands-on Practice
    {
      name: "Kali Linux & Linux CLI",
      category: "Linux & OS",
      state: "Hands-on Practice",
      context: "Practised terminal navigation, process inspection, `ip addr` interface analysis (`lo` vs `eth0`), `setxkbmap`, and `.bashrc` alias configuration/troubleshooting."
    },
    {
      name: "Oracle VirtualBox & Host-Only Lab Networking",
      category: "Networking & Lab",
      state: "Hands-on Practice",
      context: "Configured isolated host-only virtual networks connecting Kali Linux and Metasploitable2 within a 16 GB RAM host budget."
    },
    {
      name: "Nmap (Discovery & Port Scanning)",
      category: "Security & VAPT",
      state: "Hands-on Practice",
      context: "Practised host discovery, port scanning, and service/version detection against authorised local lab targets."
    },
    {
      name: "Wireshark & tcpdump",
      category: "Networking & Lab",
      state: "Hands-on Practice",
      context: "Practised packet capture and protocol inspection in controlled lab interfaces."
    },
    {
      name: "UFW (Uncomplicated Firewall)",
      category: "Linux & OS",
      state: "Hands-on Practice",
      context: "Practised firewall status checks and basic allow/deny rule syntax on Linux."
    },
    {
      name: "Metasploit Framework (`msfconsole`)",
      category: "Security & VAPT",
      state: "Hands-on Practice",
      context: "Explored module selection (`exploit/unix/ftp/vsftpd_234_backdoor`), parameter setup, and `sessions -l` troubleshooting in an isolated lab."
    },
    {
      name: "Metasploitable2 & DVWA Lab Environments",
      category: "Security & VAPT",
      state: "Hands-on Practice",
      context: "Used intentionally vulnerable targets in isolated lab settings to study network services and web vulnerabilities safely."
    },
    {
      name: "Windows 11 Device Manager & Network Stack Diagnostics",
      category: "Linux & OS",
      state: "Hands-on Practice",
      context: "Investigated Code 56 (`CM_PROB_NEED_CLASS_CONFIG`) adapter failures, checked `NlaSvc`/`DeviceInstall`/`NetSetupSvc`, and ran `pnputil`, `DISM`, and `netcfg` checks."
    },
    {
      name: "MySQL Workbench",
      category: "Databases & SQL",
      state: "Hands-on Practice",
      context: "Created practice database schemas (`a01`), ran DDL/DML queries, and tested Python `mysql.connector` integration."
    },

    // Currently Learning
    {
      name: "Python Programming (Beginner to Growing)",
      category: "Programming",
      state: "Currently Learning",
      context: "Variables, data types, collections, conditionals, loops, functions, OOP fundamentals, ATM-style console practice project, and `mysql.connector`."
    },
    {
      name: "SQL & Relational Querying (MySQL)",
      category: "Databases & SQL",
      state: "Currently Learning",
      context: "Practising `SELECT`, `WHERE`, `GROUP BY`, `ORDER BY`, `HAVING`, `JOIN`s, `UNION`, `CASE`, subqueries, window functions, stored procedures, `ALTER`/`DROP`/`RENAME`, and ETL concepts."
    },
    {
      name: "Web Security Testing (SQLi & XSS in DVWA)",
      category: "Security & VAPT",
      state: "Currently Learning",
      context: "Studying how unvalidated input leads to SQL Injection and Cross-Site Scripting in DVWA, alongside defensive parameterised queries and output encoding."
    },
    {
      name: "Shell Configuration & Aliases (`.bashrc` / Bash vs POSIX `sh`)",
      category: "Linux & OS",
      state: "Currently Learning",
      context: "Troubleshooting `shopt: command not found` and `complete: command not found` when sourcing `.bashrc`, plus writing aliases for `setxkbmap` and `NetworkManager`."
    },

    // Concepts Studied
    {
      name: "CIA Triad, Threats, Vulnerabilities, Risk & Impact",
      category: "Security Operations",
      state: "Concepts Studied",
      context: "Studied core information security principles during the Code In Yourself internship and academic coursework."
    },
    {
      name: "Authentication, Password Security, MFA & Zero Trust",
      category: "Security Operations",
      state: "Concepts Studied",
      context: "Studied credential protection, multi-factor authentication layers, and Zero Trust verification concepts."
    },
    {
      name: "TCP/UDP, IPv4 Addressing, Ports & DNS",
      category: "Networking & Lab",
      state: "Concepts Studied",
      context: "Studied transport protocols, 3-way handshake, port numbers, hostname resolution, and packet encapsulation."
    },
    {
      name: "Basic Cryptography",
      category: "Security Operations",
      state: "Concepts Studied",
      context: "Studied symmetric vs. asymmetric encryption, hashing for integrity, and TLS/HTTPS fundamentals."
    },
    {
      name: "Incident Response Lifecycle & VAPT Fundamentals",
      category: "Security Operations",
      state: "Concepts Studied",
      context: "Studied the phases of incident handling (PICERL) and structured vulnerability assessment methodology."
    },
    {
      name: "SIEM & EDR Concepts",
      category: "Security Operations",
      state: "Concepts Studied",
      context: "Studied how Security Information and Event Management (SIEM) centralises logs and how Endpoint Detection and Response (EDR) monitors host telemetry."
    },
    {
      name: "Apache/Nginx Service & Port Concepts",
      category: "Linux & OS",
      state: "Concepts Studied",
      context: "Studied how web server daemons bind to ports (80/443) and how service states are inspected on Linux."
    },
    {
      name: "Docker & Command-Injection Lab Concepts",
      category: "Security & VAPT",
      state: "Concepts Studied",
      context: "Studied containerisation fundamentals and how unsanitised OS command execution vulnerabilities occur."
    },

    // Planned to Explore (Roadmap Only)
    {
      name: "Wazuh, Sysmon, Splunk & Microsoft Sentinel",
      category: "Security Operations",
      state: "Planned to Explore",
      context: "Planned for future home-lab SIEM and endpoint detection projects; not claimed as already deployed."
    },
    {
      name: "Suricata, Zeek & Security Onion",
      category: "Networking & Lab",
      state: "Planned to Explore",
      context: "Planned for future Network IDS and network traffic analysis labs."
    },
    {
      name: "Sigma Rules, MITRE ATT&CK, Velociraptor & osquery",
      category: "Security Operations",
      state: "Planned to Explore",
      context: "Planned for future detection engineering and threat hunting roadmap items."
    },
    {
      name: "TheHive, MISP, OpenCTI, VirusTotal API, AbuseIPDB & n8n",
      category: "Security Operations",
      state: "Planned to Explore",
      context: "Planned for threat intelligence enrichment and human-in-the-loop SOC automation."
    },
    {
      name: "Autopsy, Sleuth Kit, Volatility 3, YARA, REMnux & FLARE-VM",
      category: "Security Operations",
      state: "Planned to Explore",
      context: "Planned for Digital Forensics and Incident Response (DFIR) and safe malware analysis labs."
    },
    {
      name: "Greenbone/OpenVAS, OWASP ZAP, Burp Suite Community & SQLmap",
      category: "Security & VAPT",
      state: "Planned to Explore",
      context: "Planned for structured vulnerability management and web security assessment labs."
    },
    {
      name: "Trivy, Falco, Prowler, ScoutSuite & AWS Security Services",
      category: "Cloud & Containers",
      state: "Planned to Explore",
      context: "Planned for future container security and AWS CloudTrail/GuardDuty/IAM/S3 monitoring labs."
    },
    {
      name: "Security Automation Scripting (Python, PowerShell & Bash)",
      category: "Programming",
      state: "Planned to Explore",
      context: "Planned future scripts for log parsing, IOC extraction, SHA-256 file integrity checks, and alert reporting."
    }
  ],

  // Truthful Hands-On / Learning Entries & Case Studies (6 Seeded Entries)
  // Every entry implements the full 16-field Project Documentation Standard
  projects: [
    {
      id: "case-metasploit-vsftpd",
      title: "Metasploit and Vulnerable Lab Exploration — In Progress",
      slug: "metasploit-vulnerable-lab-exploration",
      category: "VAPT",
      secondaryCategories: ["Network Security", "SOC"],
      status: "In Progress",
      honestBadge: "Module Workflow & Command Troubleshooting Only — No Exploitation Claimed",
      createdDate: "Date to be added",
      updatedDate: "Date to be added",
      summary: "Explored the Metasploit Framework (`msfconsole`) workflow in Kali Linux against an intentionally vulnerable Metasploitable2 VM on an isolated VirtualBox host-only network, documenting module configuration (`exploit/unix/ftp/vsftpd_234_backdoor`) and session management command troubleshooting (`session -1` vs `sessions -l`).",
      overview: "This lab exploration focuses on understanding how the Metasploit Framework organises modules, parameters, and session handling inside an isolated VirtualBox environment. Rather than claiming a completed compromise, this case study truthfully documents an initial workflow attempt with `exploit/unix/ftp/vsftpd_234_backdoor`, the CLI syntax error encountered (`session -1`), the correction to `sessions -l`, and what an empty session table indicates during validation.",
      objectivesAndScope: [
        "Authorised Scope: Strictly restricted to a self-hosted VirtualBox host-only network between a personal Kali Linux VM and an intentionally vulnerable Metasploitable2 VM.",
        "Understand how to search, select, and inspect module options inside `msfconsole`.",
        "Learn how Metasploit tracks post-exploitation or bind/reverse shell connections using the `sessions` command.",
        "Document accurate outcomes without inflating unverified or unsuccessful exploitation attempts."
      ],
      labEnvironment: {
        host: "HP OMEN 16 (Windows 11, Intel Core i5, 16 GB RAM)",
        networkMode: "VirtualBox Host-Only Adapter (Isolated non-routable private subnet)",
        addressNote: "Historical session used 192.168.56.102/24 (Kali Linux) and 192.168.56.101/24 (Metasploitable2). Shown in public documentation as historical lab context / RFC 5737 example topology.",
        topologyDiagramType: "virtualbox-lab"
      },
      toolsUsed: [
        "Oracle VirtualBox",
        "Kali Linux Terminal",
        "Metasploit Framework (`msfconsole`)",
        "Metasploitable2 VM (Intentionally Vulnerable Target)",
        "Nmap (for initial target service verification concepts)"
      ],
      configurationSteps: [
        "Configured both Kali Linux and Metasploitable2 VMs on an isolated VirtualBox Host-Only network so traffic could not egress to external networks.",
        "Verified interface IP assignment on Kali Linux using `ip addr`.",
        "Launched `msfconsole` and loaded module `exploit/unix/ftp/vsftpd_234_backdoor`."
      ],
      methodology: [
        "Step 1 — Module Selection: Selected `exploit/unix/ftp/vsftpd_234_backdoor` targeting the vsFTPd 2.3.4 service on Metasploitable2.",
        "Step 2 — Parameter Review: Configured target address parameters (`RHOSTS`) pointing to the isolated Metasploitable2 lab instance.",
        "Step 3 — Session Management Attempt: Attempted to interact with a session by typing `session -1`, which returned `[-] Unknown command: session.`.",
        "Step 4 — Command Verification: Identified that the plural command `sessions` is required in `msfconsole` and executed `sessions -l`.",
        "Step 5 — Outcome Validation: Observed `No active sessions.` in the terminal output, confirming that no active shell session existed at that point."
      ],
      testScenarios: [
        {
          scenario: "Module Workflow & Session Command Verification",
          command: "use exploit/unix/ftp/vsftpd_234_backdoor\n# After module exploration:\nsession -1\nsessions -l",
          expected: "Verify whether an active command shell session was established and learn proper `msfconsole` session syntax.",
          observed: "`session -1` failed with `Unknown command: session.`. Running `sessions -l` succeeded and reported `No active sessions.`."
        }
      ],
      evidenceList: [
        { item: "Terminal log / screenshot of `msfconsole` `sessions -l` output", status: "Evidence pending (to be captured and sanitised from lab VM)" },
        { item: "Nmap service scan of port 21/tcp on Metasploitable2", status: "Evidence pending" },
        { item: "Wireshark packet capture of FTP port 21 and backdoor port 6200 traffic", status: "Evidence pending" }
      ],
      findingsAndAnalysis: "1. **No Exploitation Claimed**: Because `sessions -l` returned `No active sessions.`, this attempt is documented strictly as module workflow exploration and CLI troubleshooting—not a successful host compromise.\n2. **Why `session -1` Failed**: Metasploit uses the plural command `sessions` (e.g., `sessions -l` to list sessions, `sessions -i <id>` to interact with a specific session ID, or `sessions -i -1` to interact with the most recent session if one exists).\n3. **Why `No active sessions` Appears**: An empty session list means either the exploit module was not yet executed with `run`/`exploit`, network reachability/target service state prevented the backdoor listener on port 6200 from opening, or a previous session had already closed.",
      detectionAndTechnical: "From a SOC / Blue Team perspective, the `vsftpd_234_backdoor` module sends a username ending with `:)` (hex `3a 29`) over FTP (TCP port 21) and then attempts to connect to a bind shell on TCP port 6200.\n- **Network IDS (Suricata/Snort)**: Alert on FTP `USER` commands containing `:)` followed by outbound/inbound SYN packets to TCP port 6200.\n- **Host Logs**: Inspect `/var/log/vsftpd.log` and `ss -tulnp` / `netstat` for unauthorized listeners on port 6200.",
      limitationsAndFalsePositives: "This exploration was limited to command workflow inside a single isolated lab session. Full packet capture validation (Wireshark on `eth0`) and step-by-step re-execution with `show options` and `check`/`run` output verification remain pending.",
      remediation: [
        "Never run outdated or trojanised software versions (vsFTPd 2.3.4 archive compromised in 2011; upgrade to patched distribution packages and verify cryptographic checksums/PGP signatures).",
        "Restrict FTP access or replace plaintext FTP with SFTP/SCP using key-based authentication.",
        "Enforce strict host firewall rules (e.g., UFW/nftables) blocking arbitrary high ports such as TCP 6200."
      ],
      challengesAndTroubleshooting: "Encountered `Unknown command: session.` when attempting `session -1`. Resolved the syntax error by consulting Metasploit help (`help sessions`) and using `sessions -l` to inspect the session table.",
      lessonsLearned: [
        "Always verify whether an exploit actually produced a session (`sessions -l`) before assuming success.",
        "In `msfconsole`, `sessions` (plural) manages active connections, and `-i <ID>` is the flag to interact with an active session.",
        "Keeping honest lab notes—including syntax mistakes and empty results—builds stronger analytical habits for SOC and VAPT work."
      ],
      references: [
        "Rapid7 Metasploit Documentation — Managing Sessions (`sessions -l`, `sessions -i`)",
        "Metasploitable2 Intentionally Vulnerable VM Lab Guide"
      ],
      repoLink: "Link to be added",
      reportLink: "Evidence pending"
    },

    {
      id: "case-windows11-network-driver",
      title: "Windows 11 Network Adapter & Driver Troubleshooting (Code 56 / DISM 0x800f0915)",
      slug: "windows-11-driver-network-troubleshooting",
      category: "SOC",
      secondaryCategories: ["Network Security"],
      status: "Case Study — Outcome Unverified",
      honestBadge: "Final resolution not verified in the available notes",
      createdDate: "Date to be added",
      updatedDate: "Date to be added",
      summary: "Structured endpoint and network stack investigation on an HP OMEN 16 (Windows 11) experiencing Wi-Fi loss, USB tethering failure, Device Manager Code 56 (`CM_PROB_NEED_CLASS_CONFIG`) on Intel AX211 and Realtek GbE (`rtcx21x64.inf`), and DISM `0x800f0915` during component store repair.",
      overview: "This case study documents a real-world Windows 11 host networking and driver configuration failure on an HP OMEN 16 laptop. Notice: This is an IT/endpoint troubleshooting investigation, NOT a confirmed cyberattack or malware incident. In SOC and endpoint security operations, distinguishing OS/driver/registry class-configuration failures from security incidents is an essential triage skill.",
      objectivesAndScope: [
        "Document exact system context, observed symptoms, and diagnostic commands executed on the host.",
        "Separate confirmed technical observations from unverified hypotheses.",
        "Evaluate why aggressive network reset commands (such as `netcfg -d`) require caution and state clearly that final resolution is not verified in the available notes."
      ],
      labEnvironment: {
        host: "HP OMEN 16 Laptop (Intel Core i5, NVIDIA GPU, 16 GB RAM, 512 GB SSD)",
        networkMode: "Host OS Endpoint Diagnostics (Windows 11; historical OS reference in notes: Windows 11 26H2, Build 26300.9457 — noted as historical reference only, not implied current)",
        addressNote: "Adapters involved: Intel Wi-Fi 6E AX211 160MHz, Realtek Gaming GbE Family Controller (`rtcx21x64.inf`), Bluetooth PAN, Remote NDIS Based Internet Sharing Device, and multiple WAN Miniport entries. Hardware IDs and serial numbers sanitised.",
        topologyDiagramType: "windows-driver-stack"
      },
      toolsUsed: [
        "Windows Device Manager (`devmgmt.msc`)",
        "Windows Services Console / `sc query` (`NlaSvc`, `DeviceInstall`, `NetSetupSvc`)",
        "Command Prompt / PowerShell (Admin)",
        "DISM (`CheckHealth`, `ScanHealth`, `RestoreHealth`)",
        "PnPUtil (`pnputil /enum-drivers`)",
        "Windows Network Stack Utilities (`netcfg -d`, `netsh winsock reset`, `netsh int ip reset`, `ipconfig /flushdns`)"
      ],
      configurationSteps: [
        "Inspected Device Manager under Network adapters (with hidden devices shown) to record exact adapter names, `.inf` associations, and error codes.",
        "Checked status of core Windows networking and device installation services (`NlaSvc`, `DeviceInstall`, `NetSetupSvc`).",
        "Enumerated installed third-party driver packages in the Windows Driver Store using `pnputil`."
      ],
      methodology: [
        "Step 1 — Symptom Correlation & Timeline Reconstruction: Noted that Wi-Fi stopped working normally and disappeared around an Intel Wi-Fi driver `24.70` installation attempt that returned an error. USB phone tethering also failed to provide internet access, appearing as `Remote NDIS Based Internet Sharing Device`.",
        "Step 2 — Device Manager & Error Code Analysis: Observed **Code 56** (`Windows is still setting up the class configuration for this device` / `CM_PROB_NEED_CLASS_CONFIG`) across network adapters, including the Realtek Gaming GbE Family Controller associated with `rtcx21x64.inf`, along with several visible WAN Miniport entries.",
        "Step 3 — Service Verification: Checked `NlaSvc` (Network Location Awareness), `DeviceInstall` (Device Install Service), and `NetSetupSvc` (Network Setup Service); confirmed all three services were running.",
        "Step 4 — Network Stack Reset Attempts: Executed `netcfg -d`, Winsock/IP reset commands, and DNS cache flush.",
        "Step 5 — Component Store & Driver Store Inspection: Ran `DISM /Online /Cleanup-Image /CheckHealth` and `/ScanHealth` (which reported the component store was repairable), followed by `DISM /Online /Cleanup-Image /RestoreHealth`, which failed with error `0x800f0915`. Inspected `pnputil` output and observed multiple Intel `netwtw08` driver package entries."
      ],
      testScenarios: [
        {
          scenario: "Device Manager Adapter Status Check",
          command: "Device Manager -> Network adapters (Properties -> General / Details / Events)",
          expected: "Adapters initialise cleanly with Status 'This device is working properly'.",
          observed: "Adapters reported Code 56 (`CM_PROB_NEED_CLASS_CONFIG`). Realtek Gaming GbE Family Controller mapped to `rtcx21x64.inf`. USB phone tethering appeared as `Remote NDIS Based Internet Sharing Device` without working connectivity."
        },
        {
          scenario: "Windows Core Network & Device Services Check",
          command: "Check status of NlaSvc, DeviceInstall, NetSetupSvc",
          expected: "Services required for plug-and-play driver binding and network profile setup are active.",
          observed: "Confirmed `NlaSvc`, `DeviceInstall`, and `NetSetupSvc` were running."
        },
        {
          scenario: "DISM Component Store Integrity & Repair Check",
          command: "DISM /Online /Cleanup-Image /CheckHealth\nDISM /Online /Cleanup-Image /ScanHealth\nDISM /Online /Cleanup-Image /RestoreHealth",
          expected: "Verify component store health and repair corrupted system files.",
          observed: "`CheckHealth` and `ScanHealth` indicated the component store was repairable, but `RestoreHealth` failed with error `0x800f0915` (repair content could not be found — often compounded when active network connectivity is down or an Insider/build-specific WIM source is unavailable)."
        },
        {
          scenario: "Driver Store Package Enumeration",
          command: "pnputil /enum-drivers",
          expected: "Identify staged Intel Wi-Fi and Realtek Ethernet driver packages.",
          observed: "Showed multiple Intel `netwtw08` driver package entries in the driver store."
        }
      ],
      evidenceList: [
        { item: "Sanitised Device Manager screenshot showing Code 56 (`CM_PROB_NEED_CLASS_CONFIG`) on `rtcx21x64.inf`", status: "Evidence pending" },
        { item: "Sanitised terminal log of `DISM /RestoreHealth` error `0x800f0915` and `pnputil` output", status: "Evidence pending" },
        { item: "Final resolution verification status", status: "Final resolution not verified in the available notes" }
      ],
      findingsAndAnalysis: "### Confirmed Facts vs. Unverified Hypotheses\n- **Confirmed Fact**: The issue began around an Intel Wi-Fi driver 24.70 installation attempt that returned an error, after which Wi-Fi disappeared/stopped working and USB tethering (`Remote NDIS Based Internet Sharing Device`) also failed.\n- **Confirmed Fact**: Multiple network adapters (including Realtek Gaming GbE `rtcx21x64.inf`) exhibited **Code 56 (`CM_PROB_NEED_CLASS_CONFIG`)**, while `NlaSvc`, `DeviceInstall`, and `NetSetupSvc` were running.\n- **Confirmed Fact**: `DISM /CheckHealth` and `/ScanHealth` marked the component store as repairable, `DISM /RestoreHealth` failed with `0x800f0915`, and `pnputil` showed multiple Intel `netwtw08` packages.\n- **Unverified Hypothesis (Plausible Interpretation, Not Confirmed)**: Code 56 across multiple physical and virtual network adapters (Wi-Fi, Realtek Ethernet, Remote NDIS) typically indicates a stuck or broken network class filter/binding in the Windows Network Setup (`NetSetupSvc`) registry state or a third-party virtual network filter driver (such as a hypervisor bridged/host-only filter or VPN lightweight filter) failing during class configuration—rather than simultaneous hardware failure of both Intel Wi-Fi and Realtek Ethernet chips.\n- **Unverified Hypothesis on `0x800f0915`**: `DISM /RestoreHealth` requires either Windows Update reachability (which was unavailable because all network adapters were in Code 56) or a matching local `/Source:WIM` image matching the exact OS build (e.g., historical build reference `26300.9457`).",
      detectionAndTechnical: "Why this matters for SOC & Security Operations:\n1. **Endpoint Triage Discipline**: When an endpoint loses network connectivity or drops off EDR telemetry, an analyst must check host device/service logs (`Microsoft-Windows-Kernel-PnP/Configuration`, `SetupAPI.dev.log`, System Event ID 7000/7023) before assuming malicious tampering.\n2. **Understanding Caution with `netcfg -d`**: Running `netcfg -d` removes all network adapters and rebuilds the network stack, which can strip virtual switches/filters and still fail to complete class configuration if the underlying registry class key or component store requires an offline repair source.",
      limitationsAndFalsePositives: "The available historical notes document the diagnostic timeline up to the `DISM 0x800f0915` and `pnputil` checks. **Final resolution is not verified in the available notes**, and no claim is made that the issue was resolved by these steps.",
      remediation: [
        "Safe Next Step 1 — Inspect `C:\\Windows\\INF\\setupapi.dev.log` around the timestamp of the Code 56 error to see the exact filter driver or registry key blocking `CM_PROB_NEED_CLASS_CONFIG`.",
        "Safe Next Step 2 — Because the host has no working internet connection for Windows Update, provide a matching offline Windows ISO (`install.wim` / `install.esd`) on a USB drive when running `DISM /Online /Cleanup-Image /RestoreHealth /Source:WIM:X:\\sources\\install.wim:1 /LimitAccess` or perform an in-place repair upgrade using a matching build ISO after backing up personal data.",
        "Safe Next Step 3 — Avoid repeated destructive resets (`netcfg -d`) without a system restore point and offline OEM network driver installers staged locally."
      ],
      challengesAndTroubleshooting: "Lack of working network connectivity (both Wi-Fi and USB RNDIS tethering blocked by Code 56) prevented online component store recovery during `DISM /RestoreHealth` (`0x800f0915`).",
      lessonsLearned: [
        "When multiple independent network interfaces (Intel Wi-Fi, Realtek Ethernet, and USB RNDIS) fail simultaneously with Code 56, investigate the shared Windows network class configuration layer rather than treating it as an isolated hardware fault.",
        "Always record exact error codes (`Code 56`, `CM_PROB_NEED_CLASS_CONFIG`, `0x800f0915`) and driver package names (`rtcx21x64.inf`, `netwtw08`) for reproducible troubleshooting.",
        "Documenting what did NOT work is just as valuable as documenting a fix."
      ],
      references: [
        "Microsoft Windows Driver Documentation — Device Manager Error Code 56 (`CM_PROB_NEED_CLASS_CONFIG`)",
        "Microsoft Learn — Repair a Windows Image (DISM Error `0x800f0915` and `/Source` usage)"
      ],
      repoLink: "Link to be added",
      reportLink: "Evidence pending"
    },

    {
      id: "case-dvwa-web-security",
      title: "Web Application Security Lab — DVWA (Practice / In Progress)",
      slug: "dvwa-web-application-security-lab",
      category: "Web Security",
      secondaryCategories: ["VAPT", "SOC"],
      status: "Practice / In Progress",
      honestBadge: "Concepts Studied vs. Lab Practice Clearly Separated — Evidence Pending",
      createdDate: "Date to be added",
      updatedDate: "Date to be added",
      summary: "Exploring Damn Vulnerable Web Application (DVWA) in an isolated local environment to study SQL Injection (SQLi) and Cross-Site Scripting (XSS) mechanisms, request/response behaviour, and defensive coding remediations.",
      overview: "Damn Vulnerable Web Application (DVWA) is an intentionally vulnerable PHP/MySQL web application designed for legal security education. This entry separates the web security concepts studied from hands-on lab tests in progress, without inventing payloads, severity ratings, or unverified findings.",
      objectivesAndScope: [
        "Authorised Scope: Local, isolated DVWA instance running strictly inside an authorised personal lab environment.",
        "Understand how unsanitised user input interacts with backend SQL queries (SQL Injection) and browser DOM/HTML rendering (Cross-Site Scripting).",
        "Compare vulnerable application behaviour with secure coding patterns (prepared statements, input validation, and output encoding)."
      ],
      labEnvironment: {
        host: "HP OMEN 16 (Windows 11, 16 GB RAM) running isolated local lab environment",
        networkMode: "Localhost / Isolated Host-Only Lab Network",
        addressNote: "DVWA must never be exposed to public or bridged untrusted networks due to intentional vulnerabilities.",
        topologyDiagramType: "dvwa-web-flow"
      },
      toolsUsed: [
        "DVWA (Damn Vulnerable Web Application)",
        "Web Browser & Browser Developer Tools (Network / Inspector)",
        "Kali Linux / Local Web Stack (Apache / PHP / MySQL concepts)"
      ],
      configurationSteps: [
        "Deployed DVWA inside an isolated local environment.",
        "Explored DVWA security level settings (Low / Medium / High / Impossible) to understand how defensive controls change code behaviour."
      ],
      methodology: [
        "Concept Study — SQL Injection (SQLi): Studied how string concatenation in SQL queries allows input to alter query logic, and how MySQL backend queries process parameters.",
        "Concept Study — Cross-Site Scripting (XSS): Studied Reflected vs. Stored XSS concepts and how unencoded output executes scripts in a user's browser session.",
        "Lab Exploration (In Progress): Navigating DVWA modules and documenting step-by-step request/response observations (screenshots and request logs pending)."
      ],
      testScenarios: [
        {
          scenario: "SQL Injection Concept & Query Logic Study",
          command: "DVWA SQL Injection Module (Isolated Lab Exploration)",
          expected: "Observe how backend SQL queries handle user-supplied ID inputs across different security levels.",
          observed: "Concept studied and environment explored; specific test payload logs and screenshots are marked 'Evidence pending'."
        },
        {
          scenario: "Cross-Site Scripting (XSS) Concept Study",
          command: "DVWA Reflected / Stored XSS Modules (Isolated Lab Exploration)",
          expected: "Observe how unescaped user input is rendered in HTML responses.",
          observed: "Concept studied and environment explored; specific test captures are marked 'Evidence pending'."
        }
      ],
      evidenceList: [
        { item: "Sanitised screenshots of DVWA lab setup and module exploration", status: "Evidence pending" },
        { item: "Comparison notes of Vulnerable (Low) vs. Parameterised (Impossible) PHP source code in DVWA", status: "Evidence pending" }
      ],
      findingsAndAnalysis: "- **Concepts Studied**: SQL Injection (authentication bypass and data extraction mechanics), Reflected and Stored XSS, HTTP GET/POST parameter handling, and server-side vs. client-side validation.\n- **Hands-on Verification Status**: Initial DVWA environment exploration is in progress. No fabricated payloads, CVSS scores, or exploitation claims are listed prior to attaching verified lab screenshots.",
      detectionAndTechnical: "How SOC Analysts Detect SQLi and XSS in Web Server Logs:\n- **Web Server Access Logs (Apache/Nginx)**: Look for anomalous query strings containing SQL keywords (`UNION`, `SELECT`, `SLEEP`, `' OR `), URL-encoded characters (`%27`, `%3Cscript%3E`), or spikes in HTTP `500` (database error) and `200` response sizes.\n- **WAF / IDS Signatures**: Inspect HTTP parameters and POST bodies for script tags, event handlers (`onerror=`, `onload=`), and SQL tautologies.",
      limitationsAndFalsePositives: "Detailed test execution logs and packet/request captures are currently pending addition to the portfolio.",
      remediation: [
        "SQL Injection Defense: Use parameterised queries / prepared statements (e.g., PDO in PHP or parameterised `cursor.execute(query, params)` in Python `mysql.connector`) so user input is treated strictly as data, never executable SQL syntax.",
        "XSS Defense: Apply context-aware output encoding before rendering user-supplied data in HTML, attributes, or JavaScript, and implement a strict Content Security Policy (CSP).",
        "Database Hardening: Enforce least privilege on the web application's MySQL database account."
      ],
      challengesAndTroubleshooting: "Ensuring DVWA remains strictly isolated from external networks while configuring database backend permissions.",
      lessonsLearned: [
        "Client-side validation alone is not a security control because HTTP requests can be modified before reaching the server.",
        "Reviewing DVWA's 'Impossible' level source code is a practical way to see how prepared statements and anti-CSRF tokens stop attacks."
      ],
      references: [
        "OWASP Top 10 — Injection & Cross-Site Scripting",
        "DVWA Official Project Documentation"
      ],
      repoLink: "Link to be added",
      reportLink: "Evidence pending"
    },

    {
      id: "case-linux-virtualbox-networking",
      title: "Linux, Kali & VirtualBox Private Networking Practice",
      slug: "linux-virtualbox-networking-practice",
      category: "Network Security",
      secondaryCategories: ["SOC", "VAPT"],
      status: "Learning / Practice",
      honestBadge: "Hands-on CLI, Interface Analysis & Shell Troubleshooting",
      createdDate: "Date to be added",
      updatedDate: "Date to be added",
      summary: "Hands-on practice with Linux network interface inspection (`ip addr`, `lo` vs `eth0`), VirtualBox private networking, Nmap discovery, Wireshark/tcpdump packet exploration, UFW rules, Apache/Nginx service concepts, keyboard layout utility (`setxkbmap`), and shell alias troubleshooting (`.bashrc` vs non-Bash shell errors).",
      overview: "A foundational part of security operations and penetration testing is fluency in the Linux terminal and virtual network configuration. This entry documents hands-on practice in Kali Linux and VirtualBox, including real shell configuration errors encountered and investigated while setting up custom aliases.",
      objectivesAndScope: [
        "Understand Linux network interfaces (`lo` loopback vs. `eth0` Ethernet adapter) and why multiple IP addresses appear in `ip addr` output.",
        "Practise authorised network discovery (`nmap`), packet capture (`wireshark`, `tcpdump`), and host firewall management (`ufw`).",
        "Troubleshoot shell startup configuration issues when adding aliases (`uskey`, NetworkManager restart, and alias listing) to `~/.bashrc`."
      ],
      labEnvironment: {
        host: "HP OMEN 16 (Windows 11, 16 GB RAM)",
        networkMode: "VirtualBox Private / Host-Only Networking",
        addressNote: "Studied loopback (`127.0.0.1/8` on `lo`) versus virtual Ethernet interface (`eth0`) IPv4/IPv6 bindings.",
        topologyDiagramType: "virtualbox-lab"
      },
      toolsUsed: [
        "Kali Linux Terminal (`ip addr`, `ps`, `systemctl` concepts)",
        "Nmap, Wireshark & tcpdump",
        "UFW (Uncomplicated Firewall)",
        "X11 Keyboard Utility (`setxkbmap`)",
        "Shell Configuration (`~/.bashrc`, `alias`)"
      ],
      configurationSteps: [
        "Inspected network interfaces with `ip addr` to distinguish `1: lo: <LOOPBACK,UP,LOWER_UP>` (`127.0.0.1/8`) from `2: eth0` (virtual LAN interface).",
        "Added `alias uskey='setxkbmap us'` to `~/.bashrc` to quickly set the US keyboard layout in Kali Linux and sourced the file.",
        "Investigated the resulting `shopt: command not found` and `complete: command not found` messages."
      ],
      methodology: [
        "Interface & IP Analysis: Examined why a single Linux VM displays multiple IP addresses (loopback `127.0.0.1`, primary IPv4 address on `eth0`, and link-local IPv6 `fe80::` addresses, or additional virtual adapters).",
        "Discovery & Traffic Exploration: Used basic Nmap discovery scans against the isolated lab subnet and observed packet flows in Wireshark and `tcpdump`.",
        "Firewall & Service Concepts: Practised UFW rule concepts and studied how web services (Apache/Nginx) bind to listening ports.",
        "Shell Alias Troubleshooting: Diagnosed why sourcing `~/.bashrc` produced `shopt: command not found` and `complete: command not found`, and documented clean alias patterns for keyboard layout switching, restarting `NetworkManager`, and listing active aliases."
      ],
      testScenarios: [
        {
          scenario: "Sourcing `~/.bashrc` After Adding `uskey` Alias",
          command: "echo \"alias uskey='setxkbmap us'\" >> ~/.bashrc\n. ~/.bashrc",
          expected: "Load the `uskey` alias into the current terminal session.",
          observed: "Produced `shopt: command not found` and `complete: command not found` because `~/.bashrc` contains Bash-specific builtins (`shopt`, `complete`) that fail when sourced inside a non-Bash shell (such as `zsh`, which is default in recent Kali Linux releases, or POSIX `sh`)."
        },
        {
          scenario: "Inspecting Interfaces & Aliases",
          command: "ip addr\nalias",
          expected: "View active IP bindings on `lo` and `eth0`, and list currently defined shell aliases.",
          observed: "Confirmed `lo` handles local host loopback traffic while `eth0` handles VirtualBox network traffic; `alias` lists active shortcuts."
        }
      ],
      evidenceList: [
        { item: "Sanitised terminal output of `ip addr` and Nmap lab discovery", status: "Evidence pending" },
        { item: "Wireshark / tcpdump packet capture sample from isolated lab", status: "Evidence pending" }
      ],
      findingsAndAnalysis: "1. **Why `shopt` and `complete` Failed**: Kali Linux uses `zsh` as its default interactive shell (or a user may run `sh ~/.bashrc`). `shopt` and `complete` are Bash builtins. Sourcing `~/.bashrc` from `zsh` or `sh` triggers `command not found` errors for those builtins. If using `zsh`, aliases belong in `~/.zshrc` (or `~/.bash_aliases` sourced conditionally).\n2. **Useful Admin Aliases Studied**:\n   - Keyboard layout: `alias uskey='setxkbmap us'`\n   - Restart NetworkManager: `alias netrestart='sudo systemctl restart NetworkManager'`\n   - List all defined aliases: `alias` (or `alias -p`)",
      detectionAndTechnical: "Understanding Linux network interfaces (`lo` vs `eth0`), listening ports, and shell startup files (`.bashrc`, `.zshrc`) is directly applicable to Linux endpoint forensics and persistence hunting (for example, attackers occasionally plant malicious aliases or commands in shell RC files—MITRE ATT&CK `T1546.004`: Unix Shell Configuration Modification).",
      limitationsAndFalsePositives: "Represents foundational Linux and networking practice rather than enterprise Linux system administration.",
      remediation: [
        "Check the active shell with `echo $SHELL` or `ps -p $$` before editing shell configuration files (`~/.zshrc` for Zsh vs. `~/.bashrc` for Bash).",
        "Keep custom aliases modular in a separate `~/.aliases` file compatible with both Bash and Zsh."
      ],
      challengesAndTroubleshooting: "Resolved confusion around shell builtins (`shopt`, `complete`) by identifying the mismatch between Bash configuration syntax and non-Bash shells.",
      lessonsLearned: [
        "Always check which shell interpreter is running (`echo $0` / `echo $SHELL`) when troubleshooting RC script errors.",
        "Understanding why `lo` (`127.0.0.1`) and `eth0` show different addresses clarifies local loopback services versus network-exposed services."
      ],
      references: [
        "GNU Bash Manual — Shell Builtin Commands (`shopt`, `complete`, `alias`)",
        "Kali Linux Documentation — Default Zsh Shell & Network Configuration"
      ],
      repoLink: "Link to be added",
      reportLink: "Evidence pending"
    },

    {
      id: "case-python-mysql-learning",
      title: "Python Fundamentals & MySQL Integration — Learning Progression",
      slug: "python-fundamentals-mysql-integration",
      category: "Python",
      secondaryCategories: ["Automation", "SQL"],
      status: "Learning",
      honestBadge: "Growing Skill — Practice Code vs. Future Security Script Ideas Clearly Separated",
      createdDate: "Date to be added",
      updatedDate: "Date to be added",
      summary: "Building Python programming foundations from beginner level—covering variables, data types, collections, control flow, functions, OOP fundamentals, an ATM-style practice project, and connecting Python to MySQL using `mysql.connector`—with a clear roadmap toward security automation.",
      overview: "Python is a core language for security operations, log parsing, and SOC automation. This entry documents my current beginner-to-intermediate learning progression honestly, showing what I have actually practised alongside the security automation scripts I plan to build next.",
      objectivesAndScope: [
        "Master core Python syntax: variables, data types, lists/tuples/dictionaries/sets, conditionals, loops, functions, and Object-Oriented Programming (OOP) fundamentals.",
        "Apply programming logic in structured console exercises, including an ATM-style practice project.",
        "Connect Python scripts to a local MySQL database using `mysql.connector` to execute queries safely."
      ],
      labEnvironment: {
        host: "HP OMEN 16 (Windows 11, Python 3 environment & MySQL Workbench)",
        networkMode: "Localhost Development (`127.0.0.1` MySQL instance)",
        addressNote: "Uses fictional sample records only; no personal data or hardcoded production credentials.",
        topologyDiagramType: "python-mysql-flow"
      },
      toolsUsed: [
        "Python 3",
        "Python `mysql-connector-python` (`mysql.connector`)",
        "MySQL Server & MySQL Workbench"
      ],
      configurationSteps: [
        "Configured local Python 3 environment and installed `mysql.connector`.",
        "Practised core control flow and OOP concepts through an ATM-style console simulation (balance inquiry, deposit/withdrawal validation, PIN check logic).",
        "Established a local connection between Python and the MySQL practice database (`a01`)."
      ],
      methodology: [
        "Stage 1 — Core Syntax & Logic: Practised variables, collections, loops, conditionals, and modular functions.",
        "Stage 2 — Applied Practice Project: Built an ATM-style practice program to combine state management, input validation, and conditional logic.",
        "Stage 3 — Database Connectivity: Used `mysql.connector.connect()` and cursor objects to query and insert fictional sample records in a local MySQL table.",
        "Stage 4 — Future Security Scripting Roadmap (Planned Ideas, Not Yet Built): Defined 7 practical security automation script ideas to build as Python fluency grows."
      ],
      testScenarios: [
        {
          scenario: "Python to MySQL Parameterised Query Pattern (Learning Practice)",
          command: "import mysql.connector\n# Fictional local practice example (credentials via env vars in real projects)\n# SELECT id, name, city FROM the WHERE city = %s",
          expected: "Retrieve fictional practice records from MySQL table `the` in database `a01` using Python.",
          observed: "Successfully practised connecting Python to MySQL with `mysql.connector`."
        }
      ],
      evidenceList: [
        { item: "ATM-style Python practice script repository link", status: "Link to be added" },
        { item: "Sanitised Python `mysql.connector` practice script", status: "Evidence pending" }
      ],
      findingsAndAnalysis: "### Practised Today vs. Planned Future Security Scripts (Ideas Only)\n- **Practised So Far**: Variables, data types, collections, conditionals, loops, functions, basic programming logic, OOP fundamentals, ATM-style practice project, and Python-to-MySQL connectivity via `mysql.connector`.\n- **Planned Security Script Ideas (Not Claimed as Completed Work)**:\n  1. Log parsing/filtering and event analysis.\n  2. IOC (Indicator of Compromise) extraction and API-based enrichment.\n  3. File hashing (SHA-256) and integrity checks.\n  4. Login-event analysis (detecting repeated failed authentication patterns).\n  5. Basic service/port monitoring in an authorised lab.\n  6. Security event processing and automated alert/report generation.\n  7. Small automation utilities with structured error handling (`try/except`) and unit tests.",
      detectionAndTechnical: "Using parameterised queries (`cursor.execute(\"SELECT * FROM the WHERE id = %s\", (record_id,))`) in `mysql.connector` directly connects Python database programming with Web Security (preventing SQL Injection).",
      limitationsAndFalsePositives: "Current Python work is at a foundational learning stage; the 7 security scripts listed above are planned learning goals, not completed production tools.",
      remediation: [
        "Store database credentials in environment variables (`.env`) rather than hardcoding passwords in Python files.",
        "Always use parameterised placeholders (`%s`) with `mysql.connector` instead of Python f-strings when constructing SQL statements."
      ],
      challengesAndTroubleshooting: "Learning to handle connection lifecycles (`cursor.close()`, `conn.close()`) and data type conversions between MySQL rows and Python tuples/dictionaries.",
      lessonsLearned: [
        "Building small interactive programs like an ATM simulator helps solidify state, loops, and input validation before tackling log parsers.",
        "Connecting Python to MySQL provides a clear foundation for building future vulnerability or incident trackers."
      ],
      references: [
        "Python Official Documentation (docs.python.org)",
        "MySQL Connector/Python Developer Guide"
      ],
      repoLink: "Link to be added",
      reportLink: "Evidence pending"
    },

    {
      id: "case-mysql-sql-query-practice",
      title: "MySQL / SQL Query Practice & Security Data Concepts — Learning",
      slug: "mysql-sql-query-practice",
      category: "SQL",
      secondaryCategories: ["Python", "SOC"],
      status: "Learning",
      honestBadge: "Structured SQL Progression with Fictional Sample Schema (`a01.the`)",
      createdDate: "Date to be added",
      updatedDate: "Date to be added",
      summary: "Practising relational database operations in MySQL Workbench—from DDL/DML (`ALTER`, `DROP`, `DELETE`, `RENAME`, `UPDATE`) and filtering/aggregation (`WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`, `LIMIT`, `DISTINCT`, `LIKE`, `CASE`) to `JOIN`s, `UNION`, subqueries, window functions, stored procedures, and ETL concepts.",
      overview: "SQL is directly relevant to cybersecurity—not only for understanding SQL Injection, but also for querying structured security logs, asset inventories, and incident tracking databases (and many SIEM/hunting platforms like osquery or Defender XDR use SQL-like syntax). This entry presents my SQL learning progression honestly using a fictionalised representation of my practice schema (`a01.the`).",
      objectivesAndScope: [
        "Practise schema modification, data manipulation, and analytical queries in MySQL Workbench.",
        "Understand how table cloning, aggregations, `JOIN`s, subqueries, window functions, and stored procedures work.",
        "Explore how relational databases can support future security use cases (such as querying sanitised logs or tracking vulnerabilities) without claiming a completed security database project."
      ],
      labEnvironment: {
        host: "HP OMEN 16 (Windows 11, MySQL Server & MySQL Workbench)",
        networkMode: "Local Practice Database (`a01`)",
        addressNote: "Practice database `a01`, table `the` with columns `id`, `name`, `city`, `phone`, `email`. All sample records shown below are 100% fictional (`example.invalid`) to protect privacy.",
        topologyDiagramType: "python-mysql-flow"
      },
      toolsUsed: [
        "MySQL Workbench",
        "MySQL Server",
        "Python `mysql.connector` (for cross-language integration practice)"
      ],
      configurationSteps: [
        "Created practice database `a01` and table `the (id, name, city, phone, email)` in MySQL Workbench.",
        "Populated test rows using synthetic sample values to practise schema changes, filtering, and analytical queries."
      ],
      methodology: [
        "Schema & Table Management (DDL): Practised `ALTER`, `DROP`, `RENAME`, and table copying/cloning concepts (`CREATE TABLE ... AS SELECT` / `CREATE TABLE ... LIKE`).",
        "Data Manipulation & Filtering (DML/DQL): Practised `SELECT`, `DISTINCT`, `WHERE`, `LIKE`, `UPDATE`, `DELETE`, `ORDER BY`, and `LIMIT`.",
        "Aggregations & Conditional Logic: Practised `GROUP BY`, `HAVING`, and `CASE WHEN ... THEN ... END` expressions.",
        "Advanced Relational & Procedural Concepts Studied/Practised: `JOIN`s (`INNER`, `LEFT`, `RIGHT`), `UNION` / `UNION ALL`, subqueries, window functions (`ROW_NUMBER()`, `RANK()`, `OVER (PARTITION BY ...)`), stored procedures, and ETL (Extract, Transform, Load) concepts."
      ],
      testScenarios: [
        {
          scenario: "Fictional Sample Schema (`a01.the`) & Analytical Query Practice",
          command: "-- Practice schema structure (Fictional sample data only):\nUSE a01;\nSELECT city, COUNT(*) AS record_count\nFROM `the`\nWHERE email LIKE '%@example.invalid'\nGROUP BY city\nHAVING COUNT(*) >= 1\nORDER BY record_count DESC\nLIMIT 10;",
          expected: "Group fictional records by city, filter aggregated counts with `HAVING`, and sort results.",
          observed: "Practised combining `WHERE`, `LIKE`, `GROUP BY`, `HAVING`, `ORDER BY`, and `LIMIT` in MySQL Workbench."
        }
      ],
      evidenceList: [
        { item: "Sanitised `.sql` practice script with fictional sample data", status: "Evidence pending / Link to be added" },
        { item: "MySQL Workbench query execution screenshots (with fictional rows only)", status: "Evidence pending" }
      ],
      findingsAndAnalysis: "### Potential Future Security Applications (Conceptual — Not Claimed as Completed Projects)\n1. **Querying Sanitised Authentication Logs**: Using `GROUP BY user, source_ip HAVING COUNT(*) > 5` and window functions to spot brute-force bursts.\n2. **Storing Structured Security Events**: Normalising parsed log fields (timestamp, severity, event_id, source_ip) into relational tables via a Python ETL script.\n3. **Basic Vulnerability / Incident Tracker**: Joining an `assets` table with a `findings` table to generate remediation status reports.",
      detectionAndTechnical: "Understanding SQL query structure (`UNION`, comments, boolean conditions, and metadata tables) directly strengthens both offensive/defensive SQL Injection analysis and defensive log querying in tools like `osquery`.",
      limitationsAndFalsePositives: "Presented strictly as a SQL learning progression in MySQL Workbench and Python `mysql.connector`, not as professional Database Administrator (DBA) experience or a completed security database product.",
      remediation: [
        "Never use real personal names, phone numbers, or email addresses in practice databases or public screenshots; always use reserved domains like `@example.com` or `@example.invalid` (RFC 2606).",
        "Enforce role-based grants and parameterised queries when connecting applications to MySQL."
      ],
      challengesAndTroubleshooting: "Understanding the execution order of SQL clauses (especially why `WHERE` filters individual rows before `GROUP BY`, whereas `HAVING` filters aggregated groups after `GROUP BY`).",
      lessonsLearned: [
        "Practising `GROUP BY`, `HAVING`, `CASE`, and window functions builds the exact analytical mindset needed for SIEM aggregation queries.",
        "Separating DDL schema changes (`ALTER`, `DROP`, `RENAME`) from DML row changes (`DELETE`, `UPDATE`) prevents accidental data loss."
      ],
      references: [
        "MySQL 8.0 Reference Manual — SELECT, JOIN, Window Functions & Stored Procedures",
        "RFC 2606 — Reserved Top Level DNS Names (`example.com`, `example.invalid`)"
      ],
      repoLink: "Link to be added",
      reportLink: "Evidence pending"
    }
  ],

  // 24-Item Long-Term Project Roadmap (All items explicitly marked "Planned")
  // Highlighting the 8-Step Suggested SOC Build Order
  socBuildOrder: [
    { step: 1, roadmapId: 1, shortName: "SOC Home Lab", detail: "Enterprise SOC Home Lab (Wazuh, Sysmon, auditd)" },
    { step: 2, roadmapId: 3, shortName: "Windows Endpoint Detection", detail: "Windows Endpoint Detection Lab (Sysmon, Wazuh, Sigma)" },
    { step: 3, roadmapId: 2, shortName: "SIEM Platform", detail: "SIEM Investigation Platform (Splunk, SPL, Correlation)" },
    { step: 4, roadmapId: 4, shortName: "Network IDS", detail: "Network IDS and Traffic Analysis (Suricata, Zeek, Wireshark)" },
    { step: 5, roadmapId: 6, shortName: "ATT&CK Detection Library", detail: "MITRE ATT&CK Detection Library (Sigma, Wazuh, Splunk)" },
    { step: 6, roadmapId: 7, shortName: "Threat Hunting", detail: "Threat Hunting Environment (Velociraptor, osquery, Sysmon)" },
    { step: 7, roadmapId: 5, shortName: "SOC Automation", detail: "SOC Incident Response Automation (Python, n8n, TheHive)" },
    { step: 8, roadmapId: 11, shortName: "Digital Forensics", detail: "Digital Forensics Lab (Autopsy, Sleuth Kit, Volatility 3)" }
  ],

  roadmap: [
    // SOC AND SECURITY OPERATIONS (1-5)
    {
      id: 1,
      title: "Enterprise SOC Home Lab",
      domain: "SOC and Security Operations",
      socOrder: 1,
      status: "Planned",
      objective: "Build a controlled log and endpoint monitoring and alert investigation environment to practise end-to-end SOC triage.",
      tools: ["Wazuh", "Sysmon", "Linux auditd", "Kali Linux", "Atomic Red Team", "MITRE ATT&CK", "Python"],
      prerequisites: ["Linux & VirtualBox private networking", "Basic Windows/Linux log familiarity", "16 GB RAM resource budgeting (run Wazuh server + 1 monitored agent at a time)"],
      outcomes: ["Deploy and tune Wazuh agents on Windows (Sysmon) and Linux (auditd)", "Execute safe, controlled Atomic Red Team tests and map generated alerts to MITRE ATT&CK", "Write structured alert triage notes"],
      evidenceChecklist: ["Lab network diagram & RAM allocation table", "Sanitised Wazuh alert JSON/screenshots", "Step-by-step investigation write-up"]
    },
    {
      id: 2,
      title: "SIEM Investigation Platform",
      domain: "SOC and Security Operations",
      socOrder: 3,
      status: "Planned",
      objective: "Ingest multi-source logs (Windows, Linux, firewall, and web server logs) into Splunk to build correlation searches, dashboards, and tuned alerts.",
      tools: ["Splunk", "Windows Event Logs", "Linux Logs", "Firewall Logs", "Web Server Logs", "SPL"],
      prerequisites: ["Basic log structure knowledge", "SQL/aggregation mindset (`GROUP BY`, filtering)"],
      outcomes: ["Write SPL queries to investigate brute-force, privilege escalation, and web anomalies", "Create a SOC triage dashboard and tune noisy correlation rules"],
      evidenceChecklist: ["SPL query library with explanations", "Sanitised dashboard screenshots", "False-positive tuning comparison"]
    },
    {
      id: 3,
      title: "Windows Endpoint Detection Lab",
      domain: "SOC and Security Operations",
      socOrder: 2,
      status: "Planned",
      objective: "Configure deep host telemetry on a Windows VM using Sysmon, Event Viewer, Windows Defender, and Wazuh/Sigma rules.",
      tools: ["Sysmon", "Wazuh", "Event Viewer", "PowerShell", "Windows Defender", "Sigma"],
      prerequisites: ["Windows system internals basics", "Understanding process creation (Event ID 4688 / Sysmon Event ID 1)"],
      outcomes: ["Deploy a modular Sysmon XML configuration", "Detect suspicious PowerShell flags, persistence registry keys, and credential access attempts"],
      evidenceChecklist: ["Sysmon config XML & rationale", "Event ID correlation walkthrough", "Sigma rule validation results"]
    },
    {
      id: 4,
      title: "Network IDS and Traffic Analysis",
      domain: "SOC and Security Operations",
      socOrder: 4,
      status: "Planned",
      objective: "Capture and inspect lab network traffic using Wireshark, tcpdump, Suricata, and Zeek to identify scanning, cleartext anomalies, and C2 patterns.",
      tools: ["Wireshark", "tcpdump", "Suricata", "Zeek", "Security Onion", "Python"],
      prerequisites: ["TCP/IP & DNS fundamentals", "Wireshark/tcpdump practice", "Note for 16 GB RAM host: prefer standalone Suricata/Zeek on Linux VM over full multi-node Security Onion if RAM is constrained"],
      outcomes: ["Write custom Suricata rules for lab traffic", "Correlate Zeek `conn.log`, `dns.log`, and `http.log` with PCAP evidence"],
      evidenceChecklist: ["Custom Suricata `.rules` file", "Sanitised PCAP analysis report", "Zeek log parsing script"]
    },
    {
      id: 5,
      title: "SOC Incident Response Automation",
      domain: "SOC and Security Operations",
      socOrder: 7,
      status: "Planned",
      objective: "Automate alert enrichment and case creation across Wazuh, VirusTotal, n8n, and TheHive while enforcing human-in-the-loop approval for any disruptive containment action.",
      tools: ["Python", "Wazuh", "n8n", "VirusTotal API", "TheHive", "REST APIs"],
      prerequisites: ["Python fundamentals & API handling", "Working Wazuh alert pipeline"],
      outcomes: ["Enrich alert IOCs automatically via VirusTotal API", "Create structured cases in TheHive", "Implement mandatory human approval gates before blocking IPs or isolating hosts"],
      evidenceChecklist: ["Workflow architecture diagram", "Sanitised n8n/Python enrichment code", "Human-approval safety gate documentation"]
    },

    // THREAT HUNTING AND DETECTION ENGINEERING (6-10)
    {
      id: 6,
      title: "MITRE ATT&CK Detection Library",
      domain: "Threat Hunting and Detection Engineering",
      socOrder: 5,
      status: "Planned",
      objective: "Build a version-controlled library of vendor-agnostic Sigma detection rules mapped to MITRE ATT&CK techniques and translated for Wazuh, Splunk, and Sentinel.",
      tools: ["Sigma", "Wazuh", "Splunk", "Microsoft Sentinel", "Python", "MITRE ATT&CK"],
      prerequisites: ["Windows/Linux log familiarity", "SIEM query basics"],
      outcomes: ["Author and test Sigma rules with documented false-positive scenarios", "Map detections to specific ATT&CK tactics, techniques, and sub-techniques"],
      evidenceChecklist: ["YAML Sigma rule files", "Log test cases (true positive vs. benign positive)", "ATT&CK Navigator layer export"]
    },
    {
      id: 7,
      title: "Threat Hunting Environment",
      domain: "Threat Hunting and Detection Engineering",
      socOrder: 6,
      status: "Planned",
      objective: "Conduct hypothesis-driven threat hunts across endpoints using Velociraptor, osquery (SQL syntax), Sysmon, and Splunk.",
      tools: ["Velociraptor", "osquery", "Sysmon", "Splunk", "Python", "MITRE ATT&CK"],
      prerequisites: ["SQL fundamentals (`SELECT`, `JOIN`, `WHERE`)", "Endpoint persistence & process knowledge"],
      outcomes: ["Write `osquery` SQL queries to inspect running processes, listening ports, and scheduled tasks", "Collect targeted endpoint artefacts with Velociraptor"],
      evidenceChecklist: ["Hunt hypothesis cards", "osquery SQL query pack", "Hunt findings & baseline report"]
    },
    {
      id: 8,
      title: "Threat Intelligence / IOC Platform",
      domain: "Threat Hunting and Detection Engineering",
      socOrder: null,
      status: "Planned",
      objective: "Aggregate, normalise, and score Indicators of Compromise (IOCs) using Python, VirusTotal, AbuseIPDB, and threat intelligence platforms.",
      tools: ["MISP", "OpenCTI", "VirusTotal API", "AbuseIPDB", "Python"],
      prerequisites: ["Python API requests & JSON parsing", "Understanding IOC types (hashes, IPs, domains, URLs) and Pyramid of Pain"],
      outcomes: ["Query reputation APIs with rate-limiting and caching", "Generate structured IOC enrichment summaries for SOC analysts"],
      evidenceChecklist: ["Sanitised IOC enrichment script", "Sample threat intel report", "API rate-limit & error-handling notes"]
    },
    {
      id: 9,
      title: "Phishing Detection and Email Investigation",
      domain: "Threat Hunting and Detection Engineering",
      socOrder: null,
      status: "Planned",
      objective: "Analyse suspicious email headers, SPF/DKIM/DMARC authentication results, embedded URLs, domains, attachments, and file hashes safely.",
      tools: ["Python", "VirusTotal", "URLhaus", "CyberChef", "YARA"],
      prerequisites: ["DNS & email protocol basics (SMTP, SPF, DKIM, DMARC)", "Safe handling of defanged URLs (`hxxp://`)"],
      outcomes: ["Parse raw `.eml` headers to trace hop delays and spoofing indicators", "Extract and defang URLs/hashes and scan attachments with YARA rules"],
      evidenceChecklist: ["Sanitised `.eml` analysis walkthrough", "Python header/IOC parser", "Phishing triage checklist"]
    },
    {
      id: 10,
      title: "Insider Threat Detection",
      domain: "Threat Hunting and Detection Engineering",
      socOrder: null,
      status: "Planned",
      objective: "Model anomalous access, off-hours privilege use, and bulk data staging in lab logs while explicitly accounting for employee privacy and false positives.",
      tools: ["Python", "Wazuh", "Windows Event Logs", "Sysmon", "SQL", "ELK / OpenSearch"],
      prerequisites: ["SQL aggregation & window functions", "Windows authentication & object access auditing"],
      outcomes: ["Write baseline queries for abnormal file access or removable media events", "Document privacy safeguards and high false-positive scenarios (e.g., IT admins, backups)"],
      evidenceChecklist: ["Synthetic dataset & SQL/SIEM queries", "Privacy & ethics impact note", "False-positive tuning guide"]
    },

    // DFIR (11-14)
    {
      id: 11,
      title: "Digital Forensics Lab",
      domain: "DFIR",
      socOrder: 8,
      status: "Planned",
      objective: "Perform disk and memory forensics on controlled training images using Autopsy, Sleuth Kit, Volatility 3, FTK Imager, and Eric Zimmerman's tools.",
      tools: ["Autopsy", "The Sleuth Kit", "Volatility 3", "FTK Imager", "Eric Zimmerman's Tools", "Python"],
      prerequisites: ["File system & OS fundamentals", "Chain-of-custody and SHA-256 hashing concepts"],
      outcomes: ["Verify image integrity with SHA-256 hashes", "Extract process trees and network connections from RAM dumps using Volatility 3", "Reconstruct timelines from disk artefacts"],
      evidenceChecklist: ["Forensic acquisition & hash verification log", "Volatility 3 plugin analysis notes", "Timeline reconstruction report"]
    },
    {
      id: 12,
      title: "Malware Analysis Lab",
      domain: "DFIR",
      socOrder: null,
      status: "Planned",
      objective: "Conduct static and behavioural analysis of safe, harmless training samples inside a strictly isolated REMnux and FLARE-VM lab environment.",
      tools: ["REMnux", "FLARE-VM", "Ghidra", "YARA", "Wireshark", "Procmon", "Python"],
      prerequisites: ["Strict VM isolation (Host-Only/Internal network with no shared folders or clipboard)", "PE/ELF file basics"],
      outcomes: ["Extract strings, imports, and file hashes during static triage", "Observe process, file, registry, and fake-network behaviour with Procmon and Wireshark", "Write YARA rules to match observed artefacts"],
      evidenceChecklist: ["Lab isolation safety checklist", "Static & dynamic analysis report", "Custom YARA rule"]
    },
    {
      id: 13,
      title: "Ransomware Detection / IR Simulation",
      domain: "DFIR",
      socOrder: null,
      status: "Planned",
      objective: "Use harmless file-activity simulations in an isolated lab to test high-frequency file modification detection, shadow copy deletion alerts, and IR playbooks.",
      tools: ["Wazuh", "Sysmon", "Python", "YARA", "Windows Event Logs", "MITRE ATT&CK"],
      prerequisites: ["Windows Endpoint Detection Lab (#3)", "Harmless simulation scripts only (no live ransomware)"],
      outcomes: ["Detect rapid canary-file renaming and `vssadmin` simulation commands", "Execute a structured containment and recovery playbook"],
      evidenceChecklist: ["Harmless simulator Python script", "Wazuh/Sysmon detection alerts", "IR containment & lessons-learned report"]
    },
    {
      id: 14,
      title: "Automated Forensics Collection",
      domain: "DFIR",
      socOrder: null,
      status: "Planned",
      objective: "Build a lightweight triage script in Python and PowerShell/Bash to collect volatile host artefacts, record UTC timestamps, and generate SHA-256 integrity manifests.",
      tools: ["Python", "PowerShell", "Bash", "System Utilities", "SHA-256"],
      prerequisites: ["Python file I/O & `hashlib`", "Linux/Windows CLI commands for processes, network state, and users"],
      outcomes: ["Package volatile system state (`netstat`/`ss`, running processes, logged-in users, startup items) into a timestamped archive", "Compute and verify SHA-256 manifest hashes for every collected file"],
      evidenceChecklist: ["Triage script source code", "Sample manifest.sha256 output", "Order-of-volatility documentation"]
    },

    // VAPT (15-18)
    {
      id: 15,
      title: "Vulnerability Management Platform",
      domain: "VAPT",
      socOrder: null,
      status: "Planned",
      objective: "Run authenticated and unauthenticated vulnerability scans against authorised lab targets, store findings in MySQL, and prioritise remediation by risk context.",
      tools: ["Greenbone / OpenVAS", "Nmap", "Nessus Essentials (if available)", "Python", "MySQL", "OWASP ZAP"],
      prerequisites: ["Nmap scanning fundamentals", "MySQL schema design & Python `mysql.connector`"],
      outcomes: ["Compare discovery scan results with credentialed vulnerability scans", "Store and query scan findings in MySQL to track remediation status over time"],
      evidenceChecklist: ["MySQL vulnerability schema (`CREATE TABLE`)", "Sanitised scan comparison report", "Risk prioritisation rubric"]
    },
    {
      id: 16,
      title: "Web Application Security Assessment Framework",
      domain: "VAPT",
      socOrder: null,
      status: "Planned",
      objective: "Perform structured web application security testing against OWASP Juice Shop and DVWA in Docker using Burp Suite Community, OWASP ZAP, and Nmap.",
      tools: ["Burp Suite Community", "OWASP ZAP", "Nmap", "SQLmap", "Python", "Docker", "OWASP Juice Shop"],
      prerequisites: ["DVWA web security fundamentals", "HTTP request/response & Docker basics"],
      outcomes: ["Map application attack surface and test OWASP Top 10 categories in an authorised Docker container", "Document reproduction steps, root causes, and secure code fixes"],
      evidenceChecklist: ["Scoped assessment report", "Sanitised HTTP request/response pairs", "Remediation verification notes"]
    },
    {
      id: 17,
      title: "Active Directory Attack and Defense Lab",
      domain: "VAPT",
      socOrder: null,
      status: "Planned",
      objective: "Study Active Directory enumeration, misconfigurations, and Windows security event detection in a lightweight Domain Controller + Client lab.",
      tools: ["Windows Server DC", "Windows Client", "Kali Linux", "BloodHound", "PowerShell", "Windows Event Logs", "MITRE ATT&CK"],
      prerequisites: ["Careful RAM allocation on 16 GB host (use Server Core for DC to save memory)", "Windows authentication basics (Kerberos / NTLM)"],
      outcomes: ["Identify common AD misconfigurations with BloodHound", "Correlate AD enumeration and Kerberoasting simulations with Windows Security Event IDs (`4768`, `4769`, `4624`, `4625`)"],
      evidenceChecklist: ["16 GB RAM-optimised AD topology guide", "Attack path vs. Event ID mapping table", "AD hardening recommendations"]
    },
    {
      id: 18,
      title: "Web Server / Network Security Monitoring",
      domain: "VAPT",
      socOrder: null,
      status: "Planned",
      objective: "Harden an Apache/Nginx web server with UFW/nftables and monitor access/error logs and network traffic with Wazuh, Suricata, and Python.",
      tools: ["Apache", "Nginx", "UFW / nftables", "Wazuh", "Suricata", "Python"],
      prerequisites: ["Linux Apache/Nginx & UFW concepts", "Web security basics (SQLi, XSS, directory traversal)"],
      outcomes: ["Configure least-privilege firewall rules and security headers", "Detect directory brute-forcing and web vulnerability scanners in access logs"],
      evidenceChecklist: ["Hardened Nginx/Apache config snippet", "UFW ruleset output", "Wazuh/Python web log alert validation"]
    },

    // CLOUD (19-20)
    {
      id: 19,
      title: "AWS Cloud Security Monitoring",
      domain: "Cloud",
      socOrder: null,
      status: "Planned",
      objective: "Monitor AWS control-plane and storage activity using CloudTrail, GuardDuty, IAM, S3, Python, and Wazuh while enforcing strict billing alerts and credential hygiene.",
      tools: ["AWS", "CloudTrail", "GuardDuty", "IAM", "S3", "Python", "Wazuh"],
      prerequisites: ["AWS Free Tier account with MFA on root, billing budget alerts configured, and zero hardcoded IAM keys"],
      outcomes: ["Ingest and analyse CloudTrail logs for root logins, IAM policy changes, and public S3 bucket modifications", "Review GuardDuty findings and automate safe read-only checks"],
      evidenceChecklist: ["Cost-control & IAM safety checklist", "Sanitised CloudTrail event analysis", "S3/IAM remediation steps"]
    },
    {
      id: 20,
      title: "Cloud Security Posture Management (CSPM)",
      domain: "Cloud",
      socOrder: null,
      status: "Planned",
      objective: "Audit cloud account configurations against security benchmarks using Prowler and ScoutSuite, storing structured posture findings in MySQL via Python.",
      tools: ["Prowler", "ScoutSuite", "AWS", "Python", "Docker", "MySQL"],
      prerequisites: ["AWS IAM read-only security audit permissions", "Python & MySQL integration (`mysql.connector`)"],
      outcomes: ["Run Prowler/ScoutSuite assessments and parse JSON/CSV output into MySQL", "Prioritise misconfigurations across IAM, logging, networking, and storage"],
      evidenceChecklist: ["Sanitised CSPM audit summary", "Python-to-MySQL parser script", "Remediation tracking query examples"]
    },

    // SPECIALIZED (21-24)
    {
      id: 21,
      title: "Python Security Automation Toolkit",
      domain: "Specialized",
      socOrder: null,
      status: "Planned",
      objective: "Consolidate modular Python utilities for log analysis, IOC extraction, reputation API lookups, SHA-256 file integrity checks, authorised port checks, and login analysis.",
      tools: ["Python", "REST APIs (VirusTotal / AbuseIPDB)", "SHA-256 (`hashlib`)", "Regex", "pytest / unittest"],
      prerequisites: ["Python fundamentals, functions, OOP, and error handling"],
      outcomes: ["Build CLI utilities with clean argument parsing (`argparse`), structured logging, error handling, and unit tests", "Generate Markdown/JSON investigation reports from raw log files"],
      evidenceChecklist: ["Modular Python repository with `README.md` and `.gitignore`", "Unit test outputs", "Sample generated Markdown report"]
    },
    {
      id: 22,
      title: "Honeypot / Attacker Behaviour Analysis",
      domain: "Specialized",
      socOrder: null,
      status: "Planned",
      objective: "Deploy an isolated SSH/Telnet honeypot (Cowrie / T-Pot) to study automated credential stuffing, command sequences, and attacker TTPs safely.",
      tools: ["Cowrie / T-Pot", "Python", "Elasticsearch", "Kibana", "GeoIP"],
      prerequisites: ["Strict network isolation and egress filtering so a honeypot cannot be used to pivot or attack third parties"],
      outcomes: ["Analyse attempted usernames/passwords, post-login shell commands, and downloaded payload hashes", "Visualise command frequency and TTP patterns"],
      evidenceChecklist: ["Isolation & egress-blocking architecture diagram", "Sanitised Cowrie JSON log analysis", "Top observed commands & TTP summary"]
    },
    {
      id: 23,
      title: "Security Configuration and Compliance Auditing",
      domain: "Specialized",
      socOrder: null,
      status: "Planned",
      objective: "Audit Linux and Windows endpoints against selected CIS Benchmark controls using read-only Python, PowerShell, and Bash checks stored in MySQL/Wazuh.",
      tools: ["Python", "PowerShell", "Bash", "CIS Benchmarks", "MySQL", "Wazuh"],
      prerequisites: ["Linux & Windows administration fundamentals", "MySQL & Python reporting"],
      outcomes: ["Write non-destructive configuration check scripts (password policy, SSH hardening, firewall state, auditd rules)", "Store pass/fail audit history in MySQL"],
      evidenceChecklist: ["Read-only audit check scripts", "CIS control mapping table", "Sample compliance posture report"]
    },
    {
      id: 24,
      title: "Docker / Container Security Monitoring",
      domain: "Specialized",
      socOrder: null,
      status: "Planned",
      objective: "Scan container images for vulnerabilities with Trivy and monitor runtime container anomalies (such as unexpected shell spawns) using Falco and Wazuh.",
      tools: ["Docker", "Trivy", "Falco", "Wazuh", "Python", "Linux"],
      prerequisites: ["Docker & Linux fundamentals", "Understanding container namespaces and least-privilege non-root containers"],
      outcomes: ["Scan base images with Trivy and remediate vulnerable layers", "Detect interactive shells or sensitive host-path mounts at runtime with Falco"],
      evidenceChecklist: ["Before/after `Dockerfile` hardening comparison", "Trivy scan output summary", "Falco runtime alert log"]
    }
  ],

  // Section 11: Practical, Beginner-Friendly Study Notes & Write-Ups
  studyNotes: [
    {
      id: "note-cia-risk",
      title: "CIA Triad, Threats, Vulnerabilities, Risk & Impact",
      category: "Security Fundamentals",
      sourceContext: "Code In Yourself Internship & Core Study Notes",
      summary: "How Confidentiality, Integrity, and Availability guide practical security decisions, and how threats interact with vulnerabilities to create risk.",
      keyPoints: [
        "Confidentiality: Ensuring only authorised users/processes can read sensitive data (e.g., TLS encryption in transit, least-privilege file permissions, database access controls).",
        "Integrity: Ensuring data and configurations are not tampered with cleanly or silently (e.g., SHA-256 file hashing, digital signatures, audit logs).",
        "Availability: Ensuring authorised users can reliably access systems when needed (e.g., redundancy, backups, DDoS mitigation, careful driver/patch testing before rollout).",
        "Threat vs. Vulnerability vs. Risk: A vulnerability is a weakness (e.g., an unpatched service or SQL concatenation); a threat is an actor or event capable of exploiting it; risk combines the likelihood of exploitation with the business/technical impact."
      ],
      practicalExample: "In my Windows 11 Code 56 troubleshooting case study, availability was impacted not by an external attacker, but by a driver/class configuration failure—showing why availability and change management are part of operational security."
    },
    {
      id: "note-auth-mfa-zerotrust",
      title: "Authentication, Password Security, MFA & Zero Trust",
      category: "Identity & Access",
      sourceContext: "Internship & SOC Study Notes",
      summary: "Why passwords alone fail against credential stuffing and phishing, how multi-factor authentication works, and the core idea behind Zero Trust.",
      keyPoints: [
        "Password Storage: Applications must never store plaintext passwords; they store salted cryptographic hashes (e.g., bcrypt, Argon2) so a database leak does not immediately expose cleartext credentials.",
        "Multi-Factor Authentication (MFA): Combines something you know (password), something you have (authenticator app / hardware security key), or something you are (biometrics) to block automated credential stuffing.",
        "Zero Trust ('Never Trust, Always Verify'): Being inside a private LAN does not grant automatic trust. Every request should verify identity, device health, and least-privilege authorisation."
      ],
      practicalExample: "When monitoring authentication logs in a SOC, repeated failed logins (`Event ID 4625` on Windows or `/var/log/auth.log` on Linux) followed by a sudden success (`4624`) warrant immediate verification of whether MFA was challenged."
    },
    {
      id: "note-networking-dns-ports",
      title: "TCP/UDP, IP Addresses, Hostnames, Ports & DNS",
      category: "Networking",
      sourceContext: "Kali Linux & VirtualBox Lab Practice",
      summary: "How packets move across networks, how `lo` differs from `eth0`, why ports matter in Nmap scans, and how DNS translates hostnames.",
      keyPoints: [
        "IP Addresses & Interfaces: On Linux (`ip addr`), `lo` (`127.0.0.1/8`) is the virtual loopback interface used strictly within the local host, while `eth0` binds to the network segment (such as a VirtualBox host-only subnet).",
        "TCP vs. UDP: TCP is connection-oriented and establishes a 3-way handshake (`SYN` -> `SYN/ACK` -> `ACK`), making open ports verifiable in scans; UDP is connectionless (`DNS` on 53/udp, `DHCP` on 67/68/udp).",
        "Ports & Services: An IP identifies the host; a port (0–65535) identifies the specific listening service process (e.g., 21 FTP, 22 SSH, 53 DNS, 80 HTTP, 443 HTTPS, 3306 MySQL).",
        "DNS (Domain Name System): Resolves human-readable domain names into IP addresses, making DNS logs a critical telemetry source for spotting command-and-control (C2) or phishing domains."
      ],
      practicalExample: "Running `ip addr` in Kali Linux clarifies why a machine has both `127.0.0.1` on `lo` and a separate private IPv4/IPv6 address on `eth0`."
    },
    {
      id: "note-firewalls-ufw-crypto",
      title: "Firewalls (UFW) & Basic Cryptography",
      category: "Network & Data Protection",
      sourceContext: "Linux Practice & Security Fundamentals",
      summary: "How host firewalls filter traffic by port/state and how encryption and hashing protect data in transit and at rest.",
      keyPoints: [
        "Stateful Host Firewalls (UFW): A default-deny inbound policy (`ufw default deny incoming`, `ufw default allow outgoing`) prevents unintended listening services from being reachable on the network.",
        "Encryption vs. Hashing: Encryption is two-way (reversible with the decryption key) to protect confidentiality; hashing (e.g., SHA-256) is one-way to verify file or message integrity.",
        "Symmetric vs. Asymmetric Encryption: Symmetric (AES) uses the same secret key for speed; Asymmetric (RSA/ECC) uses a public/private key pair to exchange keys and verify digital signatures (as used in HTTPS/TLS and SSH)."
      ],
      practicalExample: "Even if a vulnerable service is running locally for testing, a host firewall blocking inbound connections on that port reduces exposure on shared networks."
    },
    {
      id: "note-nmap-wireshark-packets",
      title: "Nmap Discovery & Packet Analysis (Wireshark / tcpdump)",
      category: "Network Security",
      sourceContext: "Authorised VirtualBox Lab Practice",
      summary: "Connecting Nmap service enumeration with what actually appears on the wire in Wireshark and tcpdump.",
      keyPoints: [
        "Authorised Scanning Only: Nmap scans must only be run against systems you own or have explicit written permission to test.",
        "Discovery & Service Scans: Host discovery identifies live hosts on a subnet; port scanning checks which TCP/UDP ports respond; service enumeration probes open ports to identify daemon banners (e.g., `vsFTPd`, `Apache`).",
        "Packet Capture (`tcpdump` & Wireshark): While logs show what an application chose to record, packet captures show the exact headers and payloads transmitted across the interface."
      ],
      practicalExample: "Comparing an Nmap scan in Kali with a simultaneous Wireshark capture on `eth0` visually demonstrates how `SYN` probes receive `SYN/ACK` (open) or `RST/ACK` (closed) responses."
    },
    {
      id: "note-sqli-xss-vapt",
      title: "SQL Injection, XSS & VAPT Methodology",
      category: "Web Security & VAPT",
      sourceContext: "DVWA Exploration & SQL Practice",
      summary: "Why mixing user data with code causes SQLi and XSS, and how structured Vulnerability Assessment differs from ad-hoc testing.",
      keyPoints: [
        "SQL Injection (SQLi): Occurs when user input is concatenated directly into a database query string, allowing the input to break out of the data context and alter SQL logic. Fixed with prepared statements / parameterised queries.",
        "Cross-Site Scripting (XSS): Occurs when an application renders unvalidated, unencoded user input into a web page, allowing scripts to run in another user's browser context. Fixed with context-aware output encoding and CSP.",
        "VAPT Lifecycle: Scoping & authorisation -> Reconnaissance & enumeration -> Vulnerability analysis -> Safe validation -> Reporting with business impact and remediation."
      ],
      practicalExample: "Practising SQL queries in MySQL Workbench (`WHERE`, `UNION`, comments) and `mysql.connector` parameterised queries in Python makes the root cause and fix for SQLi concrete."
    },
    {
      id: "note-ir-siem-edr",
      title: "Incident Response, SIEM & EDR Concepts",
      category: "SOC Operations",
      sourceContext: "Career Direction Study Notes",
      summary: "How SOC teams combine centralized log correlation (SIEM), host behavioral telemetry (EDR), and structured Incident Response playbooks.",
      keyPoints: [
        "SIEM (Security Information & Event Management): Aggregates logs from endpoints, servers, firewalls, and cloud services into one searchable platform for correlation rules, dashboards, and incident timelines.",
        "EDR (Endpoint Detection & Response): Monitors host-level activity (process creation trees, command-line arguments, registry modifications, network connections) and supports host containment.",
        "Incident Response Phases: Preparation -> Identification/Triage -> Containment -> Eradication -> Recovery -> Post-Incident Lessons Learned."
      ],
      practicalExample: "An alert is only a starting signal; a SOC analyst's real job is validating whether the alert is a true positive, a benign administrative action, or a false positive using host and network evidence."
    }
  ],

  // Section 13: Learning Journey (Strict Date Accuracy — No Invented Dates)
  learningJourney: [
    {
      dateLabel: "B.E. Computer Engineering (7th-Semester Context)",
      verifiedDate: false,
      title: "Computer Engineering Academic Foundation — Pacific School of Engineering (GTU)",
      category: "Academic",
      description: "Building core computer science and engineering foundations (operating systems, computer networks, relational databases, and programming) and choosing to focus career transition efforts toward Cybersecurity and SOC Operations."
    },
    {
      dateLabel: "03 July 2026 – 03 August 2026 (Verified)",
      verifiedDate: true,
      title: "Code In Yourself Offline Internship Program — Fundamentals of Cyber Security",
      category: "Internship",
      description: "Completed a one-month educational offline internship covering networking fundamentals, the CIA Triad, threats and vulnerabilities, authentication/password security, firewalls, web security, vulnerability assessment, and basic incident response."
    },
    {
      dateLabel: "Date to be added",
      verifiedDate: false,
      title: "Home Lab Setup & Linux / VirtualBox Networking Practice",
      category: "Hands-on Lab",
      description: "Configured VirtualBox private/host-only networking on an HP OMEN 16 (16 GB RAM) host with Kali Linux, Metasploitable2, and DVWA. Practised `ip addr`, Nmap discovery, Wireshark/tcpdump packet inspection, UFW concepts, and shell alias troubleshooting."
    },
    {
      dateLabel: "Date to be added",
      verifiedDate: false,
      title: "Metasploit Workflow Exploration & DVWA Web Security Study",
      category: "VAPT & Web Security",
      description: "Explored `msfconsole` module configuration (`vsftpd_234_backdoor`) and session management (`sessions -l`) in an isolated lab, alongside studying SQL Injection and XSS concepts in DVWA."
    },
    {
      dateLabel: "Date to be added",
      verifiedDate: false,
      title: "Windows 11 Network Stack & Driver Triage Investigation",
      category: "Troubleshooting",
      description: "Documented a structured diagnostic case study investigating Device Manager Code 56 (`CM_PROB_NEED_CLASS_CONFIG`), `rtcx21x64.inf`, `pnputil netwtw08` packages, Windows network services, and `DISM 0x800f0915` on Windows 11."
    },
    {
      dateLabel: "Date to be added (Currently Learning)",
      verifiedDate: false,
      title: "Python Programming, MySQL Query Practice & Python-MySQL Integration",
      category: "Programming & Data",
      description: "Learning Python from beginner level (control flow, functions, OOP, ATM practice project, `mysql.connector`) and practising SQL queries (`JOIN`, `GROUP BY`, `HAVING`, window functions, stored procedures) in MySQL Workbench."
    },
    {
      dateLabel: "Planned Next Steps",
      verifiedDate: false,
      title: "8-Step SOC Build Order & 24-Project Long-Term Roadmap",
      category: "Future Roadmap",
      description: "Progressing systematically starting with the Enterprise SOC Home Lab (Wazuh + Sysmon + auditd) and Windows Endpoint Detection Lab within the 16 GB RAM host budget."
    }
  ],

  // Section 13 & 14: GitHub Organization & Documentation Standards
  githubStandards: {
    statusNote: "Actual GitHub username/URL is currently a placeholder (`To be confirmed`). No repositories or commit histories are fabricated.",
    preferredCategories: [
      "Python",
      "MySQL",
      "Linux",
      "Networking",
      "Cyber Security",
      "Automation",
      "Scripts",
      "Projects",
      "Notes",
      "Labs",
      "Documentation",
      "Other"
    ],
    repoTreeTemplate: `Project_Name/
├── README.md                 # Overview, scope, environment, methodology & lessons
├── .gitignore                # Python / OS / IDE ignore rules + never commit .env or raw PCAPs with PII
├── LICENSE                   # MIT Licence (ONLY for original code I own and choose to license)
├── Documentation/            # Architecture diagrams, topology notes & setup guides
├── Configuration/            # Sanitised config files (e.g., sysmon.xml, ufw rules)
├── Scripts/                  # Original Python / Bash / SQL scripts
├── Detection_Rules/          # Sigma / Wazuh / Suricata / YARA rules (when applicable)
├── Evidence/
│   ├── Screenshots/          # Sanitised screenshots (IPs/usernames/serials redacted)
│   ├── Logs/                 # Sanitised sample log excerpts
│   └── Network_Captures/     # Sanitised lab PCAPs (isolated lab traffic only)
├── Investigations/           # Case study triage notes & hypotheses vs. confirmed facts
├── Reports/                  # Final structured assessment or incident reports
└── Lessons_Learned.md        # Mistakes, troubleshooting steps & defensive takeaways`,
    responsiblePrinciples: [
      "Authorised Testing Only: All offensive or vulnerability testing is strictly restricted to isolated local VMs (Metasploitable2, DVWA, Juice Shop) or systems with explicit written permission.",
      "Strict Sanitisation: Serial numbers, hardware IDs, real personal records, passwords, API keys, and private keys are never committed to repositories.",
      "Evidence-Led Honesty: Unfinished labs are marked 'In Progress' or 'Outcome Unverified'. No exploitation or remediation claim is made without verifiable evidence.",
      "Proper Licensing & Attribution: Third-party tools, datasets, and tutorials are credited clearly; an MIT licence is applied only to original code I author."
    ]
  },

  // Interactive Beginner Build Guide (Explaining how the app works in 5 clear steps)
  beginnerWalkthroughSteps: [
    {
      stepNumber: 1,
      title: "Step 1: Separation of Content Data (`portfolio-data.js`) from Layout (`index.html`)",
      whatItDoes: "Instead of hardcoding your bio, projects, and 24 roadmap items inside thousands of lines of HTML tags, all of your portfolio content lives in one clean JavaScript object (`window.PORTFOLIO_DATA`).",
      whyBeginnerFriendly: "Just like a Python dictionary or a JSON file, you can edit a project title, change `'Evidence pending'` to a real screenshot link, or add a new SQL query in `portfolio-data.js` without risking breaking the webpage layout.",
      tryItNow: "Click the 'Customize Profile / Placeholders' button in the top navigation bar to test changing your display name, GitHub link, or email live in the browser!"
    },
    {
      stepNumber: 2,
      title: "Step 2: Honest Status Badges & 4-State Skill Cards",
      whatItDoes: "Renders your skills in 4 clear, recruiter-trusted categories (`Hands-on Practice`, `Currently Learning`, `Concepts Studied`, and `Planned to Explore`) with zero fake percentage bars.",
      whyBeginnerFriendly: "A simple JavaScript filter function checks each skill's `state` and `category` properties and updates the grid immediately when a recruiter clicks a filter button.",
      tryItNow: "Go to the 'Skills' section and click the filter buttons (`Hands-on Practice`, `Currently Learning`, `Planned to Explore`) to see the live filter in action."
    },
    {
      stepNumber: 3,
      title: "Step 3: 16-Point Case Study Inspector Modal",
      whatItDoes: "Every hands-on project or troubleshooting case study (like your Metasploit `sessions -l` troubleshooting or your Windows 11 Code 56 / DISM `0x800f0915` investigation) opens in a structured technical drawer with all 16 documentation sections and a 'Copy Markdown Report' button.",
      whyBeginnerFriendly: "Recruiters see a clean summary card first, while technical reviewers can click 'Inspect Full Case Study' to read your exact commands, errors, hypotheses vs. confirmed facts, and defensive remediation.",
      tryItNow: "Click 'Inspect Full Case Study (16 Sections)' on the Metasploit or Windows 11 Driver card in the 'Projects & Case Studies' section."
    },
    {
      stepNumber: 4,
      title: "Step 4: Searchable 24-Item Long-Term Roadmap & 8-Step SOC Track",
      whatItDoes: "Keeps all 24 future project ideas strictly separated from your hands-on work with a `Planned` badge, highlights the recommended 8-Step SOC Build Order, and includes 16 GB RAM host sizing notes.",
      whyBeginnerFriendly: "You can filter all 24 items by domain (SOC, Threat Hunting, DFIR, VAPT, Cloud, Specialized), toggle the 8-Step SOC Priority track, or type a tool name like `Wazuh` or `Python` into the search box.",
      tryItNow: "Open the '24-Item Roadmap' section and toggle 'Show 8-Step SOC Priority Order Only'."
    },
    {
      stepNumber: 5,
      title: "Step 5: Adding Your Real Screenshots, Links & Deploying Free to GitHub Pages",
      whatItDoes: "Shows you every exact placeholder waiting for your confirmation (name, GitHub URL, internship certificate, lab screenshots) and how to host the site free on GitHub Pages or Netlify.",
      whyBeginnerFriendly: "Because this app uses plain HTML, Tailwind CSS, and standard JavaScript with zero complex build servers required, you can open `index.html` directly in any browser on your HP OMEN 16 laptop!",
      tryItNow: "Review the 'Readiness & Missing Evidence Checklist' inside the 'GitHub & Contact' section or tell me in chat what you'd like to customize next."
    }
  ]
};


// ============================================================================
// ENHANCEMENT DATA EXTENSION — ATTACHED TO window.PORTFOLIO_DATA
// Preserves 100% of existing data while adding comprehensive technical sections
// ============================================================================
(function () {
  if (!window.PORTFOLIO_DATA) return;
  const D = window.PORTFOLIO_DATA;

  // 6-Level Authenticity Distinction Taxonomy (Section 14)
  D.authenticityLevels = [
    { label: "Studied Academically", color: "indigo", desc: "Covered in B.E. Computer Engineering coursework & GTU exam preparation with theoretical and mathematical understanding." },
    { label: "Practiced Theoretically", color: "purple", desc: "Worked through algorithm steps, dry runs, query design, or protocol flows on paper/study notes." },
    { label: "Practiced in a Virtual Lab", color: "emerald", desc: "Executed hands-on inside an isolated VirtualBox lab (Kali Linux, Metasploitable2, DVWA) or host diagnostic environment." },
    { label: "Implemented Independently", color: "sky", desc: "Wrote and tested educational code, SQL queries, or configuration scripts independently." },
    { label: "Completed a Project", color: "teal", desc: "Built a self-contained practice project or documented technical case study." },
    { label: "Currently Learning", color: "amber", desc: "Actively expanding practical depth through ongoing lab work and scripting exercises." }
  ];

  // 1. CRYPTOGRAPHY & NETWORK SECURITY (CNS) — All 18 Required Topics
  D.cryptographySection = {
    disclaimer: "Academic & Exam Preparation Context: These topics reflect my Computer Engineering coursework and exam preparation in Cryptography and Network Security (CNS), paired with safe educational Python demonstrations. Studying an algorithm academically is distinct from implementing production cryptographic libraries.",
    topics: [
      {
        id: "cns-fundamentals",
        title: "1. Cryptography Fundamentals",
        category: "Core Concepts",
        level: "Studied Academically",
        explanation: "Cryptography is the science of securing information and communications through mathematical transformations so that only authorised parties can read, verify, or process the data.",
        workingPrinciple: "Relies on a cryptographic algorithm (cipher) and secret parameters (keys) to transform readable messages into unintelligible forms and verify origin/integrity.",
        applications: "HTTPS/TLS web traffic, SSH remote administration, encrypted disk volumes, VPN tunnels, and password hashing.",
        securityImportance: "Forms the mathematical backbone of Confidentiality, Integrity, Authentication, and Non-Repudiation across modern networks."
      },
      {
        id: "cns-plain-cipher",
        title: "2. Plaintext and Ciphertext",
        category: "Core Concepts",
        level: "Studied Academically",
        explanation: "Plaintext (M or P) is the original, intelligible message or binary data before encryption. Ciphertext (C) is the scrambled, unreadable output produced after applying an encryption algorithm and key.",
        workingPrinciple: "A cipher maps plaintext elements to ciphertext elements: C = E(K, P). Without the proper decryption key, ciphertext should appear statistically indistinguishable from random data.",
        applications: "Protecting database records at rest, securing payloads inside network packets (TLS record layer), and encrypting sensitive configuration files.",
        securityImportance: "If plaintext is transmitted over a shared LAN/WAN (such as Telnet or FTP), packet sniffers like Wireshark or tcpdump can read credentials directly."
      },
      {
        id: "cns-enc-dec",
        title: "3. Encryption and Decryption",
        category: "Core Concepts",
        level: "Studied Academically",
        explanation: "Encryption converts plaintext into ciphertext using an encryption algorithm E and key K_e. Decryption reverses the transformation using algorithm D and decryption key K_d so that P = D(K_d, E(K_e, P)).",
        workingPrinciple: "Per Kerckhoffs's Principle, the security of encryption must depend strictly on the secrecy of the key, not on keeping the algorithm itself secret.",
        applications: "End-to-end messaging, database field encryption, SFTP transfers, and secure backup archives.",
        securityImportance: "Prevents unauthorized disclosure (Confidentiality) even when storage media or network links are untrusted."
      },
      {
        id: "cns-sym-asym",
        title: "4. Symmetric and Asymmetric Encryption",
        category: "Encryption Models",
        level: "Studied Academically",
        explanation: "Symmetric encryption uses a single shared secret key for both encryption and decryption. Asymmetric (public-key) encryption uses a mathematically linked key pair: a public key shared openly and a private key kept secret.",
        workingPrinciple: "Symmetric ciphers (AES, DES) operate rapidly on blocks or streams using substitutions and permutations. Asymmetric ciphers (RSA, ECC) rely on one-way mathematical trapdoor functions (prime factorization or discrete logarithms).",
        applications: "Hybrid cryptography in TLS: Asymmetric cryptography exchanges or authenticates a session key, and Symmetric encryption (AES) encrypts the bulk data stream.",
        securityImportance: "Solves the trade-off between computational speed (symmetric) and scalable key distribution over untrusted networks (asymmetric)."
      },
      {
        id: "cns-des",
        title: "5. DES (Data Encryption Standard)",
        category: "Symmetric Ciphers",
        level: "Studied Academically",
        explanation: "DES is a classic symmetric block cipher standardised in 1977 that encrypts data in 64-bit blocks using a 56-bit effective key (from a 64-bit input with 8 parity bits).",
        workingPrinciple: "Uses a 16-round Feistel network: the 64-bit block splits into 32-bit Left (L) and Right (R) halves. Each round expands R from 32 to 48 bits, XORs with a 48-bit round subkey, passes through 8 S-boxes (6-to-4 bit non-linear substitutions), permutes (P-box), and XORs with L.",
        applications: "Studied academically to understand Feistel networks and S-box confusion/diffusion; historically used in legacy banking and Triple-DES (3DES).",
        securityImportance: "Because a 56-bit key space (2^56 keys) is vulnerable to brute-force search on modern hardware, single DES is deprecated in favour of AES."
      },
      {
        id: "cns-aes",
        title: "6. AES (Advanced Encryption Standard)",
        category: "Symmetric Ciphers",
        level: "Studied Academically",
        explanation: "AES (Rijndael) is the modern symmetric block cipher standard operating on 128-bit blocks (4x4 byte state matrix) with key sizes of 128, 192, or 256 bits (10, 12, or 14 rounds respectively).",
        workingPrinciple: "Uses a Substitution-Permutation Network (SPN) rather than a Feistel network. Each round (except the final round, which omits MixColumns) applies four transformations on the 4x4 state matrix: 1) SubBytes (non-linear S-box byte substitution in GF(2^8)), 2) ShiftRows (cyclic row shift for diffusion), 3) MixColumns (matrix multiplication over GF(2^8)), and 4) AddRoundKey (XOR with expanded round key).",
        applications: "WPA2/WPA3 Wi-Fi security (AES-CCMP), TLS 1.3 cipher suites (AES-GCM), BitLocker/LUKS full-disk encryption, and VPNs (IPsec/OpenVPN).",
        securityImportance: "Resistant to known linear and differential cryptanalysis; industry standard for symmetric confidentiality."
      },
      {
        id: "cns-rsa",
        title: "7. RSA Algorithm",
        category: "Asymmetric Ciphers",
        level: "Studied Academically",
        explanation: "RSA is an asymmetric public-key cryptosystem used for encryption and digital signatures whose security rests on the computational difficulty of factoring the product of two large prime numbers.",
        workingPrinciple: "1) Choose two large primes p and q. 2) Compute modulus n = p * q and Euler's totient phi(n) = (p - 1)(q - 1). 3) Choose public exponent e such that 1 < e < phi(n) and gcd(e, phi(n)) = 1. 4) Compute private key d as the modular multiplicative inverse: d * e ≡ 1 (mod phi(n)). Encryption: C = M^e mod n. Decryption: M = C^d mod n.",
        applications: "X.509 TLS/SSL certificates, SSH key authentication, PGP/GPG email encryption, and software code signing.",
        securityImportance: "Requires sufficiently large moduli (2048-bit or 3072-bit+) and proper padding (such as OAEP for encryption and PSS for signatures) because textbook RSA without padding is deterministic."
      },
      {
        id: "cns-diffie-hellman",
        title: "8. Diffie-Hellman Key Exchange",
        category: "Key Exchange",
        level: "Studied Academically",
        explanation: "Diffie-Hellman (DH) is a protocol that allows two parties to establish a shared secret key over an insecure public channel without having prior shared secrets.",
        workingPrinciple: "1) Agree on public prime modulus p and primitive root generator g. 2) Alice selects private secret a and sends A = g^a mod p. 3) Bob selects private secret b and sends B = g^b mod p. 4) Alice computes K = B^a mod p = g^(ab) mod p, and Bob computes K = A^b mod p = g^(ab) mod p. An eavesdropper sees p, g, A, B but faces the Discrete Logarithm Problem.",
        applications: "Ephemeral Diffie-Hellman (DHE / ECDHE) in TLS 1.3 and IPsec IKEv2 to provide Perfect Forward Secrecy (PFS).",
        securityImportance: "Unauthenticated Diffie-Hellman is vulnerable to a Man-in-the-Middle (MITM) attack unless combined with digital signatures or certificates to authenticate Alice and Bob."
      },
      {
        id: "cns-cbc-mode",
        title: "9. CBC (Cipher Block Chaining) Mode",
        category: "Block Cipher Modes",
        level: "Studied Academically",
        explanation: "CBC is a block cipher mode of operation where each plaintext block is XORed with the previous ciphertext block before being encrypted, hiding plaintext patterns that would leak in Electronic Codebook (ECB) mode.",
        workingPrinciple: "For block 1, a random Initialization Vector (IV) is XORed with P_1: C_1 = E_K(P_1 XOR IV). For block i, C_i = E_K(P_i XOR C_{i-1}). Decryption reverses this: P_i = D_K(C_i) XOR C_{i-1}.",
        applications: "Historical TLS cipher suites, file/disk encryption, and studying why identical plaintext blocks produce distinct ciphertext blocks when an unpredictable IV is used.",
        securityImportance: "Prevents visual/pattern leakage seen in ECB mode, but requires an unpredictable IV and integrity protection (MAC or AEAD like AES-GCM) to prevent padding oracle attacks."
      },
      {
        id: "cns-sha512",
        title: "10. SHA-512 Hashing Algorithm",
        category: "Hash Functions",
        level: "Studied Academically",
        explanation: "SHA-512 is a cryptographic hash function in the SHA-2 family that takes an arbitrary-length input message and produces a fixed 512-bit (64-byte / 128-hex-character) digest.",
        workingPrinciple: "Pads the message to a multiple of 1024 bits (appending a '1' bit, zeros, and a 128-bit message length). Initialises eight 64-bit state words (a..h) and processes each 1024-bit block through an 80-round compression function using 64-bit bitwise rotations, XORs, additions mod 2^64, and 80 round constants.",
        applications: "Linux password shadow hashing (`/etc/shadow` `$6$` SHA-512 crypt), software ISO checksum verification, digital signature pre-hashing, and file integrity monitoring.",
        securityImportance: "Provides strong pre-image resistance, second pre-image resistance, and collision resistance with a strong avalanche effect (flipping 1 input bit changes roughly half of the 512 output bits)."
      },
      {
        id: "cns-digital-signatures",
        title: "11. Digital Signatures",
        category: "Authentication & Integrity",
        level: "Studied Academically",
        explanation: "A digital signature is a mathematical scheme for verifying the authenticity, integrity, and non-repudiation of digital messages or documents.",
        workingPrinciple: "1) The sender hashes the message H = Hash(M). 2) The sender computes a signature S using their private key and H. 3) The recipient uses the sender's public key to verify S against Hash(M). If the message or signature was altered by even one bit, verification fails.",
        applications: "OS driver signing (like Windows `.inf`/`.cat` driver packages), TLS certificate chains, Git commit signing, and software package verification (`apt`).",
        securityImportance: "Proves both that the message came from the holder of the private key (Authentication / Non-Repudiation) and was not modified in transit (Integrity)."
      },
      {
        id: "cns-schnorr",
        title: "12. Schnorr Digital Signature",
        category: "Digital Signature Schemes",
        level: "Studied Academically",
        explanation: "The Schnorr signature scheme is a digital signature algorithm based on the intractability of the Discrete Logarithm Problem (DLP), noted for its simplicity, provable security in the random oracle model, and short signature size.",
        workingPrinciple: "Uses a prime group of order q with generator g. Private key x, public key y = g^x mod p. To sign M: choose random nonce k, compute commitment r = g^k mod p, compute hash challenge e = H(r || M), and compute response s = (k - x*e) mod q. The signature pair is (e, s). Verification checks whether e == H((g^s * y^e mod p) || M).",
        applications: "Modern cryptographic protocols, EdDSA (Ed25519 is a Schnorr-variant over twisted Edwards curves), and multi-signature aggregation.",
        securityImportance: "Linear structure allows multiple signers to aggregate public keys and signatures efficiently while relying on a clean security proof."
      },
      {
        id: "cns-elgamal",
        title: "13. ElGamal Digital Signature",
        category: "Digital Signature Schemes",
        level: "Studied Academically",
        explanation: "The ElGamal signature scheme is a public-key digital signature algorithm based on the difficulty of computing discrete logarithms over finite fields (and is the historical precursor to DSA).",
        workingPrinciple: "Public parameters: prime p, generator g. Private key x, public key y = g^x mod p. To sign hash H(M): choose a random ephemeral key k such that 1 < k < p-1 and gcd(k, p-1) = 1. Compute r = g^k mod p, and s = (H(M) - x*r) * k^(-1) mod (p-1). Signature is (r, s). Verification checks whether g^(H(M)) ≡ y^r * r^s (mod p).",
        applications: "Academic foundation for the Digital Signature Algorithm (DSA) and elliptic-curve variants (ECDSA).",
        securityImportance: "Critical Security Rule: The ephemeral value k MUST be unique and unpredictable for every signature; reusing k allows an attacker to algebraically recover the private key x."
      },
      {
        id: "cns-public-private-keys",
        title: "14. Public and Private Key Concepts",
        category: "Key Infrastructure",
        level: "Studied Academically",
        explanation: "In asymmetric cryptography, every entity holds an asymmetric key pair: a Public Key (distributed openly) and a Private Key (stored confidentially).",
        workingPrinciple: "For confidentiality: anyone encrypts with the recipient's Public Key, and only the recipient decrypts with their Private Key. For authentication/signatures: the owner signs with their Private Key, and anyone verifies with the owner's Public Key.",
        applications: "SSH `id_ed25519` / `id_rsa` key pairs (`~/.ssh/authorized_keys`), HTTPS server certificates, and PGP keys.",
        securityImportance: "Eliminates the need to transmit secret keys over insecure channels, provided public keys are bound to identities via trusted Certificate Authorities (PKI)."
      },
      {
        id: "cns-hash-integrity",
        title: "15. Hash Functions and Message Integrity",
        category: "Hash Functions",
        level: "Studied Academically",
        explanation: "Cryptographic hash functions map arbitrary data to a fixed-size fingerprint to detect accidental corruption or intentional tampering.",
        workingPrinciple: "Deterministic, fast to compute, one-way (pre-image resistant), and collision-resistant. When combined with a secret key as an HMAC (Hash-based Message Authentication Code), it provides both integrity and authenticity.",
        applications: "DFIR evidence chain-of-custody (SHA-256/SHA-512), File Integrity Monitoring (FIM in Wazuh), and verifying downloaded Linux ISOs.",
        securityImportance: "An unkeyed hash published on the same insecure webpage as a file can be replaced by an attacker who compromises the server; HMACs or digital signatures prevent this."
      },
      {
        id: "cns-auth-confidentiality",
        title: "16. Authentication and Confidentiality",
        category: "Security Properties",
        level: "Studied Academically",
        explanation: "Confidentiality keeps data secret from unauthorized readers, while Authentication verifies the identity of the communicating peer or message origin.",
        workingPrinciple: "Encryption alone does not guarantee authentication (an attacker may flip ciphertext bits in transit without knowing the plaintext). Modern protocols use Authenticated Encryption with Associated Data (AEAD, like AES-GCM) or Encrypt-then-MAC.",
        applications: "TLS 1.3 record protection, IPsec ESP with integrity check values, and SSH packet protection.",
        securityImportance: "Understanding why both properties must work together prevents bit-flipping and active tampering attacks."
      },
      {
        id: "cns-key-management",
        title: "17. Key Management Lifecycle",
        category: "Key Infrastructure",
        level: "Studied Academically",
        explanation: "Key management encompasses the generation, exchange, storage, usage, rotation, backup, and revocation/destruction of cryptographic keys.",
        workingPrinciple: "Uses cryptographically secure pseudorandom number generators (CSPRNG), Key Distribution Centers (KDC like Kerberos) or PKI Certificate Authorities (CAs), Hardware Security Modules (HSMs), and Certificate Revocation Lists (CRL / OCSP).",
        applications: "Rotating API keys and TLS certificates, storing secrets in `.env` or secret managers rather than Git repositories.",
        securityImportance: "Even the strongest cipher (AES-256) fails completely if keys are generated with weak randomness, hardcoded in public source code, or never rotated after exposure."
      },
      {
        id: "cns-secure-comm",
        title: "18. Secure Communication Principles",
        category: "Network Security",
        level: "Studied Academically",
        explanation: "Secure communication combines peer authentication, ephemeral key establishment, symmetric bulk encryption, and per-packet message integrity.",
        workingPrinciple: "During a TLS handshake: 1) Client & Server negotiate cipher suites and exchange nonces/DH shares; 2) Server presents its X.509 certificate and signs the handshake transcript; 3) Both derive symmetric session keys; 4) Application data flows over AEAD-encrypted records.",
        applications: "HTTPS web browsing, secure API integrations, VPN tunnels, and encrypted database connections.",
        securityImportance: "Protects against passive eavesdropping (sniffing), active tampering (injection), replay attacks, and impersonation (MITM)."
      }
    ],
    pythonDemos: [
      {
        title: "Educational Demo 1: SHA-512 Avalanche Effect & File Integrity Check (Python `hashlib`)",
        level: "Implemented Independently (Safe Educational Demo)",
        code: `import hashlib

# 1. Compute SHA-512 digest of two messages differing by a single character
msg_a = b"Transfer INR 1000 to Account 4021"
msg_b = b"Transfer INR 9000 to Account 4021"

hash_a = hashlib.sha512(msg_a).hexdigest()
hash_b = hashlib.sha512(msg_b).hexdigest()

print("Message A SHA-512:", hash_a)
print("Message B SHA-512:", hash_b)
print("Integrity Match?  :", hash_a == hash_b)  # False — Avalanche effect!`
      },
      {
        title: "Educational Demo 2: Textbook RSA & Diffie-Hellman Mathematical Principle (Small Primes for Study Only)",
        level: "Practiced Theoretically / Safe Educational Demo",
        code: `# NOTE: Educational demonstration using small primes to illustrate modular arithmetic.
# Real systems must use 2048+ bit primes and proper padding (OAEP/PSS) via standard libraries.

# --- A. Toy RSA Demonstration ---
p, q = 61, 53
n = p * q                     # n = 3233
phi_n = (p - 1) * (q - 1)     # phi(n) = 3120
e = 17                        # Public exponent (gcd(17, 3120) == 1)
d = pow(e, -1, phi_n)         # Private key d = 2753 (since 17 * 2753 % 3120 == 1)

plaintext_num = 65            # Numeric representation of message 'A'
ciphertext = pow(plaintext_num, e, n)   # C = M^e mod n -> 2790
decrypted  = pow(ciphertext, d, n)      # M = C^d mod n -> 65
print(f"RSA Demo -> Plaintext: {plaintext_num}, Ciphertext: {ciphertext}, Decrypted: {decrypted}")

# --- B. Toy Diffie-Hellman Key Exchange ---
prime_p, generator_g = 23, 5
alice_private = 6
bob_private   = 15

alice_public = pow(generator_g, alice_private, prime_p)  # A = g^a mod p
bob_public   = pow(generator_g, bob_private, prime_p)    # B = g^b mod p

shared_key_alice = pow(bob_public, alice_private, prime_p)
shared_key_bob   = pow(alice_public, bob_private, prime_p)
print(f"DH Shared Secret Match: {shared_key_alice == shared_key_bob} (Key = {shared_key_alice})")`
      }
    ]
  };

  // 2. ARTIFICIAL INTELLIGENCE & MACHINE LEARNING — All 24 Required Topics
  D.aiMlSection = {
    disclaimer: "Academic Context: Studied as part of my B.E. Computer Engineering curriculum (GTU). Emphasises algorithmic problem-solving, search strategies, logic, and how ML/AI concepts apply to anomaly detection and cybersecurity.",
    topics: [
      { id: "ai-intro", title: "1. Introduction to Artificial Intelligence", category: "AI Foundations", level: "Studied Academically", summary: "Study of designing systems that perceive their environment, reason over knowledge, learn from data, and take rational actions to achieve goals.", cyberLink: "Used in automated alert triage, spam filtering, and behavioral anomaly analysis." },
      { id: "ai-vs-ml-dl", title: "2. AI vs Machine Learning vs Deep Learning", category: "AI Foundations", level: "Studied Academically", summary: "AI is the broad umbrella (including rule-based systems and search); Machine Learning (ML) is a subset where models learn patterns from data; Deep Learning (DL) is a subset of ML using multi-layer neural networks.", cyberLink: "Rule-based SIEM correlation (classical AI) vs UEBA behavioral baselining (ML) vs deep malware binary classification (DL)." },
      { id: "ai-agents", title: "3. Intelligent Agents (PEAS Framework)", category: "AI Foundations", level: "Studied Academically", summary: "An agent perceives its environment through sensors and acts upon it using actuators. Defined via PEAS: Performance measure, Environment, Actuators, Sensors.", cyberLink: "An EDR agent senses process/network telemetry (Sensors) and flags or isolates suspicious processes (Actuators)." },
      { id: "ai-types", title: "4. Types of AI & Agent Architectures", category: "AI Foundations", level: "Studied Academically", summary: "Covers Simple Reflex agents, Model-based reflex agents, Goal-based agents, Utility-based agents, and Learning agents (plus Narrow AI vs General AI).", cyberLink: "Stateless firewall filters act like simple reflex agents; stateful IDS/SIEM systems maintain internal state models." },
      { id: "ai-problem-solving", title: "5. Problem-Solving Techniques", category: "Search & Problem Solving", level: "Studied Academically", summary: "Formulating complex problems as a sequence of actions leading from an initial state to a goal state under defined constraints.", cyberLink: "Attack path graph analysis (such as finding shortest privilege-escalation paths in Active Directory)." },
      { id: "ai-state-space", title: "6. State-Space Representation", category: "Search & Problem Solving", level: "Studied Academically", summary: "Models a problem as a directed graph of states (nodes) and actions/transitions (edges), with an initial state, goal test, and path cost function.", cyberLink: "Modelling network reachability and lateral movement paths across subnets." },
      { id: "ai-bfs", title: "7. Breadth-First Search (BFS)", category: "Search & Problem Solving", level: "Studied Academically", summary: "Uninformed search algorithm using a FIFO queue that explores all nodes at depth d before depth d+1. Complete and optimal when step costs are equal.", cyberLink: "Finding the minimum number of network hops or shortest trust path between two nodes." },
      { id: "ai-dfs", title: "8. Depth-First Search (DFS)", category: "Search & Problem Solving", level: "Studied Academically", summary: "Uninformed search algorithm using a LIFO stack (or recursion) that explores as deep as possible along each branch before backtracking.", cyberLink: "Traversing nested directory trees, process parent-child trees, or dependency graphs." },
      { id: "ai-heuristic", title: "9. Heuristic Search (Best-First / Greedy)", category: "Search & Problem Solving", level: "Studied Academically", summary: "Informed search using a heuristic function h(n) that estimates the cost from node n to the goal, guiding search toward promising paths.", cyberLink: "Prioritising high-risk vulnerability scan targets based on asset criticality scores." },
      { id: "ai-astar", title: "10. A* Search Algorithm", category: "Search & Problem Solving", level: "Studied Academically", summary: "Combines actual cost from start g(n) and estimated cost to goal h(n): f(n) = g(n) + h(n). Guaranteed optimal if h(n) is admissible (never overestimates).", cyberLink: "Optimal routing and minimum-cost attack-graph remediation planning." },
      { id: "ai-kr", title: "11. Knowledge Representation", category: "Knowledge & Logic", level: "Studied Academically", summary: "Structuring domain facts, relationships, and rules (via semantic networks, frames, ontologies, or logic) so a system can reason over them.", cyberLink: "MITRE ATT&CK matrices, STIX/TAXII threat intelligence ontologies, and CVE/CWE taxonomies." },
      { id: "ai-prop-logic", title: "12. Propositional Logic", category: "Knowledge & Logic", level: "Studied Academically", summary: "Declarative logic using Boolean propositions (True/False) and logical connectives (AND, OR, NOT, IMPLIES, EQUIVALENT) with truth-table and resolution inference.", cyberLink: "Writing exact Boolean detection logic in SIEM correlation queries and Sigma rules." },
      { id: "ai-pred-logic", title: "13. Predicate Logic (First-Order Logic)", category: "Knowledge & Logic", level: "Studied Academically", summary: "Extends propositional logic with objects, relations/predicates, variables, and quantifiers (For All ∀, There Exists ∃).", cyberLink: "Expressing security policies like: ∀ user u, if Role(u, Admin) → MFA_Enabled(u)." },
      { id: "ai-expert-systems", title: "14. Expert Systems", category: "Knowledge & Logic", level: "Studied Academically", summary: "Systems combining a domain Knowledge Base (IF-THEN rules), Working Memory (current facts), an Inference Engine, and an Explanation Facility.", cyberLink: "Rule-based intrusion detection systems (Suricata/Snort) and automated compliance auditors." },
      { id: "ai-inference", title: "15. Inference Engines (Forward & Backward Chaining)", category: "Knowledge & Logic", level: "Studied Academically", summary: "Forward chaining starts from observed facts and fires rules to derive conclusions (data-driven); Backward chaining starts from a hypothesis and checks supporting facts (goal-driven).", cyberLink: "Alert generation is forward chaining (logs → alert); incident root-cause investigation is backward chaining (compromise hypothesis → log evidence check)." },
      { id: "ai-neural-nets", title: "16. Neural Networks", category: "Machine Learning & DL", level: "Studied Academically", summary: "Layered networks of interconnected nodes (input, hidden, output layers) applying weighted sums, biases, non-linear activations, and gradient-descent backpropagation.", cyberLink: "Used in modern malware family classification and network anomaly scoring." },
      { id: "ai-supervised", title: "17. Supervised Learning", category: "Machine Learning & DL", level: "Studied Academically", summary: "Training models on labeled input-output pairs (X, y) so the model learns a mapping function to predict labels on unseen inputs.", cyberLink: "Training phishing email classifiers on labeled benign vs phishing datasets." },
      { id: "ai-unsupervised", title: "18. Unsupervised Learning", category: "Machine Learning & DL", level: "Studied Academically", summary: "Discovering hidden structure, clusters (e.g., K-Means), or outliers in unlabeled data without predefined categories.", cyberLink: "Detecting unusual login times or anomalous data transfer volumes (UEBA) when no prior attack labels exist." },
      { id: "ai-rl", title: "19. Reinforcement Learning", category: "Machine Learning & DL", level: "Studied Academically", summary: "An agent learns an optimal policy π by interacting with an environment and receiving positive or negative rewards for actions.", cyberLink: "Adaptive rate-limiting and automated cyber-defense simulation research." },
      { id: "ai-class-reg", title: "20. Classification and Regression", category: "Machine Learning & DL", level: "Studied Academically", summary: "Classification predicts discrete categorical labels (e.g., Malicious vs Benign, False Positive vs True Positive); Regression predicts continuous numerical values.", cyberLink: "Classifying network flows vs predicting time-to-remediate or risk scores." },
      { id: "ai-decision-trees", title: "21. Decision Trees", category: "Machine Learning & DL", level: "Studied Academically", summary: "Tree-structured models that split data recursively on features using Information Gain (Entropy reduction) or Gini Impurity, producing human-interpretable rules.", cyberLink: "Explainable alert triage models where SOC analysts can inspect the exact feature thresholds that triggered a flag." },
      { id: "ai-nlp", title: "22. Natural Language Processing (NLP)", category: "Applied AI", level: "Studied Academically", summary: "Computational techniques for tokenizing, parsing, and analyzing human language text (TF-IDF, sentiment/intent analysis, embeddings).", cyberLink: "Analyzing phishing email lure text, extracting IOCs from unstructured threat reports, and parsing command-line logs." },
      { id: "ai-cv", title: "23. Computer Vision", category: "Applied AI", level: "Studied Academically", summary: "Processing and extracting features from digital images/video using pixel matrices, filters, edge detection, and convolutional layers.", cyberLink: "Visual brand-spoofing detection on login pages and OCR on scanned security documents." },
      { id: "ai-genai", title: "24. Generative AI Fundamentals", category: "Applied AI", level: "Studied Academically", summary: "Models (such as Transformer-based LLMs) trained to generate text, code, or media by predicting token distributions, requiring careful verification against hallucinations and prompt injection.", cyberLink: "Assisting SOC analysts with log summarization while guarding against prompt injection and verifying every output against raw evidence." }
    ],
    pythonDemos: [
      {
        title: "Educational Demo: BFS vs. DFS Graph Traversal in Python (State-Space Search)",
        level: "Implemented Independently (Safe Educational Demo)",
        code: `from collections import deque

# State-space graph representation (e.g., network nodes or search states)
graph = {
    "Entry_Switch": ["Web_DMZ", "Mail_Gateway"],
    "Web_DMZ": ["App_Server"],
    "Mail_Gateway": ["Internal_VLAN"],
    "App_Server": ["DB_Host"],
    "Internal_VLAN": ["DB_Host"],
    "DB_Host": []
}

def bfs_shortest_path(adj, start, goal):
    queue = deque([[start]])
    visited = {start}
    while queue:
        path = queue.popleft()
        node = path[-1]
        if node == goal:
            return path
        for neighbor in adj.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(path + [neighbor])
    return None

print("BFS Shortest Path:", bfs_shortest_path(graph, "Entry_Switch", "DB_Host"))`
      }
    ]
  };

  // 3, 4, 5, 6, 7: EXPANDED TECHNICAL HUBS (Python, MySQL, Linux, Networking, Cybersecurity/VAPT)
  D.technicalHubs = {
    python: {
      title: "Python Programming & Security Automation Hub",
      subtitle: "Beginner-to-growing progression across core Python, OOP, regex/JSON/files, MySQL integration, and educational security script designs.",
      topics: [
        { name: "Variables, Data Types & Operators", state: "Practiced", detail: "Integers, floats, booleans, strings, type casting, and string formatting." },
        { name: "Conditional Statements (`if / elif / else`)", state: "Practiced", detail: "Decision branching used in input validation and the ATM console practice project." },
        { name: "Loops (`for`, `while`, `break`, `continue`)", state: "Practiced", detail: "Iterating over collections, menu loops, and retry counters." },
        { name: "Collections (`list`, `tuple`, `set`, `dict`)", state: "Practiced", detail: "Storing structured records, deduplicating items with sets, and key-value lookups." },
        { name: "Functions & Modular Code", state: "Practiced", detail: "Parameters, return values, scope, and breaking programs into reusable functions." },
        { name: "Object-Oriented Programming (Classes, Objects, Inheritance, Encapsulation)", state: "Currently Learning", detail: "Defining classes, `__init__` constructors, instance methods, encapsulation concepts, and inheritance." },
        { name: "Exception Handling (`try / except / finally`) & File Handling", state: "Currently Learning", detail: "Reading/writing text and log files safely and catching runtime/database errors cleanly." },
        { name: "Modules, Packages, Regular Expressions (`re`) & JSON (`json`)", state: "Currently Learning", detail: "Using standard library modules to match IP/email patterns and parse structured JSON data." },
        { name: "MySQL Database Connectivity (`mysql.connector`)", state: "Practiced", detail: "Connecting Python to local MySQL (`a01.the`), executing parameterised queries, and fetching rows." }
      ],
      educationalScripts: [
        {
          name: "1. IP Address Information Utility (Educational Script)",
          status: "Educational Concept / Safe Local Utility",
          desc: "Uses Python's built-in `ipaddress` library to validate IPv4/IPv6 strings and check whether an address is private (RFC 1918), loopback, or reserved.",
          code: `import ipaddress

def inspect_ip(ip_str):
    ip = ipaddress.ip_address(ip_str)
    return {
        "ip": str(ip),
        "version": f"IPv{ip.version}",
        "is_private": ip.is_private,
        "is_loopback": ip.is_loopback
    }

print(inspect_ip("127.0.0.1"))
print(inspect_ip("192.168.56.101"))`
        },
        {
          name: "2. Log File Analyzer (Educational Concept)",
          status: "Currently Learning / Educational Template",
          desc: "Reads a sanitised sample authentication log and counts failed login attempts per source IP.",
          code: `import re
from collections import Counter

sample_logs = [
    "Failed password for invalid user admin from 192.0.2.45 port 51234 ssh2",
    "Failed password for root from 192.0.2.45 port 51238 ssh2",
    "Accepted publickey for analyst from 192.0.2.10 port 54001 ssh2"
]

failed_ips = Counter()
for line in sample_logs:
    if "Failed password" in line:
        match = re.search(r"from (\d+\.\d+\.\d+\.\d+)", line)
        if match:
            failed_ips[match.group(1)] += 1

print("Failed logins by IP:", dict(failed_ips))`
        },
        {
          name: "3. Password Strength Checker (Educational Concept)",
          status: "Currently Learning / Educational Template",
          desc: "Evaluates password length and character class diversity (uppercase, lowercase, digits, symbols) without storing plaintext passwords.",
          code: `import re

def check_password_policy(pw):
    checks = {
        "min_length_12": len(pw) >= 12,
        "has_upper": bool(re.search(r"[A-Z]", pw)),
        "has_lower": bool(re.search(r"[a-z]", pw)),
        "has_digit": bool(re.search(r"\d", pw)),
        "has_symbol": bool(re.search(r"[^A-Za-z0-9]", pw))
    }
    return all(checks.values()), checks`
        },
        {
          name: "4. File Integrity Checker Using Hashing (Educational Concept)",
          status: "Currently Learning / Educational Template",
          desc: "Computes SHA-256 digests of files in chunks to detect unauthorized file modifications.",
          code: `import hashlib

def sha256_bytes(data_bytes):
    h = hashlib.sha256()
    h.update(data_bytes)
    return h.hexdigest()`
        },
        {
          name: "5. Authorised Local Lab Port Check Utility (Educational Concept)",
          status: "Educational Concept (Strictly Authorised Local Lab Only)",
          desc: "Demonstrates how Python's `socket` module checks whether a specific local VM service port (e.g. `127.0.0.1:80` or `3306`) is listening.",
          code: `import socket

def check_local_port(host="127.0.0.1", port=3306, timeout=1.0):
    # Strictly for authorised localhost / isolated VirtualBox lab verification
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(timeout)
        return s.connect_ex((host, port)) == 0`
        }
      ]
    },

    mysql: {
      title: "MySQL & Relational Database Management Hub",
      subtitle: "Combining B.E. Computer Engineering DBMS fundamentals with hands-on MySQL Workbench and Python mysql.connector practice.",
      practicedVsStudied: [
        { group: "Hands-On Practiced in MySQL Workbench (`a01.the`)", items: ["Database & Table creation (`a01`, table `the` with fictional records)", "`SELECT`, `INSERT`, `UPDATE`, `DELETE`", "`ALTER`, `DROP`, `RENAME`, table copying/cloning", "`WHERE`, `LIKE`, `DISTINCT`, `ORDER BY`, `LIMIT`", "`GROUP BY`, `HAVING`, aggregate functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`)", "`CASE` expressions, `UNION`, `JOIN`s (`INNER`, `LEFT`, `RIGHT`)", "Subqueries, Window Functions, Stored Procedures, and Python `mysql.connector`"] },
        { group: "Studied Academically (DBMS & Security Concepts)", items: ["DBMS vs RDBMS architecture & ACID properties", "Primary Keys, Foreign Keys, Unique/Not Null/Check constraints & ER modelling", "Database Normalization (1NF, 2NF, 3NF, BCNF) to eliminate redundancy and anomalies", "ETL (Extract, Transform, Load) workflow concepts", "SQL Injection prevention via Prepared Statements & Least-Privilege Database Grants (`GRANT` / `REVOKE`)"] }
      ]
    },

    linux: {
      title: "Linux, Operating Systems & Kali Linux Hub",
      subtitle: "Linux architecture, filesystem hierarchy, CLI administration, networking commands, UFW firewalling, and real shell troubleshooting.",
      commandReference: [
        { topic: "Linux Architecture & Filesystem Hierarchy", cmd: "ls -la / /etc /var/log /proc", explanation: "Inspects root directories: `/etc` (system configs), `/var/log` (system & auth logs), `/proc` (virtual kernel/process info), `/home` (user dirs)." },
        { topic: "File & Directory Management", cmd: "pwd && ls -lah && mkdir -p lab_notes && cp file.txt lab_notes/", explanation: "Navigate directories, view hidden dotfiles and human-readable sizes, and manage lab directories." },
        { topic: "Permissions, Ownership, Users & Groups", cmd: "chmod 600 ~/.ssh/id_ed25519 && chown user:group file && id && groups", explanation: "Enforce least-privilege `rwx` permissions (octal `600`/`750`) and inspect current user UID/GID and group memberships." },
        { topic: "Processes, Services & Package Management", cmd: "ps aux | grep apache2 && systemctl status NetworkManager && sudo apt update", explanation: "Check running daemons, verify service state (such as Apache/Nginx or NetworkManager), and manage Debian/Kali packages." },
        { topic: "Networking, Interfaces & SSH", cmd: "ip addr && ss -tulnp && ping -c 4 192.0.2.101", explanation: "Distinguish loopback `lo` (`127.0.0.1`) from `eth0`, inspect listening TCP/UDP sockets, and verify isolated lab reachability." },
        { topic: "System Logs & UFW Firewall", cmd: "sudo ufw status verbose && journalctl -u ssh -n 20", explanation: "Check active host firewall rules and inspect recent service authentication events." },
        { topic: "Environment Variables, Keyboard & Shell Aliases", cmd: "echo $SHELL && setxkbmap us && alias", explanation: "Verify current shell (`zsh` vs `bash` to avoid `shopt`/`complete: command not found`), set US keyboard layout, and list active aliases." }
      ]
    },

    networking: {
      title: "Computer Networking & Protocol Architecture",
      subtitle: "OSI & TCP/IP models, addressing, subnetting, core protocols (DNS, DHCP, ARP, HTTP/HTTPS), and practical Windows/Kali troubleshooting.",
      coreTopics: [
        { name: "OSI 7-Layer Model vs. TCP/IP 4-Layer Model", detail: "Physical (L1: bits/cables), Data Link (L2: frames/MAC/switches/ARP), Network (L3: packets/IP/routing), Transport (L4: segments/TCP-UDP/ports), Session (L5), Presentation (L6), Application (L7: HTTP, DNS, SSH)." },
        { name: "TCP vs. UDP & Common Ports", detail: "TCP uses 3-way handshake (`SYN`, `SYN-ACK`, `ACK`), sequence numbers, and flow control; UDP is connectionless and low-overhead. Key ports: 21 (FTP), 22 (SSH), 53 (DNS), 67/68 (DHCP), 80 (HTTP), 443 (HTTPS), 3306 (MySQL)." },
        { name: "IPv4, IPv6, Private vs. Public IPs, NAT & Subnetting", detail: "RFC 1918 private ranges (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), loopback (`127.0.0.1/8`), CIDR subnet masks (`/24` = `255.255.255.0`), Default Gateways, and Network Address Translation (NAT)." },
        { name: "MAC Addresses, ARP, DHCP & DNS", detail: "ARP resolves IPv4 addresses to Layer-2 MAC addresses on a LAN; DHCP assigns dynamic IPs via DORA (Discover, Offer, Request, Acknowledge); DNS resolves domain names to IPs." },
        { name: "LAN, WAN, WLAN, Routing, Switching & Firewalls", detail: "Switches forward frames by MAC table inside a LAN; routers forward packets across networks by IP routing table; firewalls enforce stateful port/protocol filtering." }
      ]
    }
  };

  // 8. INDIVIDUAL SECURITY TOOL DOCUMENTATION PAGES (All 9 Required Tools)
  D.toolsDocumentation = [
    {
      id: "tool-kali",
      name: "Kali Linux",
      category: "Operating System & Lab Platform",
      authenticity: "Practiced in a Virtual Lab",
      purpose: "Debian-derived Linux distribution maintained by OffSec, pre-configured with network analysis, vulnerability assessment, and digital forensics utilities for authorised security testing.",
      setup: "Deployed as an isolated VirtualBox guest VM on the HP OMEN 16 host (allocated 2–4 GB RAM out of 16 GB host RAM) connected to a VirtualBox Host-Only network adapter.",
      commands: [
        { cmd: "ip addr", desc: "Inspect `lo` loopback (`127.0.0.1/8`) and `eth0` virtual interface IPv4/IPv6 bindings." },
        { cmd: "echo $SHELL && alias", desc: "Check active shell interpreter (`zsh` vs `bash`) and list defined command aliases." },
        { cmd: "setxkbmap us", desc: "Configure US keyboard layout in the X11 session." }
      ],
      practicalExample: "Used Kali Linux as the primary analyst workstation in VirtualBox to run Nmap scans, inspect packets with Wireshark/tcpdump, and explore `msfconsole` against Metasploitable2.",
      evidenceStatus: "Terminal screenshots pending addition; shell alias troubleshooting (`shopt`/`complete` in `.bashrc`) documented in Case Studies.",
      observations: "Default shell in modern Kali is `zsh`, which explains why sourcing Bash-specific builtins (`shopt`, `complete`) from `~/.bashrc` inside a non-Bash shell produces `command not found`.",
      lessonsLearned: "Always verify interface bindings (`ip addr`) and shell environment (`echo $SHELL`) before starting lab assessments."
    },
    {
      id: "tool-nmap",
      name: "Nmap (Network Mapper)",
      category: "Network Reconnaissance & Enumeration",
      authenticity: "Practiced in a Virtual Lab",
      purpose: "Open-source utility for authorised network discovery, host enumeration, port scanning, and service/version detection.",
      setup: "Pre-installed in Kali Linux (`/usr/bin/nmap`); used strictly inside the isolated VirtualBox Host-Only subnet.",
      commands: [
        { cmd: "nmap -sn 192.0.2.0/24", desc: "Host discovery (ping sweep) to identify live hosts on an authorised lab subnet without port scanning." },
        { cmd: "nmap -sV 192.0.2.101", desc: "Probe open ports on the target lab VM to identify running service banners and versions (e.g., vsFTPd 2.3.4, Apache)." },
        { cmd: "nmap -p 1-1000 -T4 192.0.2.101", desc: "Scan the first 1000 TCP ports on the isolated lab target." }
      ],
      practicalExample: "Used Nmap in the VirtualBox Host-Only lab to discover the Metasploitable2 target VM and identify listening services such as FTP (port 21) and HTTP (port 80).",
      evidenceStatus: "Sanitised Nmap scan output from isolated lab marked 'Evidence pending'.",
      observations: "Service version detection (`-sV`) reveals exact daemon versions (such as `vsftpd 2.3.4`) that map directly to vulnerability assessment research.",
      lessonsLearned: "Port state (`open`, `closed`, `filtered`) reflects how the target stack and firewall respond to probe packets."
    },
    {
      id: "tool-wireshark",
      name: "Wireshark",
      category: "Packet Capture & Protocol Analysis",
      authenticity: "Practiced in a Virtual Lab",
      purpose: "Graphical network protocol analyzer used to capture and inspect packet headers and payloads across network layers in real time.",
      setup: "Pre-installed in Kali Linux; run on the isolated lab interface (`eth0`) to observe lab traffic.",
      commands: [
        { cmd: "tcp.port == 21 || tcp.port == 80", desc: "Wireshark display filter to isolate FTP or HTTP lab traffic." },
        { cmd: "ip.addr == 192.0.2.101", desc: "Display filter to view traffic to and from a specific lab host." },
        { cmd: "tcp.flags.syn == 1 && tcp.flags.ack == 0", desc: "Filter initial TCP SYN connection attempts (useful for spotting port scans)." }
      ],
      practicalExample: "Explored packet capture on the Kali VM to see how TCP handshakes, DNS lookups, and HTTP/FTP requests look on the wire.",
      evidenceStatus: "Sanitised `.pcap` screenshots marked 'Evidence pending'.",
      observations: "Plaintext protocols (HTTP, FTP) expose commands and parameters directly in packet payloads, demonstrating why TLS encryption is essential.",
      lessonsLearned: "Display filters are essential for isolating relevant conversations from background broadcast/multicast traffic."
    },
    {
      id: "tool-tcpdump",
      name: "tcpdump",
      category: "CLI Packet Capture",
      authenticity: "Practiced in a Virtual Lab",
      purpose: "Command-line packet analyzer for capturing and filtering network traffic directly in a Linux terminal or headless server.",
      setup: "Available natively in Kali Linux; requires root/`sudo` privileges to put an interface into capture mode.",
      commands: [
        { cmd: "sudo tcpdump -i eth0 -n -c 20", desc: "Capture 20 packets on `eth0` without resolving hostnames (`-n`) for fast CLI triage." },
        { cmd: "sudo tcpdump -i eth0 tcp port 80 -w lab_http.pcap", desc: "Capture port 80 traffic and save to a `.pcap` file for later inspection in Wireshark." }
      ],
      practicalExample: "Practised lightweight CLI packet inspection alongside Wireshark in the Kali Linux lab.",
      evidenceStatus: "Sanitised CLI output marked 'Evidence pending'.",
      observations: "Using `-n` prevents `tcpdump` from generating extra reverse-DNS traffic while capturing.",
      lessonsLearned: "`tcpdump` is ideal when working over SSH or on servers without a GUI, while `.pcap` exports bridge CLI capture with Wireshark analysis."
    },
    {
      id: "tool-metasploit",
      name: "Metasploit Framework (`msfconsole`)",
      category: "Vulnerability Validation & Lab Exploration",
      authenticity: "Practiced in a Virtual Lab (Workflow & Troubleshooting)",
      purpose: "Modular security testing framework used in authorised labs to study exploit modules, auxiliary scanners, payload mechanics, and session handling.",
      setup: "Pre-installed in Kali Linux; tested strictly against an intentionally vulnerable Metasploitable2 VM on an isolated VirtualBox Host-Only network.",
      commands: [
        { cmd: "msfconsole -q", desc: "Launch the Metasploit console quietly." },
        { cmd: "search vsftpd && use exploit/unix/ftp/vsftpd_234_backdoor", desc: "Search for and load the vsFTPd 2.3.4 backdoor module." },
        { cmd: "show options && set RHOSTS <lab_target_ip>", desc: "Inspect required module parameters (`RHOSTS`, `RPORT`) and configure the isolated target." },
        { cmd: "sessions -l", desc: "Correct plural command to list active sessions (whereas typing singular `session -1` returns `Unknown command: session.`)." }
      ],
      practicalExample: "Explored module workflow (`exploit/unix/ftp/vsftpd_234_backdoor`), studied the difference between Exploit modules, Auxiliary modules (scanners/enumeration), and Payloads (bind vs. reverse shells), and documented command troubleshooting when `sessions -l` confirmed `No active sessions.`.",
      evidenceStatus: "Truthfully documented as 'In Progress — Module Workflow & Command Troubleshooting Only' with zero false claims of exploitation.",
      observations: "Running `sessions -l` and observing `No active sessions.` proves that loading a module or typing a session command does not mean a target was compromised; verification is mandatory.",
      lessonsLearned: "Understanding why an exploit attempt did not open a session (service state, network reachability, or missing execution step) is a core analytical skill."
    },
    {
      id: "tool-ufw",
      name: "UFW (Uncomplicated Firewall)",
      category: "Host Firewall Management",
      authenticity: "Practiced in a Virtual Lab",
      purpose: "User-friendly front-end for managing Linux `iptables`/`nftables` host firewall rules.",
      setup: "Practised on Linux terminal to understand inbound/outbound filtering and service port protection.",
      commands: [
        { cmd: "sudo ufw status numbered", desc: "View current firewall status and numbered rule order." },
        { cmd: "sudo ufw default deny incoming && sudo ufw default allow outgoing", desc: "Establish a baseline default-deny policy for unsolicited inbound connections." },
        { cmd: "sudo ufw allow 22/tcp", desc: "Explicitly permit inbound SSH connections where required." }
      ],
      practicalExample: "Studied and practised UFW rule commands as part of Linux host hardening and internship firewall fundamentals.",
      evidenceStatus: "Command notes integrated; lab terminal screenshot pending.",
      observations: "Host firewalls provide defence-in-depth even on internal subnets by blocking unauthorized lateral connections to listening daemons.",
      lessonsLearned: "Always verify administrative access rules before enabling a default-deny firewall policy on a remote system."
    },
    {
      id: "tool-virtualbox",
      name: "Oracle VirtualBox",
      category: "Hypervisor & Isolated Lab Virtualization",
      authenticity: "Practiced in a Virtual Lab",
      purpose: "Type-2 hypervisor used on the Windows 11 host (HP OMEN 16) to run isolated Kali Linux, Metasploitable2, and DVWA virtual machines.",
      setup: "Configured with Host-Only networking so intentionally vulnerable targets remain completely isolated from external networks, and balanced within the host's 16 GB RAM.",
      commands: [
        { cmd: "Network Mode: Host-Only Adapter", desc: "Creates a private virtual switch between the host/analyst VM and target VM without internet bridging." },
        { cmd: "VM Snapshots", desc: "Save clean baseline states before testing configuration changes or troubleshooting." }
      ],
      practicalExample: "Built the private virtual lab connecting Kali Linux and Metasploitable2 (historical session subnet `192.168.56.0/24`).",
      evidenceStatus: "Documented with inline SVG topology diagram.",
      observations: "With 16 GB host RAM, sizing VMs carefully (e.g., 2–4 GB for Kali and 512 MB–1 GB for Metasploitable2) keeps both host and guests responsive.",
      lessonsLearned: "Never place intentionally vulnerable VMs (like Metasploitable2 or DVWA) on a Bridged adapter connected to an untrusted Wi-Fi network."
    },
    {
      id: "tool-linux-terminal",
      name: "Linux Terminal & Shell Environment",
      category: "Operating System CLI",
      authenticity: "Practiced in a Virtual Lab",
      purpose: "Core command-line interface for system administration, network diagnostics, log inspection, and scripting.",
      setup: "Used daily inside the Kali Linux VM.",
      commands: [
        { cmd: "ip addr && ps aux && df -h", desc: "Check interfaces, running processes, and disk usage." },
        { cmd: "grep -i 'error' /var/log/syslog", desc: "Search system logs for error strings." }
      ],
      practicalExample: "Used for interface analysis (`lo` vs `eth0`), keyboard layout setup (`setxkbmap us`), and `.bashrc` alias debugging.",
      evidenceStatus: "Documented in Linux & VirtualBox Case Study.",
      observations: "Knowing how standard streams (`stdin`, `stdout`, `stderr`) and pipes (`|`) work accelerates every security tool workflow.",
      lessonsLearned: "CLI proficiency is the common foundation across Linux administration, VAPT, and SOC log triage."
    },
    {
      id: "tool-mysql-workbench",
      name: "MySQL Workbench",
      category: "Database Design & SQL Querying",
      authenticity: "Implemented Independently (Learning Practice)",
      purpose: "Visual database design, SQL development, and administration tool for MySQL Server.",
      setup: "Installed on the Windows 11 host and connected to a local MySQL instance (`127.0.0.1:3306`) with practice database `a01`.",
      commands: [
        { cmd: "USE a01; DESCRIBE `the`;", desc: "Select the practice schema and inspect column definitions (`id, name, city, phone, email`)." },
        { cmd: "SELECT city, COUNT(*) FROM `the` GROUP BY city HAVING COUNT(*) >= 1;", desc: "Run aggregate analytical queries over fictional sample records." }
      ],
      practicalExample: "Used to practise DDL/DML statements, joins, subqueries, window functions, stored procedures, and verify rows inserted via Python `mysql.connector`.",
      evidenceStatus: "SQL query examples documented with 100% fictional sample records (`@example.invalid`).",
      observations: "Visualising query results in MySQL Workbench makes it easy to verify how `WHERE`, `GROUP BY`, and `HAVING` filter data step by step.",
      lessonsLearned: "Structured SQL querying translates directly to querying security event tables and endpoint tools like `osquery`."
    }
  ];

  // 9. COLLEGE ACADEMIC TECHNICAL KNOWLEDGE — "Academic Technical Foundation" (13 Subjects)
  D.academicFoundation = [
    {
      subject: "1. Cryptography and Network Security (CNS)",
      domain: "Security & Mathematics",
      concepts: "Symmetric/Asymmetric ciphers (DES, AES, RSA), Diffie-Hellman key exchange, Block cipher modes (CBC), SHA-512 hashing, Digital Signatures (RSA, Schnorr, ElGamal), Key Management, and TLS/secure communication principles.",
      realWorldApplication: "Directly underpins HTTPS/TLS inspection, VPN security, password storage analysis, PKI certificate validation, and DFIR file hashing."
    },
    {
      subject: "2. Artificial Intelligence (AI)",
      domain: "Algorithms & Intelligent Systems",
      concepts: "Intelligent agents (PEAS), State-space search (BFS, DFS, Heuristic, A*), Knowledge representation, Propositional & Predicate logic, Expert systems & Inference engines, Neural networks, Supervised/Unsupervised/Reinforcement learning, Decision trees, NLP, Computer Vision, and Generative AI.",
      realWorldApplication: "Supports SIEM rule logic (propositional/predicate logic), attack-path graph search (BFS/A*), anomaly detection (unsupervised clustering), and phishing/log classification."
    },
    {
      subject: "3. Big Data Analytics",
      domain: "Distributed Data Systems",
      concepts: "The 5 Vs of Big Data (Volume, Velocity, Variety, Veracity, Value), distributed file systems (HDFS architecture: NameNode & DataNodes), MapReduce programming model, and batch vs. stream processing.",
      realWorldApplication: "Modern enterprise SIEMs and security data lakes (ELK/OpenSearch, Splunk, Sentinel) are big-data pipelines ingesting millions of high-velocity endpoint and firewall logs."
    },
    {
      subject: "4. Android Development",
      domain: "Mobile & Application Engineering",
      concepts: "Android software stack, Activity lifecycle, Intents, Services, Broadcast Receivers, Content Providers, `AndroidManifest.xml` permissions model, and SQLite local storage.",
      realWorldApplication: "Understanding how Android isolates apps in UID sandboxes, declares permissions in `AndroidManifest.xml`, and handles inter-process Intents is the foundation of Mobile Application Security."
    },
    {
      subject: "5. Compiler Design",
      domain: "Systems & Language Processing",
      concepts: "Lexical analysis (tokenization/regex), Syntax analysis (context-free grammars, parse trees, ASTs), Semantic analysis (type checking), Intermediate code generation, Code optimization, and Target code generation.",
      realWorldApplication: "Static Application Security Testing (SAST) tools, YARA rule engines, WAF parsers, and SQL injection detectors use lexical tokenization and Abstract Syntax Trees (ASTs) to spot malicious code patterns."
    },
    {
      subject: "6. Mobile Computing & Wireless Communication",
      domain: "Wireless & Telecom Networks",
      concepts: "Cellular frequency reuse, handoff (hard vs. soft), mobility management, roaming, signal propagation, multiplexing (FDMA, TDMA, CDMA, OFDM), and mobile constraints.",
      realWorldApplication: "Helps security analysts understand wireless attack surfaces, rogue base station risks, and enterprise mobile device management (MDM)."
    },
    {
      subject: "7. GSM and GPRS Architecture",
      domain: "Cellular Security & Packet Core",
      concepts: "GSM subsystems (Mobile Station SIM/ME, BSS: BTS + BSC, NSS: MSC, HLR, VLR, AuC, EIR), GSM authentication (SIM secret key Ki, 128-bit RAND challenge, SRES via A3, session key Kc via A8, A5 stream encryption), and GPRS packet switching (SGSN & GGSN).",
      realWorldApplication: "Illustrates challenge-response authentication in hardware tokens (SIM cards) and how telecom packet cores route mobile internet traffic (including USB RNDIS tethering)."
    },
    {
      subject: "8. Mobile IP",
      domain: "Network Mobility Protocols",
      concepts: "Maintaining continuous TCP/IP connectivity across subnet changes using a permanent Home Address, Home Agent (HA), Foreign Agent (FA), Care-of Address (CoA), Agent Discovery, Registration, and IP-in-IP tunneling.",
      realWorldApplication: "Demonstrates how IP encapsulation/tunneling works (similar to VPN tunnels) and why registration messages require cryptographic authentication to prevent session hijacking."
    },
    {
      subject: "9. Wi-Fi (IEEE 802.11) & Bluetooth",
      domain: "Local Wireless Protocols",
      concepts: "802.11 frames, SSID/BSSID, evolution from flawed WEP (RC4 IV reuse) to WPA2 (AES-CCMP & 4-way EAPOL handshake) and WPA3 (SAE Dragonfly handshake); Bluetooth piconets/scatternets, frequency hopping (FHSS), and pairing.",
      realWorldApplication: "Directly relevant to wireless security auditing, defending against deauthentication/handshake capture, and troubleshooting host Wi-Fi adapters (such as the Intel Wi-Fi 6E AX211)."
    },
    {
      subject: "10. Wireless Application Protocol (WAP)",
      domain: "Legacy Mobile Web Stack",
      concepts: "WAP protocol stack (WAE/WML, WSP, WTP, WTLS, WDP), WAP Gateway/Proxy model translating wireless protocols to standard HTTP/TCP.",
      realWorldApplication: "Classic case study in protocol translation security: the historic 'WAP Gap' (where WTLS decrypted traffic at the gateway before re-encrypting into TLS) taught the industry why end-to-end encryption is critical."
    },
    {
      subject: "11. Computer Networking",
      domain: "Core Infrastructure",
      concepts: "OSI & TCP/IP models, IPv4/IPv6 subnetting, routing algorithms (Distance Vector vs. Link State), TCP congestion/flow control, DNS, DHCP, ARP, NAT, and socket programming.",
      realWorldApplication: "Every network IDS alert, firewall rule, packet capture, and Nmap scan relies on solid Layer 2–Layer 7 networking fundamentals."
    },
    {
      subject: "12. Database Management Systems (DBMS)",
      domain: "Data Architecture & Integrity",
      concepts: "Relational algebra, SQL DDL/DML/DCL/TCL, ER diagrams, Functional dependencies & Normalization (1NF–BCNF), Transaction ACID properties, Concurrency control, and Indexing (B-Trees).",
      realWorldApplication: "Essential for securing backend databases against SQL Injection, designing audit logs, and writing efficient analytical queries."
    },
    {
      subject: "13. Programming Fundamentals & Data Structures",
      domain: "Software Engineering",
      concepts: "Structured & Object-Oriented programming, arrays, linked lists, stacks (LIFO), queues (FIFO), trees, graphs, hashing, searching/sorting complexity (Big-O), and modular code design.",
      realWorldApplication: "Enables writing clean Python automation scripts, understanding memory structures in DFIR/exploit analysis, and reasoning about algorithm performance."
    }
  ];

  // 10. WINDOWS 11 VS KALI LINUX NETWORKING DIFFERENCES & DEDICATED TROUBLESHOOTING DATA
  D.windowsVsKaliNetworking = [
    {
      aspect: "Interface Naming & Inspection",
      windows11: "Named adapters (`Wi-Fi`, `Ethernet`, `Remote NDIS Based Internet Sharing Device`) inspected via `ipconfig /all`, `Get-NetAdapter`, and Device Manager (`devmgmt.msc`).",
      kaliLinux: "Predictable/kernel interface names (`lo` loopback, `eth0`, `wlan0`) inspected via `ip addr` (`ip a`) and `ip link`."
    },
    {
      aspect: "Driver & Stack Binding Architecture",
      windows11: "Uses `.inf`/`.sys` driver packages staged in Driver Store (`pnputil`), bound through NDIS class filters and `NetSetupSvc` (where class config issues trigger **Code 56 / `CM_PROB_NEED_CLASS_CONFIG`**).",
      kaliLinux: "Uses kernel modules (`lsmod`, `modprobe`) and `NetworkManager` / `systemd-networkd` without registry class-filter staging."
    },
    {
      aspect: "Network Reset & Repair Utilities",
      windows11: "`netsh winsock reset`, `netsh int ip reset`, `ipconfig /flushdns`, `netcfg -d` (rebuilds adapters; use with caution), and `DISM /RestoreHealth` (requires online WU or offline `/Source:WIM`).",
      kaliLinux: "`sudo systemctl restart NetworkManager`, `sudo ip link set eth0 down/up`, `sudo dhclient -r && sudo dhclient eth0`."
    },
    {
      aspect: "USB Phone Tethering Handling",
      windows11: "Enumerates phone as a `Remote NDIS Based Internet Sharing Device` network adapter requiring NDIS class configuration to complete.",
      kaliLinux: "Enumerates via `rndis_host` / `cdc_ether` kernel module as a dynamic USB Ethernet interface (e.g., `usb0` or `eth1`)."
    }
  ];

  // 11. EXPANDED 9-CATEGORY PROJECT & PRACTICAL DOCUMENTATION LIBRARY
  // Preserves the 6 detailed 16-section case studies and adds structured project/documentation cards across all 9 categories
  D.expandedProjectLibrary = [
    {
      id: "lib-cyber-dvwa-vapt",
      title: "DVWA Web Security & SQLi/XSS Remediation Study",
      category: "Cybersecurity",
      authenticity: "Practiced in a Virtual Lab",
      linkedCaseId: "case-dvwa-web-security",
      objective: "Understand how input handling flaws cause SQL Injection and Cross-Site Scripting in DVWA and how parameterised queries and output encoding remediate them.",
      problemStatement: "Web applications that concatenate untrusted input into SQL queries or HTML responses expose databases and user sessions.",
      technologies: ["DVWA", "Kali Linux", "Web DevTools", "PHP/MySQL Concepts"],
      environment: "Isolated local lab environment on HP OMEN 16.",
      methodology: "Compare DVWA Low vs. Impossible security levels, inspect backend SQL/HTML handling, and document defensive fixes.",
      implementation: "Explored DVWA SQLi and XSS modules in an isolated environment; separated concepts studied from hands-on tests.",
      evidence: "Lab setup notes documented; sanitised request/response screenshots marked 'Evidence pending'.",
      results: "Verified how prepared statements separate query structure from user data.",
      challenges: "Keeping vulnerable web apps strictly isolated from external networks.",
      lessonsLearned: "Client-side controls can be bypassed; server-side parameterisation and encoding are mandatory.",
      futureImprovements: "Capture step-by-step Burp Suite Community / OWASP ZAP traffic logs in the isolated lab."
    },
    {
      id: "lib-cyber-metasploit-lab",
      title: "Metasploit Module Workflow & Session Management Lab (`vsftpd_234_backdoor`)",
      category: "Cybersecurity",
      authenticity: "Practiced in a Virtual Lab",
      linkedCaseId: "case-metasploit-vsftpd",
      objective: "Explore `msfconsole` module selection, parameter configuration, and session verification (`sessions -l`) against Metasploitable2.",
      problemStatement: "Beginners must learn to verify whether an exploit attempt actually opened a session rather than assuming success.",
      technologies: ["Kali Linux", "Metasploit Framework", "Metasploitable2", "VirtualBox Host-Only Network"],
      environment: "Isolated VirtualBox Host-Only subnet (`192.168.56.0/24` historical lab context).",
      methodology: "Load `exploit/unix/ftp/vsftpd_234_backdoor`, troubleshoot `session -1` (`Unknown command`) vs `sessions -l`, and inspect session output.",
      implementation: "Executed module workflow exploration and verified `No active sessions.` in `sessions -l`.",
      evidence: "Command sequence documented; terminal screenshot marked 'Evidence pending'.",
      results: "Confirmed module workflow and `sessions` syntax; no host exploitation claimed.",
      challenges: "Distinguishing singular `session` syntax error from plural `sessions -l`.",
      lessonsLearned: "Empty session tables confirm no active shell was established; honest verification is essential.",
      futureImprovements: "Correlate module traffic with a simultaneous Wireshark capture on TCP ports 21 and 6200."
    },
    {
      id: "lib-crypto-demos",
      title: "Cryptography & Network Security (CNS) Algorithm & Hashing Lab",
      category: "Cryptography",
      authenticity: "Studied Academically",
      linkedCaseId: null,
      objective: "Understand symmetric (DES, AES, CBC) and asymmetric (RSA, Diffie-Hellman, Digital Signatures: RSA, Schnorr, ElGamal) algorithms alongside SHA-512 integrity verification.",
      problemStatement: "Security analysts need to understand how encryption, key exchange, hashing, and signatures work mathematically and operationally.",
      technologies: ["Python 3 (`hashlib`)", "Modular Arithmetic", "CNS Academic Framework"],
      environment: "Local Python 3 educational environment.",
      methodology: "Study mathematical foundations of DES, AES, RSA, DH, CBC, SHA-512, Schnorr, and ElGamal, and write safe Python educational demos for SHA-512 and toy RSA/DH.",
      implementation: "Created interactive CNS knowledge base and safe Python educational scripts in this portfolio.",
      evidence: "Runnable Python SHA-512 & modular arithmetic code included in the Cryptography section.",
      results: "Demonstrated the SHA-512 avalanche effect and verified shared secret derivation in Diffie-Hellman.",
      challenges: "Understanding modular multiplicative inverses and why ephemeral nonces `k` in ElGamal/Schnorr must never repeat.",
      lessonsLearned: "Never roll custom cryptography in production; always use audited standards (AES-GCM, RSA-OAEP/Ed25519, SHA-256/512).",
      futureImprovements: "Add OpenSSL CLI certificate and signature inspection examples."
    },
    {
      id: "lib-python-atm-mysql",
      title: "Python ATM Console Practice & MySQL Connector Integration",
      category: "Python",
      authenticity: "Implemented Independently",
      linkedCaseId: "case-python-mysql-learning",
      objective: "Practise Python control flow, functions, OOP fundamentals, and parameterised MySQL database connectivity.",
      problemStatement: "Build programming fluency for security automation by starting with structured console logic and database integration.",
      technologies: ["Python 3", "mysql-connector-python (`mysql.connector`)", "MySQL Server"],
      environment: "HP OMEN 16 (Windows 11 local development environment).",
      methodology: "Build an ATM-style practice script (PIN check, balance inquiry, deposit/withdrawal validation) and connect Python to MySQL schema `a01`.",
      implementation: "Practised core Python constructs and `mysql.connector` queries; documented educational templates for IP, log, password, and hash utilities.",
      evidence: "Code patterns documented in portfolio; repository link marked 'Link to be added'.",
      results: "Successfully connected Python to MySQL and established a clean foundation for security scripting.",
      challenges: "Managing database connection lifecycles and avoiding string concatenation in SQL queries.",
      lessonsLearned: "Parameterised `%s` placeholders in `mysql.connector` prevent SQL injection while keeping code clean.",
      futureImprovements: "Expand educational log parser and SHA-256 file integrity scripts into standalone GitHub repositories."
    },
    {
      id: "lib-mysql-a01",
      title: "MySQL Relational Querying & Schema Practice (`a01.the`)",
      category: "MySQL",
      authenticity: "Implemented Independently",
      linkedCaseId: "case-mysql-sql-query-practice",
      objective: "Practise DDL, DML, joins, aggregations, subqueries, window functions, and stored procedures in MySQL Workbench.",
      problemStatement: "Develop strong SQL querying skills applicable to relational databases, log analysis, and `osquery`.",
      technologies: ["MySQL Server", "MySQL Workbench", "SQL"],
      environment: "Local MySQL Workbench instance using practice schema `a01` and table `the (id, name, city, phone, email)` with fictional records.",
      methodology: "Execute schema alterations, filtering (`WHERE`, `LIKE`), grouping (`GROUP BY`, `HAVING`), `JOIN`s, `CASE`, and window functions.",
      implementation: "Practised SQL operations in MySQL Workbench using synthetic sample data (`@example.invalid`).",
      evidence: "SQL query examples included; Workbench screenshots marked 'Evidence pending'.",
      results: "Solidified understanding of SQL execution order and relational data manipulation.",
      challenges: "Distinguishing pre-aggregation row filtering (`WHERE`) from post-aggregation group filtering (`HAVING`).",
      lessonsLearned: "Always use synthetic/fictional data in practice schemas to maintain strict privacy hygiene.",
      futureImprovements: "Design a multi-table security event & vulnerability tracking schema."
    },
    {
      id: "lib-net-vbox-lab",
      title: "Isolated VirtualBox Host-Only Network Topology & Packet Lab",
      category: "Networking",
      authenticity: "Practiced in a Virtual Lab",
      linkedCaseId: "case-linux-virtualbox-networking",
      objective: "Configure an isolated virtual network between Kali Linux and Metasploitable2 and inspect interfaces, ports, and packets.",
      problemStatement: "Security labs require strict network isolation so vulnerable targets cannot be reached externally or leak traffic.",
      technologies: ["Oracle VirtualBox", "Kali Linux (`ip addr`)", "Nmap", "Wireshark", "tcpdump"],
      environment: "HP OMEN 16 (16 GB RAM) running VirtualBox Host-Only subnet.",
      methodology: "Configure host-only adapter, compare `lo` (`127.0.0.1`) vs `eth0`, run authorised Nmap discovery, and inspect traffic in Wireshark/tcpdump.",
      implementation: "Configured VM networking and practised discovery and capture commands.",
      evidence: "Topology diagram included; sanitised PCAP/screenshots marked 'Evidence pending'.",
      results: "Verified isolated connectivity between analyst and target VMs within a 16 GB RAM budget.",
      challenges: "Understanding why multiple IPv4/IPv6 bindings appear across `lo` and `eth0`.",
      lessonsLearned: "Host-Only networking provides a safe sandbox for studying network protocols and scanners.",
      futureImprovements: "Add Suricata and Zeek monitoring to the isolated virtual switch."
    },
    {
      id: "lib-linux-shell-admin",
      title: "Linux CLI Administration, UFW Firewall & Shell Alias Troubleshooting",
      category: "Linux",
      authenticity: "Practiced in a Virtual Lab",
      linkedCaseId: "case-linux-virtualbox-networking",
      objective: "Practise Linux terminal navigation, process/service checks, UFW firewall commands, keyboard mapping (`setxkbmap`), and shell RC debugging.",
      problemStatement: "Diagnose why adding `alias uskey='setxkbmap us'` to `~/.bashrc` and sourcing it produced `shopt: command not found` and `complete: command not found`.",
      technologies: ["Kali Linux", "Bash / Zsh", "UFW", "setxkbmap", "NetworkManager"],
      environment: "Kali Linux VM terminal.",
      methodology: "Inspect shell environment, test aliases for keyboard layout (`uskey`), `NetworkManager` restart, and alias listing (`alias`), and identify shell interpreter differences.",
      implementation: "Identified that Bash-specific builtins (`shopt`, `complete`) fail when `~/.bashrc` is sourced by a non-Bash shell (`zsh` or POSIX `sh`).",
      evidence: "Exact error messages and root-cause explanation documented in Case Study.",
      results: "Resolved shell configuration confusion and documented portable alias practices.",
      challenges: "Recognising that Kali Linux defaults to `zsh` while many tutorials assume `bash`.",
      lessonsLearned: "Always check `echo $SHELL` before modifying shell startup files.",
      futureImprovements: "Create a version-controlled dotfiles repository with portable aliases and Bash audit scripts."
    },
    {
      id: "lib-ai-search-logic",
      title: "AI Search Algorithms (BFS, DFS, A*) & Logical Inference Study",
      category: "Artificial Intelligence",
      authenticity: "Studied Academically",
      linkedCaseId: null,
      objective: "Study state-space search algorithms, knowledge representation, propositional/predicate logic, and ML fundamentals with security applications.",
      problemStatement: "Connect theoretical Computer Engineering AI coursework to practical pathfinding, rule-based detection, and anomaly classification.",
      technologies: ["Python 3", "BFS / DFS / A* Algorithms", "Propositional & Predicate Logic", "ML Concepts"],
      environment: "Academic coursework & local Python 3 educational environment.",
      methodology: "Trace search trees, compare uninformed (BFS/DFS) vs informed (A*) search, and write an educational Python graph traversal demo.",
      implementation: "Documented 24 AI/ML concepts and built an educational Python BFS shortest-path demonstration.",
      evidence: "Python BFS code and SVG search diagram included in the AI & ML section.",
      results: "Demonstrated how state-space search finds shortest paths across connected nodes.",
      challenges: "Ensuring heuristic functions `h(n)` in A* remain admissible so optimal paths are guaranteed.",
      lessonsLearned: "Classical AI (search and logic) and modern ML (classification and clustering) both play distinct roles in cybersecurity.",
      futureImprovements: "Build an educational scikit-learn Decision Tree classifier on a public benchmark dataset."
    },
    {
      id: "lib-win11-code56",
      title: "Windows 11 Network Adapter Code 56 & DISM 0x800f0915 Diagnostic Case Study",
      category: "Windows Troubleshooting",
      authenticity: "Completed a Project (Diagnostic Case Study — Final Resolution Unverified)",
      linkedCaseId: "case-windows11-network-driver",
      objective: "Investigate multi-adapter network failure (Intel Wi-Fi 6E AX211, Realtek GbE `rtcx21x64.inf`, USB RNDIS) on Windows 11.",
      problemStatement: "Following an Intel Wi-Fi driver 24.70 installation error, Wi-Fi and USB tethering stopped working and adapters reported Code 56 (`CM_PROB_NEED_CLASS_CONFIG`).",
      technologies: ["Windows 11 Device Manager", "DISM", "pnputil", "netcfg / netsh", "Windows Services (`NlaSvc`, `DeviceInstall`, `NetSetupSvc`)"],
      environment: "HP OMEN 16 Host Laptop (Windows 11; historical build note `26H2 Build 26300.9457`).",
      methodology: "Verify core services, inspect Device Manager error codes and `.inf` mappings, run `netcfg -d`/Winsock resets, enumerate drivers via `pnputil`, and check component store health via `DISM`.",
      implementation: "Documented confirmed facts vs. unverified hypotheses and safe offline recovery steps.",
      evidence: "Exact error codes (`Code 56`, `CM_PROB_NEED_CLASS_CONFIG`, `0x800f0915`, `rtcx21x64.inf`, `netwtw08`) recorded from troubleshooting notes.",
      results: "Final resolution not verified in the available notes; case study preserves an honest, reproducible diagnostic record.",
      challenges: "Online `DISM /RestoreHealth` failed with `0x800f0915` because all network adapters (including USB RNDIS tethering) were blocked by Code 56.",
      lessonsLearned: "Simultaneous Code 56 across multiple network adapters points to the Windows network class configuration layer rather than isolated hardware failure.",
      futureImprovements: "Document offline WIM source repair verification if the issue is re-tested."
    },
    {
      id: "lib-academic-foundation",
      title: "Computer Engineering Academic Technical Knowledge Base (13 Subjects)",
      category: "Academic Technical Projects",
      authenticity: "Studied Academically",
      linkedCaseId: null,
      objective: "Synthesise core B.E. Computer Engineering subjects (CNS, AI, Big Data, Android, Compiler Design, GSM/GPRS, Mobile IP, Wi-Fi/Bluetooth, WAP, Networking, DBMS) into security-relevant technical documentation.",
      problemStatement: "Bridge university engineering theory with practical IT, networking, and SOC analyst concepts.",
      technologies: ["CNS", "AI/ML", "Big Data (HDFS/MapReduce)", "Android Architecture", "Compiler Design (AST)", "GSM/GPRS/Mobile IP/802.11"],
      environment: "Pacific School of Engineering (GTU 7th-Semester Context).",
      methodology: "Extract core working principles from each subject and map them to real-world security and system engineering use cases.",
      implementation: "Built the searchable 13-Subject Academic Technical Foundation knowledge base in this portfolio.",
      evidence: "Comprehensive subject cards integrated in Section 09.",
      results: "Provides recruiters with a clear view of academic depth alongside hands-on lab practice.",
      challenges: "Presenting academic subjects accurately as theoretical foundations rather than claiming commercial work experience.",
      lessonsLearned: "Core computer engineering subjects (compilers, OS, networks, databases, wireless protocols) directly explain how modern security tools work.",
      futureImprovements: "Link future semester lab reports and code repositories as they are finalised."
    }
  ];

  // 12. "CURRENTLY EXPLORING" LIVE TRACKER
  D.currentlyExploring = [
    {
      topic: "SOC Alert Triage & Log Analysis Foundations",
      status: "Currently Exploring",
      detail: "Studying Windows Event IDs (4624, 4625, 4688), Linux `/var/log/auth.log`, and preparing for Step 1 of the SOC Build Order (Wazuh + Sysmon home lab within a 16 GB RAM budget)."
    },
    {
      topic: "Python Security Scripting & MySQL Integration",
      status: "Currently Learning",
      detail: "Expanding from core Python syntax, OOP, and `mysql.connector` into log parsing, SHA-256/SHA-512 file integrity checking, and regex-based IOC extraction."
    },
    {
      topic: "Web Application Security (DVWA) & Nmap/Metasploit Lab Validation",
      status: "Practicing in Lab",
      detail: "Documenting step-by-step request/response observations in DVWA (SQLi & XSS) and capturing sanitised packet/terminal evidence in the isolated VirtualBox Host-Only lab."
    },
    {
      topic: "Cryptography (CNS) & AI/ML Academic Synthesis",
      status: "Studied Academically",
      detail: "Connecting B.E. Computer Engineering coursework in AES/RSA/SHA-512/Digital Signatures and AI search/classification algorithms to practical network and endpoint security."
    }
  ];
})();
