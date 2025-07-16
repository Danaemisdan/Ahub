
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, AlertTriangle, BookOpen, Users, Calendar } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const coursesData = [
  { id: 1, title: 'React Fundamentals', students: 45, status: 'active', created: '2024-01-15' },
  { id: 2, title: 'Advanced JavaScript', students: 32, status: 'active', created: '2024-02-20' },
  { id: 3, title: 'CSS Grid Layout', students: 28, status: 'draft', created: '2024-03-10' },
  { id: 4, title: 'Node.js Backend', students: 18, status: 'active', created: '2024-03-25' },
  { id: 5, title: 'Database Design', students: 12, status: 'inactive', created: '2024-04-01' },
];

export function DeleteCourse() {
  const [courses, setCourses] = useState(coursesData);

  const handleDeleteCourse = (id: number) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Delete Course</h1>
        <p className="text-muted-foreground">Manage and remove courses from the platform</p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Course Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{course.title}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {course.students} students
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {course.created}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={
                    course.status === 'active' ? 'default' : 
                    course.status === 'draft' ? 'secondary' : 'outline'
                  }>
                    {course.status}
                  </Badge>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-destructive" />
                          <AlertDialogTitle>Delete Course</AlertDialogTitle>
                        </div>
                        <AlertDialogDescription>
                          Are you sure you want to delete "{course.title}"? This action cannot be undone. 
                          All student progress and data associated with this course will be permanently removed.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction 
                          onClick={() => handleDeleteCourse(course.id)}
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                          Delete Course
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
