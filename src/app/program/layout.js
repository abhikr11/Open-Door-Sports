
'use client';

import React from 'react';

import { Navbar } from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

export default function ProgramLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <main >
        {children}
      </main> 
      <Footer/>
    </div>
  );
}
