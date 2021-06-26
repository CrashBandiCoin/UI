import React, {Component} from 'react'
import Page from 'components/layout/Page'
import styled from 'styled-components'
import { Heading } from '@pancakeswap-libs/uikit'
import Match from "../Home/components/Match";
import iconFrance from '../Home/img/matchs/france.png';
import iconHungrier from '../Home/img/matchs/hongrie.png';
import iconCzech from "../Home/img/matchs/czech.png";
import iconWalles from "../Home/img/matchs/walles.png";
import iconItaly from "../Home/img/matchs/italie.png";
import iconEngland from "../Home/img/matchs/england.png";
import iconBelgique from "../Home/img/matchs/belgique.png";
import iconFinland from "../Home/img/matchs/finlande.png";
import iconAllemagne from "../Home/img/matchs/allemagne.png";


const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: auto;
  margin-bottom: 32px;
  text-align: center;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

class Euro extends Component {
    pays1=iconHungrier;

    pays2=iconFrance;

    score1='1 - 1';

    bonus1='x0';

    pays3=iconItaly;

    pays4=iconWalles;

    score2='1 - 0';

    bonus2='x2';

    pays5=iconFinland;

    pays6=iconBelgique;

    score3='0 - 2';

    bonus3='x4';

    pays7=iconCzech;

    pays8=iconEngland;

    score4='0 - 1';

    bonus4='x2';

    pays9=iconAllemagne;

    pays10=iconHungrier;

    score5='2 - 2';

    bonus5='x0';



    render() {
        return (
            <Page>
                <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center', paddingTop: '100px'}}>
                    Result match/Bonus reward
                </Heading>
                    <Match country1={this.pays1} country2={this.pays2} score={this.score1} bonus={this.bonus1}/>
                    <Match country1={this.pays3} country2={this.pays4} score={this.score2} bonus={this.bonus2}/>
                    <Match country1={this.pays5} country2={this.pays6} score={this.score3} bonus={this.bonus3}/>
                    <Match country1={this.pays7} country2={this.pays8} score={this.score4} bonus={this.bonus4}/>
                    <Match country1={this.pays9} country2={this.pays10} score={this.score5} bonus={this.bonus5}/>

            </Page>
        )
    }
}

export default Euro

