import { ReactNode } from 'react';
import { 
  Sun, Home, Calendar, Megaphone, Lightbulb, Folder, BarChart2, 
  Edit3, Rocket, Flame, Settings, LogOut
} from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
  activeTab?: string;
  onNavigate?: (tabId: string) => void;
}

export default function DashboardLayout({ children, activeTab = 'calendar', onNavigate }: DashboardLayoutProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'calendar', label: 'Content Calendar', icon: Calendar },
    { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
    { id: 'ideas', label: 'Ideas & Inspiration', icon: Lightbulb },
    { id: 'library', label: 'Content Library', icon: Folder },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
  ];

  const quickActions = [
    { id: 'campaign', label: 'Create Campaign', icon: Rocket },
    { id: 'post', label: 'Generate Post', icon: Edit3 },
    { id: 'viral', label: 'Find Viral Ideas', icon: Flame },
  ];

  const handleQuickAction = (id: string) => {
    if (!onNavigate) return;
    if (id === 'campaign') onNavigate('calendar');
    else if (id === 'viral') onNavigate('ideas');
    else if (id === 'post') onNavigate('post');
    else onNavigate(id);
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between flex-shrink-0">
        <div>
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">SUNNY</span>
            </div>
          </div>

          {/* Main Navigation */}
          <nav aria-label="Main Navigation" className="px-4 py-6 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate && onNavigate(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-yellow-50 text-yellow-600' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-yellow-500' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <nav aria-label="Quick Actions" className="px-4 py-2">
            <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Quick Actions
            </h3>
            <div className="space-y-1">
              {quickActions.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleQuickAction(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-slate-100 text-slate-900' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-slate-400" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-4 border-t border-slate-100 space-y-2">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
            <Settings className="w-5 h-5 text-slate-400" />
            Settings
          </button>
          <button 
            onClick={() => onNavigate && onNavigate('signup')}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5 text-slate-400 group-hover:text-red-500" />
            Sign Out
          </button>
          
          <div className="flex items-center gap-3 px-3 py-2 mt-2">
            <img 
              src="https://picsum.photos/seed/sarah/100/100" 
              alt="Sarah Marketing" 
              className="w-8 h-8 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">Sarah Marketing</p>
              <p className="text-xs text-slate-500 truncate">Pro Plan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
