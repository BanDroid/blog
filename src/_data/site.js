module.exports = {
  title: "BanDroid",
  description: "Self-taught Programmer.",
  keywords: ["blog", "article", "personal", "tutorial"],
  url: process.env.RENDER_EXTERNAL_URL || process.env.BASE_URL || "", // your site url without trailing slash
  paginate: 6, // how many posts you want to show for each page
  // uncomment the next line if you want to add disqus to your site
  disqusShortname: process.env.DISQUS_SHORTNAME
};
