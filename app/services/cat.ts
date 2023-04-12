export type CatFact = {
	_id: string,
	text: string
}

export async function getCatFacts() {
	const res = await fetch('https://cat-fact.herokuapp.com/facts')
	const json: CatFact[] = await res.json();
	return json;
}
