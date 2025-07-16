
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FileQuestion, Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Question {
  id: number;
  question: string;
  type: 'multiple-choice' | 'true-false';
  options: string[];
  correctAnswer: string;
}

export function AddQuiz() {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [questionType, setQuestionType] = useState<'multiple-choice' | 'true-false'>('multiple-choice');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const { toast } = useToast();

  const addQuestion = () => {
    if (!currentQuestion) {
      toast({
        title: "Error",
        description: "Please enter a question.",
        variant: "destructive",
      });
      return;
    }

    const newQuestion: Question = {
      id: Date.now(),
      question: currentQuestion,
      type: questionType,
      options: questionType === 'multiple-choice' ? options.filter(opt => opt.trim()) : ['True', 'False'],
      correctAnswer
    };

    setQuestions([...questions, newQuestion]);
    setCurrentQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
    
    toast({
      title: "Success",
      description: "Question added successfully!",
    });
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const handleSubmit = () => {
    if (!quizTitle || questions.length === 0) {
      toast({
        title: "Error",
        description: "Please add a title and at least one question.",
        variant: "destructive",
      });
      return;
    }

    console.log('Creating quiz:', { quizTitle, quizDescription, questions });
    
    toast({
      title: "Success",
      description: "Quiz created successfully!",
    });

    // Reset form
    setQuizTitle('');
    setQuizDescription('');
    setQuestions([]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Add Quiz</h1>
        <p className="text-muted-foreground">Create quizzes with multiple-choice and true/false questions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileQuestion className="h-5 w-5 text-primary" />
              Quiz Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="quiz-title">Quiz Title</Label>
              <Input
                id="quiz-title"
                value={quizTitle}
                onChange={(e) => setQuizTitle(e.target.value)}
                placeholder="Enter quiz title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quiz-description">Description</Label>
              <Textarea
                id="quiz-description"
                value={quizDescription}
                onChange={(e) => setQuizDescription(e.target.value)}
                placeholder="Enter quiz description"
                rows={3}
              />
            </div>
            
            <div className="space-y-4 border-t pt-4">
              <h3 className="font-semibold">Add New Question</h3>
              
              <div className="space-y-2">
                <Label htmlFor="question">Question</Label>
                <Textarea
                  id="question"
                  value={currentQuestion}
                  onChange={(e) => setCurrentQuestion(e.target.value)}
                  placeholder="Enter your question"
                  rows={2}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Question Type</Label>
                <Select value={questionType} onValueChange={(value: 'multiple-choice' | 'true-false') => setQuestionType(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                    <SelectItem value="true-false">True/False</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {questionType === 'multiple-choice' && (
                <div className="space-y-2">
                  <Label>Options</Label>
                  {options.map((option, index) => (
                    <Input
                      key={index}
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...options];
                        newOptions[index] = e.target.value;
                        setOptions(newOptions);
                      }}
                      placeholder={`Option ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              <div className="space-y-2">
                <Label>Correct Answer</Label>
                <RadioGroup value={correctAnswer} onValueChange={setCorrectAnswer}>
                  {questionType === 'multiple-choice' 
                    ? options.filter(opt => opt.trim()).map((option, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`option-${index}`} />
                          <Label htmlFor={`option-${index}`}>{option}</Label>
                        </div>
                      ))
                    : ['True', 'False'].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={option.toLowerCase()} />
                          <Label htmlFor={option.toLowerCase()}>{option}</Label>
                        </div>
                      ))
                  }
                </RadioGroup>
              </div>

              <Button onClick={addQuestion} className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Question
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Quiz Preview ({questions.length} questions)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {questions.map((question, index) => (
                <div key={question.id} className="p-3 rounded-lg bg-secondary/50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">Q{index + 1}: {question.question}</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeQuestion(question.id)}
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    Type: {question.type}
                  </div>
                  <div className="text-sm">
                    Options: {question.options.join(', ')}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    Correct: {question.correctAnswer}
                  </div>
                </div>
              ))}
            </div>
            
            {questions.length > 0 && (
              <Button onClick={handleSubmit} className="w-full mt-4 golden-gradient text-primary-foreground">
                Create Quiz
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
