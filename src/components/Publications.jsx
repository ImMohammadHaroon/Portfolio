import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText, ExternalLink, Download } from 'lucide-react';

const MotionFade = motion.div;
const MotionCard = motion.article;

const KEYWORDS = [
  'AI Chatbots',
  'ESL Learning',
  'Speaking Anxiety',
  'Pakistan',
  'EdTech',
];

const Publications = () => {
  return (
    <section
      id="publications"
      className="relative border-t border-border dark:border-darkborder bg-bg-main dark:bg-darkbg py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink-primary dark:text-darkink-primary mb-4">
            Research & Publications
          </h2>
          <p className="text-lg text-ink-muted dark:text-darkink-muted max-w-2xl mx-auto">
            Peer-reviewed work at the intersection of AI, language learning, and educational technology.
          </p>
        </MotionFade>

        <MotionCard
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto rounded-2xl border border-darkborder bg-darksurface text-darkink-primary shadow-xl shadow-black/10 dark:shadow-black/30"
        >
          <div className="relative p-6 sm:p-8 md:p-10">
            <span className="absolute top-6 left-6 sm:top-8 sm:left-8 inline-flex items-center rounded-full bg-success-soft/10 px-2.5 py-1 text-xs font-semibold text-success-500 ring-1 ring-success-500/25">
              Published
            </span>

            <div className="flex flex-col sm:flex-row sm:items-start gap-6 pt-10 sm:pt-2">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-darksubtle text-primary-500 ring-1 ring-darkborder"
                aria-hidden
              >
                <ScrollText className="h-6 w-6" strokeWidth={1.75} />
              </div>

              <div className="min-w-0 flex-1 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold leading-snug text-darkink-primary pr-0">
                  AI-Driven Intelligent Chatbots for Conversational English Practice: A Solution for Speaking
                  Anxiety in Pakistani Students
                </h3>

                <p className="text-sm sm:text-base text-darkink-secondary leading-relaxed">
                  <span className="font-medium text-darkink-primary">ACADEMIA International Journal for Social Sciences (AIJSS)</span>
                </p>

                <dl className="grid gap-2 text-sm text-darkink-muted sm:grid-cols-1">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    <dt className="sr-only">Volume and pages</dt>
                    <dd>Vol. 5, No. 1(s1) | Pages 45-57</dd>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    <dt className="sr-only">Published</dt>
                    <dd>Published: January 2026</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Authors</dt>
                    <dd className="text-darkink-secondary leading-relaxed">
                      <span className="font-medium text-darkink-primary">Authors: </span>
                      Muhammad Haroon, Dr. Abdul Khaliq, Muhammad Wahaj Sajid
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-wrap gap-2 pt-1">
                  {KEYWORDS.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-darkborder bg-darkbg/80 px-3 py-1 text-xs font-medium text-darkink-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-end sm:gap-4 sm:pt-6">
                  <a
                    href="https://doi.org/10.63056/academia.5.1(a).2026.1892"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary-500 px-5 py-3 text-sm font-semibold text-ink-inverse transition-colors hover:bg-primary-600 active:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                  >
                    View Publication
                    <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                  </a>
                  <a
                    href="https://academia.edu.pk/index.php/Journals/article/download/1892/2828"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-primary-500 px-5 py-3 text-sm font-semibold text-primary-500 transition-colors hover:bg-primary-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                  >
                    <Download className="h-4 w-4 shrink-0" aria-hidden />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MotionCard>
      </div>
    </section>
  );
};

export default Publications;
