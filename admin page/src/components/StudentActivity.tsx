
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen, Award, LogIn } from 'lucide-react';

const studentActivities = [
  {
    id: 1,
    name: 'Alice Johnson',
    action: 'Completed Quiz: React Fundamentals',
    score: 85,
    timestamp: '2 hours ago',
    type: 'quiz'
  },
  {
    id: 2,
    name: 'Bob Smith',
    action: 'Watched Video: Advanced JavaScript',
    progress: 75,
    timestamp: '3 hours ago',
    type: 'video'
  },
  {
    id: 3,
    name: 'Carol Davis',
    action: 'Logged in to platform',
    timestamp: '5 hours ago',
    type: 'login'
  },
  {
    id: 4,
    name: 'David Wilson',
    action: 'Started Course: Web Development',
    timestamp: '1 day ago',
    type: 'course'
  }
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'quiz': return <Award className="h-4 w-4" />;
    case 'video': return <BookOpen className="h-4 w-4" />;
    case 'login': return <LogIn className="h-4 w-4" />;
    case 'course': return <BookOpen className="h-4 w-4" />;
    default: return <Clock className="h-4 w-4" />;
  }
};

const getActivityBadge = (type: string) => {
  const colors = {
    quiz: 'bg-green-500/20 text-green-400',
    video: 'bg-blue-500/20 text-blue-400',
    login: 'bg-purple-500/20 text-purple-400',
    course: 'bg-yellow-500/20 text-yellow-400'
  };
  return colors[type as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
};

export function StudentActivity() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Student Activity</h1>
        <p className="text-muted-foreground">Monitor detailed logs of student actions and progress</p>
      </div>

      <div className="grid gap-4">
        {studentActivities.map((activity) => (
          <Card key={activity.id} className="glass-card hover:border-primary/20 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">{activity.name}</h3>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                    {activity.score && (
                      <p className="text-sm text-primary font-medium">Score: {activity.score}%</p>
                    )}
                    {activity.progress && (
                      <p className="text-sm text-primary font-medium">Progress: {activity.progress}%</p>
                    )}
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <Badge className={getActivityBadge(activity.type)}>
                    {activity.type}
                  </Badge>
                  <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
