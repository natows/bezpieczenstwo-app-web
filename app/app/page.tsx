'use client';
import { useKeycloak } from '@react-keycloak/web';

export default function HomePage() {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  if (!keycloak.authenticated) {
    return (
      <div className="login-page">
        <p>You are not logged in</p>
        <button onClick={() => keycloak.login()}>Login</button>
      </div>
    );
  }

  return (
    <div className="home-page">
      <header className="App-header">
        <h1>Home Page</h1>
        <p>Welcome, {keycloak.tokenParsed?.preferred_username}!</p>
        <button onClick={() => keycloak.logout()}>Logout</button>
      </header>
    </div>
  );
}