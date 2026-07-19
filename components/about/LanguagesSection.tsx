const languages = [
  {
    flag: '🇬🇧',
    language: 'English',
    proficiency: 'Professional working proficiency',
    level: 85,
  },
  {
    flag: '🇸🇰',
    language: 'Slovak',
    proficiency: 'Professional working proficiency',
    level: 85,
  },
  {
    flag: '🇺🇦',
    language: 'Ukrainian',
    proficiency: 'Native or bilingual proficiency',
    level: 100,
  },
];

const LanguagesSection = () => {
  return (
    <div className="my-8">
      <h2 className="mb-6 text-2xl font-bold">Languages</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {languages.map((lang) => (
          <div
            key={lang.language}
            className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="text-4xl">{lang.flag}</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">{lang.language}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{lang.proficiency}</p>
              <div className="mt-2">
                <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-blue-600 dark:bg-blue-500"
                    style={{ width: `${lang.level}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesSection;
