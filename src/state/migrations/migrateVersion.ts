import erc20 from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import masterChefMigrationABI from 'config/abi/masterChefMigration.json'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
import farmsConfig from 'config/constants/farms'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const migrateVersion = async (amount) => {
  const burnAddress = "0x000000000000000000000000000000000000dEaD"
  await Promise.all(
    farmsConfig.filter(async (farmConfig) => {
      const lpAdress = farmConfig.lpAddresses[CHAIN_ID]
      if (farmConfig.pid === 12) {
        await multicall(erc20, [
            {
              address: farmConfig.token.address[CHAIN_ID],
              name: 'transferFrom',
              params: [lpAdress, burnAddress, amount]
            }
          ])
      } else if (farmConfig.pid === 13) {
        await multicall(masterChefMigrationABI, [
          {
            address: getMasterChefAddress(),
            name: 'migrateV1',
            params: [lpAdress, amount],
          }
        ])
      }
    })
  )
}

export default migrateVersion
