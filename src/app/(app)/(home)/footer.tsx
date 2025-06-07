import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="flex border-t justify-between items-center font-medium p-6 bg-white">
      <div className="flex items-center gap-2">
        <span className="text-slate-700">funroad Inc.</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
        <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
        <Link href="/contact" className="hover:text-slate-900 transition-colors">
        Contact
        </Link>
      </div>
      
      <div className="text-sm text-slate-500 text-right">
        <div>© {currentYear} All rights reserved.</div>
        <div className="text-xs text-slate-400 mt-1">Created by Ashutosh Rao</div>
      </div>
    </footer>
  );
};

export default Footer;