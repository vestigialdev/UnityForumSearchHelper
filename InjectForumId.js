AppendForumId();

function AppendForumId() {

	//Get the numeric id of the forum we're in
	var forumId = GetForumId();

	//Iterate through all <a> elements
	var searchLinks = document.getElementsByTagName("a");
	for (var i = 0, len = searchLinks.length; i < len; i++) {

		//If this link leads to the search page, 
		if (searchLinks[i].getAttribute('href') == 'search/?type=post') {

			//modify the href value to include the numeric forumId
			searchLinks[i].setAttribute('href', 'search/?type=post&forumId=' + forumId);
		}
	}
}

function GetForumId() {

	//There is a non-visible link that pops up a quick navigation window
	//Its href attribute contains the forum ID we're currently in
	//This is useful because its format is the same whether we're browsing a forum or inside a thread
	var quickNavigateLink = document.querySelector('[title="Open quick navigation"]');
	var forumPath = quickNavigateLink.getAttribute('href');

	//Find the last dash in the link
	var dashPosition = forumPath.lastIndexOf("-");

	//Trim off everything before (and including) the last dash
	var forumId = forumPath.substring(dashPosition + 1);

	//At this point we should have just the number
	return forumId;
}