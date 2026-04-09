import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export interface GalleryItem {
  src: string;
  type: "image" | "video";
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
  what: string;
  how: string;
  results: string;
  youtubeUrl?: string;
}

export const projects: Project[] = [
  {
    id: "psp-ac",
    title: "Purudue Space Program - Active Controls",
    shortDesc: "Part of the team building a self landing, thrust vectoring rocket",
    description: "",
    image: project1,
    gallery: [
      // Add gallery items here, e.g.:
      // { src: "/projects/robotic-arm/gallery/1.jpg", type: "image", caption: "Assembled arm" },
      // { src: "/projects/robotic-arm/gallery/demo.mp4", type: "video", caption: "Arm in action" },
    ],
    tags: [],
    date: "2025",
    what: "A 6-degree-of-freedom robotic arm with a custom end-effector gripper, designed for precision pick-and-place tasks.",
    how: "Modeled in SolidWorks with FEA stress analysis, FDM printed in PLA+ at 40% infill, and controlled via an Arduino Mega running a custom inverse kinematics solver in C++.",
    results: "Achieved 0.5mm repeatability across the full workspace with smooth servo-driven joint actuation.",
  },
  {
    id: "camry",
    title: "Toyota Camry Repair",
    shortDesc: "Repaired degrading 2003 Camry for personal use",
    description: "",
    image: project4,
    gallery: [
      // { src: "/projects/solar-kart/gallery/1.jpg", type: "image", caption: "Chassis welding" },
    ],
    tags: [],
    date: "2024",
    what: "Restored a degrading 2003 Toyota Camry to reliable daily-driver condition.",
    how: "Diagnosed and repaired mechanical and electrical issues, replaced worn components, and performed preventive maintenance.",
    results: "Returned the vehicle to safe, dependable operation for everyday use.",
  },
];
