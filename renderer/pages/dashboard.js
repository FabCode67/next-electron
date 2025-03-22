import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [stats, setStats] = useState({
    activeUsers: 0,
    totalTasks: 0,
    completedTasks: 0
  });
  
  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setStats({
        activeUsers: 254,
        totalTasks: 1089,
        completedTasks: 752
      });
    }, 800);
  }, []);
  
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Dashboard</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{ 
          backgroundColor: '#e6f0ff', 
          padding: '16px', 
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#0047ab', fontSize: '16px', marginBottom: '8px' }}>
            Active Users
          </h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{stats.activeUsers}</p>
        </div>
        
        <div style={{ 
          backgroundColor: '#e6ffe6', 
          padding: '16px', 
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#006400', fontSize: '16px', marginBottom: '8px' }}>
            Total Tasks
          </h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{stats.totalTasks}</p>
        </div>
        
        <div style={{ 
          backgroundColor: '#f5e6ff', 
          padding: '16px', 
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#4b0082', fontSize: '16px', marginBottom: '8px' }}>
            Completed Tasks
          </h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{stats.completedTasks}</p>
        </div>
      </div>
      
      <Link href="/">
        <span style={{
          backgroundColor: '#6b7280',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'inline-block'
        }}>
          Back to Home
        </span>
      </Link>
    </div>
  );
}