import { defineStore } from "pinia"
import { ref, h } from "vue"

export const usePortfolioStore = defineStore("portfolio", () => {
  // Stats
  const stats = ref({
    projects: 4,
    experience: 2,
    technologies: 10,
  })

  // Profile
  const profile = ref({
    description:
      "My name is Sokha SIM, a Khmer national born on January 28, 2006, in Pursat, Cambodia. I graduated from Hun Sen Phnom Kravanh High School in 2023 and am currently pursuing an associate degree at Passerelles Numériques Cambodia (PNC) for the 2024–2026 academic years.",
    mission:
      "Through this program, I am developing technical and soft skills to build a career in the IT and digital field. I'm passionate about creating innovative web solutions and continuously learning new technologies.",
  })

  // Education
  const education = ref([
    {
      id: 1,
      degree: "Associate Degree",
      institution: "Passerelles Numériques Cambodia",
      period: "2024 - Present",
      current: true,
    },
    {
      id: 2,
      degree: "High School Graduate",
      institution: "Hun Sen Phnom Kravanh High School",
      period: "2020 - 2023",
      current: false,
    },
  ])

  // Skills
  const hardSkills = ref([
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Vue.js", level: 80 },
    { name: "PHP", level: 75 },
    { name: "Laravel", level: 70 },
    { name: "Node.js", level: 65 },
    { name: "MySQL", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "SASS", level: 75 },
    { name: "TypeScript", level: 60 },
    { name: "Python", level: 65 },
    { name: "Power BI", level: 55 },
  ])

  const tools = ref([
    "Git",
    "GitHub",
    "Figma",
    "AWS",
    "Jira",
    "Postman",
    "Draw.io",
    "Canva",
    "ChatGPT",
    "Gemini",
    "Composer",
  ])

  const softSkills = ref([
    "Teamwork",
    "Problem Solving",
    "Communication",
    "Time Management",
    "Task Management",
    "Self Motivation",
    "Responsibility",
    "Creative",
    "Respect",
  ])

  // Projects
  const projects = ref([
    {
      id: 1,
      title: "Task Management App",
      role: "Developer",
      description:
        "Built a comprehensive task management application where users can create tasks, view them on a calendar, and organize tasks by status (To Do, In Progress, Done). Features both online and offline functionality.",
      duration: "Jan 14 - Jan 29, 2025",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Chart.js", "Firebase"],
      github: "https://github.com/Chhea012/Task-Management-App-B12",
      icon: "task",
      team: "Individual",
    },
    {
      id: 2,
      title: "POS Management System",
      role: "DevOps Manager & Developer",
      description:
        "Developed a full-featured Point of Sale system supporting sales transactions, inventory tracking, customer management, profit and expense tracking, income monitoring, and barcode scanning.",
      duration: "Mar 10 - Apr 2, 2025",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "SASS", "Bootstrap", "jQuery", "Chart.js"],
      github: "https://github.com/poleak-theng065/POS-Management-System-VC1",
      icon: "pos",
      team: "Team Project",
    },
    {
      id: 3,
      title: "PNC Website",
      role: "Developer",
      description:
        "Developed a static website for Passerelles numériques Cambodia (PNC). Used Figma for design and implemented responsive web design with modern CSS techniques.",
      duration: "Oct 21 - Nov 5, 2024",
      technologies: ["HTML", "CSS", "SASS", "Figma"],
      github: "https://github.com/sreyvang19/Website_PNC",
      icon: "website",
      team: "Team Project",
    },
    {
      id: 4,
      title: "Windows System Management",
      role: "Team Leader",
      description:
        "Developed a Windows System Management tool using Python. Built features to retrieve system information including CPU, RAM, disk, and hardware details with Excel export functionality.",
      duration: "Nov 18 - Nov 28, 2024",
      technologies: ["Python", "psutil", "openpyxl"],
      github: "https://github.com/sokhachey/Windows-System-management-G22",
      icon: "system",
      team: "Team Leader",
    },
  ])

  // Contact
  const contactInfo = ref([
    {
      type: "phone",
      label: "Phone",
      values: ["+855 975 911 140", "+855 60 384 920"],
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      icon: () =>
        h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
          }),
        ]),
    },
    {
      type: "email",
      label: "Email",
      values: ["sokha.sim@student.passerellesnumeriques.org"],
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      icon: () =>
        h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
          }),
        ]),
    },
    {
      type: "location",
      label: "Location",
      values: ["Street 371, Phum Tropeang Chhuk (Borey Sorla)", "Sangkat Tek Thla, Khan Sen Sok, Phnom Penh"],
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      icon: () =>
        h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
          }),
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
          }),
        ]),
    },
  ])

  const languages = ref([
    { name: "Khmer", level: "Mother tongue" },
    { name: "English", level: "Speaking, Listening, Reading, Writing" },
  ])

  const interests = ref(["Code", "Search", "Social work", "Read books"])

  return {
    stats,
    profile,
    education,
    hardSkills,
    tools,
    softSkills,
    projects,
    contactInfo,
    languages,
    interests,
  }
})
