import { useContext } from "react";
import { GlobalStateContext } from "~/components/GlobalStateProvider/GlobalStateProvider";

export default function useGlobalState() {
	const global = useContext(GlobalStateContext)
	// Do any kind of normalization and/or create additional methods or state to return from the hook
	return global;
}
