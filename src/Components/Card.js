import React from "react";
const Card = ({ pokemon, loading,infoPokemon}) => {
    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon && pokemon.map((item) => {
                    return (
                        <>
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>&nbsp;
                                <h3>Height:{item.height}</h3>&nbsp;
                                <h3>Weight:{item.weight}</h3>
                            </div>
                            
                        </>
                    )
                })
        }

        </>
    )
}
export default Card;