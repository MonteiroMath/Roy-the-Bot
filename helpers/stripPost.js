function stripPost(post) {
  //remove html tags
  let strippedPost = post.replace(/(<([^>]+)>)/gi, "");

  //remove quote tags
  strippedPost = strippedPost.replace(/\[quote.*\[\/quote\]/gis, "");
  
  //remove img tags
  strippedPost = strippedPost.replace(/\[\/*img]/gi, "");

  return strippedPost;
}

module.exports = stripPost;
