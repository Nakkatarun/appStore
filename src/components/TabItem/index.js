// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, onSelectedTab, isActive} = props
  const {tabId} = eachTab

  const onChangeTab = () => {
    onSelectedTab(tabId)
  }
  const activated = isActive ? 'active-tab-heading' : 'tab-heading'

  return (
    <li className="tabs-list">
      <button className="button" type="button" onClick={onChangeTab}>
        <h1 className={activated}>{eachTab.displayText}</h1>
      </button>
    </li>
  )
}

export default TabItem
