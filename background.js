const stagingBsky = "https://staging.bsky.app";
// const excludedPaths = [
//   "/poll",
//   "/rpan",
//   "/settings",
//   "/topics",
//   "/community-points",
// ];

chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		const url = new URL(details.url);

		if (url.hostname === "staging.bsky.app") return;

		// for (const path of excludedPaths) {
		//   if (url.pathname.indexOf(path) === 0) return;
		// }

		// if (url.pathname.indexOf("/gallery") === 0) {
		//   return { redirectUrl: stagingBsky + '/comments' + url.pathname.slice("/gallery".length) };
		// }

		return { redirectUrl: stagingBsky + url.pathname + url.search + url.hash };
	},
	{
		urls: [
			"*://reddit.com/*",
			// "*://www.reddit.com/*",
			// "*://np.reddit.com/*",
			// "*://amp.reddit.com/*",
			// "*://i.reddit.com/*",
			"*://bsky.app/*"
		],
		types: [
			"main_frame",
			"sub_frame",
			"stylesheet",
			"script",
			"image",
			"object",
			"xmlhttprequest",
			"other",
		],
	},
	["blocking"]
);