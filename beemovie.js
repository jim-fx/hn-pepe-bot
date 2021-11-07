import fs from "fs/promises";

export default (async() => {
	const raw = await fs.readFile("./beemovie.txt", "utf-8");
	const lines = raw.split("\n").map(line => line.trim()).filter(line => line.length);
	return lines;
})()
