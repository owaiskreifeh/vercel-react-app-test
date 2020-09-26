import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  const [hello, setHello] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);

      res = await fetch('/api/print_hello');
      const string = await res.text();
      setHello(string);
    }
    getDate();
  }, []);
  return (
    <main>
      <p>hi there with no dddddeploymentdd </p>
      <h3>{ date }</h3>
  <h4>{hello}</h4>
    </main>
  );
}

export default App;
