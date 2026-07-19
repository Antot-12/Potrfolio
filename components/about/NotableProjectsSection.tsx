import Image from '@/components/ui/Image';
import Link from '@/components/ui/Link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'S&S Creation Smart Mirror',
    description: 'AI-powered IoT smart mirror with Raspberry Pi, real-time wellness insights, and cloud integration',
    image: '/static/images/projects/anime-viewer-app.png', // TODO: Replace with actual smart-mirror.png
    tags: ['IoT', 'Python', 'React', 'AI', 'Raspberry Pi'],
    highlight: true,
  },
  {
    title: 'Smart URL Shortener',
    description: 'Fast and customizable URL shortener built with TypeScript, Node.js, and PostgreSQL',
    image: '/static/images/projects/chat-bot-v1.png', // TODO: Replace with actual smart-url-shortener.png
    tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Guess My Number Game',
    description: 'Fun React Native mobile app with smooth animations and engaging gameplay',
    image: '/static/images/projects/ping-pong-game.png', // TODO: Replace with actual guess-my-number-game.png
    tags: ['React Native', 'TypeScript', 'Expo'],
  },
];

const NotableProjectsSection = () => {
  return (
    <div className="my-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Notable Projects</h2>
        <Link
          href="/projects"
          className="flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500"
        >
          View all projects
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800 ${
              project.highlight ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={192}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotableProjectsSection;
