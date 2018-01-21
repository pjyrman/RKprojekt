package rk;

public class Laenutused {
	int idlaenutused;
	int idraamatud;
	int idlugejad;
	String tagastatud;

	public String getTagastatud() {
		return tagastatud;
	}

	public Laenutused setTagastatud(String tagastatud) {
		this.tagastatud = tagastatud;
		return this;
	}

	public int getIdlaenutused() {
		return idlaenutused;
	}

	public Laenutused setIdlaenutused(int idlaenutused) {
		this.idlaenutused = idlaenutused;
		return this;
	}

	public int getIdraamatud() {
		return idraamatud;
	}

	public Laenutused setIdraamatud(int idraamatud) {
		this.idraamatud = idraamatud;
		return this;
	}

	public int getIdlugejad() {
		return idlugejad;
	}

	public Laenutused setIdlugejad(int idlugejad) {
		this.idlugejad = idlugejad;
		return this;
	}

	@Override
	public String toString() {
		return "Laenutus [raamat=" + idraamatud + ", lugeja=" + idlugejad + "]";
	}
}
