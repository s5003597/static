fetch('http://127.0.0.1/message/3').then((response) => response.json()).then((data) => {
    fetch('http://127.0.0.1/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"message": data})
    }).then(res => res.json()).then(res => console.log(res));
});
