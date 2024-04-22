const redirectToSteamAuth = () => {
    try {
      window.location.href = 'https://countertrade.vit.ooo/v1/auth/steam';
    } catch (error) {
      console.error('Error redirecting to Steam authentication:', error);
    }
  };

module.exports = redirectToSteamAuth