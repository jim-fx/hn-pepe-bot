import WebSocket from 'ws';

const ws = new WebSocket('wss://mini-ws-chat.deno.dev');

function send(s){
	ws.send(s);
}

ws.on('open', function open() {
  ws.send('something');
});

const pepe = `
          ▄█▀▀▀▀▀▀█▄  ▄▀▀▀▀▀▀▄
        ▄▀░░░░░░▄▄▄▄▀█░░░░░░░░▀▄
       █░░░░░░▀▀░░░░▀▀█▄▀▀▀▀▀▀▀█▄
      █░░░░░░░░▄▄████████▄░▄███████▄
     ▄▀░░░░░░░▀███████████▄██████████▄
    █▀░░░░░▄▀▀█▀░▄█▄███▄░▀█░▄█▄███░░░█
   █░░░░░░░▀▀█▀▀▄▄█████▄▄▀▀▄▄█████▀▀▀█
  █▀░░░░░░░░░░▀▄▄▄▄▄▄▄▄▄▄▀░░░░░░░░▄█▀               
  █░░░░░░░░░░░░░░░░░░▄▀░░░░░░▀█▀▀▀█▄             
  █░░░░░░░░░░░▄▄▄▄░░░░░░░░░░░░░░░░░█              
  █░░░░░░░░▄▀▀░▄▄░▀▀▀▀▀▄▄▄▄▄▄▄▀▀▀▀▀▀█
  ▀█░░░░░█░▀▄▀▀░░▀▀▀▀▀▄▄▄▄▄▄▄▄▄▄▄▄▄█
  ▄█▄▄░░░▀▄░░▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▄▄▄▄▄▄▀
▄▀▀░▀██▄░░░▀▀░░░░░░░░░░░░░░▄▄▄▀▀
░░░░░░▀▀███▄▄▄▄▄▄▄▄▄▄▄▄▄████▄
░░░░░░░░░░▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀░░░▀█▄
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
`
const insultPepe = `
          ▄█▀▀▀▀▀▀█▄  ▄▀▀▀▀▀▀▄
        ▄▀░░░░░░▄▄▄▄▀█░░░░░░░░▀▄
       █░░░░░░▀▀░░░░▀▀█▄▀▀▀▀▀▀▀█▄
      █░░░░░░░░▄▄████████▄░▄███████▄
     ▄▀░░░░░░░▀███████████▄██████████▄
    █▀░░░░░▄▀▀█▀░▄█▄███▄░▀█░▄█▄███░░░█
   █░░░░░░░▀▀█▀▀▄▄█████▄▄▀▀▄▄█████▀▀▀█
  █▀░░░░░░░░░░▀▄▄▄▄▄▄▄▄▄▄▀░░░░░░░░▄█▀               
  █░░░░░░░░░░░░░░░░░░▄▀░░░░░░▀█▀▀▀█▄             
  █░░░░░░░░░░░▄▄▄▄░░░░░░░░░░░░░░░░░█              
  █░░░░░░░░▄▀▀░▄▄░▀▀▀▀▀▄▄▄▄▄▄▄▀▀▀▀▀▀█   insult
  ▀█░░░░░█░▀▄▀▀░░▀▀▀▀▀▄▄▄▄▄▄▄▄▄▄▄▄▄█
  ▄█▄▄░░░▀▄░░▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▄▄▄▄▄▄▀
▄▀▀░▀██▄░░░▀▀░░░░░░░░░░░░░░▄▄▄▀▀
░░░░░░▀▀███▄▄▄▄▄▄▄▄▄▄▄▄▄████▄
░░░░░░░░░░▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀░░░▀█▄
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
`
const insults = `
artless	base-court	apple-john
bawdy	bat-fowling	baggage
beslubbering	beef-witted	barnacle
bootless	beetle-headed	bladder
churlish	boil-brained	boar-pig
cockered	clapper-clawed	bugbear
clouted	clay-brained	bum-bailey
craven	common-kissing	canker-blossom
currish	crook-pated	clack-dish
dankish	dismal-dreaming	clotpole
dissembling	dizzy-eyed	coxcomb
droning	doghearted	codpiece
errant	dread-bolted	death-token
fawning	earth-vexing	dewberry
fobbing	elf-skinned	flap-dragon
froward	fat-kidneyed	flax-wench
frothy	fen-sucked	flirt-gill
gleeking	flap-mouthed	foot-licker
goatish	fly-bitten	fustilarian
gorbellied	folly-fallen	giglet
impertinent	fool-born	gudgeon
infectious	full-gorged	haggard
jarring	guts-griping	harpy
loggerheaded	half-faced	hedge-pig
lumpish	hasty-witted	horn-beast
mammering	hedge-born	hugger-mugger
mangled	hell-hated	joithead
mewling	idle-headed	lewdster
paunchy	ill-breeding	lout
pribbling	ill-nurtured	maggot-pie
puking	knotty-pated	malt-worm
puny	milk-livered	mammet
qualling	motley-minded	measle
rank	onion-eyed	minnow
reeky	plume-plucked	miscreant
roguish	pottle-deep	moldwarp
ruttish	pox-marked	mumble-news
saucy	reeling-ripe	nut-hook
spleeny	rough-hewn	pigeon-egg
spongy	rude-growing	pignut
surly	rump-fed	puttock
tottering	shard-borne	pumpion
unmuzzled	sheep-biting	ratsbane
vain	spur-galled	scut
venomed	swag-bellied	skainsmate
villainous	tardy-gaited	strumpet
warped	tickle-brained	varlet
wayward	toad-spotted	vassal
weedy	unchin-snouted	whey-face
yeasty	weather-bitten	wagtail
`.split("\n").map(a => a.split("\t").map(v => v.trim()));

console.log(insults);

const random = (arr) => arr[Math.floor(Math.random()*arr.length)];

async function handleCommand(c){

	const [s,...rest] = c.replace("/", "").split(" ");

	console.log("RECIEVED COMMAND", c)

	if(s === "pepe"){
		send(`
			Here is your Pepe:

			${pepe};

			`)
	}

	if(s === "insult"){
		
		const [first] = random(insults);
		const [,second] = random(insults);
		const [,,third] = random(insults);

		send(`You ${[first, second, third].join(" ")}.`)

	}

	if(s === "insult-pepe"){
		const [first] = random(insults);
		const [,second] = random(insults);
		const [,,third] = random(insults);

		const insult = `You ${[first, second, third].join(" ")}.`
		send(insultPepe.replace("insult", insult))
	}

	if(s === "pepe-say"){
		send(insultPepe.replace("insult", rest.join(" ")))
	}

	if(s === "info"){
		send(`Code: https://github.com/jim-fx/hn-pepe-bot`)
	}
}

ws.on('message', function message(b) {
	const data = b.toString();

	const [first] = data.split(" ")

	if(first.startsWith("/")){
		handleCommand(data);
	}
});
