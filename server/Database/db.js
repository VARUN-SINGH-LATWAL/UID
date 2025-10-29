import ADODB from 'node-adodb'

const Tables = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=W:/test/Access/Dummy- Database/Tablas.mdb;');

const rejection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=W:/test/Access/Dummy- Database/Tablas.mdb;');

export {
    Tables,
    rejection
}