

var cards_list = ["ghini.jpg", "gtr.jpeg", "laren.jpg", "porsch.jpg", "rarri.jpg", "vette.jpeg","ghini.jpg", "gtr.jpeg", "laren.jpg", "porsch.jpg", "rarri.jpg", "vette.jpeg"];
var cards = new Array();
 
for(var i = 12;i>0;i--)
{
    var rand_id = Math.floor(Math.random() *i);
    cards.push(cards_list[rand_id]);
    cards_list.splice(rand_id,1);
}


//alert(cards[4]);

//console.log(cards);

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

 var card = $('.card');




for(let nr=0; nr<=11; nr=nr+1)
{
$('#c'+nr).on("click", function() { revealCard(nr); }); 
}



var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 6;


function revealCard(nr)
{
	var opacityValue = $('#c'+nr).css('opacity');
	
//	alert('Opacity: '+opacityValue);

	if(opacityValue != 0 && lock == false && nr != visible_nr)
	{
		lock = true;
			//alert(nr);
	
	var image = "url(img/"+cards[nr]+")";
	
	$('#c'+nr).css('background-image', image);
	$('#c'+nr).addClass('cardA', image);
	
	if(oneVisible == false)
	{
		oneVisible = true;
		visible_nr = nr;
		lock = false;
	}
	else
	{
		if(cards[visible_nr] == cards[nr])
		{
			//alert("gud");
			setTimeout(function() {hide2Cards(nr, visible_nr)}, 500);
			yes.play();
		}
		else
		{
			//alert("pal gume");
			
			setTimeout(function() {restore2Cards(nr, visible_nr)}, 750);
			no.play();
		}
		turnCounter++;
		$('.score').html('Turn counter: '+turnCounter);
		oneVisible = false;
	}

	}
	

}

function hide2Cards(nr1, nr2)
{
	$('#c'+nr1).css('opacity', '0');
	$('#c'+nr2).css('opacity', '0');
	
	pairsLeft--;
	
	if(pairsLeft == 0)
	{
		$('.board').html('<h1>You win!<br>Done in '+turnCounter+' turns <br><span class="reset" onclick="location.reload()">AGAIN???</span></h1>');
	
	}
	
	lock = false;
	
}

function restore2Cards(nr1, nr2)
{
	$('#c'+nr1).css('background-image', 'url(img/forza.png)');
	$('#c'+nr1).addClass('card');
	$('#c'+nr1).removeClass('cardA');
	
	$('#c'+nr2).css('background-image', 'url(img/forza.png)');
	$('#c'+nr2).addClass('card');
	$('#c'+nr2).removeClass('cardA');
	
	lock = false;
}

//c0.addEventListener("click", function() { revealCard(0); }); 
//c1.addEventListener("click", function() { revealCard(1); });
//c2.addEventListener("click", function() { revealCard(2); });
//c3.addEventListener("click", function() { revealCard(3); });
//c4.addEventListener("click", function() { revealCard(4); });
//c5.addEventListener("click", function() { revealCard(5); });
//c6.addEventListener("click", function() { revealCard(6); });
//c7.addEventListener("click", function() { revealCard(7); });
//c8.addEventListener("click", function() { revealCard(8); });
//c9.addEventListener("click", function() { revealCard(9); });
//c10.addEventListener("click", function() { revealCard(10); });
//c11.addEventListener("click", function() { revealCard(11); });

//var c0 = document.getElementById('c0');                             
//var c1 = document.getElementById('c1');
//var c2 = document.getElementById('c2');
//var c3 = document.getElementById('c3');
//var c4 = document.getElementById('c4');
//var c5 = document.getElementById('c5');
//var c6 = document.getElementById('c6');
//var c7 = document.getElementById('c7');
//var c8 = document.getElementById('c8');
//var c9 = document.getElementById('c9');
//var c10 = document.getElementById('c10');
//var c11 = document.getElementById('c11');

//var c0 = $('#c0');                      
//var c1 = $('#c1');
//var c2 = $('#c2');
//var c3 = $('#c3');
//var c4 = $('#c4');
//var c5 = $('#c5');
//var c6 = $('#c6');
//var c7 = $('#c7');
//var c8 = $('#c8');
//var c9 = $('#c9');
//var c10 = $('#c10');
//var c11 = $('#c11');