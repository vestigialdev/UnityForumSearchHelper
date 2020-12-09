# UnityForumSearchHelper
Auto-selects the proper subform when clicking the Search button

INSTALLATION: 
0) Download this project to disk
1) In Chrome, go to chrome://extensions
2) Click "Load unpacked" in the top left corner
3) Navigate to the UnityForumSearchHelper directory
4) Click Select Folder 
5) UnityForumSearchHelper should be installed, check the console for warnings if it doesn't

How it works
It runs two .js scripts, one on the forum page, and one on the search page. 
The forum script modifies the "Search" link to include the forum ID as a GET parameter in the query string.
The search page script looks for the forum id in the query string, and sets the subforum "select" element. 

I'm not a web developer, so feel free to make improvements like changing the search link to a search box that sends the query foreward
