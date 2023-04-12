import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "@remix-run/react";

import { GlobalStateProvider } from "./components/GlobalStateProvider";
import services from "./services";

import styles from "~/styles/main.css"

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export const loader = async () => {
		const catFacts = await services.cat.getCatFacts();
	// Fetch & return all data globally required on the server 
	// ...
	return {
		global: {
			catFacts
		}
	}
}

export default function App() {
	// Fetch global app data that is required to be requested on the server
	const { global } = useLoaderData<typeof loader>();

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{/* Wrap the page components in the GlobalStateProvider */}
				<GlobalStateProvider initialData={global}>
					<Outlet />
				</GlobalStateProvider>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
