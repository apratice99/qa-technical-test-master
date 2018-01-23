package helper;

import java.text.ParseException;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Assert;

public class APIDataValidator {
	public static boolean verifyPlaylistHasVideo(JSONObject playlist, String newVideoId) throws ParseException {
		JSONArray videos = playlist.getJSONArray("videos");
		Assert.assertNotNull("video should get patched", videos);
		for (int i = 0; i < videos.length(); i++) {
			JSONObject video = videos.getJSONObject(i);
			if(video.getString("_id").equals(newVideoId)) {
				return true;
			}
		}
		return false;
	}
	public static void validatePlaylist(JSONObject playlist) {
		Assert.assertNotNull("Provide id field", playlist.getString("_id"));
		Assert.assertNotNull("Provide playlist description", playlist.getString("desc"));
		Assert.assertNotNull("Provide song title", playlist.getString("title"));
		Assert.assertNotNull("Provide version number", playlist.getInt("__v"));
		Assert.assertNotNull("Provide date created", playlist.getString("date_created"));
	}

	public static void validateVideo(JSONObject video) {
		Assert.assertNotNull("Provide id field", video.getString("_id"));
		Assert.assertNotNull("Provide artist name", video.getString("artist"));
		Assert.assertNotNull("Provide song title", video.getString("song"));
		// Assert.assertNotNull("Provide publish date",
		// video.getString("publishDate"));
		Assert.assertNotNull("Provide artist name", video.getString("artist"));
		Assert.assertNotNull("Provide version name", video.getInt("__v"));
		Assert.assertNotNull("Provide date created", video.getString("date_created"));
	}

	public static void validatePatchVideo(JSONObject playlist) throws ParseException {
		JSONArray videos = playlist.getJSONArray("videos");
		Assert.assertNotNull("video should get patched", videos);
		for (int i = 0; i < videos.length(); i++) {
			JSONObject video = videos.getJSONObject(i);
			validateVideo(video);
		}
	}
}
