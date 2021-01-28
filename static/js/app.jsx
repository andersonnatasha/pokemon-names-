"use strict";


function App () {
    const [pokemon, setPokemon] = React.useState([])
    const [currentPageUrl, setCurrentPageUrl] = React.useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = React.useState("")
    const [previousPageUrl, setPreviousCurrentPageUrl] = React.useState("")

    //When current page changes, rerender code
    React.useEffect(() => {
        // makes a fetch and returns a promise
        axios.get(currentPageUrl).then(res => {
            setNextPageUrl(res.data.results.next)
            setPreviousCurrentPageUrl(res.data.results.previous)
            setPokemon(res.data.results.map(p => p.name))
            })
    }, [currentPageUrl])



    return (
        <PokemonList pokemon={pokemon} />

    );
}

ReactDOM.render(<App />, document.querySelector('#app'));