import React from 'react'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import styled from "styled-components";

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
`

const Roadmap: React.FC = () => {
    const TranslateString = useI18n()
    return (
            <Hero>
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title,react/style-prop-object */}
                <iframe width="1900" height="1000" src="https://view.monday.com/embed/1213066002-f017b3d5e3fc844c2157ea36781fbc65?r=use1"  />
            </Hero>
    )
}

export default Roadmap
