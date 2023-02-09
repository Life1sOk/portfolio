import React from 'react';

import { FooterContainer, TopFooterContainer, BotFooterContainer, FooterNav, ContactIconWrap, NavbarWords } from './footer.style';
// import ContactIcons from '../../components/contact-icons/contact.icons.component';
// import Copyright from '../../components/copyright/copyright';
// import ContactBase from '../../components/contact-base/contact-base.component';

const Footer = ({ footer, nav, projects, skills }) => {

    const handleClick = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <FooterContainer name='footer' ref={footer}>
            {/* <TopFooterContainer>
                <div className='top-footer-left'>Something</div>
                <ContactBase />
            </TopFooterContainer>
            <BotFooterContainer>
                <FooterNav>
                    <NavbarWords onClick={() => handleClick(nav)}>Home</NavbarWords>
                    <NavbarWords onClick={() => handleClick(projects)}>Projects</NavbarWords>
                    <NavbarWords onClick={() => handleClick(skills)}>Skills</NavbarWords>
                </FooterNav>
                <ContactIconWrap>
                    <ContactIcons />
                </ContactIconWrap>
            </BotFooterContainer> */}
            {/* <Copyright /> */}
        </FooterContainer>
    );
}

export default Footer;