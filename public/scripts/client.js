/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(() => {
  loadTweets();
  formSubmission();
});

const loadTweets = () => {
  $.ajax('/tweets', { 
    method: 'GET',
  })
  .done(function(response) {
    $('#tweets-container').empty(); 
    tweetRender(response);
  })
};

const tweetCreater = (tweet) => {
  const user = tweet.user;
  const content = tweet.content;
  const timeSince = timeago.format(tweet.created_at);

  const tweetTemplate = 
  `
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
    <div class="time">${timeSince}</div>
    <div class="icons">
      <span><i class="fa-solid fa-flag"></i>&nbsp</span>
      <span><i class="fa-solid fa-retweet"></i>&nbsp</span>
      <span><i class="fa-solid fa-heart"></i></span>
    </div>
  </footer>
  </article>
  <br/>
  `;

  return tweetTemplate;
};

const tweetRender = (tweets) => {
  tweets.reverse();
  for (const tweet of tweets) {
    const $tweet = tweetCreater(tweet);
    $('#tweets-container').append($tweet);
  }
};

const formSubmission = () => { 
  const $pointer = $('nav i');
  $pointer.on('click', function() {
    $('textarea').focus(); 
  });
  const $form = $('#tweet-form');
  $form.submit(function(event) {
    event.preventDefault();
    
    const $tweetInput = $('#tweet-text');
    if (!$tweetInput.val()) { 
      alert("You can't send a blank tweet!");
    } else if ($tweetInput.val().length > 140) {
      alert("Too many characters in tweet!");
    } else {
      $.ajax('/tweets', { 
        method: 'POST',
        data: $(this).serialize(),
      })
      .done(() => {
        loadTweets(); 
      })
    }

  $('#tweet-text').val(''); 
  $('.counter').val(140).css('color', '#545149'); 
  });
};


