// Define a classe Pokemon e o método render
class Pokemon {
  
    constructor(id, name, types) {
      this.id = id;
      this.name = name;
      this.types = types;
      this.urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`;
    }
  
    render() {
      const listTypesHtml = this.types.length > 0
        ? this.types.map((type) => `<li class="${type.type.name}">${type.type.name}</li>`).join('')
        : `<li class="${type.type.name}">None</li>`;
    
      // Obter o nome do primeiro tipo (caso exista)
      const type = this.types.length > 0 ? this.types[0].type.name : '';
    
      return `
        <li class="pokemon ${type}">
          <span class="number">${this.id}</span>
          <span class="name">${this.name}</span>
    
          <div class="detail">
            <ol class="types">
              ${listTypesHtml}
            </ol>
            <img src="${this.urlImage}">
          </div>
        </li>
      `;
    }

  }