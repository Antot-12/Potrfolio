import TimelineItem from './TimelineItem';

export const EXPERIENCES = [
  {
    org: 'SAP',
    url: 'https://www.sap.com',
    logo: '/static/images/experiences/sap-logo.svg',
    start: 'Aug 2025',
    end: 'Present',
    title: 'Middle Software Engineer',
    icon: 'briefcase',
    event: 'career-sap',
    skills: ['TypeScript', 'Node.js', 'Java', 'Microservices', 'Big Data', 'CI/CD', 'Jira', 'Agile'],
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Developing cloud-based microservices in <strong>TypeScript</strong> for big data processing & analytics
          </li>
          <li>Designing and consuming internal APIs, focusing on reliability and performance</li>
          <li>
            Working in an international agile team using <strong>Jira</strong>, code reviews, and <strong>CI/CD</strong>{' '}
            pipelines
          </li>
          <li>Contributing to enterprise-scale systems serving millions of users globally</li>
        </ul>
      );
    },
  },
  {
    org: 'S&S Creation',
    url: 'https://github.com/Antot-12',
    logo: '/static/images/experiences/Spekulus.png',
    start: 'May 2024',
    end: 'Aug 2025',
    title: 'Chief Executive Officer & Software Developer',
    icon: 'man-technologist',
    event: 'career-ss-creation',
    skills: ['IoT', 'Python', 'JavaScript', 'React', 'Node.js', 'Raspberry Pi', 'TensorFlow', 'AWS IoT'],
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Co-founded and led the development of IoT-based smart solutions, including a Raspberry Pi-powered smart
            mirror with AI-assisted wellness insights and real-time data integration
          </li>
          <li>
            Managed end-to-end software design using <strong>Python</strong>, <strong>JavaScript</strong>, and{' '}
            <strong>Node.js</strong>, coordinating a small team focused on hardware-software integration, UI/UX, and
            cloud connectivity
          </li>
          <li>
            Integrated <strong>TensorFlow Lite</strong> for on-device ML inference and AWS IoT Core for cloud
            connectivity
          </li>
          <li>
            Built full-stack solutions with <strong>React</strong>, <strong>Tailwind CSS</strong>, and modern CSS
            techniques, focusing on seamless user experiences
          </li>
        </ul>
      );
    },
  },
  {
    org: 'Technical University of Košice',
    url: 'https://tuke.sk',
    logo: '/static/images/experiences/tuke-logo.png',
    start: 'Sep 2021',
    end: 'Jun 2026',
    title: 'Student - Faculty of Informatics',
    icon: 'graduation-cap',
    event: 'career-tuke',
    skills: ['C++', 'Java', 'OOP', 'Data Structures', 'Database Design', 'Software Engineering'],
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            <strong>Degree:</strong> Bachelor's in Computer Science (Expected: 2026)
          </li>
          <li>
            Studying at the <strong>Faculty of Informatics</strong>, focusing on software development, data processing
            systems, and innovative technologies
          </li>
          <li>
            <strong>Key Courses:</strong> Object-Oriented Programming, Data Structures & Algorithms, Database Systems,
            Software Engineering, Web Technologies
          </li>
          <li>
            Contributed to software development and research projects using <strong>C++</strong>, <strong>Java</strong>,
            and database design
          </li>
          <li>
            Co-developed and presented projects at university tech expos, earning recognition for creative solutions
          </li>
        </ul>
      );
    },
  },
  {
    org: 'Hackathons & Competitions',
    url: 'https://linkedin.com/in/anton-shyrko',
    logo: '/static/images/experiences/hackathon-logo.png',
    start: '2023',
    end: '2024',
    title: 'Hackathon Winner & Competition Achievements',
    icon: 'trophy',
    event: 'career-hackathon',
    skills: ['Innovation', 'Problem Solving', 'Team Collaboration', 'Rapid Prototyping'],
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            <strong>🏆 Winner:</strong> <strong>EIT Digital Venture Program</strong> in 2024, recognized for creating
            impactful IoT solutions
          </li>
          <li>
            <strong>🥈 7th Place:</strong> <strong>GymBeam Hackathon</strong>, demonstrating teamwork and the ability to
            develop solutions under time constraints
          </li>
          <li>
            <strong>Participant:</strong> <strong>Erste Digital Hackathon 2023</strong>, showcasing innovative
            problem-solving and technical skills
          </li>
        </ul>
      );
    },
  },
  {
    org: 'Personal Projects',
    url: 'https://github.com/Antot-12/projects',
    logo: '/static/images/experiences/personal-projects-logo.png',
    start: 'Various',
    end: 'Present',
    title: 'Project Developer',
    icon: 'laptop-code',
    event: 'career-personal-projects',
    skills: ['Python', 'TypeScript', 'Java', 'Full-Stack Development', 'Game Development'],
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Developed a <strong>Password Generator</strong> application in Python to create secure passwords for users
          </li>
          <li>
            Created a <strong>Coin Flip Simulator</strong> using TypeScript, providing a virtual coin flipping
            experience
          </li>
          <li>
            Built an <strong>Emoji Translator</strong> that converts text into corresponding emojis, enhancing
            communication fun
          </li>
          <li>
            Developed a <strong>Chat Bot V1</strong> in Python to simulate basic conversational interactions
          </li>
          <li>
            Created a <strong>Ping-Pong Game</strong> in Java, offering a simple yet engaging gaming experience
          </li>
        </ul>
      );
    },
  },
];

const CareerTimeline = () => (
  <ul className="m-0 list-none p-0">
    {EXPERIENCES.map((experience, idx) => (
      <li key={experience.event} className="m-0 p-0">
        <TimelineItem exp={experience} last={idx === EXPERIENCES.length - 1} />
      </li>
    ))}
  </ul>
);

export default CareerTimeline;
