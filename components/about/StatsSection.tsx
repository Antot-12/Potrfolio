import { Award, Briefcase, Code, FileText, Users, Trophy } from 'lucide-react';

const stats = [
  {
    icon: Award,
    label: 'Certifications',
    value: '27',
    color: 'text-primary-500 dark:text-primary-400',
    bgColor: 'bg-primary-500/10 dark:bg-primary-500/20',
  },
  {
    icon: Trophy,
    label: 'Hackathon Wins',
    value: '3',
    color: 'text-coral dark:text-coral',
    bgColor: 'bg-coral/10 dark:bg-coral/20',
  },
  {
    icon: Briefcase,
    label: 'Year at SAP',
    value: '1+',
    color: 'text-sky-600 dark:text-sky-400',
    bgColor: 'bg-sky-500/10 dark:bg-sky-500/20',
  },
  {
    icon: Code,
    label: 'GitHub Projects',
    value: '15+',
    color: 'text-primary-500 dark:text-primary-400',
    bgColor: 'bg-primary-500/10 dark:bg-primary-500/20',
  },
  {
    icon: FileText,
    label: 'Blog Posts',
    value: '12+',
    color: 'text-sky-600 dark:text-sky-400',
    bgColor: 'bg-sky-500/10 dark:bg-sky-500/20',
  },
  {
    icon: Users,
    label: 'LinkedIn Connections',
    value: '500+',
    color: 'text-primary-500 dark:text-primary-400',
    bgColor: 'bg-primary-500/10 dark:bg-primary-500/20',
  },
];

const StatsSection = () => {
  return (
    <div className="my-8">
      <h2 className="mb-6 text-2xl font-bold">Stats & Achievements</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`flex flex-col items-center rounded-lg border border-gray-200 p-4 text-center shadow-sm transition-all hover:shadow-md dark:border-gray-700 ${stat.bgColor}`}
            >
              <Icon className={`mb-2 h-8 w-8 ${stat.color}`} />
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;
