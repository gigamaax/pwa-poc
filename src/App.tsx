import { useState } from 'react';

import PWABadge from './PWABadge.tsx'

import './App.css'

function Home({ onClick: onClick }: { onClick: (id: number) => void }) {
  return (
    <>
      <h1>Home</h1>

      {Array.from({ length: 100 }).map((_, i) => (
        <div className="card" onClick={() => onClick(i)}>
          <div>Fake Form {i + 1}</div>
          <div>Edited 10/02/20204</div>
          <div>DRAFT</div>
        </div>
      ))}
    </>
  );
}

function Detail() {
  return (
    <>
      <h1>Fake Form</h1>
      {Array.from({ length: 100 }).map(() => (
        <div style={{ textAlign: 'left', marginBottom: '10px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      ))}
    </>
  );
}

function App() {
  const [viewId, setViewId] = useState<number | null>(null)

  return (
    <>
      {viewId != null ? <Detail /> : <Home onClick={(id) => setViewId(id)} />}
      <PWABadge />
    </>
  )
}

export default App
