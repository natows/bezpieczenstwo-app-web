'use client';
import { useKeycloak } from '@react-keycloak/web';

export default function UserPage() {
  const { keycloak } = useKeycloak();
  const username = keycloak.tokenParsed?.preferred_username || 'Unknown User';

  return (
    <div className="user-page">
      <header className="App-header">
        <h1>User Page</h1>
        <p>You're logged in as {username}</p>
      </header>
    </div>
  );
}