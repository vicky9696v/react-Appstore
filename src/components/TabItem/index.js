import './index.css'

const TabItem = props => {
  const {eachTab, onUpdateTabId, isActive} = props
  const {tabId, displayText} = eachTab
  const onChangeItem = () => {
    onUpdateTabId(tabId)
  }

  const isActiveClass = isActive ? 'isActive' : null

  return (
    <li className="list-container">
      <button
        type="button"
        className={`tab-btn ${isActiveClass}`}
        onClick={onChangeItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
