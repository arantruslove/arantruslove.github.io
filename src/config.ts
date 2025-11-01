export const siteConfig = {
  site: "https://arantruslove.github.io",
  name: "Aran Truslove",
  title: "Software Engineer (Machine Learning)",
  description: "Portfolio website of Aran Truslove",
  accentColor: "#1d4ed8",
  social: {
    email: "arantruslove@outlook.com",
    linkedin: "https://linkedin.com/in/arantruslove",
    github: "https://github.com/arantruslove",
  },
  aboutMe:
    "I am a Cambridge and Imperial ML/Physics graduate with a strong interest in entrepreneurship. After becoming frustrated with the lack of software solutions available for revision planning, I taught myself full-stack web development and built qSchedule. The platform has saved me countless hours and enabled me to achieve a high distinction in my recent masters. I am open to exploring opportunities in B2B SaaS, with a particular interest in using AI to streamline laborious processes.",
  skills: [
    "Python",
    "JavaScript",
    "React",
    "Supabase",
    "Docker",
    "AWS",
    "PyTorch",
  ],
  projects: [
    {
      name: "qSchedule",
      description:
        "Create a personalised revision schedule in minutes rather than days. Adapts to your exam dates, availabilities and subjects/topics.",
      link: "https://qschedule.co/",
      skills: ["React", "Supabase", "LLMs"],
    },
    {
      name: "LoRA fine-tuning of the Qwen2.5-Instruct LLM",
      description:
        "Applied LoRA (Low-Rank Adaptation) to the Qwen2.5-Instruct LLM for forecasting time-series predator-prey systems.",
      link: "https://github.com/arantruslove/M2-Coursework",
      skills: ["PyTorch", "Transformers", "HPC"],
    },
    {
      name: "ML to accelerate laser-driven ion beam diagnostics",
      description:
        "Trained a convolutional neural network on a synthetic dataset. Achieved sub-10 ms inference times with an average prediction error of 8%.",
      link: "https://github.com/arantruslove/ML-Ion-Beam-Diagnostics",
      skills: ["TensorFlow", "Docker", "AWS"],
    },
  ],
  experience: [
    {
      company: "Forensic Risk Alliance",
      title: "Data & Technology Intern",
      dateRange: "Sep 2024",
      bullets: [
        "Used SQL joins and CTEs to determine the calibrated balances of an insolvent crypto firm",
        "Devised a de-duplication algorithm for a list of financial transactions, saving 100+ hours",
      ],
    },
    {
      company: "Imperial College London",
      title: "ML Researcher",
      dateRange: "Jul 2024 - Aug 2024",
      bullets: [
        "Engineered Python-based simulations for laser-driven ion beam interactions",
        "Designed and trained CNNs on large-scale synthetic datasets",
        "Deployed BDSIM, a state-of-the-art beamline simulator on HPC clusters",
      ],
    },
    {
      company: "SystemActive",
      title: "Data Analyst",
      dateRange: "Sep 2023",
      bullets: [
        "Worked with company directors in incorporate Endole BI software",
        "Developed an AI Excel plug-in to rapidly filter thousands of companies",
        "Used Pandas to categorise over 300K UK educational institutions",
      ],
    },
    {
      company: "EMC Corporate Finance",
      title: "M&A Research Analyst",
      dateRange: "Aug 2023",
      bullets: [
        "Performed research on 1000+ companies to identify corporate acquirers",
      ],
    },
    {
      company: "Clarkson Hyde",
      title: "Accounting Intern",
      dateRange: "Aug 2023",
      bullets: [
        "Performed an review of share transfer activities, pinpointing discrepancies ",
        "Conducted reconcilation by matching internal financial records with bank statements",
      ],
    },
  ],
  education: [
    {
      school: "University of Cambridge",
      degree: "MPhil Data Intensive Science",
      dateRange: "2024 - 2025",
      achievements: [
        "Graduated with Distinction (79%)",
        "Dissertation: Federated learning with class imbalances",
        "Specialised in Deep Learning and Bayesian Statistics",
      ],
    },
    {
      school: "Imperial College London",
      degree: "BSc Physics",
      dateRange: "2021 - 2024",
      achievements: [
        "Graduated with First-Class Honours (73%)",
        "Dissertation: ML-guided diagnostics for laser-driven ion beams",
        "Specialized in Data Science and Machine Learning",
      ],
    },
  ],
  volunteering: [
    {
      company: "Imperial College London RAG (Raising and Giving)",
      title: "Treasurer",
      dateRange: "Oct 2022 - Sep 2023",
      bullets: [
        "Played a leading role in a society post-COVID",
        "Helped drive the society from £500 to £9000+ in donations within a year",
        "Organised two club nights, collaborating with 10+ sports societies and the SU",
      ],
    },
    {
      company: "A-Level Maths Tutor",
      title: "Tutor the Nation",
      dateRange: "Oct 2022 - May 2023",
      bullets: [],
    },
  ],
};
