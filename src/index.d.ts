import { FC } from 'react';

export interface LoginComponentProps {
    onLogin: (username: string) => void;
}

export interface DisplayComponentProps {
    username: string;
    onLogout: () => void;
}

export const LoginComponent: FC<LoginComponentProps>;
export const DisplayComponent: FC<DisplayComponentProps>;
export const AuthWrapper: FC;