$( document ).ready(function() {
	
	var dilmes = 'Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses.';
	
	var dilmes1 = dilmes+'\n\nNo meu xinélo da humildade eu gostaria muito de ver o Neymar e o Ganso. Por que eu acho que.... 11 entre 10 brasileiros gostariam. Você veja, eu já vi, parei de ver. Voltei a ver, e acho que o Neymar e o Ganso têm essa capacidade de fazer a gente olhar.\n\n';
	
	var dilmes2 = dilmes1+'A única área que eu acho, que vai exigir muita atenção nossa, e aí eu já aventei a hipótese de até criar um ministério. É na área de... Na área... Eu diria assim, como uma espécie de analogia com o que acontece na área agrícola.\n\n';
	
	var dilmes3 = dilmes2+'Ai você fala o seguinte: "- Mas vocês acabaram isso?" Vou te falar: -"Não, está em andamento!" Tem obras que "vai" durar pra depois de 2010. Agora, por isso, nós já não desenhamos, não começamos a fazer projeto do que nós "podêmo fazê"? 11, 12, 13, 14... Por que é que não?\n\n';
	
	var dilmes4 = dilmes3+'A população ela precisa da Zona Franca de Manau, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!\n\n';
	
	var dilmes5 = dilmes4+'Se hoje é o dia das crianças... Ontem eu disse: o dia da criança é o dia da mãe, dos pais, das professoras, mas também é o dia dos animais, sempre que você olha uma criança, há sempre uma figura oculta, que é um cachorro atrás. O que é algo muito importante!\n\n';
	
	var dilmes6 = dilmes5+'Todos as descrições das pessoas são sobre a humanidade do atendimento, a pessoa pega no pulso, examina, olha com carinho. Então eu acho que vai ter outra coisa, que os médicos cubanos trouxeram pro brasil, um alto grau de humanidade.\n\n';
	
	var dilmes7 = dilmes6+'Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar, então é... é... Já vivi muito sem dinheiro, já vivi muito com dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a senhora ganha R$10 mil por mês. -Dilma: O que que é R$10 mil?';
	
	$("#botao-1").click(function(){
		 $(".dilmes").val(dilmes);
	});
	
	$("#botao-2").click(function(){
		 $(".dilmes").val(dilmes1);
	});
	
	
	$("#botao-3").click(function(){
		 $(".dilmes").val(dilmes2);
	});
	
	
	$("#botao-4").click(function(){
		 $(".dilmes").val(dilmes3);
	});
	
	
	$("#botao-5").click(function(){
		 $(".dilmes").val(dilmes4);
	});
	
	
	$("#botao-6").click(function(){
		 $(".dilmes").val(dilmes5);
	});
	
	
	$("#botao-7").click(function(){
		 $(".dilmes").val(dilmes6);
	});
	
	$("#botao-8").click(function(){
		 $(".dilmes").val(dilmes7);
	});
	
    
    $(".gerar_dilmes").zclip({
		path: "dist/js/ZeroClipboard.swf",
		copy: function(){
		    return $(this).prev().val();
	    }
	});
	
});