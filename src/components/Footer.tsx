const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#203c73] h-[320px] backdrop-blur-sm border-b border-gray-800 text-slate-200 py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 text-center">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact the OEOC</h3>
            <div className="space-y-2">
              <p className="text-slate-300">321 Bowman Hall - Kent State University</p>
              <p className="text-slate-300">Kent, OH 44242</p>
              <a
                href="mailto:oeoc@kent.edu"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                oeoc@kent.edu
              </a>
              <p className="text-slate-300">330-672-3028</p>
              <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">
                View full office listing
              </a>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-slate-700 pt-6">
            <p className="text-sm text-slate-400">
              © {currentYear} The Ohio Employee Ownership Center (OEOC)
            </p>
            <p className="text-sm text-slate-400 mt-2">
              Website Design & Development by{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Lost Tribe Media, Inc
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
