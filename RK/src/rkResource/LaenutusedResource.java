package rkResource;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import rk.Laenutused;
import rkDatabaseConnection.RkDatabaseConnection;

public class LaenutusedResource {
	public List<Laenutused> getAllLaenutused() {
		String sqlQuery = "SELECT idlaenutused,idlugejad, idraamatud,tagastatud FROM rk.laenutused";
		System.out.println(sqlQuery);
		List<Laenutused> laenutusedInfo = new ArrayList<>();
		try (ResultSet results = RkDatabaseConnection.getConnection().createStatement().executeQuery(sqlQuery);) {
			while (results.next()) {
				laenutusedInfo.add(new Laenutused().setIdlLaenutused(results.getInt("idlaenutused")).setIdLugejad(results.getInt("idlugejad")).setIdRaamatud(results.getInt("idraamatud")));
			}
		} catch (SQLException e) {
			System.out.println("Error on running query in selectListSql: " + e.getStackTrace());
		}
		System.out.println(laenutusedInfo);
		return laenutusedInfo;
	}

	public Laenutused addLaenutused(Laenutused laenutused) {
		int idLaenutused = 0;
		System.out.println("jjhj"+laenutused);
		String sqlQuery = "INSERT INTO rk.laenutused (idraamatud, idlugejad) VALUES("
					+ laenutused.getIdRaamatud()+","+laenutused.getIdLugejad() + ")";
			System.out.println(sqlQuery);

			try (Statement statement = RkDatabaseConnection.getConnection().createStatement()) {
				statement.executeUpdate(sqlQuery, Statement.RETURN_GENERATED_KEYS);
				ResultSet resultSet1 = statement.getGeneratedKeys();
				while (resultSet1.next()) {
				idLaenutused = resultSet1.getInt(1);
				}

			} catch (SQLException e) {
				System.out.println("Error on running query: " + e.getStackTrace());
			}
			Laenutused laenutusedInfo = (new Laenutused().setIdRaamatud(laenutused.getIdRaamatud()).setIdLugejad(laenutused.getIdLugejad()));
			return laenutusedInfo;
	}
}