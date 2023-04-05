import { createContext, useState } from "react"

export type GlobalState = {
	message?: string,
	setMessage: (message: string) => void
}

export type GlobalStateProviderProps = {
	initialData: Partial<GlobalState>,
	children?: React.ReactNode
}

export const GlobalStateContext = createContext<GlobalState>({
	message: "Default message...",
	setMessage: () => { }
});


export default function GlobalStateProvider({ initialData, children }: GlobalStateProviderProps) {
	const [state, setState] = useState(initialData || {})


	const setMessage = (message: string) => {
		setState({ ...state, message })
	}

	return (
		<GlobalStateContext.Provider value={{ ...state, setMessage }}>
			{children}
		</GlobalStateContext.Provider>
	)
}
