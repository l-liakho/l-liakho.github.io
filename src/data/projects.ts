import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  details: string[];
}

export const projects: Project[] = [
  {
    id: "robotic-arm",
    title: "3D Printed Robotic Arm",
    shortDesc: "6-DOF robotic arm with custom gripper",
    description:
      "Designed and fabricated a 6-degree-of-freedom robotic arm using FDM 3D printing. The arm features servo-driven joints, a custom end-effector gripper, and is controlled via Arduino with inverse kinematics.",
    image: project1,
    tags: ["3D Printing", "Robotics", "Arduino", "SolidWorks"],
    date: "2025",
    details: [
      "Modeled all components in SolidWorks with stress analysis via FEA",
      "Printed using PLA+ with 40% infill for structural integrity",
      "Programmed inverse kinematics solver in C++ on Arduino Mega",
      "Achieved 0.5mm repeatability across the workspace",
    ],
  },
  {
    id: "custom-drone",
    title: "Custom Quadcopter Drone",
    shortDesc: "Autonomous survey drone with payload system",
    description:
      "Built a custom quadcopter drone for aerial surveying. Features GPS waypoint navigation, a gimbal-stabilized camera, and a modular payload bay for sensor integration.",
    image: project2,
    tags: ["UAV", "CAD", "Electronics", "PID Control"],
    date: "2024",
    details: [
      "Carbon fiber frame designed in Fusion 360 for optimal strength-to-weight",
      "Custom PID controller tuned for stable hover in 15 mph winds",
      "Integrated LiDAR module for terrain mapping",
      "20-minute flight time with 500g payload capacity",
    ],
  },
  {
    id: "cnc-machine",
    title: "Desktop CNC Mill",
    shortDesc: "Precision CNC milling machine from scratch",
    description:
      "Designed and built a desktop CNC milling machine capable of machining aluminum. Features linear rail guides, ball screws, and a custom spindle mount.",
    image: project3,
    tags: ["CNC", "Manufacturing", "G-Code", "Mechanical Design"],
    date: "2024",
    details: [
      "Rigid steel frame with vibration damping mounts",
      "NEMA 23 stepper motors with microstepping drivers",
      "Custom GRBL-based controller with tool length compensation",
      "Achieves ±0.05mm tolerance on aluminum 6061",
    ],
  },
  {
    id: "solar-kart",
    title: "Solar-Powered Go-Kart",
    shortDesc: "Electric go-kart with solar charging system",
    description:
      "Capstone project: designed and built a solar-powered electric go-kart. Features regenerative braking, a MPPT charge controller, and a lightweight tubular steel chassis.",
    image: project4,
    tags: ["EV Design", "Solar", "FEA", "Capstone"],
    date: "2025",
    details: [
      "Tubular steel space frame analyzed with ANSYS FEA",
      "3kW BLDC motor with custom motor controller",
      "200W solar panel array with MPPT charging",
      "Top speed 45 km/h with 30 km range on battery alone",
    ],
  },
];
