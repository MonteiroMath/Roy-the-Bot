function setHtml(data) {
  let { username, post_subject, post_text, post_time } = data;

  return `
  <body>
    <div class="body_wrapper" style="max-width:550px">
      <div class="postlist restrain"> 
        <ol class="posts"> 
          <li class="postbitlegacy postbitim postcontainer old">
            <div id="ssthis" class="postbody">
              <div class="postrow" style="padding:10px; border: 3px solid black" >
                <div style="padding:10px; border-bottom: 1px solid black">
                  <p>
                    <b>${post_subject}</b>
                  </p>
                  <p>
                  <b> ${username} </b> em <b> ${post_time} </b>
                  </p>
                </div>
                <div class="content" style="margin-top:20px">
                  ${post_text}
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </body>
`;
}

module.exports = setHtml;
