
import { ArrowLeft, BookOpen, Clock, Trophy, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Progress = () => {
  const navigate = useNavigate();

  const courseProgress = [
    { id: 1, title: "Professional 2D Animation Fundamentals", progress: 75, completedLessons: 18, totalLessons: 24, timeSpent: "28h" },
    { id: 2, title: "Character Design & Animation", progress: 45, completedLessons: 8, totalLessons: 18, timeSpent: "12h" },
    { id: 3, title: "Motion Graphics & Visual Effects", progress: 20, completedLessons: 6, totalLessons: 30, timeSpent: "8h" },
  ];

  const achievements = [
    { title: "First Course Completed", icon: "🎓", date: "2024-01-15" },
    { title: "Week Streak", icon: "🔥", date: "2024-01-10" },
    { title: "Quiz Master", icon: "🏆", date: "2024-01-05" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            onClick={() => navigate('/')}
            className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/25 mr-4"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-3xl font-bold text-white">Your Progress</h1>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/20 backdrop-blur-md border-white/30 text-white">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <div className="text-2xl font-bold">47%</div>
              <div className="text-sm text-blue-100">Overall Progress</div>
            </CardContent>
          </Card>
          <Card className="bg-white/20 backdrop-blur-md border-white/30 text-white">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <div className="text-2xl font-bold">48h</div>
              <div className="text-sm text-blue-100">Total Time</div>
            </CardContent>
          </Card>
          <Card className="bg-white/20 backdrop-blur-md border-white/30 text-white">
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm text-blue-100">Achievements</div>
            </CardContent>
          </Card>
        </div>

        {/* Course Progress */}
        <Card className="bg-white/20 backdrop-blur-md border-white/30 text-white mb-8">
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
            <CardDescription className="text-blue-100">Track your learning journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {courseProgress.map((course) => (
              <div key={course.id} className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">{course.title}</h3>
                  <span className="text-yellow-400 font-bold">{course.progress}%</span>
                </div>
                <div className="w-full bg-blue-900/50 rounded-full h-2 mb-3">
                  <div 
                    className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-blue-100">
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {course.completedLessons}/{course.totalLessons} lessons
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.timeSpent}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="bg-white/20 backdrop-blur-md border-white/30 text-white">
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
            <CardDescription className="text-blue-100">Your learning milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="text-2xl mr-3">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white">{achievement.title}</h4>
                    <p className="text-sm text-blue-100">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Progress;
