let currentURL = "";

function generate(){
	const url = document.getElementById("link").value;
	const step1 = btoa(url);
	let step2 = [];
	for (const letter of step1.split("")) {
		for (let i = 0; i < 4; i++) {
			step2.push(letter)
		}
	}
	const finalUrl = btoa(step2.join(""));
	currentURL = "https://very-very-very-very-very-very-very-very-very-long-link.make-my-link-longer.ml/this/link/is/really/quite/long/its-actually-quite-impressive/the-sheer-length-of-this-link/?longLink=true&areYouReallySurprised=iThoughtNot&whyAreYouRunning=idk&thisIsAVeryLongLink=" + finalUrl + "&explanation=none&context=0&utm_source=facebook&utm_medium=main&utm_campaign=THIS_TOTALLY_UNOBTRUSIVE_CAMPAIGN_NAME&utm_content=some_sad_place_on_the_internet&more_ridiculous_things_in_your_links=because_why_not&maybe_we_can=write_poetry_in_utm_links&utm_utm_utm_utm_utm_param=bye&oh_and_dont_forget_the_facebook_click_id=thanks";
	document.getElementById("generated").style.display = "block";
	document.getElementById("output").innerText = currentURL;
}

function copyLink() {
	navigator.clipboard.writeText(currentURL);
	alert("Copied to clipboard!");
}