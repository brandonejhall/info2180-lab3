"use strict";

window.onload = function(){
    var box =  document.getElementById("board").querySelectorAll("div");
    var board = document.getElementById("board")
    console.log(box);
    
    let counter = 0;

    board.onclick = function(){
        counter++;
        console.log(counter);
    }
    
    box.forEach(function(item)
    {
        item.setAttribute("class","square");
        item.innerHTML="";
        let game_progress = []
        
        
        item.addEventListener('click',function(){
          
        
          if (counter % 2 == 0 && this.innerHTML == ""){
              item.innerHTML = "X";
              item.setAttribute("class", "square X")
              
          }
          else if(counter % 2 != 0 && this.innerHTML == ""){
              item.innerHTML = "O";
              item.setAttribute("class", "square O")
              
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
    
    
    
};