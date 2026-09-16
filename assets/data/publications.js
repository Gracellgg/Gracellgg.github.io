/**
 * Publication list for the "Selected Publications" section on index.html.
 *
 * To add a new paper, add a new object to the top of the PUBLICATIONS array
 * (the list renders in array order, newest first by convention).
 *
 * The page shows two tabs, "Highlights" and "Full":
 *   - "Highlights" shows only papers with `highlight: true`.
 *   - "Full" shows every paper (highlighted or not). Highlighted papers get
 *     a pink card background and a star badge on the thumbnail so they
 *     still stand out inside the full list.
 *
 * Fields:
 *   title     (required) Paper title. Plain text or simple inline HTML.
 *   authors   (required) Author list as HTML, e.g. "<b>Gelei Xu</b>, Jane Doe".
 *             Wrap your own name (or any name) in <b>...</b> to bold it.
 *   venue     (required) Venue/journal name, shown in bold under the authors.
 *   image     (required) Path to the thumbnail image, relative to index.html.
 *   pdf       (optional) Path or URL to the PDF. Used for both the thumbnail
 *             link and the title link. Leave unset (or null) for a paper
 *             that doesn't have a PDF up yet -- the title still renders,
 *             just without a link.
 *   links     (optional) Extra links shown next to the venue, e.g. a code
 *             repo or a paper-list page. Array of:
 *               { label: "Paper List", href: "...", icon: "fa-brands fa-github", external: true, showStars: true }
 *             `icon` is any Font Awesome class string. `external: true` opens
 *             the link in a new tab (target="_blank"). `showStars: true`
 *             (only meaningful when `href` is a https://github.com/owner/repo
 *             URL) adds a live GitHub star-count badge after the link, via
 *             shields.io -- no API key or code needed, it just works.
 *   notes     (optional) A short extra line rendered under the venue/links,
 *             e.g. "Best Paper Award". Plain text or simple inline HTML.
 *   highlight (optional, default false) Set to true to feature this paper
 *             in the "Highlights" tab (and flag it with a star + pink
 *             background in the "Full" tab).
 *   visible   (optional, default true) Set to false to hide a paper
 *             entirely, from both tabs, without deleting it.
 */

const PUBLICATIONS = [
  {
    title: "Assessing the Use of Automatic Speech Recognition and Large Language Models for Individuals with Language Impairments",
    authors: "<b>Gelei Xu*</b>, Haoxinran Yu*, Lixuan Wei, Yuxuan Liu, Dancheng Liu, Chenhui Xu, Jiajie Li Ahmed Abbasi, Jinjun Xiong, Xiufan Yu, Zhi Zheng, Yiyu Shi, and Ruiyang Qin",
    venue: "Nature Communications (IF=18.1)",
    image: "assets/images/thumbnails/xu_nc26.png",
    pdf: "assets/files/papers/xu_nc26.pdf",
    highlight: true,
  },
  {
    title: "Group-Conditioned Representation Modulation for Fair Skin Disease Diagnosis",
    authors: "<b>Gelei Xu*</b>, Haoran Fan* and Yiyu Shi",
    venue: "MICCAI 2026 (early accept, 9%)",
    image: "assets/images/thumbnails/xu_miccai26.png",
    pdf: null,
    highlight: true,
  },
  {
    title: "Beyond Visual Forensics: Auditing Multimodal Robustness for Synthetic Medical Image Detection",
    authors: "Ching-Hao Chiu, Hao-Wei Chung, <b>Gelei Xu</b>, Xueyang Li, Pin-Yu Chen, John Kheir, Meysam Ghaffari, Carlos Morato, Ahmed Abbasi, and Yiyu Shi",
    venue: "MICCAI 2026",
    image: "assets/images/thumbnails/chiu_miccai26.png",
    pdf: "https://arxiv.org/pdf/2606.25375",
  },
  {
    title: "NaturalEdit: Code Modification through Direct Interaction with Adaptive Natural Language Representation",
    authors: "Ningzhi Tang, David Meininger, <b>Gelei Xu</b>, Yiyu Shi, Yu Huang, Collin McMillan, and Toby Jia-Jun Li",
    venue: "UIST 2026 (acceptance rate 20.1%)",
    image: "assets/images/thumbnails/tang_uist26.png",
    pdf: "https://arxiv.org/pdf/2510.04494",
  },
  {
    title: "How Coding Agents Fail Their Users: A Large-Scale Analysis of Developer-Agent Misalignment in 20,574 Real-World Sessions",
    authors: "Ningzhi Tang, Chaoran Chen, <b>Gelei Xu</b>, Yiyu Shi, Yu Huang, Collin McMillan, Tao Dong, and Toby Jia-Jun Li",
    venue: "EMNLP 2026 (acceptance rate 15.4%)",
    image: "assets/images/thumbnails/tang_emnlp26.png",
    pdf: "https://arxiv.org/pdf/2605.29442",
  },
  {
    title: "Programming by Chat: A Large-Scale Behavioral Analysis of 11,579 Real-World AI-Assisted IDE Sessions",
    authors: "Ningzhi Tang*, Chaoran Chen*, Zihan Fang, <b>Gelei Xu</b>, Maria Dhakal, Yiyu Shi, Collin McMillan, Yu Huang, and Toby Jia-Jun Li",
    venue: "ASE 2026 (early accept, 8.8%)",
    image: "assets/images/thumbnails/tang_ase26.png",
    pdf: "https://arxiv.org/pdf/2604.00436",
  },
  {
    title: "A Comprehensive Survey of AI Agents in Healthcare",
    authors: "<b>Gelei Xu*</b>, Xueyang Li*, Yixiong Chen*, Yuying Duan*, Shuqing Wu*, Alexander Yu*, Ching-Hao Chiu*, Juntong Ni*, Ningzhi Tang, Toby Jia-Jun Li, Alan Yuille, Wei Jin, and Yiyu Shi",
    venue: "Journal of Biomedical Informatics (IF=5.9)",
    image: "assets/images/thumbnails/xu_survey25.png",
    pdf: "assets/files/papers/xu_jbi26.pdf",
    links: [
      { label: "Paper List", href: "https://github.com/AgenticHealthAI/Awesome-AI-Agents-for-Healthcare", icon: "fa-brands fa-github", external: true, showStars: true },
    ],
    highlight: true,
  },
  {
    title: "Rethinking Fairness in Medical Imaging: Maximizing Group-Specific Performance with Application to Skin Disease Diagnosis",
    authors: "<b>Gelei Xu</b>, Yuying Duan, Jun Xia, Ching-Hao Chiu, Michael Lemmon, Wei Jin, and Yiyu Shi",
    venue: "Medical Image Analysis (IF=14)",
    image: "assets/images/thumbnails/xu_media.jpg",
    pdf: "assets/files/papers/xu_media26.pdf",
    highlight: true,
  },
  {
    title: "Tiny-Align: Bridging Automatic Speech Recognition and Large Language Model on Edge",
    authors: "Ruiyang Qin, Dancheng Liu, <b>Gelei Xu</b>, Amir Nassereldine, Zheyu Yan, Chenhui Xu, Yuting Hu, Shaocong Wang, Xiaobo Sharon Hu, Jinjun Xiong, and Yiyu Shi",
    venue: "ICCAD 2025 (acceptance rate 24.7%)",
    image: "assets/images/thumbnails/qin_iccad25.png",
    pdf: "https://arxiv.org/pdf/2411.13766",
  },
  {
    title: "Incorporating Rather Than Eliminating: Achieving Fairness for Skin Disease Diagnosis Through Group-Specific Experts",
    authors: "<b>Gelei Xu</b>, Yuying Duan, Zheyuan Liu, Xueyang Li, Meng Jiang, Michael Lemmon, Wei jin, and Yiyu Shi",
    venue: "MICCAI 2025 (early accept, 9%)",
    image: "assets/images/thumbnails/xu_miccai25.jpg",
    pdf: "https://arxiv.org/pdf/2506.17787",
    highlight: true,
  },
  {
    title: "The Cost of Local and Global Fairness in Federated Learning",
    authors: "Yuying Duan, <b>Gelei Xu</b>, Yiyu Shi, and Michael Lemmon",
    venue: "AISTATS 2025",
    image: "assets/images/thumbnails/duan_aistats.png",
    pdf: "https://arxiv.org/pdf/2503.22762",
  },
  {
    title: "Enabling Memory-Efficient On-Device Learning via Dataset Condensation",
    authors: "<b>Gelei Xu</b>, Ningzhi Tang, Jun Xia, Ruiyang Qin, Wei Jin, and Yiyu Shi",
    venue: "DATE 2025 (acceptance rate 25%)",
    image: "assets/images/thumbnails/xu_date.png",
    pdf: "https://arxiv.org/pdf/2405.16113",
    highlight: true,
  },
  {
    title: "An Adaptive System for Wearable Devices to Detect Stress Using Physiological Signals",
    authors: "<b>Gelei Xu</b>, Ruiyang Qin, Zhi Zheng, and Yiyu Shi",
    venue: "PhysioCHI 2024",
    image: "assets/images/thumbnails/xu_PhysioChi.png",
    pdf: "https://arxiv.org/pdf/2407.15252",
  },
  {
    title: "Achieving Fairness in Dermatological Disease Diagnosis through Automatic Weight Adjusting Federated Learning and Personalization",
    authors: "<b>Gelei Xu</b>, Yawen Wu, Zhenge Jia, Jingtong Hu, and Yiyu Shi",
    venue: "MICCAI 2025 workshop",
    image: "assets/images/thumbnails/xu_arxiv23.png",
    pdf: "assets/files/papers/xu_arxiv23.pdf",
  },
  {
    title: "Automatic Cortical Cataract Classification Framework Based on AS-OCT Images",
    authors: "<b>Gelei Xu*</b>, Xiaoqing Zhang*, Zunjie Xiao, Risa Higashita, Wan Chen, Jin Yuan, and Jiang Liu",
    venue: "CSA 2022",
    image: "assets/images/thumbnails/xu_csa22.png",
    pdf: "assets/files/papers/xu_csa22.pdf",
  },
  {
    title: "Channel-Wise and Spatial Feature Recalibration Network for Nuclear Cataract Classification",
    authors: "Xiaoqing Zhang, <b>Gelei Xu</b>, Junyong Shen, Zunjie Xiao, Qiuyang Yan, Jin Yuan, Risa Higashita, Jiang Liu",
    venue: "ICME 2022",
    image: "assets/images/thumbnails/zhang_icme22.png",
    pdf: "assets/files/papers/zhang_icme22.pdf",
  },
  {
    title: "CCA-Net: Clinical-awareness Attention Network for Nuclear Cataract Classification in AS-OCT",
    authors: "Xiaoqing Zhang, Zunjie Xiao, Lingxi Hu, <b>Gelei Xu</b>, Risa Higashita, Wan Chen, Jin Yuan, Jiang Liu",
    venue: "KBS 2022",
    image: "assets/images/thumbnails/zhang_kbs22.png",
    pdf: "assets/files/papers/zhang_kbs22.pdf",
  },
];
