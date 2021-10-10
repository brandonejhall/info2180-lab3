"use strict";
// load event when the whole page has loaded
window.onload = function(){
    
    var box =  document.getElementById("board").querySelectorAll("div");
    var board = document.getElementById("board")
    var win = document.getElementById("status")
    var winner = "";
    
    
    let counter = 0;
    // list which holds game progress
    let game_prog = ["","","","","","","","",""];

   
    // forEach function on box variable affects each div within div with id board 
    box.forEach(function(item)
    {
        // sets each div's class to square making it visible on the webpage
        item.setAttribute("class","square");
        //sets the inner HTML of each div to ""
        item.innerHTML="";
        
        
        // When click action is performed on any div the following conditions
        //are checked
        item.addEventListener('click',function(){
          
        // X goes first and ensuring if div's innerHTML is not "" it cant bee changed again(anti-cheat)
          if (counter % 2 == 0 && this.innerHTML == ""){
              //sets specific div clicked innerHTML to X
              item.innerHTML = "X";
              //sets the div class to square.X
              item.setAttribute("class", "square X");
              //counter is incremented inorder to follow the amount of possible moves in game
              counter++;
              //the index of the div clicked is used to place X in the same index of game_prog
              //in order to follow the game properly
              game_prog[Array.from(box).indexOf(item)] = "X";
              
              
              
          }//O goes second and ensuring if div's innerHTML is not "" it cant bee changed again(anti-cheat)
          else if(counter % 2 != 0 && this.innerHTML == ""){
              //sets specific div clicked innerHTML to O
              item.innerHTML = "O";
              //sets the div class to square.O
              item.setAttribute("class", "square O");
              //counter is incremented inorder to follow the amount of possible moves in game
              counter++;
              //the index of the div clicked is used to place O in the same index of game_prog
              //in order to follow the game properly
              game_prog[Array.from(box).indexOf(item)] = "O";
              
          }
          

         
        });

       
        // This event listener is wating on the mouse to be over any div to add hover to it's class
        item.addEventListener('mouseover',function(){
            item.classList.add('hover');      
        }
        
        );

        // This event listener is waiting on the mouse to leave div to revert it back to it's original class
        item.addEventListener('mouseout',function(){

            if (item.innerHTML == "X")
            {
                item.setAttribute("class","square X"); 
            }

            else if (item.innerHTML == "O")
            {
                item.setAttribute("class","square O"); 
            }

            else
            {
                item.setAttribute("class","square")
            }

                    
        }
        
        );


    });

    
    
    var row_w = false;
    var col_w =false;
    var d_check = false;

    //Anytime the board is clicked the following conditions are checked 
    board.onclick = function(){
        //Waits until 5 moves haves been played to start checking
        if (counter>=5){
        // Uses for loop to check each row
        for (let row_check = 0; row_check<=6; row_check+=3){
            // checks if all rows are equal and in the right order
            if (game_prog[row_check]==game_prog[row_check+1] &&  game_prog[row_check+1]==game_prog[row_check+2]
                && game_prog[row_check+1]==game_prog[row_check+2])
            {   
                //ensures that no div has an innerHTML of ""
                if (game_prog[row_check]!="" || game_prog[row_check+1]!="" || game_prog[row_check+1]!=""){
                    //winner is set to one of the equal indexes
                    winner = game_prog[row_check];
                    // signifies a row was used to win
                    row_w = true
                    


                }
            } 
        };
        // Uses for loop to check each columns
        for (let col_check = 0; col_check<=3; col_check++){
            // checks if all columns are equal and in a the right order
            if (game_prog[col_check]==game_prog[col_check+3] && game_prog[col_check]==game_prog[col_check+6]&& 
                 game_prog[col_check+3]==game_prog[col_check+6])
            {
                //ensures that no div has an innerHTML of ""
                if (game_prog[col_check]!="" || game_prog[col_check+3]!="" || game_prog[col_check+6]!=""){
                     //winner is set to one of the equal indexes
                    winner = game_prog[col_check];
                    // signifies a column was used to win
                    col_w = true;
                };
            };
        };
        // checks if user won diagonally from top left to bottom right
        if (game_prog[0] == game_prog[4] && game_prog[0]== game_prog[8] && game_prog[4] == game_prog[8])
            {
                // winner is set to one of the equal indexes
                winner = game_prog[0];
                // signifies game was was won diagonally
                d_check =true;
            };
        // checks if user won diagonally from bottom left to top right
        if (game_prog[2] == game_prog[4] && game_prog[2]== game_prog[6] && game_prog[4] == game_prog[6])
            {
                winner = game_prog[2];
                d_check =true;
            };
        };

        //Checks if game ends in draw by ensuring all indexes of game_prog was filled
        // and no wining combination was found from row,coloumn or diagonally
        if (!row_w && !col_w && !d_check && !game_prog.includes(""))
        {
            win.innerHTML = "Game-Ends in Draw";
            win.setAttribute("class","you-won")
        }
        // Checks if there is any winning combination
        if (row_w || col_w || d_check)
    {   
        //Changes the innerHTML of div with status class declared as win 
        win.innerHTML = "Congratulations! "+ winner +" is the Winner!";
        //sets attribute of win
        win.setAttribute("class","you-won");
        // disables the possibility of clicking anymore boxes after winner is declared(anti-cheat)
        board.style.pointerEvents = 'none';
            

    }

    }
    
    
    var new_game =document.getElementById("game").getElementsByClassName("btn")
    //when new_game button is clicked page is refreshed.
    new_game[0].addEventListener("click",function(){
        window.location.reload(true);
    })

    
   
    
     
    
};