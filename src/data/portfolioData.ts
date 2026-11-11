export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'Cloud & Kubernetes' | 'Linux & Systems' | 'DevOps & Containers' | 'All';
  year?: string;
  githubUrl: string; // Exact confirmed URL or empty string if pending
  screenshotUrl?: string; // Optional real screenshot; when null/empty, displays a clean placeholder
  overview: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  notes?: string;
}

export interface ProfessionalDevelopmentItem {
  institution: string;
  qualification: string;
  period: string;
  location: string;
  notes?: string;
}

export interface CertificateAchievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Academic Qualifications & Development' | 'Professional Certifications & Training' | 'Leadership & Recognition';
  status: string;
  notes?: string;
  imageUrl?: string;
  hasImage: boolean;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  status: string;
  period?: string;
  location?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: 'Emmanuel Chukwuere',
  role: 'Cloud Engineering & DevOps',
  location: 'Nigeria',
  phone: '+234 8169262188',
  email: 'emmanuelchukwuere.me@gmail.com',
  github: 'https://github.com/Emmanuel-Devo',
  tagline: 'Building, automating and managing reliable cloud infrastructure.',
  availability: 'Open to Cloud Engineering and DevOps Internship Opportunities',
  photoUrl: '/images/emmanuel-chukwuere-portrait.png',
  bioParagraphs: [
    'I am an aspiring Cloud and DevOps Engineer with a background in Electrical and Electronics Engineering and formal training in Cloud Engineering. I am interested in cloud infrastructure, Linux administration, containerisation, infrastructure automation and cloud-native technologies.',
    'I enjoy learning by building practical projects, solving technical problems and exploring technologies that improve the deployment, management and reliability of modern applications.',
    'My goal is to grow into a skilled Cloud/DevOps Engineer by contributing to real-world engineering projects and learning from experienced professionals.'
  ],
  aboutStory: [
    'My journey into technology combines an engineering background with a growing interest in cloud computing and DevOps.',
    'I hold a Bachelor of Engineering degree in Electrical and Electronics Engineering from the University of Port Harcourt and completed Cloud Engineering training at AltSchool Africa.',
    'I have explored Linux system administration, cloud infrastructure, networking, containerisation and Infrastructure as Code through practical learning and personal projects.',
    'I am particularly interested in understanding how applications are built, deployed, secured and maintained in modern cloud environments.',
    'My current career focus is Cloud Engineering and DevOps, where I hope to contribute to real projects, develop my technical skills and grow through practical industry experience.'
  ],
  infoPanel: {
    education: 'B.Eng. Electrical/Electronics Engineering (Communication Engineering)',
    postgraduate: 'Master of Information Technology (MIT) – In Progress',
    cloudTraining: 'AltSchool Africa & Speedlink Institute of Technology and Innovation',
    specialisation: 'Cloud Engineering & DevOps',
    location: 'Nigeria',
    phone: '+234 8169262188',
    email: 'emmanuelchukwuere.me@gmail.com',
    currentFocus: 'Cloud Infrastructure and Automation'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'three-tier-eks-task-platform',
    title: 'Three-Tier EKS Infrastructure & Task Platform',
    description: 'Built a task platform for creating, managing, and tracking user tasks. Automated AWS infrastructure provisioning with Terraform for scalable deployment and configured Kubernetes services for application workloads.',
    technologies: ['AWS EKS', 'Terraform', 'Kubernetes', 'Docker'],
    category: 'Cloud & Kubernetes',
    year: '2026',
    githubUrl: 'https://github.com/Emmanuel-Devo/three-tier-task-platform',
    screenshotUrl: '/images/three-tier-eks.png',
    overview: 'Full three-tier infrastructure and task management platform automated via Terraform Infrastructure as Code and deployed onto Amazon Elastic Kubernetes Service (EKS).',
    highlights: [
      'Built a task platform for creating, managing, and tracking user tasks.',
      'Automated AWS infrastructure provisioning with Terraform for scalable application deployment.',
      'Configured Kubernetes services to manage frontend, backend, and database workloads.'
    ]
  },
  {
    id: 'cicd-two-tier-flask-app',
    title: 'CI/CD Two-Tier Flask Application',
    description: 'Built a Flask application for managing business data with MySQL, configured Linux services for reliable operations, and automated builds and deployments using Jenkins and Docker.',
    technologies: ['Jenkins', 'Docker', 'Linux', 'MySQL', 'CI/CD'],
    category: 'DevOps & Containers',
    year: '2026',
    githubUrl: 'https://github.com/Emmanuel-Devo/cloudlab-flask-devops',
    screenshotUrl: '/images/flask-cicd.png',
    overview: 'Containerized two-tier Flask web application connected to a MySQL database with automated continuous integration and continuous deployment pipelines.',
    highlights: [
      'Built a Flask application for managing business data with MySQL.',
      'Configured Linux services for reliable application and database operations.',
      'Automated application builds and deployments using Jenkins and Docker.'
    ]
  },
  {
    id: 'cloud-native-kubernetes-platform',
    title: 'Cloud-Native Kubernetes Platform',
    description: 'A cloud-native learning project focused on containerised applications, Kubernetes deployments and cluster management.',
    technologies: ['Kubernetes', 'Docker', 'Git', 'Cloud-Native Technologies'],
    category: 'Cloud & Kubernetes',
    githubUrl: 'https://github.com/Emmanuel-Devo/cloud-native-kubernetes-platform',
    screenshotUrl: '/images/cloud-native-kubernetes.png',
    overview: 'Exploration of core Kubernetes cluster primitives, containerized application orchestration, and declarative manifest management.',
    highlights: [
      'Managed containerized applications and services within Kubernetes clusters.',
      'Authored declarative manifests for deployments, services, and workload configurations.',
      'Maintained version-controlled infrastructure and deployment manifests using Git.'
    ]
  },
  {
    id: 'linux-server-admin-lab',
    title: 'Linux Server Administration Lab',
    description: 'A practical Linux administration environment exploring server provisioning, user management, permissions, SSH access, networking and command-line administration.',
    technologies: ['Linux', 'Ubuntu', 'Vagrant', 'VirtualBox', 'Bash', 'Git'],
    category: 'Linux & Systems',
    githubUrl: 'https://github.com/Emmanuel-Devo/linux-server-administration-lab',
    screenshotUrl: '/images/linux-server-lab.png',
    overview: 'Hands-on Linux server administration environment covering user privileges, secure SSH connectivity, service daemons, and bash scripting.',
    highlights: [
      'Provisioned virtual Linux environments using Vagrant and VirtualBox.',
      'Configured user accounts, file permissions, and secure SSH key-based access.',
      'Administered system services, networking configuration, and command-line automation using Bash.'
    ]
  },
  {
    id: 'container-assessment',
    title: 'Container Assessment Project',
    description: 'Containerization assessment exploring Docker image packaging, multi-container communication, and application environment configurations.',
    technologies: ['Docker', 'Containers', 'Linux', 'Git'],
    category: 'DevOps & Containers',
    githubUrl: 'https://github.com/Emmanuel-Devo/container-assessment',
    screenshotUrl: '/images/container-assessment.png',
    overview: 'Practical assessment on building optimized Docker container images, writing clean Dockerfiles, and managing container lifecycles.',
    highlights: [
      'Containerized applications using custom Dockerfiles with isolated dependencies.',
      'Configured container networking and storage volumes for data persistence.',
      'Validated container health and lifecycle management in Linux environments.'
    ]
  },
  {
    id: 'month-one-assessment',
    title: 'Cloud Engineering Month-One Assessment',
    description: 'Foundational cloud engineering project covering Linux operating system setup, Bash shell scripting, permissions, and Git version control workflows.',
    technologies: ['Linux', 'Bash', 'Git', 'System Administration'],
    category: 'Linux & Systems',
    githubUrl: 'https://github.com/Emmanuel-Devo/month-one-assessment',
    screenshotUrl: '/images/month-one-assessment.png',
    overview: 'Structured foundational assessment demonstrating fundamental competencies in Linux terminal usage, automation scripts, and Git collaborative workflows.',
    highlights: [
      'Implemented automated Bash scripts for routine system administration tasks.',
      'Configured Linux file system permissions, directory trees, and user permissions.',
      'Utilized Git version control for tracking code changes, branching, and repository commits.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['C#', 'Python', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Cloud',
    skills: ['AWS', 'EC2', 'VPC', 'IAM', 'S3', 'EKS', 'Load Balancing', 'Terraform']
  },
  {
    title: 'Networking',
    skills: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'Network Troubleshooting']
  },
  {
    title: 'Systems & DevOps',
    skills: ['Linux', 'Windows', 'Bash', 'Git', 'Docker', 'Kubernetes', 'Helm', 'Ansible']
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Brooke-Eshcol System Ltd',
    role: 'Manager',
    period: 'February 2025 – July 2025',
    location: 'Port Harcourt, Rivers State',
    highlights: [
      'Coordinated daily operations for 4 staff and 2 SIWES students, assigning tasks and tracking progress.',
      'Taught 2 SIWES students web development through practical coding exercises and projects.',
      'Collaborated with staff to resolve technical issues and keep daily operations running smoothly.'
    ]
  },
  {
    company: 'KineticSoft',
    role: 'Web Development Tutor / Project Manager',
    period: 'July 2021 – April 2023',
    location: 'Port Harcourt, Rivers State',
    highlights: [
      'Taught 15 students web development through practical coding exercises and projects.',
      'Collaborated on a Waste Energy System project, developing the front end of the website.',
      'Guided students through projects, debugging code and supporting successful project completion.'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Miva Open University',
    degree: 'Master of Information Technology (MIT)',
    period: 'September 2026 – Present',
    location: 'Remote',
    notes: 'Status: In Progress'
  },
  {
    institution: 'University of Port Harcourt',
    degree: 'B.Eng. Electrical/Electronics Engineering (Communication Engineering)',
    period: 'October 2018 – November 2024',
    location: 'Port Harcourt, Rivers State',
    notes: 'Certificate issued: 23 April 2025'
  }
];

export const PROFESSIONAL_DEVELOPMENT: ProfessionalDevelopmentItem[] = [
  {
    institution: 'Speedlink Institute of Technology and Innovation',
    qualification: 'Certificate in Fiber Optics and Cloud Networking',
    period: '4 February – 24 October 2026',
    location: 'Port Harcourt, Rivers State',
    notes: 'Practical networking, fiber optics infrastructure, and cloud routing.'
  },
  {
    institution: 'AltSchool Africa',
    qualification: 'Diploma in Cloud Engineering',
    period: 'August 2025 – July 2026',
    location: 'Remote',
    notes: 'Status: Completed'
  }
];

export const CERTIFICATES_ACHIEVEMENTS: CertificateAchievement[] = [
  // 1. Academic Qualifications & Development
  {
    id: 'uniport-beng-degree',
    title: 'B.Eng. Electrical/Electronics Engineering (Communication Engineering)',
    issuer: 'University of Port Harcourt',
    date: 'Certificate issued: 23 April 2025',
    category: 'Academic Qualifications & Development',
    status: 'Second Class Honours (Upper Division)',
    notes: 'Admitted by the Senate of the University of Port Harcourt to the Degree of Bachelor of Engineering in Electrical/Electronic Engineering (Communication Engineering).',
    imageUrl: '/images/certificates/undergraduate-cert.jpeg',
    hasImage: true
  },
  {
    id: 'ges-400-entrepreneurship',
    title: 'Entrepreneurship Practical Course (GES 400)',
    issuer: 'University of Port Harcourt Entrepreneurial Centre',
    date: '25 October 2024',
    category: 'Academic Qualifications & Development',
    status: 'Certificate of Participation',
    notes: 'Successfully completed the mandatory 4-month practical course in Entrepreneurship (GES 400).',
    imageUrl: '/images/certificates/ges-400-cert.jpeg',
    hasImage: true
  },

  // 2. Professional Certifications & Training
  {
    id: 'speedlink-cloud-networking',
    title: 'Certificate in Fiber Optics and Cloud Networking',
    issuer: 'Speedlink Institute of Technology and Innovation',
    date: '4 February – 24 October 2026',
    category: 'Professional Certifications & Training',
    status: 'Certificate of Training',
    notes: 'Successfully completed six (6) months professional training in Fiber Optics and Cloud Networking (Cert. No. SITI/26A/FOCN/0009).',
    imageUrl: '/images/certificates/speedlink-cert.jpeg',
    hasImage: true
  },
  {
    id: 'leadspire-participation',
    title: 'Certificate of Participation',
    issuer: 'Leadspire Institute',
    date: '3 December 2022',
    category: 'Professional Certifications & Training',
    status: 'Certificate of Participation',
    notes: 'Participated in the maiden edition of Lead Conference: Upgrade - Repositioning young leaders for global opportunities.',
    imageUrl: '/images/certificates/leadspire-cert.jpeg',
    hasImage: true
  },

  // 3. Leadership & Recognition
  {
    id: 'cds-financial-inclusion',
    title: 'Financial Inclusion Community Development Service',
    issuer: 'National Youth Service Corps (NYSC), Batch C 2025',
    date: 'Batch C 2025',
    category: 'Leadership & Recognition',
    status: 'Certificate of Participation',
    notes: 'In recognition of outstanding performance and selfless service in the Financial Inclusion CDS Group as Member.',
    imageUrl: '/images/certificates/cds-cert.jpeg',
    hasImage: true
  },
  {
    id: 'nuesa-faculty-treasurer',
    title: 'Faculty Treasurer',
    issuer: 'Nigeria University Engineering Association (NUESA)',
    date: 'December 2022 – November 2023',
    category: 'Leadership & Recognition',
    status: 'Certificate of Return',
    notes: 'Returned elected as Treasurer in the NUESA UNIPORT elections held on 9 December 2022.',
    imageUrl: '/images/certificates/nuesa-treasurer-cert.jpeg',
    hasImage: true
  },
  {
    id: 'nysc-national-service',
    title: 'NYSC Certificate of National Service',
    issuer: 'National Youth Service Corps (NYSC)',
    date: '18 November 2026',
    category: 'Leadership & Recognition',
    status: 'Certificate of National Service',
    notes: 'Satisfactorily completed one year of national service (19 Nov 2025 to 18 Nov 2026), State Code RV/UPP/2025/289503.',
    imageUrl: '/images/certificates/nysc-cert.jpeg',
    hasImage: true
  }
];

// Backwards compatibility export
export const CERTIFICATIONS: CertificationItem[] = CERTIFICATES_ACHIEVEMENTS.map((c) => ({
  name: c.title,
  issuer: c.issuer,
  status: c.status,
  period: c.date,
  location: ''
}));
