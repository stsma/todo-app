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
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <form className="meme-form">
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
            </div>
        )
    }
}

export default MemeGenerator;