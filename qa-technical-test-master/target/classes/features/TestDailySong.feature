@TestDailyPlaylist
@All
Feature: Add song daily to playlist

Scenario:	Test song path to playlist
			Given I have an endpoint to "playlists"
			When I post the video song
			And I add new video to playlist
			Then I verify playlist has the new video