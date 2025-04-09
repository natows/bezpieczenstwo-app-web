'use client';
import { useKeycloak } from '@react-keycloak/web';

export default function AdminPage() {
  const { keycloak } = useKeycloak();
  const username = keycloak.tokenParsed?.preferred_username;
  const roles = keycloak.tokenParsed?.realm_access?.roles || [];

  return (
    <div className="admin-page">
      <header className="App-header">
        <h1>Admin Page</h1>
        {roles.includes('admin') ? (
          <p>You're logged in as {username} with admin role</p>
        ) : (
          <p>Sorry you're unauthorised</p>
        )}
      </header>
    </div>
  );
}