import React, { Component } from 'react'
import headerImg from "../../assets/img/HeaderImg.png"
import Button from 'react-bootstrap/Button';
import "../../assets/icons/fontawesome/css/all.css"
import "../styles/HeaderSection.css"

export default class HeaderSection extends Component {
    render() {
        return (
            <div>
                <div className='header'>

                    <div className='headertext'>
                        <h6>
                            أهلاً وسهلاً بكم :
                        </h6>
                        <h1>
                            مرحبًا! انا عبير مطورة واجهات تطبيقات الويب
                        </h1>
                        <Button variant="btn btn-light ">
                            تواصل معي
                        </Button>


                    </div>
                    <img src={headerImg} alt='Abeer Header' className=' headerImg' />
                 </div>

                <div className='d-flex flex-column mouseicon '>
                    <i className="fa-solid fa-computer-mouse  " ></i>
                    <i className="fa-solid fa-angle-down"></i>
                </div>
               
            </div>
        )
    }
}
