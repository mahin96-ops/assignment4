
const allBtn =  document.getElementById("all-btn");
allBtn.addEventListener("click", function(){
    cardPage.style.display = "block";
    interviewPage.style.display = "none";
    rejectedPage.style.display = "none";
});


const interviewBtn = document.getElementById("interview-btn");
interviewBtn.addEventListener("click", function(){
    cardPage.style.display = "none";
    interviewPage.style.display = "block";
    rejectedPage.style.display = "none";
});


const rejectedBtn =document.getElementById("rejected-btn");
rejectedBtn.addEventListener("click", function(){
    cardPage.style.display = "none";
    interviewPage.style.display = "none";
    rejectedPage.style.display = "block";
});





const cardPage = document.getElementById("card-page");
const interviewPage = document.getElementById("interview-page");
const rejectedPage = document.getElementById("rejected-page");


   function uptadeGulaCount(){
    const cardPageCount =cardPage.getElementsByClassName("card").length;
    const interviewPageCount = interviewPage.getElementsByClassName("card").length;
    const rejectedPageCount =rejectedPage.getElementsByClassName("card").length;

    const green = document.getElementById("green")
    green.innerText = (interviewPageCount);  
    if(interviewPageCount === 0){
        interviewPage.style.display = "flex";
        interviewPage.style.flexDirection = "column";
        interviewPage.style.alignItems = "center";
    }

    const red = document.getElementById("red");
     red.innerText = (rejectedPageCount);
     if(rejectedPageCount === 0){
        rejectedPage.style.display = "flex";
        rejectedPage.style.flexDirection = "column";
        rejectedPage.style.alignItems = "center";
    }

    const total = document.getElementById("total");
     total.innerText = Number(cardPageCount) + Number(interviewPageCount) + Number(rejectedPageCount);
    
};


const cards = cardPage.getElementsByClassName("card");
for(const card of cards){
    const greenBtn = card.getElementsByClassName("green-btn")[0];
    const redBtn = card.getElementsByClassName("red-btn")[0];
    const notBtn = card.getElementsByClassName("not-btn")[0];
    const trashBtn = card.getElementsByClassName("trash")[0];

  greenBtn.addEventListener("click", function(){
        interviewPage.appendChild(card);
        uptadeGulaCount();
 });

    redBtn.addEventListener("click", function(){
        rejectedPage.appendChild(card);
        uptadeGulaCount();
    });

   notBtn.addEventListener("click", function(){
        cardPage.appendChild(card);
        uptadeGulaCount();
    });

    trashBtn.addEventListener("click", function(){
        card.remove();
        uptadeGulaCount();
    });
}


 const call = uptadeGulaCount();

 function hide(){
 const reject = document.getElementsByClassName('hello')
 const interView = document.getElementsByClassName('hii');


 }
