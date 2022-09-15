// I fucking HATE homestuck
module.exports = {
    title: "John's Erection", 
    author: "seymour (<a href='https://twitter.com/spaghettitron'>@spaghettitron</a>)</br>the \"cth\" erector",
    modVersion: 1.0,

    description: `<p>i have an erection.</p>`,

    edit(archive) {
        // regex
        const searchRegex = /<span (.*?)>(?:\w{2,4}): (.*?)<\/span>/ig;
        let searchMatch;

        // this might be really inefficient, but it only runs once each reload
        for (let i = 1926; i < 9999; i++) {
            const pageString = `00${i}`;
	    // if the page exists (prevents certain errors)
            if (archive.mspa.story[pageString]) {
                const content = archive.mspa.story[pageString].content;
                // store all of EVERYoneesn's lines
                const lines = [];
                while(searchMatch = searchRegex.exec(content)) lines.push(searchMatch[2]);
                for (let x = 0; x < 4; x++) {
		    // choose a random one
		    const selectedText = lines[Math.floor(Math.random() * lines.length)];
		    // replace chosen line
		    archive.mspa.story[pageString].content = content.replace(selectedText, 'i have an erection.');
		}
            }
        }
    },
}
