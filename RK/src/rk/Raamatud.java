package rk;

public class Raamatud {
	int idRaamatud;
	String autor1Eesnimi;
	String autor1Perenimi;
	String autor2Eesnimi;
	String autor2Perenimi;
	String pealkiri;
	int aasta;

	public int getIdRaamatud() {
		return idRaamatud;
	}

	public Raamatud setIdRaamatud(int idRaamatud) {
		this.idRaamatud = idRaamatud;
		return this;
	}

	public String getAutor1Eesnimi() {
		return autor1Eesnimi;
	}

	public Raamatud setAutor1Eesnimi(String autor1Eesnimi) {
		this.autor1Eesnimi = autor1Eesnimi;
		return this;
	}

	public String getAutor1Perenimi() {
		return autor1Perenimi;
	}

	public Raamatud setAutor1Perenimi(String autor1Perenimi) {
		this.autor1Perenimi = autor1Perenimi;
		return this;
	}

	public String getAutor2Eesnimi() {
		return autor2Eesnimi;
	}

	public Raamatud setAutor2Eesnimi(String autor2Eesnimi) {
		this.autor2Eesnimi = autor2Eesnimi;
		return this;
	}

	public String getAutor2Perenimi() {
		return autor2Perenimi;
	}

	public Raamatud setAutor2Perenimi(String autor2Perenimi) {
		this.autor2Perenimi = autor2Perenimi;
		return this;
	}

	public String getPealkiri() {
		return pealkiri;
	}

	public Raamatud setPealkiri(String pealkiri) {
		this.pealkiri = pealkiri;
		return this;
	}

	public int getAasta() {
		return aasta;
	}

	public Raamatud setAasta(int aasta) {
		this.aasta = aasta;
		return this;
	}

	@Override
	public String toString() {
		return "Raamat [id=" + idRaamatud + ", Autor1=" + autor1Eesnimi+" "+autor1Perenimi  + ", Autor2=" 
				+ autor2Eesnimi+" "+autor2Perenimi  + "Pealkiri" + pealkiri+ "Aasta"+ aasta+ "]";
	}
}
