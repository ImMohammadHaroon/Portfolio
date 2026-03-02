import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-main dark:bg-darkbg">
      <div className="max-w-md w-full mx-auto px-6">
        <h1 className="text-5xl font-bold text-ink-primary dark:text-darkink-primary mb-8 text-center">
          Contact Us
        </h1>
        <form className="bg-bg-surface dark:bg-darksurface border border-border dark:border-darkborder shadow-sm rounded-lg p-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-ink-secondary dark:text-darkink-secondary mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-border dark:border-darkborder bg-bg-surface dark:bg-darkbg text-ink-primary dark:text-darkink-primary rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-secondary dark:text-darkink-secondary mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-border dark:border-darkborder bg-bg-surface dark:bg-darkbg text-ink-primary dark:text-darkink-primary rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-secondary dark:text-darkink-secondary mb-2">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border border-border dark:border-darkborder bg-bg-surface dark:bg-darkbg text-ink-primary dark:text-darkink-primary rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
