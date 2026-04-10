import project1 from "@/assets/project-1.jpg";

export interface GalleryItem {
  src: string;
  type: "image" | "video" | "youtube";
  caption?: string;
  portrait?: boolean;
}

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  gallery: GalleryItem[];
  tags: string[];
  date: string;
  order: number;
  what: string;
  how: string;
  results: string;
  youtubeUrl?: string;
  portfolioPdf?: string;
}

export const projects: Project[] = [
  {
    id: "psp-ac",
    title: "Purdue Space Program - Active Controls",
    shortDesc: "Part of the team building a self landing, thrust vectoring rocket",
    description: "",
    image: "/projects/psp-ac/ac_full_structure.png",
    gallery: [
      { src: "/projects/psp-ac/gallery/IMG_6044.PNG", type: "image" },
      { src: "/projects/psp-ac/gallery/IMG_6165.PNG", type: "image" },
      { src: "/projects/psp-ac/gallery/IMG_6166.PNG", type: "image" },
      { src: "/projects/psp-ac/gallery/plate_on_lander.png", type: "image" },
      { src: "/projects/psp-ac/gallery/IMG_6043.MOV", type: "video" },
      { src: "https://www.youtube.com/watch?v=TCBOPhCRm1g", type: "youtube" },
    ],
    tags: [],
    date: "2026",
    order: 0,
    what: "Designed and manufactured structural members and fluid system mounts for a <b>9 ft, 500 lb thrust-vectoring self-landing rocket</b> as part of the Active Controls structures and manufacturing team at Purdue Space Program.",
    how: "Modeled components in <b>NX</b>, performed <b>FEA in NX SimLab and ANSYS</b> on lander structural members, and iterated designs to meet load and vibration requirements. Manufactured parts using machining and fabrication techniques.",
    results: "Delivered flight-ready structural components that passed FEA validation under expected <b>thrust and landing loads</b>. Currently contributing to the team's ongoing development toward a full self-landing test flight.",
  },
  {
    id: "tuzik",
    title: "Into The Deep Robot",
    shortDesc: "My magnum opus, a solo-built FTC robot ranked in the 99.9th percentile",
    description: "",
    image: "/projects/tuzik/tuzik_cover.JPG",
    gallery: [
      { src: "/projects/tuzik/gallery/1000006562.PNG", type: "image" },
      { src: "/projects/tuzik/gallery/1000006617.PNG", type: "image" },
      { src: "/projects/tuzik/gallery/1000006734.JPG", type: "image" },
      { src: "/projects/tuzik/gallery/1000007148.JPG", type: "image" },
      { src: "/projects/tuzik/gallery/1000007281.MP4", type: "video" },
      { src: "/projects/tuzik/gallery/1000008166.JPG", type: "image" },
      { src: "/projects/tuzik/gallery/1000008167.JPG", type: "image" },
      { src: "/projects/tuzik/gallery/1000009617.JPG", type: "image" },
      { src: "/projects/tuzik/gallery/1000009618.JPG", type: "image" },
      { src: "/projects/tuzik/gallery/1000010119.MP4", type: "video" },
      { src: "/projects/tuzik/gallery/1000010446.MP4", type: "video" },
      { src: "/projects/tuzik/gallery/IMG_3311.jpg", type: "image" },
      { src: "/projects/tuzik/gallery/ITDRender.mp4", type: "video" },
      { src: "https://www.youtube.com/watch?v=l4x3U430uCA", type: "youtube" },
      { src: "https://www.youtube.com/watch?v=kdgBtLFz1ww", type: "youtube" },
    ],
    tags: [],
    date: "2024-25",
    order: 4,
    what: "Solo-designed, following the graduation of all other team members, and built a competitive <b>18×18 in. FTC robot</b> for the 2024-25 Into The Deep season on a <b>3-person independent team</b> with no institutional backing and a limited budget.",
    how: "Designed the full robot in <b>Fusion 360</b>, including custom mechanisms for game piece manipulation. Implemented <b>PID control, motion profiling, and inverse kinematics</b> in Java for autonomous navigation. Managed all CAD, assembly, wiring, and software as the team's primary builder and programmer.",
    results: "Ranked <b>#4 globally out of 8,000+ teams</b> and achieved <b>2nd highest average match score worldwide</b>. Won <b>NJ State Championship</b> and competed at the <b>FIRST World Championship</b> in Houston. Built one of the most consistent autonomous routines in the world.",
    portfolioPdf: "/projects/tuzik/itdPortfolio.pdf",
  },
  {
    id: "camry",
    title: "Toyota Camry Repair",
    shortDesc: "Repaired degrading 2003 Camry for personal use",
    description: "",
    image: "/projects/camry/camry_cover.jpg",
    gallery: [
      { src: "/projects/camry/gallery/1000004277.jpg", type: "image" },
      { src: "/projects/camry/gallery/1000004121.jpeg", type: "image" },
      { src: "/projects/camry/gallery/1000004279.jpg", type: "image" },
      { src: "/projects/camry/gallery/1000004528.jpg", type: "image" },
      { src: "/projects/camry/gallery/1000005641.JPG", type: "image" },
      { src: "/projects/camry/gallery/1000005642.JPG", type: "image" },
    ],
    tags: [],
    date: "2024",
    order: 5,
    what: "Restored a cheaply purchased, heavily worn (<b>220k+ miles</b>) 2003 Toyota Camry to reliable daily-driver condition for personal use.",
    how: "Diagnosed and repaired several mechanical and electrical issues including completely replacing the <b>exhaust system, O2 sensors, radiator, brake pads, brake rotors and drums, CV axle</b>, installing a modern infotainment system, and more.",
    results: "Returned the vehicle to safe, comfortable, and dependable operation for everyday use at <b>extremely minimal cost</b>. Developed hands-on diagnostic and repair skills across mechanical, electrical, and fluid systems.",
  },
  {
    id: "centerstage",
    title: "Centerstage Robot",
    shortDesc: "First robot of my newly founded team for 23-24 FTC season",
    description: "",
    image: "/projects/centerstage/cs_cover.jpg",
    gallery: [
      { src: "/projects/centerstage/gallery/1000002333.PNG", type: "image" },
      { src: "/projects/centerstage/gallery/1000002778.MP4", type: "video" },
      { src: "/projects/centerstage/gallery/1000003123.jpg", type: "image" },
      { src: "/projects/centerstage/gallery/1000003347.MP4", type: "video" },
      { src: "/projects/centerstage/gallery/1000003508.MP4", type: "video" },
      { src: "/projects/centerstage/gallery/1000003629.jpg", type: "image" },
      { src: "/projects/centerstage/gallery/1000003673.jpg", type: "image" },
      { src: "/projects/centerstage/gallery/1000003675.jpg", type: "image" },
      { src: "/projects/centerstage/gallery/1000003808.MP4", type: "video" },
      { src: "/projects/centerstage/gallery/1000003853.MP4", type: "video" },
    ],
    tags: [],
    date: "2023-24",
    order: 7,
    what: "Built the first competition robot for <b>newly founded team Ultraviolet 23268</b> for the 2023-24 FTC Centerstage season, the team's inaugural year with no prior resources or experience consisting of just several friends and myself.",
    how: "Designed the majority of the robot in <b>Fusion 360</b> and handled significant portions of CAD, manufacturing, and assembly. Programmed autonomous and driver-controlled modes in <b>Java</b>. Managed team logistics including recruitment, fundraising, and sponsorship as founder and captain.",
    results: "Qualified for and competed at the <b>NJ State Championship</b>, earning the second highest NJ scorre that year in the team's first year. The robot featured a unique double-reverse four bar lift and was one of only ~5 robots to successfully use coaxial swerve in Centerstage. Established the team's foundation, reputation, and learned many lessons to be implemented the following season",
    portfolioPdf: "/projects/centerstage/csPortfolio.pdf",
  },
  {
    id: "swerve",
    title: "Coaxial Swerve Drivetrain",
    shortDesc: "Taught myself CAD through completely custom swerve drivetrain",
    description: "",
    image: "/projects/swerve/swerve_cover.jpg",
    gallery: [
      { src: "/projects/swerve/gallery/1000000627.MP4", type: "video" },
      { src: "/projects/swerve/gallery/1000000636.JPG", type: "image" },
      { src: "/projects/swerve/gallery/1000001261.JPG", type: "image" },
      { src: "/projects/swerve/gallery/1000001300.JPG", type: "image" },
      { src: "/projects/swerve/gallery/1000001306.JPG", type: "image" },
      { src: "/projects/swerve/gallery/1000001307.JPG", type: "image" },
      { src: "/projects/swerve/gallery/1000001311.MP4", type: "video" },
      { src: "/projects/swerve/gallery/1000001338.MP4", type: "video" },
      { src: "/projects/swerve/gallery/1000002140.MP4", type: "video" },
      { src: "/projects/swerve/gallery/1000002376.MP4", type: "video" },
      { src: "/projects/swerve/gallery/1000002643.MP4", type: "video" },
      { src: "/projects/swerve/gallery/1000003457.MP4", type: "video" },
      { src: "/projects/swerve/gallery/1000005910.JPG", type: "image" },
    ],
    tags: [],
    date: "2023",
    order: 8,
    what: "Designed a fully custom <b>coaxial swerve drivetrain</b> from scratch as a self-directed learning project to teach myself CAD and mechanical design for FTC robotics.",
    how: "Modeled every component in <b>Fusion 360</b>, including custom bevel gears, bearing housings, and module assemblies. Learned <b>parametric modeling, assembly constraints, and design-for-manufacturing</b> principles. 3D printed prototypes and iterated through multiple design revisions. Gained initial exposure to and subsequent significant experience in <b> control theory, inverse kinematics, and more </b> by programming driver and autonomous controls",
    results: "Successfully built and tested a working swerve prototype with 4 <b>full 360° swivel</b> coaxially driven modules. The drivetrain achieved much higher torque and speed numbers compared to traditional FTC mecanum drives. The project provided the CAD and solid drivetrain base for the following season's robot",
  },
  {
    id: "powerplay",
    title: "Power Play Robot",
    shortDesc: "Initial First Tech Challenge robot for school team",
    description: "",
    image: "/projects/powerplay/pp_cover.JPG",
    gallery: [
      { src: "/projects/powerplay/gallery/1000000133.JPG", type: "image" },
      { src: "/projects/powerplay/gallery/1000000210.MP4", type: "video" },
      { src: "/projects/powerplay/gallery/1000000296.MP4", type: "video" },
      { src: "/projects/powerplay/gallery/1000000423.JPG", type: "image" },
      { src: "/projects/powerplay/gallery/1000000424.JPG", type: "image" },
    ],
    tags: [],
    date: "2022-23",
    order: 11,
    what: "Built my first FTC competition robot for the 2022-23 Power Play season after joining my <b>high school's existing team</b> as a sophomore with no prior robotics experience.",
    how: "Learned fundamentals of <b>mechanical design, Java programming, and fabrication</b>. Contributed to robot design and assembly, and led initiative for better autonomous performance, taking over as a first year. First exposure to <b>CAD, 3D printing, and iterative prototyping</b>.",
    results: "Competed at the <b>NJ regional and state level</b> and gained the foundational skills and motivation that led to founding an independent team the following year. Sparked a deep interest in <b>mechanical engineering and competitive robotics</b>.",
  },
];

export interface TimelineEvent {
  id: string;
  title: string;
  shortDesc: string;
  date: string;
  order: number;
}

export const timelineEvents: TimelineEvent[] = [
  { id: "purpl", title: "Purdue Undergrad Rocket Propulsion Lab", shortDesc: "Worked on a torch igniter and student-led turbopump at PURPL", date: "2026", order: 1 },
  { id: "purdue-start", title: "Started at Purdue", shortDesc: "Began studying Mechanical Engineering at Purdue University", date: "2025", order: 2 },
  { id: "software-intern", title: "Software Engineering Intern", shortDesc: "Started role as a software engineering intern at Clearcut Software", date: "2025", order: 3 },
  { id: "design-intern", title: "Design Intern", shortDesc: "Interned at L&M Architectural Signs for CAD/Design", date: "2024", order: 6 },
  { id: "uv-founding", title: "Founded Ultraviolet", shortDesc: "Began a brand new FTC community team, 23268 Ultraviolet", date: "2023", order: 10 },
  { id: "reboot", title: "Started FTC", shortDesc: "Started FTC by joining my high school's team as sophmore", date: "2022", order: 12 },
];
