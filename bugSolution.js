```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
```

```javascript
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/hello');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      {data ? <p>Data from API: {JSON.stringify(data)}</p> : <p>Loading...</p>}
    </div>
  );
}
```