
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function AddCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    console.log('Creating course:', { title, description, category, duration, difficulty });
    
    toast({
      title: "Success",
      description: "Course created successfully!",
    });

    // Reset form
    setTitle('');
    setDescription('');
    setCategory('');
    setDuration('');
    setDifficulty('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Add Course Title</h1>
        <p className="text-muted-foreground">Create new courses with titles and metadata</p>
      </div>

      <Card className="glass-card max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Course Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="course-title">Course Title *</Label>
              <Input
                id="course-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter course title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="course-description">Description *</Label>
              <Textarea
                id="course-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter course description"
                rows={4}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="course-category">Category *</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="mobile-development">Mobile Development</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course-duration">Duration (hours)</Label>
                <Input
                  id="course-duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g., 20"
                  type="number"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="course-difficulty">Difficulty Level</Label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full golden-gradient text-primary-foreground">
              <Plus className="h-4 w-4 mr-2" />
              Create Course
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
