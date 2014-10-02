window.assuntos = window.assuntos || {};
var nome = "cobit5"
assuntos[nome] = {};
assuntos[nome].mostrarLista = true;
assuntos[nome].colunas = [
 "alinhar,planejar e organizar"
,"construir, adquirir e implementar"
,"entregar, servir e suportar "
,"monitorar, avaliar e medir" 
];



assuntos[nome].linhas = [1,2,3,4,5,6,7,8,9,10,11,12,13];



// assuntos[nome].lista = [
//  {id:"1"  ,cell:"1-1",  descricao: "Gerenciar o Framework De Gestão De Ti" ,codigo:"x"}
// ,{id:"2"  ,cell:"2-1",  descricao: "Gerenciar Estratégia" ,codigo:"x"}
// ,{id:"3"  ,cell:"3-1",  descricao: "Gerenciar a Arquitetura Corporativa" ,codigo:"x"}
// ,{id:"4"  ,cell:"4-1",  descricao: "Gerenciar a Inovação" ,codigo:"x"}
// ,{id:"5"  ,cell:"5-1",  descricao: "Gerenciar o Portfólio" ,codigo:"x"}
// ,{id:"6"  ,cell:"6-1",  descricao: "Gerenciar Orçamento E Custos" ,codigo:"x"}
// ,{id:"7"  ,cell:"7-1",  descricao: "Gerenciar Recursos Humanos" ,codigo:"x"}
// ,{id:"8"  ,cell:"8-1",  descricao: "Gerenciar as Relações " ,codigo:"x"}
// ,{id:"9"  ,cell:"9-1",  descricao: "Gerenciar os Acordos De Serviço" ,codigo:"x"}
// ,{id:"10" ,cell:"10-1", descricao: "Gerenciar os Fornecedores" ,codigo:"x"}
// ,{id:"11" ,cell:"11-1", descricao: "Gerenciar o Qualidade" ,codigo:"x"}
// ,{id:"12" ,cell:"12-1", descricao: "Gerenciar os Riscos " ,codigo:"x"}
// ,{id:"13" ,cell:"13-1", descricao: "Gerenciar Segurança" ,codigo:"x"}
// ,{id:"14" ,cell:"1-2",    descricao:"Gerenciar Programas E Projetos" ,codigo:"x"}
// ,{id:"15" ,cell:"2-2",    descricao:"Gerenciar a Definição De Requisitos" ,codigo:"x"}
// ,{id:"16" ,cell:"3-2",    descricao:"Gerenciar a Identificação E Construção De Soluções" ,codigo:"x"}
// ,{id:"17" ,cell:"4-2",    descricao:"Gerenciar a Disponibilidade E Capacidade " ,codigo:"x"}
// ,{id:"18" ,cell:"5-2",    descricao:"Gerenciar a Implementação De Mudança Organizacional " ,codigo:"x"}
// ,{id:"19" ,cell:"6-2",    descricao:"Gerenciar Mudanças" ,codigo:"x"}
// ,{id:"20" ,cell:"7-2",    descricao:"Gerenciar Aceite E Transição De Mudança" ,codigo:"x"}
// ,{id:"21" ,cell:"8-2",    descricao:"Gerenciar o Conhecimento " ,codigo:"x"}
// ,{id:"22" ,cell:"9-2",    descricao:"Gerenciar os Ativos" ,codigo:"x"}
// ,{id:"23" ,cell:"10-2",   descricao:"Gerenciar a Configuração" ,codigo:"x"}
// ,{id:"24" ,cell:"1-3",  descricao:"Gerenciar as Operações" ,codigo:"x"}
// ,{id:"25" ,cell:"2-3",  descricao:"Gerenciar Requisições De Serviço E Incidentes" ,codigo:"x"}
// ,{id:"26" ,cell:"3-3",  descricao:"Gerenciar Problemas" ,codigo:"x"}
// ,{id:"27" ,cell:"4-3",  descricao:"Gerenciar a Continuidade " ,codigo:"x"}
// ,{id:"28" ,cell:"5-3",  descricao:"Gerenciar os Serviços De Segurança" ,codigo:"x"}
// ,{id:"29" ,cell:"6-3",  descricao:"Gerenciar os Controles De Processos De Negocio " ,codigo:"x"}
// ,{id:"30" ,cell:"1-4",  descricao:"Monitorar, Avaliar e Medir o Desempenho E Conformidade" ,codigo:"x"}
// ,{id:"31" ,cell:"2-4",  descricao:"Monitorar, Avaliar e Medir o Sistema De Controle Interno " ,codigo:"x"}
// ,{id:"32" ,cell:"3-4",  descricao:"Monitorar, Avaliar e Medir a Conformidade Com Requisitos Externos" ,codigo:"x"}
// ]

assuntos[nome].lista = [
 {id:"1" , cell:"1-1" ,  descricao: "Gerenciar o Framework De Gestão De Ti", codigo:"fragesti"}
,{id:"2" , cell:"2-1" ,  descricao: "Gerenciar Estratégia", codigo:"est"}
,{id:"3" , cell:"3-1" ,  descricao: "Gerenciar a Arquitetura Corporativa", codigo:"arqcor"}
,{id:"4" , cell:"4-1" ,  descricao: "Gerenciar a Inovação", codigo:"ino"}
,{id:"5" , cell:"5-1" ,  descricao: "Gerenciar o Portfólio", codigo:"pro"}
,{id:"6" , cell:"6-1" ,  descricao: "Gerenciar Orçamento E Custos", codigo:"orccus"}
,{id:"7" , cell:"7-1" ,  descricao: "Gerenciar Recursos Humanos", codigo:"rechum"}
,{id:"8" , cell:"8-1" ,  descricao: "Gerenciar as Relações ", codigo:"rel"}
,{id:"9" , cell:"9-1" ,  descricao: "Gerenciar os Acordos De Serviço", codigo:"acoser"}
,{id:"10", cell:"10-1" , descricao: "Gerenciar os Fornecedores", codigo:"for"}
,{id:"11", cell:"11-1" , descricao: "Gerenciar o Qualidade", codigo:"qua"}
,{id:"12", cell:"12-1" , descricao: "Gerenciar os Riscos ", codigo:"ris"}
,{id:"13", cell:"13-1" , descricao: "Gerenciar Segurança", codigo:"seg"}
,{id:"14", cell:"1-2" ,    descricao:"Gerenciar Programas E Projetos", codigo:"propro"}
,{id:"15", cell:"2-2" ,    descricao:"Gerenciar a Definição De Requisitos", codigo:"defreq"}
,{id:"16", cell:"3-2" ,    descricao:"Gerenciar a Identificação E Construção De Soluções", codigo:"ideconsol"}
,{id:"17", cell:"4-2" ,    descricao:"Gerenciar a Disponibilidade E Capacidade ", codigo:"discap"}
,{id:"18", cell:"5-2" ,    descricao:"Gerenciar a Implementação De Mudança Organizacional ", codigo:"impmudorg"}
,{id:"19", cell:"6-2" ,    descricao:"Gerenciar Mudanças", codigo:"mud"}
,{id:"20", cell:"7-2" ,    descricao:"Gerenciar Aceite E Transição De Mudança", codigo:"acetramud"}
,{id:"21", cell:"8-2" ,    descricao:"Gerenciar o Conhecimento ", codigo:"con"}
,{id:"22", cell:"9-2" ,    descricao:"Gerenciar os Ativos", codigo:"ati"}
,{id:"23", cell:"10-2" ,   descricao:"Gerenciar a Configuração", codigo:"conf"}
,{id:"24", cell:"1-3" ,  descricao:"Gerenciar as Operações", codigo:"ope"}
,{id:"25", cell:"2-3" ,  descricao:"Gerenciar Requisições De Serviço E Incidentes", codigo:"reqservinc"}
,{id:"26", cell:"3-3" ,  descricao:"Gerenciar Problemas", codigo:"prob"}
,{id:"27", cell:"4-3" ,  descricao:"Gerenciar a Continuidade ", codigo:"cont"}
,{id:"28", cell:"5-3" ,  descricao:"Gerenciar os Serviços De Segurança", codigo:"serseg"}
,{id:"29", cell:"6-3" ,  descricao:"Gerenciar os Controles De Processos De Negocio ", codigo:"conproneg"}
,{id:"30", cell:"1-4" ,  descricao:"Monitorar, Avaliar e Medir o Desempenho E Conformidade", codigo:"mamdecon"}
,{id:"31", cell:"2-4" ,  descricao:"Monitorar, Avaliar e Medir o Sistema De Controle Interno ", codigo:"mamsisconint"}
,{id:"32", cell:"3-4" ,  descricao:"Monitorar, Avaliar e Medir a Conformidade Com Requisitos Externos", codigo:"mamconreqext"}
]









































































