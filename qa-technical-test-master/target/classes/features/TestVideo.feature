@TestVideo
@All
Feature: Test videos funcitonality.

#@GetVideo
Scenario: Get Video with Id.
			 Given I have an endpoint to get "videos" by id "getVideoID"
			 When I perform get request
			 Then The response code should be 200
			 And The response json should contain the video JSON
 			
Scenario: Get all Videos
			Given I have an endpoint to "videos"
			When I perform get request
			Then The response code should be 200
			And response message should contain a json array of videos