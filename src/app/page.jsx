import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/AboutMe">About Me</Link>
      <br/>
      <Link href={{
        pathname: "AboutMe",
        query: {
          name: "Ceren",
          surname: "Ersoz"
        }
      }}>About Me</Link>
    </div>
   

  );
}
