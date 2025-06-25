
import React from 'react';
import Header from '../components/Header';
import DataGenerator from '../components/DataGenerator';
import { Database, BarChart3, FileText } from 'lucide-react';

const DataTools = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Database className="w-16 h-16 mx-auto mb-4 text-purple-200" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Data Tools
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Generate comprehensive datasets for news analysis, research, and business intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Analytics Ready</h3>
            <p className="text-gray-600">CSV format optimized for data analysis tools and business intelligence platforms</p>
          </div>
          <div className="text-center">
            <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Comprehensive Data</h3>
            <p className="text-gray-600">Complete news records with metadata, engagement metrics, and geographic information</p>
          </div>
          <div className="text-center">
            <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Scalable Generation</h3>
            <p className="text-gray-600">Generate from 1,000 to 500,000 records based on your analysis needs</p>
          </div>
        </div>

        <DataGenerator />
      </div>
    </div>
  );
};

export default DataTools;
