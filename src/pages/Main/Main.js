import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Blog, Education, Experience, Contacts, Projects } from '../../components'
import { headerData } from '../../data/headerData'
import Transcripts from '../../components/Transcripts/Transcripts'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - IT Professional/Developer</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Transcripts />
            <Projects />
            {/* Achievement services and testimonials not required for now */}
            {/* <Achievement /> */}
            {/* <Services /> */}
            
            {/* <Testimonials /> */}
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
