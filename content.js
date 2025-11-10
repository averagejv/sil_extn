// wow what a stellar extention
(function(){
    // check if already loaded
    if (window.guardianInjected){
        return;
    }
    window.guardianInjected = true;

    //math generation function
    const ops = ["+", "-"];
    function getRandomNumber(max){
        return Math.floor(Math.random() * max);
    }
    var nums = [];
    for (var i = 0; i < 4; i++){
        nums.push(getRandomNumber(100));
    }
    const op1 = ops[getRandomNumber(2)];
    const op2 = ops[getRandomNumber(2)];

    var expr = `${nums[0]} ${op1} ${nums[2]} ${op2} ${nums[1]}`;
    let result = nums[0];
    result = op1 === "+" ? result + nums[2] : result - nums[2];
    result = op2 === "+" ? result + nums[1] : result - nums[1];

    //time for the actual DOM portion of this code
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'black';
    overlay.style.opacity = 0.95;
    overlay.style.zIndex = '1000';            
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.flexDirection = 'column';
    
    //show instructions
    const header = document.createElement("h1");
    header.textContent = "PROVE THAT YOU DESERVE YOUTUBE";
    header.style.whiteSpace = "pre-line";
    header.style.textAlign = "centre";
    header.style.color = "white";
    header.style.fontSize = "30px";
    header.style.marginBottom = "10px";

    const instruction = document.createElement("h2");
    instruction.textContent = "\n SOLVE THE FOLLOWING";
    instruction.style.textAlign = "centre";
    instruction.style.color = "whitesmoke";
    instruction.style.fontSize = "20px";

    const br = document.createElement('br') ;
    
    //show questions
    const question = document.createElement("h2");
    question.textContent = `${expr} ${" = ?"}`;
    question.style.fontSize = "50px";
    question.style.color = "white";
    question.style.marginBottom = "5px";

    //get input
    const answer = document.createElement("input");
    answer.type = "number";
    answer.style.textAlign = "center";
    answer.style.opacity = "1";
    answer.style.fontSize = "30px";
    answer.style.borderRadius = "9999px";
    answer.style.color = "black";
    answer.addEventListener("keypress", function(event){
        if (event.key === "Enter"){
            const fin_ans = Number(answer.value);
            if (fin_ans === result){
                overlay.remove();
                const praises = [
                    "good.",
                    "you really earned it",
                    "don't get too complacent...",
                    "*clap clap*"
                ]
                alert(praises[getRandomNumber(praises.length)]);
            } else {
                const insults = [
                    "go back to kindergarten",
                    "tragic.",
                    "wow.", 
                    "time to buy a calculator?", 
                    "you are NOT smarter than a 5th grader"
                ];
                alert(insults[getRandomNumber(insults.length)]);
            }
        }
    });

    overlay.append(header,instruction,br,question,answer);
    document.body.appendChild(overlay);
}
)();
