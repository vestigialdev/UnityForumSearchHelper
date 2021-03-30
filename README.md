# UnityForumSearchHelper
Auto-selects the proper subform when clicking the Search button

<h3>INSTALLATION</h3>

0) Download this project to disk
1) In Chrome, go to chrome://extensions
2) Click "Load unpacked" in the top left corner
3) Navigate to the UnityForumSearchHelper directory
4) Click Select Folder 
5) UnityForumSearchHelper should be installed, check the console for warnings if it doesn't work when searching the Unity forums

<h3>How it works</h3>

It runs two .js scripts, one on the forum and thread pages, and one on the search page. 
The forum script modifies the "Search" link to include the forum ID as a GET parameter in the query string.
The search page script looks for the forum id in the query string, and uses it to set the subforum "select" element value. 

I'm not a web developer, so feel free to make improvements like changing the search link to a search box that sends the query foreword
