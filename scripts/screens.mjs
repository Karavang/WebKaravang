// Daily project screenshots for MyWorks. Run in CI before the build; a site
// that fails is skipped (MyWorks hides its image when the file is missing).
import { chromium } from "playwright-core";

const out = (s) => `public/screens/${s}.png`;
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

const shots = {
  async leser() {
    await page.goto("https://leser.karavang.com/login");
    await page.locator("#emailInput").fill(process.env.LESER_EMAIL);
    await page.locator("#passInput").fill(process.env.LESER_PASSWORD);
    await page.locator("#loginButton").click();
    await page.waitForURL((u) => !u.pathname.startsWith("/login"));
    // covers arrive after the catalog; best effort, a slow cover shouldn't drop the shot
    await page
      .waitForFunction(() => {
        const imgs = [...document.images];
        return imgs.length > 0 && imgs.every((i) => i.complete);
      }, null, { timeout: 15000 })
      .catch(() => {});
  },
  async shetagri() {
    await page.goto("https://shetagri.karavang.com");
  },
};

for (const [name, open] of Object.entries(shots)) {
  try {
    await open();
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: out(name) });
    console.log(`ok ${name}`);
  } catch (e) {
    console.log(`::warning::${name} screenshot failed: ${e.message.split("\n")[0]}`);
  }
}
await browser.close();
