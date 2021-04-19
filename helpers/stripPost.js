function stripPost(post) {
  //remove html tags
  let strippedPost = post.replace(/(<([^>]+)>)/gi, "");

  //remove quote tags
  strippedPost = strippedPost.replace(/\[quote.*\[\/quote\]/gis, "");

  return strippedPost;
}

module.exports = stripPost;
