
var p1=document.querySelector("#one");
var p2=document.querySelector("#two");
var p3=document.querySelector("#done");
var s1=document.querySelector("#first");
var s2=document.querySelector("#second");
var w=document.querySelector("#winner");
var inp=document.querySelector("input");
var p1score=0;
var p2score=0;
var win=5;
var gameover=false;
p1.addEventListener("click",function(){

    if(!gameover)
    {
	var t=++p1score;
	if(t == win)
	{
		gameover=true;
		first.style.color="green";
	}
   first.textContent= t;
    }
})

p2.addEventListener("click",function(){
    if(!gameover)
    {
	var q=++p2score;
	if(q ==win)
	{
		gameover=true;
		second.style.color="green";
	}
   second.textContent= q;
    }
})
p3.addEventListener("click",function(){
	first.textContent=0;
	second.textContent=0;
	p1score=0;
	p2score=0;
	gameover=false;
	first.style.color="black";
	second.style.color="black";
});
