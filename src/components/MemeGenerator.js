
/**
 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 */


import React, { Component } from "react";

class MemeGenerator extends Component{

    //in modern version, constructor can be removed if you use this state type initialization
    state = {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    };

        // constructor(){
        //     super();
        //     this.state = {
        //         topText: "",
        //         bottomText: "",
        //         randomImage: "http://i.imgflip.com/1bij.jpg",
        //         allMemeImgs: []
        //     }

            // this.HandleChange = this.HandleChange.bind(this)
            // this.HandleSubmit = this.HandleSubmit.bind(this)
        // }

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

    //changed to lambda expression, no need to bind in constructor
    HandleChange = (event) => {
        const {name, value, placeholder} = event.target
        this.setState(prevState => {
            return{
                [name]: value
            }});
    }

    // HandleChange(event){
    //     const {name, value, placeholder} = event.target
    //     this.setState(prevState => {
    //         return{
    //             [name]: value
    //         }
    //     })

    //     console.log(this.state);
    // }

    
    //changed to lambda expression, no need to bind in constructor
    HandleSubmit = (event) => {
        event.preventDefault();
        
        const randNum = Math.floor(Math.random() * this.state.randomImage.length);
        const randImg = this.state.allMemeImgs[randNum].url
        console.log(randImg);   

        this.setState({ randomImage: randImg } )
    }

    // HandleSubmit(event){
    //     event.preventDefault();
        
    //     const randNum = Math.floor(Math.random() * this.state.randomImage.length);
    //     const randImg = this.state.allMemeImgs[randNum].url
    //     console.log(randImg);   

    //     this.setState({ randomImage: randImg } )
    // }

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