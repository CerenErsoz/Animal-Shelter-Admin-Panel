import Link from 'next/link';
import Header from '../../components/header/header';

export default function Home() {
  return (
    <div>
      <Header /> {/* Include the Header */}
      <div className="container">
        <h1>Admin Panel</h1>
        <div className="button-group">
          <Link href="/animal/add">
            <button className="btn-primary">Add Animal</button>
          </Link>
          
          <Link href="/animal/list">
            <button className="btn-primary">List Animals</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

