import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm Tanishq Agarwal a.k.a. 047pegasus..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "xeromail",
        title: "XeroMail",
        file: "https://raw.githubusercontent.com/047pegasus/GalacticHacks/master/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "A CLI Tool written in Go to verfiy email address...",
        link: "https://github.com/047pegasus/GalacticHacks"
      },
      {
        id: "webattendance",
        title: "Attendance System",
        file: "https://raw.githubusercontent.com/047pegasus/AttendanceManagementSystem/master/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "Web Attendance App build on Firebase and Firestore...",
        link: "https://github.com/047pegasus/AttendanceManagementSystem"
      },
      {
        id: "tedx",
        title: "TEDx-JUET Website",
        file: "https://raw.githubusercontent.com/047pegasus/TEDXJUET/master/README.md",
        icon: "i-fa-brands:vuejs",
        excerpt: "TEDx JUET 2K23 Official website development repo...",
        link: "https://oh-vue-icons.js.org"
      }
    ]
  }
];

export default bear;
