import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp

  return (
    <li className="list-apps">
      <img className="image" src={imageUrl} alt={appName} />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
