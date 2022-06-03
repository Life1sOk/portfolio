import Intro from '../intro/intro.component';

import './home-style.scss';

const Home = ({alphabet}) => {

    return(
        <section className='home-wrapper'>
            <Intro alphabet={alphabet}/>
            <div>asd
            </div>
        </section>
    );
}

export default Home;