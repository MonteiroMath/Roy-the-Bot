function stripPost(post) {
  //remove html tags
  let strippedPost = post.replace(/(<([^>]+)>)/gi, "");

  //remove quote tags
  strippedPost = strippedPost.replace(/\[quote.*\[\/quote\]/gis, "");
  
  //remove all bracket tags
  strippedPost = strippedPost.replace(/\[*]/gi, "");

  //remove all & tags
  strippedPost = strippedPost.replace(/&*\;/gi, "");

  return strippedPost;
}

module.exports = stripPost;
