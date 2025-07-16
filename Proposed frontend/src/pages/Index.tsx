import { useState } from 'react';
import { Play, BookOpen, Users, Clock, Star, Trophy, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      id: 1,
      title: "Professional 2D Animation Fundamentals",
      description: "Master the principles of 2D animation with industry-standard techniques.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
      duration: "8 weeks",
      lessons: 24,
      students: 1250,
      rating: 4.9,
      instructor: "Sarah Chen"
    },
    {
      id: 2,
      title: "Character Design & Animation",
      description: "Learn to create compelling characters and bring them to life.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      duration: "6 weeks",
      lessons: 18,
      students: 890,
      rating: 4.8,
      instructor: "Mike Rodriguez"
    },
    {
      id: 3,
      title: "Motion Graphics & Visual Effects",
      description: "Advanced techniques for creating stunning motion graphics.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
      duration: "10 weeks",
      lessons: 30,
      students: 650,
      rating: 4.9,
      instructor: "Emma Thompson"
    }
  ];

  const handleEnterClassroom = (courseId: number) => {
    window.open(`/classroom?course=${courseId}`, '_blank');
  };

  const quizzes = [
    { id: 1, title: "Animation Basics Quiz", score: 85, maxScore: 100, completed: true },
    { id: 2, title: "Character Design Challenge", score: 92, maxScore: 100, completed: true },
    { id: 3, title: "Motion Graphics Test", score: 0, maxScore: 100, completed: false },
  ];

  const leaderboard = [
    { rank: 1, name: "Alex Johnson", score: 2840, avatar: "👨‍🎨" },
    { rank: 2, name: "Sarah Chen", score: 2750, avatar: "👩‍💼" },
    { rank: 3, name: "Mike Rodriguez", score: 2680, avatar: "👨‍🏫" },
    { rank: 4, name: "Emma Thompson", score: 2590, avatar: "👩‍🎨" },
    { rank: 5, name: "You", score: 2420, avatar: "🏆" },
  ];

  const handleQuizClick = (quizId: number) => {
    navigate(`/quiz/${quizId}`);
  };

  const handleViewProgress = () => {
    navigate('/progress');
  };

  const handleViewLeaderboard = () => {
    navigate('/leaderboard');
  };

  const handleBrowseCourses = () => {
    navigate('/courses');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-[#4169e1] flex">
        <AppSidebar />
        
        <SidebarInset className="flex-1">
          <header className="sticky top-0 z-10 backdrop-blur-md bg-white/10 border-b border-white/20 p-4 md:hidden">
            <SidebarTrigger className="text-white" />
          </header>

          <main className="p-6 space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Welcome back, <span className="text-yellow-400">Alex</span>
              </h2>
              <p className="text-lg text-blue-100">
                Continue your animation journey and master the art of bringing stories to life
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl text-white hover:bg-white/30 transition-all duration-300 cursor-pointer" onClick={handleViewProgress}>
                <CardContent className="p-4 text-center">
                  <BookOpen className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                  <div className="text-xl font-bold">3</div>
                  <div className="text-xs text-blue-100">Active Courses</div>
                </CardContent>
              </Card>
              <Card className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl text-white hover:bg-white/30 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                  <div className="text-xl font-bold">42h</div>
                  <div className="text-xs text-blue-100">Learning Time</div>
                </CardContent>
              </Card>
              <Card className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl text-white hover:bg-white/30 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <Star className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                  <div className="text-xl font-bold">85%</div>
                  <div className="text-xs text-blue-100">Avg. Progress</div>
                </CardContent>
              </Card>
              <Card className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl text-white hover:bg-white/30 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <Users className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                  <div className="text-xl font-bold">12</div>
                  <div className="text-xs text-blue-100">Certificates</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl text-white hover:bg-white/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Target className="w-5 h-5 mr-2 text-yellow-400" />
                    Recent Quizzes
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Test your knowledge and track your progress
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quizzes.map((quiz) => (
                    <div key={quiz.id} className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-200">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-white">{quiz.title}</h4>
                        <div className="flex items-center mt-1">
                          {quiz.completed ? (
                            <div className="flex items-center text-xs text-green-300">
                              <Trophy className="w-3 h-3 mr-1" />
                              Score: {quiz.score}/{quiz.maxScore}
                            </div>
                          ) : (
                            <span className="text-xs text-blue-200">Not completed</span>
                          )}
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        onClick={() => handleQuizClick(quiz.id)}
                        className={`text-xs ${
                          quiz.completed 
                            ? 'bg-green-500/80 hover:bg-green-500 backdrop-blur-sm' 
                            : 'bg-yellow-500 hover:bg-yellow-400 text-blue-900'
                        }`}
                      >
                        {quiz.completed ? 'Retake' : 'Start'}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl text-white hover:bg-white/30 transition-all duration-300 cursor-pointer" onClick={handleViewLeaderboard}>
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Award className="w-5 h-5 mr-2 text-yellow-400" />
                    Leaderboard
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Your ranking among fellow animators
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {leaderboard.map((user) => (
                    <div 
                      key={user.rank} 
                      className={`flex items-center justify-between p-3 rounded-lg backdrop-blur-sm ${
                        user.name === 'You' ? 'bg-yellow-500/30 border border-yellow-400/50' : 'bg-white/10'
                      } hover:bg-white/15 transition-all duration-200`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold backdrop-blur-sm ${
                          user.rank === 1 ? 'bg-yellow-500 text-blue-900' :
                          user.rank === 2 ? 'bg-gray-400 text-blue-900' :
                          user.rank === 3 ? 'bg-amber-600 text-white' :
                          'bg-blue-600/80 text-white'
                        }`}>
                          {user.rank}
                        </div>
                        <div>
                          <div className="text-sm font-medium">{user.avatar} {user.name}</div>
                          <div className="text-xs text-blue-200">{user.score} points</div>
                        </div>
                      </div>
                      {user.name === 'You' && (
                        <div className="text-xs text-yellow-400 font-medium">Your Rank</div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Course Cards */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Your Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {courses.map((course) => (
                  <Card key={course.id} className="group bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl hover:bg-white/30 transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-yellow-500/90 backdrop-blur-sm text-blue-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        {course.rating}
                      </div>
                    </div>
                    <CardHeader className="text-white p-4">
                      <CardTitle className="text-lg mb-1 line-clamp-2">{course.title}</CardTitle>
                      <CardDescription className="text-blue-100 text-sm line-clamp-2">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-white p-4 pt-0">
                      <div className="flex items-center justify-between text-xs text-blue-100 mb-3">
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
                      <div className="mb-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-blue-100">Progress</span>
                          <span className="text-yellow-400">75%</span>
                        </div>
                        <div className="w-full bg-blue-900/50 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleEnterClassroom(course.id)}
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-blue-900 font-semibold py-2 px-3 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm"
                      >
                        Enter Classroom
                      </Button>
                      <p className="text-xs text-blue-200 mt-2 text-center">
                        Instructor: {course.instructor}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl text-white p-6 hover:bg-white/30 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Ready to Learn Something New?</h3>
                <p className="text-blue-100 mb-4">Explore our extensive library of animation courses and tutorials</p>
                <Button 
                  onClick={handleBrowseCourses}
                  className="bg-blue-700/80 backdrop-blur-sm hover:bg-blue-600 text-white px-6 py-2 rounded-lg border border-white/20"
                >
                  Browse All Courses
                </Button>
              </div>
            </Card>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
