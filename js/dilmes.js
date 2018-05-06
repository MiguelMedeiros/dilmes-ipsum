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

        //Add MPS - Set/2016
	dilmes.push('Temos a mandioca e aqui nós estamos e, certamente, nós teremos uma série de outros produtos que foram essenciais para o desenvolvimento de toda a civilização humana ao longo dos séculos. Então, aqui, hoje, eu tô saudando a mandioca, uma das maiores conquistas do Brasil.')
	dilmes.push('Eu aproveito e uso de uma imagem feita pelo grande Nelson Rodrigues que dizia que os pessimistas fazem parte da paisagem assim como os morros, as praças e os arruamentos.')
	dilmes.push('Roraima é a capital mais distante de Brasília, mas eu garanto para vocês que essa distância, para nós do Governo Federal, só existe no mapa. E aí eu me considero hoje uma roraimada, roraimada, no que prova que estou bem perto de vocês.')
	dilmes.push('houve um deságio de quase... Foi um pouco mais de 38%, mas eu fico e 38% para ninguem dizer: "Ah, ela disse que era 38?", mas não é não. É 39, 38 e qualquer coisa ou é 36. 38, eu acho que é 39, mas vou dizer 38.')
	dilmes.push('Paes é o prefeito mais feliz do mundo, que dirige a cidade mais importante do mundo e da galáxia. Por que da galáxia? Porque a galáxia é o Rio de Janeiro. A via Láctea é fichinha perto da galáxia que o nosso querido Eduardo Paes tem a honra de ser prefeito.')
	dilmes.push('Eu acho que a importância da bola é justamente essa, o símbolo da capacidade que nos distingue como... Nós somos do gênero humano, da espécie Sapiens. Então, para mim essa bola é um símbolo da nossa evolução. Quando nós criamos uma bola dessas, nós nos transformamos em Homo sapiens ou mulheres sapiens.')
	dilmes.push('Não vamos colocar meta. Vamos deixar a meta aberta, mas, quando atingirmos a meta, vamos dobrar a meta.')
	dilmes.push('Já que eu falei de transporte eu vou falar, ao mesmo tempo, do aeroporto. O aeroporto que é uma outra forma de transporte.')
	dilmes.push('Aquelas cores, o Nuzman estava me explicando, porque isso é um protótipo, elas mudam. As cores internas mudam. E também que a tocha se move. Então, eu digo, diante da tocha, com uma insistência que o Galileu disse diante da inquisição:"e pur si muove!". Ou seja, "e apesar de tudo se move!".')
	dilmes.push('Agora, a rede, eu acho que ela tem um lado lúdico, sabe? Porque isso que as crianças gostam tanto no pavilhão. Porque, quando você está lá em cima... Eu não posso ficar aqui brincando, não é? Então... Mas você percebe direitinho com é que dá para brincar, porque se você inclinar para um lado e, imediatamente, virar para outro, você fica balançando mesmo, você consegue equilibrar.')
	dilmes.push('Eu acredito que nós teremos uns jogos Olímpicos que vai ter uma qualidade totalmente diferente e que vai ser capaz de deixar um legado tanto... porque geralmente as pessoas pensam: "Ah, o legado é só depois". Não, vai deixar um legado antes, durante e depois.')

	
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
