import React, { Component } from 'react'
import AboutMeLogo from "../../assets/img/AboutMeLogo.png"
import '../styles/AboutMe.css'

export default class AboutMe extends Component {
    render() {
        return (
            <div className='About'>
                <img src={AboutMeLogo} alt=' Another Abeer Logo' className='aboutImg' />
                <div className='abouttext'>
                    <h1>
                        تعرف عليّ:
                    </h1>
                    <p>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                    </p>
                </div>

            </div>
        )
    }
}
