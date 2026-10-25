// ELMNTS demand test — the only file to edit after deploying.
window.ELMNTS_CONFIG = {
  // 1. Payment link for the AED 100 deposit (Ziina Professional branded link, or a Stripe Payment Link).
  //    Set the link's success/redirect URL to:  https://YOUR-DOMAIN/thanks.html?paid=1
  PAYMENT_URL: "",

  // 2. Lead capture (Supabase project "elmnts-demand-test"). Filled in by setup; leave as is.
  SUPABASE_URL: "https://sijgtrvmkbuhkapwrdxc.supabase.co",
  SUPABASE_KEY: "sb_publishable_6rhcSvKlc7SNzNc1Tm0Esg_FbHBOnhv",

  // 3. Meta Pixel ID from Events Manager (needed for the ad test). Leave empty to disable.
  META_PIXEL_ID: "",

  // 4. Contact shown on the page.
  WHATSAPP: "971500000000",        // digits only, country code first
  EMAIL: "hello@elmnts.co",

  // 5. Offer
  SHIP_WINDOW: "Q2 2027",
  PRICES: { S: 549, L: 599 },
  DEPOSIT: 100
};
