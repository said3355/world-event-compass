
import React, { useState } from 'react';
import { Download, Database, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface NewsRecord {
  id: number;
  title: string;
  summary: string;
  category: string;
  timestamp: string;
  source: string;
  urgency: string;
  region: string;
  tags: string;
  views: number;
  shares: number;
}

const DataGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [recordCount, setRecordCount] = useState(100000);

  const newsTitles = [
    "Breaking: Major Political Development in Washington",
    "Economic Markets Show Strong Recovery Signs",
    "International Summit Addresses Climate Change",
    "Technology Breakthrough Announced by Leading Company",
    "Healthcare Reform Passes Congressional Vote",
    "Trade Agreement Signed Between Major Nations",
    "Military Exercise Conducted in Strategic Region",
    "Educational Policy Reform Implemented Nationwide",
    "Infrastructure Investment Plan Approved",
    "Diplomatic Relations Strengthened Between Countries",
    "Energy Policy Changes Affect Global Markets",
    "Social Media Platform Announces New Privacy Features",
    "Space Exploration Mission Launches Successfully",
    "Environmental Protection Measures Introduced",
    "Financial Sector Regulation Updates Released"
  ];

  const categories = ["Political", "Economic", "Social", "Regional", "Technology", "Health", "Environment"];
  const sources = ["Reuters", "AP News", "BBC News", "Bloomberg", "CNN", "Al Jazeera", "Jerusalem Post", "Washington Post"];
  const urgencyLevels = ["low", "medium", "high"];
  const regions = ["North America", "Middle East", "Europe", "Asia", "Africa", "South America"];

  const generateRandomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime).toISOString().split('T')[0];
  };

  const generateNewsRecord = (id: number): NewsRecord => {
    const title = newsTitles[Math.floor(Math.random() * newsTitles.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const source = sources[Math.floor(Math.random() * sources.length)];
    const urgency = urgencyLevels[Math.floor(Math.random() * urgencyLevels.length)];
    const region = regions[Math.floor(Math.random() * regions.length)];
    
    return {
      id,
      title: `${title} ${id}`,
      summary: `Detailed summary of news event ${id} covering important developments in ${category.toLowerCase()} sector.`,
      category,
      timestamp: generateRandomDate(),
      source,
      urgency,
      region,
      tags: `${category.toLowerCase()},${region.toLowerCase().replace(' ', '-')},breaking-news`,
      views: Math.floor(Math.random() * 100000) + 1000,
      shares: Math.floor(Math.random() * 10000) + 100
    };
  };

  const generateCSV = (records: NewsRecord[]): string => {
    const headers = ['ID', 'Title', 'Summary', 'Category', 'Date', 'Source', 'Urgency', 'Region', 'Tags', 'Views', 'Shares'];
    const csvContent = [
      headers.join(','),
      ...records.map(record => [
        record.id,
        `"${record.title.replace(/"/g, '""')}"`,
        `"${record.summary.replace(/"/g, '""')}"`,
        record.category,
        record.timestamp,
        record.source,
        record.urgency,
        record.region,
        record.tags,
        record.views,
        record.shares
      ].join(','))
    ].join('\n');

    return csvContent;
  };

  const downloadCSV = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    try {
      console.log(`Generating ${recordCount} news records...`);
      const records: NewsRecord[] = [];
      
      // Generate records in batches to avoid blocking the UI
      const batchSize = 10000;
      const totalBatches = Math.ceil(recordCount / batchSize);
      
      for (let batch = 0; batch < totalBatches; batch++) {
        const startId = batch * batchSize + 1;
        const endId = Math.min((batch + 1) * batchSize, recordCount);
        
        for (let i = startId; i <= endId; i++) {
          records.push(generateNewsRecord(i));
        }
        
        // Small delay to prevent freezing
        if (batch < totalBatches - 1) {
          await new Promise(resolve => setTimeout(resolve, 10));
        }
      }
      
      console.log('Converting to CSV format...');
      const csvContent = generateCSV(records);
      
      const filename = `world_news_data_${recordCount}_${new Date().toISOString().split('T')[0]}.csv`;
      downloadCSV(csvContent, filename);
      
      console.log(`Successfully generated and downloaded ${recordCount} records!`);
    } catch (error) {
      console.error('Error generating CSV:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-600" />
          World News Data Generator
        </CardTitle>
        <CardDescription>
          Generate comprehensive CSV datasets of world news and events for analysis
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Dataset Features</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Complete news records with titles, summaries, and metadata</li>
                <li>• Multiple categories: Political, Economic, Social, Regional</li>
                <li>• Global sources: Reuters, BBC, Bloomberg, Al Jazeera, etc.</li>
                <li>• Geographic regions and engagement metrics</li>
                <li>• Date range: 2020 to present</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Number of Records
          </label>
          <select 
            value={recordCount} 
            onChange={(e) => setRecordCount(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isGenerating}
          >
            <option value={1000}>1,000 records</option>
            <option value={10000}>10,000 records</option>
            <option value={50000}>50,000 records</option>
            <option value={100000}>100,000 records</option>
            <option value={500000}>500,000 records</option>
          </select>
        </div>

        <Button 
          onClick={handleGenerate} 
          disabled={isGenerating}
          className="w-full"
          size="lg"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Generating {recordCount.toLocaleString()} records...
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Generate & Download CSV ({recordCount.toLocaleString()} records)
            </>
          )}
        </Button>

        <div className="text-xs text-gray-500 text-center">
          File will be saved as: world_news_data_{recordCount}_{new Date().toISOString().split('T')[0]}.csv
        </div>
      </CardContent>
    </Card>
  );
};

export default DataGenerator;
