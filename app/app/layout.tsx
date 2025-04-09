'use client';
import './globals.css';
import './animations.css';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from '../lib/keycloak';
import Navigation from '../components/Navigation';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <ReactKeycloakProvider authClient={keycloak}>
          <Navigation />
          {children}
        </ReactKeycloakProvider>
      </body>
    </html>
  );
}