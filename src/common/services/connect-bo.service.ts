import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from "rxjs/Observable";


@Injectable()
export class ConnectBoService {


    public myObject: any = {
        "channel": {
            "title": "Le Parisien - PSG",
            "description": [],
            "lastBuildDate": "Tue, 28 Nov 2017 14:57:59 +0100",
            "link": "http://www.leparisien.fr",
            "item": [
                {
                    "title": "PSG-Troyes. Emery : «Mon bureau est ouvert»",
                    "description": "Unai Emery laisse entendre qu’il fera tourner son effectif, ce mercredi face à Troyes (21 heures). L’entraîneur parisien évoque aussi la concurrence dans son équipe et sa gestion des stars. Le Basque considère...",
                    "pubDate": "Tue, 28 Nov 2017 14:44:56 +0100",
                    "link": "http://www.leparisien.fr/sports/psg-troyes-emery-mon-bureau-est-ouvert-28-11-2017-7420443.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/28/7420443_dcb71b2a-d440-11e7-b78b-746dd0d7f45d-1.jpg",
                        "@length": "94055"
                    }
                },
                {
                    "title": "PSG : le blues de Lucas, Pastore, Trapp et Di Maria",
                    "description": "Un PSG à deux vitesses se dessine. Celui des titulaires, qui plane sur la Ligue 1 et la Ligue des champions. Et celui des déclassés, qui disputent les « petites » rencontres, à l'image de celles contre...",
                    "pubDate": "Tue, 28 Nov 2017 06:00:00 +0100",
                    "link": "http://www.leparisien.fr/sports/football/psg/psg-le-blues-de-lucas-pastore-trapp-et-di-maria-28-11-2017-7419300.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/28/7419300_1-0-382770594.jpg",
                        "@length": "297641"
                    }
                },
                {
                    "title": "Le PSG au Qatar pour son stage hivernal",
                    "description": "Le PSG se rendra à Doha au début de l’hiver pour son stage de mi-saison. Les Parisiens ont rendez-vous au Qatar du 21 au 23 décembre pour le «Qatar Winter Tour». Un stage prévu sans match amical mais les...",
                    "pubDate": "Mon, 27 Nov 2017 17:12:05 +0100",
                    "link": "http://www.leparisien.fr/sports/football/psg/le-psg-au-qatar-pour-son-stage-hivernal-27-11-2017-7418619.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/27/7418619_a0cf6670-d38d-11e7-b78b-746dd0d7f45d-1.jpg",
                        "@length": "124790"
                    }
                },
                {
                    "title": "PSG : Alves estime que le football italien doit gagner en «plaisir»",
                    "description": "Dani Alves n’aura passé qu’un an à la Juventus Turin (2016-2017) avant de rejoindre le PSG l’été dernier. Tout de même élu dans l’équipe-type de la Serie A italienne, le latéral droit brésilien était présent...",
                    "pubDate": "Tue, 28 Nov 2017 10:53:09 +0100",
                    "link": "http://www.leparisien.fr/sports/psg-alves-estime-que-le-football-italien-doit-gagner-en-plaisir-28-11-2017-7419975.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/28/7419975_b2366c22-d420-11e7-b78b-746dd0d7f45d-1.jpg",
                        "@length": "169326"
                    }
                },
                {
                    "title": "EN CHIFFRES. Le PSG pourra-t-il être rattrapé au classement ?",
                    "description": "Cette saison, le PSG est seul sur sa planète. Suite à son succès contre l’AS Monaco dimanche soir (2-1), le club de la capitale semble foncer à pleine vitesse vers son septième titre de champion de France,...",
                    "pubDate": "Mon, 27 Nov 2017 16:47:32 +0100",
                    "link": "http://www.leparisien.fr/sports/en-chiffres-le-psg-pourra-t-il-etre-rattrape-au-classement-27-11-2017-7418535.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/27/7418535_7bf5f2a2-d387-11e7-9578-b7005251dca4-1.jpg",
                        "@length": "100864"
                    }
                },
                {
                    "title": "PSG : Cavani convoqué par la justice italienne",
                    "description": "Selon «L’Equipe» de ce mardi, Edinson Cavani a été convoqué par un juge italien de Naples, qui souhaite entendre l’Uruguayen sur une affaire de soupçons de travail dissimulé. Un litige oppose le buteur...",
                    "pubDate": "Tue, 28 Nov 2017 10:29:56 +0100",
                    "link": "http://www.leparisien.fr/sports/football/psg/psg-cavani-convoque-par-la-justice-italienne-28-11-2017-7419903.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/28/7419903_9b690fac-d41d-11e7-b78b-746dd0d7f45d-1.jpg",
                        "@length": "112070"
                    }
                },
                {
                    "title": "Ligue 1. Monaco-PSG (1-2) : Paris frappe un grand coup",
                    "description": "Ce n'était pas le sommet attendu. A peine un petit col grimpé le cul sur la selle par un Paris dominateur et sûr de sa force. Trop d'imprécisions côté adverse, un déficit d'intensité, des joueurs monégasques...",
                    "pubDate": "Sun, 26 Nov 2017 23:18:00 +0100",
                    "link": "http://www.leparisien.fr/sports/football/psg/ligue-1-monaco-psg-1-2-paris-frappe-un-grand-coup-26-11-2017-7417038.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/26/7417038_6a612ae2-d2f7-11e7-9578-b7005251dca4-1.jpg",
                        "@length": "172731"
                    }
                },
                {
                    "title": "Monaco-PSG (1-2) : ce n’était pas le soir de Mbappé",
                    "description": "Kylian Mbappé est arrivé au stade Louis-II bras dessus-bras dessous avec Neymar. Son pouce levé en traversant la zone médias en fin de soirée semblait beaucoup moins spontané. Seules les récriminations...",
                    "pubDate": "Mon, 27 Nov 2017 06:00:00 +0100",
                    "link": "http://www.leparisien.fr/sports/football/psg/monaco-psg-1-2-ce-n-etait-pas-le-soir-de-mbappe-27-11-2017-7417344.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/27/7417344_2.JPG",
                        "@length": "138613"
                    }
                },
                {
                    "title": "Marquinhos : «Le PSG a fait un pas important vers le titre» avec la victoire à Monaco",
                    "description": "Une nouvelle fois titulaire en compagnie de Thiago Silva, Marquinhos repousse ces dernières semaines la concurrence émergente de Presnel Kimpembe. Sur le plan collectif, l'international brésilien reconnaît...",
                    "pubDate": "Mon, 27 Nov 2017 06:00:00 +0100",
                    "link": "http://www.leparisien.fr/sports/football/psg/marquinhos-le-psg-a-fait-un-pas-important-vers-le-titre-avec-la-victoire-a-monaco-27-11-2017-7417479.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/27/7417479_v0v2yqmo.jpg",
                        "@length": "93534"
                    }
                },
                {
                    "title": "Notes des joueurs. Monaco-PSG (1-2) : Neymar, le spectacle continue",
                    "description": "Le Paris Saint-Germain a fait d'une pierre deux coups en gagnant à Monaco (2-1) : il a pris sa revanche de l'an dernier et relégué son adversaire à neuf longueurs, dimanche pour le choc de la 14e journée...",
                    "pubDate": "Mon, 27 Nov 2017 06:00:00 +0100",
                    "link": "http://www.leparisien.fr/sports/football/psg/notes-des-joueurs-monaco-psg-1-2-neymar-le-spectacle-continue-27-11-2017-7417497.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/27/7417497_ney-drax.jpg",
                        "@length": "517178"
                    }
                },
                {
                    "title": "Monaco-PSG (1-2). Emery : «S’améliorer dans la finition»",
                    "description": "Unai Emery, entraîneur du PSG, après le succès à Monaco (2-1) ce dimanche soir : «Nous sommes contents pour les trois points gagnés. C'est important de parvenir à avoir cette différence de points au classement...",
                    "pubDate": "Mon, 27 Nov 2017 00:14:09 +0100",
                    "link": "http://www.leparisien.fr/sports/football/psg/monaco-psg-1-2-emery-s-ameliorer-dans-la-finition-27-11-2017-7417068.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/27/7417068_56cd483c-d2ff-11e7-9578-b7005251dca4-1.jpg",
                        "@length": "127237"
                    }
                },
                {
                    "title": "EN IMAGES. Monaco-PSG (1-2) : pluie d’occasions pour Paris",
                    "description": "Le PSG s’est logiquement imposé ce dimanche soir à Monaco (2-1) grâce à des buts de Cavani et Neymar, sur pénalty. Mais la victoire parisienne aurait pu (dû ?) être plus nette tant les occasions ont été...",
                    "pubDate": "Sun, 26 Nov 2017 23:47:07 +0100",
                    "link": "http://www.leparisien.fr/sports/en-images-monaco-psg-1-2-pluie-d-occasions-pour-paris-26-11-2017-7417044.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/26/7417044_a5a9c07c-d2f8-11e7-9578-b7005251dca4-0.jpg",
                        "@length": "157444"
                    }
                },
                {
                    "title": "Monaco-PSG (1-2). Pastore : «J’ai envie de jouer ces matchs»",
                    "description": "Il y a une semaine, Javier Pastore avait déjà confié vouloir réfléchir à son avenir au PSG, expliquant ne pas jouer assez pour s’assurer une place avec l’Argentine en Coupe du monde. Des propos réitérés...",
                    "pubDate": "Sun, 26 Nov 2017 23:45:00 +0100",
                    "link": "http://www.leparisien.fr/sports/monaco-psg-1-2-pastore-j-ai-envie-de-jouer-ces-matchs-26-11-2017-7417056.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/26/7417056_67bdca86-d2fa-11e7-9578-b7005251dca4-1.jpg",
                        "@length": "122817"
                    }
                },
                {
                    "title": "Monaco-PSG : Di Maria affiche son spleen à l’échauffement",
                    "description": "Dans le football, toutes les images sont sujettes à interprétation et Angel Di Maria l’a bien compris, avant le choc entre Monaco et Paris, ce dimanche soir. L’attaquant du PSG a passé l’échauffement du...",
                    "pubDate": "Sun, 26 Nov 2017 21:27:00 +0100",
                    "link": "http://www.leparisien.fr/sports/monaco-psg-di-maria-affiche-son-spleen-a-l-echauffement-26-11-2017-7416939.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/26/7416939_319e8614-d2e8-11e7-9578-b7005251dca4-1.jpg",
                        "@length": "150740"
                    }
                },
                {
                    "title": "PSG : prêté à Valence, Guedes va être opéré",
                    "description": "Excellent avec Valence, deuxième surprise du championnat d’Espagne, où il est prêté depuis cet été par le PSG, Gonçalo Guedes va être opéré, a expliqué dimanche soir un dirigeant du club espagnol. «Il...",
                    "pubDate": "Mon, 27 Nov 2017 00:02:59 +0100",
                    "link": "http://www.leparisien.fr/sports/football/psg/psg-prete-a-valence-guedes-va-etre-opere-27-11-2017-7417062.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/27/7417062_3824f0da-d2fd-11e7-9578-b7005251dca4-1.jpg",
                        "@length": "151342"
                    }
                },
                {
                    "title": "Ligue 1. Monaco-PSG (1-2) : revivez le direct",
                    "description": "On le savait : en cas de succès, Paris prendrait, déjà - ce n’est que la 14e journée -, une option sur le titre en Ligue 1. C’est chose faite après un succès largement mérité ce dimanche soir sur la pelouse...",
                    "pubDate": "Sun, 26 Nov 2017 22:59:00 +0100",
                    "link": "http://www.leparisien.fr/sports/direct-monaco-psg-paris-peut-frapper-fort-26-11-2017-7416906.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/26/7416966_9811f410-d2ef-11e7-9578-b7005251dca4-1.jpg",
                        "@length": "145823"
                    }
                },
                {
                    "title": "Monaco-PSG : l’ASM à cinq derrière, Paris avec ses meilleurs",
                    "description": "Il n’y avait que peu de doutes sur les compositions de l’AS Monaco et du PSG, qui s’affrontent ce dimanche soir (21 heures, Canal+) en Principauté. Et ils sont donc tous levés : Monaco démarre bien avec...",
                    "pubDate": "Sun, 26 Nov 2017 20:19:08 +0100",
                    "link": "http://www.leparisien.fr/sports/monaco-psg-l-asm-a-cinq-derriere-paris-avec-ses-meilleurs-26-11-2017-7416867.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/26/7416867_898ae322-d2c5-11e7-9578-b7005251dca4-1.jpg",
                        "@length": "110113"
                    }
                },
                {
                    "title": "PSG : pour Marquinhos, Verratti «se balade sur un terrain comme s’il faisait du shopping»",
                    "description": "Marquinhos distribue les compliments ce dimanche à l’occasion d’un entretien accordé au Journal du dimanche. Le défenseur central brésilien du PSG évoque les attaquants et milieux les plus coriaces qu’il...",
                    "pubDate": "Sun, 26 Nov 2017 18:42:48 +0100",
                    "link": "http://www.leparisien.fr/sports/psg-pour-marquinhos-draxler-se-balade-sur-un-terrain-comme-s-il-faisait-du-shopping-26-11-2017-7416639.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/26/7416639_9c351a6c-d2cd-11e7-9578-b7005251dca4-1.jpg",
                        "@length": "150359"
                    }
                },
                {
                    "title": "Monaco-PSG : le jour où l’ASM balaya le champion...",
                    "description": "Les 15 219 spectateurs réunis à Louis-II ce 28 août 2016 ont assisté à une passation de pouvoir sans le savoir. On ne joue que la 4e journée de Ligue 1 et la saison va réserver son lot de surprises (Nice,...",
                    "pubDate": "Sun, 26 Nov 2017 17:30:42 +0100",
                    "link": "http://www.leparisien.fr/sports/football/psg/monaco-psg-et-l-asm-balaya-le-champion-26-11-2017-7416339.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/26/7416339_2259dcd4-d2b7-11e7-9578-b7005251dca4-1.jpg",
                        "@length": "886310"
                    }
                },
                {
                    "title": "Monaco-PSG : les chiffres à connaître",
                    "description": "Le PSG passe un gros test ce dimanche soir (21 heures, Canal+) sur la pelouse de l’AS Monaco. En cas de victoire, les Parisiens prendraient 9 points d’avance en tête du championnat et poseraient, déjà,...",
                    "pubDate": "Sun, 26 Nov 2017 15:25:54 +0100",
                    "link": "http://www.leparisien.fr/sports/monaco-psg-les-chiffres-a-connaitre-26-11-2017-7416240.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/26/7416240_5ddd79a2-d2b5-11e7-9578-b7005251dca4-1.jpg",
                        "@length": "220979"
                    }
                },
                {
                    "title": "Ligue 1 - Jean-Michaël Seri : «Je ne suis pas un joueur qu'on prend par défaut»",
                    "description": "Il a coutume de dire qu'un joueur parle sur le terrain et pas aux médias. Pourtant, quand il s'est présenté, mardi peu avant 13 heures, dans la spacieuse salle de conférences du tout nouveau siège de Nice,...",
                    "pubDate": "Sun, 26 Nov 2017 06:00:00 +0100",
                    "link": "http://www.leparisien.fr/sports/football/je-ne-suis-pas-un-joueur-qu-on-prend-par-defaut-26-11-2017-7415121.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/26/7415121_1-0-375510907.jpg",
                        "@length": "317343"
                    }
                },
                {
                    "title": "Handball, Ligue des Champions. Le PSG privilégie-t-il la Coupe d'Europe au championnat ?",
                    "description": "Curieux paradoxe : élevé au rang d'épouvantail sur la scène européenne, le PSG, incontestable leader de la poule B de Ligue des champions, n'est que l'ombre de lui-même dans les compétitions domestiques....",
                    "pubDate": "Sun, 26 Nov 2017 06:00:00 +0100",
                    "link": "http://www.leparisien.fr/sports/ile-de-france/handball-ligue-des-champions-le-psg-privilegie-t-il-la-coupe-d-europe-au-championnat-26-11-2017-7415178.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/26/7415178_1-0-375653291.jpg",
                        "@length": "278934"
                    }
                },
                {
                    "title": "Monaco - PSG : un match au sommet du championnat",
                    "description": "Il y a bien le clasico, l'olympico et d'autres matchs en haut du tableau. Pourtant depuis deux ans, le véritable sommet du championnat se joue au stade Louis-II ou au Parc des Princes. C'était le cas la...",
                    "pubDate": "Sun, 26 Nov 2017 06:00:00 +0100",
                    "link": "http://www.leparisien.fr/sports/football/psg/monaco-psg-un-match-au-sommet-du-championnat-26-11-2017-7415226.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/26/7415226_psgceltic116.jpg",
                        "@length": "429360"
                    }
                },
                {
                    "title": "Monaco - PSG : Neymar et Cavani, unis pour le meilleur",
                    "description": "Depuis le fameux « pénalty-gate » du match contre Lyon, le 19 septembre, le jeu, les attitudes, la complicité, les statistiques de Neymar et Cavani rythment le quotidien du PSG. Malgré ce coup de chaud,...",
                    "pubDate": "Sun, 26 Nov 2017 06:00:00 +0100",
                    "link": "http://www.leparisien.fr/sports/football/psg/monaco-psg-neymar-et-cavani-unis-pour-le-meilleur-26-11-2017-7415160.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/26/7415160_222-4020.jpg",
                        "@length": "444262"
                    }
                },
                {
                    "title": "PSG : les secrets de l'opération Mbappé",
                    "description": "En moins de trois mois, le milliardaire russe Dmitry Rybolovlev, propriétaire de l'AS Monaco et grand collectionneur d'art, vient de vendre deux de ses plus beaux joyaux. « Salvator Mundi », de Léonard...",
                    "pubDate": "Sat, 25 Nov 2017 06:00:00 +0100",
                    "link": "http://www.leparisien.fr/sports/football/psg/psg-les-secrets-de-l-operation-mbappe-25-11-2017-7413873.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/25/7413873_1-0-371848990.jpg",
                        "@length": "511097"
                    }
                },
                {
                    "title": "Monaco-PSG. Emery : «Cavani et Neymar savent qu’ils ont besoin l’un de l’autre»",
                    "description": "Entre Paris et Monaco, c’est la semaine des contrastes. Alors que le PSG a roulé sur le Celtic Glasgow (7-1), Monaco est sorti piteusement de la Ligue des champions en s'inclinant contre Leipzig (1-4)....",
                    "pubDate": "Fri, 24 Nov 2017 14:54:00 +0100",
                    "link": "http://www.leparisien.fr/sports/monaco-psg-emery-cavani-et-neymar-savent-qu-ils-ont-besoin-l-un-de-l-autre-24-11-2017-7412730.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/24/7412730_32bc69d4-d11d-11e7-8711-28471a056608-1.jpg",
                        "@length": "120492"
                    }
                },
                {
                    "title": "Match à huis clos partiel pour le PSG : le club fait appel",
                    "description": "Au lendemain du huis-clos partiel prononcé à l’encontre du PSG et de la tribune Auteuil, la direction du club de la capitale a décidé de faire appel de cette décision prise par la commission de discipline...",
                    "pubDate": "Fri, 24 Nov 2017 19:48:00 +0100",
                    "link": "http://www.leparisien.fr/sports/psg-le-club-fait-appel-du-huis-clos-partiel-24-11-2017-7413618.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/24/7413618_87f09858-d145-11e7-8711-28471a056608-1.jpg",
                        "@length": "159110"
                    }
                },
                {
                    "title": "Discipline : le PSG devra jouer sans la tribune Auteuil",
                    "description": "La commission de discipline de la LFP s’est montrée plus clémente que les attentes hier soir avec le PSG. Sous la menace d’un sursis depuis des incidents répertoriés en avril dernier lors de la finale...",
                    "pubDate": "Thu, 23 Nov 2017 23:09:15 +0100",
                    "link": "http://www.leparisien.fr/sports/discipline-le-psg-devra-jouer-sans-la-tribune-auteuil-23-11-2017-7411365.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/23/7411365_34d939b4-d09a-11e7-8711-28471a056608-1.jpg",
                        "@length": "299887"
                    }
                },
                {
                    "title": "Fahd El Khoumisti, le Cavani de la réserve du PSG",
                    "description": "L'équipe première du PSG et sa réserve, qui évolue en National 2, ont chacune leur goleador. Si Cavani affole toujours plus les compteurs (15 buts en 13 matchs de L 1) cette saison, la deuxième équipe...",
                    "pubDate": "Sat, 25 Nov 2017 06:00:00 +0100",
                    "link": "http://www.leparisien.fr/sports/ile-de-france/fahd-el-khoumisti-le-cavani-de-la-reserve-du-psg-25-11-2017-7413900.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/25/7413900_3.JPG",
                        "@length": "185995"
                    }
                },
                {
                    "title": "PSG : Rabiot, si naturel en sentinelle",
                    "description": "«Ce n'est pas là que je m'exprime le mieux. » La confession d'Adrien Rabiot en personne le 29 août dernier, dans nos colonnes, mérite une nouvelle réflexion. Le jeune Parisien de 22 ans n'a sans doute...",
                    "pubDate": "Fri, 24 Nov 2017 06:00:00 +0100",
                    "link": "http://www.leparisien.fr/sports/football/psg/psg-rabiot-si-naturel-en-sentinelle-24-11-2017-7411572.php#xtor=RSS-1481423633",
                    "enclosure": {
                        "@url": "http://s1.lprs1.fr/images/2017/11/24/7411572_hott2539-0485.jpg",
                        "@length": "676170"
                    }
                }
            ]
        }
    }

  constructor(private _http: HttpClient) { }

  list(): Observable<any> {
    //const params = new HttpParams().set('page', '1');
    //return this._http.get('http://jsonplaceholder.typicode.com/photos/1', { params, observe: 'response' });
      return this._http.get('http://jsonplaceholder.typicode.com/users/', { observe: 'response' });
  }

}
