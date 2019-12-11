INSERT INTO `piqueurderue`.`portfolio` 
(pseudo, type, presentation,active,start-date, end-date)
VALUES 
('Cosmic Billie', 'Hindi et Ornemental','Marianne alias COSMIC BILLIE, passionnée d''art et de culture indienne. et de culture indienne. Initiée très jeune au milieu du tatouage, elle a su tester plusieurs styles avant d''approfondir sa personnalité artistique.
A l''écoute, souriante et soignée, elle sera ravie de vous faire découvrir son univers floral et esthétique.', TRUE),
('Alex_290', ' Traditionnel Occidental','Tombé dans le tatouage grâce à la musique, j''ai remonté le fil des références jusqu''aux sources du traditionnel occidental, qui est aujourd''hui mon domaine de prédilection.'', TRUE),
(''Gladystomeetyou'',''Graphique, Naïf, épuré...'', ''Agée de 22 ans, Gladys a su nourrir son univers graphique depuis sa tendre enfance. Son cursus dans le monde de l''art lui a permis de s''ouvrir à différent modes d''expression, de collaborer à des projets divers et d''exposer à plusieurs reprises. Précoce dans le milieu du tatouage, elle a su proposer son univers naïf aux lignes épurées.'),
('Timmy Rodger', 'Semi réaliste, Néo trad...', '''Issu d''''une formation de designer produit et graphique, il a acquis une forte expérience à travers la création de nombreux projets dans des secteurs graphiques tel que la mode, la communication visuel, la publication de magazine, le design produit et architecture d''intérieur.
Il met ses nombreuses expériences au service du milieu du tatouage en ciblant au mieux le souhait des clients.', TRUE),
('Fernando Madeira', 'Artiste Brésilien spécialisé dans les tatouages aquarelle', '');


INSERT INTO `piqueurderue`.`images` 
(alt_text, active, path ,main_img,portfolio_id)
VALUES 
('billie' , 'active', '/src/design/img/photo_tatoeurs/cosmic_billie.jpg','','tatoeurs')
('alex', 'active', '/src/design/img/photo_tatoeurs/alex_290.jpg','','tatoeurs')
('timmy','active' , '/src/design/img/photo_taoueurs/timmy_rodger.jpg','','tatoeurs'),
('gladys', 'active', '/src/design/img/photo_tatoeurs/gladystomeetyou.jpg','','tatoeurs')
('');


