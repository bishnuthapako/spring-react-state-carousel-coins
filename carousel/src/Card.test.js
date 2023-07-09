import React from "react";
import { render } from "@testing-library/react"
import Card from "./Card";



test("renders without crashing", () =>{
    render(<Card />)
})

test("get the caption of image", () =>{
    const expectedCaption = "Photo by Richard Pasquarella on Unsplash"
    const {getByText} = render(<Card caption={expectedCaption}/>)
    let caption = getByText(expectedCaption)
    expect(caption).toBeInTheDocument()
})

// test("fire the left arrow", () =>{
//     const {getByText} =  render(<Card />)
// })