"use strict";

function PokemonList ({ pokemon }) {

    return (
        <div>
            {/* create a new array populated with pokemon in pokemon prop */}
            {pokemon.map(p => (
                // give child a key. child has pokemon name in div
                <div key={p}> {p} </div>
            ) )}
        </div>

    );
}

