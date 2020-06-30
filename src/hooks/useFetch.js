exports.useFetch = async (url, method, payload) => {
  try {
    const params = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }

    const response = await fetch(url, params);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return { status: 'failure', payload: error };
  }
};

// import { useState, useEffect } from 'react';

// exports.useFetch = async (url, method, payload) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       const params = {
//         method,
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload)
//       }

//       const response = await fetch(url, params);
//       const data = await response.json();

//       setData(data);
//       setLoading(false);
//     })();
//   }, [url]);

//   return { data, loading }
// };