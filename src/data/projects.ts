import project1 from "@/assets/project-1.jpg";

export interface GalleryItem {
  src: string;
  type: "image" | "video" | "youtube";
  caption?: string;
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
}

export const projects: Project[] = [
  {
    id: "psp-ac",
    title: "Purdue Space Program - Active Controls",
    shortDesc: "Part of the team building a self landing, thrust vectoring rocket",
    description: "",
    image: project1,
    gallery: [],
    tags: [],
    date: "2026",
    order: 0,
    what: "A 6-degree-of-freedom robotic arm with a custom end-effector gripper, designed for precision pick-and-place tasks.",
    how: "Modeled in SolidWorks with FEA stress analysis, FDM printed in PLA+ at 40% infill, and controlled via an Arduino Mega running a custom inverse kinematics solver in C++.",
    results: "Achieved 0.5mm repeatability across the full workspace with smooth servo-driven joint actuation.",
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
      { src: "/projects/tuzik/gallery/1000008166.JPG", type: "image" },
      { src: "/projects/tuzik/gallery/1000009617.JPG", type: "image" },
      { src: "/projects/tuzik/gallery/1000009618.JPG", type: "image" },
      { src: "/projects/tuzik/gallery/1000010119.MP4", type: "video" },
      { src: "/projects/tuzik/gallery/IMG_3311.jpg", type: "image" },
      { src: "https://www.youtube.com/watch?v=l4x3U430uCA", type: "youtube" },
      { src: "https://www.youtube.com/watch?v=kdgBtLFz1ww", type: "youtube" },
    ],
    tags: [],
    date: "2024-25",
    order: 3,
    what: "Restored a degrading 2003 Toyota Camry to reliable daily-driver condition.",
    how: "Diagnosed and repaired mechanical and electrical issues, replaced worn components, and performed preventive maintenance.",
    results: "Returned the vehicle to safe, dependable operation for everyday use.",
  },
  {
    id: "camry",
    title: "Toyota Camry Repair",
    shortDesc: "Repaired degrading 2003 Camry for personal use",
    description: "",
    image: "/projects/camry/camry_cover.jpg",
    gallery: [
      { src: "/projects/camry/gallery/1000004277.jpg", type: "image" },
      { src: "/projects/camry/gallery/1000004279.jpg", type: "image" },
      { src: "/projects/camry/gallery/1000004528.jpg", type: "image" },
      { src: "/projects/camry/gallery/1000005641.JPG", type: "image" },
      { src: "/projects/camry/gallery/1000005642.JPG", type: "image" },
    ],
    tags: [],
    date: "2024",
    order: 4,
    what: "Restored a heavily worn (220k+ miles) 2003 Toyota Camry to reliable daily-driver condition.",
    how: "Diagnosed and repaired mechanical and electrical issues, replaced worn components, and performed preventive maintenance.",
    results: "Returned the vehicle to safe, dependable operation for everyday use.",
  },
  {
    id: "centerstage",
    title: "Centerstage Robot",
    shortDesc: "First robot of my newly founded team for 23-24 FTC season",
    description: "",
    image: "/projects/centerstage/cs_cover.jpg",
    gallery: [
      { src: "/projects/centerstage/gallery/1000002778.MP4", type: "video" },
      { src: "/projects/centerstage/gallery/1000003123.jpg", type: "image" },
      { src: "/projects/centerstage/gallery/1000003508.MP4", type: "video" },
      { src: "/projects/centerstage/gallery/1000003673.jpg", type: "image" },
      { src: "/projects/centerstage/gallery/1000003675.jpg", type: "image" },
      { src: "/projects/centerstage/gallery/1000003853.MP4", type: "video" },
    ],
    tags: [],
    date: "2023-24",
    order: 6,
    what: "Restored a degrading 2003 Toyota Camry to reliable daily-driver condition.",
    how: "Diagnosed and repaired mechanical and electrical issues, replaced worn components, and performed preventive maintenance.",
    results: "Returned the vehicle to safe, dependable operation for everyday use.",
  },
  {
    id: "swerve",
    title: "Coaxial Swerve Drivetrain",
    shortDesc: "Experimental completely custom swerve drivetrain made for my new team",
    description: "",
    image: "/projects/swerve/swerve_cover.jpg",
    gallery: [
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
    ],
    tags: [],
    date: "2023",
    order: 7,
    what: "Restored a degrading 2003 Toyota Camry to reliable daily-driver condition.",
    how: "Diagnosed and repaired mechanical and electrical issues, replaced worn components, and performed preventive maintenance.",
    results: "Returned the vehicle to safe, dependable operation for everyday use.",
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
    order: 10,
    what: "Restored a degrading 2003 Toyota Camry to reliable daily-driver condition.",
    how: "Diagnosed and repaired mechanical and electrical issues, replaced worn components, and performed preventive maintenance.",
    results: "Returned the vehicle to safe, dependable operation for everyday use.",
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
  { id: "purdue-start", title: "Started at Purdue", shortDesc: "Began studying Mechanical Engineering at Purdue University", date: "2025", order: 1 },
  { id: "software-intern", title: "Software Engineering Intern", shortDesc: "Started role as a software engineering intern at Clearcut Software", date: "2025", order: 2 },
  { id: "design-intern", title: "Design Intern", shortDesc: "Interned at L&M Architectural Signs to help with CAD/Design on a large scale project", date: "2024", order: 5 },
  { id: "design-intern", title: "Founded Ultraviolet", shortDesc: "Began a brand new FTC community team, 23268 Ultraviolet", date: "2023", order: 9 },
  { id: "reboot", title: "Started FTC", shortDesc: "Started FTC by joining my high school's team as sophmore", date: "2022", order: 11 },
];
