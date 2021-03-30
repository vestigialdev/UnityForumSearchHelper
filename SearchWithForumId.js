main();

function SelectSubforum() {

	//Get the url parameters
	var urlParams = new URLSearchParams(window.location.search);

	if (!urlParams.has('forumId')) {
		//ForumId was not present
		console.warn("UnityForumSearchHelper: Couldn't find 'forumId' in query string. It should have been passed by previously clicking on the Search button in a forum or thread");
		return false;
	}

	//Get the numeric forumId passed in on the query string
	var forumId = urlParams.get('forumId');

	//Find the subforum selection box
	var list = document.getElementById("ctrl_nodes");
	if (null == list) {
		//Couldn't find 
		console.warn("UnityForumSearchHelper: Couldn't find the subforum select element. Expected id 'ctrl_nodes'");
		return false;
	}

	//Set the subforum selection box to the forumId we passed in
	list.value = forumId;

	return true;
}

function main() {

	var result = SelectSubforum();

	if (!result) {
		console.warn("UnityForumSearchHelper failed");
	}
}

