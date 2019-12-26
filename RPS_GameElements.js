function ComputerPlay()
{
    var selection = Math.ceil(Math.random() * 3);
    console.log("Selection: " + selection);
    switch(selection)
    {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            break;
    }
}

function ProcessRound(player, computer)
{
    var result = "Whoops!";
    if (player == "rock")
    {
        if(computer == "rock")
        {
            result = "It's a tie! try again!";
        }
        if(computer == "paper")
        {
            result = "You lost! Try Again.";
        }
        if(computer == "scissors")
        {
            result = "You won! Congrats!";
        }
    }

    if (player == "paper")
    {
        if(computer == "paper")
        {
            result = "It's a tie! try again!";
        }
        if(computer == "scissors")
        {
            result = "You lost! Try Again.";
        }
        if(computer == "rock")
        {
            result = "You won! Congrats!";
        }
    }

    if (player == "scissors")
    {
        if(computer == "scissors")
        {
            result = "It's a tie! try again!";
        }
        if(computer == "rock")
        {
            result = "You lost! Try Again.";
        }
        if(computer == "paper")
        {
            result = "You won! Congrats!";
        }
    }

    return result;
}