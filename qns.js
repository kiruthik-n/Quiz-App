let questions=new Array("Who Invented JavaScript ?","Which one of the following also known as Conditional Expression ?","The function and  var are known as ?","How can a datatype be declared to be a constant type ?","When an operator’s value is NULL, the typeof returned by the unary operator is ?");
let options=new Array("Douglas Crockford","Sheryl Sandberg","Brendan Eich","Kiruthik","Alternative to if-else","Switch statement","If-then-else statement","immediate if","Keywords","Data types","Declaration statements","Prototypes","const","var","const","let","boolean","undefined","integer","object");
let answers=new Array('c','d','c','c','d');
let selected=new Array();
document.getElementById("quest").innerHTML=questions[0];
document.getElementById("aa").innerHTML=options[0];
document.getElementById("bb").innerHTML=options[1];
document.getElementById("cc").innerHTML=options[2];
document.getElementById("dd").innerHTML=options[3];


let i=1;let j=4;let score=0;
function display(){
   
 if(i<=5 & j<20){
    document.getElementById("quest").innerHTML=questions[i];
i++;
document.getElementById("aa").innerHTML=options[j];
j++;
document.getElementById("bb").innerHTML=options[j];
j++;
document.getElementById("cc").innerHTML=options[j];
j++;
document.getElementById("dd").innerHTML=options[j];
j++;
 } else{
    alert("Press Submit");
 }
 document.getElementsByName('demo').forEach(radio=>{
    if(radio.checked){
        selected.push(radio.value);
        console.log(selected);
        
    }
 });
 

};
let x=0;

function submit(){

        for(let data1=0;data1<5;data1++){
            if(selected[data1]===answers[x]){
                score=score+1;
            }
            x++;
        }
    if(score==5){
        document.getElementById("result").innerHTML=`EXCELLENT ! \xa0  Your Score is : ${score} / 5`;
    }else if(score>=3 & score<=4){
        document.getElementById("result").innerHTML=`GOOD ! \xa0 Your Score is : ${score} / 5`;
    }else{
        document.getElementById("result").innerHTML=`KEEP LEARNING ! \xa0 Your Score is : ${score} / 5`;
    }
    document.getElementById("submit").disabled=true;
    document.getElementById("nxtqn").disabled=true;
   //document.getElementsByClassName("container").innerHTML=`Your Score is ${score} out of 5`;
   
        //    console.log(answers);
           // console.log(selected);

}