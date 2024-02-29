import { ISkillItem } from "./interfaces";
import CPP from "../assets/icons/c++.png";
import CSharp from "../assets/icons/c-sharp.png";
import Js from "../assets/icons/js.png";
import Ts from "../assets/icons/TypeScript.png";
import HTML from "../assets/icons/html-5.png";
import SASS from "../assets/icons/sass.png";
import React from "../assets/icons/react.png";
import Redux from "../assets/icons/redux.png";
import Postgres from "../assets/icons/postgreSQL.png";
import Mongo from "../assets/icons/mongoDB.png";
import Prisma from "../assets/icons/prisma-orm.png";
import NodeJS from "../assets/icons/node.png";

export const skillsList: ISkillItem[] = [
  { name: "React", icon: React, proficiency: 90 },
  { name: "Redux", icon: Redux, proficiency: 80 },
  { name: "JavaScript", icon: Js, proficiency: 78 },
  { name: "TypeScript", icon: Ts, proficiency: 90 },
  { name: "HTML", icon: HTML, proficiency: 95 },
  { name: "SASS", icon: SASS, proficiency: 90 },
  { name: "Node.js", icon: NodeJS, proficiency: 70 },
  { name: "PostgreSQL", icon: Postgres, proficiency: 75 },
  { name: "mongoDB", icon: Mongo, proficiency: 87 },
  { name: "Prisma", icon: Prisma, proficiency: 85 },
  { name: "C#", icon: CSharp, proficiency: 60 },
  { name: "C++", icon: CPP, proficiency: 90 },
];
