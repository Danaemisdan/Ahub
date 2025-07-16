
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Users, Search, BookOpen, Trophy, Clock } from 'lucide-react';

const allStudentsData = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    status: 'active',
    coursesEnrolled: 3,
    coursesCompleted: 2,
    totalScore: 945,
    lastActivity: '2 hours ago',
    recentActivity: 'Completed Quiz: React Fundamentals'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    status: 'active',
    coursesEnrolled: 2,
    coursesCompleted: 1,
    totalScore: 892,
    lastActivity: '1 day ago',
    recentActivity: 'Watched Video: Advanced JavaScript'
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol@example.com',
    status: 'inactive',
    coursesEnrolled: 4,
    coursesCompleted: 3,
    totalScore: 867,
    lastActivity: '1 week ago',
    recentActivity: 'Started Course: CSS Grid Layout'
  },
  {
    id: 4,
    name: 'David Wilson',
    email: 'david@example.com',
    status: 'active',
    coursesEnrolled: 2,
    coursesCompleted: 1,
    totalScore: 834,
    lastActivity: '3 hours ago',
    recentActivity: 'Submitted Assignment: Node.js Project'
  },
  {
    id: 5,
    name: 'Eva Martinez',
    email: 'eva@example.com',
    status: 'inactive',
    coursesEnrolled: 1,
    coursesCompleted: 0,
    totalScore: 821,
    lastActivity: '2 weeks ago',
    recentActivity: 'Logged in to platform'
  },
];

export function ViewAllStudents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredStudents = allStudentsData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalStudents = allStudentsData.length;
  const activeStudents = allStudentsData.filter(s => s.status === 'active').length;
  const totalCourses = allStudentsData.reduce((sum, s) => sum + s.coursesEnrolled, 0);
  const averageScore = Math.round(allStudentsData.reduce((sum, s) => sum + s.totalScore, 0) / totalStudents);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">View All Student Activity</h1>
        <p className="text-muted-foreground">Comprehensive overview of all students and their activities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{totalStudents}</p>
                <p className="text-sm text-muted-foreground">Total Students</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold">{activeStudents}</p>
                <p className="text-sm text-muted-foreground">Active Students</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">{totalCourses}</p>
                <p className="text-sm text-muted-foreground">Total Enrollments</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">{averageScore}</p>
                <p className="text-sm text-muted-foreground">Avg. Score</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Student Directory
          </CardTitle>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1 rounded text-sm ${statusFilter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
              >
                All
              </button>
              <button
                onClick={() => setStatusFilter('active')}
                className={`px-3 py-1 rounded text-sm ${statusFilter === 'active' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
              >
                Active
              </button>
              <button
                onClick={() => setStatusFilter('inactive')}
                className={`px-3 py-1 rounded text-sm ${statusFilter === 'inactive' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
              >
                Inactive
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredStudents.map((student) => (
              <div key={student.id} className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">{student.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                      {student.status}
                    </Badge>
                    <span className="text-lg font-bold text-primary">{student.totalScore}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    <span>{student.coursesEnrolled} enrolled</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="h-4 w-4 text-green-500" />
                    <span>{student.coursesCompleted} completed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-purple-500" />
                    <span>{student.lastActivity}</span>
                  </div>
                </div>
                
                <div className="p-3 rounded bg-primary/5 border border-primary/10">
                  <p className="text-sm text-muted-foreground mb-1">Recent Activity:</p>
                  <p className="text-sm font-medium">{student.recentActivity}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
