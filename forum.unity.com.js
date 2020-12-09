AppendForumId();
	
function AppendForumId(){
	
	//Get the numeric id of the forum we're in
	var forumId = GetForumId();
		
	//Iterate through all <a> elements
	var searchLinks = document.getElementsByTagName("a");
	for (var i = 0, len = searchLinks.length; i < len; i++) {	  		
	
		//If this link leads to the search page, 
		if(searchLinks[i].getAttribute('href') == 'search/?type=post'){
			
			//modify the href value to include the numeric forumId
			searchLinks[i].setAttribute('href', 'search/?type=post&forumId='+forumId);
		}		
	}
}

function GetForumId(){
	//Forum urls end with a period, then a unique numeric id, 
	//like this: https://forum.unity.com/forums/unity-remote-config.371/
	
	var pathName = window.location.pathname;
	
	//Trim off everything before (and including) the dot
	var dotPosition = pathName.indexOf(".");
	var forumIdWithSlash = pathName.substring(dotPosition+1);
	
	//Remove the trailing /
	forumId = forumIdWithSlash.substring(0, forumIdWithSlash.length-1);
	
	//At this point we should have just the number
	return forumId;
}