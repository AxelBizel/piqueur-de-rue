import React, { Component } from 'react';
import axios from 'axios';
import { CustomInput, Button } from 'reactstrap';
import {Redirect} from 'react-router-dom'
import AdminPortfolio from './AdminPortfolio'

class AdminProfile extends Component {
    state = {
        active: false,
        portfoliosActive: false,
        portfolios: [],
        
        createProfile:true,

    }

    async componentDidMount() {
        this.getPortfolio();
        // this.getProfile();
        this.handleClick = this.handleClick.bind(this);
        // this.formSubmit = this.formSubmit.bind(this)
        this.togglePortfolio = this.togglePortfolio.bind(this);
       
    }
//Partie : Statue - Portfolio 
    
    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({ portfoliosActive: !this.state.portfoliosActive });
        }
    
    onCreateProfile(){
        this.setState({
        createProfile : true
        })
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
  
    // async formSubmit(ev){
    //     ev.preventDefault()
    //     const {pseudo} = this.state
    //     try {
    //         const result = await axios.post(`http://localhost:5000/api/portfolio`,{pseudo})
    //         console.log(result.data)
    //         this.getProfile();
    //     } catch (err) {
    //         this.setState({
    //             error: err.message
    //         })
    //     }
    // }

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
                        .map ((p,i) =>(
                            <Button 
                                key= {`pro-${i}`}
                                checked = {p.id}
                                href="/adminportfolio"> + <AdminPortfolio /> 
                                
                            </Button>
                        )   
                    )
                    
                }
            
          
               
                
            </div>
        )
    }
}

export default AdminProfile;