
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  ArrowRight,
  GraduationCap,
  TrendingUp
} from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import { AdminSidebar } from '@/components/AdminSidebar';

const dashboardFeatures = [
  { title: 'Student Activity', icon: Activity, url: '/student-activity', description: 'Monitor detailed student progress and actions' },
  { title: 'Leaderboard', icon: Trophy, url: '/leaderboard', description: 'View top-performing students rankings' },
  { title: 'Upload Videos', icon: Upload, url: '/upload-videos', description: 'Manage course video content' },
  { title: 'Deactivate Students', icon: UserX, url: '/deactivate-students', description: 'Control student account access' },
  { title: 'Delete Course', icon: Trash2, url: '/delete-course', description: 'Remove courses from platform' },
  { title: 'Add Course Title', icon: BookOpen, url: '/add-course', description: 'Create new courses with metadata' },
  { title: 'Add Quiz', icon: FileQuestion, url: '/add-quiz', description: 'Build interactive quizzes' },
  { title: 'Live Section', icon: Radio, url: '/live-section', description: 'Manage live broadcasts and sessions' },
  { title: 'Add Marks', icon: UserCheck, url: '/add-marks', description: 'Assign grades to students' },
  { title: 'View All Students', icon: Users, url: '/all-students', description: 'Comprehensive student overview' },
];

const chartData = [
  { month: 'Jan', students: 186, courses: 8 },
  { month: 'Feb', students: 205, courses: 12 },
  { month: 'Mar', students: 237, courses: 15 },
  { month: 'Apr', students: 273, courses: 18 },
  { month: 'May', students: 209, courses: 14 },
  { month: 'Jun', students: 247, courses: 15 },
];

const chartConfig = {
  students: {
    label: "Students",
    color: "hsl(var(--primary))",
  },
  courses: {
    label: "Courses",
    color: "hsl(var(--accent))",
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <main className="ml-64 p-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive educational management system with powerful tools for student tracking, 
              course management, and real-time analytics.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-3xl font-bold">247</p>
                    <p className="text-muted-foreground">Total Students</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-blue-500" />
                  <div>
                    <p className="text-3xl font-bold">15</p>
                    <p className="text-muted-foreground">Active Courses</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Radio className="h-8 w-8 text-red-500" />
                  <div>
                    <p className="text-3xl font-bold">3</p>
                    <p className="text-muted-foreground">Live Sessions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Trophy className="h-8 w-8 text-yellow-500" />
                  <div>
                    <p className="text-3xl font-bold">89%</p>
                    <p className="text-muted-foreground">Avg. Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Chart */}
          <div className="mb-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Student & Course Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="students" fill="var(--color-students)" />
                      <Bar dataKey="courses" fill="var(--color-courses)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Dashboard Features */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Dashboard Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dashboardFeatures.map((feature) => (
                <Card key={feature.title} className="glass-card group hover:border-primary/20 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <Link to={feature.url}>
                      <Button className="w-full group-hover:golden-gradient transition-all duration-300">
                        Access Feature
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-center">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/student-activity">
                  <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                    <Activity className="h-4 w-4 mr-2" />
                    View Activity
                  </Button>
                </Link>
                <Link to="/add-course">
                  <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Add Course
                  </Button>
                </Link>
                <Link to="/live-section">
                  <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                    <Radio className="h-4 w-4 mr-2" />
                    Go Live
                  </Button>
                </Link>
                <Link to="/leaderboard">
                  <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                    <Trophy className="h-4 w-4 mr-2" />
                    Leaderboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
