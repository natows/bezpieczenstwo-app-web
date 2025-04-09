'use client';
import Link from 'next/link';
import { useKeycloak } from '@react-keycloak/web';

export default function Navigation() {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    return null;
  }

  return (
    <nav>
      <Link href="/">
        <button>Home</button>
      </Link>
      <Link href="/user">
        <button>User Page</button>
      </Link>
      <Link href="/admin">
        <button>Admin Page</button>
      </Link>
    </nav>
  );
}