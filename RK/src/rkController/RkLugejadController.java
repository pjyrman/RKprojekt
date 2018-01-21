package rkController;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import rk.Lugejad;
import rkResource.LugejadResource;

@Path("/lugejad")
public class RkLugejadController {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Lugejad> getAllLugejad() {
		LugejadResource lugejadR = new LugejadResource();
		List<Lugejad> lugejad = lugejadR.getAllLugejad();
		return lugejad;
	}
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Lugejad addLugejad(Lugejad newLugejad) {
		return new LugejadResource().addLugejad(newLugejad);
	}

}
