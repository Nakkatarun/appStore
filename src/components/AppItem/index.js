// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  return (
    <li className="app-list">
      <img src={eachApp.imageUrl} alt="appName" className="app-image" />
      <p>{eachApp.appName}</p>
    </li>
  )
}

export default AppItem
