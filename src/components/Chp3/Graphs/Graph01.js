import React, { useMemo } from "react";
import Lottie from "react-lottie";
import styled from "styled-components/macro"
import { useInView } from 'react-intersection-observer';
import chp3_01 from '../data/animationData301.json'

function ControlledLottie() {
    const [ref, inView] = useInView({
        threshold: 0,
    })

  return useMemo(() => {
    return (
        <>
            <Section ref={ref}>
                <Lottie
                options={{
                    loop: false,
                    autoplay: false,
                    animationData: chp3_01,
                    rendererSettings: {
                        progressiveLoad:true,
                        viewBoxSize: "0 0 600 390",
                        imagePreserveAspectRatio:  "xMidYMid slice"
                    }
                }}
                isPaused={!inView}
                isStopped={!inView}
                />
            </Section>
            <ReferenceWrapper>
                <span>(출처: 국토교통부, 한국교통안전공단)</span>
            </ReferenceWrapper>
        </>

    );
    }, [ref, inView]);
}

export default ControlledLottie;

const Section = styled.section`
    justify-content: center;
    align-items: center;
    width: 600px;
    margin-top: 80px;

    @media screen and (max-width: 600px) {
        width: 100vw;
    }

    @media screen and (max-width: 425px) {
        margin-top: 50px;
    }
`

const ReferenceWrapper = styled.div`
    width: 600px;
    color: #AAAAAA;
    font-family: 'Noto Serif KR', serif;
    text-align: right;
    margin-top: 20.5px;
    margin-bottom: 80px;

    span {
        font-size: 13px;
        line-height: 18.5px;
    }

    @media screen and (max-width: 910px) {
        width: 93.75vw;
    }

    @media screen and (max-width: 768px){
    }

    @media screen and (max-width: 425px) {
        margin-top: 20px;
        margin-bottom: 50px;
        span {
            font-size: 11px;
            line-height: 15px;
        }
    }
`