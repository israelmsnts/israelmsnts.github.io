window.assuntos = window.assuntos || {};
var nome = "cobit"
assuntos[nome] = {};
assuntos[nome].mostrarLista = true;
assuntos[nome].colunas = ["planejar e organizar"
,"adquirir e implementar"
,"entregar e suportar "
,"monitorar e avaliar"
];

assuntos[nome].linhas = [1,2,3,4,5,6,7,8,9,10,11,12,13];


assuntos[nome].lista = [
 {id:"po1",  cell:"1-1", 	descricao:"definir um plano estratégico de ti" , 							codigo:"defplaestti"}
,{id:"po2",  cell:"2-1", 	descricao:"definir a arquitetura da informacao", 							codigo:"defarqinf"}
,{id:"po3",  cell:"3-1", 	descricao:"determinar o direcionamento tecnológico", 						codigo:"detdirtec"}
,{id:"po4",  cell:"4-1", 	descricao:"definir os processsos, organizaçãp e os relacionamentos de ti", 	codigo:"defproorgrelti"}
,{id:"po5",  cell:"5-1", 	descricao:"gerenciar o investimento de ti", 								codigo:"ginvti"}
,{id:"po6",  cell:"6-1", 	descricao:"comunicar as diretrizes e expectativas da diretoria", 			codigo:"comdirexpdir"}
,{id:"po7",  cell:"7-1", 	descricao:"gerenciar os recursos humanos de ti", 							codigo:"grechumti"}
,{id:"po8",  cell:"8-1", 	descricao:"gerenciar a qualidade ", 										codigo:"gqua"}
,{id:"po9",  cell:"9-1", 	descricao:"avaliar e gerenciar os riscos de ti", 							codigo:"avagerristi"}
,{id:"po10", cell:"10-1",	descricao:"gerenciar projetos", 											codigo:"gprob"}
,{id:"ai1",  cell:"1-2", 	descricao:"identificar solução automatizada", 								codigo:"idesolaut"}
,{id:"ai2",  cell:"2-2", 	descricao:"adquirir e manter software aplicativo", 							codigo:"adqmansofapl"}
,{id:"ai3",  cell:"3-2", 	descricao:"aquirir e manter infraestrutura de tecnologia", 					codigo:"adqmaninftec"}
,{id:"ai4",  cell:"4-2", 	descricao:"habilitar o usi", 												codigo:"habuso"}
,{id:"ai5",  cell:"5-2", 	descricao:"adquirir recursos de ti", 										codigo:"adqrecti"}
,{id:"ai6",  cell:"6-2", 	descricao:"gerenciar mudancas", 											codigo:"gmud"}
,{id:"ai7",  cell:"7-2", 	descricao:"instalar e homologar soluções e mudanças", 						codigo:"inshomsolmud"}
,{id:"ds1",  cell:"1-3", 	descricao:"definir e gerenciar niveis de sserviços", 						codigo:"defgernivser"}
,{id:"ds2",  cell:"2-3", 	descricao:"gerenciar serviços de terceiros ", 								codigo:"gserter"}
,{id:"ds3",  cell:"3-3", 	descricao:"gerenciar capacidade e desempenho", 								codigo:"gcapdes"}
,{id:"ds4",  cell:"4-3", 	descricao:"assegurar continuidade de serviços", 							codigo:"assconser"}
,{id:"ds5",  cell:"5-3", 	descricao:"assegurar a segurança dos serviços", 							codigo:"asssegser"}
,{id:"ds6",  cell:"6-3", 	descricao:"identificar e alocar custos", 									codigo:"idealocus"}
,{id:"ds7",  cell:"7-3", 	descricao:"educar e treinar os usuarios", 									codigo:"edutreusu"}
,{id:"ds8",  cell:"8-3", 	descricao:"gerenciar a central de serviços e incidentes", 					codigo:"gcenserinc"}
,{id:"ds9",  cell:"9-3", 	descricao:"gerenciar a configuração", 										codigo:"gconf"}
,{id:"ds10", cell:"10-3",	descricao:"gerenciar problemas", 											codigo:"gproj"}
,{id:"ds11", cell:"11-3",	descricao:"gerenciar dados", 												codigo:"gdad"}
,{id:"ds12", cell:"12-3",	descricao:"gerenciar ambiente fisico", 										codigo:"gambfis"}
,{id:"ds13", cell:"13-3",	descricao:"gerenciar operações", 											codigo:"gope"}
,{id:"me1",  cell:"1-4", 	descricao:"monitorar e avaliar desempenho", 								codigo:"monavades"}
,{id:"me2",  cell:"2-4", 	descricao:"monitorar e avaliar os controles internos", 						codigo:"monaconint"}
,{id:"me3",  cell:"3-4", 	descricao:"assegurar a conformidade com requisitos externos", 				codigo:"assconreqext"}
,{id:"me4",  cell:"4-4", 	descricao:"prover a governaça de ti", 										codigo:"progovti"}
];






// window.assuntos = window.assuntos || {};
// var nome = "cobit"
// assuntos[nome] = {};
// assuntos[nome].mostrarLista = true;
// assuntos[nome].colunas = ["planejar e organizar"
// ,"adquirir e implementar"
// ,"entregar e suportar "
// ,"monitorar e avaliar"
// ];

// assuntos[nome].linhas = [1,2,3,4,5,6,7,8,9,10,11,12,13];


// assuntos[nome].lista = [
//  {id:"po1",  cell:"1-1", 	descricao:" 1-1 definir um plano estratégico de ti" , 							codigo:"defplaestti"}
// ,{id:"po2",  cell:"2-1", 	descricao:" 2-1 definir a arquitetura da informacao", 							codigo:"defarqinf"}
// ,{id:"po3",  cell:"3-1", 	descricao:" 3-1 determinar o direcionamento tecnológico", 						codigo:"detdirtec"}
// ,{id:"po4",  cell:"4-1", 	descricao:" 4-1 definir os processsos, organizaçãp e os relacionamentos de ti", 	codigo:"defproorgrelti"}
// ,{id:"po5",  cell:"5-1", 	descricao:" 5-1 gerenciar o investimento de ti", 								codigo:"ginvti"}
// ,{id:"po6",  cell:"6-1", 	descricao:" 6-1 comunicar as diretrizes e expectativas da diretoria", 			codigo:"comdirexpdir"}
// ,{id:"po7",  cell:"7-1", 	descricao:" 7-1 gerenciar os recursos humanos de ti", 							codigo:"grechumti"}
// ,{id:"po8",  cell:"8-1", 	descricao:" 8-1 gerenciar a qualidade ", 										codigo:"gqua"}
// ,{id:"po9",  cell:"9-1", 	descricao:" 9-1 avaliar e gerenciar os riscos de ti", 							codigo:"avagerristi"}
// ,{id:"po10", cell:"10-1",	descricao:" 10-1 gerenciar projetos", 											codigo:"gprob"}
// ,{id:"ai1",  cell:"1-2", 	descricao:" 1-2 identificar solução automatizada", 								codigo:"idesolaut"}
// ,{id:"ai2",  cell:"2-2", 	descricao:" 2-2 adquirir e manter software aplicativo", 							codigo:"adqmansofapl"}
// ,{id:"ai3",  cell:"3-2", 	descricao:" 3-2 aquirir e manter infraestrutura de tecnologia", 					codigo:"adqmaninftec"}
// ,{id:"ai4",  cell:"4-2", 	descricao:" 4-2 habilitar o usi", 												codigo:"habuso"}
// ,{id:"ai5",  cell:"5-2", 	descricao:" 5-2 adquirir recursos de ti", 										codigo:"adqrecti"}
// ,{id:"ai6",  cell:"6-2", 	descricao:" 6-2 gerenciar mudancas", 											codigo:"gmud"}
// ,{id:"ai7",  cell:"7-2", 	descricao:" 7-2 instalar e homologar soluções e mudanças", 						codigo:"inshomsolmud"}
// ,{id:"ds1",  cell:"1-3", 	descricao:" 1-3 definir e gerenciar niveis de sserviços", 						codigo:"defgernivser"}
// ,{id:"ds2",  cell:"2-3", 	descricao:" 2-3 gerenciar serviços de terceiros ", 								codigo:"gserter"}
// ,{id:"ds3",  cell:"3-3", 	descricao:" 3-3 gerenciar capacidade e desempenho", 								codigo:"gcapdes"}
// ,{id:"ds4",  cell:"4-3", 	descricao:" 4-3 assegurar continuidade de serviços", 							codigo:"assconser"}
// ,{id:"ds5",  cell:"5-3", 	descricao:" 5-3 assegurar a segurança dos serviços", 							codigo:"asssegser"}
// ,{id:"ds6",  cell:"6-3", 	descricao:" 6-3 identificar e alocar custos", 									codigo:"idealocus"}
// ,{id:"ds7",  cell:"7-3", 	descricao:" 7-3 educar e treinar os usuarios", 									codigo:"edutreusu"}
// ,{id:"ds8",  cell:"8-3", 	descricao:" 8-3 gerenciar a central de serviços e incidentes", 					codigo:"gcenserinc"}
// ,{id:"ds9",  cell:"9-3", 	descricao:" 9-3 gerenciar a configuração", 										codigo:"gconf"}
// ,{id:"ds10", cell:"10-3",	descricao:" 10-3 gerenciar problemas", 											codigo:"gproj"}
// ,{id:"ds11", cell:"11-3",	descricao:" 11-3 gerenciar dados", 												codigo:"gdad"}
// ,{id:"ds12", cell:"12-3",	descricao:" 12-3 gerenciar ambiente fisico", 										codigo:"gambfis"}
// ,{id:"ds13", cell:"13-3",	descricao:" 13-3 gerenciar operações", 											codigo:"gope"}
// ,{id:"me1",  cell:"1-4", 	descricao:" 1-4 monitorar e avaliar desempenho", 								codigo:"monavades"}
// ,{id:"me2",  cell:"2-4", 	descricao:" 2-4 monitorar e avaliar os controles internos", 						codigo:"monaconint"}
// ,{id:"me3",  cell:"3-4", 	descricao:" 3-4 assegurar a conformidade com requisitos externos", 				codigo:"assconreqext"}
// ,{id:"me4",  cell:"4-4", 	descricao:" 4-4 prover a governaça de ti", 										codigo:"progovti"}
// ];


































































