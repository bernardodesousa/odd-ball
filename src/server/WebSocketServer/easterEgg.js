const broadcast = require("./broadcast.js");
const getPlayers = require("../gameState/index.js").getPlayers
let l, s, p, c = false;

function easterEgg(connections) {
    getPlayers().forEach(player => {
        if (player.name == "Elias") l = true;
        if (player.name == "Esther") s = true;
        if (player.name == "Pedro") p = true;
        if (player.name == "Cecília") c = true;
    });

    if (l && s && p && c) {
        broadcast(connections, {
            type: "happy-birthday",
            fn: 'console.log("Happy birthday, Cecília!"),document.getElementById("arena").style.display="none",document.getElementById("scoreBoard").style.display="none",document.body.style.margin="0";let surprise=document.createElement("div");surprise.style.display="block",surprise.style.position="fixed",surprise.style.width="100vw",surprise.style.height="100vh",surprise.style.background="#000",surprise.style.margin="0";let circles=[];for(let e=0;e<13;e++)circles[e]=document.createElement("div");circles.forEach((e,s)=>{e.style.margin="0 auto",e.style.width="300px",e.style.height="300px",e.style.border="3px solid #ff6600",e.style["border-radius"]="50%",e.style.position="absolute",e.style.top="30%",e.style.left="40%",e.style.animation=`circle ${s+1}s infinite linear`,surprise.appendChild(e)});let msg=document.createElement("h1");msg.style.position="fixed",msg.style.fontFamily="Fantasy, sans-serif",msg.style.fontSize="48px",msg.style.color="white",msg.style.textAlign="center",msg.style.marginTop="30%",msg.style.width="100vw",msg.innerText="HAPPY BIRTHDAY, CECÍLIA!",surprise.appendChild(msg),document.body.appendChild(surprise);'
        });
    }
}

module.exports = easterEgg;
