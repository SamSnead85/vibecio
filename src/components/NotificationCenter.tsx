import { useState, useEffect } from 'react';
import { Bell, X, Check, Settings, Trash2, Clock, Zap, MessageSquare, Heart, Award, TrendingUp } from 'lucide-react';

// Phase 1071-1080: Notification Center Component
// Real-time notifications for articles, comments, and engagement

interface Notification {
    id: string;
    type: 'article' | 'comment' | 'like' | 'mention' | 'achievement' | 'trending';
    title: string;
    message: string;
    time: string;
    read: boolean;
    actionUrl?: string;
    avatar?: string;
}

const mockNotifications: Notification[] = [
    { id: '1', type: 'trending', title: 'Trending Article', message: 'Your bookmarked article "AI-Native Teams" is now trending!', time: '5 min ago', read: false },
    { id: '2', type: 'comment', title: 'New Reply', message: 'Elena Rodriguez replied to your comment on "The Inference Wars"', time: '1 hour ago', read: false, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100' },
    { id: '3', type: 'achievement', title: 'Badge Earned!', message: 'You earned the "Power Reader" badge for reading 50 articles', time: '2 hours ago', read: false },
    { id: '4', type: 'like', title: 'Comment Liked', message: 'David Chen liked your comment', time: '3 hours ago', read: true, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { id: '5', type: 'article', title: 'New Article', message: 'New article in Healthcare: "HIPAA Compliance for AI Systems"', time: '6 hours ago', read: true },
    { id: '6', type: 'mention', title: 'You were mentioned', message: 'Marcus Williams mentioned you in a discussion', time: '1 day ago', read: true, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' }
];

interface NotificationCenterProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NotificationCenter({ isOpen, onClose }: NotificationCenterProps) {
    const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
    const [filter, setFilter] = useState<'all' | 'unread'>('all');

    const unreadCount = notifications.filter(n => !n.read).length;
    const filteredNotifications = filter === 'all' ? notifications : notifications.filter(n => !n.read);

    const markAsRead = (id: string) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const markAllAsRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    const deleteNotification = (id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    const clearAll = () => {
        setNotifications([]);
    };

    const getIcon = (type: string) => {
        const icons: Record<string, React.ReactNode> = {
            article: <Zap className="w-4 h-4" />,
            comment: <MessageSquare className="w-4 h-4" />,
            like: <Heart className="w-4 h-4" />,
            mention: <MessageSquare className="w-4 h-4" />,
            achievement: <Award className="w-4 h-4" />,
            trending: <TrendingUp className="w-4 h-4" />
        };
        return icons[type] || <Bell className="w-4 h-4" />;
    };

    const getIconColor = (type: string) => {
        const colors: Record<string, string> = {
            article: 'bg-blue-500/20 text-blue-400',
            comment: 'bg-emerald-500/20 text-emerald-400',
            like: 'bg-pink-500/20 text-pink-400',
            mention: 'bg-purple-500/20 text-purple-400',
            achievement: 'bg-amber-500/20 text-amber-400',
            trending: 'bg-orange-500/20 text-orange-400'
        };
        return colors[type] || 'bg-zinc-500/20 text-zinc-400';
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
        }
        return () => document.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100]">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-zinc-950/50" onClick={onClose} />

            {/* Panel */}
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-zinc-900 border-l border-zinc-800 shadow-2xl animate-slide-in-right">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                    <div className="flex items-center gap-3">
                        <Bell className="w-5 h-5 text-accent" />
                        <h2 className="text-lg font-semibold text-zinc-100">Notifications</h2>
                        {unreadCount > 0 && (
                            <span className="px-2 py-0.5 bg-accent text-zinc-950 text-xs font-bold rounded-full">{unreadCount}</span>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 text-zinc-500 hover:text-zinc-100 transition-colors">
                            <Settings className="w-4 h-4" />
                        </button>
                        <button onClick={onClose} className="p-2 text-zinc-500 hover:text-zinc-100 transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-1 p-2 border-b border-zinc-800">
                    <button onClick={() => setFilter('all')} className={`flex-1 py-2 rounded-lg text-sm transition-colors ${filter === 'all' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}>All</button>
                    <button onClick={() => setFilter('unread')} className={`flex-1 py-2 rounded-lg text-sm transition-colors ${filter === 'unread' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}>Unread ({unreadCount})</button>
                </div>

                {/* Actions */}
                {notifications.length > 0 && (
                    <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800/50">
                        <button onClick={markAllAsRead} className="text-xs text-accent hover:text-accent-light transition-colors">
                            <Check className="w-3 h-3 inline mr-1" />Mark all as read
                        </button>
                        <button onClick={clearAll} className="text-xs text-zinc-500 hover:text-red-400 transition-colors">
                            <Trash2 className="w-3 h-3 inline mr-1" />Clear all
                        </button>
                    </div>
                )}

                {/* Notifications List */}
                <div className="overflow-y-auto h-[calc(100vh-200px)]">
                    {filteredNotifications.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 text-zinc-500">
                            <Bell className="w-12 h-12 mb-4 opacity-50" />
                            <p>No notifications</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-zinc-800/50">
                            {filteredNotifications.map((notification) => (
                                <div key={notification.id} className={`p-4 hover:bg-zinc-800/30 transition-colors group ${!notification.read ? 'bg-zinc-800/20' : ''}`}>
                                    <div className="flex gap-3">
                                        {notification.avatar ? (
                                            <img src={notification.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                                        ) : (
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getIconColor(notification.type)}`}>
                                                {getIcon(notification.type)}
                                            </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <div>
                                                    <h4 className="text-sm font-medium text-zinc-100">{notification.title}</h4>
                                                    <p className="text-sm text-zinc-400 mt-0.5">{notification.message}</p>
                                                    <span className="text-xs text-zinc-600 mt-1 flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />{notification.time}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {!notification.read && (
                                                        <button onClick={() => markAsRead(notification.id)} className="p-1 text-zinc-500 hover:text-emerald-400" title="Mark as read">
                                                            <Check className="w-4 h-4" />
                                                        </button>
                                                    )}
                                                    <button onClick={() => deleteNotification(notification.id)} className="p-1 text-zinc-500 hover:text-red-400" title="Delete">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {!notification.read && <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
