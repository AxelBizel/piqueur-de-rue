import React, { Component } from 'react';
import axios from 'axios';
import { CustomInput, Button } from 'reactstrap';


class AdminProfile extends Component {
    state = {
        active: false,
        portfoliosActive: false,
        portfolios: [],
        profile: [],
        profileActive : false,
    }

    async componentDidMount() {
        this.getPortfolio();
        this.getProfile();
        this.handleClick = this.handleClick.bind(this);
        this.togglePortfolio = this.togglePortfolio.bind(this);
        this.toggleProfile = this.toggleProfile.bind(this);
    }
//Partie : Statue - Portfolio 
    
    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({ portfoliosActive: !this.state.portfoliosActive });
        }

    getPortfolio = async () => {
        try {
            const result = await axios.get(`http://localhost:5000/api/portfolios`)
            console.log("gg", result.data)
            this.setState({ portfolios: result.data })
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    }


    async togglePortfolio(id, active) {
        console.log(id, active)
        try {
            const result = await axios.put(`http://localhost:5000/api/portfolio/${id}`, { active: !active })
            console.log(result.data)
            this.getPortfolio();
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    }
// Partie : Profile

    getProfile = async () => {
        try {
            const result = await axios.get(`http://localhost:5000/api/portfolio`)
            console.log("gg", result.data)
            this.setState({ profile: result.data })
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    }


    async toggleProfile(id, active) {
        console.log(id, active)
        try {
            const result = await axios.post(`http://localhost:5000/api/portfolio`, { active: !active })
            console.log(result.data)
            this.getProfile();
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    }
  


    render() {
        console.log(this.state.portfolios)
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.portfoliosActive ? 'active' : 'desactive'}</button>
                {
                    this.state.portfolios
                        // .filter(pf => pf.active === this.state.portfoliosActive)
                        .map((pf, index) =>
                            <CustomInput
                                key={`ci-${index}`}
                                onChange={() => { console.log(pf.id); this.togglePortfolio(pf.id, pf.active) }}
                                type="switch"
                                id={`ci-${index}`}
                                checked={pf.active}>
                                {pf.id} {pf.pseudo} {pf.active}
                            </CustomInput>
                        )
                }
                {
                    this.state.profile
                        // .filter(pf => pf.active === this.state.portfoliosActive)
                        .map((p, index) =>
                            <Button
                                key={`ci-${index}`}
                                onChange={() => { console.log(p.id); this.togglePortfolio(p.id, p.active) }}
                                id={`ci-${index}`}
                                checked={p.active}>
                                {p.id} {p.pseudo} {p.active}
                            </Button>
                        )
                }
                {/* {this.state.profile
                        .map ((p,i) => 
                        <input 
                                key={`prof-${i}`}
                                onChange = {() => this.toggleProfile (p.id , p.active)}
                                type ="checkbox">
                                {p.id} {p.pseudo} {p.type} {p.presentation} {p.active}
                                </input>
                                
                        )
               } */}
                
            </div>
        )
    }
}

export default AdminProfile;
