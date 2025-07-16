
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Play, Trash2, Edit } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const existingVideos = [
  { id: 1, title: 'React Fundamentals', duration: '45:30', size: '125 MB', status: 'published' },
  { id: 2, title: 'Advanced JavaScript', duration: '62:15', size: '180 MB', status: 'draft' },
  { id: 3, title: 'CSS Grid Layout', duration: '38:45', size: '95 MB', status: 'published' },
];

export function UploadVideos() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleUpload = () => {
    console.log('Uploading video:', { title, description, category });
    // Reset form
    setTitle('');
    setDescription('');
    setCategory('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Upload Videos</h1>
        <p className="text-muted-foreground">Manage course video content and uploads</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              Upload New Video
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="video-title">Video Title</Label>
              <Input 
                id="video-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter video title"
              />
            </div>
            <div>
              <Label htmlFor="video-description">Description</Label>
              <Textarea 
                id="video-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter video description"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="video-category">Category</Label>
              <Input 
                id="video-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter category"
              />
            </div>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">Drag and drop your video file here</p>
              <p className="text-sm text-muted-foreground mb-4">or click to browse</p>
              <Button variant="outline">Choose File</Button>
            </div>
            <Button onClick={handleUpload} className="w-full golden-gradient text-primary-foreground">
              Upload Video
            </Button>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-primary" />
              Existing Videos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {existingVideos.map((video) => (
                <div key={video.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div>
                    <h4 className="font-medium text-foreground">{video.title}</h4>
                    <p className="text-sm text-muted-foreground">{video.duration} • {video.size}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={video.status === 'published' ? 'default' : 'secondary'}>
                      {video.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
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
