const puppeteer = require("puppeteer");
const setHtml = require("./setHtml");

async function renderPost(data) {
  try {
    if (!data.post_subject) data.post_subject = "Chat EEEEEEEEEEEE";

    let html = setHtml(data);

    const browser = await puppeteer.launch({
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--no-first-run",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-zygote",
        "--disable-gpu",
      ],
      headless: true,
    });
    const page = await browser.newPage();

    await page.setContent(html);

    await page.addStyleTag({
      path: "helpers/render/tibiabr.css",
    });

    const element = await page.$("#ssthis");

    await element.screenshot({
      path: "screenshot.png",
    });
  } finally {
    await browser.close();
  }
}

module.exports = renderPost;
