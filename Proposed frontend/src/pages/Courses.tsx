
import { ArrowLeft, BookOpen, Clock, Users, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  const allCourses = [
    {
      id: 1,
      title: "Professional 2D Animation Fundamentals",
      description: "Master the principles of 2D animation with industry-standard techniques and tools.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
      duration: "8 weeks",
      lessons: 24,
      students: 1250,
      rating: 4.9,
      instructor: "Sarah Chen",
      level: "Beginner",
      category: "2D Animation",
      enrolled: true
    },
    {
      id: 2,
      title: "Character Design & Animation",
      description: "Learn to create compelling characters and bring them to life through animation.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      duration: "6 weeks",
      lessons: 18,
      students: 890,
      rating: 4.8,
      instructor: "Mike Rodriguez",
      level: "Intermediate",
      category: "Character Design",
      enrolled: true
    },
    {
      id: 3,
      title: "Motion Graphics & Visual Effects",
      description: "Advanced techniques for creating stunning motion graphics and visual effects.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
      duration: "10 weeks",
      lessons: 30,
      students: 650,
      rating: 4.9,
      instructor: "Emma Thompson",
      level: "Advanced",
      category: "Motion Graphics",
      enrolled: true
    },
    {
      id: 4,
      title: "3D Animation Basics",
      description: "Introduction to 3D animation concepts and workflow using industry-standard software.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      duration: "12 weeks",
      lessons: 36,
      students: 450,
      rating: 4.7,
      instructor: "David Park",
      level: "Beginner",
      category: "3D Animation",
      enrolled: false
    },
    {
      id: 5,
      title: "Storyboarding for Animation",
      description: "Learn the art of visual storytelling through effective storyboard creation.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      duration: "4 weeks",
      lessons: 12,
      students: 320,
      rating: 4.6,
      instructor: "Lisa Wang",
      level: "Beginner",
      category: "Pre-production",
      enrolled: false
    },
    {
      id: 6,
      title: "Advanced Character Rigging",
      description: "Master complex character rigging techniques for professional animation workflows.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      duration: "8 weeks",
      lessons: 28,
      students: 180,
      rating: 4.8,
      instructor: "Alex Kim",
      level: "Advanced",
      category: "3D Animation",
      enrolled: false
    }
  ];

  const categories = ["All", "2D Animation", "3D Animation", "Character Design", "Motion Graphics", "Pre-production"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-500/80 text-white";
      case "Intermediate": return "bg-yellow-500/80 text-blue-900";
      case "Advanced": return "bg-red-500/80 text-white";
      default: return "bg-blue-500/80 text-white";
    }
  };

  const handleEnrollCourse = (courseId: number) => {
    console.log(`Enrolling in course ${courseId}`);
    // Here you would typically handle enrollment logic
  };

  const handleEnterClassroom = (courseId: number) => {
    window.open(`/classroom?course=${courseId}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button
              onClick={() => navigate('/')}
              className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/25 mr-4"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-3xl font-bold text-white">All Courses</h1>
          </div>
          <Button className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/25">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/20 backdrop-blur-md border-white/30 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{allCourses.length}</div>
              <div className="text-sm text-blue-100">Total Courses</div>
            </CardContent>
          </Card>
          <Card className="bg-white/20 backdrop-blur-md border-white/30 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{allCourses.filter(c => c.enrolled).length}</div>
              <div className="text-sm text-blue-100">Enrolled</div>
            </CardContent>
          </Card>
          <Card className="bg-white/20 backdrop-blur-md border-white/30 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{categories.length - 1}</div>
              <div className="text-sm text-blue-100">Categories</div>
            </CardContent>
          </Card>
          <Card className="bg-white/20 backdrop-blur-md border-white/30 text-white">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{allCourses.reduce((acc, course) => acc + course.students, 0)}</div>
              <div className="text-sm text-blue-100">Total Students</div>
            </CardContent>
          </Card>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map((course) => (
            <Card key={course.id} className="group bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/25 transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-yellow-500/90 backdrop-blur-sm text-blue-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  {course.rating}
                </div>
                <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${getLevelColor(course.level)}`}>
                  {course.level}
                </div>
                {course.enrolled && (
                  <div className="absolute bottom-2 left-2 bg-green-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Enrolled
                  </div>
                )}
              </div>
              <CardHeader className="text-white p-4">
                <div className="text-xs text-yellow-400 mb-1">{course.category}</div>
                <CardTitle className="text-lg mb-2 line-clamp-2">{course.title}</CardTitle>
                <CardDescription className="text-blue-100 text-sm line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white p-4 pt-0">
                <div className="flex items-center justify-between text-xs text-blue-100 mb-4">
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="w-3 h-3 mr-1" />
                    {course.lessons}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {course.students}
                  </span>
                </div>
                
                {course.enrolled ? (
                  <Button 
                    onClick={() => handleEnterClassroom(course.id)}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-blue-900 font-semibold py-2 px-3 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm"
                  >
                    Continue Learning
                  </Button>
                ) : (
                  <Button 
                    onClick={() => handleEnrollCourse(course.id)}
                    className="w-full bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/25 font-semibold py-2 px-3 rounded-lg transition-all duration-200 text-sm"
                  >
                    Enroll Now
                  </Button>
                )}
                <p className="text-xs text-blue-200 mt-2 text-center">
                  Instructor: {course.instructor}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
