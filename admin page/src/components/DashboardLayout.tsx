
import { AdminSidebar } from './AdminSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <main className="ml-64 p-6">
        {children}
      </main>
    </div>
  );
}
