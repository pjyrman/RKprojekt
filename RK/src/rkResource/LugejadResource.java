package rkResource;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import rk.Lugejad;
import rkDatabaseConnection.RkDatabaseConnection;

public class LugejadResource {
	public List<Lugejad> getAllLugejad() {
		String sqlQuery = "SELECT idlugejad, eesnimi, perenimi FROM rk.lugejad";
		System.out.println(sqlQuery);
		List<Lugejad> lugejadInfo = new ArrayList<>();
		try (ResultSet results = RkDatabaseConnection.getConnection().createStatement().executeQuery(sqlQuery);) {
			while (results.next()) {
				lugejadInfo.add(new Lugejad().setEesnimi(results.getString("eesnimi")).setPerenimi(results.getString("perenimi")).setIdlugejad(results.getInt("idlugejad")));
			}
		} catch (SQLException e) {
			System.out.println("Error on running query in selectListSql: " + e.getStackTrace());
		}
		System.out.println(lugejadInfo);
		return lugejadInfo;
	}

	public Lugejad addLugejad(Lugejad lugeja) {
		int idLugeja = 0;
		String sqlQuery = "INSERT INTO lugejad (eesnimi, perenimi) VALUES('"
					+ lugeja.getEesnimi()+"','" +lugeja.getPerenimi() + "')";
			System.out.println(sqlQuery);

			try (Statement statement = RkDatabaseConnection.getConnection().createStatement()) {
				statement.executeUpdate(sqlQuery, Statement.RETURN_GENERATED_KEYS);
				ResultSet resultSet1 = statement.getGeneratedKeys();
				while (resultSet1.next()) {
				idLugeja = resultSet1.getInt(1);
				}

			} catch (SQLException e) {
				System.out.println("Error on running query: " + e.getStackTrace());
			}
			Lugejad lugejaInfo = (new Lugejad().setEesnimi(lugeja.getEesnimi()).setPerenimi(lugeja.getPerenimi()).setIdlugejad(idLugeja));
			return lugejaInfo;
	}
}