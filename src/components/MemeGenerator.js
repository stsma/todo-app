import React, { Component } from "react";

class MemeGenerator extends Component{
    constructor(){
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }

        this.HandleChange = this.HandleChange.bind(this)
        this.HandleSubmit = this.HandleSubmit.bind(this)
    }

    render (){
        return(
            <div>MEME GENERATOR</div>
        )
    }

    componentDidMount(){
        const url = "https://api.imgflip.com/get_memes";
        fetch(url).then(response => response.json())
                .then(response => {
                    this.setState(
                        {
                            allMemeImgs: response.data.memes
                        }
                    )
                });
    }

    HandleChange(event){
        const {name, value, placeholder} = event.target
        this.setState(prevState => {
            return{
                [name]: value
            }
        })

        console.log(this.state);
    }

    HandleSubmit(event){
        event.preventDefault();
        
        const randNum = Math.floor(Math.random() * this.state.randomImage.length);
        const randImg = this.state.allMemeImgs[randNum].url
        console.log(randImg);   

        this.setState({ randomImage: randImg } )
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.HandleSubmit}>
                    <label>
                        <input
                            type="text"
                            onChange={this.HandleChange}
                            placeholder="Top text"
                            name="topText"
                            value={this.state.topText}
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            onChange={this.HandleChange}
                            placeholder="Bottom text"
                            name="bottomText"
                            value={this.state.bottomText}
                        />
                    </label>
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;