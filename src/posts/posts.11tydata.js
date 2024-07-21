module.exports = {
  layout: "post",
  title: "Untitled",
  eleventyComputed: {
    permalink: (data) => `${data.page.fileSlug}/index.html`,
    thumb: (data) => {
      if (data.thumb) {
        if (data.thumb.startsWith("https://")) {
          return data.thumb;
        }
        return data.site.url + `/assets/img/${data.thumb}`;
      } else {
        return false;
      }
    },
  },
};
