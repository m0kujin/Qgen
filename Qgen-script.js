$(document).ready(function(){
  randomQuote();

  var quote;
  var author;

  function randomQuote(){
    var url = "http://quotes.stormconsultancy.co.uk/quotes.json";
    var randomNumber = Math.floor(Math.random() * 44);
    $.getJSON(url, function(json){
      quote = json[randomNumber].quote;
      author = json[randomNumber].author;
      $(".quoteSpan1").text(quote);
      $(".quoteSpan2").text("-"+ author);
    });
  };

  $("#newQuoteButton").click(function(){
    randomQuote();
  });

  $("#tweetButton").click(function(){
    window.open("https://twitter.com/intent/tweet?text=" + quote + " - " + "author");
  });
});
