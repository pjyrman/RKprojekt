package rkDatabaseConnection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class RkDatabaseConnection {
	private static Connection connection = null;

	public static Connection getConnection() {
		String dbUrl = "jdbc:mysql://localhost:3306/rk";
		Properties connectionProperties = new Properties();
		connectionProperties.put("user", "rkuser");
		connectionProperties.put("password", "raamat");

		loadDriver();
		try {
			connection = DriverManager.getConnection(dbUrl, connectionProperties);
		} catch (SQLException e) {
			System.out.println("Creating DB connection failed: " + e.getStackTrace());
		}
		return connection;
	}

	/**
	 * method needed for running application on tomcat server, so that mysql drivers
	 * can be found
	 */
	private static void loadDriver() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
		} catch (InstantiationException | IllegalAccessException | ClassNotFoundException e) {
			System.out.println("Loading MySql driver has failed");
			e.printStackTrace();
		}
	}

	public static void closeConnection(Connection connection) {
		try {
			connection.close();
		} catch (SQLException e) {
			System.out.println("Closing DB connection failed: " + e.getStackTrace());
		}
	}

}
