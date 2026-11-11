import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const outputPath = path.resolve('public', 'Emmanuel-Chukwuere-CV.pdf');

console.log('Generating PDF to:', outputPath);

const doc = new PDFDocument({
  size: 'A4',
  margins: {
    top: 40,
    bottom: 40,
    left: 45,
    right: 45
  },
  bufferPages: true,
  autoFirstPage: true
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors
const PRIMARY = '#1E3A8A'; // Deep Navy
const ACCENT = '#2563EB';  // Tech Blue
const TEXT_DARK = '#0F172A'; // Slate 900
const TEXT_MUTED = '#475569'; // Slate 600
const BORDER_COLOR = '#CBD5E1'; // Slate 300
const CARD_BG = '#F8FAFC'; // Slate 50

// Data from portfolioData
const PERSONAL_INFO = {
  name: 'Emmanuel Chukwuere',
  role: 'Cloud Engineering & DevOps',
  location: 'Nigeria',
  phone: '+234 8169262188',
  email: 'emmanuelchukwuere.me@gmail.com',
  github: 'https://github.com/Emmanuel-Devo',
  availability: 'Open to Cloud Engineering and DevOps Internship Opportunities',
  bioParagraphs: [
    'I am an aspiring Cloud and DevOps Engineer with a background in Electrical and Electronics Engineering and formal training in Cloud Engineering. I am interested in cloud infrastructure, Linux administration, containerisation, infrastructure automation and cloud-native technologies.',
    'I enjoy learning by building practical projects, solving technical problems and exploring technologies that improve the deployment, management and reliability of modern applications.',
    'My goal is to grow into a skilled Cloud/DevOps Engineer by contributing to real-world engineering projects and learning from experienced professionals.'
  ]
};

const SKILL_CATEGORIES = [
  { title: 'Languages', skills: ['C#', 'Python', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Cloud & Infrastructure', skills: ['AWS (EC2, VPC, IAM, S3, EKS)', 'Load Balancing', 'Terraform (IaC)'] },
  { title: 'Networking', skills: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'Network Troubleshooting', 'Fiber Optics'] },
  { title: 'Systems & DevOps', skills: ['Linux (Ubuntu)', 'Windows', 'Bash Scripting', 'Git', 'Docker', 'Kubernetes', 'Helm', 'CI/CD (Jenkins)', 'MySQL'] }
];

const PROJECTS = [
  {
    title: 'Three-Tier EKS Infrastructure & Task Platform',
    year: '2026',
    technologies: 'AWS EKS, Terraform, Kubernetes, Docker',
    githubUrl: 'https://github.com/Emmanuel-Devo/three-tier-task-platform',
    description: 'Built a task platform for creating, managing, and tracking user tasks. Automated AWS infrastructure provisioning with Terraform for scalable deployment and configured Kubernetes services for application workloads.',
    highlights: [
      'Built a task platform for creating, managing, and tracking user tasks.',
      'Automated AWS infrastructure provisioning with Terraform for scalable application deployment.',
      'Configured Kubernetes services to manage frontend, backend, and database workloads.'
    ]
  },
  {
    title: 'CI/CD Two-Tier Flask Application',
    year: '2026',
    technologies: 'Jenkins, Docker, Linux, MySQL, CI/CD',
    githubUrl: 'https://github.com/Emmanuel-Devo/cloudlab-flask-devops',
    description: 'Built a Flask application for managing business data with MySQL, configured Linux services for reliable operations, and automated builds and deployments using Jenkins and Docker.',
    highlights: [
      'Built a Flask application for managing business data with MySQL.',
      'Configured Linux services for reliable application and database operations.',
      'Automated application builds and deployments using Jenkins and Docker.'
    ]
  },
  {
    title: 'Cloud-Native Kubernetes Platform',
    year: '2026',
    technologies: 'Kubernetes, Docker, Git, Cloud-Native Technologies',
    githubUrl: 'https://github.com/Emmanuel-Devo/cloud-native-kubernetes-platform',
    description: 'A cloud-native project focused on containerised applications, Kubernetes deployments and cluster management.',
    highlights: [
      'Managed containerized applications and services within Kubernetes clusters.',
      'Authored declarative manifests for deployments, services, and workload configurations.',
      'Maintained version-controlled infrastructure and deployment manifests using Git.'
    ]
  },
  {
    title: 'Linux Server Administration Lab',
    year: '2025',
    technologies: 'Linux, Ubuntu, Vagrant, VirtualBox, Bash, Git',
    githubUrl: 'https://github.com/Emmanuel-Devo/linux-server-administration-lab',
    description: 'A practical Linux administration environment exploring server provisioning, user management, permissions, SSH access, networking and command-line administration.',
    highlights: [
      'Provisioned virtual Linux environments using Vagrant and VirtualBox.',
      'Configured user accounts, file permissions, and secure SSH key-based access.',
      'Administered system services, networking configuration, and command-line automation using Bash.'
    ]
  },
  {
    title: 'Container Assessment Project',
    year: '2025',
    technologies: 'Docker, Containers, Linux, Git',
    githubUrl: 'https://github.com/Emmanuel-Devo/container-assessment',
    description: 'Containerization assessment exploring Docker image packaging, multi-container communication, and application environment configurations.',
    highlights: [
      'Containerized applications using custom Dockerfiles with isolated dependencies.',
      'Configured container networking and storage volumes for data persistence.',
      'Validated container health and lifecycle management in Linux environments.'
    ]
  },
  {
    title: 'Cloud Engineering Month-One Assessment',
    year: '2025',
    technologies: 'Linux, Bash, Git, System Administration',
    githubUrl: 'https://github.com/Emmanuel-Devo/month-one-assessment',
    description: 'Foundational cloud engineering project covering Linux operating system setup, Bash shell scripting, permissions, and Git version control workflows.',
    highlights: [
      'Implemented automated Bash scripts for routine system administration tasks.',
      'Configured Linux file system permissions, directory trees, and user permissions.',
      'Utilized Git version control for tracking code changes, branching, and repository commits.'
    ]
  }
];

const EXPERIENCES = [
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

const EDUCATION = [
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

const PROFESSIONAL_DEVELOPMENT = [
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

// Helper functions for PDF formatting
function sectionHeading(title) {
  checkPageBreak(40);
  doc.moveDown(0.6);
  doc.font('Helvetica-Bold').fontSize(11).fillColor(PRIMARY).text(title.toUpperCase(), { characterSpacing: 0.5 });
  const y = doc.y + 2;
  doc.strokeColor(ACCENT).lineWidth(1.5).moveTo(doc.page.margins.left, y).lineTo(doc.page.width - doc.page.margins.right, y).stroke();
  doc.moveDown(0.4);
}

function checkPageBreak(requiredHeight) {
  if (doc.y + requiredHeight > doc.page.height - doc.page.margins.bottom - 20) {
    doc.addPage();
  }
}

// 1. Header
doc.font('Helvetica-Bold').fontSize(22).fillColor(TEXT_DARK).text(PERSONAL_INFO.name, { align: 'left' });
doc.font('Helvetica-Bold').fontSize(12).fillColor(ACCENT).text(PERSONAL_INFO.role, { align: 'left' });

doc.moveDown(0.2);
doc.font('Helvetica').fontSize(9).fillColor(TEXT_MUTED);

// Contact line
doc.text(`${PERSONAL_INFO.location}  |  Phone: ${PERSONAL_INFO.phone}  |  Email: `, { continued: true });
doc.fillColor(ACCENT).text(PERSONAL_INFO.email, { link: `mailto:${PERSONAL_INFO.email}`, continued: true });
doc.fillColor(TEXT_MUTED).text('  |  GitHub: ', { continued: true });
doc.fillColor(ACCENT).text(PERSONAL_INFO.github, { link: PERSONAL_INFO.github });

doc.moveDown(0.1);
doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#059669').text(`Status: ${PERSONAL_INFO.availability}`);

// Top dividing line
const headerBottomY = doc.y + 5;
doc.strokeColor(BORDER_COLOR).lineWidth(0.75).moveTo(doc.page.margins.left, headerBottomY).lineTo(doc.page.width - doc.page.margins.right, headerBottomY).stroke();
doc.y = headerBottomY + 6;

// 2. Professional Summary
sectionHeading('Professional Summary');
doc.font('Helvetica').fontSize(9).fillColor(TEXT_DARK).lineGap(2);
PERSONAL_INFO.bioParagraphs.forEach((para) => {
  checkPageBreak(30);
  doc.text(para, { align: 'justify' });
  doc.moveDown(0.3);
});

// 3. Technical Skills
sectionHeading('Technical Skills');
SKILL_CATEGORIES.forEach((cat) => {
  checkPageBreak(22);
  doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY).text(`•  ${cat.title}: `, { continued: true });
  doc.font('Helvetica').fontSize(9).fillColor(TEXT_DARK).text(cat.skills.join(', '));
  doc.moveDown(0.2);
});

// 4. Featured Projects
sectionHeading('Featured Projects');
PROJECTS.forEach((proj) => {
  checkPageBreak(65);
  doc.font('Helvetica-Bold').fontSize(10).fillColor(PRIMARY).text(`${proj.title} ${proj.year ? `(${proj.year})` : ''}`, { continued: true });
  doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(TEXT_MUTED).text(`  —  ${proj.technologies}`);
  
  if (proj.githubUrl) {
    doc.font('Helvetica').fontSize(8).fillColor(ACCENT).text(`Repository: ${proj.githubUrl}`, { link: proj.githubUrl, underline: true });
  }
  
  doc.font('Helvetica').fontSize(8.5).fillColor(TEXT_DARK).text(proj.description);
  
  proj.highlights.forEach((h) => {
    doc.font('Helvetica').fontSize(8.5).fillColor('#334155').text(`   •  ${h}`);
  });
  doc.moveDown(0.4);
});

// 5. Experience
sectionHeading('Experience');
EXPERIENCES.forEach((exp) => {
  checkPageBreak(50);
  doc.font('Helvetica-Bold').fontSize(10).fillColor(PRIMARY).text(exp.role, { continued: true });
  doc.font('Helvetica').fontSize(9.5).fillColor(TEXT_DARK).text(` — ${exp.company}`, { continued: true });
  doc.font('Helvetica').fontSize(8.5).fillColor(TEXT_MUTED).text(`  (${exp.period})`, { align: 'right' });
  
  doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(TEXT_MUTED).text(exp.location);
  
  exp.highlights.forEach((h) => {
    doc.font('Helvetica').fontSize(8.5).fillColor('#334155').text(`   •  ${h}`);
  });
  doc.moveDown(0.4);
});

// 6. Education
sectionHeading('Education');
EDUCATION.forEach((edu) => {
  checkPageBreak(35);
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(PRIMARY).text(edu.degree, { continued: true });
  doc.font('Helvetica').fontSize(8.5).fillColor(TEXT_MUTED).text(`  (${edu.period})`, { align: 'right' });
  doc.font('Helvetica').fontSize(9).fillColor(TEXT_DARK).text(`${edu.institution} — ${edu.location}`);
  if (edu.notes) {
    doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(TEXT_MUTED).text(edu.notes);
  }
  doc.moveDown(0.3);
});

// 7. Professional Development & Certificates
sectionHeading('Professional Development & Certificates');
PROFESSIONAL_DEVELOPMENT.forEach((pd) => {
  checkPageBreak(35);
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(PRIMARY).text(pd.qualification, { continued: true });
  doc.font('Helvetica').fontSize(8.5).fillColor(TEXT_MUTED).text(`  (${pd.period})`, { align: 'right' });
  doc.font('Helvetica').fontSize(9).fillColor(TEXT_DARK).text(`${pd.institution} — ${pd.location}`);
  if (pd.notes) {
    doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(TEXT_MUTED).text(pd.notes);
  }
  doc.moveDown(0.3);
});

// Final step: Add page numbers to all buffered pages
const totalPages = doc.bufferedPageRange().count;
for (let i = 0; i < totalPages; i++) {
  doc.switchToPage(i);
  doc.font('Helvetica').fontSize(8).fillColor('#94A3B8');
  
  // Footer text
  const footerText = `Emmanuel Chukwuere — Curriculum Vitae  |  Cloud Engineering & DevOps`;
  const pageText = `Page ${i + 1} of ${totalPages}`;
  
  const bottomY = doc.page.height - 28;
  doc.text(footerText, doc.page.margins.left, bottomY, { align: 'left' });
  doc.text(pageText, doc.page.width - doc.page.margins.right - 100, bottomY, { align: 'right', width: 100 });
}

doc.end();

writeStream.on('finish', () => {
  const stats = fs.statSync(outputPath);
  console.log(`PDF successfully created at ${outputPath} (${stats.size} bytes, ${totalPages} pages)`);
});
