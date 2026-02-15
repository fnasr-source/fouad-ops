window.dashData = {
  finances: [
    { id: 1, date: "2026-02-14", time: "16:59", type: "Exchange", amount: "300.00 EUR", received: "16,600.00 EGP", note: "Banque Misr #1 (Rate: 55.4486)" },
    { id: 2, date: "2026-02-14", time: "17:14", type: "Exchange", amount: "200.00 EUR", received: "11,050.00 EGP", note: "Banque Misr #2 (Rate: 55.4486)" }
  ],
  summary: {
    totalEur: "500.00 EUR",
    totalEgp: "27,650.00 EGP"
  },
  projects: [
    { 
      id: "mind-wealth",
      name: "Mind-Wealth Diagnostic", 
      status: "Concept Phase", 
      progress: 10, 
      nextStep: "Review meeting transcript for methodology mapping",
      description: "Interactive 'Check Engine Light' for finances & mind. Users answer questions about financial situation & emotional state to get a 'Blockage Report'.",
      discussion: [
        "Concept: 3-minute interactive assessment.",
        "Output: Personalized 'Blockage Report' (e.g., 'Stuck at Level 3 due to Mental Block X').",
        "Monetization: Free Score + 1 Tip; Paid 'Reprogramming Audio' to fix specific blocks.",
        "Goal: Prove methodology works before asking for money."
      ]
    },
    { 
      id: "slim-game",
      name: "Slim Game App", 
      status: "Asset Review", 
      progress: 15, 
      nextStep: "Analyze 600+ videos & JSON map",
      description: "The Pocket Coach (AI + Gamification). leveraging 600+ transcribed videos.",
      discussion: [
        "Concept: Don't just build a video library (Netflix). Build a game.",
        "Asset Play: Feed 600+ videos into secure AI wrapper.",
        "User Exp: Chat ('I'm craving sugar' -> get exact video clip).",
        "Gamification: 'Daily Quests' (Watch 1 clip + Do 1 task = XP/Badges).",
        "Why: People pay for accountability and answers, not just content."
      ]
    }
  ],
  tasks: [
    { id: 1, title: "Verify Admin Access via Service Account", status: "completed", date: "2026-02-15" },
    { id: 2, title: "Clone 'kareem-gamal' Repo", status: "completed", date: "2026-02-15" },
    { id: 3, title: "Create Public Funnel (Quiz Page)", status: "pending", priority: "high" },
    { id: 4, title: "Create Public Funnel (Results Page)", status: "pending", priority: "high" },
    { id: 5, title: "Integrate Stripe/Paymob", status: "pending", priority: "medium" }
  ],
  systemHealth: [
    { service: "Admin Access", status: "Healthy", message: "Verified via Service Account" },
    { service: "GitHub Sync", status: "Active", message: "Repo cloned: kareem-gamal" },
    { service: "Firebase Auth", status: "Healthy", message: "2 Super Admins Configured" }
  ]
};