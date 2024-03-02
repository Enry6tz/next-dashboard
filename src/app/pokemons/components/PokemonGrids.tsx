
import { PokemonCard, SimplePokemon } from ".."

interface Props {
    pokemons:SimplePokemon[];
}

export const PokemonGrids = ({pokemons}:Props) => {
  return (
    <div>
        <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map(poke => (
            <div className="p-0">
                <PokemonCard key={poke.id} pokemon={poke}/>
          </div>
        ))}
      </div>
    </div>
  )
}
