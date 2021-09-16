/** @type import('@prismicio/helpers').LinkResolverFunction */
exports.linkResolver = (doc) => {
  switch (doc.type) {
    case "page": {
      if (doc.uid === "uid") {
        return "/";
      } else {
        return `/${doc.uid}`;
      }
    }

    default: {
      return "/";
    }
  }
};
