# UFOs


## Overview:


The purpose of this analysis was to create a web application that allows users to filter UFO sightings by date, city, state, country, and shape from a given data file data.js.  An index.html file was written to to have five input boxes and the app.js file was written to filter search results from the data.js file by noticing a change in the input boxes and then returning a table with results that contained the ids of the search criteria.  The files included in this project were data.js, app.js, style.css, and index.html.  The data.js file includes information on the date, city, state, country, shape, duration, and comments for each UFO sighting. 

data.js: https://github.com/cmhume/UFOs/blob/0eca4b8e4e15ef9c302ba30ab4d3bf14b3ae308c/data.js


app.js: https://github.com/cmhume/UFOs/blob/0eca4b8e4e15ef9c302ba30ab4d3bf14b3ae308c/app.js


index.html: https://github.com/cmhume/UFOs/blob/0eca4b8e4e15ef9c302ba30ab4d3bf14b3ae308c/index.html


## Results:


### How to Search for UFO sightings-

#### Filter Search options with placeholder text before user input:


![filter_search_blank](https://user-images.githubusercontent.com/78699521/120121331-b51fae80-c157-11eb-857f-7e463b7c7dda.png)



#### Type in search criteria using placeholder format as a guide and press"Enter" to filter results: 


##### Example 1- filter search by the date 1/10/2010


![filter_search_date](https://user-images.githubusercontent.com/78699521/120121384-02038500-c158-11eb-8810-69fb6b682aed.png)


##### Example 2a- multiple filter search using date and country


![filter_search_multiple](https://user-images.githubusercontent.com/78699521/120122096-b4891700-c15b-11eb-9f84-226bd7d5216b.png)


##### Example 2b- multiple filter search with no results, no entries in the data.js file meet criteria of user inputs for date, country, and shape  


![filter_search_no_results](https://user-images.githubusercontent.com/78699521/120122110-bce15200-c15b-11eb-872f-06eaa95c4ad8.png)


## Summary:


### Drawbacks of UFO webpage-


One drawback of the UFO webpage is no information on how the UFO sighting data was compiled, the credibility of each sighting, the person that posted each sighting, or the number of witnesses for each UFO event is available.  The user has to trust the data without knowing it's source or reliability.  Another drawback is the user must pick input values that are in the data.js file without knowing what data is available before entering the filter search.


### Recommendations for further development-

For further development, filters could be modified to retrieve sightings within a number of miles of an entered city if no exact matches for that city were found in the data.js file.  Also, allowing the user to confirm sightings, add comments, or add their own sighting to the website would make the website more interactive. In addition, having an interactive map with dots that reflect the number of sightings for that area and that would show the data for the sightings when clicked would add visual interest.



