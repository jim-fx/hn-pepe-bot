const fs = {
	name: "/",
	children: []
};
let cwd = "/";

export const pwd = () => ""+cwd;

function find(dir, path){
	path = Array.isArray(path)?path:path.split("/").filter(v => v.length);
	if(!path.length) return dir;
	const nextDirName = path.shift();
	const nextDir = dir.children.find(d => d.name === nextDirName);
	if(!nextDir){
		return;
	};
	return find(nextDir, path);
}

function getCWD(){
	return find(fs, cwd);	
}

function applyPath(oldPath, modifier){
	const op = oldPath.split("/");
	const p = modifier.split("/");


	while(p.length){
		const m = p.shift();

		switch(m){
			case ".":
				break;
			case "..":
				op.pop();
				break;
			default:
				op.push(m);
		}
	}

	return op.filter(v => v.length).join("/");
}

export const cd = (path) => {
	const newPath = applyPath(cwd, path);
	console.log("cd", cwd, newPath)
	const newDir = find(fs, newPath);
	if(newDir) {
		cwd = newPath;
	}

	console.log("CD;NEW",cwd, find(fs, "home"));
};

export const mkdir = (name) => {

	name = name.split(" ").join("_");

	const _cwd = getCWD();

	if(!_cwd) {
		console.log("error")
		return "error"
	};

	const exists = _cwd.children.find(d => d.name === name);

	if(exists){
		console.log("exists");
		return "directory exists";
	}


	_cwd.children.push({
		name,
		children: []
	})

};

export const ls = () => {
	const c = getCWD();
	return c.children.map(c => c.name).join("\n");
}

export const rm = (name) => {}


mkdir("root");
mkdir("home");
mkdir("lib");
mkdir("usr");
mkdir("share");
cd("home");
mkdir("hn");
console.log(fs);
