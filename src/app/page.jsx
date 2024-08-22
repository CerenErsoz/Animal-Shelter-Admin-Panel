import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Animal Shelter Admin Panel</h1>
      
      <div style={{ marginTop: '30px' }}>
        <Link href="/animal/add">
          <button style={buttonStyle}>Add Animal</button>
        </Link>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <Link href="/animal/list">
          <button style={buttonStyle}>List Animals</button>
        </Link>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <Link href="/animal/manage-status">
          <button style={buttonStyle}>Manage Animal Status</button>
        </Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};