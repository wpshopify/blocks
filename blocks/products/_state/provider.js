import { BlockContext } from './context'
import { BlockInitialState } from './initial-state'
import { BlockReducer } from './reducer'

function BlockProvider(props) {
  const [state, dispatch] = wp.element.useReducer(
    BlockReducer,
    BlockInitialState(props.options, props.blockProps)
  )

  const value = wp.element.useMemo(() => [state, dispatch], [state])

  return <BlockContext.Provider value={value} {...props} />
}

export { BlockProvider }
