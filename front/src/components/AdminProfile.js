import React, { Component } from 'react';
import axios from 'axios';

class AdminProfile extends Component {
    state = {
        active: false,
        portfoliosActive: false,
        portfolios: []
    }

    async componentDidMount() {
        this.getPortfolio();
        this.handleClick = this.handleClick.bind(this);
        this.togglePortfolio = this.togglePortfolio.bind(this);
    }

    getPortfolio = async ()=>{
        try {
            const result = await axios.get(`http://localhost:5000/api/portfolios`)
            console.log("gg",result.data)
            this.setState({ portfolios: result.data })
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    }

    handleClick= (ev) => {
        ev.preventDefault()
        this.setState({ portfoliosActive :!this.state.portfoliosActive });
      }
    

    async togglePortfolio(id, active) {
        try {
            const result = await axios.put(`http://localhost:5000/api/portfolio/${id}`, {active:!active})
            console.log(result.data)
            this.getPortfolio();
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
        console.log(this.state.portfolios)
        return (
            <div>
              <button 
             
              onClick={this.handleClick}>{this.state.portfoliosActive ? 'active' : 'desactive'}</button>
                {
                    this.state.portfolios
                        // .filter(pf => pf.active === this.state.portfoliosActive)
                        .map((pf, index) =>
                            <button
                                onClick={() => this.togglePortfolio(pf.id,pf.active)}
                                style={{ border: "1px solid black " ,
                                        'background' : 'black',
                                        'color': 'white',}}>
                                {pf.pseudo} {pf.active}
                            </button>
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