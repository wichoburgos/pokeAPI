import React from 'react';
import './style.css';
const habilidades = {
    overgrow: "Espesura",
    blaze: "Llamarada",
    torrent: "Torrente",
    "shield-dust": "Polvo escudo",
    "shed-skin":"Mudar",
    "compound-eyes": "Ojo compuesto",
    swarm:"Enjambre",
    "keen-eye": "Vista lince",
    "run-away": "Fuga",
};
const tipos = {
    bug: "Bicho",
    fire: "Fuego",
    normal: "Normal",
    flying: "Volador",
    grass: "Planta",
    poison: "Veneno",
    water: "Agua"
};
const colores = {
    bug: "#729f3f",
    fire: "#fd7d24",
    normal: "#a4acaf",
    flying: "#3dc7ef",
    grass: "#9bcc50",
    poison: "#b97fc9",
    water: "#4592c4"
};
function CardPokemon({ pokemon }) {
    return (
        <div className="contenedor">          
            <div className="sprite">         
                <img src={pokemon.sprites.front_default} alt="sprite frente" />
                <img src={pokemon.sprites.back_default} alt="sprite detras" />
            </div>
            <div className="nombre">
                {pokemon.name}
                <p>Nº{pokemon.id}</p>
            </div>
            <div className="tipos">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="color" style={{ backgroundColor: colores[type.type.name]}}>
                                {tipos[type.type.name]} 
                            </div>
                        )
                    })
                }
            </div>
            <div className="infoPkm">
                <div className="datos peso">
                    <p className="titulo">Peso</p>
                    <p className='info'>{pokemon.weight}</p>   
                </div>
                <div className="datos peso">
                    <p className="titulo">Altura</p>
                    <p className='info'>{pokemon.height}</p>
                </div>
                <div className="datos habilidades">
                    <p className="titulo">Habilidad</p>
                    <p className='info'>{habilidades[pokemon.abilities[0].ability.name]}</p>
                </div>
            </div>
        </div>
    );
}
export default CardPokemon;