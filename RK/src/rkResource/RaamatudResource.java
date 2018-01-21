package rkResource;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import rk.Raamatud;
import rkDatabaseConnection.RkDatabaseConnection;

public class RaamatudResource {
	public List<Raamatud> getAllRaamatud() {
		String sqlQuery = "SELECT idraamatud, autor1_eesnimi, autor1_perenimi, autor2_eesnimi, autor2_perenimi, pealkiri, aasta FROM rk.raamatud";
		System.out.println(sqlQuery);
		List<Raamatud> raamatudInfo = new ArrayList<>();
		try (ResultSet results = RkDatabaseConnection.getConnection().createStatement().executeQuery(sqlQuery);) {
			while (results.next()) {		
				raamatudInfo.add(new Raamatud().setIdRaamatud(results.getInt("idraamatud")).setAutor1Eesnimi(results.getString("autor1_eesnimi")).setAutor1Perenimi(results.getString("autor1_perenimi")).setAutor2Eesnimi(results.getString("autor2_eesnimi")).setAutor2Perenimi(results.getString("autor2_perenimi")).setPealkiri(results.getString("pealkiri")).setAasta(results.getInt("aasta")));
				}
		} catch (SQLException e) {
			System.out.println("Error on running query in selectListSql: " + e.getStackTrace());
		}
		System.out.println(raamatudInfo);
		return raamatudInfo;
	}

	public Raamatud addRaamatud(Raamatud raamat) {
		int idRaamat = 0;
		String sqlQuery = "INSERT INTO raamatud (autor1Eesnimi,autor1Perenimi,autor2Eesnimi, autor2Perenimi,pealkiri,aasta) VALUES('"
					+ raamat.getAutor1Eesnimi()+"','" +raamat.getAutor1Perenimi() 
					+ raamat.getAutor2Eesnimi()+"','" +raamat.getAutor2Perenimi()
					+ raamat.getPealkiri()+"','" +raamat.getAasta()+ "')";
			System.out.println(sqlQuery);

			try (Statement statement = RkDatabaseConnection.getConnection().createStatement()) {
				statement.executeUpdate(sqlQuery, Statement.RETURN_GENERATED_KEYS);
				ResultSet resultSet1 = statement.getGeneratedKeys();
				while (resultSet1.next()) {
				idRaamat = resultSet1.getInt(1);
				}

			} catch (SQLException e) {
				System.out.println("Error on running query: " + e.getStackTrace());
			}
			Raamatud raamatuInfo = (new Raamatud().setIdRaamatud(idRaamat).setAutor1Eesnimi(raamat.getAutor1Eesnimi()).setAutor1Perenimi(raamat.getAutor1Perenimi()).
			setAutor2Eesnimi(raamat.getAutor2Eesnimi()).setAutor2Perenimi(raamat.getAutor2Perenimi()).setPealkiri(raamat.getPealkiri()).setAasta(raamat.getAasta()));
			
			
			return raamatuInfo;
	}
}