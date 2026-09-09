import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="w-full min-h-[85vh] md:min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-center items-center py-16 md:py-24 px-4 sm:px-6 lg:px-8" data-component-name="HERO 4" data-sidebar-id="Hero-3" style={{ position: 'relative', zIndex: '10' }}>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center" >
    {/*  Content Section  */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6" style={{ '--dark-color': '#ef4444' }}>
        Unlock Your Potential with <span className="text-indigo-600 dark:text-indigo-400" >Innovative Solutions</span>
      </h1>
      <p className="text-lg sm:text-xl mb-8 max-w-lg" style={{ '--light-color': '#f59e0b', '--dark-color': '#06b6d4' }}>
        Empower your business with cutting-edge technology and seamless experiences, designed for growth and efficiency.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-950 transition ease-in-out duration-300">
          Get Started
        </a>
        <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-red-300 dark:border-slate-700 text-base font-medium rounded-md shadow-sm text-slate-700 dark:text-slate-300 bg-red-600 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-950 transition ease-in-out duration-300">
          Learn More
        </a>
      </div>
    </div>

    {/*  Image Section  */}
    <div className="flex justify-center md:justify-end" >
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&amp;fit=crop&amp;w=1200&amp;q=80" alt="Modern workspace with laptop and creative tools" className="w-full h-auto max-h-[450px] object-cover rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-indigo-900/20 editor-drop-ping" style={{ position: 'relative', left: '-1px', top: '-64px' }} />
    </div>
  </div>
</section>
    </>
  );
};

export default Home;