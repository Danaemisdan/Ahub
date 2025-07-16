import { Play, BookOpen, Users, Clock, Star, Home, Settings, User, BarChart3 } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const navItems = [
  { title: "Dashboard", icon: Home, isActive: true },
  { title: "My Courses", icon: BookOpen },
  { title: "Progress", icon: BarChart3 },
  { title: "Settings", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-white/10 bg-blue-950">
      <SidebarHeader className="p-6 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center">
            <Play className="w-6 h-6 text-blue-900" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AnimationHub</h1>
            <p className="text-blue-200 text-xs">Professional Animation Academy</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-transparent">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    isActive={item.isActive}
                    className="text-white hover:bg-white/10 data-[active=true]:bg-yellow-500/20 data-[active=true]:text-yellow-400"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-white/10">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-white hover:bg-white/10">
              <User className="w-5 h-5" />
              <span>Alex Johnson</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
