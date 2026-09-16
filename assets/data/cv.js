/**
 * Content for cv.html, transcribed from assets/files/CV_Xu.pdf.
 *
 * Keep this in sync with the PDF by hand -- this file is the source for the
 * web version only, the PDF itself is not generated from it.
 *
 * Shapes:
 *   education / experience: { date, title, org, location, detail }
 *   publications.journal / .conference / .workshop:
 *     { code, year, title, authors (HTML), venue, pdf (url or null),
 *       links (optional array of { label, href }) }
 *   honors: { name, year }
 *   teaching: { date, title, org, items (array of plain/HTML strings) }
 *   service.workshopOrganizer: { title, subtitle, location, cochairs, href }
 *   service.reviewing: { journal, conference, workshop } (comma-separated strings)
 *   service.outreach: array of plain/HTML strings
 */

const CV = {
  contacts: [
    { label: "Email", href: "mailto:gxu4@nd.edu", text: "gxu4@nd.edu" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=rJKqlzkAAAAJ", text: "Google Scholar" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gelei-xu-41904b272/", text: "LinkedIn" },
  ],

  profile: {
    keywords: "Trustworthy AI for Healthcare, Medical Image Analysis, AI Agents, Edge AI",
    summary:
      "My research designs population-aware machine learning methods that optimize clinical AI for targeted patient groups across data selection, model adaptation, and system evaluation. I am currently extending this work to continually learning systems and evidence-bound healthcare agents.",
  },

  education: [
    {
      date: "2023–Present",
      title: "Ph.D. Student in Computer Science and Engineering",
      org: "University of Notre Dame",
      location: "Notre Dame, IN, USA",
      detail: "Advisor: Yiyu Shi",
    },
    {
      date: "2019–2023",
      title: "B.E. in Computer Science and Engineering",
      org: "Southern University of Science and Technology",
      location: "Shenzhen, Guangdong, China",
      detail: "Advisor: Jiang Liu",
    },
  ],

  experience: [
    {
      date: "Aug 2026–Present",
      title: "Visiting Graduate Student",
      org: "Weill Cornell Medicine",
      location: "New York, NY, USA",
      detail: "Host: Fei Wang",
    },
    {
      date: "Jun 2026–Aug 2026",
      title: "Machine Learning Intern",
      org: "Boston Children's Hospital & Harvard Medical School",
      location: "Boston, MA, USA",
      detail: "Host: Maimuna Majumder",
    },
  ],

  publications: {
    journal: [
      {
        code: "J.5",
        year: "2026",
        title: "Assessing the Use of Automatic Speech Recognition and Large Language Models for Individuals with Language Impairments",
        authors: "<b>Gelei Xu*</b>, Haoxinran Yu*, Lixuan Wei, Yuxuan Liu, Dancheng Liu, Chenhui Xu, Jiajie Li, Ahmed Abbasi, Jinjun Xiong, Xiufan Yu, Zhi Zheng, Yiyu Shi, and Ruiyang Qin",
        venue: "Nature Communications, 2026 (IF=18.1)",
        pdf: "assets/files/papers/xu_nc26.pdf",
      },
      {
        code: "J.4",
        year: "2026",
        title: "Rethinking Fairness in Medical Imaging: Maximizing Group-Specific Performance with Application to Skin Disease Diagnosis",
        authors: "<b>Gelei Xu</b>, Yuying Duan, Jun Xia, Ching-Hao Chiu, Michael Lemmon, Wei Jin, and Yiyu Shi",
        venue: "Medical Image Analysis, 2026 (IF=14)",
        pdf: "assets/files/papers/xu_media26.pdf",
      },
      {
        code: "J.3",
        year: "2026",
        title: "A Survey of AI Agents in Healthcare",
        authors: "<b>Gelei Xu*</b>, Xueyang Li*, Yixiong Chen*, Yuying Duan*, Shuqing Wu*, Alexander Yu*, Ching-Hao Chiu*, Juntong Ni*, Ningzhi Tang, Toby Jia-Jun Li, Alan Yuille, Wei Jin, and Yiyu Shi",
        venue: "Journal of Biomedical Informatics, 2026 (GitHub 1.2k stars)",
        pdf: "assets/files/papers/xu_jbi26.pdf",
        links: [{ label: "Paper List", href: "https://github.com/AgenticHealthAI/Awesome-AI-Agents-for-Healthcare" }],
      },
      {
        code: "J.2",
        year: "2022",
        title: "Automatic Cortical Cataract Classification Framework Based on AS-OCT Images",
        authors: "<b>Gelei Xu*</b>, Xiaoqing Zhang*, Zunjie Xiao, Risa Higashita, Wan Chen, Jin Yuan, and Jiang Liu",
        venue: "Computer Systems & Applications, 2022",
        pdf: "assets/files/papers/xu_csa22.pdf",
      },
      {
        code: "J.1",
        year: "2022",
        title: "CCA-Net: Clinical-awareness Attention Network for Nuclear Cataract Classification in AS-OCT",
        authors: "Xiaoqing Zhang, Zunjie Xiao, Lingxi Hu, <b>Gelei Xu</b>, Risa Higashita, Wan Chen, Jin Yuan, Jiang Liu",
        venue: "Knowledge-Based Systems, 2022",
        pdf: "assets/files/papers/zhang_kbs22.pdf",
      },
    ],

    conference: [
      {
        code: "C.12",
        year: "2026",
        title: "Group-Conditioned Representation Modulation for Fair Skin Disease Diagnosis",
        authors: "<b>Gelei Xu*</b>, Haoran Fan*, Yiyu Shi",
        venue: "Proceedings of the 2026 Medical Image Computing and Computer Assisted Interventions (MICCAI 2026, early acceptance, acceptance rate 9%)",
        pdf: null,
      },
      {
        code: "C.11",
        year: "2026",
        title: "Beyond Visual Forensics: Auditing Multimodal Robustness for Synthetic Medical Image Detection",
        authors: "Ching-Hao Chiu, Hao-Wei Chung, <b>Gelei Xu</b>, Xueyang Li, Pin-Yu Chen, John Kheir, Meysam Ghaffari, Carlos Morato, Ahmed Abbasi, Yiyu Shi",
        venue: "Proceedings of the 2026 Medical Image Computing and Computer Assisted Interventions (MICCAI 2026)",
        pdf: "https://arxiv.org/pdf/2606.25375",
      },
      {
        code: "C.10",
        year: "2026",
        title: "MORI-Seg: Learning Morphological Geometry for Instance Segmentation without Instance Annotations",
        authors: "Leiyue Zhao, Tianyu Shi, Daniel Reisenbuechler, Xinzi He, Junchao Zhu, Tianyuan Yao, Yuechen Yang, Yanfan Zhu, Junnlin Guo, <b>Gelei Xu</b>, Haichun Yang, Yuankai Huo, Mert R. Sabuncu, Yihe Yang, Ruining Deng",
        venue: "Proceedings of the 2026 Medical Image Computing and Computer Assisted Interventions (MICCAI 2026, early acceptance, acceptance rate 9%)",
        pdf: null,
      },
      {
        code: "C.9",
        year: "2026",
        title: "How Coding Agents Fail Their Users: A Large-Scale Analysis of Developer-Agent Misalignment in 20,574 Real-World Sessions",
        authors: "Ningzhi Tang, Chaoran Chen, <b>Gelei Xu</b>, Yiyu Shi, Yu Huang, Collin McMillan, Tao Dong, Toby Jia-Jun Li",
        venue: "Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (EMNLP 2026)",
        pdf: "https://arxiv.org/pdf/2605.29442",
      },
      {
        code: "C.8",
        year: "2026",
        title: "NaturalEdit: Code Modification through Direct Interaction with Adaptive Natural Language Representation",
        authors: "Ningzhi Tang, David Meininger, <b>Gelei Xu</b>, Yiyu Shi, Yu Huang, Collin McMillan, Toby Jia-Jun Li",
        venue: "Proceedings of the 39th Annual ACM Symposium on User Interface Software and Technology (UIST 2026)",
        pdf: "https://arxiv.org/pdf/2510.04494",
      },
      {
        code: "C.7",
        year: "2026",
        title: "Programming by Chat: A Large-Scale Behavioral Analysis of 11,579 Real-World AI-Assisted IDE Sessions",
        authors: "Ningzhi Tang*, Chaoran Chen*, Zihan Fang, <b>Gelei Xu</b>, Maria Dhakal, Yiyu Shi, Collin McMillan, Yu Huang, Toby Jia-Jun Li",
        venue: "Proceedings of the 2026 41st IEEE/ACM International Conference on Automated Software Engineering (ASE 2026)",
        pdf: "https://arxiv.org/pdf/2604.00436",
      },
      {
        code: "C.6",
        year: "2025",
        title: "Tiny-Align: Bridging Automatic Speech Recognition and Large Language Model on Edge",
        authors: "Ruiyang Qin, Dancheng Liu, <b>Gelei Xu</b>, Amir Nassereldine, Zheyu Yan, Chenhui Xu, Yuting Hu, Shaocong Wang, Xiaobo Sharon Hu, Jinjun Xiong, Yiyu Shi",
        venue: "Proceedings of the 2025 International Conference on Computer-Aided Design (ICCAD 2025, acceptance rate 24.7%)",
        pdf: "https://arxiv.org/pdf/2411.13766",
      },
      {
        code: "C.5",
        year: "2025",
        title: "Incorporating Rather Than Eliminating: Achieving Fairness for Skin Disease Diagnosis Through Group-Specific Experts",
        authors: "<b>Gelei Xu</b>, Yuying Duan, Zheyuan Liu, Xueyang Li, Meng Jiang, Michael Lemmon, Wei Jin, Yiyu Shi",
        venue: "Proceedings of the 2025 Medical Image Computing and Computer Assisted Interventions (MICCAI 2025, early acceptance, acceptance rate 9%)",
        pdf: "https://arxiv.org/pdf/2506.17787",
      },
      {
        code: "C.4",
        year: "2025",
        title: "The Cost of Local and Global Fairness in Federated Learning",
        authors: "Yuying Duan, <b>Gelei Xu</b>, Yiyu Shi, Michael Lemmon",
        venue: "Proceedings of the 2025 International Conference on Artificial Intelligence and Statistics (AISTATS 2025)",
        pdf: "https://arxiv.org/pdf/2503.22762",
      },
      {
        code: "C.3",
        year: "2025",
        title: "Enabling On-Device Learning via Experience Replay with Efficient Dataset Condensation",
        authors: "<b>Gelei Xu</b>, Ningzhi Tang, Jun Xia, Ruiyang Qin, Wei Jin, Yiyu Shi",
        venue: "Proceedings of the 2025 Design, Automation & Test in Europe Conference & Exhibition (DATE 2025, acceptance rate 25%)",
        pdf: "https://arxiv.org/pdf/2405.16113",
      },
      {
        code: "C.2",
        year: "2022",
        title: "A Novel Local-Global Spatial Attention Network for Cortical Cataract Classification in AS-OCT",
        authors: "Zunjie Xiao, Xiaoqing Zhang, Qingyang Sun, Zhuofei Wei, <b>Gelei Xu</b>, Yuan Jin, Risa Higashita, Jiang Liu",
        venue: "Proceedings of the Pattern Recognition and Computer Vision: 5th Chinese Conference (PRCV 2022)",
        pdf: null,
      },
      {
        code: "C.1",
        year: "2022",
        title: "Channel-Wise and Spatial Feature Recalibration Network for Nuclear Cataract Classification",
        authors: "Xiaoqing Zhang, <b>Gelei Xu</b>, Junyong Shen, Zunjie Xiao, Qiuyang Yan, Jin Yuan, Risa Higashita, Jiang Liu",
        venue: "Proceedings of the 2022 IEEE International Conference on Multimedia and Expo (ICME 2022)",
        pdf: "assets/files/papers/zhang_icme22.pdf",
      },
    ],

    workshop: [
      {
        code: "W.2",
        year: "2025",
        title: "Achieving Fairness in Dermatological Disease Diagnosis Through Automatic Weight Adjusting Federated Learning and Personalization",
        authors: "<b>Gelei Xu</b>, Yawen Wu, Zhenge Jia, Jingtong Hu, Yiyu Shi",
        venue: "Proceedings of the MICCAI 2025 Workshop on Fairness of AI in Medical Imaging (FAIMI)",
        pdf: "assets/files/papers/xu_arxiv23.pdf",
      },
      {
        code: "W.1",
        year: "2024",
        title: "An Adaptive System for Wearable Devices to Detect Stress Using Physiological Signals",
        authors: "<b>Gelei Xu</b>, Ruiyang Qin, Zhi Zheng, Yiyu Shi",
        venue: "2024 Workshop on Conference on Human Factors in Computing Systems (CHI)",
        pdf: "https://arxiv.org/pdf/2407.15252",
      },
    ],
  },

  honors: [
    { name: "IDEA Center Edison Innovation Fellowship ($16,500)", year: "2025–2026" },
    { name: "MICCAI 2025 NIH Registration Grant ($700)", year: "2025" },
    { name: "Downes Memorial Fund ($1000)", year: "2025" },
    { name: "Zahm Professional Development Fund ($5250)", year: "2024–2026" },
    { name: "DAC Young Fellow", year: "2024" },
    { name: "Lyman Taylor & W Stuart Travel Award ($1500)", year: "2024" },
    { name: "Excellent Graduate of SUSTech, CSE Department, and Zhicheng College", year: "2023" },
    { name: "Enterprise Intelligence Base Scholarship (¥5000)", year: "2022" },
  ],

  teaching: [
    {
      date: "2025–2026",
      title: "Graduate Associate for Teaching",
      org: "Kaneb Center for Teaching Excellence, University of Notre Dame",
      items: [
        "<b>Instructor</b>, Foundations of Teaching Workshop Series",
        "<b>Instructor</b>, Assessing Prior Knowledge Workshop",
        "<b>Blog Post Author</b>, <a href=\"https://learning.nd.edu/news/how-ai-can-make-more-room-for-human-connection-in-teaching/\" target=\"_blank\">“How AI Can Make More Room for Human Connection in Teaching”</a>",
      ],
    },
    {
      date: "Spring 2025",
      title: "Guest Lecturer, EE 60572 Introduction to Deep Learning",
      org: "Department of Electrical Engineering, University of Notre Dame",
      items: ["Host: Michael Lemmon"],
    },
    {
      date: "Spring 2024",
      title: "Teaching Assistant, CSE 20221 Logic Design",
      org: "Department of Computer Science and Engineering, University of Notre Dame",
      items: [],
    },
    {
      date: "Fall 2023",
      title: "Teaching Assistant, CSE 40535 Computer Vision",
      org: "Department of Computer Science and Engineering, University of Notre Dame",
      items: [],
    },
  ],

  service: {
    workshopOrganizer: [
      {
        title: "EMERGE @ MICCAI 2026",
        subtitle: "Empowering Medical Information Computing and Research through Early-career Guidance and Expertise",
        location: "Strasbourg, France",
        cochairs: "Gelei Xu, Naren Akash, Cosmin I. Bercea",
        href: "https://miccaimsb.github.io/emerge/index.html",
      },
      {
        title: "FAIMI @ MICCAI 2026",
        subtitle: "Fairness of AI in Medical Imaging",
        location: "Strasbourg, France",
        cochairs: "Aasa Feragen, Andrew King, Ben Glocker, Enzo Ferrante, Eike Petersen, Esther Puyol-Antón, Melanie Ganz-Benjaminsen, Veronika Cheplygina, Louisa Fay, Emma Stanley, Gelei Xu, Christopher Thomas Boland, Tareen Dawood",
        href: "https://faimi-workshop.github.io/2026-miccai/",
      },
    ],
    reviewing: {
      journal: "JBHI 2026, CSUR 2026, BMJEBM 2026, TCPS 2025, TNSRE 2025, Scientific Reports 2025, TOIS 2024, TECS 2024, Scientific Reports 2024",
      conference: "AAAI 2026, MICCAI 2026, RO-MAN 2025, MIDL 2025, MICCAI 2025, RO-MAN 2024",
      workshop: "MICCAI EMERGE 2026, MICCAI FAIMI-BRIDGE-EPIMI 2026, MICCAI Educational Challenge 2026, KDD 2026 SciSoc Agents and LLMs, AAAI Fall Symposium Series 2024",
    },
    outreach: [
      "<b>Scientific Events Officer</b>, <a href=\"https://miccai-sb.github.io/organization.html\" target=\"_blank\">MICCAI Student Board</a>, 2026",
      "<b>Graduate Recruitment Ambassador</b>, Notre Dame College of Engineering, NDiSTEM 2025",
      "<b>Invited Panelist</b>, Undergraduate Outreach Program, Notre Dame College of Engineering, 2025",
      "<b>Mentor Judge</b>, NDiSTEM 2025 Research Presentations",
    ],
  },
};
