import React, { Component } from 'react';
import axios from 'axios';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

class AdminProfile extends Component {
    state = {
        active: false,
        portfoliosActive: false,
        portfolios: []
    }

    async componentDidMount() {
        try {
            const result = await axios.get(`http://localhost:5000/api/portfolios`)
            this.setState({ portfolios: result.data })
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
        this.handleClick = this.handleClick.bind(this);
        this.togglePortfolio = this.togglePortfolio.bind(this);
    }

handleClick = (ev) =>{
        ev.preventDefault()
        this.setState({portfoliosActive : true});
    }

    async togglePortfolio(id) {
        try {
            const result = await axios.put(`http://localhost:5000/api/portfolio/${id}/active`)
            console.log(result.data)
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    }
    //   componentDidMount() {
    //     axios.get(`http://localhost:5000/api/portfolio`)
    //       .then(res => {
    //           const portfoliosActiveData = res.data
    //         this.setState({ portfoliosActive: portfoliosActiveData });
    //         console.log(this.state)
    //       })
    //   }


    render() {
        return (
            <div>
              
                <button onClick={this.handleClick}> {this.state.portfoliosActive ? 'Active' : 'Desactive'}</button>

                {
                    this.state.portfolios
                        .filter(pf => pf.active === this.state.portfoliosActive)
                        .map((pf, index) =>
                            <div
                                onClick={() => this.togglePortfolio(pf.id)}
                                style={{ border: "1px solid black " }}>
                                {pf.pseudo} {pf.active}
                            </div>
                        )
                }

            </div>
        )
    }
}

export default AdminProfile;

// <div className="switches">
//                 <FormGroup>
//                     <Label for="exampleCheckbox">Switches</Label>
//                     <div>
//                         <CustomInput label="Timmy Roger" type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />
//                         <CustomInput label="Cosmic Billie" type="switch" id="exampleCustomSwitch2" name="customSwitch"  />
//                         <CustomInput label="Guest 1" disabled type="switch" id="exampleCustomSwitch3"  />
//                         <CustomInput label="Maxime" htmlFor="exampleCustomSwitch4_X" disabledtype="switch" id="exampleCustomSwitch4"  />
//                         <CustomInput label="Alex" htmlFor="exampleCustomSwitch4_X" disabledtype="switch" id="exampleCustomSwitch4"  />
//                         <CustomInput label="Guest 2" htmlFor="exampleCustomSwitch4_X" disabledtype="switch" id="exampleCustomSwitch4"  />
//                     </div>
//                 </FormGroup>
//             </div>