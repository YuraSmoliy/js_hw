function greeting(username) {
  const hour = new Date().getHours();
  let greetingMsg = `new Data()`;

  if (hour >= 0 && hour < 6) {
    greetingMsg = 'Good night';
  } else if (hour >= 6 && hour < 12) {
    greetingMsg = 'Good morning';
  } else if (hour >= 12 && hour < 18) {
    greetingMsg = 'Good day';
  } else {
    greetingMsg = 'Good evening';
  }

  return `
  <div>Data of request: ${new Date()}</div> 
  <div>${greetingMsg}, ${username}!</div>
  `;
}

module.exports = {
  greeting,
};
