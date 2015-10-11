$( document ).ready(function() {

	var dilmes = [];
	dilmes.push('Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses.');
	dilmes.push('No meu xinélo da humildade eu gostaria muito de ver o Neymar e o Ganso. Por que eu acho que.... 11 entre 10 brasileiros gostariam. Você veja, eu já vi, parei de ver. Voltei a ver, e acho que o Neymar e o Ganso têm essa capacidade de fazer a gente olhar.');
	dilmes.push('A única área que eu acho, que vai exigir muita atenção nossa, e aí eu já aventei a hipótese de até criar um ministério. É na área de... Na área... Eu diria assim, como uma espécie de analogia com o que acontece na área agrícola.');
	dilmes.push('Ai você fala o seguinte: "- Mas vocês acabaram isso?" Vou te falar: -"Não, está em andamento!" Tem obras que "vai" durar pra depois de 2010. Agora, por isso, nós já não desenhamos, não começamos a fazer projeto do que nós "podêmo fazê"? 11, 12, 13, 14... Por que é que não?');
	dilmes.push('A população ela precisa da Zona Franca de Manau, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!');
	dilmes.push('Se hoje é o dia das crianças... Ontem eu disse: o dia da criança é o dia da mãe, dos pais, das professoras, mas também é o dia dos animais, sempre que você olha uma criança, há sempre uma figura oculta, que é um cachorro atrás. O que é algo muito importante!');
	dilmes.push('Todos as descrições das pessoas são sobre a humanidade do atendimento, a pessoa pega no pulso, examina, olha com carinho. Então eu acho que vai ter outra coisa, que os médicos cubanos trouxeram pro brasil, um alto grau de humanidade.');
  dilmes.push('Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar, então é... é... Já vivi muito sem dinheiro, já vivi muito com dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a senhora ganha R$10 mil por mês. -Dilma: O que que é R$10 mil?');
	dilmes.push('Até agora! Até agora, a energia hidrelétrica é a mais barata, em termos do que ela dura, da sua manutenção e também pelo fato da água ser gratuita e da gente poder estocar.');
  dilmes.push('Se.. o vento podia ser isso também, mas você não conseguiu ainda tecnologia pa estocar vento, então, se a contribuição dos outros países, vamo supor que seja, desenvolver uma tecnologia que seja capaz de na eólica estocar.. te, ter uma forma do ce estoca, porque o vento, ele é diferente em horas do dia, então vamos supor que, que vente mais a noite, cumé que eu faria pra estocar isso.');
  dilmes.push('Hoje nós usamos as linhas de transmissão, ce joga de lá pra cá, de lá pra lá pra poder capturar isso, mas se tiver uma tecnologia desenvolvida nessa área, nós.. todos nós nos beneficiaremos, o mundo inteiro.');

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex ;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

	$(".botao").click(function(){

		shuffle(dilmes);
		var dilmesnovo = "";
		var contador = 0;
		var numeroatual = $(this).text();
		$.each( dilmes, function( key, value ) {
		  if(contador == numeroatual){
		  	return false
		  }else{
		  	contador = contador +1;
		  }
		  dilmesnovo = dilmesnovo + value + "\n\n" ;
		});
		$(".dilmes").val(dilmesnovo);
	});


    $(".gerar_dilmes").zclip({
		path: "js/ZeroClipboard.swf",
		copy: function(){
		    return $(this).prev().val();
	    }
	});

	$(".dilmes-ipsum-logo").mouseover(function(){
        $(".ola-internautas").fadeIn("slow");

       setTimeout(
	   function()
	   {
	   	$(".ola-internautas").fadeOut("slow");
	   }, 3000);
	})

});