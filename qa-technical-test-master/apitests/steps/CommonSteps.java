package steps;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.fluent.Request;
import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper.DataHelper;

public class CommonSteps {
	public static String url;
	public static HttpResponse response;
	public List<HashMap<String, String>> playlistMap;
	public List<HashMap<String, String>> videoMap;
	
	public CommonSteps() {
		playlistMap = DataHelper.data("PlaylistData");
		videoMap = DataHelper.data("VideoData");
	}
	
	@Given("I have an endpoint to \"(.*?)\"")
	public void I_have_an_endpoint_to(String resource) throws ClientProtocolException, IOException {
		if(resource.equals("playlists"))
			CommonSteps.url = playlistMap.get(0).get("endpoint") + playlistMap.get(0).get(resource);
		else if(resource.equals("videos"))
			CommonSteps.url = videoMap.get(0).get("endpoint") + videoMap.get(0).get(resource);
	}
	
	@Given("I have an endpoint to get \"(.*?)\" by id \"(.*?)\"")
	public void I_have_an_endpoint_to_get_playlist_by_id(String resource, String ID) {
		if(resource.equals("playlists"))
			CommonSteps.url = playlistMap.get(0).get("endpoint") + playlistMap.get(0).get(resource) + "/" + playlistMap.get(0).get(ID);
		else if(resource.equals("videos"))
			CommonSteps.url = videoMap.get(0).get("endpoint") + videoMap.get(0).get(resource) + "/" + videoMap.get(0).get(ID);
	}
	
	@When("I perform get request")
	public void I_perform_get_request() throws ClientProtocolException, IOException {
		response = Request.Get(url).connectTimeout(1000).socketTimeout(1000).execute().returnResponse();
	}

	@Then("The response code should be (\\d+)")
	public void the_response_code_should_be_and_error_message(int responseCode) throws IOException {
		int status = response.getStatusLine().getStatusCode();
		Assert.assertEquals(responseCode, status);
	}
}