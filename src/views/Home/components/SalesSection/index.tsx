import React from 'react'
import { Flex, Text, Button, Link, useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import PurpleWordHeading from '../PurpleWordHeading'

interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: SalesSectionButton
  secondaryButton: SalesSectionButton
  images: CompositeImageProps
  className: string
}

const FlexSection = styled(Flex)`
  position: relative;
  &.first {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
    &:after {
      background-color: ${({ theme }) => theme.colors.backgroundAlt};
    }
    &:before {
      background-color: ${({ theme }) => theme.colors.backgroundAlt};
    }
  }
  &.second {
    background-color: ${({ theme }) => theme.colors.background};
    &:after {
      background-color: ${({ theme }) => theme.colors.background};
    }
    &:before {
      background-color: ${({ theme }) => theme.colors.background};
    }
  }
  &.third {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
    &:after {
      background-color: ${({ theme }) => theme.colors.backgroundAlt};
    }
    &:before {
      background-color: ${({ theme }) => theme.colors.backgroundAlt};
    }
  }
  &:after {
    width: 100%;
    display: block;
    height: 100%;
    right: -100%;
    position: absolute;
    content: "";
  }
  &:before {
    width: 100%;
    display: block;
    height: 100%;
    left: -100%;
    position: absolute;
    content: "";
  }
`

const SalesSection: React.FC<SalesSectionProps> = (props) => {
  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images, className } = props
  const headingTranslatedText = headingText
  const bodyTranslatedText = bodyText
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl
  return (
    <FlexSection flexDirection="column" className={className}>
      <Flex
        flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        {className === 'second' && !isMobile ? (
          <Flex
            height={['192px', null, null, '100%']}
            width={['192px', null, null, '100%']}
            flex={[null, null, null, '1']}
            mb={['24px', null, null, '0']}
          >
            <CompositeImage {...images} />
          </Flex>
        ) : null

        }
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <PurpleWordHeading text={headingTranslatedText} />
          <Text color="textSubtle" mb="24px">
            {bodyTranslatedText}
          </Text>
          <Flex>
            <Link mr="16px" external={primaryButton.external} href={primaryButton.to}>
              <Button>
                <Text color="card" bold fontSize="16px">
                  BUY
                </Text>
              </Button>
            </Link>
            <Link external={secondaryButton.external} color="link" href={secondaryButton.to}>
              Learn
            </Link>
          </Flex>
        </Flex>
          {className !== 'second' || isMobile ? (
            <Flex
              height={['192px', null, null, '100%']}
              width={['192px', null, null, '100%']}
              flex={[null, null, null, '1']}
              mb={['24px', null, null, '0']}
            >
              <CompositeImage {...images} />
            </Flex>
          ) : null

          }
      </Flex>
    </ FlexSection>
  )
}

export default SalesSection
