import React, {useEffect, useCallback} from 'react'
import useI18n from 'hooks/useI18n'
import { useDispatch } from 'react-redux'
import Page from 'components/layout/Page'
import styled from "styled-components";
import Button from 'views/Pools/components/HarvestButton';
import { useFarms } from 'state/hooks'
import { fetchFarmsPublicDataAsync } from 'state/actions'
import migrateVersionDataAsync from 'state/migrations'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

`

const Migration: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFarmsPublicDataAsync())
    }, [dispatch])

    const TranslateString = useI18n()

    const farmsLP = useFarms()
    const MintV1 = farmsLP.filter((farm) => farm.pid === 12)[0]
    const amount = MintV1.tokenAmount ? MintV1.tokenAmount : 0

    const zapCallback = useCallback(() => {
        dispatch(migrateVersionDataAsync(amount))
    }, [dispatch, amount])
    
    return (
        <Page>
            <Hero>
            <div>
                <p>Migration token MINT v1 to MINT v2 !</p> <br/>
                <h1>Your MINT v1 available : {amount}</h1><br/>
                <h1>Your MINT v2 available : {amount}</h1><br/><br/>
                <Button variant="default" onClick={zapCallback}>Convert !</Button>
            </div>
            </Hero>
        </Page>
    )
}

export default Migration
