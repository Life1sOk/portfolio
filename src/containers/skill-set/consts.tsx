import React from "react";
import { FaCss3Alt, FaReact, FaSass, FaNode } from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiTypescript,
  SiStyledcomponents,
  SiFirebase,
  SiHtml5,
  SiPostgresql,
} from "react-icons/si";

export const tierOne = [
  {
    name: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
];

export const tierTwo = [
  {
    id: 0,
    name: "React.js",
    icon: <FaReact />,
  },
  {
    id: 2,
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    id: 1,
    name: "Sass",
    icon: <FaSass />,
  },
  {
    id: 3,
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: 4,
    name: "Styled c.",
    icon: <SiStyledcomponents />,
  },
];

export const tierThree = [
  {
    id: 1,
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    id: 2,
    name: "Node.js",
    icon: <FaNode />,
  },
  {
    id: 3,
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
];
