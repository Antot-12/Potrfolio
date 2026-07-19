'use client';

import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import certificationsData, { type Certification } from '@/data/certificationsData';

const categories = ['All', 'AI/ML', 'Development', 'Security', 'Professional Skills', 'Cloud/DevOps'] as const;

const categoryColors = {
  'AI/ML': {
    badge: 'bg-primary-500/10 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400',
    card: 'border-primary-500/30 bg-primary-500/5 hover:border-primary-500/50 hover:bg-primary-500/10 dark:border-primary-500/30 dark:bg-primary-500/5 dark:hover:border-primary-500/50 dark:hover:bg-primary-500/10',
    logo: 'bg-primary-500/10 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400',
  },
  Development: {
    badge: 'bg-coral/10 text-coral dark:bg-coral/20 dark:text-coral',
    card: 'border-coral/30 bg-coral/5 hover:border-coral/50 hover:bg-coral/10 dark:border-coral/30 dark:bg-coral/5 dark:hover:border-coral/50 dark:hover:bg-coral/10',
    logo: 'bg-coral/10 text-coral dark:bg-coral/20 dark:text-coral',
  },
  Security: {
    badge: 'bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400',
    card: 'border-sky-500/30 bg-sky-500/5 hover:border-sky-500/50 hover:bg-sky-500/10 dark:border-sky-500/30 dark:bg-sky-500/5 dark:hover:border-sky-500/50 dark:hover:bg-sky-500/10',
    logo: 'bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400',
  },
  'Professional Skills': {
    badge: 'bg-primary-500/10 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400',
    card: 'border-primary-500/30 bg-primary-500/5 hover:border-primary-500/50 hover:bg-primary-500/10 dark:border-primary-500/30 dark:bg-primary-500/5 dark:hover:border-primary-500/50 dark:hover:bg-primary-500/10',
    logo: 'bg-primary-500/10 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400',
  },
  'Cloud/DevOps': {
    badge: 'bg-coral/10 text-coral dark:bg-coral/20 dark:text-coral',
    card: 'border-coral/30 bg-coral/5 hover:border-coral/50 hover:bg-coral/10 dark:border-coral/30 dark:bg-coral/5 dark:hover:border-coral/50 dark:hover:bg-coral/10',
    logo: 'bg-coral/10 text-coral dark:bg-coral/20 dark:text-coral',
  },
};

// Issuer logos - only include when images exist
const issuerLogos: Record<string, string> = {
  // TODO: Add logo images to /public/static/images/issuers/
  // SAP: '/static/images/issuers/sap-logo.png',
  // Anaconda: '/static/images/issuers/anaconda-logo.png',
  // NASBA: '/static/images/issuers/nasba-logo.png',
  // Google: '/static/images/issuers/google-logo.png',
  // 'Project Management Institute': '/static/images/issuers/pmi-logo.png',
};

const CERTS_PER_PAGE = 3;

const CertificationsSection = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCerts =
    activeCategory === 'All'
      ? certificationsData
      : certificationsData.filter((cert) => cert.category === activeCategory);

  const totalPages = Math.ceil(filteredCerts.length / CERTS_PER_PAGE);
  const startIndex = (currentPage - 1) * CERTS_PER_PAGE;
  const endIndex = startIndex + CERTS_PER_PAGE;
  const currentCerts = filteredCerts.slice(startIndex, endIndex);

  const categoryCounts = {
    All: certificationsData.length,
    'AI/ML': certificationsData.filter((c) => c.category === 'AI/ML').length,
    Development: certificationsData.filter((c) => c.category === 'Development').length,
    Security: certificationsData.filter((c) => c.category === 'Security').length,
    'Professional Skills': certificationsData.filter((c) => c.category === 'Professional Skills').length,
    'Cloud/DevOps': certificationsData.filter((c) => c.category === 'Cloud/DevOps').length,
  };

  const handleCategoryChange = (category: (typeof categories)[number]) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="my-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-primary-500/10 px-3 py-1 text-sm font-semibold text-primary-600 dark:bg-primary-500/20 dark:text-primary-400">
            {certificationsData.length} earned
          </span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-primary-500 text-white dark:bg-primary-600'
                : 'border border-primary-500/30 bg-primary-500/5 text-primary-600 hover:bg-primary-500/15 dark:border-primary-500/30 dark:bg-primary-500/10 dark:text-primary-400 dark:hover:bg-primary-500/20'
            }`}
          >
            {category} ({categoryCounts[category]})
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentCerts.map((cert, index) => (
          <CertificationCard key={`${cert.title}-${index}`} cert={cert} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="flex items-center gap-1 rounded-lg bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-600 transition-all hover:bg-primary-500/20 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-primary-500/20 dark:text-primary-400 dark:hover:bg-primary-500/30"
          >
            <ChevronLeft size={16} />
            Previous
          </button>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 rounded-lg bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-600 transition-all hover:bg-primary-500/20 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-primary-500/20 dark:text-primary-400 dark:hover:bg-primary-500/30"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

const CertificationCard = ({ cert }: { cert: Certification }) => {
  const hasLogo = issuerLogos[cert.issuer];

  return (
    <div
      className={`group relative flex flex-col rounded-lg border p-4 shadow-sm transition-all hover:shadow-lg ${categoryColors[cert.category].card}`}
    >
      {/* Issuer Logo */}
      <div className="mb-3 flex items-center justify-between">
        <div className="relative h-8 w-8">
          {hasLogo ? (
            <Image
              src={issuerLogos[cert.issuer]}
              alt={cert.issuer}
              width={32}
              height={32}
              className="h-auto w-auto object-contain"
            />
          ) : (
            <div
              className={`flex h-8 w-8 items-center justify-center rounded text-xs font-bold ${categoryColors[cert.category].logo}`}
            >
              {cert.issuer.charAt(0)}
            </div>
          )}
        </div>
        <span className={`rounded-full px-2 py-1 text-xs font-semibold ${categoryColors[cert.category].badge}`}>
          {cert.category}
        </span>
      </div>

      <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">{cert.title}</h3>

      <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">
        <p className="font-medium">{cert.issuer}</p>
        <p className="text-xs">{cert.issueDate}</p>
      </div>

      {cert.credentialId && (
        <div className="mb-3 text-xs text-gray-500 dark:text-gray-500">
          <span className="font-mono">ID: {cert.credentialId.slice(0, 12)}...</span>
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-1">
        {cert.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          >
            {skill}
          </span>
        ))}
        {cert.skills.length > 3 && (
          <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            +{cert.skills.length - 3}
          </span>
        )}
      </div>
    </div>
  );
};

export default CertificationsSection;
