CREATE TABLE Tilaus
(
  Tilausnumero INT NOT NULL,
  PRIMARY KEY (Tilausnumero)
);

CREATE TABLE Tuote
(
  Tuotetunnus INT NOT NULL,
  PRIMARY KEY (Tuotetunnus)
);

CREATE TABLE Varasto
(
  Varastotunnus INT NOT NULL,
  Tuotetunnus INT NOT NULL,
  PRIMARY KEY (Varastotunnus),
  FOREIGN KEY (Tuotetunnus) REFERENCES Tuote(Tuotetunnus)
);

CREATE TABLE Tuotetyyppi
(
  Nimi INT NOT NULL,
  Kuvaus INT NOT NULL,
  Hinta INT NOT NULL,
  Tuotetunnus INT NOT NULL,
  PRIMARY KEY (Nimi),
  FOREIGN KEY (Tuotetunnus) REFERENCES Tuote(Tuotetunnus)
);

CREATE TABLE Sis�lt��
(
  Tilausnumero INT NOT NULL,
  Tuotetunnus INT NOT NULL,
  PRIMARY KEY (Tilausnumero, Tuotetunnus),
  FOREIGN KEY (Tilausnumero) REFERENCES Tilaus(Tilausnumero),
  FOREIGN KEY (Tuotetunnus) REFERENCES Tuote(Tuotetunnus)
);

CREATE TABLE K�ytt�j�
(
  S�hk�posti INT NOT NULL,
  Salasana INT NOT NULL,
  Osoite INT NOT NULL,
  Oikeudet INT NOT NULL,
  Tilausnumero INT NOT NULL,
  PRIMARY KEY (S�hk�posti),
  FOREIGN KEY (Tilausnumero) REFERENCES Tilaus(Tilausnumero)
);