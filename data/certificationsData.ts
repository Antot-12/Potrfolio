export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  category: 'AI/ML' | 'Development' | 'Security' | 'Professional Skills' | 'Cloud/DevOps';
}

const certificationsData: Certification[] = [
  // AI & Machine Learning
  {
    title: 'Machine Learning with Python Professional Certificate',
    issuer: 'Anaconda',
    issueDate: 'Feb 2026',
    skills: ['Artificial Intelligence (AI)', 'Python', 'Machine Learning'],
    category: 'AI/ML',
  },
  {
    title: 'Machine Learning with Python: Foundations',
    issuer: 'SAP',
    issueDate: 'Jan 2026',
    skills: ['Artificial Intelligence (AI)', 'Python', 'Machine Learning'],
    category: 'AI/ML',
  },
  {
    title: 'Artificial Intelligence Foundations: Machine Learning',
    issuer: 'SAP',
    issueDate: 'Dec 2025',
    credentialId: '844c1ba95c295ae86b7f49de1d11bd7398e73702b99faf87245d6a787dedbd9b',
    skills: ['Machine Learning', 'Artificial Intelligence (AI)'],
    category: 'AI/ML',
  },
  {
    title: 'Generative AI: Working with Large Language Models',
    issuer: 'NASBA',
    issueDate: 'Aug 2025',
    credentialId: '67be13a22d0fa1e78d6128bf707d789974ed0c8a9bb274d2ce4e84ff262d436c',
    skills: ['Large Language Models (LLM)', 'Artificial Intelligence (AI)', 'Generative AI'],
    category: 'AI/ML',
  },
  {
    title: 'Build with AI: Create a Local AI Agent with Gemma',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: 'a29ac2a96954ad49609af0219936dfd8cc18ee45e7e1eb0029d1c7c0f29fd018',
    skills: ['Artificial Intelligence (AI)', 'Generative AI', 'AI Agents'],
    category: 'AI/ML',
  },
  {
    title: 'Mastering Model Context Protocol (MCP)',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: '05370b3f2a6597c55db99391d26b719285de827ea0a073fb8236e7b466578783',
    skills: ['Artificial Intelligence (AI)', 'AI Software Development', 'MCP'],
    category: 'AI/ML',
  },
  {
    title: 'Model Context Protocol (MCP): Hands-On with Agentic AI',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: 'b5d6143693dc4e07cb1feee6400ae26791a70cd393c9b67677c802a4c58b7e3e',
    skills: ['AI Agents', 'Anthropic Claude', 'MCP'],
    category: 'AI/ML',
  },
  {
    title: 'Google Gemini for Developers',
    issuer: 'SAP',
    issueDate: 'Oct 2025',
    credentialId: 'a2472be24a8f29df31f4d81b27abe93b75b4aad17890c5b0037629d81c7d49b5',
    skills: ['Google Gemini', 'Generative AI', 'Veo 2'],
    category: 'AI/ML',
  },
  {
    title: 'Start Writing Prompts like a Pro',
    issuer: 'Google',
    issueDate: 'Nov 2025',
    credentialId: 'AJ2ZL1K3CO9J',
    skills: ['AI', 'AI Prompting', 'Prompt Engineering'],
    category: 'AI/ML',
  },
  {
    title: 'AI: Start',
    issuer: 'Google',
    issueDate: 'Nov 2025',
    credentialId: 'D2PVEMS5RPMK',
    skills: ['AI', 'Prompt Engineering', 'Generative AI'],
    category: 'AI/ML',
  },

  // Development & Programming
  {
    title: 'Career Essentials in GitHub Copilot Professional Certificate',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: '9224d99b072aa85dd44c1320704c0a5d99fe8fd25351ea266887da14831d3686',
    skills: ['AI Software Development', 'AI Productivity', 'GitHub Copilot'],
    category: 'Development',
  },
  {
    title: 'TypeScript Design Patterns',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: '625a0a09fc0fcda9ea2b9e12637c9955db1d53252bd14d80c112257f5e14d687',
    skills: ['TypeScript', 'Object-Oriented Programming (OOP)', 'Design Patterns'],
    category: 'Development',
  },
  {
    title: 'TypeScript Essential Training',
    issuer: 'SAP',
    issueDate: 'Aug 2025',
    credentialId: 'f5a0bfd8472d1eaabc74e599fc368818431dc4ccc1b58e34563b433d9face436',
    skills: ['TypeScript', 'JavaScript'],
    category: 'Development',
  },
  {
    title: 'Building Scalable Microservices with TypeScript and Node.js',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: '33de14ef6e4c2c7ddb2ee555a4cd9327067ce49d2228bc168823cfa3d4593c1d',
    skills: ['Microservices', 'TypeScript', 'Node.js', 'API Design'],
    category: 'Development',
  },
  {
    title: 'JavaScript Practice: Object-Oriented Programming',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: '740ac8bffcd0fe445abd42926965973171c95beddb1c2b84f15079c15b875da',
    skills: ['JavaScript', 'Object-Oriented Programming (OOP)'],
    category: 'Development',
  },
  {
    title: 'Python Practice: Object-Oriented Programming',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: '9e341ea2fd3576c0575a9cfda85ab6b50584a189fc7a2f23cc4cecaef7981141',
    skills: ['Python', 'Object-Oriented Programming (OOP)'],
    category: 'Development',
  },
  {
    title: 'Java Profiling',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: '143fa851ca0882387ae71ce4089329a85ef7137c5fadd35c06fb09646dc40c34',
    skills: ['Java', 'Object-Oriented Programming (OOP)', 'Performance Optimization'],
    category: 'Development',
  },
  {
    title: 'Modern CSS Techniques without JavaScript',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: '6103146da28aec7aa320ff05fd8e0990055a488c9b278d35839bbef3289a5c1b',
    skills: ['JavaScript', 'Cascading Style Sheets (CSS)', 'Modern CSS'],
    category: 'Development',
  },

  // Cloud & DevOps
  {
    title: 'Career Essentials in GitHub Professional Certificate',
    issuer: 'SAP',
    issueDate: 'Aug 2025',
    credentialId: '3e71d19ab55458353b1cbbcf778bdaa52f143e0534bc6c1eb37b03b3d85c10d7',
    skills: ['GitHub', 'Git', 'Version Control'],
    category: 'Cloud/DevOps',
  },
  {
    title: 'Practical GitHub Project Management and Collaboration',
    issuer: 'Project Management Institute',
    issueDate: 'Aug 2025',
    credentialId: 'ac46b15c0bc5c183cabe99477e5164b61ccf70313c9591dfd3d32f207ec4f3a3',
    skills: ['GitHub', 'Project Management', 'Collaboration'],
    category: 'Cloud/DevOps',
  },

  // Security
  {
    title: 'Microsoft Security Essentials: Concepts, Solutions, and AI-Powered Protection',
    issuer: 'NASBA',
    issueDate: 'Nov 2025',
    credentialId: '31a5ce32f67457309abb0b1972404b0b19fa5d27115e5cef69feb0cc70b89c10',
    skills: ['Microsoft Security', 'Governance, Risk Management, and Compliance (GRC)', 'Security'],
    category: 'Security',
  },

  // Professional Skills
  {
    title: 'How to Push Back at Work',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: '248b82348fed0a49a5eb0ebf214a5e4b10930de6014dafbc68842f8499ba70e8',
    skills: ['Professional Communication', 'Workplace Skills'],
    category: 'Professional Skills',
  },
  {
    title: 'Improve Communication Using Lean Thinking',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: 'b35e206180afe92d640d9b643ea6239ad0014d740d75ec7dd4606055bbafc310',
    skills: ['Lean Thinking', 'Interpersonal Communication'],
    category: 'Professional Skills',
  },
  {
    title: 'Critical Thinking and Problem Solving',
    issuer: 'Project Management Institute',
    issueDate: 'Nov 2025',
    credentialId: '217281146c46530b1b04dcc2412b5407bc80661a70ab650ab68c5ce2b29336bb',
    skills: ['Critical Thinking', 'Problem Solving'],
    category: 'Professional Skills',
  },
  {
    title: 'Nine Habits of Highly Confident People',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: '54cc4f18818917e8ff8ff5ef93ef77adac6ef9561de9c0d3afa67f86026153d2',
    skills: ['Self-confidence', 'Confident Pitch'],
    category: 'Professional Skills',
  },
  {
    title: 'Pitching Yourself for Opportunity',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: '8e1dff5ab74f1f058a0b343e8a772e13347ce0ae42446967c09d68590ce9b6f8',
    skills: ['Pitch Development', 'Pitching Ideas', 'Self-Promotion'],
    category: 'Professional Skills',
  },
  {
    title: 'How to Speak Smarter When Put on the Spot',
    issuer: 'SAP',
    issueDate: 'Nov 2025',
    credentialId: '34a4a96db0a73db4c2bccb42299e2dfa42d9678edff24e8f3a479cc6b4cd564b',
    skills: ['Public Speaking', 'Self-confidence', 'Communication'],
    category: 'Professional Skills',
  },
];

export default certificationsData;

// Helper functions
export const getCertificationsByCategory = (category: Certification['category']) => {
  return certificationsData.filter((cert) => cert.category === category);
};

export const getAllCategories = () => {
  return Array.from(new Set(certificationsData.map((cert) => cert.category)));
};

export const getTotalCertifications = () => {
  return certificationsData.length;
};

export const getAllSkills = () => {
  const allSkills = certificationsData.flatMap((cert) => cert.skills);
  return Array.from(new Set(allSkills)).sort();
};
