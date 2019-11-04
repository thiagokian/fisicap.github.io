/* Recebe os valores do artigo e do botão do artigo */
var pontuacao = 0;
/*       FASE 1              */
var start = document.getElementById('start');
var step = document.getElementById('step');
/*       FASE 1              */

/*       FASE 2              */
var step1 = document.getElementById('step1');
var next1 = document.getElementById('next1');
var voltar1 = document.getElementById('voltar1');
var ponto1 = form.op1.value;

/*       FASE 2              */

/*       FASE 3              */
var step2 = document.getElementById('step2');
var next2 = document.getElementById('next2');
var op2 = document.getElementById('op2');
var voltar2 = document.getElementById('voltar2');

/*       FASE 3              */

/*       FASE 4              */
var step3 = document.getElementById('step3');
var next3 = document.getElementById('next3');
var op3 = document.getElementById('op3');
var voltar3 = document.getElementById('voltar3');


/*       FASE 4              */


/*       FASE 5              */
var step4 = document.getElementById('step4');
var next4 = document.getElementById('next4');
var op4 = document.getElementById('op4');
var voltar4 = document.getElementById('voltar4');


/*       FASE 5              */

/*       FASE  6             */
var step5 = document.getElementById('step5');
var next5 = document.getElementById('next5');
var op5 = document.getElementById('op5');
var voltar5 = document.getElementById('voltar5');


/* quando o usuário perde durante o quiz*/
var lose1 = document.getElementById('lose1');
var lose2 = document.getElementById('lose2');

start.onclick = function(){
	step.style.display = "none";
	step1.style.display = "block";
}

voltar1.onclick = function(){
	step.style.display = "block";
	step1.style.display ="none";
}

lose00.onclick = function(){
	lose0.style.display = "none";
	step2.style.display = "block";
}

lose01.onclick = function(){
	lose1.style.display = "none";
	step3.style.display = "block";
}
lose02.onclick = function(){
	lose2.style.display = "none";
	step4.style.display = "block";
}
lose03.onclick = function(){
	lose3.style.display = "none";
	step5.style.display = "block";
}
lose04.onclick = function(){
	lose4.style.display = "none";
	calculaPontos();
}

next1.onclick = function(){
	if(document.form.op1[0].checked==false && 
		document.form.op1[1].checked==false &&
		document.form.op1[2].checked==false &&
		document.form.op1[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op1[1].checked==true){ //acerto
		pontuacao =pontuacao+1;
		step1.style.display = "none";
		step2.style.display = "block";
	}else{
		step1.style.display = "none";
		lose0.style.display = "block";
	}
}


next2.onclick = function(){
	if(document.form.op2[0].checked==false && 
		document.form.op2[1].checked==false &&
		document.form.op2[2].checked==false &&
		document.form.op2[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op2[0].checked==true){ //acerto
		pontuacao =pontuacao+1;
		step2.style.display = "none";
		step3.style.display = "block";
	}else{
		step2.style.display = "none";
		lose1.style.display = "block";
	}
}
voltar2.onclick = function(){
	step1.style.display = "block";
	step2.style.display ="none";
}

next3.onclick = function(){
	if(document.form.op3[0].checked==false && 
		document.form.op3[1].checked==false &&
		document.form.op3[2].checked==false &&
		document.form.op3[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op3[2].checked==true){
		pontuacao =pontuacao+1;
		step3.style.display = "none";
		step4.style.display = "block";
	}else{
		step3.style.display = "none";
		lose2.style.display = "block";
	}
}
voltar3.onclick = function(){
	step2.style.display = "block";
	step3.style.display ="none";
}

next4.onclick = function(){
	if(document.form.op4[0].checked==false && 
		document.form.op4[1].checked==false &&
		document.form.op4[2].checked==false &&
		document.form.op4[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op4[1].checked==true){
		pontuacao =pontuacao+1;
		step4.style.display = "none";
		step5.style.display = "block";
	}else{
		step4.style.display = "none";
		lose3.style.display = "block";
	}
}
voltar4.onclick = function(){
	step3.style.display = "block";
	step4.style.display ="none";
}

next5.onclick = function(){
	if(document.form.op5[0].checked==false && 
		document.form.op5[1].checked==false &&
		document.form.op5[2].checked==false &&
		document.form.op5[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op5[0].checked==true){
		pontuacao = pontuacao+1;
		step5.style.display = "none";
		calculaPontos();
	}else{
		step5.style.display = "none";
		lose4.style.display = "block";
	}
}
voltar5.onclick = function(){
	step4.style.display = "block";
	step5.style.display ="none";
}
/*
next6.onclick = function(){
	if(document.form.op6[0].checked==false && 
		document.form.op6[1].checked==false &&
		document.form.op6[2].checked==false &&
		document.form.op6[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op6[0].checked==true){
		param6 = form.op6.value;
		paramOp6 = parseInt(param6);
		step6.style.display = "none";
		step7.style.display = "block";
		
	}else{
		step6.style.display = "none";
		lose5.style.display = "block";
		restart4.onclick = function(){
			location.reload();
		}
	}
}
voltar6.onclick = function(){
	step5.style.display = "block";
	step6.style.display ="none";
}*/

function calculaPontos(){

	alert(pontuacao);

		/*COLOCAR AQUI OS FINAIS */
		step5.style.display = "none";
		lose4.style.display = "none";
    if(pontuacao == 0){
        step7.style.display = "block";
    }else if(pontuacao >= 3){
		step6.style.display = "block";
    }
}