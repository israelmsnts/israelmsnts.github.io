function gerarTable(linhas, colunas) {
	var table = $("<table>", {
		id: "tabela",
		class: "table1 gridtable table table-bordered"
	});
	var thead = $("<thead>");
	thead.append($("<th>"));
	var tbody = $("<tbody>");
	for (var i = 0; i <= colunas.length - 1; i++) {
		thead.append($("<th>", {
			scope: "col",
			text: colunas[i]
		}));

	};
	for (var i = 0; i <= linhas.length - 1; i++) {
		var tr = $("<tr>");
		tr.append($("<th>", {
			scope: "row",
			text: linhas[i]
		}));
		for (var j = 0; j <= colunas.length - 1; j++) {
			td = $("<td>", {
				class: "drop ui-droppable"
			});
			td.append($("<ul>", {
				id: (i + 1) + "-" + (j + 1)
			}));
			tr.append(td);
		};
		tbody.append(tr);
	};
	table.append(thead);
	table.append(tbody);
	$(".left").append(table);
}

function gerarLista(lista) {
  var mostrarResposta = $("#mostrarResposta").is(":checked")
    console.log(mostrarResposta)
	var processos = $("<div>", {
		class: "process list-group"
	});
	for (var i = 0; i < lista.length; i++) {
		var texto = lista[i].descricao;
		criarProcesso(processos, lista[i].cell, texto,lista[i].codigo, mostrarResposta);
	}
	$(".right").append(processos);
}

function criarProcesso(pai, id, texto,codigo, mostrarResposta) {
	var processo = $("<div>", {
		id: id,
		name: codigo,
		class: "drag list-group-item",
		text: texto + ( mostrarResposta ?  " " + id : "")
	}).draggable({
		revert: true,
		activeClass: "drag-active",
		opacity: 0.35
	});
	//console.log(processo)
	pai.append(processo);
	return processo;
}

function iniciar(assunto) {
	$(".right").empty();
	$(".left").empty();
	//console.log(assuntos);
	//console.log(assunto);

	if (assuntos[assunto].mostrarLista) {
		gerarLista(_.shuffle(assuntos[assunto].lista));
	}

	gerarTable(assuntos[assunto].linhas, assuntos[assunto].colunas);

	$(".drop").droppable({
		activeClass: "td-active",
		hoverClass: "td-hover",
		drop: function(event, ui) {
      		var id =  $(ui.draggable).attr("id")
      		var codigo =  $(ui.draggable).attr("name")  

			if (id == $(this).find("ul").attr("id")) {
				$(ui.draggable).remove();
				$('.hit').text(parseInt($('.hit').text()) + 1);

				var res = _.find(assuntos[assunto].lista, function(item) {
					console.log(item.codigo)
					return item.cell  === id && item.codigo === codigo ;
				});

				$('<li>').text(res.codigo).appendTo($(this).find("ul"));
			} else {
				$id = ui.draggable.attr("id");
				$text = ui.draggable.text();
				$('.error').text((parseInt($('.error').text()) + 1));
				$(ui.draggable).remove();
				$('<li id="fail"></li>').text($text).appendTo($(this).find("ul")).addClass("fail").effect("pulsate", {
					times: 3
				}, 400);
				setTimeout(function() {
					$('#fail').remove();
				}, 1000);
				criarProcesso($(".process"), $id, $text,codigo);
			}

			atualizarContador();

		}
	});

}

function atualizarContador() {
	var restante = assuntos[assunto].lista.length - $('table').find("li").size();
	//console.log(restante);
	$('.rest').text(restante);
}


$(document).ready(function() {

	$("#teste").keyup(function(e) {
		if (e.keyCode === 13) {
			//cod;l-c
			var input = $(e.currentTarget)
			var valor = input.val()
			//console.log(valor);
			var res = _.find(assuntos[assunto].lista, function(item) {
				return item.codigo === valor.split(" ")[0];
			});

			if (res) {
				var celula = valor.split(" ")[1] + "-" + valor.split(" ")[2]
				if (celula == res.cell) {
					$('.hit').text(parseInt($('.hit').text()) + 1);
					$('<li class="sucess"></li>')
						.text(res.codigo)
						.appendTo($("#" + res.cell));
					$('div.right').find("#" + res.cell).remove();


				} else {
					$('div.right').find("#" + res.cell).remove();
					$('.error').text((parseInt($('.error').text()) + 1));
					$('<li id="fail"></li>')
						.text(res.descricao)
						.appendTo($("#" + celula))
						.addClass("fail")
						.effect("pulsate", {
							times: 3
						}, 400);
					setTimeout(function() {
						$('#fail').remove();
					}, 1000);

					criarProcesso($(".process"), res.cell, res.descricao );
				}
				input.val("");
			}
			atualizarContador();
		}
	});

	$("a").click(function() {
		assunto = $(this).text();
		iniciar(assunto);
		$('.hit').text(0);
		$('.error').text(0);
		atualizarContador();
	});

});
