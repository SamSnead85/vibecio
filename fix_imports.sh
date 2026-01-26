#!/bin/bash
# Fix AccessibilityPanel.tsx
sed -i '' "s/import { Eye, EyeOff, Type, Sun, Moon, Palette, Volume2, VolumeX, Gauge, Check, RotateCcw, Accessibility as AccessibilityIcon } from 'lucide-react';/import { Type, Sun, Palette, Gauge, Check, RotateCcw, Accessibility as AccessibilityIcon } from 'lucide-react';/" src/pages/AccessibilityPanel.tsx

# Fix CTABanner.tsx
sed -i '' "s/import { Zap, ArrowRight, Sparkles, TrendingUp, Clock, Users, Target, Brain, Rocket, Shield, LineChart, Globe } from 'lucide-react';/import { Zap, ArrowRight, Sparkles, TrendingUp, Clock, Users, Brain, Rocket, Shield, LineChart, Globe } from 'lucide-react';/" src/components/CTABanner.tsx

# Fix LayoutSwitcher.tsx  
sed -i '' "s/import { Link } from 'react-router-dom';//" src/components/LayoutSwitcher.tsx

# Fix NotificationCenter.tsx
sed -i '' "s/import { Bell, X, Check, Settings, Trash2, Eye, Clock, Zap, MessageSquare, Heart, Award, TrendingUp } from 'lucide-react';/import { Bell, X, Check, Settings, Trash2, Clock, Zap, MessageSquare, Heart, Award, TrendingUp } from 'lucide-react';/" src/components/NotificationCenter.tsx

# Fix OnboardingFlow.tsx
sed -i '' "s/import { Compass, ArrowRight, Sparkles, ChevronRight, Check, Brain, Target, Lightbulb, BookOpen, Rocket, Users, Shield, Zap } from 'lucide-react';/import { Compass, ArrowRight, Sparkles, Check, Brain, Target, Lightbulb, BookOpen, Rocket, Users, Shield, Zap } from 'lucide-react';/" src/components/OnboardingFlow.tsx

# Fix PersonalizedFeed.tsx
sed -i '' "s/import { Sparkles, Brain, Clock, BookOpen, ChevronRight, Shuffle, ThumbsUp, ThumbsDown, Bookmark } from 'lucide-react';/import { Sparkles, ChevronRight, ThumbsUp, Bookmark } from 'lucide-react';/" src/components/PersonalizedFeed.tsx

# Fix PremiumContent.tsx 
sed -i '' "s/import { Newspaper, Crown, Award, Calendar, ArrowRight, Eye, Heart, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';/import { Newspaper, Crown, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';/" src/components/PremiumContent.tsx

# Fix ShareModal.tsx - use underscore prefix for unused params
sed -i '' "s/getUrl: (title, url)/getUrl: (_title, url)/" src/components/ShareModal.tsx

# Fix VersionHistory.tsx
sed -i '' "s/import { useState, useEffect } from 'react';/import { useState } from 'react';/" src/components/VersionHistory.tsx
sed -i '' "s/import { GitBranch, GitCommit, ArrowRight, Clock, Users, Zap, Code, CheckCircle, XCircle, Circle } from 'lucide-react';/import { GitBranch, Clock, Code, CheckCircle, XCircle, Circle } from 'lucide-react';/" src/components/VersionHistory.tsx
sed -i '' "s/{ articleId, onVersionSelect }/{ onVersionSelect }/" src/components/VersionHistory.tsx
sed -i '' "s/const \[versions, setVersions\]/const [versions]/" src/components/VersionHistory.tsx
sed -i '' "s/{versions.map((version, index)/{versions.map((version)/" src/components/VersionHistory.tsx

