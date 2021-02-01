import react, {Component} from 'react';
import FormComponent from './FormComponent'

class FormContainer extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age:"",
            gender: undefined,
            destination: "",
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const { name, value, type, checked } = event.target
        type === "checkbox" ? 
            this.setState(prevState => {
                return {
                dietaryRestrictions: {
                    ...prevState.dietaryRestrictions,
                    [name]: checked
                }
            }}) :  this.setState({ [name]: value })

        console.log(this.state);
    }
    
    render() {
        return(
        <FormComponent 
            handleChange={this.handleChange}
            data={this.state}
        />
        )}
}

export default FormContainer;