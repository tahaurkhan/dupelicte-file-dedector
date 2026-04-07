/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Scan from './pages/Scan';
import Results from './pages/Results';
import Explorer from './pages/Explorer';
import Settings from './pages/Settings';
import About from './pages/About';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('dashboard');

  const renderContent = () => {
    switch (currentRoute) {
      case 'dashboard':
        return <Dashboard />;
      case 'scan':
        return <Scan />;
      case 'results':
        return <Results />;
      case 'explorer':
        return <Explorer />;
      case 'settings':
        return <Settings />;
      case 'about':
        return <About />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      <Sidebar currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar currentRoute={currentRoute} />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
