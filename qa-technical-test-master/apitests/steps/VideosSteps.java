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

public class VideosSteps {
	static String newVideoId;
	public List<HashMap<String, String>> datamap;

	public VideosSteps() {
		datamap = DataHelper.data("VideoData");
	}

	@Then("response message should contain a json array of videos")
	public void a_json_array_of_videos() throws ParseException, IOException {
		HttpEntity entity = CommonSteps.response.getEntity();
		String responseString = EntityUtils.toString(entity);
		JSONArray array = new JSONArray(responseString);
		for (int i = 0; i < array.length(); i++) {
			JSONObject video = array.getJSONObject(i);
			APIDataValidator.validateVideo(video);
		}
	}

	@When("I post the video song")
	public void iPostTheVideoSong() throws ClientProtocolException, IOException {
		CommonSteps.url = datamap.get(0).get("endpoint") + datamap.get(0).get("videos");
		CommonSteps.response = Request.Post(CommonSteps.url).bodyString(datamap.get(0).get("postVideoJSON"), ContentType.APPLICATION_JSON)
				.connectTimeout(1000).socketTimeout(1000).execute().returnResponse();
		
		JSONObject video = getVideoAsJSONObject();
		newVideoId = video.getString("_id");
	}
	
	@Then("The response json should contain the video JSON")
	public void the_response_json_should_contain_the_video_JSON() throws IOException {
		JSONObject video = getVideoAsJSONObject();
		APIDataValidator.validateVideo(video);
	}

	JSONObject getVideoAsJSONObject() throws ClientProtocolException, IOException {
		HttpEntity entity = CommonSteps.response.getEntity();
		String responseString = EntityUtils.toString(entity);
		JSONObject video = new JSONObject(responseString);
		return video;
	}
}