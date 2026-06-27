export interface ResumeData {
  id: string;
  name: string;
  avatar: string;
  role?: string;
  contacts: {
    email: string;
    phone: string;
    github: string;
    twitter?: string;
  };
  header: HeaderSection[];
  employment: Employment[];
  education: Education[];
  skills: SkillCategory[];
}

export interface HeaderSection {
  title: string;
  icon: string;
  body: string[];
}

export interface Employment {
  role: string;
  description?: string;
  employer: {
    name: string;
    url: string;
    location: string;
  };
  startDate: string;
  endDate: string;
  sections: Section[];
}

export interface Education {
  course: string;
  metadata: {
    venue?: string;
    location?: string;
    url?: string;
  };
  date: string;
  description?: string[];
  sections?: Section[];
}

export interface SkillCategory {
  title: string;
  items: SectionItem[];
}

export interface Section {
  name: string;
  title: string;
  items: SectionItem[];
}

export interface SectionItem {
  title?: string;
  url?: string;
  body: string;
}
