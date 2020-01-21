import React, { Component } from 'react';
import axios from 'axios';
import { CustomInput } from 'reactstrap';


import ButtonAdminPortfolio from './ButtonAdminPortfolio';

class AdminProfile extends Component {
    state = {
        active: false,
        portfoliosActive: false,
        portfolios: [],
        selectedPortfolio: {},

        adminportfolio: null,
        createProfile: true,

    }

    async componentDidMount() {
        this.getPortfolio();
        this.togglePortfolio = this.togglePortfolio.bind(this);

    }
    //Partie : Statue - Portfolio 


    getPortfolio = async () => {
        try {
            const result = await axios.get(`http://localhost:5000/api/portfolios`,
            {
                headers: { Authorization: 'bearer '+localStorage.getItem('token')}
            })
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

    getProfile = async (id) => {
        console.log("youpi",id)
        try {
            const result = await axios.get(`http://localhost:5000/api/portfolios/${id}`)
            console.log("gg", result.data)
            this.setState({ selectedPortfolio: result.data[0] })
        } catch (err) {
            console.log(err)
            this.setState({
                error: err.message
            })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.portfolios
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
                    this.state.portfolios
                        .map((p, i) => (
                            <ButtonAdminPortfolio
                                key={`profile-${i}`}
                                getCurrentProfile={()=>this.getProfile(p.id)}
                                portfolio={this.state.selectedPortfolio}>
                                {p.id} {p.pseudo} {p.active}
                            </ButtonAdminPortfolio>
                        )
                        )

                }




            </div>
        )
    }
}

export default AdminProfile;