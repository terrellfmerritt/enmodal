import ConfigParser
import psycopg2
import psycopg2.extras
import os

config = ConfigParser.RawConfigParser()
config.read(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'settings.cfg')))

SESSIONS_HOST = config.get('sessions', 'host')
SESSIONS_PORT = config.get('sessions', 'port')
SESSIONS_DBNAME = config.get('sessions', 'dbname')
SESSIONS_USER = config.get('sessions', 'user')
SESSIONS_PASSWORD = config.get('sessions', 'password')
SESSIONS_CONN_STRING = "host='"+SESSIONS_HOST+"' port='"+SESSIONS_PORT+"' dbname='"+SESSIONS_DBNAME+"' user='"+SESSIONS_USER+"' password='"+SESSIONS_PASSWORD+"'"
SESSIONS_SECRET_KEY_PUBLIC = int(config.get('sessions', 'secret_key_public'), 16)
SESSIONS_SECRET_KEY_PRIVATE = int(config.get('sessions', 'secret_key_private'), 16)

# print the connection string we will use to connect
print "Connecting to database\n	->%s" % (SESSIONS_CONN_STRING)

conn = psycopg2.connect(SESSIONS_CONN_STRING)
cursor = conn.cursor()

query = "SELECT id, first_name, last_name, email, created, email_sent from pending_registrations ORDER BY created ASC;"
print query
cursor.execute(query)

rows = cursor.fetchall()
for row in rows:
    print "id: %d, first_name: %s, last_name: %s, email: %s, created: %s, email_sent: %s" % (row[0], row[1], row[2], row[3], row[4], row[5])

conn.commit()

cursor.close()
conn.close()
