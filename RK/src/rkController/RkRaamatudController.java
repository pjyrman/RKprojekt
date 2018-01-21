package rkController;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import rk.Raamatud;
import rkResource.RaamatudResource;

@Path("/raamatud")
public class RkRaamatudController {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Raamatud> getAllRaamatud() {
		RaamatudResource raamatudR = new RaamatudResource();
		List<Raamatud> raamatud = raamatudR.getAllRaamatud();
		return raamatud;
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Raamatud addRaamatud(Raamatud newRaamatud) {
		return new RaamatudResource().addRaamatud(newRaamatud);
	}
	
}
