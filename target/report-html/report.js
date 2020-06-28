$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/AlugarFilme.feature");
formatter.feature({
  "name": "Alugar Filme",
  "description": "  Como um usuário\n  Eu quero cadastrar aluguéis de filmes\n  Para controlar preços e datas de entregas",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ]
    },
    {
      "cells": [
        "preco",
        "3"
      ]
    },
    {
      "cells": [
        "tipo",
        "comum"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilme(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 3",
  "keyword": "Então "
});
formatter.match({
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 1 dia",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Não deve alugar um filme sem estoque",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "não será possível por falta de estoque",
  "keyword": "Então "
});
formatter.match({
  "location": "AlugarFilmeSteps.nãoSeráPossívelPorFaltaDeEstoque()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o estoque do filme será 0 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "name": "que o preço do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "name": "o preço do aluguel será R$ \u003cvalor\u003e",
  "keyword": "Então "
});
formatter.step({
  "name": "a data de entrega será em \u003cqntDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "name": "a pontuação recebida será de \u003cpontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qntDias",
        "pontuacao"
      ]
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ]
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ]
    },
    {
      "cells": [
        "10",
        "extendido",
        "20",
        "3",
        "2"
      ]
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 4",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja extendido",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 8",
  "keyword": "Então "
});
formatter.match({
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 3 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação recebida será de 2 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 4",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja comum",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 4",
  "keyword": "Então "
});
formatter.match({
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 1 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação recebida será de 1 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 10",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja extendido",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 20",
  "keyword": "Então "
});
formatter.match({
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 3 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação recebida será de 2 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 5",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja semanal",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 15",
  "keyword": "Então "
});
formatter.match({
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 7 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação recebida será de 3 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/AprenderCucumber.feature");
formatter.feature({
  "name": "Aprender Cucumber",
  "description": "  Como um aluno\n  Eu quero aprender a utilizar Cucumber\n  Para que eu possa automatizar critérios de aceitação",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Deve executar especificação",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@esse"
    }
  ]
});
formatter.step({
  "name": "que criei o arquivo corretamente",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queCrieiOArquivoCorretamente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu executá-lo",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.executáLo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a especificação deve finalizar com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEspecificaçãoDeveFinalizarComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve incrementar contador",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@tipo1"
    }
  ]
});
formatter.step({
  "name": "que o valor do contador é 15",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu incrementar em 3",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.euIncrementarEm(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o valor do contador será 18",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.oValorDoContadorSerá(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve calcular atraso no prazo de entrega",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@tipo2"
    }
  ]
});
formatter.step({
  "name": "que o prazo é dia 05/04/2018",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOPrazoÉDia(Date)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega atrasar em 2 dias",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEntregaAtrasarEmDias(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega será efetuada em 07/04/2018",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEntregaSeráEfetuadaEm(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve calcular atraso no prazo de entrega",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@tipo1"
    },
    {
      "name": "@tipo2"
    }
  ]
});
formatter.step({
  "name": "que o prazo é dia 05/04/2018",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOPrazoÉDia(Date)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega atrasar em 2 meses",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEntregaAtrasarEmDias(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega será efetuada em 05/06/2018",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEntregaSeráEfetuadaEm(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve criar steps genéricos para estes passos",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que o ticket é AF345",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTicketÉAF345(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o valor da passagem é R$ 230,45",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o nome do passageiro é \"Fulano da Silva\"",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o telefone do passageiro é 9999-9999",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "criar os steps",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.criarOsSteps()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o teste vai funcionar",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.oTesteVaiFuncionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve reaproveitar os steps \"Dado\" do cenário anterior",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que o ticket é AB167",
  "keyword": "* "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTicketÉAF345(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o ticket especial é AB167",
  "keyword": "* "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTicketÉAF345(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o valor da passagem é R$ 1120,23",
  "keyword": "* "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o nome do passageiro é \"Cicrano de Oliveira\"",
  "keyword": "* "
});
formatter.match({
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o telefone do passageiro é 9888-8888",
  "keyword": "* "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve negar todos os steps \"Dado\" dos cenários anteriores",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "name": "que o ticket é CD123",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que o ticket é AG1234",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que o valor da passagem é R$ 1.1345,56",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "que o nome do passageiro é \"Beltrano Souza Matos de Alcântara Azevedo\"",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que o telefone do passageiro é 1234-5678",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que o telefone do passageiro é 999-2223",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});