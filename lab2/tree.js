const tree = { 
	name : "home", 
	files : [],
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
};
var find = file => fileTree => {
	for(var item of fileTree['files']){
		if(item == file){
			return true;
		}
	}

	for(let subFolder of fileTree['subFolders']){
		if(find(file)(subFolder)){
			return true;
		}
	}

	return false;
}
console.log(find("paper.pdf")(tree)); // true
console.log(find("randomfile")(tree)); // false
