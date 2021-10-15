import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { VerifiedIcon } from '@pancakeswap-libs/uikit'


const Audited: React.FC = () => {
  const Cont = styled.a`
      display: flex;
      background-color: ${({ theme }) => theme.colors.background};
      color: #008e46;
      width: 180px;
      height: 40px;
      text-align: center;
      border-radius: 50px;
      position: fixed;
      bottom: 30px;
      right: 10px;
      z-index: 1000;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      p {
        margin-left: 2px;
      }
  `
  return (
    <Cont href="https://github.com/Tea-Swap/contract/blob/master/audits/techRate/Sugar_MasterTea.pdf" target="_blank">
      <VerifiedIcon color="link" />
      <p>Audit by TechRate</p>
    </Cont>
  )
}

export default Audited
