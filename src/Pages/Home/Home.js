import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import PostSubmit from './PostSubmit';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
} from './HeroElements';


function Home() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return(
        <>
            <HeroContainer>
                <HeroContent>
                    <HeroItems>
                        <HeroH1 className="Welkom">
            Welkom bij Yang Yang Sushi Eindhoven
                        </HeroH1>
                        <HeroP>
                Voer hier uw adres in
                        </HeroP>
                        <HeroBtn>
                            <div>
            {!isSubmitted ?  <PostSubmit submitForm={submitForm} /> : <Redirect to="/menu" />}
                            </div>
                        </HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </>
    );
}

export default Home;
