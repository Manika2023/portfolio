import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-gray-200 py-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.475 2 2 6.484 2 12.025c0 4.425 2.865 8.18 6.84 9.505.5.09.683-.217.683-.483 0-.237-.008-.868-.012-1.705-2.782.606-3.37-1.34-3.37-1.34-.454-1.155-1.11-1.464-1.11-1.464-.91-.623.07-.61.07-.61 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.34 1.088 2.91.832.092-.647.35-1.088.635-1.34-2.22-.252-4.555-1.112-4.555-4.945 0-1.092.39-1.985 1.03-2.684-.104-.253-.446-1.27.098-2.645 0 0 .84-.27 2.75 1.026A9.546 9.546 0 0112 7.845a9.554 9.554 0 012.51.34c1.91-1.296 2.75-1.025 2.75-1.025.546 1.375.204 2.392.1 2.645.64.7 1.03 1.592 1.03 2.684 0 3.842-2.337 4.69-4.565 4.938.36.31.68.918.68 1.85 0 1.336-.012 2.415-.012 2.743 0 .268.18.577.688.48A10.025 10.025 0 0022 12.025C22 6.484 17.525 2 12 2z" clipRule="evenodd" /></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.02 8.003h4.944V23.5H.02V8.003zm7.8 0h4.739v2.129h.067c.66-1.233 2.273-2.535 4.683-2.535 5.01 0 5.936 3.297 5.936 7.586v8.318H18.5v-7.378c0-1.76-.033-4.018-2.45-4.018-2.453 0-2.828 1.915-2.828 3.891v7.505H8.82V8.003z"/></svg>
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
