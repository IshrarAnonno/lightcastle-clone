import { 
  Compass, 
  TrendingUp, 
  Globe, 
  Cpu 
} from 'lucide-react';

export const SERVICES = {
  management: {
    id: "management",
    title: "Management & Development Consulting",
    description: "We work with global development partners, corporate foundations, and NGOs to evaluate, design, and manage programs that foster inclusive growth.",
    iconName: "Compass",
    features: [
      { name: "Market Assessment", desc: "Rigorous feasibility studies, demand-supply mapping, and trade lane assessments to guide B2B strategy." },
      { name: "Value Chain Assessment", desc: "Structuring sector-wide assessments to identify market linkages and opportunities for smallholder farmers/SMEs." },
      { name: "Policy Advocacy", desc: "Evidence-based research and alignment workshops to advocate for regulatory improvements in emerging markets." },
      { name: "Technical Assistance", desc: "Monitoring, Evaluation, and Learning (MEL) systems configured to measure impact indicators at scale." },
      { name: "Strategy Implementation", desc: "Providing project management offices (PMO) and implementation support for systemic growth initiatives." }
    ],
    extendedContent: {
      tagline: "Unlocking institutional and developmental impact.",
      longDesc: "For over a decade, we have been at the forefront of development consulting, bridging the gap between global funding objectives and ground-level execution in emerging markets. Our team combines rigorous research methodologies with localized insights to design programs that stand the test of verification.",
      methodology: [
        { title: "Co-Design and Diagnostics", desc: "We deploy deep stakeholder maps and baseline indicators before defining program scopes." },
        { title: "Agile Field Operation Coordination", desc: "Leveraging custom tech trackers, our survey cohorts mobilize to secure reliable primary datasets." },
        { title: "MEL (Monitoring, Evaluation & Learning)", desc: "We establish objective indicators aligned with international frameworks (like UN SDGs and IFC standards)." }
      ],
      impactStats: [
        { label: "Beneficiaries Surveyed", value: "25,000+" },
        { label: "Assessments Conducted", value: "100+" },
        { label: "NGO Partners Aligned", value: "45+" }
      ]
    }
  },
  ecosystem: {
    id: "ecosystem",
    title: "Ecosystem & Investments",
    description: "We catalyze the entrepreneurship landscape by scaling early-stage companies and mobilizing private capital into high-impact enterprises.",
    iconName: "TrendingUp",
    features: [
      { name: "Accelerator & Incubator Management", desc: "Configuring end-to-end acceleration pipelines, cohort selection, and mentor-matching frameworks." },
      { name: "Investment Advisory", desc: "Structuring buy-side and sell-side transactions, due diligence, and capital raise portfolios." },
      { name: "Blended Finance & Catalytic Funding", desc: "Mobilizing philanthropic and commercial capital to configure high-leverage impact funding windows." },
      { name: "Advocacy & Systems Development", desc: "Conducting thought-leadership forums and investment climate assessments to foster market readiness." }
    ],
    extendedContent: {
      tagline: "Empowering startups and mobilizing capital.",
      longDesc: "We build ecosystem infrastructure that connects institutional investors with early and growth-stage ventures. Our specialized investment advisory practice prepares businesses for capital raises and designs structured finance options.",
      methodology: [
        { title: "Due Diligence & Valuation", desc: "We structure institutional grade models and valuation multiples calibrated for emerging market risks." },
        { title: "Accelerator Playbooks", desc: "Custom accelerator structures incorporating training, corporate matching, and pitch prep." },
        { title: "Catalytic Capital Deployment", desc: "Configuring smart finance vehicles like convertible notes or revenue share programs for underfunded sectors." }
      ],
      impactStats: [
        { label: "Startups Accelerated", value: "200+" },
        { label: "Capital Mobilized", value: "USD 150Mn+" },
        { label: "Fund Cohorts Coordinated", value: "12+" }
      ]
    }
  },
  market: {
    id: "market",
    title: "Market Entry Advisory",
    description: "We assist international corporate brands, investors, and trade agencies in establishing and scaling operations in Bangladesh.",
    iconName: "Globe",
    features: [
      { name: "Market Entry Strategy", desc: "Regulatory mapping, tax structuring advice, and risk audits for a seamless launch sequence." },
      { name: "Local Partner Matching", desc: "Connecting foreign entrants with high-trust local distributors, joint venture candidates, and trade bureaus." },
      { name: "Operational Setup Support", desc: "Providing end-to-end project management support during corporate formation and launch phases." }
    ],
    extendedContent: {
      tagline: "Navigating complexity, accelerating localization.",
      longDesc: "We provide global firms with a reliable portal to enter emerging South Asian markets. We help minimize regulatory friction, audit local competition, and connect you with high-trust distribution networks.",
      methodology: [
        { title: "Regulatory and Tax Mapping", desc: "Deep legal analysis and tax optimization recommendations in alignment with national investment laws." },
        { title: "Strategic Partner Matchmaking", desc: "Multi-layered due diligence to verify distributor credit, compliance history, and capability scores." },
        { title: "Project Management Office (PMO)", desc: "Hands-on execution support from workspace licensing to localized talent acquisition." }
      ],
      impactStats: [
        { label: "Global Brands Advised", value: "35+" },
        { label: "Sectors Mapped", value: "15+" },
        { label: "Joint Ventures Structured", value: "8" }
      ]
    }
  },
  digital: {
    id: "digital",
    title: "Digital Transformation",
    description: "We bridge data science and international development to create tools that optimize field operations and institutional intelligence.",
    iconName: "Cpu",
    features: [
      { name: "Technology for Social Good", desc: "Developing digital platforms, field survey apps, and supply chain tracking utilities for development programs." },
      { name: "Advanced Analytics Engines", desc: "Configuring predictive dashboards, macro-trend tracking modules, and predictive economic dashboards." }
    ],
    extendedContent: {
      tagline: "Converting field data into systemic intelligence.",
      longDesc: "We build custom analytics, tracking platforms, and dashboard interfaces that transform unstructured data into corporate intelligence. Our solutions are explicitly designed to withstand field challenges in emerging markets.",
      methodology: [
        { title: "UX-Focused Field App Prototyping", desc: "We design simple, low-bandwidth friendly survey apps for offline field tracking." },
        { title: "Dynamic Web Aggregators", desc: "Converting survey inputs into client-facing, visual dashboards powered by reliable data pipelines." },
        { title: "Security and Compliance Auditing", desc: "Ensuring sensitive program data complies with local policies and global information standards." }
      ],
      impactStats: [
        { label: "Custom Dashboards Built", value: "20+" },
        { label: "Field Records Analyzed", value: "1Mn+" },
        { label: "Operational Sites Synced", value: "500+" }
      ]
    }
  }
};

export const CLIENTS = [
  { name: "ADB", img: "https://lightcastlepartners.com/wp-content/uploads/2021/12/clients_adb-logo1.png" },
  { name: "IFC", img: "https://lightcastlepartners.com/wp-content/uploads/2021/12/clients_ifc-logo1.png" },
  { name: "Swiss Embassy", img: "https://lightcastlepartners.com/wp-content/uploads/2022/01/swiss-embassy-logo.png" },
  { name: "Netherlands Embassy", img: "https://lightcastlepartners.com/wp-content/uploads/2021/12/clients_ekn-logo1.png" },
  { name: "Meta", img: "https://lightcastlepartners.com/wp-content/uploads/2022/05/meta-logo.png" },
  { name: "UN Women", img: "https://lightcastlepartners.com/wp-content/uploads/2021/12/clients_unwomen-logo1.png" },
  { name: "Asia Foundation", img: "https://lightcastlepartners.com/wp-content/uploads/2023/04/logo-asia-found.png" },
  { name: "Gates Foundation", img: "https://lightcastlepartners.com/wp-content/uploads/2021/12/clients_gatesfoundation-logo1-1.png" },
  { name: "H&M Foundation", img: "https://lightcastlepartners.com/wp-content/uploads/2023/04/hm_foundation.png" },
  { name: "ILO", img: "https://lightcastlepartners.com/wp-content/uploads/2022/01/ilo_logo_png.png" },
  { name: "HSBC", img: "https://lightcastlepartners.com/wp-content/uploads/2021/12/clients_hsbc1-1.png" },
  { name: "WFP", img: "https://lightcastlepartners.com/wp-content/uploads/2022/01/wfp.png" }
];

export const INSIGHTS = [
  {
    slug: "mango-production-forward-marketing",
    title: "Advancing Mango Production & Forward Marketing in Bangladesh",
    category: "industry",
    image: "https://lightcastlepartners.com/wp-content/uploads/2025/12/Marketing-Report-2025-Q3-8.webp",
    readTime: "8 Mins",
    desc: "Examines structural value chain bottlenecks, export quality frameworks, and market opportunities.",
    content: {
      introduction: "Bangladesh has consistently ranked in the top 10 global producers of mangoes. However, export volume remains negligible due to structural quality challenges, phytosanitary concerns, and lack of direct logistics matching. This study inspects the forward marketing integration pathways for regional producers.",
      sections: [
        {
          title: "1. The Value Chain Friction Points",
          body: "Smallholder farmers currently rely on multi-tier intermediary chains (Beparis, Aratdars, and Wholesalers). By the time produce reaches primary retail centers in Dhaka, wastage levels exceed 25%, and the farmer's profit margin drops to less than 15% of final retail pricing. Cold chain infrastructure is virtually non-existent at primary collection centers."
        },
        {
          title: "2. Quality Controls and Phytosanitary Standards",
          body: "European and Middle Eastern buyers enforce strict restrictions on chemical ripening agents and insect residues. Upgrading to hot water treatment (HWT) systems and implementing global Good Agricultural Practices (GAP) certification is essential to register domestic supply lines for high-volume international supermarket accounts."
        },
        {
          title: "3. Direct Logistics and Forward Contracts",
          body: "Introducing digital forward contracts and direct logistics matchmaking between agricultural hubs (e.g. Rajshahi, Chapainawabganj) and retail buyers bypasses transactional bottlenecks. This provides farmers with pre-guaranteed contract pricing while ensuring predictable quality for exporters."
        }
      ],
      blockquote: "By introducing centralized processing facilities and direct supply pipelines, we can reduce waste by 18% and increase smallholder income metrics by over 30% across the Rajshahi district.",
      takeaways: [
        "Phytosanitary Alignment: Standardizing Good Agricultural Practices (GAP) across regional cohorts.",
        "Infrastructure Upgrades: Implementing localized hot water treatment (HWT) sorting warehouses.",
        "Forward Pricing: Bypassing Aratdar markups via digital logistics and forward pricing models."
      ]
    }
  },
  {
    slug: "us-israel-iran-conflict-logistics",
    title: "US/Israel–Iran Conflict: Implications for Bangladesh’s Logistics Across Key Sectors",
    category: "economy",
    image: "https://lightcastlepartners.com/wp-content/uploads/2026/03/Untitled-design-13-4.png",
    readTime: "4 Mins",
    desc: "A macro evaluation of the geopolitical changes in global shipping corridors and national import impact.",
    content: {
      introduction: "As geopolitical tensions in the Middle East escalate, global maritime routes are experiencing prolonged disruptions. This report evaluates the direct impact of shipping corridor shifts, freight premium surges, and fuel price volatility on Bangladesh's import-dependent industrial sectors.",
      sections: [
        {
          title: "1. Maritime Routing Constraints",
          body: "Avoidance of Red Sea access corridors forces vessels to transit around the Cape of Good Hope. This redirect adds 12 to 14 days to standard transit intervals between European hubs and Chittagong port, resulting in a parallel shortage of empty containers due to longer return cycles."
        },
        {
          title: "2. Freight Premium Surges",
          body: "Spot container rates from Shanghai/Ningbo to Chittagong have experienced a 45% premium markup over the last quarter. Additionally, shipping lines have implemented war-risk insurance surcharges, elevating final landed costs of key raw materials like chemicals and fabrics."
        },
        {
          title: "3. Impact on Ready-Made Garments (RMG)",
          body: "RMG exporters face a double-bind: delayed raw material arrivals from East Asian partners and extended shipping windows to European buyers. To meet tight seasonal delivery dates, some brands are forcing local factories to transition to high-premium air freight options."
        }
      ],
      blockquote: "Industrial operations must prepare for persistent container supply constraints and budget for an average 20% surge in baseline logistics expenses for the remainder of the fiscal year.",
      takeaways: [
        "Alternative Routing: Establishing buffer inventory points in close proximity to regional transshipment hubs.",
        "Premium Containment: Moving from spot freight markets to long-term contract pricing with ocean liners.",
        "RMG Supply Buffer: Extending standard order lead-time buffers by at least 15 calendar days."
      ]
    }
  },
  {
    slug: "childcare-social-protection",
    title: "Childcare as Social Protection: An Avenue of Unlocking Labor Force Participation",
    category: "industry",
    image: "https://lightcastlepartners.com/wp-content/uploads/2026/02/Untitled-design-6-1.jpg",
    readTime: "6 Mins",
    desc: "Fostering inclusive growth by building public-private structures for female labor force integration.",
    content: {
      introduction: "While Bangladesh has achieved significant strides in female education metrics, female labor force participation (FLFP) has hit a plateau near 38%. A primary factor driving this limitation is the lack of safe, institutional childcare structures. This report explores childcare as a macro-economic development tool.",
      sections: [
        {
          title: "1. The Care Deficit & FLFP Stagnation",
          body: "Millions of skilled women drop out of formal corporate and manufacturing jobs after child birth. The care workload falls disproportionately on household females, forcing high-potential talent to withdraw from active career progressions during their peak productive years."
        },
        {
          title: "2. Corporate and Industrial Benefits",
          body: "Studies conducted across regional RMG factories demonstrate that onsite childcare provisions yield a 3x return on investment through reduced absenteeism, elevated worker retention rates, and improved product quality metrics. Workers report higher focus levels knowing their children are in secure areas."
        },
        {
          title: "3. Policy Framework Recommendations",
          body: "Creating a viable childcare ecosystem requires public-private funding partnerships. The government should introduce corporate tax rebates for companies establishing child care facilities, alongside standardizing national licensing directives for private day care centers."
        }
      ],
      blockquote: "Providing structured childcare facilities is not a compliance expense; it is a macro-economic growth lever that directly improves industrial productivity and female economic autonomy.",
      takeaways: [
        "Onsite Provisions: Scaling factory-level daycare frameworks to decrease worker turnover.",
        "Tax Sops: Advancing national policy incentives and tax write-offs for corporate daycare investors.",
        "Licensing Standards: Implementing clear, low-friction safety guidelines for day care startups."
      ]
    }
  },
  {
    slug: "startup-capital-landscape",
    title: "A Billion Dollars Over a Decade: How Startup Capital Took Shape in Bangladesh",
    category: "entrepreneurship",
    image: "https://lightcastlepartners.com/wp-content/uploads/2026/02/Untitled-design.png",
    readTime: "5 Mins",
    desc: "An exhaustive historical review of capital mobilization, startup accelerations, and venture funding.",
    content: {
      introduction: "Over the last ten years, Bangladesh's startup ecosystem has grown from a nascent gathering of founders into an institutional market attracting over USD 1 Billion in aggregate capital. This report traces capital flow trends, founder demographics, and funding sources since 2015.",
      sections: [
        {
          title: "1. The Capital Accumulation Waves",
          body: "The ecosystem saw initial seed expansions from 2015 to 2018, followed by an institutional surge in Series A and B deals between 2019 and 2021 (led by e-commerce, fintech, and logistics). Post-2022, global liquidity tightening has shifted founder priorities from high-burn user acquisition to operational profitability."
        },
        {
          title: "2. Reliance on Foreign Capital",
          body: "Over 85% of startup funding in Bangladesh has been sourced from international venture capitalists (Singapore, Silicon Valley, Japan). While this validates the emerging market opportunity, it exposes the ecosystem to global capital market volatility and highlights the need to cultivate a domestic institutional investor class."
        },
        {
          title: "3. Strategic Policy Integration",
          body: "The establishment of the state-backed Startup Bangladesh Limited fund has injected catalytic capital. Looking ahead, relaxing regulatory restrictions on repatriating capital and simplifying foreign venture structures will accelerate investment velocity."
        }
      ],
      blockquote: "The next phase of ecosystem maturity requires a transition from growth-at-all-costs models to structural sustainability, supported by local pension funds and insurance capital.",
      takeaways: [
        "Venture Maturity: Startups prioritizing path-to-profitability metrics over high-burn customer acquisition.",
        "Local Capital Sourcing: Unlocking domestic corporate venture capital (CVC) and pension allocations.",
        "Repatriation Reform: Streamlining currency transfer regulations for foreign investment exits."
      ]
    }
  },
  {
    slug: "next-gen-growth-economic-reform",
    title: "Next-Gen Growth: Reimagining Bangladesh’s Economic Future",
    category: "economy",
    image: "https://lightcastlepartners.com/wp-content/uploads/2026/02/Untitled-design-3.png",
    readTime: "8 Mins",
    desc: "Re-evaluating reform strategies, industrial diversification targets, and systemic capital allocation.",
    content: {
      introduction: "As Bangladesh prepares to graduate from the LDC (Least Developed Country) status, its historic export-driven, RMG-reliant growth model faces structural headwinds. This report presents strategic policy recommendations to diversify exports, reform financial structures, and accelerate inclusive development.",
      sections: [
        {
          title: "1. Post-LDC Tariff Adjustments",
          body: "Graduating from LDC status will phase out generalized system of preferences (GSP) benefits in key European markets. To remain competitive, Bangladesh must secure bilateral free trade agreements (FTAs) and rapidly improve labor standards and green factory compliance ratings."
        },
        {
          title: "2. Financial Sector and Banking Reform",
          body: "High non-performing loans (NPLs) inside the banking system constrain corporate lending space. Reforming financial regulations, resolving balance sheet vulnerabilities, and strengthening capital markets will unlock institutional credit lines for SME and infrastructure developers."
        },
        {
          title: "3. Export Diversification Targets",
          body: "Relying on RMG for over 80% of national export earnings poses significant concentration risks. National policy should target structured support to high-potential industries like pharmaceuticals, software engineering, leather processing, and light engineering."
        }
      ],
      blockquote: "LDC graduation is a milestone, but sustaining economic momentum requires immediate regulatory reforms to ease business friction and incentivize industrial diversification.",
      takeaways: [
        "FTA Expansion: Negotiating strategic bilateral trade compacts ahead of LDC graduation.",
        "NPL Reduction: Strengthening banking supervision and enforcing credit recovery laws.",
        "Diversification Subsidies: Providing targeted infrastructure and incentives to non-RMG export hubs."
      ]
    }
  }
];

export const VIDEOS = [
  {
    id: "GasrQswo3-o",
    title: "Meet Faiza Tahiya | Life at LightCastle",
    desc: "A Business Analyst shares her personal journey, professional growth, and day-to-day life inside Bangladesh's top consulting team.",
    time: "3 Mins"
  },
  {
    id: "yMYRBuJXBGc",
    title: "Startup Funding Landscape | Interactive Dashboard",
    desc: "A structural preview of LightCastle's interactive dashboard built to map venture capital and impact funding data.",
    time: "1 Min"
  },
  {
    id: "GzaPyxdH3r8",
    title: "Voices of the Changemakers | Sustainable RMG Energy Transitions",
    desc: "An in-depth dialogue on circular RMG production models, renewable energy adoption, and structural industry futures.",
    time: "4 Mins"
  },
  {
    id: "dyny84LBljo",
    title: "EU Sustainability Regulations & RMG Trade Preparedness",
    desc: "Analyzing the impact of global trade directives, digital product passport requirements, and ESG compliance.",
    time: "2 Mins"
  }
];

export const LATEST_NEWS = [
  {
    title: "Zahedul Amin Moderates Strategic Panel at Bangladesh Denim Expo 2026",
    date: "June 15, 2026",
    img: "https://lightcastlepartners.com/wp-content/uploads/2026/06/Featured-News-Thumbnail-1-1.png",
    link: "https://lightcastlepartners.com/news/denim-expo-2026-zahedul-amin-diversification-panel/"
  },
  {
    title: "SheSTEM Action Dialogue: Turning Female STEM Talent into Leadership",
    date: "June 14, 2026",
    img: "https://lightcastlepartners.com/wp-content/uploads/2026/06/Featured-News-Thumbnail-2.png",
    link: "https://lightcastlepartners.com/news/gender-equity-advancing-women-stem-leadership/"
  },
  {
    title: "Celebrating Industry Exposure for Female STEM Students with CUET & BSRM",
    date: "June 11, 2026",
    img: "https://lightcastlepartners.com/wp-content/uploads/2026/06/Featured-News-Thumbnail-1.png",
    link: "https://lightcastlepartners.com/news/stem-career-readiness-through-industry-exposure/"
  },
  {
    title: "LightCastle Partners Joins the Larive Business Forum 2026 in the Netherlands",
    date: "June 10, 2026",
    img: "https://lightcastlepartners.com/wp-content/uploads/2026/06/JOURNAL-2.jpg",
    link: "https://lightcastlepartners.com/news/lightcastle-partners-larive-business-forum-2026-netherlands-trade-investment/"
  }
];
