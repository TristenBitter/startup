# **BANK** *dice* *game*

### Elevator pitch: 
    Want to destroy your friends in a game of dice? Well, look no further! Bank is a popular game of chance and probability where each player tries to "Bank" the most points. In this pass-and-play game, each player can tap out at any time. tap out too soon and you won't gain many points and if you wait too long you could lose it all! 

### Key Features
    + Login provides users with customizations to personalize their account
    + The screen will display humorous comments when logging in and when rolling the dice.
    + Play Solo or Add up to 6 players in a game
    + Choose how many rounds you want to play (up to 10 rounds)
    + The app will keep track of the Rounds, the current table score, and the Bank score of each player round to round. The players will not have to do any calculations or keep score.
    + Rolling the dice is simple, just press the Big Geen Button to take a chance.
    + Each player can choose to tap a button to "Bank" and "cash out" the table score into their personal Bank score before any player rolls the dice.
    + When a winner is declared each player's score will be displayed on the leaderboard for all to see. It will rank them among all other previous players.   
    
### Technologies    

    + HTML - will be used for the basic structural elements of the app, like the different option tabs. The main framework.
    + CSS - will be used for styling the words and animating the dice roll, and pop-up phrases. 
    + JavaScript - will be used to interact with the game and play, such as when buttons are pressed, totaling scores, and other logical functionality used.
    + Web service - will be used to connect remotely to a web service to save the scores.
    + Authentication - will be used for logging in and creating new accounts.
    + Database persistence - will be used to save the scores of players in a database as well as login information
    + WebSocket - will be used to connect to the web to show current record holders in the high score tab of the game.

### Images
    
   ![This is a picture of the Bank dice game app layout](IMG_4742.jpg)





  ### HTML Startup Notes
        Monday, Feb 5th, 2024 "HTML" I was able to implement the header of each of the files and link them together. 
        I created boxes, tables, and buttons that I will later implement in the continuing stages of development. 
        I set up the skeleton for the gameplay The previous assignments we did were super helpful. I found myself using those as a reference to help make the skeleton of this program. 
        I had a hard time finding an image that would actually work. When I used a stock photo it seemed to work. 
        While doing this project I have learned a lot more about the basic structure of how HTML works. I'm excited to learn how to implement CSS and JavaScript.
        To implement web Sockets I will be updating the score in real time. 
        Data will be stored on the score page as well
        I will use a web service to implement the roll dice part of play
### CSS Startup Notes
Thursday, Feb 15th, 2024   "CSS" 
+ I was able to incorporate some classes into my HTML and apply them in CSS. Through that process, I learned that it is important to use the correct declarations of classes within a <div> or an <a> or some other element. 
+ I was able to use FLEX on each part of the page to get it to re-align depending on the size of the screen. 
+ I learned to align my Title in the center.
+ Also I learned how to get my page to have a named title when you hover over the web Page. 
+ I learned to change the color of text and the background to whatever I found appealing. 
+ It was difficult at first but I was able to align the navigation to the left size and space it from the name of the page Like "Let's Play".


### JAVASCRIPT Startup  Notes
Wednesday, March 6th, 2024   "JavaScript"
+ The Support for Future Login was implemented on the home page of my startup. The Player 1 text box entry is the UserName placeholder, and the Password button below with allow for authentication upon pressing "play".
+ The Database data support code has been implemented in my loadScores() function in "scores.js" It is fully playable and will store the high scores of the winner of each round.
+ The WebSocket support was implemented in "scores.js" as well and now shows "other player's scores" just like Simon does. Further implementation will be done later.
+ I used JavaScript to thoroughly support my application's logic and gameplay throughout my "play.js" file, I even simulated a dice roll using math.random() which is called when they press the Roll Dice Button. The game saves the table score to a player's individual score when they press the "bank" button. The game is playable and actually really fun! I had a lot of fun coding it even though it took me much longer than anticipated...
        
### SERVICE Stratup Notes
+ 40% - I Created an HTTP service using Node.js and Express in my index.js 
+ 10% - I have Frontend served up using Express static middleware in my index.js
+ 10% - My frontend calls a third-party service endpoint on the about.js and prints out a Chuck Noris Joke, they're actually pretty funny. check it out.
+ 20% - My backend provides service endpoints in my index.js
+ 20% - My frontend calls my service endpoints in my play.js and scores.js
