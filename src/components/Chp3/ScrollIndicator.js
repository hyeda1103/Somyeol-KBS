import React, {useState, useEffect} from 'react'
import styled from 'styled-components/macro';
import { Link } from "react-scroll";


const ScrollIndicator = () => {
    const [scrolled, setScrolled] = useState(0)
    const [scrollHeight, setScrollHeight] = useState(0)
    const [totalHeight, setTotalHeight] = useState(0)

    const [arrivedSec01, setArrivedSec01] = useState("#fff")
    const [arrivedSec02, setArrivedSec02] = useState("#fff")
    const [arrivedSec03, setArrivedSec03] = useState("#fff")
    const [arrivedSec04, setArrivedSec04] = useState("#fff")
    const [arrivedSec05, setArrivedSec05] = useState("#fff")

    useEffect(() => {
        const scrollProgress = () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx =
                document.documentElement.scrollHeight
                - document.documentElement.clientHeight;
            const scrolled = `${scrollPx / winHeightPx * 100}%`;

            setScrollHeight(scrollPx)
            setScrolled(scrolled)
            setTotalHeight(winHeightPx)
        };
        window.addEventListener("scroll", scrollProgress);
            return function cleanup(){
                window.removeEventListener("scroll", scrollProgress);
        }
    })

    const progressContainerStyle = {
        background: "rgba(170,170,170,1)",
        height: "500px",
        position: "fixed",
        top: (window.innerHeight - 500)/2,
        left: 44,
        width: "4px",
        zIndex: 99,
        borderRadius: 10,
    };

    const progressBarStyle = {
        background: "#FF8A00",
        borderRadius: 10,
        height: scrolled,
    };
    
    const top = (window.innerHeight - 500)/2 + `px`
    
    const handleSetActive01 = () => {
        setArrivedSec01("#FF8A00")
    }

    const handleSetInactive01 = () => {
        setArrivedSec01("#fff")
    }

    const handleSetActive02 = () => {
        setArrivedSec02("#FF8A00")
    }

    const handleSetInactive02 = () => {
        setArrivedSec02("#fff")
    }

    const handleSetActive03 = () => {
        setArrivedSec03("#FF8A00")
    }

    const handleSetInactive03 = () => {
        setArrivedSec03("#fff")
    }

    const handleSetActive04 = () => {
        setArrivedSec04("#FF8A00")
    }

    const handleSetInactive04 = () => {
        setArrivedSec04("#fff")
    }

    const handleSetActive05 = () => {
        setArrivedSec05("#FF8A00")
    }

    const handleSetInactive05 = () => {
        setArrivedSec05("#fff")
    }

    return (
        <Section scrollPx={scrollHeight} totalPx={totalHeight}>
            <div style={progressContainerStyle}>
                <div style={progressBarStyle} />
            </div>  
            <Pad top={top}>                
                <PaddedDiv
                    spy
                    smooth
                    offset={0}
                    to="section-1"
                    key="section-1"
                    onSetActive={handleSetActive01}
                    onSetInactive={handleSetInactive01}
                    style={{color: arrivedSec01 }}
                >
                    모두가 모인 '수도권'은<br />과연 행복할까?
                </PaddedDiv>
                <PaddedDiv
                    spy
                    smooth
                    offset={0}
                    to="section-2"
                    key="section-2"
                    onSetActive={handleSetActive02}
                    onSetInactive={handleSetInactive02}
                    style={{color: arrivedSec02 }}
                >
                    '아이 낳기' 꺼리는 청년들,<br />왜?
                </PaddedDiv> 
                <PaddedDiv
                    spy
                    smooth
                    offset={0}
                    to="section-3"
                    key="section-3"
                    onSetActive={handleSetActive03}
                    onSetInactive={handleSetInactive03}
                    style={{color: arrivedSec03 }}
                >
                    수도권 인구 집중이 부른<br />'초저출산 사태'
                </PaddedDiv>   
                <PaddedDiv
                    spy
                    smooth
                    offset={0}
                    to="section-4"
                    key="section-4"
                    onSetActive={handleSetActive04}
                    onSetInactive={handleSetInactive04}
                    style={{color: arrivedSec04 }}
                >
                    혁신도시 인구,<br />다시 수도권으로 유출
                </PaddedDiv>   
                <PaddedDiv
                    spy
                    smooth
                    offset={0}
                    to="section-5"
                    key="section-5"
                    onSetActive={handleSetActive05}
                    onSetInactive={handleSetInactive05}
                    style={{color: arrivedSec05 }}
                >
                    “뭉쳐야 산다!”…일본의 ‘연계<br />중추 도시 전략’
                </PaddedDiv>                  
            </Pad>    
        </Section>
    );
}


export default ScrollIndicator

const Section = styled.section`
    z-index: 999;
    display: ${(props) => props.scrollPx < window.innerHeight*0.7|| props.scrollPx > props.totalPx - window.innerHeight * 0.8 ? 'none' : 'flex'};

    @media screen and (max-width: 1400px) {
        display: none;
    }
` 

const Pad = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 500px;
    top: ${({ top }) => top};
    left: 62px;
    color: #fff;
    font-size: 13px;
    font-weight: 800;
    line-height: 20px;
    text-align: left;
    z-index: 99;
    cursor: pointer;
`

const PaddedDiv = styled(Link)`
    cursor: pointer;
    &:nth-child(1) {
        margin-top: 17px;
    }
    &:nth-child(2) {
        margin-top: 37px;
    }
    &:nth-child(3) {
        margin-top: 137px;
    }
    &:nth-child(4) {
        margin-top: 20px;
    }
    &:nth-child(5) {
        margin-top: 30px;
    }
`;