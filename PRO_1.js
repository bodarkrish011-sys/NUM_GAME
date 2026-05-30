function game()
{
    let gene_num=Math.floor(Math.random()*100)+1;
    if(gene_num <=15 && gene_num >=1)
    {
        alert("Hint : lower Stater-Rage Number");
    }
    else if(gene_num <=30 && gene_num >=16)
    {
        alert("Hint : higher Stater-Rage Number");
    }
    else if(gene_num <=45 && gene_num >=31)
    {
        alert("Hint : lower Mid-Rage number");
    }
    else if(gene_num <=60 && gene_num >=46)
    {
        alert("Hint : higher Mid-Rage Number");
    }
    else if(gene_num <=80 && gene_num >=61)
    {
        alert("Hint : lower End-Rage Number");
    }
    else if(gene_num <=100 && gene_num >=81)
    {
        alert("Hint : higher End-Rage Number");
    }
    

    let user_num;
    let i=11;
    while(gene_num != user_num)
    {
        user_num=prompt("gusse the number (between 1 to 100) :");
        i--;
        alert("Try Left :"+ i );
        if(i==0)
        {
            alert("Sorry You are Lost the game !!, Try again .")
            game();
        }
    }

    alert("Congrulations, You won The Game");
    

    
}

function Stop_game()
{
    alert("You game is stoped !!, start with new one .")
}