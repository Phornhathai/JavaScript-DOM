//https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/63.png?raw=true
const container = document.querySelector('#container')
// const newImg = document.createElement('img')
// newImg.src = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/63.png?raw=true'

for (let i = 1; i < 50; i++) {
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon')
    pokemon.style.display = "inline-block"
    const label = document.createElement('span')
    label.innerText = `#${i}`
    const newImg = document.createElement('img')
    newImg.src = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png?raw=true`
    pokemon.appendChild(newImg)
    pokemon.appendChild(label)
    container.appendChild(pokemon)
}
