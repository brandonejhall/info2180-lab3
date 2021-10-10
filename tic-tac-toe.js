"use strict";

window.onload = function(){
    var box =  document.getElementById("board").querySelectorAll("div");
    var board = document.getElementById("board")
    var win = document.getElementById("status")
    var winner = "";
    
    
    let counter = 0;
    let game_prog = ["","","","","","","","",""];

   
    
    box.forEach(function(item)
    {
        item.setAttribute("class","square");
        item.innerHTML="";
        
        
        
        item.addEventListener('click',function(){
          
        
          if (counter % 2 == 0 && this.innerHTML == ""){
              item.innerHTML = "X";
              item.setAttribute("class", "square X");
              counter++;
              game_prog[Array.from(box).indexOf(item)] = "X";
              console.log(game_prog);
              
              
              
         
              
          }
          else if(counter % 2 != 0 && this.innerHTML == ""){
              item.innerHTML = "O";
              item.setAttribute("class", "square O");
              counter++;
              game_prog[Array.from(box).indexOf(item)] = "O";
              console.log(game_prog);
          }
          

         
        });

       

        item.addEventListener('mouseover',function(){
            item.classList.add('hover');      
        }
        
        );


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
    board.onclick = function(){
        if (counter>=5){
        for (let row_check = 0; row_check<=6; row_check+=3){
            if (game_prog[row_check]==game_prog[row_check+1] &&  game_prog[row_check+1]==game_prog[row_check+2]
                && game_prog[row_check+1]==game_prog[row_check+2])
            {   
                if (game_prog[row_check]!="" || game_prog[row_check+1]!="" || game_prog[row_check+1]!=""){
                    winner = game_prog[row_check];
                    row_w = true
                    


                }
            } 
        };
        for (let col_check = 0; col_check<=3; col_check++){
            if (game_prog[col_check]==game_prog[col_check+3] && game_prog[col_check]==game_prog[col_check+6]&& 
                 game_prog[col_check+3]==game_prog[col_check+6])
            {
                if (game_prog[col_check]!="" || game_prog[col_check+3]!="" || game_prog[col_check+6]!=""){
                    winner = game_prog[col_check];
                    col_w = true;
                };
            };
        };

        if (game_prog[0] == game_prog[4] && game_prog[0]== game_prog[8] && game_prog[4] == game_prog[8])
            {
                winner = game_prog[0];
                d_check =true;
            };

         if (game_prog[2] == game_prog[4] && game_prog[2]== game_prog[6] && game_prog[4] == game_prog[6])
            {
                winner = game_prog[2];
                d_check =true;
            };
        };

        if (!row_w && !col_w && !d_check && !game_prog.includes(""))
        {
            win.innerHTML = "Game-Ends in Draw";
            win.setAttribute("class","you-won")
        }

        if (row_w || col_w || d_check)
    {   
        
        win.innerHTML = "Congratulations! "+ winner +" is the Winner!";
        win.setAttribute("class","you-won")
    }

    }
    
    
   
    
     
    
};