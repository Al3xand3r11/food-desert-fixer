'use client'
import React from "react"
import { MapContainer } from "./MapContainer"

export default function Map () {
    return (
        <div className="h-screen items-center">
            <div className="content-center flex flex-col place-items-center w-full ">
                <h1>Hero Section</h1>
                <MapContainer/>
            </div>
            
        </div>
    )
}