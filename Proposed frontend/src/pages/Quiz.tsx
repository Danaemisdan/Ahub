import { useState } from 'react';
import { ArrowLeft, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate, useParams } from 'react-router-dom';

const Quiz = () => {
  const navigate = useNavigate();
  const { quizId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  const quizData = {
    '1': {
      title: "Animation Basics Quiz",
      description: "Test your understanding of fundamental animation principles",
      questions: [
        {
          question: "What are the 12 principles of animation created by Disney animators?",
          options: [
            "Guidelines for creating realistic movement",
            "Rules for character design",
            "Color theory principles",
            "Sound design techniques"
          ],
          correct: 0
        },
        {
          question: "What is the frame rate commonly used in traditional animation?",
          options: ["12 fps", "24 fps", "30 fps", "60 fps"],
          correct: 1
        },
        {
          question: "What does 'squash and stretch' principle help achieve?",
          options: [
            "Better colors",
            "Realistic weight and flexibility",
            "Faster rendering",
            "Better audio sync"
          ],
          correct: 1
        }
      ]
    },
    '2': {
      title: "Character Design Challenge",
      description: "Advanced concepts in character creation and development",
      questions: [
        {
          question: "What is the most important aspect of character silhouette?",
          options: [
            "Color scheme",
            "Recognizability",
            "Texture details",
            "Animation complexity"
          ],
          correct: 1
        },
        {
          question: "Which principle helps make characters more appealing?",
          options: ["Complexity", "Symmetry", "Exaggeration", "Realism"],
          correct: 2
        }
      ]
    },
    '3': {
      title: "Motion Graphics Test",
      description: "Essential knowledge for motion graphics and visual effects",
      questions: [
        {
          question: "What is keyframing in motion graphics?",
          options: [
            "Setting important frames for animation",
            "Deleting unnecessary frames",
            "Adding sound effects",
            "Color correction process"
          ],
          correct: 0
        }
      ]
    }
  };

  const currentQuiz = quizId && quizData[quizId as keyof typeof quizData];
  
  if (!currentQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-6 flex items-center justify-center">
        <Card className="bg-white/20 backdrop-blur-md border-white/30 text-white max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Not Found</h2>
            <Button onClick={() => navigate('/')} className="bg-yellow-500 hover:bg-yellow-400 text-blue-900">
              Return to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < currentQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    currentQuiz.questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) {
        correct++;
      }
    });
    return Math.round((correct / currentQuiz.questions.length) * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-6">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/20 backdrop-blur-md border-white/30 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Quiz Complete!</CardTitle>
              <div className="text-6xl mb-4">
                {score >= 80 ? '🏆' : score >= 60 ? '🎉' : '📚'}
              </div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">{score}%</div>
              <CardDescription className="text-blue-100 text-lg">
                {score >= 80 ? 'Excellent work!' : score >= 60 ? 'Good job!' : 'Keep studying!'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentQuiz.questions.map((q, index) => (
                <div key={index} className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="flex items-start space-x-3">
                    {selectedAnswers[index] === q.correct ? (
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-400 mt-1" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium mb-2">{q.question}</p>
                      <p className="text-sm text-blue-100">
                        Your answer: {q.options[selectedAnswers[index]]}
                      </p>
                      {selectedAnswers[index] !== q.correct && (
                        <p className="text-sm text-green-300">
                          Correct answer: {q.options[q.correct]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex space-x-4 pt-4">
                <Button
                  onClick={() => window.location.reload()}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-blue-900"
                >
                  Retake Quiz
                </Button>
                <Button
                  onClick={() => navigate('/')}
                  className="flex-1 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/25"
                >
                  Return to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Button
              onClick={() => navigate('/')}
              className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/25 mr-4"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-2xl font-bold text-white">{currentQuiz.title}</h1>
          </div>
          <div className="flex items-center bg-white/20 backdrop-blur-md border-white/30 px-4 py-2 rounded-lg">
            <Clock className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white font-mono">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-blue-100 mb-2">
            <span>Question {currentQuestion + 1} of {currentQuiz.questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / currentQuiz.questions.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-blue-900/50 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${((currentQuestion + 1) / currentQuiz.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <Card className="bg-white/20 backdrop-blur-md border-white/30 text-white">
          <CardHeader>
            <CardTitle className="text-xl">{currentQuiz.questions[currentQuestion].question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuiz.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border backdrop-blur-sm transition-all duration-200 ${
                  selectedAnswers[currentQuestion] === index
                    ? 'bg-yellow-500/30 border-yellow-400 text-white'
                    : 'bg-white/10 border-white/20 hover:bg-white/15 text-blue-100'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-yellow-400 bg-yellow-400'
                      : 'border-white/40'
                  }`}>
                    {selectedAnswers[currentQuestion] === index && (
                      <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    )}
                  </div>
                  {option}
                </div>
              </button>
            ))}
            <div className="flex justify-end pt-4">
              <Button
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQuestion] === undefined}
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentQuestion === currentQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
