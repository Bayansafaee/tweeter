/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const oldTweets = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1663526962730
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1663613362730
  }
]

$(document).ready(() => {
  tweetRender(oldTweets);
});

const tweetRender = (tweets) => {
  for (const tweet of tweets) {
    const $tweet = TweetCreater(tweet);
    $('#tweets-container').append($tweet);
  }
};

FormattedDate = (jsonDate) => {
  var d = new Date(jsonDate);
  var formattedDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
  var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
  var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
  var formattedTime = hours + ":" + minutes;
  
  return formattedDate = formattedDate + " " + formattedTime;
};
  

const TweetCreater = (tweet) => {
  const user = tweet.user;
  const content = tweet.content;
  const htmlStructure = `
  <article class="tweet">
  <header>
    <span class="avatar"><img src=${user.avatars}>
    <div class="name">&nbsp ${user.name}</div></span>
    <div class="username">${user.handle}</div>
  </header>
  <div class="tweet-content">
    <p class="tweet-content-text">${content.text}</p>
  </div>
  <footer>
    <div class="time">${FormattedDate(tweet.created_at)}</div>
    <div class="icons">
      <span><i class="fa-solid fa-flag"></i>&nbsp</span>
      <span><i class="fa-solid fa-retweet"></i>&nbsp</span>
      <span><i class="fa-solid fa-heart"></i></span>
    </div>
  </footer>
  </article>
  <br/>
  `;

  return htmlStructure;
};
console.log($tweet);
