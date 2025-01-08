```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This is a minimal Next.js API route to test a bug.
  res.status(200).json({ text: 'Hello' });
}
```

```javascript
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/hello');
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? <p>Data from API: {JSON.stringify(data)}</p> : <p>Loading...</p>}>
    </div>
  );
}
```