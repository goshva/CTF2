function getCookieValue(cookieName: string): string | null {
    const cookiesString: string = document.cookie;
  
    const cookiesArray: string[] = cookiesString.split(';');
  
    for (let i = 0; i < cookiesArray.length; i++) {
      const cookie: string[] = cookiesArray[i].split('=');
      if (cookie[0].trim() === cookieName) {
        return cookie[1];
      }
    }
    return null;
  }

module.exports = getCookieValue