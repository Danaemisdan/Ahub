
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Activity,
  Trophy,
  Upload,
  UserX,
  Trash2,
  BookOpen,
  FileQuestion,
  Radio,
  UserCheck,
  Users,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const sidebarItems = [
  { title: 'Student Activity', url: '/student-activity', icon: Activity },
  { title: 'Leaderboard', url: '/leaderboard', icon: Trophy },
  { title: 'Upload Videos', url: '/upload-videos', icon: Upload },
  { title: 'Deactivate Students', url: '/deactivate-students', icon: UserX },
  { title: 'Delete Course', url: '/delete-course', icon: Trash2 },
  { title: 'Add Course Title', url: '/add-course', icon: BookOpen },
  { title: 'Add Quiz', url: '/add-quiz', icon: FileQuestion },
  { title: 'Live Section', url: '/live-section', icon: Radio },
  { title: 'Add Marks', url: '/add-marks', icon: UserCheck },
  { title: 'View All Students', url: '/all-students', icon: Users },
];

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-sidebar-background border-r border-sidebar-border transition-all duration-300 z-50",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Admin Panel
            </h2>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="text-sidebar-foreground hover:text-primary"
          >
            {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <nav className="p-2">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <NavLink
              key={item.title}
              to={item.url}
              className={cn(
                "flex items-center gap-3 px-3 py-2 mb-1 rounded-lg transition-all duration-200 group",
                isActive 
                  ? "bg-primary text-primary-foreground font-medium" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-primary"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && (
                <span className="text-sm truncate">{item.title}</span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
