INSERT INTO users (login , password, active) 
VALUES('TimmyRodger', 'timmyrodger', 1);

INSERT INTO users (login , password, active) 
VALUES('CosmicBillie', 'cosmicbillie', 1);

INSERT INTO users (login , password, active) 
VALUES ('Gladysmeetyou', 'gladysmeetyou', 1);

INSERT INTO users (login , password, active) 
VALUES ('Alex290', 'alex290', 1);






INSERT INTO portfolio (pseudo, type, presentation, style, active,  insta) 
VALUES ('Timmy Rodger', 'team', 'Issu d''une formation de designer produit et graphique, il a acquis une forte expérience à travers la création de nombreux projets dans des secteurs graphiques tels que la mode, la communication visuelle, la publication de magazines, le design produit et architecture d''intérieur. Il met ses nombreuses expériences au service du milieu du tatouage en ciblant au mieux le souhait des clients.', 'Semi réaliste, Néo trad...', '1', 'https://www.instagram.com/timmyrodger/');

INSERT INTO portfolio (pseudo, type, presentation, style, active,  insta) 
VALUES ('Cosmic Billie', 'team', 'Marianne alias COSMIC BILLIE, passionnée d''art et de culture indienne. Initiée très jeune au milieu du tatouage, elle a su tester plusieurs styles avant d''approfondir sa personnalité artistique. A l''écoute, souriante et soignée, elle sera ravie de vous faire découvrir son univers floral et esthétique.', 'Hindi et Ornemental', '1',  'https://www.instagram.com/cosmic.billie/');

INSERT INTO portfolio (pseudo, type, presentation, style, active, insta)
VALUES ('Gladystomeetyou', 'team', 'Agée de 22 ans, Gladys a su nourrir son univers graphique depuis sa tendre enfance. Son cursus dans le monde de l''art lui a permis de s''ouvrir à différents modes d''expression, de collaborer à des projets divers et d''exposer à plusieurs reprises. Précoce dans le milieu du tatouage, elle a su proposer son univers naïf aux lignes épurées.', 'Graphique, Naïf, épuré...', '1',  'https://www.instagram.com/gladystomeetyou/');


INSERT INTO portfolio (pseudo, type, presentation, style, active, insta)
VALUES ('Alex 290', 'team', 'Tombé dans le tatouage grâce à la musique, j''ai remonté le fil des références jusqu''aux sources du traditionnel occidental, qui est aujourd''hui mon domaine de prédilection.', 'Traditionnel Occidental', '1', 'https://www.instagram.com/alex290_tattoo/');


INSERT INTO portfolio (pseudo, type, presentation, active, insta, startdate, enddate)
VALUES ('Fernando Madeira', 'guest', 'Artiste Brésilien spécialisé dans les tatouages aquarelle.', '1', 'https://www.instagram.com/fernandomadeira/?hl=fr', '7 février', '16 février');


INSERT INTO portfolio (pseudo, type, presentation, style, active, insta)
VALUES ('Grozen', 'team', "Dorian alias GROZEN est un tatoueur passionné et méticuleux prêt a travailler sur vos projets les plus extravagants et graphique. Amoureux de grosses lignes et petits points, il aura toujours coeur d'être à votre écoute.", 'Mandala, paternes géométriques, dot work', '1', 'https://www.instagram.com/grozen.tattoo/?hl=fr');





INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_1',1,'http://localhost:5000/img/1/BateauPirate_insta.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_2',1,'http://localhost:5000/img/1/Coyotte_gp.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_3',1,'http://localhost:5000/img/1/Coyotte.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_4',1,'http://localhost:5000/img/1/DragonHead.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_5',1,'http://localhost:5000/img/1/Indienne.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_6',1,'http://localhost:5000/img/1/LanterneSkull_healed.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_7',1,'http://localhost:5000/img/1/Luna_gp.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_8',1,'http://localhost:5000/img/1/Luna.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_9',1,'http://localhost:5000/img/1/Lune_gp.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_10',1,'http://localhost:5000/img/1/Lune.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_11',1,'http://localhost:5000/img/1/NeoNico_color_gp.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_12',1,'http://localhost:5000/img/1/NeoNico_color.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_13',1,'http://localhost:5000/img/1/Neptune_gp.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_14',1,'http://localhost:5000/img/1/OwlBlinder_color_gp.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_15',1,'http://localhost:5000/img/1/Pin_upTrad.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_16',1,'http://localhost:5000/img/1/Pirate.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_17',1,'http://localhost:5000/img/1/Reaper.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_18',1,'http://localhost:5000/img/1/Sphinx.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_19',1,'http://localhost:5000/img/1/Stitch_gp.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('timmyrodger_20',1,'http://localhost:5000/img/1/Stitch.jpg', 1, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('portrait',0,'http://localhost:5000/img/1/portrait.jpg', 1, 'avatar');

INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('cosmic_billie_6',1,'http://localhost:5000/img/2/CB1.jpg',2, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('cosmic_billie_7',1,'http://localhost:5000/img/2/CB2.jpg',2, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('cosmic_billie_8',1,'http://localhost:5000/img/2/CB3.jpg',2, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('cosmic_billie_9',1,'http://localhost:5000/img/2/CB4.jpg',2, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('cosmic_billie_10',1,'http://localhost:5000/img/2/CB5.jpg',2, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('cosmic_billie_11',1,'http://localhost:5000/img/2/CB6.jpg',2, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('portrait',0,'http://localhost:5000/img/2/portrait.jpg', 2, 'avatar');


INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_1',1,'http://localhost:5000/img/3/G13.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_2',1,'http://localhost:5000/img/3/G14.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_3',1,'http://localhost:5000/img/3/G15.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_4',1,'http://localhost:5000/img/3/G16.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_5',1,'http://localhost:5000/img/3/G17.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_6',1,'http://localhost:5000/img/3/G18.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_7',1,'http://localhost:5000/img/3/G19.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_8',1,'http://localhost:5000/img/3/G20.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_9',1,'http://localhost:5000/img/3/G21.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_10',1,'http://localhost:5000/img/3/G22.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_11',1,'http://localhost:5000/img/3/G23.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_12',1,'http://localhost:5000/img/3/G24.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_13',1,'http://localhost:5000/img/3/G25.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_14',1,'http://localhost:5000/img/3/G26.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_15',1,'http://localhost:5000/img/3/G27.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_16',1,'http://localhost:5000/img/3/G28.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_17',1,'http://localhost:5000/img/3/G29.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_18',1,'http://localhost:5000/img/3/G30.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_19',1,'http://localhost:5000/img/3/G31.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_20',1,'http://localhost:5000/img/3/G32.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('gladystomeetyou_21',1,'http://localhost:5000/img/3/G33.jpg', 3, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('portrait',0,'http://localhost:5000/img/3/portrait.jpg', 3, 'avatar');

INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES ('A290_1',1,'http://localhost:5000/img/4/A290_1.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES ('A290_2',1,'http://localhost:5000/img/4/A290_2.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('A290_3',1,'http://localhost:5000/img/4/A290_3.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('A290_4',1,'http://localhost:5000/img/4/A290_4.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('A290_5',1,'http://localhost:5000/img/4/A290_5.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('A290_6',1,'http://localhost:5000/img/4/A290_6.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('A290_7',1,'http://localhost:5000/img/4/A290_7.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('A290_8',1,'http://localhost:5000/img/4/A290_8.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('A290_9',1,'http://localhost:5000/img/4/A290_9.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('A290_10',1,'http://localhost:5000/img/4/A290_10.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('A290_10',1,'http://localhost:5000/img/4/A290_11.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('A290_11',1,'http://localhost:5000/img/4/A290_12.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('A290_12',1,'http://localhost:5000/img/4/A290_13.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('A290_13',1,'http://localhost:5000/img/4/A290_14.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('A290_14',1,'http://localhost:5000/img/4/A290_15.jpg', 4, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('portrait',0,'http://localhost:5000/img/4/portrait.jpg', 4, 'avatar');


INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('FM1',1,'http://localhost:5000/img/5/FM1.jpg', 5, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('FM2',1,'http://localhost:5000/img/5/FM2.jpg', 5, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('FM3',1,'http://localhost:5000/img/5/FM3.jpg', 5, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('FM4',1,'http://localhost:5000/img/5/FM4.jpg', 5, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('FM5',1,'http://localhost:5000/img/5/FM5.jpg', 5, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('FM6',1,'http://localhost:5000/img/5/FM6.jpg', 5, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('FM7',1,'http://localhost:5000/img/5/FM7.jpg', 5, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('FM8',1,'http://localhost:5000/img/5/FM8.jpg', 5, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('FM9',1,'http://localhost:5000/img/5/FM9.jpg', 5, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('portrait',0,'http://localhost:5000/img/5/portrait.jpg', 5, 'avatar');


INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('grozen1',1,'http://localhost:5000/img/6/grozen1.jpeg', 6, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('grozen2',1,'http://localhost:5000/img/6/grozen2.jpeg', 6, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('grozen3',1,'http://localhost:5000/img/6/grozen3.jpeg', 6, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('grozen4',1,'http://localhost:5000/img/6/grozen4.jpeg', 6, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('grozen5',1,'http://localhost:5000/img/6/grozen5.jpeg', 6, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('grozen6',1,'http://localhost:5000/img/6/grozen6.jpeg', 6, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('grozen7',1,'http://localhost:5000/img/6/grozen7.jpeg', 6, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('grozen8',1,'http://localhost:5000/img/6/grozen8.jpeg', 6, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('grozen9',1,'http://localhost:5000/img/6/grozen9.jpeg', 6, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('grozen10',1,'http://localhost:5000/img/6/grozen10.jpeg', 6, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('grozen11',1,'http://localhost:5000/img/6/grozen11.jpeg', 6, 'realisation');
INSERT INTO images (alt_text , active , path , portfolio_id, type) 
VALUES('portrait de grozen',0,'http://localhost:5000/img/6/.jpg', 6, 'portrait');