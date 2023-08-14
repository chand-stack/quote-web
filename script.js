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

  const newquote = [
    {
      quote: "The future depends on what you do today.",
      writer: "Mahatma Gandhi",
      Image : "https://images.unsplash.com/photo-1640537122744-8df5577a7031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=401&q=80"
    },
    {
      quote: "Believe you can and you're halfway there.",
      writer: "Theodore Roosevelt",
      Image: "https://images.unsplash.com/photo-1585066039857-a33b12c14f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=430&q=80"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      writer: "Steve Jobs",
      Image:"https://images.unsplash.com/photo-1569769107543-e0f61bab8e02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      writer: "Albert Schweitzer",
      Image: "https://images.unsplash.com/photo-1565029644496-8e3b4e4b9b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      writer: "Sam Levenson",
      Image:"https://images.unsplash.com/photo-1589868033293-a721123d31ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
    },
    {
      quote: "The harder the conflict, the greater the triumph.",
      writer: "George Washington",
      Image: "https://images.unsplash.com/photo-1585076800588-77e0884c3191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=486&q=80"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      writer: "Franklin D. Roosevelt",
      Image: "https://images.unsplash.com/photo-1580128637215-659d70729ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=608&q=80"
    },
    {
      quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      writer: "Christian D. Larson",
      Image: "https://images.unsplash.com/photo-1520642413789-2bd6770d59e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      quote: "The secret of getting ahead is getting started.",
      writer: "Mark Twain",
      Image: "https://images.unsplash.com/photo-1612026559146-e23b0ffc5f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      writer: "Steve Jobs",
      Image: "https://images.unsplash.com/photo-1616061098842-e5b18be81f5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    }
  ]

  document.getElementById('btn-2').addEventListener('click', function (){
    
    let quotes = Math.round(Math.random()*newquote.length);

    document.getElementById('quote-2').innerText = newquote[quotes].quote;
    document.getElementById('writer-2').innerText = newquote[quotes].writer;
    document.getElementById('writer-img').src = newquote[quotes].Image
    
    

  })

  