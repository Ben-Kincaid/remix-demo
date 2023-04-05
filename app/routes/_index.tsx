import type { ChangeEventHandler } from "react";

import { useGlobalState } from "~/hooks/useGlobalState";

export default function Index() {
	// Pull any values or setters relating to global state
	const { message, setMessage } = useGlobalState();

	// We can modify values derived from loader data on the client
	const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
		setMessage(evt.target.value)
	}

	return (
		<main id="home">
			<input
				name="message"
				type="text"
				placeholder="Enter text..."
				onChange={handleChange}
				value={message}
			/>
		</main>
	);
}
