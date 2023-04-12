import type { ChangeEventHandler } from "react";

import { useGlobalState } from "~/hooks/useGlobalState";

export default function Index() {
	// Pull any values or setters relating to global state
	const { catFacts, setCatFact } = useGlobalState();

	// We can modify values derived from loader data on the client
	const handleFactChange = (id: string): ChangeEventHandler<HTMLInputElement> => (evt) => {
		setCatFact(id, evt.target.value)
	}

	return (
		<main id="home">
			{catFacts.map((fact) => (
				<input
					key={fact._id}
					name={`fact-${fact._id}`}
					type="text"
					placeholder="Enter text..."
					onChange={handleFactChange(fact._id)}
					value={fact.text}
				/>
			))}
		</main>
	);
}
