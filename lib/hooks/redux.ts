import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, ReduxDispatch, ReduxStore } from '../store'

export const useReduxDispatch = useDispatch.withTypes<ReduxDispatch>()
export const useReduxSelector = useSelector.withTypes<RootState>()
export const useReduxStore = useStore.withTypes<ReduxStore>()
