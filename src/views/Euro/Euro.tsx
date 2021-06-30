import React, {Component} from 'react'
import Page from 'components/layout/Page'
import styled from 'styled-components'
import {Card, CardBody, Heading} from '@pancakeswap-libs/uikit'
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
import iconAutriche from "../Home/img/matchs/autriche.png";
import iconPortugal from "../Home/img/matchs/portugal.png"
import iconSuisse from "../Home/img/matchs/suisse.png"

const StyledMintStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 20em
`


class Euro extends Component {
    pays1=iconHungrier;

    pays2=iconFrance;

    score1='1-1';

    bonus1='x1';

    pays3=iconItaly;

    pays4=iconWalles;

    score2='1-0';

    bonus2='x2';

    pays5=iconFinland;

    pays6=iconBelgique;

    score3='0-2';

    bonus3='x4';

    pays7=iconCzech;

    pays8=iconEngland;

    score4='0-1';

    bonus4='x2';

    pays9=iconAllemagne;

    pays10=iconHungrier;

    score5='2-2';

    bonus5='x1';

    pays11=iconItaly;

    pays12=iconAutriche;

    score6='2-1';

    bonus6='x2';

    pays13=iconBelgique;

    pays14=iconPortugal;

    score7='1-0';

    bonus7='x2';

    pays15=iconFrance;

    pays16=iconSuisse;

    score8='3-3';

    bonus8='x1';

    pays17=iconEngland;

    pays18=iconAllemagne;

    score9='2-0';

    bonus9='x4';



    render() {
        return (
            <StyledMintStats>
                <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center', paddingTop: '100px'}}>
                    Result match/Bonus reward
                </Heading><br/>
                    <Match country1={this.pays1} country2={this.pays2} score={this.score1} bonus={this.bonus1}/> <br/>
                    <Match country1={this.pays3} country2={this.pays4} score={this.score2} bonus={this.bonus2}/><br/>
                    <Match country1={this.pays5} country2={this.pays6} score={this.score3} bonus={this.bonus3}/><br/>
                    <Match country1={this.pays7} country2={this.pays8} score={this.score4} bonus={this.bonus4}/><br/>
                    <Match country1={this.pays9} country2={this.pays10} score={this.score5} bonus={this.bonus5}/><br/>
                    <Match country1={this.pays11} country2={this.pays12} score={this.score6} bonus={this.bonus6}/><br/>
                    <Match country1={this.pays13} country2={this.pays14} score={this.score7} bonus={this.bonus7}/><br/>
                    <Match country1={this.pays15} country2={this.pays16} score={this.score8} bonus={this.bonus8}/><br/>
                    <Match country1={this.pays17} country2={this.pays18} score={this.score9} bonus={this.bonus9}/><br/>
            </StyledMintStats>
        )
    }
}

export default Euro

