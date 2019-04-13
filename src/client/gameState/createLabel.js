function createLabel (avatar, name) {
    let label = document.createElement("p");
    label.innerText = name;

    avatar.appendChild(label);
    return label;
}

export default createLabel;
