package steps;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.fluent.Request;
import org.apache.http.entity.ContentType;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper.APIDataValidator;
import helper.DataHelper;

public class PlaylistSteps {
	
	public List<HashMap<String, String>> datamap;

	public PlaylistSteps() {
		datamap = DataHelper.data("PlaylistData");
	}

	@Then("response message should contain a json array of playlists")
	public void json_array_of_playlists() throws ClientProtocolException, IOException {
		HttpEntity entity = CommonSteps.response.getEntity();
		String responseString = EntityUtils.toString(entity);
		JSONArray array = new JSONArray(responseString);
		for (int i = 0; i < array.length(); i++) {
			JSONObject playlist = array.getJSONObject(i);
			APIDataValidator.validatePlaylist(playlist);
		}
	}

	@Then("The response message should contain playlist JSON")
	public void response_message_should_contain_playlist_json()
			throws ParseException, IOException, java.text.ParseException {
		HttpEntity entity = CommonSteps.response.getEntity();
		String responseString = EntityUtils.toString(entity);
		JSONObject playlist = new JSONObject(responseString);

		APIDataValidator.validatePlaylist(playlist);
		APIDataValidator.validatePatchVideo(playlist);
	}

	@When("I add new video to playlist")
	public void iAddNewVideoToPlaylist() throws ClientProtocolException, IOException {
		String patchVideoJSON = "{\"videos\":[{\"" + VideosSteps.newVideoId + "\":\"add\"}]}";
		
		CommonSteps.url = datamap.get(0).get("endpoint") + datamap.get(0).get("playlists")  + "/" + datamap.get(0).get("playlistIDForVideoPatch");
		CommonSteps.response = Request.Patch(CommonSteps.url).bodyString(patchVideoJSON, ContentType.APPLICATION_JSON)
				.connectTimeout(1000).socketTimeout(1000).execute().returnResponse();
		
		CommonSteps.url = datamap.get(0).get("endpoint") + datamap.get(0).get("playlists") + "/" + datamap.get(0).get("playlistIDForVideoPatch");
		CommonSteps.response = Request.Get(CommonSteps.url).connectTimeout(1000).socketTimeout(1000).execute().returnResponse();
	}

	@Then("I verify playlist has the new video")
	public void iVerifyPlaylistHasTheNewVideo() throws ClientProtocolException, IOException, java.text.ParseException {
		HttpEntity entity = CommonSteps.response.getEntity();
		String responseString = EntityUtils.toString(entity);
		JSONObject playlist = new JSONObject(responseString);
		APIDataValidator.verifyPlaylistHasVideo(playlist, VideosSteps.newVideoId);
	}
}