/**
 * @param avatar
 * @param name
 * - Criar elemento "p" no DOM
 * - Atribuir o valor de name ao atributo innerText do elemento criado
 * - Adicionar o elemento criado no DOM ao elemento avatar recebido
 * @return o elemento criado no DOM
 */

function createLabel (avatar, name) {
    let label = document.createElement("p");
    label.innerText = name;

    avatar.appendChild(label);
    return label;
}

export default createLabel;
