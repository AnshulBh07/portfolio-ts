export type navListItem = { name: string; link: string };

export interface projectItem {
  title: string;
  tags: string[];
  description: string;
  imageLink: string;
  gitLink: string;
  liveLink: string;
}

export interface IContactItem {
  icon: JSX.Element;
  text: string;
  link: string;
  hoverText?: string;
}

export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export interface ISkillItem {
  name: string;
  icon: string;
  proficiency: number;
}

// interface that contains scroll y offsets for all the sections, used in navbar
export interface IScroll {
  home: number;
  about: number;
  projects: number;
  contact: number;
}

export interface INavState {
  sticky: boolean;
  hamClick: "open" | "close" | "";
}

export interface IToast {
  status: "success" | "error" | "warning";
  activity: "open" | "close" | "";
  message: string;
}
