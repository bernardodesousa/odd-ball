/**
 * @params arena, player
 * @export createAvatar
 *  - Se o avatar já existir no DOM, retorná-lo
 *  - Se não, criar um div
 *  - Atribuir o id do usuário ao elemento criado no DOM
 *  - Adicionar a classe CSS "player" ao elemento criado no DOM
 *  - Atribuir duas vezes o valor de player.radius tanto à 
 *    largura quanto à altura do avatar
 *  - Se o valor de player.alive for false, adicionar a classe
 *    CSS "dead" ao elemento criado no DOM
 *  - Adicionar o elemento criado no DOM à arena, que também é uma
 *    referência a um elemento do DOM.
 * @return uma referência ao elemento criado no DOM
 */

function createAvatar(arena, player) {
    let avatar = document.getElementById(player.id+"");
    if (avatar) return avatar;

    avatar = document.createElement("div");
    avatar.setAttribute("id", player.id);
    avatar.classList.add("player");
    avatar.style.width = avatar.style.height = player.radius*2 + "px";

    if (!player.alive){
        avatar.classList.add("dead");
    }

    arena.appendChild(avatar);
    return avatar;
}

export default createAvatar;
