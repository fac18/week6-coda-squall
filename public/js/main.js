const postButton = document.querySelector('.char-form__submit')
const getButton = document.querySelector('.return-form__submit')

// define DOM injection function for populating leaderboard with all characters
const populateAllChar = res => {
  console.log(res);
};

// define function for populating .player-section with character info
const populatePlayer = char => {

}

// populate leaderboard with all characters on loading of page
window.onload = () => {
  backendCall("/get-all-char", "GET", null, res => {
    populateAllChar(res);
  });
};
