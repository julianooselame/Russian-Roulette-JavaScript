function menu() {
	console.log('1 - Cadastrar');
	console.log('2 - Listar');
	console.log('3 - Duelar');
	console.log('5 - Sair');

	let opcao = parseInt(prompt('Digite uma opção!!'));

	return opcao;
}

function createDuelist(nome) {
	return {
		nome: nome,
		vivo: true
	};
}

function cadastro() {
	let duelist = createDuelist(prompt('Digite o nome do duelista!!!!'));
	duelists.push(duelist);
	alert(`Duelista ${duelist['nome']} cadastrado!`);
	listar();
}

function kill(nomeKill) {
	for (let i = 0; i < duelists.length; i++) {
		if (duelists[i].nome === nomeKill) {
			duelists[i].vivo = false;
			break;
		}
	}
}

function listar() {
	for (let i = 0; i < duelists.length; i++) {
		console.log(duelists[i]);
	}
}

function escolher() {
	let players = [];

	let opt1 = true;
	let opt2 = true;

	listar();
	while (opt1) {
		let duelist1 = prompt('Escolha o primeiro Duelista');

		for (let i = 0; i < duelists.length; i++) {
			if (duelist1 === duelists[i].nome) {
				if (duelists[i].vivo === true) {
					players.push(duelists[i]);
					console.log(players);
					opt1 = false;
				} else {
					alert(`${duelists[i].nome} Já Morreu!`);
				}
			}
			for (let i = 0; i < players.length; i++) {
				console.log(players[i]);
			}
		}
	}

	listar();
	while (opt2) {
		let duelist2 = prompt('Escolha o segundo Duelista');

		for (let i = 0; i < duelists.length; i++) {
			if (duelist2 === duelists[i].nome) {
				if (duelists[i].vivo === true) {
					players.push(duelists[i]);
					console.log(players);
					opt2 = false;
				} else {
					alert(`${duelists[i].nome} Já Morreu!`);
				}
			}
			for (let i = 0; i < players.length; i++) {
				console.log(players[i]);
			}
		}
	}

	for (let i = 0; i < players.length; i++) {
		console.log(players[i]);
	}
	return players;
}

function shot() {
	let gun = [ 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Bullet' ];
	let tiro = gun[Math.floor(Math.random() * 6)];
	console.log(tiro);
	return tiro;
}

function duelar(players) {
	let jogadores = escolher();

	let shoot = 'Empty';

	let count1 = 0;
	let count2 = 0;

	while (shoot === 'Empty') {
		alert(`${jogadores[0].nome} vai atirar!!`);
		shoot = shot();
		if (shoot === 'Empty') {
			alert(`CLICK!! ${jogadores[0].nome} Sobreviveu!!!`);
			count1++;
			alert(`${jogadores[1].nome} vai atirar!!`);
			shoot = shot();
			if (shoot === 'Empty') {
				alert(`CLICK!! ${jogadores[1].nome} Sobreviveu!!!`);
				count2++;
			} else {
				alert(
					`BANG!! ${jogadores[1].nome} Morreu!!!` +
						'\n' +
						`${jogadores[1].nome} sobreviveu ${count2} vezes!!!`
				);
				jogadores[1].vivo = false;
			}
		} else {
			alert(
				`BANG!! ${jogadores[0].nome} Morreu!!!` + '\n' + `${jogadores[0].nome} sobreviveu ${count1} vezes!!!`
			);
			jogadores[0].vivo = false;
		}
	}
}

let duelists = [
	{
		nome: 'Jailson',
		vivo: true
	},
	{
		nome: 'Guina',
		vivo: true
	},
	{
		nome: 'Kid',
		vivo: true
	},
	{
		nome: 'Kauan',
		vivo: true
	}
];

let op = 0;

do {
	op = menu();
	switch (op) {
		case 1:
			cadastro();
			break;

		case 2:
			listar();
			break;

		case 3:
			duelar();
			break;
	}
} while (op !== 5);