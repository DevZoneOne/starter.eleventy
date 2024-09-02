const draftPermaLink = (data, prodmode) => {
  // Always skip during non-watch/serve builds
  if (data.draft && prodmode) {
    return false;
  }

  return data.permalink;
};

const draftExcludeFromCollections = (data, prodmode) => {
  // Always exclude from non-watch/serve builds
  if (data.draft && prodmode) {
    return true;
  }

  return data.eleventyExcludeFromCollections;
};

export default {
  draftExcludeFromCollections,
  draftPermaLink,
};
