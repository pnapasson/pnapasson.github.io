// Decoupled Resume and Portfolio Data
export const resumeData = {
  personalInfo: {
    name: "Napasson Pisuttharachai",
    title: "Senior Project Manager",
    titles: ["Senior Project Manager", "Computer Engineer", "Mar-tech Specialist", "Data Analytics Enthusiast"],
    email: "napasson.pis@gmail.com",
    phone: "(+66) 61-542-2423",
    address: "262 Petchkasem 63/2 Bangkae, Laksong, Bangkok 10160",
    linkedin: "https://www.linkedin.com/in/napasson-pisuttharachai/",
    github: "https://github.com/pnapasson",
    avatar: "./Dog.avif",
    summary: "Bringing over 4 years of expertise to Project Management, with a specialized focus on the synergy between Marketing, Data Analytics, and Digital Development. Proven experience includes navigating complex website and app development cycles while multitasking across various workstreams. By integrating technical precision with strong emotional intelligence, this approach ensures a seamless bridge between client expectations and team execution delivering successful outcomes that value both project goals and people."
  },
  web3Forms: {
    accessKey: "YOUR_WEB3FORMS_ACCESS_KEY" // Dual-mode placeholder key
  },
  education: [
    {
      period: "Aug 2017 - Aug 2021",
      degree: "Bachelor of Engineering (Computer Engineering)",
      institution: "Thammasat University"
    }
  ],
  experience: [
    {
      company: "Predictive Co., Ltd. - Bangkok, TH",
      role: "Senior Project Manager",
      period: "October 2024 - Present",
      bullets: [
        "Managed end-to-end Mar-tech and website development projects, ensuring timely delivery, scope alignment, and collaboration between technical and non-technical stakeholders.",
        "Acted as the key point of contact for both clients and internal teams, facilitating clear communication, managing expectations, and resolving issues throughout the project lifecycle.",
        "Coordinated cross-functional teams across analytics, development, and marketing to deliver integrated solutions using tools such as GA360, BigQuery, GCP, and Appsflyer.",
        "Onboarded new team members and provided guidance on project workflows, tools, and best practices to support consistent execution.",
        "Supported process improvement and ensured project quality through documentation, milestone tracking, and post-launch evaluations."
      ]
    },
    {
      company: "Predictive Co., Ltd. - Bangkok, TH",
      role: "Advance Project Manager",
      period: "April 2023 - September 2024",
      bullets: [
        "Managed full project lifecycles across website, mobile app, and data analytics (GA4, GTM, BigQuery, GCP).",
        "Led cross-functional teams and served as the main point of contact for clients and internal stakeholders.",
        "Designed and implemented QA processes; proactively mitigated risks and resolved delivery issues.",
        "Monitored KPIs, timelines, and budgets, ensuring alignment with business objectives.",
        "Delivered measurable outcomes for marketing and analytics projects across multiple industries."
      ]
    },
    {
      company: "Predictive Co., Ltd. - Bangkok, TH",
      role: "Junior Project Manager",
      period: "July 2022 - March 2023",
      bullets: [
        "Supported senior managers in planning and documenting project scopes, timelines, and resource requirements.",
        "Coordinated day-to-day task execution and tracked progress using internal tools.",
        "Facilitated internal team communication and prepared status reports for internal and client meetings.",
        "Maintained detailed project documentation, including meeting notes and change logs.",
        "Gained hands-on exposure to tools like Google Analytics, GTM, and project management platforms."
      ]
    },
    {
      company: "EdVISORY Co., Ltd. - Bangkok, TH",
      role: "Junior Project Manager",
      period: "August 2021 - June 2022",
      bullets: [
        "Collaborate with stakeholders to gather and understand project requirements and Ensure that requirements are clear, complete, and feasible.",
        "Work with the development team to define the scope of work with assist in effort estimation for tasks and features.",
        "Implement and oversee version control systems (e.g., Git) and manage configuration changes and releases.",
        "Plan and coordinate software deployment activities with ensure a smooth transition from development to production.",
        "Maintain comprehensive project documentation, including technical specifications and user documentation."
      ]
    }
  ],
  projects: [
    {
      id: "tourism-authority-thailand",
      title: "Tourism Authority of Thailand",
      subtitle: "PATA Gold Awards 2025 Winner",
      category: "martech",
      company: "Predictive Co., Ltd.",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
      description: "Served as the Project Manager for this highly complex, award-winning digital ecosystem and tracking suite. Coordinated cross-functional teams of developers, analytics specialists, and marketers to build a unified system showcasing Thai tourism and capturing deep engagement metrics.",
      tech: ["GA360", "BigQuery", "GCP", "Mar-tech Integration", "Web Analytics"],
      checklist: [
        "Coordinated stakeholder requirements between TAT representatives and implementation teams.",
        "Engineered end-to-end data pipeline structure sending web data into BigQuery.",
        "Spearheaded scope management, ensuring high-quality releases matching PATA award standards.",
        "Managed day-to-day sprints, resolving blockages across dev and analytics tracks."
      ]
    },
    {
      id: "nha-thailand",
      title: "NHA Thailand Web App & Line OA",
      subtitle: "National Housing Authority Portal",
      category: "development",
      company: "EdVISORY Co., Ltd.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
      description: "Managed requirements gathering, Git workflows, and deployment coordination for a large-scale housing information portal integrated directly into a Line Official Account. The system handles secure user registrations, information browsing, and real-time support notifications.",
      tech: ["Line API", "Web Application", "Git Version Control", "JIRA", "Requirements Engineering"],
      checklist: [
        "Collaborated with housing authority stakeholders to detail product specs.",
        "Maintained repository version control using Git, organizing branch and release protocols.",
        "Assisted development team with technical estimates and workflow management in JIRA.",
        "Coordinated deployment and release across staging and production environments."
      ]
    }
  ],
  skills: [
    { name: "Google Analytics (GA4 / GA360)", level: 95, category: "analytics", badge: "Certified" },
    { name: "Google Tag Manager (GTM)", level: 90, category: "analytics", badge: "Expert" },
    { name: "BigQuery & Google Cloud Platform (GCP)", level: 80, category: "analytics", badge: "Advanced" },
    { name: "JIRA Atlassian Tools", level: 95, category: "pm", badge: "Certified" },
    { name: "Git Version Control", level: 85, category: "dev", badge: "Advanced" },
    { name: "VWO (Visual Website Optimizer)", level: 75, category: "martech", badge: "Intermediate" },
    { name: "Appsflyer Mobile Attrib.", level: 75, category: "martech", badge: "Intermediate" },
    { name: "Go (Golang)", level: 70, category: "dev", badge: "Proficient" },
    { name: "C / HTML", level: 80, category: "dev", badge: "Proficient" },
    { name: "Blender (3D Software)", level: 65, category: "other", badge: "Enthusiast" }
  ],
  languages: [
    { name: "English (TOEIC: 840)", level: 80, label: "Limited Working Proficiency" },
    { name: "Thai", level: 100, label: "Native / Bilingual" }
  ]
};
