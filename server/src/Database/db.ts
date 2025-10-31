import ADODB from 'node-adodb'

const Tables = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:/Users/USER/Desktop/Tablas.mdb;');

// ✅ Function to test connection
export async function checkConnection() {
  try {
    // Small harmless query
    await Tables.query("SELECT 1 AS test;");
    console.log("✅ Database connection successful!");
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    return false;
  }
}

export {
    Tables
}