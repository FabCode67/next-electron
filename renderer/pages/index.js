import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    if (window.electronAPI) {
      async function fetchUserData() {
        try {
          const data = await window.electronAPI.getUserData();
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
      
      fetchUserData();
    } else {
      setUserData({
        name: 'Browser User',
        email: 'browser@example.com',
        lastLogin: new Date().toISOString()
      });
    }
  }, []);
  
  const navigateToSettings = async () => {
    if (window.electronAPI) {
      try {
        const result = await window.electronAPI.navigateToScreen('settings');
        if (result.success) {
          router.push('/settings');
        }
      } catch (error) {
        console.error("Navigation error:", error);
        router.push('/settings');
      }
    } else {
      router.push('/settings');
    }
  };

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>
        Electron + Next.js Demo
      </h1>
      
      {userData ? (
        <div style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '16px', 
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>User Profile</h2>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Last Login:</strong> {new Date(userData.lastLogin).toLocaleString()}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={navigateToSettings}
          style={{
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Go to Settings (via IPC)
        </button>
        
        <Link href="/dashboard">
          <span style={{
            backgroundColor: '#10b981',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'inline-block'
          }}>
            Go to Dashboard (direct)
          </span>
        </Link>
      </div>
    </div>
  );
}