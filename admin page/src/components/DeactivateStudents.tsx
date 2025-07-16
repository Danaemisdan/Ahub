
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { UserX, Search, User } from 'lucide-react';

const studentsData = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', status: 'active', lastLogin: '2 hours ago' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', status: 'active', lastLogin: '1 day ago' },
  { id: 3, name: 'Carol Davis', email: 'carol@example.com', status: 'inactive', lastLogin: '1 week ago' },
  { id: 4, name: 'David Wilson', email: 'david@example.com', status: 'active', lastLogin: '3 hours ago' },
  { id: 5, name: 'Eva Martinez', email: 'eva@example.com', status: 'inactive', lastLogin: '2 weeks ago' },
];

export function DeactivateStudents() {
  const [students, setStudents] = useState(studentsData);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleStudentStatus = (id: number) => {
    setStudents(students.map(student => 
      student.id === id 
        ? { ...student, status: student.status === 'active' ? 'inactive' : 'active' }
        : student
    ));
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Deactivate Students</h1>
        <p className="text-muted-foreground">Manage student account status and access permissions</p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserX className="h-5 w-5 text-primary" />
            Student Management
          </CardTitle>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredStudents.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">{student.email}</p>
                    <p className="text-xs text-muted-foreground">Last login: {student.lastLogin}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                    {student.status}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Active</span>
                    <Switch
                      checked={student.status === 'active'}
                      onCheckedChange={() => toggleStudentStatus(student.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
