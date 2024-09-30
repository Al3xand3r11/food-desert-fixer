'use client'
import React from "react"
import { MapContainer } from "./MapContainer"

export default function Map () {
    return (
        <div className="h-screen items-center">
            <div className="content-center flex flex-col place-items-center w-full ">
                <div className="pb-12 flex-col flex">
                    <label className="text-white pb-2 text-2xl">Enter Zip Code:</label>
                    <input type="text" id="zipcode" placeholder="ex: 90210" className="rounded-full outline-none bg-transparent px-4 text-white  border-red border-2 text-4xl py-1 placeholder-white placeholder-opacity-30"  pattern="^\d{5}(-\d{4})?$" required/>
                </div>
                <MapContainer/>
                
            </div>
            
        </div>
    )
}