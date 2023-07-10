import React from "react";
import { render } from "@testing-library/react"
import Card from "./Card";

describe(Card, ()=>{
    it("check the initial caption", () =>{
       const {getByTestId} = render(<Card 
            caption={"Photo by Richard Pasquarella on Unsplash"}
            totalNum={5}
        />)

        const caption1 = getByTestId("caption").textContent;
        expect(caption1).toBe("Photo by Richard Pasquarella on Unsplash")
    })
})

