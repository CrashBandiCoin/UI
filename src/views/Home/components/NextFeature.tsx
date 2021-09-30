import React from 'react'
import { Card, CardBody, Heading, Text, Link } from '@pancakeswap-libs/uikit'
import styled, { keyframes } from 'styled-components'
import useI18n from 'hooks/useI18n'

interface NextFeatureProps {
  img: string
  ribbon: string
  title: string
  link: string
}


const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

const NextFeature: React.FC<NextFeatureProps> = ({ img, ribbon, title, link}) => {
  const TranslateString = useI18n()

  return (
    <>
      <div className="cards-list">
        <StyledLink href={link}>
          <div className="card 1">
            <div className="ribbon ribbon-top-right"><span>{ribbon}</span></div>
            <div className="card_image"><img src={img} alt=""/></div>
            <div className="card_title title-white">
              <p>{title}</p>
            </div>
          </div>
        </StyledLink>

      </div>
    </>
  )
}

export default NextFeature
