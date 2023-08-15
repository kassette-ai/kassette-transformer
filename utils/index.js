function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    
    return randomString;
}
  
function generateRandomStringWithTimestamp(length) {
    const timestamp = new Date().getTime().toString();
    const randomPart = generateRandomString(length - timestamp.length);
  
    return randomPart + timestamp;
}
  
export {
    generateRandomStringWithTimestamp,
    generateRandomString,
}
