import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://ichef.bbci.co.uk/images/ic/1008x567/p09mtm0n.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    
    
    React.useEffect(() => {
        
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
        return () => {
            
        }
    }, [])
    
    
    
    
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
     
    return (
        <main> 
        <div className="form">
        <input
            type="text"
            placeholder="top text" 
            className="form-input" 
            name="topText"
            value={meme.topText}
            onChange={handleChange}
        />
        <input
            type="text"
            placeholder="bottom text" 
            className="form-input" 
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
        />
        <button
             className="form-button"
             onClick={getMemeImage}
         >
        Get New Meme
        </button>
</div>
        <div className="meme">
            <img src={meme.randomImage} className="meme-image" />
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
</div> 
</main>
    )
}