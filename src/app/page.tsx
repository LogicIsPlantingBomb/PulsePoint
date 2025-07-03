'use client';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { Mail, Github, Linkedin, Instagram, MessageSquare, ChevronRight, Star, BarChart3, Circle, TrendingUp, Users, Zap, Shield, Share2, Eye, CheckCircle, X, Smile, Frown, Meh, ThumbsUp, ThumbsDown, ArrowRight, Play, Sparkles, Target, Rocket, Globe } from 'lucide-react';

export default function TrueFeedbackLanding() {
  const [hasAccessToken, setHasAccessToken] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);

  // Check for access token in cookies
  useEffect(() => {
    const checkAuthToken = () => {
      try {
        const cookies = document.cookie.split(';');
        const tokenCookie = cookies.find(cookie => 
          cookie.trim().startsWith('accessToken=') || 
          cookie.trim().startsWith('token=') ||
          cookie.trim().startsWith('authToken=')
        );
        
        if (tokenCookie) {
          const token = tokenCookie.split('=')[1];
          if (token && token.trim() !== '') {
            setHasAccessToken(true);
            setTimeout(() => {
              window.location.href = '/ask';
            }, 100);
          }
        }
      } catch (error) {
        console.error('Error checking auth token:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthToken();
  }, []);

  // Auto-rotate active feature
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Navigation handlers
  const handleSignInClick = () => {
    if (hasAccessToken) {
      window.location.href = '/ask';
    } else {
      window.location.href = '/sign-in';
    }
  };

  const handleStartFreeClick = () => {
    if (hasAccessToken) {
      window.location.href = '/mypolls';
    } else {
      window.location.href = '/sign-up';
    }
  };

  const handleCreateFirstPollClick = () => {
    if (hasAccessToken) {
      window.location.href = '/mypolls';
    } else {
      window.location.href = '/sign-up';
    }
  };

  const handleStartFreeTrialClick = () => {
    if (hasAccessToken) {
      window.location.href = '/mypolls';
    } else {
      window.location.href = '/sign-up';
    }
  };

  const handleScheduleDemoClick = () => {
    if (hasAccessToken) {
      window.location.href = '/ask';
    } else {
      window.location.href = '/sign-in';
    }
  };

  const handleViewDemoClick = () => {
    if (hasAccessToken) {
      window.location.href = '/ask';
    } else {
      window.location.href = '/sign-in';
    }
  };

  // Sample data for charts
  const barData = [
    { name: 'Jan', responses: 120 },
    { name: 'Feb', responses: 190 },
    { name: 'Mar', responses: 300 },
    { name: 'Apr', responses: 280 },
    { name: 'May', responses: 450 },
    { name: 'Jun', responses: 520 }
  ];

  const pieData = [
    { name: 'Excellent', value: 40, color: '#ff6b35' },
    { name: 'Good', value: 30, color: '#ff8c42' },
    { name: 'Average', value: 20, color: '#ffa726' },
    { name: 'Poor', value: 10, color: '#ffb74d' }
  ];

  const areaData = [
    { name: 'W1', polls: 20, responses: 150 },
    { name: 'W2', polls: 35, responses: 280 },
    { name: 'W3', polls: 28, responses: 320 },
    { name: 'W4', polls: 42, responses: 480 }
  ];

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Smart Analytics",
      description: "Real-time insights with beautiful visualizations"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Anonymous",
      description: "Complete privacy protection for authentic feedback"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Create and deploy polls in under 30 seconds"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Share polls worldwide with unique URLs"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precise Targeting",
      description: "Reach exactly the right audience every time"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Scale Ready",
      description: "From startups to enterprises, we scale with you"
    }
  ];

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '2M+', label: 'Polls Created' },
    { value: '15M+', label: 'Responses Collected' },
    { value: '99.9%', label: 'Uptime' }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 animate-pulse"></div>
          <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 animate-ping opacity-20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-orange-300 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 backdrop-blur-xl bg-black/50 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                TrueFeedback
              </h1>
              <p className="text-xs text-gray-400">FastForwardPolls</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={handleSignInClick}
              className="px-6 py-2 border border-orange-500/30 text-orange-400 rounded-xl hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-300 backdrop-blur-sm"
            >
              {hasAccessToken ? 'Dashboard' : 'Sign In'}
            </button>
            <button 
              onClick={handleStartFreeClick}
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl hover:from-orange-600 hover:to-amber-700 text-white font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
            >
              {hasAccessToken ? 'My Polls' : 'Get Started'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300">Trusted by 50,000+ organizations</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-orange-200 to-amber-400 bg-clip-text text-transparent">
                Collect Feedback
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                At Light Speed
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Create stunning polls, gather anonymous feedback, and visualize insights with our 
              lightning-fast platform. Perfect for modern teams and organizations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button 
                onClick={handleCreateFirstPollClick}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl hover:from-orange-600 hover:to-amber-700 text-white font-semibold shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                {hasAccessToken ? 'Go to Dashboard' : 'Create Your First Poll'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleViewDemoClick}
                className="group px-8 py-4 border border-orange-500/30 text-orange-400 rounded-2xl hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                {hasAccessToken ? 'View Analytics' : 'Watch Demo'}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Live Analytics Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-900/50 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-6 hover:border-orange-500/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Response Trends</h3>
                    <p className="text-sm text-gray-400">Monthly Growth</p>
                  </div>
                </div>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={barData}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                      <Area type="monotone" dataKey="responses" stroke="#f97316" fill="url(#colorGradient)" strokeWidth={3} />
                      <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-6 hover:border-orange-500/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                    <Circle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Satisfaction Score</h3>
                    <p className="text-sm text-gray-400">Real-time Results</p>
                  </div>
                </div>
                <div className="h-48 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-400">8.9</div>
                          <div className="text-xs text-gray-400">out of 10</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-6 hover:border-orange-500/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Active Now</h3>
                    <p className="text-sm text-gray-400">Live Participants</p>
                  </div>
                </div>
                <div className="h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent mb-2">
                      1,247
                    </div>
                    <div className="text-sm text-gray-400 mb-4">users online</div>
                    <div className="flex justify-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Why Choose TrueFeedback?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful features designed for modern feedback collection and analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-gray-900/50 backdrop-blur-xl border rounded-3xl p-8 transition-all duration-500 hover:scale-105 cursor-pointer ${
                  activeFeature === index 
                    ? 'border-orange-500/60 bg-orange-500/10' 
                    : 'border-orange-500/20 hover:border-orange-500/40'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Poll Demo */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                See It In Action
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Experience the power of real-time feedback collection
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 hover:border-orange-500/40 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                How would you rate your experience with TrueFeedback?
              </h3>
              <div className="flex justify-center gap-4">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Star className="w-6 h-6 text-white" fill="currentColor" />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-black/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">Live Results</span>
                <span className="text-sm text-orange-400">1,247 responses</span>
              </div>
              <div className="space-y-3">
                {[
                  { stars: 5, percentage: 65, count: 806 },
                  { stars: 4, percentage: 25, count: 312 },
                  { stars: 3, percentage: 7, count: 87 },
                  { stars: 2, percentage: 2, count: 25 },
                  { stars: 1, percentage: 1, count: 17 }
                ].map((item) => (
                  <div key={item.stars} className="flex items-center gap-4">
                    <div className="flex gap-1">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-400" fill="currentColor" />
                      ))}
                    </div>
                    <div className="flex-1 bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-amber-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400 w-12">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-r from-orange-500/10 to-amber-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300">Join the revolution</span>
            </div>
            
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="text-white">Your Feedback Game?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations already using TrueFeedback to make better decisions with real-time insights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleStartFreeTrialClick}
              className="group px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl hover:from-orange-600 hover:to-amber-700 text-white font-semibold shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              {hasAccessToken ? 'Access Dashboard' : 'Start Free Trial'}
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button 
              onClick={handleScheduleDemoClick}
              className="px-10 py-4 border border-orange-500/30 text-orange-400 rounded-2xl hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-300 backdrop-blur-sm"
            >
              {hasAccessToken ? 'View Analytics' : 'Schedule Demo'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 bg-gradient-to-t from-gray-900/80 to-transparent border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                    TrueFeedback
                  </h3>
                  <p className="text-sm text-gray-400">FastForwardPolls</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Transforming anonymous feedback into meaningful insights at lightning speed.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-gray-400 font-medium mb-4">Connect with the creator</p>
              <div className="flex gap-4">
                <a href="https://github.com/logicisplantingbomb" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 hover:text-orange-300 hover:border-orange-400 hover:bg-orange-500/30 hover:scale-110 transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/dhruv-bhardwaj-5486a3329/" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 hover:text-orange-300 hover:border-orange-400 hover:bg-orange-500/30 hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 hover:text-orange-300 hover:border-orange-400 hover:bg-orange-500/30 hover:scale-110 transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-orange-500/10 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 TrueFeedback. All rights reserved. | Made with ❤️ by Dhruv Bhardwaj
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
