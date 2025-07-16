
import { ArrowLeft, Trophy, Medal, Award, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const navigate = useNavigate();

  const fullLeaderboard = [
    { rank: 1, name: "Alex Johnson", score: 2840, avatar: "👨‍🎨", badge: "Animation Master", streak: 15 },
    { rank: 2, name: "Sarah Chen", score: 2750, avatar: "👩‍💼", badge: "Design Pro", streak: 12 },
    { rank: 3, name: "Mike Rodriguez", score: 2680, avatar: "👨‍🏫", badge: "Mentor", streak: 10 },
    { rank: 4, name: "Emma Thompson", score: 2590, avatar: "👩‍🎨", badge: "Creative", streak: 8 },
    { rank: 5, name: "You", score: 2420, avatar: "🏆", badge: "Rising Star", streak: 6 },
    { rank: 6, name: "David Kim", score: 2350, avatar: "👨‍💻", badge: "Tech Enthusiast", streak: 5 },
    { rank: 7, name: "Lisa Wang", score: 2280, avatar: "👩‍🔬", badge: "Researcher", streak: 4 },
    { rank: 8, name: "Carlos Silva", score: 2150, avatar: "👨‍🎭", badge: "Artist", streak: 3 },
    { rank: 9, name: "Maya Patel", score: 2050, avatar: "👩‍🎨", badge: "Storyteller", streak: 2 },
    { rank: 10, name: "Ryan Cooper", score: 1980, avatar: "👨‍🚀", badge: "Explorer", streak: 1 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-400" />;
      case 2: return <Medal className="w-5 h-5 text-gray-300" />;
      case 3: return <Award className="w-5 h-5 text-amber-600" />;
      default: return <Trophy className="w-5 h-5 text-blue-300" />;
    }
  };

  const getRankBgColor = (rank: number, isUser: boolean) => {
    if (isUser) return 'bg-yellow-500/30 border border-yellow-400/50';
    switch (rank) {
      case 1: return 'bg-yellow-500/20 border border-yellow-400/30';
      case 2: return 'bg-gray-400/20 border border-gray-300/30';
      case 3: return 'bg-amber-600/20 border border-amber-500/30';
      default: return 'bg-white/10';
    }
  };

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
          <h1 className="text-3xl font-bold text-white">Global Leaderboard</h1>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {fullLeaderboard.slice(0, 3).map((user) => (
            <Card key={user.rank} className={`bg-white/20 backdrop-blur-md border-white/30 text-white text-center ${getRankBgColor(user.rank, false)}`}>
              <CardContent className="p-6">
                <div className="text-4xl mb-2">{user.avatar}</div>
                <div className="flex justify-center mb-2">{getRankIcon(user.rank)}</div>
                <h3 className="font-bold text-lg mb-1">{user.name}</h3>
                <p className="text-yellow-400 font-semibold text-xl">{user.score}</p>
                <p className="text-xs text-blue-100 mt-1">{user.badge}</p>
                <p className="text-xs text-blue-200">🔥 {user.streak} day streak</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="bg-white/20 backdrop-blur-md border-white/30 text-white">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-yellow-400" />
              Complete Rankings
            </CardTitle>
            <CardDescription className="text-blue-100">
              See where you stand among all learners
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {fullLeaderboard.map((user) => (
                <div 
                  key={user.rank} 
                  className={`flex items-center justify-between p-4 rounded-lg backdrop-blur-sm transition-all duration-200 hover:bg-white/15 ${getRankBgColor(user.rank, user.name === 'You')}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      user.rank === 1 ? 'bg-yellow-500 text-blue-900' :
                      user.rank === 2 ? 'bg-gray-400 text-blue-900' :
                      user.rank === 3 ? 'bg-amber-600 text-white' :
                      'bg-blue-600/80 text-white backdrop-blur-sm'
                    }`}>
                      {user.rank}
                    </div>
                    <div className="text-2xl">{user.avatar}</div>
                    <div>
                      <div className="font-semibold text-white flex items-center">
                        {user.name}
                        {user.name === 'You' && <span className="ml-2 text-xs bg-yellow-500/80 text-blue-900 px-2 py-1 rounded-full">You</span>}
                      </div>
                      <div className="text-sm text-blue-100">{user.badge}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-yellow-400">{user.score}</div>
                    <div className="text-xs text-blue-200">🔥 {user.streak} days</div>
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

export default Leaderboard;
