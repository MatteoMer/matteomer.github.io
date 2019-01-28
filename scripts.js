space = 0
document.onkeyup = function(e) {
	if(space == 0 && e.keyCode == 13) {
		space = 1
		document.getElementById("start_").className = "normal"
		new TypeIt('#test', {
			strings: ['Je suis Matteo Mervoyer.', 'J\'ai 19 ans et etudie a 42 a Paris.', 'J\'ai fait plein de projets plutot sympa.', 'Souhaitez vous voir les projets en lien avec : ','[1] Le systeme (UNIX) ?', '[2] L\'algorithmie ?', '[3] Le bas niveau ?', '[4] La securite informatique ?', '[5] Ou une simple presentation de moi ?'],
			speed: 35,
			waitUntilVisible: true
		}).go();
	}
	if (space === 1 && e.keyCode == 49){
		new TypeIt('#clear', {
			strings: ['matteo@mervoyer: ~ clear'],
			speed: 15,
			waitUntilvisible: true
		}).go();
		setTimeout(function (){ 
			document.getElementById("start_").innerHTML = "matteo@mervoyer: ~ $ systeme"
			document.getElementById("test").innerHTML = ""
			document.getElementById("clear").innerHTML = ""
			new TypeIt('#test', {
				strings: ['Pendant 6 mois j\'ai travaillé seul et en groupe sur des projets consistant a refaire un shell unix.', 'Pour cela il a fallu parser la commande, j\'ai fait ca grâce a un parser/lexer et un AST.', 'J\'ai aussi réalisé l\'exécution des binaires, les redirections, pipes et opérateur logique.', 'J\'ai aussi fait une gestion des signaux complète.', 'Pour finir j\'ai participé a la réalisation de quelques builtin comme export, setenv, echo ou read par exemple.', 'Vous pouvez retrouver une version du projet <a target="_blank" href="https://github.com/MatteoMer/minishell_21_sh_github">ici</a>', '', 'Souhaitez vous voir les projets en lien avec : ','[1] Le systeme (UNIX) ?', '[2] L\'algorithmie ?', '[3] Le bas niveau ?', '[4] La securite informatique ?', '[5] Ou une simple presentation de moi ?'],
				speed: 35,
				waitUntilVisible: true
			}).go();

		}, 1000)

	}
	if (space === 1 && e.keyCode == 50){
		new TypeIt('#clear', {
			strings: ['matteo@mervoyer: ~ clear'],
			speed: 15,
			waitUntilvisible: true
		}).go();
		setTimeout(function (){ 
			document.getElementById("start_").innerHTML = "matteo@mervoyer: ~ $ algo"
			document.getElementById("test").innerHTML = ""
			document.getElementById("clear").innerHTML = ""
			new TypeIt('#test', {
				strings: ['Pendant mon cursus j\'ai fait plusieurs projets en rapport avec le parsing et l\'algorithmie.', 'Le <a target="_blank" href="https://github.com/MatteoMer/ft_printf_github">premier</a> étant recoder la fonction de la libc printf', 'Le second est <a target="_blank" href="https://github.com/MatteoMer/filler_github">Filler</a>, un projet où le but est de faire un programme qui bat des ennemis dans une arène virtuelle.', 'Le dernier, et le plus intéressant est la partie "ASM" du projet Corewar.', 'Dans cette partie, que j\'ai fait entièrement, il a fallu réalisé un compilateur d\'un pseudo ASM.', 'Le fichier généré par mon programme était un bytecode, suivant des règles précises de compilation définie dans le projet.', 'Ce projet m\'a permis d\'avoir une introduction à l\'ASM et m\'a donné envie de m\'y intérésser.', 'Le projet est disponible <a target="_blank" href="https://github.com/MatteoMer/corewar_asm">ici</a>', '', 'Souhaitez vous voir les projets en lien avec : ','[1] Le systeme (UNIX) ?', '[2] L\'algorithmie ?', '[3] Le bas niveau ?', '[4] La securite informatique ?', '[5] Ou une simple presentation de moi ?'],
				speed: 25,
				waitUntilVisible: true
			}).go();

		}, 1000)

	}

}


