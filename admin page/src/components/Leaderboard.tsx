
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award } from 'lucide-react';

const leaderboardData = [
  { id: 1, name: 'Alice Johnson', score: 945, courses: 12, rank: 1 },
  { id: 2, name: 'Bob Smith', score: 892, courses: 10, rank: 2 },
  { id: 3, name: 'Carol Davis', score: 867, courses: 11, rank: 3 },
  { id: 4, name: 'David Wilson', score: 834, courses: 9, rank: 4 },
  { id: 5, name: 'Eva Martinez', score: 821, courses: 8, rank: 5 },
  { id: 6, name: 'Frank Johnson', score: 798, courses: 7, rank: 6 },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1: return <Trophy className="h-5 w-5 text-yellow-500" />;
    case 2: return <Medal className="h-5 w-5 text-gray-400" />;
    case 3: return <Award className="h-5 w-5 text-amber-600" />;
    default: return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
  }
};

export function Leaderboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
        <p className="text-muted-foreground">Top-performing students ranked by quiz scores and course completion</p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            Student Rankings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaderboardData.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    {getRankIcon(student.rank)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">{student.courses} courses completed</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary">{student.score}</p>
                  <p className="text-sm text-muted-foreground">Total Points</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
