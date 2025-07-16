
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserCheck, Search, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const studentsData = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', currentMarks: 85 },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', currentMarks: 78 },
  { id: 3, name: 'Carol Davis', email: 'carol@example.com', currentMarks: 92 },
  { id: 4, name: 'David Wilson', email: 'david@example.com', currentMarks: 67 },
  { id: 5, name: 'Eva Martinez', email: 'eva@example.com', currentMarks: 89 },
];

const courses = [
  'React Fundamentals',
  'Advanced JavaScript',
  'CSS Grid Layout',
  'Node.js Backend',
  'Database Design'
];

const assessmentTypes = [
  'Quiz',
  'Assignment',
  'Project',
  'Exam',
  'Participation'
];

export function AddMarks() {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [assessmentType, setAssessmentType] = useState('');
  const [marks, setMarks] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedStudent || !selectedCourse || !assessmentType || !marks || !totalMarks) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    const percentage = (parseInt(marks) / parseInt(totalMarks)) * 100;
    
    console.log('Adding marks:', {
      student: selectedStudent,
      course: selectedCourse,
      assessmentType,
      marks: `${marks}/${totalMarks}`,
      percentage: percentage.toFixed(1)
    });

    toast({
      title: "Success",
      description: `Marks added successfully! Score: ${marks}/${totalMarks} (${percentage.toFixed(1)}%)`,
    });

    // Reset form
    setSelectedStudent('');
    setSelectedCourse('');
    setAssessmentType('');
    setMarks('');
    setTotalMarks('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Add Marks</h1>
        <p className="text-muted-foreground">Assign and update marks for individual students</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-primary" />
              Add Student Marks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="student-search">Search Student</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="student-search"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Select Student</Label>
                <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a student" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredStudents.map((student) => (
                      <SelectItem key={student.id} value={student.name}>
                        {student.name} - {student.email}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Course</Label>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Assessment Type</Label>
                <Select value={assessmentType} onValueChange={setAssessmentType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select assessment type" />
                  </SelectTrigger>
                  <SelectContent>
                    {assessmentTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="marks">Marks Obtained</Label>
                  <Input
                    id="marks"
                    type="number"
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)}
                    placeholder="e.g., 85"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="total-marks">Total Marks</Label>
                  <Input
                    id="total-marks"
                    type="number"
                    value={totalMarks}
                    onChange={(e) => setTotalMarks(e.target.value)}
                    placeholder="e.g., 100"
                    min="1"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full golden-gradient text-primary-foreground">
                <Save className="h-4 w-4 mr-2" />
                Save Marks
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Student Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {studentsData.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div>
                    <h4 className="font-medium text-foreground">{student.name}</h4>
                    <p className="text-sm text-muted-foreground">{student.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{student.currentMarks}%</p>
                    <p className="text-xs text-muted-foreground">Average</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
