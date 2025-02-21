import { Theme } from './types';

export const themes: Record<string, Theme> = {
    cyberpunk: {
        name: 'Cyberpunk',
        channels: [
            { name: 'welcome', emoji: '👋' },
            { name: 'chat', emoji: '💭' }
        ],
        roles: [
            { name: 'Admin', color: '#FF0000', emoji: '⚡' },
            { name: 'Member', color: '#00FF00', emoji: '🎮' }
        ],
        welcomeMessage: {
            message: 'Welcome to the server!',
            color: '#00FF00'
        }
    }
};
