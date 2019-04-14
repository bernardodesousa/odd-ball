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
