import { useSelector } from "react-redux"
import { slectFavoritePokemon } from "../RTK/selector"
import { Card } from "../component/Card"

export default function Favorite(){
    const pokemon = useSelector(slectFavoritePokemon)
  return (
    <>
      {pokemon.map(el => <Card key={el.id} pokemon={el}/>)}
    </>
  )
}