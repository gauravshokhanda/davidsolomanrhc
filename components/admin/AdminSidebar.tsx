"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  FileText, 
  Folder, 
  Image, 
  Settings, 
  Users,
  BookOpen,
  Sliders
} from 'lucide-react';

const AdminSidebar = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname?.startsWith(path) ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-blue-700 hover:text-white';
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <Home size={18} /> },
    { name: 'Pages', path: '/admin/pages', icon: <FileText size={18} /> },
    { name: 'Projects', path: '/admin/projects', icon: <Folder size={18} /> },
    { name: 'Journal', path: '/admin/journal', icon: <BookOpen size={18} /> },
    { name: 'Media', path: '/admin/media', icon: <Image size={18} /> },
    { name: "Slides", path: "/admin/slides", icon: <Sliders size={18} /> },
    { name: 'Members', path: '/admin/members', icon: <Users size={18} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={18} /> },
  ];

  return (
    <div className="bg-[#0A3B1E] text-white w-64 min-h-screen flex flex-col font-sans">
      <div className="p-4 border-b border-[#0A4F29]">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>
      <nav className="flex-1 pt-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.path} className="mb-1">
              <Link 
                href={item.path}
                className={`flex items-center px-4 py-3 ${
                  pathname?.startsWith(item.path) 
                    ? 'bg-[#0A4F29] text-white' 
                    : 'text-gray-300 hover:bg-[#0A4F29] hover:text-white'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-[#0A4F29]">
        <Link 
          href="/"
          className="flex items-center text-gray-300 hover:text-white"
        >
          <span className="mr-2">←</span>
          Back to Website
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;