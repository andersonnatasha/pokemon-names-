"use strict";


function App () {
    const [pokemon, setPokemon] = React.useState([])
    const [currentPageUrl, setCurrentPageUrl] = React.useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = React.useState("")
    const [previousPageUrl, setPreviousCurrentPageUrl] = React.useState("")
    const [loading, setLoading] = React.useState(true)

    //When current page changes, rerender code
    React.useEffect(() => {
        //Show loading message
        setLoading(true)
        let cancel
        // makes a fetch and returns a promise
        axios.get(currentPageUrl).then(res => {
            cancelToken: new axios.CancelToken(c => cancel = c)
            setLoading(false)
            setNextPageUrl(res.data .next)
            setPreviousCurrentPageUrl(res.data.previous)
            setPokemon(res.data.results.map(p => p.name))
            })
            // useEffect returned function to cancel previous call when new one made, incase old request finishes after new request
            return () => cancel()
    }, [currentPageUrl])

    function goToNextPage () {
        setCurrentPageUrl(nextPageUrl)
    }
    function goToPreviousPage () {
        setCurrentPageUrl(previousPageUrl)
    }

    if (loading) return "Loading..."

    return (
        < React.Fragment>
            <PokemonList pokemon={pokemon} />
            <Pagination
            // if next page url is true then pass the go to next page function otherwise pass null
                goToNextPage={nextPageUrl ? goToNextPage : null}
                goToPreviousPage={previousPageUrl ? goToPreviousPage: null}
            />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));