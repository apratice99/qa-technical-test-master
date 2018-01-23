$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TestDailySong.feature");
formatter.feature({
  "line": 3,
  "name": "Add song daily to playlist",
  "description": "",
  "id": "add-song-daily-to-playlist",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestDailyPlaylist"
    },
    {
      "line": 2,
      "name": "@All"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Test song path to playlist",
  "description": "",
  "id": "add-song-daily-to-playlist;test-song-path-to-playlist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I have an endpoint to \"playlists\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I post the video song",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I add new video to playlist",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify playlist has the new video",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "playlists",
      "offset": 23
    }
  ],
  "location": "CommonSteps.I_have_an_endpoint_to(String)"
});
formatter.result({
  "duration": 773896523,
  "status": "passed"
});
formatter.match({
  "location": "VideosSteps.iPostTheVideoSong()"
});
formatter.result({
  "duration": 1115011740,
  "status": "passed"
});
formatter.match({
  "location": "PlaylistSteps.iAddNewVideoToPlaylist()"
});
formatter.result({
  "duration": 357129582,
  "status": "passed"
});
formatter.match({
  "location": "PlaylistSteps.iVerifyPlaylistHasTheNewVideo()"
});
formatter.result({
  "duration": 5349746,
  "status": "passed"
});
formatter.uri("features/TestPlaylist.feature");
formatter.feature({
  "line": 3,
  "name": "Test playlist functionalities.",
  "description": "",
  "id": "test-playlist-functionalities.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestPlaylist"
    },
    {
      "line": 2,
      "name": "@All"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#@GetAllPlaylist"
    }
  ],
  "line": 6,
  "name": "Get all Playlists",
  "description": "",
  "id": "test-playlist-functionalities.;get-all-playlists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have an endpoint to \"playlists\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I perform get request",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The response code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "response message should contain a json array of playlists",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "playlists",
      "offset": 23
    }
  ],
  "location": "CommonSteps.I_have_an_endpoint_to(String)"
});
formatter.result({
  "duration": 47183609,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.I_perform_get_request()"
});
formatter.result({
  "duration": 158674527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "CommonSteps.the_response_code_should_be_and_error_message(int)"
});
formatter.result({
  "duration": 585436,
  "status": "passed"
});
formatter.match({
  "location": "PlaylistSteps.json_array_of_playlists()"
});
formatter.result({
  "duration": 22370060,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#@GetPlaylistById"
    }
  ],
  "line": 13,
  "name": "Get Playlist with Id",
  "description": "",
  "id": "test-playlist-functionalities.;get-playlist-with-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I have an endpoint to get \"playlists\" by id \"playlistID\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I perform get request",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The response code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "The response message should contain playlist JSON",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "playlists",
      "offset": 27
    },
    {
      "val": "playlistID",
      "offset": 45
    }
  ],
  "location": "CommonSteps.I_have_an_endpoint_to_get_playlist_by_id(String,String)"
});
formatter.result({
  "duration": 77034288,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.I_perform_get_request()"
});
formatter.result({
  "duration": 176720073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "CommonSteps.the_response_code_should_be_and_error_message(int)"
});
formatter.result({
  "duration": 99692,
  "status": "passed"
});
formatter.match({
  "location": "PlaylistSteps.response_message_should_contain_playlist_json()"
});
formatter.result({
  "duration": 23344830,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Get Playlist with wrong Id",
  "description": "",
  "id": "test-playlist-functionalities.;get-playlist-with-wrong-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I have an endpoint to get \"playlists\" by id \"wrongID\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I perform get request",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The response code should be 500",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "playlists",
      "offset": 27
    },
    {
      "val": "wrongID",
      "offset": 45
    }
  ],
  "location": "CommonSteps.I_have_an_endpoint_to_get_playlist_by_id(String,String)"
});
formatter.result({
  "duration": 100500144,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.I_perform_get_request()"
});
formatter.result({
  "duration": 160131758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 28
    }
  ],
  "location": "CommonSteps.the_response_code_should_be_and_error_message(int)"
});
formatter.result({
  "duration": 96820,
  "status": "passed"
});
formatter.uri("features/TestVideo.feature");
formatter.feature({
  "line": 3,
  "name": "Test videos funcitonality.",
  "description": "",
  "id": "test-videos-funcitonality.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestVideo"
    },
    {
      "line": 2,
      "name": "@All"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#@GetVideo"
    }
  ],
  "line": 6,
  "name": "Get Video with Id.",
  "description": "",
  "id": "test-videos-funcitonality.;get-video-with-id.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have an endpoint to get \"videos\" by id \"getVideoID\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I perform get request",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The response code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "The response json should contain the video JSON",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "videos",
      "offset": 27
    },
    {
      "val": "getVideoID",
      "offset": 42
    }
  ],
  "location": "CommonSteps.I_have_an_endpoint_to_get_playlist_by_id(String,String)"
});
formatter.result({
  "duration": 46560429,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.I_perform_get_request()"
});
formatter.result({
  "duration": 159294834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "CommonSteps.the_response_code_should_be_and_error_message(int)"
});
formatter.result({
  "duration": 65231,
  "status": "passed"
});
formatter.match({
  "location": "VideosSteps.the_response_json_should_contain_the_video_JSON()"
});
formatter.result({
  "duration": 48256020,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Get all Videos",
  "description": "",
  "id": "test-videos-funcitonality.;get-all-videos",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I have an endpoint to \"videos\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I perform get request",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The response code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "response message should contain a json array of videos",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "videos",
      "offset": 23
    }
  ],
  "location": "CommonSteps.I_have_an_endpoint_to(String)"
});
formatter.result({
  "duration": 38164528,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.I_perform_get_request()"
});
formatter.result({
  "duration": 163768273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "CommonSteps.the_response_code_should_be_and_error_message(int)"
});
formatter.result({
  "duration": 70564,
  "status": "passed"
});
formatter.match({
  "location": "VideosSteps.a_json_array_of_videos()"
});
formatter.result({
  "duration": 37508939,
  "status": "passed"
});
});