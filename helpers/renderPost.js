const puppeteer = require("puppeteer");
const setHtml = require("./setHtml");

async function renderPost(data) {
  if (!data.post_subject) data.post_subject = "Chat EEEEEEEEEEEE";

  let html = setHtml(data);

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
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

  await browser.close();
}

module.exports = renderPost;
