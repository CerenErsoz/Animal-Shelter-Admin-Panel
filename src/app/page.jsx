import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Animal Shelter Admin Panel</h1>
      
      <div className="button-group">
        <Link href="/animal/add">
          <button className="btn-primary">Add Animal</button>
        </Link>
        
        <Link href="/animal/list">
          <button className="btn-primary">List Animals</button>
        </Link>
        
        <Link href="/animal/manage-status">
          <button className="btn-primary">Manage Animal Status</button>
        </Link>
      </div>
    </div>
  );
}
