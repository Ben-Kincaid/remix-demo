import { createContext, useState } from "react"
import type { CatFact } from "~/services/cat"

export type GlobalState = {
	setCatFact: (id: string, msg: string) => void
	catFacts: Array<CatFact>
}

export type GlobalStateProviderProps = {
	initialData: {
		catFacts: Array<CatFact>
	},
	children?: React.ReactNode
}

export const GlobalStateContext = createContext<GlobalState>({
	catFacts: [],
	setCatFact: () => { }
});


export default function GlobalStateProvider({ initialData, children }: GlobalStateProviderProps) {
	const [state, setState] = useState<{ catFacts: Array<CatFact> }>(initialData)


	const setCatFact = (id: string, msg: string) => {
		setState({
			...state,
			catFacts: state.catFacts.map(
				(fact) => fact._id === id ? { ...fact, text: msg } : fact
			)
		})
	}

	return (
		<GlobalStateContext.Provider value={{ ...state, setCatFact}}>
			{children}
		</GlobalStateContext.Provider>
	)
}
