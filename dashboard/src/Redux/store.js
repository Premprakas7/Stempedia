import {legacy_createStore} from "redux"
import { reducer } from "./reducer"

const initState={todos:[]}

const store=legacy_createStore(reducer,initState);

export default store;