#!/bin/bash
# Fix AIChatbot.tsx
sed -i '' "s/import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles, Minimize2, Maximize2 } from 'lucide-react';/import { MessageSquare, X, Send, Bot, User, Loader2, Minimize2, Maximize2 } from 'lucide-react';/" src/components/AIChatbot.tsx

# Fix AudioPlayer.tsx  
sed -i '' "s/import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Headphones, Clock, X, Minimize2 } from 'lucide-react';/import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Headphones, X, Minimize2 } from 'lucide-react';/" src/components/AudioPlayer.tsx
sed -i '' "s/{ title, author, duration = 720, audioUrl, coverImage, onClose }/{ title, author, duration = 720, coverImage, onClose }/" src/components/AudioPlayer.tsx

# Fix CommentSection.tsx
sed -i '' "s/import { Link } from 'react-router-dom';//" src/components/CommentSection.tsx
sed -i '' "s/import { MessageSquare, Heart, Share2, Flag, Reply, ChevronDown, ChevronUp, Award, Verified, MoreHorizontal, ThumbsUp, Send } from 'lucide-react';/import { MessageSquare, Share2, Reply, ChevronDown, ChevronUp, Award, Verified, MoreHorizontal, ThumbsUp, Send } from 'lucide-react';/" src/components/CommentSection.tsx
sed -i '' "s/{ articleId, commentCount }/{ commentCount }/" src/components/CommentSection.tsx

# Fix ShareModal.tsx - fix all title references to use _title
sed -i '' "s/\`\${title}/\`\${_title}/g" src/components/ShareModal.tsx
