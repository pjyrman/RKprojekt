package rkController;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import rk.Laenutused;
import rkResource.LaenutusedResource;


@Path("/laenutused")
public class RkLaenutusedController {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Laenutused> getAllLaenutused() {
		LaenutusedResource laenutusedR = new LaenutusedResource();
		List<Laenutused> laenutused = laenutusedR.getAllLaenutused();
		return laenutused;
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Laenutused addLaenutused(Laenutused newLaenutused) {
		return new LaenutusedResource().addLaenutused(newLaenutused);
	}

}
