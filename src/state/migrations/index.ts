import migrateVersion from './migrateVersion'

const migrateVersionDataAsync = (amount) => async () => {
  await migrateVersion(amount)
}

export default migrateVersionDataAsync