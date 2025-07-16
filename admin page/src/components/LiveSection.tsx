
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Radio, Users, Clock, Video, MessageSquare, Play, Square, Pause } from 'lucide-react';

const liveSessions = [
  { id: 1, title: 'React Advanced Concepts', participants: 24, status: 'live', startTime: '2:00 PM' },
  { id: 2, title: 'JavaScript ES6 Features', participants: 18, status: 'scheduled', startTime: '4:00 PM' },
  { id: 3, title: 'CSS Grid Workshop', participants: 0, status: 'ended', startTime: '12:00 PM' },
];

export function LiveSection() {
  const [sessionTitle, setSessionTitle] = useState('');
  const [sessionTime, setSessionTime] = useState('');
  const [isLive, setIsLive] = useState(false);

  const startLiveSession = () => {
    console.log('Starting live session:', { sessionTitle, sessionTime });
    setIsLive(true);
  };

  const endLiveSession = () => {
    setIsLive(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Live Section</h1>
        <p className="text-muted-foreground">Manage live sessions and video broadcasts</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Radio className="h-5 w-5 text-primary" />
              Start Live Session
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="session-title">Session Title</Label>
              <Input
                id="session-title"
                value={sessionTitle}
                onChange={(e) => setSessionTitle(e.target.value)}
                placeholder="Enter session title"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="session-time">Scheduled Time</Label>
              <Input
                id="session-time"
                type="datetime-local"
                value={sessionTime}
                onChange={(e) => setSessionTime(e.target.value)}
              />
            </div>

            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">Camera and microphone will be activated</p>
              <div className="flex gap-2 justify-center">
                {!isLive ? (
                  <Button onClick={startLiveSession} className="golden-gradient text-primary-foreground">
                    <Play className="h-4 w-4 mr-2" />
                    Go Live
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Pause className="h-4 w-4 mr-2" />
                      Pause
                    </Button>
                    <Button variant="destructive" onClick={endLiveSession}>
                      <Square className="h-4 w-4 mr-2" />
                      End Live
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {isLive && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-400 font-medium">LIVE</span>
                </div>
                <p className="text-sm text-muted-foreground">You are currently broadcasting live</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Live Sessions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {liveSessions.map((session) => (
                <div key={session.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div>
                    <h4 className="font-medium text-foreground">{session.title}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {session.participants}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {session.startTime}
                      </div>
                    </div>
                  </div>
                  <Badge variant={
                    session.status === 'live' ? 'destructive' : 
                    session.status === 'scheduled' ? 'default' : 'secondary'
                  }>
                    {session.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Live Chat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-secondary/30 rounded-lg p-4 h-64 mb-4 overflow-y-auto">
            <p className="text-muted-foreground text-center">Live chat will appear here during sessions</p>
          </div>
          <div className="flex gap-2">
            <Input placeholder="Type a message..." className="flex-1" />
            <Button>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
