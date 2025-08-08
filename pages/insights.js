import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Clock, 
  Target, 
  BarChart3, 
  PieChart, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter,
  Download,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const insightData = [
  {
    id: 1,
    title: "Peak Traffic Hours",
    description: "Users are most active between 2-4 PM",
    icon: Clock,
    trend: "up",
    value: "+23%",
    category: "Traffic",
    priority: "high",
    actionable: true
  },
  {
    id: 2,
    title: "Mobile Usage Surge",
    description: "70% of traffic now comes from mobile devices",
    icon: Users,
    trend: "up",
    value: "+15%",
    category: "Device",
    priority: "medium",
    actionable: true
  },
  {
    id: 3,
    title: "Conversion Rate Drop",
    description: "Checkout abandonment increased in last week",
    icon: Target,
    trend: "down",
    value: "-8%",
    category: "Conversion",
    priority: "high",
    actionable: true
  },
  {
    id: 4,
    title: "Page Load Performance",
    description: "Average load time improved significantly",
    icon: Activity,
    trend: "up",
    value: "+31%",
    category: "Performance",
    priority: "low",
    actionable: false
  },
  {
    id: 5,
    title: "User Engagement",
    description: "Session duration increased across all pages",
    icon: Eye,
    trend: "up",
    value: "+12%",
    category: "Engagement",
    priority: "medium",
    actionable: true
  },
  {
    id: 6,
    title: "Bounce Rate Optimization",
    description: "Landing page bounce rate needs attention",
    icon: TrendingUp,
    trend: "down",
    value: "-5%",
    category: "Retention",
    priority: "high",
    actionable: true
  }
];

const trendingTopics = [
  { topic: "E-commerce Analytics", growth: "+45%" },
  { topic: "Mobile Optimization", growth: "+32%" },
  { topic: "User Experience", growth: "+28%" },
  { topic: "Conversion Funnels", growth: "+21%" },
  { topic: "A/B Testing", growth: "+18%" }
];

const recommendations = [
  {
    title: "Optimize Mobile Experience",
    description: "Focus on mobile-first design improvements",
    impact: "High",
    effort: "Medium"
  },
  {
    title: "Improve Checkout Flow",
    description: "Reduce friction in the conversion process",
    impact: "High",
    effort: "High"
  },
  {
    title: "Content Strategy Review",
    description: "Analyze top-performing content patterns",
    impact: "Medium",
    effort: "Low"
  }
];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [filteredInsights, setFilteredInsights] = useState(insightData);

  const categories = ['all', 'Traffic', 'Conversion', 'Performance', 'Engagement'];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredInsights(insightData);
    } else {
      setFilteredInsights(insightData.filter(insight => insight.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsRefreshing(false);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 pb-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Analytics Insights</h1>
            <p className="text-slate-300">Discover patterns and opportunities in your data</p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div variants={itemVariants}>
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2">
                <Filter className="w-5 h-5 text-white mr-2 mt-1" />
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className={`${
                      selectedCategory === category
                        ? 'bg-purple-500 hover:bg-purple-600 text-white'
                        : 'bg-white/5 hover:bg-white/10 text-white border-white/20'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Insights Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredInsights.map((insight, index) => {
              const IconComponent = insight.icon;
              return (
                <motion.div
                  key={insight.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-purple-500/20">
                            <IconComponent className="w-5 h-5 text-purple-400" />
                          </div>
                          <div>
                            <CardTitle className="text-white text-lg">{insight.title}</CardTitle>
                            <Badge className={`mt-1 ${getPriorityColor(insight.priority)}`}>
                              {insight.priority}
                            </Badge>
                          </div>
                        </div>
                        <div className={`flex items-center gap-1 ${
                          insight.trend === 'up' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {insight.trend === 'up' ? (
                            <ArrowUpRight className="w-4 h-4" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4" />
                          )}
                          <span className="font-semibold">{insight.value}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300 mb-4">
                        {insight.description}
                      </CardDescription>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="text-slate-400 border-slate-600">
                          {insight.category}
                        </Badge>
                        {insight.actionable && (
                          <Button size="sm" className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400">
                            Take Action
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Trending Topics */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  Trending Topics
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Most discussed analytics topics this week
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingTopics.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-white font-medium">{item.topic}</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      {item.growth}
                    </Badge>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Recommendations */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  Recommendations
                </CardTitle>
                <CardDescription className="text-slate-300">
                  AI-powered suggestions for improvement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-semibold">{rec.title}</h4>
                      <div className="flex gap-2">
                        <Badge variant="outline" className={`${getImpactColor(rec.impact)} border-current`}>
                          {rec.impact}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">{rec.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-400">Effort: {rec.effort}</span>
                      <Button size="sm" variant="outline" className="text-purple-400 border-purple-400/50 hover:bg-purple-500/10">
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}