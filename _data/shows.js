import { DateTime } from "luxon";

export default function () {
  const shows = [
    {
      name: "'nohup'",
      id: "nohup",
      description: "'nohup' is my primary DJ and production alias since 2018.",
      shows: [
        {
          title: "Corridor 2018",
          date: "2018-02-24",
          venue: "West Coast Print Building",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "'nohup'",
          link: "https://www.kexp.org/read/2018/3/1/corridor-2018-beauty-experimental-art-cold-february-day/",
        },
        {
          title: "Lodge 2018",
          date: "2018-08-03",
          venue: "The Lodge",
          location: "Washington, USA",
          category: "liveset",
          artistName: "'nohup'",
        },
        {
          title: "Apt E pres. Eve Defy, 'nohup', and Flora FM",
          date: "2019-02-23",
          venue: "Location TBH",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Action Potential: Kedr Livansky w/ slowfoam, 'nohup'",
          date: "2019-02-23",
          venue: "Timbre Room",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "'nohup'",
          link: "https://ra.co/events/1277136",
        },
        {
          title:
            "Research [Spring Formal] ft. DJ Bus Replacement Service, 'nohup' & Randy Jones",
          date: "2019-04-26",
          venue: "Timbre Room",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1243614",
        },
        {
          title: "The Lodge 2019 (as Mystery Contusion)",
          date: "2019-08-17",
          venue: "The Lodge",
          location: "Washington, USA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title:
            "Kremfest 2019 (Shook Showcase) w/ Fracture, Ishan Sound, 2POC ('nohup' b2b tondiue), Agate, Wheeler",
          date: "2019-09-19",
          venue: "Timbre Room",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1297206",
        },
        {
          title: "Tetris Effect: 'nohup' & P.Ross!",
          date: "2019-09-21",
          location: "Vancouver, BC",
          venue: "Conduit Gallery",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Tech Startup w/ 'nohup', my flower & livwutang",
          date: "2019-11-16",
          location: "Seattle, WA",
          venue: "Timbre Room",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1345237",
        },
        {
          title: "Research: Galcher Lustwerk, Mike Grant & 'nohup'",
          date: "2019-11-23",
          location: "Seattle, WA",
          venue: "Kremwerk",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1336430",
        },
        {
          title: "Enter The Void rescored by 'nohup' & Surrealized",
          date: "2020-01-25",
          location: "Seattle, WA",
          venue: "Parliament Tavern",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Kremwerk Livestream Series: Sangwoo, 'nohup'",
          date: "2020-09-18",
          venue: "Kremwerk Twitch Channel",
          location: "Online Event",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://www.kremwerk.com/upcoming/2020/9/18/kremwerk-livestream-series-sangwoo-nohup",
        },
        {
          title:
            "illegal afters 02. livestream release party w/ Xminus1, Eve Defy, 'nohup'",
          date: "2021-03-05",
          venue: "Kremwerk Twitch Channel",
          location: "Online Event",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://www.kremwerk.com/upcoming/2021/3/5/illegal-afters-02-release-party",
        },
        {
          title:
            "A stream for Odessa: 'nohup' b2b T.Wan b2b DJ Having Sex b2b livwutang",
          date: "2021-04-25",
          venue: "Kremwerk Twitch Channel",
          location: "Online Event",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "High + Tight presents 'nohup'",
          date: "2021-06-24",
          venue: "mbar",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Psycho Bummer feat. Derek Plaslaiko",
          date: "2021-07-10",
          venue: "Kremwerk",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1449311",
        },
        {
          title: "Kayla + Alex's Wedding",
          date: "2021-08-18",
          venue: "Private Location",
          location: "Washington, USA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Routine feat. 'nohup', Sherman, T.Wan, Wetman",
          date: "2021-08-21",
          venue: "Kremwerk",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1459127",
        },
        {
          title: "Big Moon 2021",
          date: "2021-09-04",
          venue: "Private Location",
          location: "Leavenworth, WA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Club Sandwich featuring 'nohup' & Jess Duran b2b Chris Moore",
          date: "2021-12-18",
          venue: "Union Coffee",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Ground Hum 2022",
          date: "2022-02-12",
          venue: "Private Location",
          location: "South Lake Union, Seattle, WA",
          category: "liveset",
          artistName: "'nohup'",
        },
        {
          title: "Routine feat. Leonce",
          date: "2022-03-26",
          venue: "Kremwerk",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1512800",
        },
        {
          title:
            "Research presents Shaytoon Records feat. Sepehr, Mozhgan & 'nohup'",
          date: "2022-04-08",
          venue: "Kremwerk",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1512842",
        },
        {
          title: "SLIP: A QUEER AFTERS PRIDE MOMENT",
          date: "2022-06-22",
          venue: "Timbre Room",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1549371",
        },
        {
          title: "The Lodge 2022",
          date: "2022-07-08",
          venue: "The Lodge",
          location: "Washington, USA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "'nohup': Open to Close",
          date: "2022-07-15",
          venue: "Kremwerk",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1556943",
        },
        {
          title: "Vertex feat. Avalon Emerson, 'nohup', and DJ Later",
          date: "2021-07-30",
          venue: "Timbre Room",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Off99 Presents: Marcellus Pittman, w/ 'nohup'",
          date: "2022-09-09",
          venue: "Cherry",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://www.kremwerk.com/upcoming/2022/9/9/off99-presents-marcellus-pittman",
        },
        {
          title: "X Marks The Spot: A Pirate Rave",
          date: "2022-10-28",
          venue: "Kremwerk",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1600679",
        },
        {
          title: "Exploration w/ Josh Dahlberg, 'nohup', Drew Pompa",
          date: "2023-02-02",
          venue: "Selector Records and Tapes",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1650440",
        },
        {
          title: "Ground Hum 2023",
          date: "2023-02-02",
          venue: "Private Location",
          location: "Ballard, Seattle, WA",
          category: "liveset",
          artistName: "'nohup'",
          link: "https://groundhum.net/pages/ground-hum-2023",
        },
        {
          title: "A Good Day Party",
          date: "2023-03-19",
          venue: "Private Location",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Chasers feat. Jennifer Spektor + 'nohup'",
          date: "2023-05-20",
          venue: "Timbre Room",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://www.kremwerk.com/upcoming/2023/05/20/chasers-featuring-jennifer-spektor-and-nohup",
        },
        {
          title: "Club Sandwich featuring 'nohup' + Someone Person",
          date: "2023-07-02",
          venue: "Julia's in Wallingford",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Lodge 2023 (as Bobby)",
          date: "2023-07-21",
          venue: "Private Location",
          location: "Washington, USA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Get U OFF feat. 'nohup'",
          date: "2023-08-18",
          venue: "Timbre Room",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "impromptu w/ Sepehr & wngdu",
          date: "2023-08-25",
          venue: "Private Location",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1760671",
        },
        {
          title: "Kremfest 2023",
          date: "2023-09-29",
          venue: "Cherry",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1733506",
        },
        {
          title: "Ground Hum + ANTiPODE (2023)",
          date: "2023-11-18",
          venue: "Railspur",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "'nohup'",
          link: "https://groundhum.net/pages/ground-hum-antipode-2023",
        },
        {
          title: "Rollercoaster of Dubs ('nohup' b2b Jennifer Spektor)",
          date: "2024-03-30",
          location: "Timbre Room - Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1889493",
        },
        {
          title: "Madi & Gia's 10 Year Anniverserave",
          date: "2024-05-11",
          venue: "Private Location",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Particle FM Takeover ('nohup' b2b Jennifer Spektor)",
          date: "2024-05-31",
          venue: "Timbre Room",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1931269",
        },
        {
          title: "'nohup' @ Otherworld",
          date: "2024-06-18",
          venue: "Otherworld Wine Bar",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Riki's Birthday Bash",
          date: "2024-06-23",
          venue: "Private Location",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Off99 Presents: 'nohup'",
          date: "2024-06-27",
          venue: "mbar",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Deep Listening w/ Jake Muir, 'nohup', and Le Creuset",
          date: "2024-07-06",
          venue: "Private Location",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "The Lodge 2024 (as Wicked Lover)",
          date: "2024-07-27",
          venue: "The Lodge",
          location: "Washington, USA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Honcho Campout 2024: Hemlock Nights",
          date: "2024-08-16",
          venue: "Four Quarters Interfaith Sanctuary - Hemlock Hole",
          location: "Artemas, PA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://soundcloud.com/honchopgh/campout-mix-series-nohup?in=honchopgh/sets/honcho-campout-2024-hemlock-nights",
        },
        {
          title: "Atmosphérique with sold, 'nohup' and Earthbeam",
          date: "2024-10-04",
          venue: "Timbre Room",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/2008866",
        },
        {
          title: "A going away party",
          date: "2024-10-19",
          venue: "Private Location",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "Osmosis in the Trees",
          date: "2024-10-24",
          venue: "Out n About Treesort",
          location: "Cave Junction, OR",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/1986191",
        },
        {
          title: "Sorry Records with 'nohup' & boxofbox b2b Nick Boyd",
          date: "2024-11-03",
          venue: "Bossa Nova Civic Club",
          location: "New York, NY",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/2021696",
        },
        {
          title: "Physical Therapy & 'nohup'",
          date: "2024-12-07",
          venue: "Afterlife",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/2058103",
        },
        {
          title: "'nohup' & kate.land",
          date: "2024-12-17",
          venue: "Smash Palace",
          location: "Ōtautahi, Aotearoa",
          category: "DJ",
          artistName: "'nohup'",
        },
        {
          title: "WERM X PULSE: D.Dan, Yamanaka, Plus, 'nohup', August V.M.",
          date: "2025-01-10",
          venue: "Private Location",
          location: "Portland, OR",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/2052378",
        },
        {
          title:
            "Rollercoaster of Dubs 2 w/ 'nohup', Jennifer Spektor, and Eve Defy",
          date: "2025-01-24",
          venue: "Timbre Room",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/2082710",
        },
        {
          title: "Kremwerk 11 Year Anniversary",
          date: "2025-02-22",
          venue: "Kremwerk complex",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'nohup'",
          link: "https://ra.co/events/2089202",
        },
      ],
    },
    {
      name: "'sighup'",
      id: "sighup",
      description: "'sighup' is a mostly-defunct production alias of mine",
      shows: [
        {
          title: "Baltimore Electronic Music Fallfest 2012",
          date: "2012-10-17",
          venue: "The Windup Space",
          location: "Baltimore, MD",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title:
            "Third Rail featuring Tapdup w/ Gab7, 'sighup', Drankay, and Permanent",
          date: "2012-12-02",
          venue: "WMUC Radio",
          location: "College Park, MD",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title: "SIGHUP @ Rid of Me",
          date: "2013-03-16",
          venue: "Rid of Me",
          location: "College Park, MD",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title: "Latex Bodice + SIGHUP @ Rid of Me",
          date: "2013-04-19",
          venue: "Rid of Me",
          location: "College Park, MD",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title: "The Double Dip featuring 'sighup'",
          date: "2013-08-07",
          venue: "The Blockley",
          location: "Philadelphia, PA",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title:
            "Kremwerk presents: Jabon, 'sighup', Portable Morla, Somesurprises",
          date: "2014-09-04",
          venue: "Kremwerk",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title: "Party at Clubhaus",
          date: "2016-08-19",
          venue: "Clubhaus",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title:
            "Action Potential and Elevator present Inga Copeland, VRS & 'sighup'",
          date: "2016-09-15",
          venue: "Kremwerk",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title: "Simone + 'sighup' live on Freeaxis",
          date: "2016-11-02",
          venue: "Freeaxis",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title:
            "No Request Line Launch Party w/ Addison Groove, Canaan, 'sighup', Slantooth",
          date: "2017-05-06",
          venue: "Timbre Room",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title: "Listen! It's a Sound Show (Live AV Set)",
          date: "2017-06-03",
          venue: "Equinox Studios",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title: "Orphan Radio live showcase",
          date: "2017-10-01",
          venue: "lovecitylove",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title: "Red May's October Revolution",
          date: "2017-10-08",
          venue: "Vermillion",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title:
            "Alternating Currents w/ Conduit, 'sighup', T.Wan, Miles Mercer, R-Pal",
          date: "2017-10-13",
          venue: "lovecitylove",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title:
            "Decibel and Action Potential present Laurel Halo + Eli Keszler, Felisha Ledesma, 'sighup', Raica",
          date: "2017-10-14",
          venue: "Timbre Room",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title: "NWIRP Benefit",
          date: "2017-12-09",
          venue: "The Cryptatropa",
          location: "Olympia, WA",
          category: "liveset",
          artistName: "'sighup'",
        },
        {
          title: "'sighup' at mbar",
          date: "2018-06-27",
          venue: "mbar",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'sighup'",
        },
        {
          title:
            "Kremfest 2018 (Orphan showcase) w/ Local Artist, 'sighup', livwutang, and Klein Zage",
          date: "2018-09-22",
          venue: "Timbre Room Patio",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "'sighup'",
        },
      ],
    },
    {
      name: "DJ Kaaba Emoji",
      id: "dj-kaaba-emoji",
      shows: [
        {
          title:
            "Yalla Yeehaw w/ DJ Cardamami, DJ Mansaf Mama & DJ Kaaba Emoji",
          date: "2019-07-28",
          venue: "Crocodile Backbar",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "DJ Kaaba Emoji",
        },
        {
          title:
            "Yalla Yeehaw w/ DJ Cardamami, DJ Mansaf Mama & DJ Kaaba Emoji",
          date: "2019-09-05",
          venue: "mbar",
          location: "Seattle, WA",
          category: "DJ",
          artistName: "DJ Kaaba Emoji",
        },
      ],
    },
    {
      id: "slow-drips",
      name: "Slow Drips",
      description:
        "Slow Drips was a noise music project started by me and Aashish Gadani.",
      shows: [
        {
          title: "Boner Gatherer, Abe King, Slow Drips",
          date: "2014-01-14",
          venue: "High Dive",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "Slow Drips",
        },
        {
          title: "Debacle Fest 2014",
          date: "2014-05-31",
          venue: "Victory Lounge",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "Slow Drips",
        },
        {
          title: "SQUALL: A Drone Electronics Happy Hour",
          date: "2014-07-21",
          venue: "Kremwerk",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "Slow Drips",
        },
        {
          title: "Seattle Pizza Crawl",
          date: "2014-08-16",
          venue: "A street corner on Capitol Hill",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "Slow Drips",
        },
        {
          title: "Hold Tight to a Thing That Moves",
          date: "2015-03-20",
          venue: "Black Lodge",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "Slow Drips",
        },
        {
          title: "Nightspace w/ youryoungbody, Aeon Fux & Slow Drips",
          date: "2015-11-20",
          venue: "Cairo",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "Slow Drips",
        },
        {
          title:
            "Pent Up Release + Gallery 1412 present CJ Boyd, Cathartech, Sokai Stilhed, Slow Drips",
          date: "2016-04-09",
          venue: "Gallery 1412",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "Slow Drips",
        },
        {
          title:
            "Elevator Presents Moor Mother, Jenny Zhang, Slow Drips, Prius",
          date: "2016-09-11",
          venue: "Machine House Brewery",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "Slow Drips",
        },
        {
          title: "Debacle Fest 2017",
          date: "2017-05-06",
          venue: "Columbia City Theatre",
          location: "Seattle, WA",
          category: "liveset",
          artistName: "Slow Drips",
        },
      ],
    },
  ];

  shows.forEach((artist) => {
    artist.shows = artist.shows.map((show) => {
      return {
        ...show,
        humanDate: DateTime.fromISO(show.date).toLocaleString(
          DateTime.DATE_HUGE
        ),
      };
    });
  });

  return {
    upcoming: shows
      .reduce((acc, artist) => {
        return [...acc, ...artist.shows];
      }, [])
      .filter((show) => {
        const showDate = DateTime.fromISO(show.date);
        return showDate > DateTime.now();
      })
      .sort((a, b) => {
        const aDate = DateTime.fromISO(a.date);
        const bDate = DateTime.fromISO(b.date);
        return aDate < bDate ? -1 : 1;
      }),
    past: shows
      .reduce((acc, artist) => {
        return [...acc, ...artist.shows];
      }, [])
      .filter((show) => {
        const showDate = DateTime.fromISO(show.date);
        return showDate < DateTime.now();
      })
      .sort((a, b) => {
        const aDate = DateTime.fromISO(a.date);
        const bDate = DateTime.fromISO(b.date);
        return aDate < bDate ? -1 : 1;
      }),
    allShows: shows
      .reduce((acc, artist) => {
        return [...acc, ...artist.shows];
      }, [])
      .sort((a, b) => {
        const aDate = DateTime.fromISO(a.date);
        const bDate = DateTime.fromISO(b.date);
        return aDate < bDate ? -1 : 1;
      }),
    byArtist: shows,
  };
}
