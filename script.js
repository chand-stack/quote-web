const object = [
    {
      quote: "''The only way to do great work is to love what you do.''",
      writer: "-Steve Jobs"
    },
    {
      quote: "''In three words I can sum up everything I've learned about life: it goes on.''",
      writer: "-Robert Frost"
    },
    {
      quote: "''The future belongs to those who believe in the beauty of their dreams.''",
      writer: "-Eleanor Roosevelt"
    },
    {
      quote: "''Success is not final, failure is not fatal: It is the courage to continue that counts.''",
      writer: "-Winston Churchill"
    },
    {
      quote: "''The only limit to our realization of tomorrow will be our doubts of today.''",
      writer: "-Franklin D. Roosevelt"
    },
    {
      quote: "''The greatest glory in living lies not in never falling, but in rising every time we fall.''",
      writer: "-Nelson Mandela"
    },
    {
      quote: "''To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.''",
      writer: "-Ralph Waldo Emerson"
    },
    {
      quote: "''Life is 10% what happens to us and 90% how we react to it.''",
      writer: "-Charles R. Swindoll"
    },
    {
      quote: "''The best revenge is massive success.''",
      writer: "-Frank Sinatra"
    },
    {
      quote: "''Believe you can and you're halfway there.''",
      writer: "-Theodore Roosevelt"
    }
  ]

  document.getElementById('btn').addEventListener('click', function (){
    
    let quotes = Math.round(Math.random()*object.length);

    document.getElementById('quote').innerText = object[quotes].quote;
    document.getElementById('writer').innerText = object[quotes].writer;
    
    

  })