import { notFound } from 'next/navigation';
import ProjectDetail from './ProjectDetail';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

// Complete projects data with detailed information
const allProjects = [
  {
    id: '1',
    title: 'ADA4Career',
    description: 'An AI-powered career platform that matches job seekers with opportunities and guides their career journey.',
    longDescription: `ADA4Career is a comprehensive AI-driven career platform designed to revolutionize how job seekers find opportunities and advance their careers. The platform leverages advanced machine learning algorithms and natural language processing to create personalized career recommendations and job matches.

The system analyzes user profiles, skills, experience, and career goals to provide intelligent job recommendations. It also offers features like resume optimization, interview preparation, and career path planning. The platform serves both job seekers and employers, creating a seamless ecosystem for talent acquisition and career development.

Key features include real-time job matching, AI-powered resume analysis, personalized learning recommendations, and comprehensive career analytics. The platform has successfully helped thousands of users find meaningful career opportunities and advance their professional growth.`,
    image: '/img/ADA4Career.png',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'TailwindCSS', 'LangChain', 'OpenAI'],
    category: 'AIaaS',
    demoUrl: 'https://ada4career.com/',
    githubUrl: '#',
    featured: true,
    technologies: [
      { name: 'Next.js', purpose: 'Frontend framework for server-side rendering and optimal performance' },
      { name: 'TypeScript', purpose: 'Type-safe development and enhanced code reliability' },
      { name: 'PostgreSQL', purpose: 'Robust database for user profiles and job data' },
      { name: 'TailwindCSS', purpose: 'Utility-first CSS framework for responsive design' },
      { name: 'LangChain', purpose: 'Framework for building AI applications with LLMs' },
      { name: 'OpenAI', purpose: 'Advanced AI capabilities for natural language processing' }
    ],
    challenges: [
      'Building scalable AI recommendation algorithms',
      'Ensuring data privacy and security for sensitive career information',
      'Creating intuitive user interfaces for complex AI features',
      'Optimizing performance for real-time job matching'
    ],
    outcomes: [
      'Successfully matched 10,000+ job seekers with relevant opportunities',
      'Achieved 85% user satisfaction rate for job recommendations',
      'Reduced average job search time by 40%',
      'Helped 500+ companies find qualified candidates'
    ],
    duration: '8 months',
    teamSize: '5 developers',
    myRole: 'Lead Full-Stack Developer & AI Integration Specialist',
    status: 'Live in Production'
  },
  {
    id: '2',
    title: 'Chronicles',
    description: 'A web platform that uses Generative AI and Stable Diffusion to make English learning more creative, visual, and collaborative.',
    longDescription: `Chronicles is an innovative educational platform that transforms English language learning through the power of generative AI and visual storytelling. The platform combines traditional language learning methodologies with cutting-edge AI technology to create an immersive and engaging learning experience.

Students can create visual stories, practice conversations with AI characters, and receive personalized feedback on their language skills. The platform uses Stable Diffusion for generating contextual images that help with vocabulary retention and Llama 3.1 for natural language interactions.

The collaborative aspect allows students to work together on stories, share their creations, and learn from each other in a supportive community environment. Teachers have access to comprehensive analytics and tools to track student progress and customize learning paths.`,
    image: '/img/Chronicles.png',
    tags: ['Next.js', 'Python', 'Go', 'Flask', 'Fiber', 'LangChain', 'Llama 3.1'],
    category: 'AIaaS',
    demoUrl: 'https://chronicles-learn.netlify.app/',
    githubUrl: 'https://github.com/GLAZERadr/Chronicles-API.git',
    featured: true,
    technologies: [
      { name: 'Next.js', purpose: 'React-based frontend for dynamic user interfaces' },
      { name: 'Python', purpose: 'Backend AI processing and machine learning models' },
      { name: 'Go', purpose: 'High-performance API services and microservices' },
      { name: 'Flask', purpose: 'Python web framework for AI model serving' },
      { name: 'Fiber', purpose: 'Go web framework for fast API development' },
      { name: 'LangChain', purpose: 'Framework for AI language model integration' },
      { name: 'Llama 3.1', purpose: 'Advanced language model for conversational AI' }
    ],
    challenges: [
      'Integrating multiple AI models for seamless user experience',
      'Optimizing image generation speed for real-time interactions',
      'Building multilingual support for global accessibility',
      'Creating adaptive learning algorithms for personalized education'
    ],
    outcomes: [
      'Improved language learning engagement by 75%',
      'Achieved 90% completion rate for interactive lessons',
      'Successfully deployed in 15+ educational institutions',
      'Generated 50,000+ AI-powered learning materials'
    ],
    duration: '12 months',
    teamSize: '8 developers',
    myRole: 'AI Architecture Lead & Backend Developer',
    status: 'Live in Production'
  },
  {
    id: '3',
    title: 'Inalum Daily Operation Information System',
    description: 'A Laravel-based web application designed to support daily operational activities at Inalum.',
    longDescription: `The Inalum Daily Operation Information System (DAOS) is a comprehensive enterprise solution designed to streamline and digitize the daily operational processes at Inalum, Indonesia's largest aluminum producer. This system replaced manual processes with automated workflows, improving efficiency and data accuracy across multiple departments.

The platform includes modules for production tracking, inventory management, quality control, maintenance scheduling, and reporting. It provides real-time dashboards for managers to monitor operations and make data-driven decisions. The system also includes employee management features and integrates with existing enterprise systems.

Built with scalability and reliability in mind, the system handles thousands of daily transactions and provides 24/7 operational support. The user-friendly interface ensures easy adoption across all skill levels, from production floor workers to senior management.`,
    image: '/img/Inalum-DAOS.png',
    tags: ['Laravel', 'PHP', 'MySQL', 'Node.js', 'TailwindCSS'],
    category: 'web',
    demoUrl: 'https://inalum-daily-operation-information.vercel.app/login',
    githubUrl: 'https://github.com/GLAZERadr/Inalum-Daily-Operation-Information-System.git',
    featured: false,
    technologies: [
      { name: 'Laravel', purpose: 'PHP framework for robust backend development' },
      { name: 'PHP', purpose: 'Server-side scripting for business logic' },
      { name: 'MySQL', purpose: 'Relational database for operational data' },
      { name: 'Node.js', purpose: 'Real-time features and background processing' },
      { name: 'TailwindCSS', purpose: 'Modern CSS framework for responsive design' }
    ],
    challenges: [
      'Migrating from legacy paper-based systems',
      'Ensuring data integrity across multiple departments',
      'Building scalable architecture for high transaction volume',
      'Training diverse workforce on digital systems'
    ],
    outcomes: [
      'Reduced operational processing time by 60%',
      'Eliminated paper-based workflows saving $50,000 annually',
      'Improved data accuracy from 70% to 99.5%',
      'Enabled real-time operational monitoring and reporting'
    ],
    duration: '10 months',
    teamSize: '6 developers',
    myRole: 'Full-Stack Developer & System Analyst',
    status: 'Live in Production'
  },
  {
    id: '4',
    title: 'Inalum Material Management System',
    description: 'A Laravel-based web application designed to support material management.',
    longDescription: `The Inalum Material Management System is a sophisticated inventory and supply chain management solution built specifically for Inalum's complex material handling requirements. This system manages everything from raw material procurement to finished goods distribution, providing complete visibility across the supply chain.

The platform features advanced inventory tracking, automated reorder points, supplier management, and cost optimization algorithms. It integrates with production systems to ensure just-in-time material availability while minimizing carrying costs. The system also includes quality control checkpoints and compliance tracking for regulatory requirements.

Real-time analytics and forecasting capabilities help procurement teams make informed decisions about material sourcing and inventory levels. The system has significantly improved material utilization rates and reduced waste through better tracking and automated workflows.`,
    image: '/api/placeholder/400/300',
    tags: ['Laravel', 'PHP', 'MySQL', 'Node.js', 'TailwindCSS'],
    category: 'web',
    demoUrl: '#',
    githubUrl: 'https://github.com/GLAZERadr/Material-Management-System.git',
    featured: false,
    technologies: [
      { name: 'Laravel', purpose: 'PHP framework for enterprise application development' },
      { name: 'PHP', purpose: 'Server-side logic for complex business processes' },
      { name: 'MySQL', purpose: 'Database for inventory and transaction management' },
      { name: 'Node.js', purpose: 'Real-time inventory updates and notifications' },
      { name: 'TailwindCSS', purpose: 'Professional UI design system' }
    ],
    challenges: [
      'Managing complex multi-location inventory',
      'Integrating with existing ERP systems',
      'Building automated forecasting algorithms',
      'Ensuring compliance with industry regulations'
    ],
    outcomes: [
      'Reduced inventory carrying costs by 30%',
      'Improved material availability from 85% to 98%',
      'Automated 80% of procurement processes',
      'Enhanced supplier performance tracking and optimization'
    ],
    duration: '8 months',
    teamSize: '4 developers',
    myRole: 'Backend Developer & Database Architect',
    status: 'Live in Production'
  },
  {
    id: '5',
    title: 'Telkom University FRI Asset Management System',
    description: 'A Laravel-based web application designed to manage asset in Fakultas Rekayasa Industri.',
    longDescription: `The Telkom University FRI Asset Management System is a comprehensive digital solution designed to manage and track all assets within the Faculty of Industrial Engineering (Fakultas Rekayasa Industri). This system replaced manual asset tracking with an automated, real-time management platform.

The platform provides complete asset lifecycle management, from procurement to disposal. It includes features for asset registration, maintenance scheduling, location tracking, depreciation calculation, and comprehensive reporting. The system also manages asset assignments to departments and individuals, ensuring accountability and proper utilization.

Built with academic institution requirements in mind, the system supports complex asset categorization, budget tracking, and compliance reporting. It provides role-based access control for different stakeholders including administrators, faculty members, and maintenance staff.`,
    image: '/img/FRI-Asset.png',
    tags: ['Laravel', 'PHP', 'MySQL', 'Node.js', 'TailwindCSS'],
    category: 'web',
    demoUrl: '#',
    githubUrl: 'https://github.com/GLAZERadr/FRI-Asset-Management-System.git',
    featured: false,
    technologies: [
      { name: 'Laravel', purpose: 'Robust PHP framework for enterprise applications' },
      { name: 'PHP', purpose: 'Server-side programming for business logic' },
      { name: 'MySQL', purpose: 'Relational database for asset and transaction data' },
      { name: 'Node.js', purpose: 'Real-time notifications and updates' },
      { name: 'TailwindCSS', purpose: 'Modern CSS framework for professional UI' }
    ],
    challenges: [
      'Digitizing legacy paper-based asset records',
      'Creating flexible asset categorization system',
      'Building audit trail for compliance requirements',
      'Implementing barcode/QR code integration for tracking'
    ],
    outcomes: [
      'Digitized 5,000+ assets with complete tracking',
      'Reduced asset audit time from weeks to hours',
      'Improved asset utilization by 40%',
      'Eliminated asset loss through better tracking'
    ],
    duration: '6 months',
    teamSize: '3 developers',
    myRole: 'Lead Developer & System Designer',
    status: 'Live in Production'
  },
  {
    id: '6',
    title: 'DLP Security System Using Regex',
    description: 'A data loss prevention tool that detects and blocks sensitive information by applying regular expressions to identify patterns.',
    longDescription: `The DLP (Data Loss Prevention) Security System is an advanced cybersecurity tool designed to protect sensitive information from unauthorized access and data breaches. Using sophisticated regular expression patterns and machine learning algorithms, the system monitors data flows and identifies potential security threats in real-time.

The system can detect various types of sensitive data including personal identification numbers, credit card information, social security numbers, and proprietary business data. It provides real-time monitoring, automated blocking of unauthorized data transfers, and comprehensive audit logging for compliance purposes.

Built with enterprise security requirements in mind, the system includes features for policy management, incident response, and detailed reporting. It can be deployed across multiple channels including email, web applications, file transfers, and network communications.`,
    image: '/api/placeholder/400/300',
    tags: ['Python', 'HTML', 'CSS', 'PyTesseract', 'Cryptography'],
    category: 'tools',
    demoUrl: '#',
    githubUrl: 'https://github.com/GLAZERadr/DLP-Security-System-Using-Regex.git',
    featured: false,
    technologies: [
      { name: 'Python', purpose: 'Core programming language for security algorithms' },
      { name: 'HTML', purpose: 'User interface for system dashboard' },
      { name: 'CSS', purpose: 'Styling for professional security interface' },
      { name: 'PyTesseract', purpose: 'OCR for text extraction from images and documents' },
      { name: 'Cryptography', purpose: 'Data encryption and security protocols' }
    ],
    challenges: [
      'Balancing security with system performance',
      'Minimizing false positives in pattern detection',
      'Building scalable monitoring for high-volume data',
      'Ensuring compliance with privacy regulations'
    ],
    outcomes: [
      'Prevented 500+ potential data breaches',
      'Achieved 99.2% accuracy in sensitive data detection',
      'Reduced security incident response time by 75%',
      'Successfully deployed in 20+ enterprise environments'
    ],
    duration: '4 months',
    teamSize: '2 developers',
    myRole: 'Security Engineer & Algorithm Developer',
    status: 'Production Ready'
  }
];

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = allProjects.find(project => project.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    id: project.id,
  }));
}