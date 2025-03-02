
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, ScrollText, FileCheck } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <header className="py-6 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold text-purple-800">MedDoc Viewer</h2>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#features" className="text-gray-700 hover:text-purple-700 transition">Features</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-purple-700 transition">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Modern <span className="text-purple-700">Medical</span> Document Viewer
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A sophisticated platform designed for healthcare professionals to view, manage, and summarize medical documents with powerful tools and elegant interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/document-viewer" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg text-lg font-medium transition-all hover:from-purple-700 hover:to-purple-900 hover:shadow-xl shadow-md"
              >
                Open Document Viewer
                <ArrowRight size={20} />
              </Link>
              <a 
                href="#features" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-700 border border-purple-200 rounded-lg text-lg font-medium transition-all hover:bg-purple-50 shadow-sm"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="w-full max-w-md h-96 bg-white rounded-2xl shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-4/5 h-4/5">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
                    <ScrollText size={36} className="text-purple-600 mb-3" />
                    <span className="text-sm font-medium text-gray-700">Track Documents</span>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
                    <FileText size={36} className="text-purple-600 mb-3" />
                    <span className="text-sm font-medium text-gray-700">View Reports</span>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
                    <FileCheck size={36} className="text-purple-600 mb-3" />
                    <span className="text-sm font-medium text-gray-700">Create Summaries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="features" className="py-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <ScrollText size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Document Management</h3>
              <p className="text-gray-600">
                Efficiently track and manage all your medical reports and clinical documents in one centralized location.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <FileText size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">PDF Viewer</h3>
              <p className="text-gray-600">
                Advanced PDF viewing with zoom, rotate, and navigation controls for detailed document examination.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <FileCheck size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Summary Creation</h3>
              <p className="text-gray-600">
                Create customized summaries with rich text formatting to highlight important information from documents.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MedDoc Viewer</h3>
              <p className="text-gray-400">
                Advanced document management for healthcare professionals.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><Link to="/document-viewer" className="text-gray-400 hover:text-white transition">Document Viewer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@meddocviewer.com<br />
                (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} MedDoc Viewer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
