import githubIcon from "@assets/githubIcon.svg";
import linkedinIcon from "@assets/linkedinIcon.svg";
import gitlabIcon from "@assets/gitlabIcon.svg";
import teamWorkImage from "@assets/team-work.jpg";

interface HeaderSection {
  code: string;
  url: string;
}

export const HEADER_SECTIONS: HeaderSection[] = [
  {
    code: "navbar.sections.background",
    url: "#background",
  },
  {
    code: "navbar.sections.skills",
    url: "#skills",
  },
  {
    code: "navbar.sections.projects",
    url: "#portfolio",
  },
];

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}
export const timelineData: TimelineEvent[] = [
  {
    year: "2024",
    title: "Evento 1",
    subtitle: "Subtítulo del evento 1",
    description: `Descripción del evento 1 Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs turkey tempor. Deserunt bacon cupim, voluptate consequat sed venison nisi aliquip tri-tip. Pancetta cow ipsum incididunt, leberkas picanha lorem chuck. 
Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs turkey tempor. Deserunt bacon cupim, voluptate consequat sed venison nisi aliquip tri-tip. Pancetta cow ipsum incididunt, leberkas picanha lorem chuck. 
Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs turkey tempor. Deserunt bacon cupim, voluptate consequat sed venison nisi aliquip tri-tip. Pancetta cow ipsum incididunt, leberkas picanha lorem chuck. `,
  },
  {
    year: "2023",
    title: "Evento 2",
    subtitle: "Subtítulo del evento 2",
    description: `Descripción del evento 2 Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs turkey tempor. Deserunt bacon cupim, voluptate consequat sed venison nisi aliquip tri-tip. Pancetta cow ipsum incididunt, leberkas picanha lorem chuck. 
Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs turkey tempor. Deserunt bacon cupim, voluptate consequat sed venison nisi aliquip tri-tip. Pancetta cow ipsum incididunt, leberkas picanha lorem chuck.`,
  },
  {
    year: "2022",
    title: "Evento 3",
    subtitle: "Subtítulo del evento 3",
    description: `Descripción del evento 3 Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs turkey tempor. Deserunt bacon cupim, voluptate consequat sed venison nisi aliquip tri-tip. Pancetta cow ipsum incididunt, leberkas picanha lorem chuck. 
Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs turkey tempor.`,
  },
  {
    year: "2019",
    title: "Evento 4",
    subtitle: "Subtítulo del evento 4",
    description: `Descripción del evento 4 Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs turkey tempor. Deserunt bacon cupim, voluptate consequat sed venison nisi aliquip tri-tip. Pancetta cow ipsum incididunt, leberkas picanha lorem chuck. 

    Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs turkey tempor.Deserunt bacon cupim, voluptate consequat sed venison nisi aliquip tri-tip. Pancetta cow ipsum incididunt, leberkas picanha lorem chuck.`,
  },
];

interface PortfolioItem {
  title: string;
  company: string;
  url: string;
}

export interface SkillProps {
  role: string;
  stacks: string[];
  title: string;
  description: string;
  portfolio: PortfolioItem[];
}

export const skillsData: SkillProps[] = [
  {
    role: "frontend",
    stacks: [
      "javascript",
      "typescript",
      "React Classes",
      "React Hooks & React Context",
      "Redux",
    ],
    title: "typescript",
    description:
      "Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribsSalami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs",
    portfolio: [
      {
        title: "landing page",
        company: "personal side project",
        url: "#lading-page",
      },
      {
        title: "Salami incididunt dolore ",
        company: "personal side project",
        url: "#lorem",
      },
    ],
  },
  {
    role: "backend",
    stacks: [
      "javascript",
      "typescript",
      "SQL",
      "PostgreSQL",
      "NodeJs",
      "ExpressJs",
      "Fastify",
      "MongoDB",
    ],
    title: "NodeJs",
    description:
      "Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribsSalami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs",
    portfolio: [
      {
        title: "Lorem ipsum dolor sit.",
        company: "elit aliquip id ",
        url: "#back-project",
      },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  resume: string;
  description: string;
  image: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "lorem",
    title: "My amazing project with very long name",
    resume:
      "Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs turkey tempor.",
    description:
      "Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs turkey tempor. Deserunt bacon cupim, voluptate consequat sed venison nisi aliquip tri-tip...",
    image: teamWorkImage,
    technologies: ["Typescript", "Laravel", "PostgreSQL"],
  },
  {
    id: "lading-page",
    title: "Another great project",
    resume: "Pancetta cow ipsum incididunt, leberkas picanha lorem chuck.",
    description:
      "Pancetta cow ipsum incididunt, leberkas picanha lorem chuck. Deserunt bacon cupim, voluptate consequat sed venison nisi aliquip tri-tip...",
    image: teamWorkImage,
    technologies: ["React", "SASS", "Node.js"],
  },
  {
    id: "back-project",
    title: "This great backend project",
    resume: "Pancetta cow ipsum incididunt, leberkas picanha lorem chuck.",
    description:
      "Pancetta cow ipsum incididunt, leberkas picanha lorem chuck. Deserunt bacon cupim, voluptate consequat sed venison nisi aliquip tri-tip...",
    image: teamWorkImage,
    technologies: ["NodeJS", "Typescript", "MongoDB"],
  },
];

interface SocialNetwork {
  name: string;
  url: string;
  icon: string;
}

export const socialNetworks: SocialNetwork[] = [
  {
    name: "GitHub",
    url: "https://github.com/arianaocando",
    icon: githubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arianaocando/",
    icon: linkedinIcon,
  },
  {
    name: "GitLab",
    url: "https://gitlab.com/arianaocando",
    icon: gitlabIcon,
  },
];
