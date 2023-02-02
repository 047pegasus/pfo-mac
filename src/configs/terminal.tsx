import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi! This is Tanishq Agarwal, now a Computer Science undergraduate
              student at Jaypee University of Engineering & Technology, Guna.
              Previously, I received my senior secondary degree at Tender Hearts
              School, Lucknow.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Go Programming / Dev-Ops / Cloud Networking"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm applying for the CCNA certification this year in September,2k23."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:047pegasus@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                047pegasus@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/047pegasus"
                target="_blank"
                rel="noreferrer"
              >
                @047pegasus
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/tanishq-agarwal047"
                target="_blank"
                rel="noreferrer"
              >
                tanishq-agarwal047
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://047pegasus.pro"
                target="_blank"
                rel="noreferrer"
              >
                https://047pegasus.pro
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
