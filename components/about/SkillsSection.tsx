const skillsData = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'C#'],
  'Frameworks & Libraries': ['Node.js', 'React', 'React Native', 'Express', 'Next.js', 'TensorFlow'],
  'Cloud & DevOps': ['Git & GitHub', 'Docker', 'AWS', 'CI/CD', 'Microservices'],
  'AI & Machine Learning': [
    'LLMs & Prompt Engineering',
    'Machine Learning',
    'AI Agents',
    'Model Context Protocol',
    'Google Gemini',
  ],
  'Databases & Tools': ['PostgreSQL', 'Redis', 'MongoDB', 'Jira'],
  'Other Skills': ['IoT & Raspberry Pi', 'API Design', 'Security & GRC', 'Agile & Scrum'],
};

const SkillsSection = () => {
  return (
    <div className="my-8">
      <h2 className="mb-6 text-2xl font-bold">Skills & Technologies</h2>

      <div className="space-y-6">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="mb-3 text-base font-semibold text-gray-700 dark:text-gray-300">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-600 transition-all hover:bg-primary-500/20 dark:bg-primary-500/20 dark:text-primary-400 dark:hover:bg-primary-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
