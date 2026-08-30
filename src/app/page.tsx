/**
 * Home Page - Portfolio
 * @author Farich Murobic
 * @email farichmurobiq11@gmail.com
 * @github https://github.com/FarichMurobic
 * @website https://farichmurobic.vercel.app
 */

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeContent from '@/components/HomeContent';

export default function Home() {
  return (
    // Main container: full screen, no scroll
    <main className="h-screen flex flex-col overflow-hidden">
      
      {/* Main content wrapper */}
      <div className="relative flex-grow flex flex-col overflow-hidden">
        
        {/* Background layer */}
        <div className="absolute inset-0 z-0">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px] -z-10"></div>
          {/* Glowing orb effect */}
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-10 blur-[100px]"></div>
        </div>

        {/* Navbar */}
        <Navbar />
        
        {/* Main content (Hero section) */}
        <HomeContent />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}