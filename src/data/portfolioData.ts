import {
  Brain,
  Code2,
  Database,
  Globe,
  Cpu,
  MessageSquare,
  Lightbulb,
  Zap,
  BookOpen,
  GitBranch,
  Terminal,
  Layers,
  Server,
  Sparkles,
  Target,
  Users,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface JourneyStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
  type: 'internship' | 'job';
}

export interface Project {
  title: string;
  role: string;
  description: string;
  features: string[];
  technologies: string[];
  github: string;
  demo: string;
  gradient: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  gradeLabel: string;
}

export interface Certification {
  name: string;
  issuer: string;
  link: string;
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const stats: Stat[] = [
  { value: '2027', label: 'Expected Graduation' },
  { value: '7.2', label: 'Current CGPA' },
  { value: '2', label: 'Internship Experiences', suffix: '+' },
  { value: '2', label: 'Major AI/Web Projects' },
];

export const journeySteps: JourneyStep[] = [
  {
    title: 'Python',
    description: 'Core programming language for AI/ML development. Strong foundation in data structures, algorithms, and scripting.',
    icon: Code2,
  },
  {
    title: 'Machine Learning',
    description: 'Supervised & unsupervised learning, regression, classification, clustering, and model evaluation techniques.',
    icon: Brain,
  },
  {
    title: 'Deep Learning',
    description: 'Neural networks, CNNs, RNNs, transfer learning, and frameworks like TensorFlow and PyTorch.',
    icon: Cpu,
  },
  {
    title: 'Generative AI',
    description: 'Large Language Models, prompt engineering, generative models, and AI-powered application development.',
    icon: Sparkles,
  },
  {
    title: 'AI Applications',
    description: 'Building real-world AI solutions — from computer vision to NLP — that solve meaningful problems.',
    icon: Target,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: Terminal,
    skills: ['C', 'Python', 'Java'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'AI / ML',
    icon: Brain,
    skills: ['Machine Learning', 'Deep Learning', 'Generative AI', 'AI Model Engineering'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: ['HTML', 'CSS', 'REST API', 'Express.js'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Database & Tools',
    icon: Database,
    skills: ['SQL', 'Jupyter Notebook', 'VS Code', 'GitHub'],
    color: 'from-orange-500 to-amber-600',
  },
  {
    title: 'Professional Skills',
    icon: Users,
    skills: ['Clear & Professional Communication', 'Adaptability', 'Problem Solving', 'Fast Learning'],
    color: 'from-pink-500 to-rose-600',
  },
];

export const experiences: ExperienceItem[] = [
  {
    title: 'Data Analytics Intern',
    company: 'APSCHE',
    duration: '2-Month Online Internship',
    description: [
      'Successfully completed a 2-month online Data Analytics Internship',
      'Analyzed and interpreted datasets using data analytics techniques',
      'Worked on data cleaning and preprocessing',
      'Performed data visualization to extract actionable insights',
      'Created reports to identify trends and patterns',
      'Earned a certification upon successful completion',
    ],
    type: 'internship',
  },
  {
    title: 'Full Stack Python Developer',
    company: 'EDU Skills',
    duration: 'Internship',
    description: [
      'Developed dynamic web applications using Python, HTML, CSS, and JavaScript',
      'Implemented CRUD operations and user authentication systems',
      'Integrated databases for persistent data management',
      'Built responsive and user-friendly interfaces',
      'Worked with frameworks, APIs, and version control tools',
    ],
    type: 'internship',
  },
];

export const projects: Project[] = [
  {
    title: 'AI Interview System',
    role: 'Frontend Developer',
    description: 'An AI-powered interview platform designed to conduct mock technical and HR interviews with real-time feedback and analysis.',
    features: [
      'AI-powered interview experience',
      'Technical & HR interview modes',
      'Real-time speech recognition',
      'Candidate response capture',
      'Response analysis & feedback',
    ],
    technologies: ['React', 'TypeScript', 'AI/ML APIs', 'Speech Recognition', 'CSS'],
    github: '#',
    demo: '#',
    gradient: 'from-indigo-600 via-purple-600 to-pink-500',
  },
  {
    title: 'Smart Food Travel Assistant',
    role: 'Frontend Developer',
    description: 'A responsive Food Travel Helper web application designed to help users discover restaurants and dining options nearby.',
    features: [
      'Restaurant search & discovery',
      'Dining options explorer',
      'User-friendly interface',
      'Fully responsive design',
      'Future map integration',
      'Future real-time data integration',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'REST API', 'Responsive Design'],
    github: '#',
    demo: '#',
    gradient: 'from-emerald-600 via-teal-500 to-cyan-500',
  },
];

export const achievements: Achievement[] = [
  {
    icon: '🏆',
    title: '2nd Place — BLOCKTHON Hackathon',
    description: 'Secured 2nd place at BLOCKTHON Hackathon for developing a blockchain-based paper tampering protection solution.',
  },
  {
    icon: '🏅',
    title: 'Merit Certificate — Brain Tumor Detection',
    description: 'Received a Merit Certificate for Brain Tumor Detection using Gen-AI, demonstrating application of generative AI in healthcare.',
  },
];

export const education: EducationItem[] = [
  {
    institution: 'Bonam Venkata Chalamayya Engineering College',
    degree: "Bachelor's Degree in Artificial Intelligence & Data Science",
    duration: '2023 – 2027',
    grade: '7.2',
    gradeLabel: 'CGPA',
  },
  {
    institution: 'Sahasra Junior College',
    degree: 'Board of Intermediate Education — MPC',
    duration: '2021 – 2023',
    grade: '67.9%',
    gradeLabel: 'Percentage',
  },
  {
    institution: 'Bhashyam English Medium High School',
    degree: 'Board of Secondary Education',
    duration: '2020 – 2021',
    grade: '96%',
    gradeLabel: 'Percentage',
  },
];

export const certifications: Certification[] = [
  {
    name: 'ServiceNow Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
    link: '#',
  },
];

export const personalInfo = {
  name: 'Dulipudi Subhash',
  firstName: 'Subhash',
  role: 'AI Engineer | AI/ML & Full-Stack Developer',
  email: 'subhash2005.d@gmail.com',
  phone: '+91 9347200310',
  linkedin: 'https://linkedin.com/in/your-profile',
  github: 'https://github.com/your-profile',
  resumeUrl: '/resume.pdf',
  profileImage: '/profile-photo.jpg',
};
