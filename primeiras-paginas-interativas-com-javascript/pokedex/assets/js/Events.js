function generatePokemon(id = 0, name = '', types = []) {
    let urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    let listTypesHtml = '';
    if (types.length === 0) {
        listTypesHtml += `<li class="type">None</li>\n`
    } else {
        for (let object of types) {
            listTypesHtml += `<li class="type">${object.type.name}</li>\n`
        }
    }
    return `
    <li class="pokemon">
        <span class="number">${id}</span>
        <span class="name">${name}</span>

        <div class="detail">
            <ol class="types">
                ${listTypesHtml}
            </ol>
            <img src="${urlImage}">
            
        </div>
    </li>
    `

}