const puppeteer = require("puppeteer");

async function renderPost(post) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let html = `
  <body>
  <div class="body_wrapper">
  <div class="postlist restrain"> 
  <ol class="posts"> 
  <li class="postbitlegacy postbitim postcontainer old">
  <div id="ssthis" class="postbody">
  <div class="postrow">
  <div class="content" style="padding:30px">
    ${post}
  </div>
  </div>
  </div>
  </li>
  </ol>
  </div>
  </div>
  </body>
`;

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
