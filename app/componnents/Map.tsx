'use client'
import React, { useState, useRef } from "react"
import { MapContainer } from "./MapContainer"
import OpenAI from "openai"

export default function Map () {
    const [zipCode, setZipode] = useState<string>("");
    const [payload, setPayload] = useState<string>("")
    const [zipEntered, setZipEntered] = useState<boolean>(true)

    const form = useRef<HTMLFormElement | null>(null);

    async function handlePrompt(
    ) {
    
    const client = new OpenAI({
            apiKey: process.env.NEXT_PUBLIC_HACK_KEY,
            dangerouslyAllowBrowser: true,
        }) 

        const chatCompletion = await client.chat.completions.create({
            messages: [{role: 'user', content: 'Say this is a working test'}],
            model: 'gpt-4o-mini',
        })
        
        setPayload(chatCompletion.choices[0].message.content as string)
        console.log(chatCompletion.choices[0].message.content as string)
    }



    return (
        <div className="h-screen items-center" id="Map">
            <div className="content-center flex flex-col place-items-center w-full ">
                <div className="pb-12 flex-col flex">
                    <form ref={form} onSubmit={handlePrompt} className="flex flex-col">
                    <label className="text-white pb-2 text-2xl">Enter Zip Code:</label>
                    <input type="text" id="zipcode" name="zipcode" 
                     placeholder="ex: 90210" 
                     className="rounded-full outline-none bg-transparent px-4 text-white 
                     border-red border-2 text-4xl py-1 placeholder-white 
                     placeholder-opacity-30"  
                     pattern="^\d{5}(-\d{4})?$" 
                     value={zipCode}
                     onChange={(e) => setZipode(e.target.value)}
                     required/>
                    <button className=" mt-4 py-2 w-1/3 rounded-full bg-red hover:bg-transparent hover:border hover:text-red hover:border-red">Submit</button>
                    </form>
                    
                </div>
                <MapContainer/>
                {zipEntered ?
                    <div className="pt-12">
                            <h1 className="text-white">{payload}</h1>
                    </div>
                    :
                    null
                }
                
                
            </div>
            
        </div>
    )
}