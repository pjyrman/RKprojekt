package rk;

public class Lugejad  {
	int idlugejad;
	String eesnimi;
	String perenimi;

	public int getIdlugejad() {
		return idlugejad;
	}

	public Lugejad setIdlugejad(int idlugejad) {
		this.idlugejad = idlugejad;
		return this;
	}



	public String getEesnimi() {
		return eesnimi;
	}



	public Lugejad setEesnimi(String eesnimi) {
		this.eesnimi = eesnimi;
		return this;
	}



	public String getPerenimi() {
		return perenimi;
	}



	public Lugejad setPerenimi(String perenimi) {
		this.perenimi = perenimi;
		return this;
	}


	@Override
	public String toString() {
		return "Lugeja [id=" + idlugejad + "Nimi " + eesnimi + " " + perenimi + "]";
	}

}
