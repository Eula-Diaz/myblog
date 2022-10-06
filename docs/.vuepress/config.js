module.exports = {
  title: "木子博客",
  description: "木子同学的博客",
  dest: "./dist",
  head: [
    ["link", { rel: "icon", href: "favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  theme: "reco",
  themeConfig: {
    type: "blog",
    author: "muzi",
    authorAvatar: "/avatar.jpg",
    logo: "/logo.png",
    nav: [{ text: "时间线", link: "/timeline/", icon: "reco-date" }],
    subSidebar: true,
    // 博客配置
    blogConfig: {
      category: {
        location: 1, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认文案 “分类”
      },
      tag: {
        location: 2, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认文案 “标签”
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: "reco-github", link: "https://github.com/Eula-Diaz" },
      ],
    },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      "vuepress-plugin-musicplayer",
      {
        showAllRank: true, // 默认 false
        baseUrl: "https://netease-cloud-music-api-qqlcx5.vercel.app/", // 默认
      },
    ],
  ],
};
