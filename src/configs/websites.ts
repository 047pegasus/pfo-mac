import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-blog",
        title: "Website",
        img: "https://avatars.githubusercontent.com/u/68327491?s=400&u=dd89432f6c370932e44f223925a9e3a1feb03c42&v=4",
        link: "https://047pegasus.pro",
        inner: true
      },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/047pegasus"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/tanishq-agarwal047"
      },
      {
        id: "my-facebook",
        title: "Facebook",
        img: "img/sites/facebook.svg",
        link: "https://www.facebook.com/"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:047pegasus@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },
      {
        id: "dribbble",
        title: "Dribbble",
        img: "img/sites/dribbble.svg",
        link: "https://dribbble.com/"
      },
      {
        id: "juet",
        title: "JUET",
        img: "img/sites/arxiv.png",
        link: "https://www.juet.ac.in/"
      },
      {
        id: "gmail",
        title: "Gmail",
        img: "img/sites/gmail.svg",
        link: "https://mail.google.com/"
      },
      {
        id: "leetcode",
        title: "LeetCode",
        img: "img/sites/leetcode.svg",
        link: "https://leetcode.com/"
      },
      {
        id: "go",
        title: "Go Programming",
        img: "https://go.dev/images/go-logo-white.svg",
        link: "https://go.dev/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "hacker-news",
        title: "Hacker News",
        img: "img/sites/hacker.svg",
        link: "https://news.ycombinator.com/"
      },
      {
        id: "astral",
        title: "Astral",
        img: "img/sites/astral.svg",
        link: "https://app.astralapp.com/"
      },
      {
        id: "gitee",
        title: "Gitee",
        // img: "https://gitee.com/static/images/logo-en.svg",
        img: "img/sites/gitee.svg",
        link: "https://gitee.com/"
      },
      {
        id: "aideadline",
        title: "AI Deadlines",
        img: "https://aideadlin.es/static/img/favicon.png",
        link: "https://aideadlin.es/",
        inner: true
      },
      {
        id: "nazo",
        title: "Nazo",
        link: "https://nazo.one-story.cn"
      },
      {
        id: "svgomg",
        title: "SVGOMG",
        img: "https://jakearchibald.github.io/svgomg/imgs/icon.png",
        link: "https://jakearchibald.github.io/svgomg/"
      },
      {
        id: "oh-vue-icons",
        title: "Vue Icons!",
        img: "img/sites/oh-vue-icons.svg",
        link: "https://oh-vue-icons.js.org"
      },
      {
        id: "tiny-png",
        title: "Tiny PNG",
        img: "https://tinypng.com/images/panda-chewing-2x.png",
        link: "https://tinypng.com/"
      }
    ]
  }
};

export default websites;
