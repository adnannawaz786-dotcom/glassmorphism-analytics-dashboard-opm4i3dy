import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Switch } from '../components/ui/switch';
import { 
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Palette,
  Database,
  Download,
  Upload,
  Trash2,
  Moon,
  Sun,
  Globe,
  Lock,
  Eye,
  Mail,
  Smartphone,
  Calendar,
  BarChart3,
  RefreshCw,
  Save,
  LogOut
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    weekly: true
  });
  const [privacy, setPrivacy] = useState({
    analytics: true,
    cookies: true,
    tracking: false
  });

  const settingsSections = [
    {
      id: 'profile',
      title: 'Profile Settings',
      icon: User,
      items: [
        { label: 'Account Information', description: 'Update your personal details', action: 'edit' },
        { label: 'Profile Picture', description: 'Change your avatar', action: 'upload' },
        { label: 'Password', description: 'Update your password', action: 'change' },
        { label: 'Two-Factor Authentication', description: 'Secure your account', action: 'setup', badge: 'Recommended' }
      ]
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Email Notifications', description: 'Receive updates via email', type: 'toggle', key: 'email' },
        { label: 'Push Notifications', description: 'Browser notifications', type: 'toggle', key: 'push' },
        { label: 'SMS Alerts', description: 'Text message notifications', type: 'toggle', key: 'sms' },
        { label: 'Weekly Reports', description: 'Analytics summary', type: 'toggle', key: 'weekly' }
      ]
    },
    {
      id: 'appearance',
      title: 'Appearance',
      icon: Palette,
      items: [
        { label: 'Dark Mode', description: 'Toggle dark theme', type: 'theme-toggle' },
        { label: 'Language', description: 'Change interface language', action: 'select', value: 'English' },
        { label: 'Timezone', description: 'Set your timezone', action: 'select', value: 'UTC-8' },
        { label: 'Date Format', description: 'Choose date display format', action: 'select', value: 'MM/DD/YYYY' }
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      icon: Shield,
      items: [
        { label: 'Analytics Tracking', description: 'Help improve our service', type: 'privacy-toggle', key: 'analytics' },
        { label: 'Cookie Preferences', description: 'Manage cookie settings', type: 'privacy-toggle', key: 'cookies' },
        { label: 'Third-party Tracking', description: 'Block external trackers', type: 'privacy-toggle', key: 'tracking' },
        { label: 'Data Export', description: 'Download your data', action: 'export' }
      ]
    },
    {
      id: 'data',
      title: 'Data Management',
      icon: Database,
      items: [
        { label: 'Import Data', description: 'Upload analytics data', action: 'import' },
        { label: 'Export Data', description: 'Download your analytics', action: 'export' },
        { label: 'Data Retention', description: 'How long to keep data', action: 'select', value: '12 months' },
        { label: 'Clear Cache', description: 'Reset application cache', action: 'clear' }
      ]
    }
  ];

  const handleToggle = (section, key) => {
    if (section === 'notifications') {
      setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    } else if (section === 'privacy') {
      setPrivacy(prev => ({ ...prev, [key]: !prev[key] }));
    }
  };

  const handleAction = (action, item) => {
    console.log(`Action: ${action}`, item);
    // Handle various actions here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 pb-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <SettingsIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Settings</h1>
          </div>
          <p className="text-slate-300 text-lg">Customize your analytics experience</p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants}>
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <RefreshCw className="w-5 h-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Save className="w-4 h-4 mr-2" />
                  Save All Changes
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Download className="w-4 h-4 mr-2" />
                  Export Settings
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Settings
                </Button>
                <Button variant="destructive" className="bg-red-500/20 text-red-300 border-red-500/30 hover:bg-red-500/30">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <motion.div key={section.id} variants={itemVariants}>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <section.icon className="w-6 h-6" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <div className="flex items-center justify-between py-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-medium">{item.label}</h4>
                          {item.badge && (
                            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-slate-300 text-sm">{item.description}</p>
                        {item.value && (
                          <p className="text-slate-400 text-xs mt-1">Current: {item.value}</p>
                        )}
                      </div>
                      
                      <div className="ml-4">
                        {item.type === 'toggle' && (
                          <Switch
                            checked={notifications[item.key]}
                            onCheckedChange={() => handleToggle('notifications', item.key)}
                            className="data-[state=checked]:bg-blue-600"
                          />
                        )}
                        {item.type === 'privacy-toggle' && (
                          <Switch
                            checked={privacy[item.key]}
                            onCheckedChange={() => handleToggle('privacy', item.key)}
                            className="data-[state=checked]:bg-green-600"
                          />
                        )}
                        {item.type === 'theme-toggle' && (
                          <Switch
                            checked={darkMode}
                            onCheckedChange={setDarkMode}
                            className="data-[state=checked]:bg-purple-600"
                          />
                        )}
                        {item.action && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleAction(item.action, item)}
                            className="border-white/30 text-white hover:bg-white/10"
                          >
                            {item.action === 'edit' && <Eye className="w-4 h-4" />}
                            {item.action === 'upload' && <Upload className="w-4 h-4" />}
                            {item.action === 'change' && <Lock className="w-4 h-4" />}
                            {item.action === 'setup' && <Shield className="w-4 h-4" />}
                            {item.action === 'select' && <Globe className="w-4 h-4" />}
                            {item.action === 'export' && <Download className="w-4 h-4" />}
                            {item.action === 'import' && <Upload className="w-4 h-4" />}
                            {item.action === 'clear' && <Trash2 className="w-4 h-4" />}
                          </Button>
                        )}
                      </div>
                    </div>
                    {itemIndex < section.items.length - 1 && (
                      <Separator className="bg-white/10" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Account Management */}
        <motion.div variants={itemVariants}>
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <User className="w-6 h-6" />
                Account Management
              </CardTitle>
              <CardDescription className="text-slate-300">
                Manage your account and subscription
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="text-white font-medium mb-2">Subscription Status</h4>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 mb-2">
                    Pro Plan
                  </Badge>
                  <p className="text-slate-300 text-sm">Next billing: Dec 15, 2024</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="text-white font-medium mb-2">Storage Used</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                    <span className="text-slate-300 text-sm">68%</span>
                  </div>
                  <p className="text-slate-300 text-sm">6.8 GB of 10 GB used</p>
                </div>
              </div>
              
              <Separator className="bg-white/10" />
              
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Manage Subscription
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Billing History
                </Button>
                <Button variant="outline" className="border-red-500/30 text-red-300 hover:bg-red-500/10">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer Info */}
        <motion.div variants={itemVariants} className="text-center py-8">
          <p className="text-slate-400 text-sm">
            Analytics Dashboard v2.1.0 • Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}