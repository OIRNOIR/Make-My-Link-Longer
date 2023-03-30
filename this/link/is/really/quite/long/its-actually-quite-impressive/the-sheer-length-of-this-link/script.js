window.onload = () => {
	const urlParams = new URLSearchParams(location.search);
	if (urlParams.has("thisIsAVeryLongLink")) {
		try {
			const step1 = atob(urlParams.get('thisIsAVeryLongLink'));
			let step2 = [];
			for (let i = 0; i < step1.length; i += 4) {
				step2.push(step1.split("")[i]);
			}
			let h = atob(step2.join(""));
			if (!h.startsWith("http")){
				h = "https://" + h;
			}
			setTimeout(() => {
				window.location.replace(h);
			}, 2000);
		} catch {
			document.getElementById("title").innerText = "This link is invalid!";	
			setTimeout(() => {
				window.location.replace("https://make-my-link-longer.xyz/");
			}, 5000);
		}
	} else {
		document.getElementById("title").innerText = "This link is invalid!";
		setTimeout(() => {
			window.location.replace("https://make-my-link-longer.xyz/");
		}, 5000);
	}
}