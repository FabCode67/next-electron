import { useRouter } from 'next/router';

export default function Settings() {
  const router = useRouter();
  
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Settings</h1>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Application Settings</h2>
        
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Theme</label>
          <select style={{ 
            width: '100%', 
            padding: '8px', 
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}>
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Notifications</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="notifications" style={{ marginRight: '8px' }} />
            <label htmlFor="notifications">Enable desktop notifications</label>
          </div>
        </div>
        
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Auto Launch</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="autolaunch" style={{ marginRight: '8px' }} />
            <label htmlFor="autolaunch">Launch on system startup</label>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => router.back()}
        style={{
          marginTop: '20px',
          backgroundColor: '#6b7280',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Back to Home
      </button>
    </div>
  );
}