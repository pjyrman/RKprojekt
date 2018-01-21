package rk;

public class Laenutused {
	int idLaenutused;
	int idRaamatud;
	int idLugejad;
	String tagastatud;

	public String getTagastatud() {
		return tagastatud;
	}

	public Laenutused setTagastatud(String tagastatud) {
		this.tagastatud = tagastatud;
		return this;
	}

	public int getIdLaenutused() {
		return idLaenutused;
	}

	public Laenutused setIdlLaenutused(int idLaenutused) {
		this.idLaenutused = idLaenutused;
		return this;
	}

	public int getIdRaamatud() {
		return idRaamatud;
	}

	public Laenutused setIdRaamatud(int idRaamatud) {
		this.idRaamatud = idRaamatud;
		return this;
	}

	public int getIdLugejad() {
		return idLugejad;
	}

	public Laenutused setIdLugejad(int idLugejad) {
		this.idLugejad = idLugejad;
		return this;
	}

	@Override
	public String toString() {
		return "Laenutus [raamat=" + idRaamatud + ", lugeja=" + idLugejad + "]";
	}
}
