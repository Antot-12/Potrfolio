import { Mail, Linkedin, Github, FileText, BookOpen, Code } from 'lucide-react';
import Link from '@/components/ui/Link';
import Button from '@/components/ui/Button';

const CallToActionSection = () => {
  return (
    <div className="my-8">
      <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900 dark:text-white">Let's Connect</h2>
        <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
          Always open to connecting with engineers, tech leads, and founders working in cloud, AI, and IoT
        </p>

        {/* Primary Actions */}
        <div className="mb-6 flex flex-wrap justify-center gap-4">
          <Button
            as="a"
            href="https://www.linkedin.com/in/anton-shyrko"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Linkedin size={18} />
            LinkedIn
          </Button>
          <Button
            as="a"
            href="https://github.com/Antot-12"
            target="_blank"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <Github size={18} />
            GitHub
          </Button>
          <Button
            as="a"
            href="mailto:antottoturial@gmail.com"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
          >
            <Mail size={18} />
            Email Me
          </Button>
        </div>

        {/* Secondary Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/static/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <FileText size={16} />
            Download Resume
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <BookOpen size={16} />
            Read My Blog
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <Code size={16} />
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
