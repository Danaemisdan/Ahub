
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Save, Play, Pause, Menu, X, BookOpen, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Classroom = () => {
  const { toast } = useToast();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [notes, setNotes] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const lessons = [
    {
      id: 1,
      title: "Introduction to Animation Principles",
      duration: "15:32",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "Learn the fundamental principles that make great animation"
    },
    {
      id: 2,
      title: "Timing and Spacing Basics",
      duration: "22:15",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      description: "Master the art of timing and spacing in animation"
    },
    {
      id: 3,
      title: "Character Movement Fundamentals",
      duration: "18:45",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "Bring characters to life with natural movement"
    },
    {
      id: 4,
      title: "Keyframe Animation Techniques",
      duration: "25:30",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      description: "Advanced keyframe techniques for smooth animation"
    },
    {
      id: 5,
      title: "Secondary Animation & Follow Through",
      duration: "19:20",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "Add realism with secondary animation principles"
    },
    {
      id: 6,
      title: "Facial Animation Essentials",
      duration: "21:10",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      description: "Create expressive facial animations"
    }
  ];

  // Load notes from localStorage when lesson changes
  useEffect(() => {
    const savedNotes = localStorage.getItem(`lesson-${currentLesson}-notes`);
    setNotes(savedNotes || '');
  }, [currentLesson]);

  const handleSaveNote = () => {
    localStorage.setItem(`lesson-${currentLesson}-notes`, notes);
    toast({
      title: "Note Saved!",
      description: "Your note has been saved successfully.",
    });
  };

  const nextLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const previousLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  const togglePlay = () => {
    const video = document.getElementById('lesson-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden bg-white/10 backdrop-blur-sm border-r border-white/20`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-yellow-400" />
              Course Lessons
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="text-white hover:text-yellow-400 lg:hidden"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
            {lessons.map((lesson, index) => (
              <Card
                key={lesson.id}
                className={`cursor-pointer transition-all duration-200 ${
                  currentLesson === index
                    ? 'bg-yellow-500/20 border-yellow-400 text-white'
                    : 'bg-white/5 border-white/10 text-blue-200 hover:bg-white/10'
                }`}
                onClick={() => setCurrentLesson(index)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-sm leading-tight">{lesson.title}</h3>
                    <span className="text-xs opacity-70 ml-2 flex-shrink-0">{lesson.duration}</span>
                  </div>
                  <p className="text-xs opacity-70 line-clamp-2">{lesson.description}</p>
                  {currentLesson === index && (
                    <div className="mt-2 flex items-center text-yellow-400">
                      <Play className="w-3 h-3 mr-1" />
                      <span className="text-xs">Now Playing</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white/10 backdrop-blur-sm border-b border-white/20 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {!sidebarOpen && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(true)}
                  className="text-white hover:text-yellow-400"
                >
                  <Menu className="w-4 h-4" />
                </Button>
              )}
              <div>
                <h1 className="text-xl font-bold text-white">Professional 2D Animation</h1>
                <p className="text-blue-200 text-sm">Lesson {currentLesson + 1} of {lessons.length}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.close()}
              className="text-white hover:text-yellow-400"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </header>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Video Section */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-0">
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <video
                    id="lesson-video"
                    className="w-full aspect-video"
                    controls
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src={lessons[currentLesson].videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </CardContent>
            </Card>

            {/* Lesson Info */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{lessons[currentLesson].title}</span>
                  <span className="text-sm text-yellow-400">{lessons[currentLesson].duration}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 mb-4">{lessons[currentLesson].description}</p>
                
                {/* Navigation Buttons */}
                <div className="flex justify-between items-center">
                  <Button
                    onClick={previousLesson}
                    disabled={currentLesson === 0}
                    className="bg-blue-800 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  <Button
                    onClick={togglePlay}
                    className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-blue-900"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    {isPlaying ? 'Pause' : 'Play'}
                  </Button>

                  <Button
                    onClick={nextLesson}
                    disabled={currentLesson === lessons.length - 1}
                    className="bg-blue-800 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notes Section */}
          <div className="space-y-4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-yellow-400" />
                  Lesson Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Take notes about this lesson..."
                  className="flex-1 bg-white/5 border-white/20 text-white placeholder-blue-300 resize-none min-h-[300px]"
                />
                <Button
                  onClick={handleSaveNote}
                  className="mt-4 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-blue-900"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Note
                </Button>
                <p className="text-xs text-blue-300 mt-2 text-center">
                  Notes are automatically saved per lesson
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classroom;
