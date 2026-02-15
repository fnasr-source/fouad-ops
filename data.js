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
    { name: "Mind-Wealth Diagnostic", status: "Concept Phase", progress: 10, nextStep: "Review meeting transcript for methodology mapping" },
    { name: "Slim Game App", status: "In Progress", progress: 30, nextStep: "Admin Auth Verification Passed. Next: Public Funnel Build." }
  ],
  systemHealth: [
    { service: "Admin Access", status: "Healthy", message: "Verified via Service Account" },
    { service: "GitHub Sync", status: "Active", message: "Repo cloned: kareem-gamal" },
    { service: "Firebase Auth", status: "Healthy", message: "2 Super Admins Configured" }
  ]
};