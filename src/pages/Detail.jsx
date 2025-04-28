import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectorPokemonById } from "../RTK/selector"
import Favorite from "./Favorite"
import FavoriteButton from "../component/FavoriteButton"
import FilpCard from "../component/FlipCard"

export default function Detail(){
    const { pokemonId } = useParams()
    const pokemon = useSelector(selectorPokemonById(Number(pokemonId)))

    return (
        <div className="bg-white flex flex-col justify-center items-center  
        py-[30px] px-[60px] rounded-[10px] border-b-[8px] border-r-[8px] border-black">
            <div className="text-[28px] mb-[10px]">
                {pokemon.name}
                <FavoriteButton pokemonId={Number(pokemonId)} />
            </div>
            <div className="whitespace-pre-wrap text-center">{pokemon.description}</div>
            <FilpCard front={pokemon.front} back={pokemon.back}/>
        </div>
    )
}