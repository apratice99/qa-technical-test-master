@TestPlaylist
@All
Feature: Test playlist functionalities.

#@GetAllPlaylist
Scenario: Get all Playlists
				Given I have an endpoint to "playlists"
				When I perform get request
				Then The response code should be 200
				And response message should contain a json array of playlists

#@GetPlaylistById
Scenario: Get Playlist with Id
				Given I have an endpoint to get "playlists" by id "playlistID"
				When I perform get request
				Then The response code should be 200
				And The response message should contain playlist JSON

Scenario: Get Playlist with wrong Id
				Given I have an endpoint to get "playlists" by id "wrongID"
				When I perform get request
				Then The response code should be 500