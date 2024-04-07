import React, { Component } from 'react'
import "../styles/ServicesSection.css"
import MyServicesCard from './MyServicesCard'


export default class ServicesSection extends Component {
    render() {
        return (

            <div className='services'>
                <div className='cardtextSection'>
                    <h6>
                        خدماتي
                    </h6>
                    <h1>
                        ماذا اقدم؟
                    </h1>
                </div>
                <div>
                    <div className='CardContainer'>
                        <MyServicesCard />
                        <MyServicesCard />
                        <MyServicesCard />
                    </div>
                </div>
            </div>

        )
    }
}
