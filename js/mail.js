function sendMessage() {
    const telegramUserId = document.getElementById('telegramUserId').value;
    const message = document.getElementById('message').value;
  
    // Replace 'YOUR_BOT_TOKEN' with your actual bot token
    const botToken = '6270391808:AAEeDST2kRZacIxzisJz-GBovp8C8uRHcY0';
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
    const data = new URLSearchParams({
      chat_id: telegramUserId,
      text: message,
    });
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    })
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          alert('Message sent successfully!');
        } else {
          alert('Failed to send message. Check console for details.');
          console.error(data);
        }
      })
      .catch(error => {
        alert('Error occurred. Check console for details.');
        console.error(error);
      });
  }