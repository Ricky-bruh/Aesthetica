export interface Theme {
    name: string;
    channels: ChannelConfig[];
    roles: RoleConfig[];
    welcomeMessage: WelcomeConfig;
}

interface ChannelConfig {
    name: string;
    emoji: string;
}

interface RoleConfig {
    name: string;
    color: string;
    emoji: string;
}

interface WelcomeConfig {
    message: string;
    color: string;
}