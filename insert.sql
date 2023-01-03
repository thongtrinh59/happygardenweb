

--lobby--
INSERT INTO lobby (lobbyname, "createdAt", "updatedAt") VALUES('ngoài trời 1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO lobby (lobbyname, "createdAt", "updatedAt") VALUES('ngoài trời 2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO lobby (lobbyname, "createdAt", "updatedAt") VALUES('ngoài trời 3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO lobby (lobbyname, "createdAt", "updatedAt") VALUES('trong nhà 1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO lobby (lobbyname, "createdAt", "updatedAt") VALUES('trong nhà 2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

--status--

INSERT INTO status (name, "createdAt", "updatedAt") VALUES('pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO status (name, "createdAt", "updatedAt") VALUES('done', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO status (name, "createdAt", "updatedAt") VALUES('cancel', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

--event--
INSERT INTO event (type, "createdAt", "updatedAt") VALUES('tiệc cưới', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO event (type, "createdAt", "updatedAt") VALUES('tiệc nhân', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO event (type, "createdAt", "updatedAt") VALUES('tiệc công ty', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

--menu--
INSERT INTO menu (menuname, price, "createdAt", "updatedAt") VALUES('đồng', '3990000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO menu (menuname, price, "createdAt", "updatedAt") VALUES('bạc', '4450000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO menu (menuname, price, "createdAt", "updatedAt") VALUES('vàng', '5010000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO menu (menuname, price, "createdAt", "updatedAt") VALUES('kim cương', '5500000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

--user--
INSERT INTO users (username, phonenumber, email, password, title, nationalid,  "createdAt", "updatedAt") VALUES('tommy', '1231412', 'tommy@newatlantic.vn', '$2a$08$PmyDYo52R2vl7TXiF1TuWuSHtNKtO0B3DjTmEKb8IroHlKpHtj1iS', 'admin', '31241', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
