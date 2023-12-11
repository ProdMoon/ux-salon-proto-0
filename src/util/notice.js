if (location.origin.includes('localhost')) {
  console.log('localhost');
} else {
  const url = 'https://wh.jandi.com/connect-api/webhook/14884583/427982781595f2ec6ae9dbb41f72186e';
  const data = {
    body: `New User to ${location.href}`,
    connectColor: '#FAC11B',
    connectInfo: [
      {
        title: 'User Agent',
        description: navigator.userAgent
      },
      {
        title: 'Referrer',
        description: document.referrer
      },
      {
        title: 'Current Time',
        description: new Date().toLocaleString()
      }
    ]
  };
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.tosslab.jandi-v2+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  fetch(url, options);
}
