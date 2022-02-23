import React from 'react'
import reactDom from 'react-dom'
import Header from './comps/Header'
import Meme from './comps/Meme'

export default function App() {
    return (
        <main>
        <Header />
        <Meme />
        <small posititon="centre"> Built by Ali Mora using React © 2022</small>
        </main>
    )
}