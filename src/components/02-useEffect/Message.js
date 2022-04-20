
import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coordenadas, setCoordenadas] = useState({ x: 0, y: 0 })
    const {x,y} = coordenadas;

    useEffect(() => {

        const mouseMove = (e) => {
            setCoordenadas({ x: e.x, y: e.y });
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])


    return (
        <div>
            <h3>Coordenadas</h3>
            <p>
                x:{x}, y:{y}
            </p>
        </div>
    )
}
