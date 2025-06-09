import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
export default function Home() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Home</h1>
      <Link to={'/login'}>Login</Link>
      <Button onClick={handleClick}>hello</Button>
      <div className="flex-center">Count: {count}</div>
    </div>
  );
}
