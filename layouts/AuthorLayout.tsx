import { ReactNode } from 'react';
import type { Authors } from '.contentlayer/generated';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

import { CareerTimeline, StatsSection, CertificationsSection, SkillsSection } from '@/components/about';
import { Link, Image, Button, Twemoji } from '@/components/ui';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content;

  return (
    <>
      <div className="about divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg md:leading-7">
            Welcome to my blog! Through this blog, I aim to document my progress, share practical tips, and dive deep
            into the technologies and concepts I find fascinating. Whether it’s building web applications, exploring new
            programming languages, or tackling innovative projects, I strive to turn every experience into a lesson
            worth sharing.
          </p>
        </div>

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 sm:pt-28">
            <Image src={avatar || ''} alt="avatar" width={192} height={192} className="h-48 w-48 rounded-full" />

            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>

            <div className="mt-2 flex gap-3">
              <Link href={`mailto:${email}`}>
                <Mail size={24} strokeWidth={1} />
              </Link>
              <Link href={github || ''} target="_blank">
                <Github size={24} strokeWidth={1} />
              </Link>
              <Link href={linkedin || ''} target="_blank">
                <Linkedin size={24} strokeWidth={1} />
              </Link>
              <Link href={twitter || ''} target="_blank">
                <Twitter size={24} strokeWidth={1} />
              </Link>
            </div>
          </div>

          {/* <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-2">{children}</div> */}

          <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-2">
            <br></br>
            <h2>
              Hi! <Twemoji className="mx-2" emoji="waving-hand" /> I am Anton Shyrko
            </h2>
            <p>
              I am an active and motivated <strong>IT student</strong> at the{' '}
              <strong>Technical University of Košice</strong>, passionate about back-end development and new
              technologies. I have experience working with <strong>Java</strong> and <strong>Python</strong>, creating
              projects like a &quot;Tic-Tac-Toe&quot; game in Java and a &quot;To-Do List&quot; app in Python using the
              Tkinter library. I also work with <strong>JavaScript</strong>, <strong>Node.js</strong>,{' '}
              <strong>React</strong>, and <strong>Tailwind CSS</strong>, building more advanced web solutions. One of my
              key projects was the &quot;Magic Mirror,&quot; which uses AI and camera technology to detect health issues
              and received positive feedback at university tech expos. As part of a startup team, I am developing my
              skills in project management, teamwork, and full-stack development, aiming to create solutions that solve
              real-world problems.
            </p>

            <h2>Why I started this blog?</h2>
            <blockquote>
              <p>For me, it’s a way to improve my skills and share what I’ve learned along the way.</p>
            </blockquote>
            <p>
              Writing helps me better understand new technologies and ideas, and I hope this blog will also be helpful
              to other developers exploring similar challenges.
              <Twemoji emoji="clinking-beer-mugs" />.
              <br />
              <br />
            </p>

            {/* Stats Section */}
            <StatsSection />

            {/* Skills Section */}
            <SkillsSection />

            {/* Certifications Section */}
            <CertificationsSection />

            <div className="flex items-center justify-between">
              <h2>My Career</h2>

              <Button as="a" href="/static/resume.pdf" target="_blank">
                <span>Resume</span>
                <Twemoji emoji="page-facing-up" />
              </Button>
            </div>
            <CareerTimeline />
          </div>
        </div>
      </div>
    </>
  );
}
