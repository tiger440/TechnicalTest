import React from 'react';
import { CsvToHtmlTable } from 'react-csv-to-table';



export default class MetalBands extends React.Component {
    render() {
        return (
          <CsvToHtmlTable
            data={sampleData}
            csvDelimiter=","
            tableClassName="table table-striped table-hover"
          />
        );
      }
}


const sampleData = `,band_name,fans,formed,origin,split,style
0,Iron Maiden,4195,1975,United Kingdom,-,"New wave of british heavy,Heavy"
1,Opeth,4147,1990,Sweden,1990,"Extreme progressive,Progressive rock,Progressive"
2,Metallica,3712,1981,USA,-,"Heavy,Bay area thrash"
3,Megadeth,3105,1983,USA,1983,"Thrash,Heavy,Hard rock"
4,Amon Amarth,3054,1988,Sweden,-,Melodic death
5,Slayer,2955,1981,USA,1981,Thrash
6,Death,2690,1983,USA,2001,"Progressive death,Death,Progressive thrash"
7,Dream Theater,2329,1985,USA,1985,Progressive
8,Black Sabbath,2307,1968,United Kingdom,-,"Doom,Heavy,Hard rock"
9,Nightwish,2183,1996,Finland,1996,"Symphonic power,Gothic,Symphonic"
10,Children Of Bodom,2153,1993,Finland,-,Extreme power
11,Judas Priest,2094,1969,United Kingdom,1969,"Heavy,Hard rock"
12,Blind Guardian,2040,1984,Germany,-,"Power,Speed"
13,In Flames,1932,1990,Sweden,1990,"Gothenburg,Alternative"
14,Pantera,1920,1981,USA,2003,"Heavy,Groove thrash,Groove metal"
15,Dark Tranquillity,1898,1989,Sweden,1989,Gothenburg
16,Agalloch,1881,1995,USA,2016,"Atmospheric black,Neofolk"
17,Ensiferum,1879,1995,Finland,1995,Extreme folk
18,Arch Enemy,1750,1996,Sweden,-,Gothenburg
19,Katatonia,1735,1991,Sweden,1991,"Blackened doom,Death doom,Alternative rock,Gothic doom"
20,Behemoth,1721,1991,Poland,-,"Death,Black,Blackened death"
21,Dimmu Borgir,1688,1993,Norway,1993,"Symphonic black,Black"
22,Kreator,1646,1982,Germany,-,Teutonic thrash
23,Wintersun,1640,2004,Finland,2004,Extreme power
24,Insomnium,1547,1997,Finland,-,Melodic death
25,Amorphis,1528,1990,Finland,1990,"Death,Melodic death,Folk,Progressive"
26,Kamelot,1520,1991,USA,-,Symphonic power
27,Tool,1506,1988,USA,1988,"Progressive,Alternative"
28,Helloween,1501,1978,Germany,-,"Speed,Power"
29,Testament,1500,1983,USA,1983,Bay area thrash
30,Epica,1450,2002,The Netherlands,-,Symphonic
31,Immortal,1436,1990,Norway,1990,"Death,Black"
32,Lamb Of God,1433,1999,USA,-,Groove thrash
33,Iced Earth,1403,1985,USA,1985,"Heavy,Us power"
34,Anathema,1400,1990,United Kingdom,-,"Death doom,Atmospheric rock,Doom"
35,Symphony X,1343,1994,USA,1994,"Progressive,Symphonic power"
36,Eluveitie,1328,2002,Switzerland,-,"Celtic folk,Gothenburg"
37,Gojira,1300,1996,France,1996,Progressive death
38,Rammstein,1251,1994,Germany,-,Industrial
39,Sonata Arctica,1242,1996,Finland,1996,Power
40,Mastodon,1232,1999,USA,-,"Progressive stoner,Progressive sludge"
41,Nile,1189,1993,USA,1993,"Brutal death,Technical death"
42,Sepultura,1185,1984,Brazil,-,"Alternative,Death,Groove thrash,Thrash"
43,Moonspell,1173,1989,Portugal,1989,"Folk,Gothic black,Gothic,Symphonic black,Black"
44,Therion,1167,1987,Sweden,-,"Death,Symphonic"
45,Cannibal Corpse,1162,1988,USA,1988,Death
46,Enslaved,1146,1991,Norway,-,"Viking black,Progressive black"
47,Emperor,1132,1991,Norway,1991,"Black,Symphonic black"
48,Porcupine Tree,1094,1987,United Kingdom,-,"Progressive rock,Progressive"
49,Cradle Of Filth,1084,1991,United Kingdom,1991,"Extreme gothic,Symphonic black,Death,Symphonic"
50,Iron Maiden,4195,1975,United Kingdom,-,"New wave of british heavy,Heavy"
51,Opeth,4147,1990,Sweden,1990,"Extreme progressive,Progressive rock,Progressive"
52,Metallica,3712,1981,USA,-,"Heavy,Bay area thrash"
53,Megadeth,3105,1983,USA,1983,"Thrash,Heavy,Hard rock"
54,Amon Amarth,3054,1988,Sweden,-,Melodic death
55,Slayer,2955,1981,USA,1981,Thrash
56,Death,2690,1983,USA,2001,"Progressive death,Death,Progressive thrash"
57,Dream Theater,2329,1985,USA,1985,Progressive
58,Black Sabbath,2307,1968,United Kingdom,-,"Doom,Heavy,Hard rock"
59,Nightwish,2183,1996,Finland,1996,"Symphonic power,Gothic,Symphonic"
60,Children Of Bodom,2153,1993,Finland,-,Extreme power
61,Judas Priest,2094,1969,United Kingdom,1969,"Heavy,Hard rock"
62,Blind Guardian,2040,1984,Germany,-,"Power,Speed"
63,In Flames,1932,1990,Sweden,1990,"Gothenburg,Alternative"
64,Pantera,1920,1981,USA,2003,"Heavy,Groove thrash,Groove metal"
65,Dark Tranquillity,1898,1989,Sweden,1989,Gothenburg
66,Agalloch,1881,1995,USA,2016,"Atmospheric black,Neofolk"
67,Ensiferum,1879,1995,Finland,1995,Extreme folk
68,Arch Enemy,1750,1996,Sweden,-,Gothenburg
69,Katatonia,1735,1991,Sweden,1991,"Blackened doom,Death doom,Alternative rock,Gothic doom"
70,Behemoth,1721,1991,Poland,-,"Death,Black,Blackened death"
71,Dimmu Borgir,1688,1993,Norway,1993,"Symphonic black,Black"
72,Kreator,1646,1982,Germany,-,Teutonic thrash
73,Wintersun,1640,2004,Finland,2004,Extreme power
74,Insomnium,1547,1997,Finland,-,Melodic death
75,Amorphis,1528,1990,Finland,1990,"Death,Melodic death,Folk,Progressive"
76,Kamelot,1520,1991,USA,-,Symphonic power
77,Tool,1506,1988,USA,1988,"Progressive,Alternative"
78,Helloween,1501,1978,Germany,-,"Speed,Power"
79,Testament,1500,1983,USA,1983,Bay area thrash
80,Epica,1450,2002,The Netherlands,-,Symphonic
81,Immortal,1436,1990,Norway,1990,"Death,Black"
82,Lamb Of God,1433,1999,USA,-,Groove thrash
83,Iced Earth,1403,1985,USA,1985,"Heavy,Us power"
84,Anathema,1400,1990,United Kingdom,-,"Death doom,Atmospheric rock,Doom"
85,Symphony X,1343,1994,USA,1994,"Progressive,Symphonic power"
86,Eluveitie,1328,2002,Switzerland,-,"Celtic folk,Gothenburg"
87,Gojira,1300,1996,France,1996,Progressive death
88,Rammstein,1251,1994,Germany,-,Industrial
89,Sonata Arctica,1242,1996,Finland,1996,Power
90,Mastodon,1232,1999,USA,-,"Progressive stoner,Progressive sludge"
91,Nile,1189,1993,USA,1993,"Brutal death,Technical death"
92,Sepultura,1185,1984,Brazil,-,"Alternative,Death,Groove thrash,Thrash"
93,Moonspell,1173,1989,Portugal,1989,"Folk,Gothic black,Gothic,Symphonic black,Black"
94,Therion,1167,1987,Sweden,-,"Death,Symphonic"
95,Cannibal Corpse,1162,1988,USA,1988,Death
96,Enslaved,1146,1991,Norway,-,"Viking black,Progressive black"
97,Emperor,1132,1991,Norway,1991,"Black,Symphonic black"
98,Porcupine Tree,1094,1987,United Kingdom,-,"Progressive rock,Progressive"
99,Cradle Of Filth,1084,1991,United Kingdom,1991,"Extreme gothic,Symphonic black,Death,Symphonic"
100,Be'lakor,1083,2004,Australia,-,Melodic death
101,My Dying Bride,1069,1990,United Kingdom,1990,"Death doom,Gothic doom"
102,Led Zeppelin,1054,1968,United Kingdom,1980,"Progressive hard rock,Heavy,Blues rock"
103,Nevermore,1051,1991,USA,1991,"Heavy,Progressive,Thrash"
104,Stratovarius,1046,1982,Finland,-,"Power,Heavy"
105,Paradise Lost,1042,1988,United Kingdom,1988,"Gothic,Electro gothic,Death doom"
106,Dio,1023,1982,USA,2010,Heavy
107,Kalmah,1004,1991,Finland,1991,"Extreme power,Melodic death"
108,Carcass,1001,1985,United Kingdom,-,"Grindcore,Melodic death"
109,Burzum,978,1989,Norway,1989,"Black,Dark,Ambient,Ambient"
110,Anthrax,976,1981,USA,-,"Thrash,Heavy"
111,Morbid Angel,975,1984,USA,1984,Death
112,Meshuggah,970,1987,Sweden,-,"Technical thrash,Math,Progressive"
113,Finntroll,967,1997,Finland,1997,Extreme folk
114,Septicflesh,967,1990,Greece,-,"Atmospheric death,Symphonic death"
115,Moonsorrow,966,1995,Finland,1995,Viking folk
116,Machine Head,957,1992,USA,-,"Groove thrash,Progressive thrash"
117,System Of A Down,956,1995,USA,1995,Alternative
118,Within Temptation,956,1996,The Netherlands,-,"Symphonic,Gothic"
119,Bathory,942,1983,Sweden,1983,"Viking black,First wave of black"
120,Exodus,937,1980,USA,-,Bay area thrash
121,Draconian,936,1994,Sweden,1994,Gothic doom
122,Slipknot,928,1995,USA,-,"Alternative,Nu"
123,AC/DC,923,1973,Australia,1973,"Hard rock,Blues rock"
124,Ayreon,903,1995,The Netherlands,-,Progressive
125,Swallow The Sun,900,2000,Finland,2000,"Melodic death,Melodic doom"
126,Gamma Ray,898,1988,Germany,-,Power
127,Rhapsody Of Fire,896,1993,Italy,1993,Symphonic power
128,Hypocrisy,885,1990,Sweden,-,"Death,Melodic death,Gothenburg"
129,Mot�rhead,875,1975,"United Kingdom, USA",1975,Heavy
130,Bloodbath,872,1998,Sweden,-,Death
131,Korpiklaani,864,2003,Finland,2003,Folk
132,Manowar,863,1980,USA,-,"Heavy,Us power"
133,HammerFall,861,1993,Sweden,1993,Power
134,At The Gates,839,1990,Sweden,-,"Melodic death,Gothenburg"
135,Sabaton,824,1999,Sweden,1999,Power
136,Mayhem,823,1984,Norway,-,"Death,Black"
137,Vader,822,1983,Poland,1983,Death
138,Avantasia,819,1999,Germany,-,Symphonic power
139,Rotting Christ,807,1987,Greece,1987,"Black,Gothic"
140,Summoning,799,1993,Austria,-,Atmospheric black
141,Sodom,783,1980,Germany,1980,Teutonic thrash
142,Overkill,770,1980,USA,-,Thrash
143,Dissection,768,1989,Sweden,1989,"Melodic death,Melodic black"
144,Satyricon,768,1990,Norway,-,Black
145,Rush,767,1968,Canada,1968,Progressive rock
146,Darkthrone,753,1986,Norway,-,"Death,Black,Crust punk ,Heavy"
147,Ozzy Osbourne,750,1979,"United Kingdom, USA",1979,Heavy
148,Devin Townsend,747,1996,Canada,-,"Industrial progressive,Progressive"
149,Alcest,734,2000,France,2000,"Black,Shoegaze"
150,Equilibrium,729,2001,Germany,-,Viking folk
151,Deep Purple,714,1968,United Kingdom,1968,"Heavy,Hard rock"
152,Edguy,714,1992,Germany,-,Power
153,Soilwork,702,1995,Sweden,1995,Gothenburg
154,Riverside,684,2001,Poland,-,Progressive
155,Trivium,681,2000,USA,2000,"Metalcore,Alternative thrash"
156,Turisas,672,1997,Finland,-,Folk
157,Orphaned Land,662,1991,Israel,1991,"Progressive folk,Death,Folk"
158,Apocalyptica,656,1993,Finland,-,Symphonic heavy
159,King Diamond,641,1985,"Denmark, USA",1985,Heavy
160,Angra,633,1991,Brazil,-,Progressive power
161,Deicide,628,1987,USA,1987,Death
162,Alice In Chains,627,1985,USA,-,"Grunge ,Heavy"
163,Haggard,622,1991,Germany,1991,"Experimental death,Symphonic"
164,Disturbed,620,1996,USA,-,"Nu,Alternative"
165,DragonForce,607,1999,United Kingdom,1999,Power
166,Lacuna Coil,604,1994,Italy,-,"Gothic,Alternative"
167,Accept,601,1968,Germany,1968,Heavy
168,Arcturus,601,1990,Norway,-,"Avantgarde black,Avantgarde"
169,Omnium Gatherum,599,1996,Finland,1996,Melodic death
170,Obituary,596,1984,USA,-,Death
171,Pain Of Salvation,596,1984,Sweden,1984,"Progressive,Progressive rock"
172,Necrophagist,595,1992,Germany,-,Technical death
173,Fear Factory,594,1989,USA,1989,"Industrial,Death"
174,Tristania,594,1996,Norway,-,"Symphonic gothic,Gothic"
175,Decapitated,587,1996,Poland,1996,Technical death
176,Fleshgod Apocalypse,586,2007,Italy,-,Symphonic death
177,Primordial,583,1987,Ireland,1987,"Black,Celtic folk"
178,Candlemass,579,1984,Sweden,-,Epic doom
179,Scar Symmetry,574,2004,Sweden,2004,"Melodic death,Progressive power"
180,Eternal Tears Of Sorrow,573,1991,Finland,-,"Extreme power,Melodic death"
181,Marduk,567,1990,Sweden,1990,Black
182,Annihilator,565,1984,Canada,-,"Thrash,Heavy"
183,Alestorm,558,2004,United Kingdom,2004,"Folk,Power"
184,Ghost,547,2008,Sweden,-,"Heavy,Psychedelic rock"
185,Ulver,545,1992,Norway,1992,"Folk,Electronic,Avantgarde ,Black"
186,Cynic,542,1987,USA,-,"Progressive death,Progressive"
187,Ne Obliviscaris,539,2003,Australia,2003,Extreme progressive
188,In Mourning,533,2000,Sweden,-,"Gothic,Melodic death,Progressive"
189,Obscura,532,2002,Germany,2002,"Progressive death,Technical death"
190,Korn,531,1993,USA,-,"Nu,Alternative"
191,Evergrey,528,1996,Sweden,1996,"Progressive,Power"
192,T�r,526,1998,Faroe Islands,-,Folk
193,Type O Negative,526,1989,USA,1989,"Gothic,Doom"
194,Mercyful Fate,525,1981,"Denmark, USA",-,"Heavy,First wave of black"
195,Saturnus,522,1991,Denmark,1991,"Death,Gothic doom"
196,Bolt Thrower,519,1986,United Kingdom,2016,"Death,Grindcore"
197,Scorpions,519,1965,Germany,1965,"Progressive rock,Hard rock,Heavy"
198,Napalm Death,516,1981,United Kingdom,-,"Hardcore,Grindcore,Punk"
199,Windir,514,1994,Norway,1994,Viking black
200,Sentenced,510,1988,Finland,2005,"Death,Suomi,Depressive heavy,Melodic death"
201,Tiamat,510,1988,Sweden,1988,"Death,Atmospheric gothic"
202,Killswitch Engage,500,1999,USA,-,Melodic metalcore
203,Gorgoroth,498,1992,Norway,1992,Black
204,Celtic Frost,497,1984,Switzerland,2008,"First wave of black,Avantgarde,Thrash"
205,Rainbow,497,1975,United Kingdom,1975,"Hard rock,Heavy"
206,Suffocation,497,1990,USA,-,Brutal death
207,Kataklysm,493,1991,Canada,1991,Death
208,Dying Fetus,488,1991,USA,-,"Brutal death,Deathgrind,Technical death"
209,Norther,488,1996,Finland,1996,Extreme power
210,Sirenia,488,2001,Norway,-,Symphonic gothic
211,Savatage,482,1978,USA,1978,Progressive heavy
212,Empyrium,481,1994,Germany,-,"Doom,Folk,Neofolk"
213,Guns N' Roses,481,1985,USA,1985,Hard rock
214,Venom,481,1979,United Kingdom,-,"First wave of black,Heavy"
215,Dark Funeral,479,1993,Sweden,1993,Black
216,Avenged Sevenfold,477,1999,USA,-,"Metalcore,Heavy,Alternative"
217,Destruction,477,1983,Germany,1983,Teutonic thrash
218,Edge Of Sanity,472,1989,Sweden,2003,Progressive death
219,After Forever,470,1995,The Netherlands,1995,"Symphonic gothic,Symphonic progressive"
220,Ihsahn,464,2005,Norway,-,"Extreme progressive,Avantgarde"
221,Diablo Swing Orchestra,458,2003,Sweden,2003,"Avantgarde,Symphonic"
222,Arkona,450,2002,Russia,-,Pagan folk
223,Leprous,444,2001,Norway,2001,Progressive
224,Between The Buried And Me,441,2000,USA,-,Progressive metalcore
225,Death Angel,441,1982,USA,1982,Bay area thrash
226,W.A.S.P.,440,1982,USA,-,Heavy
227,As I Lay Dying,424,2001,USA,2001,Melodic metalcore
228,Black Label Society,424,1998,USA,-,Heavy
229,Borknagar,420,1995,Norway,1995,"Melodic black,Progressive black"
230,Isis,420,1997,USA,2010,"Post-metal,Atmospheric sludge"
231,Soulfly,417,1997,USA,1997,"Groove thrash,Nu"
232,Atheist,411,1984,USA,-,Technical death
233,DevilDriver,411,2002,USA,2002,"Nu,Melodic death,Groove thrash"
234,Shining,410,1996,Sweden,-,"Depressive black,Progressive black"
235,Strapping Young Lad,409,1995,Canada,1995,"Industrial,Thrash"
236,The Gathering,409,1989,The Netherlands,-,"Doom,Death doom,Atmospheric gothic,Experimental rock"
237,Anaal Nathrakh,399,1998,United Kingdom,1998,"Black,Grindcore"
238,Ghost Brigade,398,2005,Finland,-,"Post-metal,Alternative"
239,Delain,395,2002,The Netherlands,2002,Symphonic
240,Watain,391,1998,Sweden,-,Black
241,Saxon,387,1976,United Kingdom,1976,"New wave of british heavy,Heavy"
242,Vektor,387,2002,USA,-,"Technical thrash,Progressive thrash"
243,Immolation,386,1986,USA,1986,Death
244,Firewind,382,1998,Greece,-,"Power,Heavy"
245,Mors Principium Est,381,1999,Finland,1999,Gothenburg
246,Samael,381,1987,Switzerland,-,"Black,Electro industrial"
247,Bullet For My Valentine,379,1998,United Kingdom,1998,Melodic metalcore
248,Entombed,379,1987,Sweden,-,"Death,Death ',N',Roll"
249,Steven Wilson,375,2003,United Kingdom,2003,Progressive rock
250,Xandria,372,1994,Germany,-,"Gothic,Symphonic"
251,Drudkh,369,2002,Ukraine,2002,"Atmospheric black,Pagan black"
252,Animals As Leaders,367,2007,USA,-,"Progressive,Instrumental,Djent"
253,Queensr�che,367,1981,USA,1981,"Heavy,Progressive heavy,Progressive rock"
254,Powerwolf,364,2003,Germany,-,Power
255,Belphegor,363,1991,Austria,1991,"Black,Death"
256,Alice Cooper,362,1964,USA,-,"Hard rock,Glam rock,New,Wave ,Heavy"
257,Before The Dawn,359,1999,Finland,1999,"Gothic,Melodic death"
258,The Faceless,358,2004,USA,-,"Deathcore,Progressive death,Technical death"
259,Deftones,357,1988,USA,1988,"Nu,Alternative"
260,Primal Fear,354,1997,Germany,-,Power
261,Theatre Of Tragedy,354,1993,Norway,1993,"Gothic,Gothic industrial"
262,KISS,352,1972,USA,-,"Hard rock,Symphonic rock,Glam,Heavy"
263,Down,351,1991,USA,1991,"Heavy,Sludge,Stoner"
264,Skeletonwitch,349,2003,USA,-,Blackened thrash
265,Rage Against The Machine,344,1991,USA,1991,"Alternative,Nu"
266,Wolves In The Throne Room,343,2004,USA,-,Atmospheric black
267,Five Finger Death Punch,342,2005,USA,2005,Groove metal
268,Electric Wizard,341,1993,United Kingdom,-,"Doom,Stoner"
269,Nine Inch Nails,341,1988,USA,1988,"Industrial rock,Industrial"
270,Novembers Doom,341,1989,USA,-,"Death doom,Melodic death"
271,Dethklok,337,2006,USA,2006,Melodic death
272,Faith No More,337,1981,USA,-,Alternative
273,Cryptopsy,334,1988,Canada,1988,"Brutal death,Technical death,Death"
274,Falkenbach,332,1989,Germany,-,"Black,Viking folk,Folk"
275,Graveworm,331,1992,Italy,1992,"Gothic,Symphonic black"
276,Taake,331,1993,Norway,-,Black
277,Grave Digger,328,1980,Germany,1980,Heavy
278,Rob Zombie,326,1998,USA,-,"Alternative,Industrial"
279,The Black Dahlia Murder,326,2001,USA,2001,"Melodic death,Metalcore"
280,Running Wild,324,1976,Germany,-,"Heavy,Speed"
281,Neurosis,322,1985,USA,1985,"Atmospheric sludge,Post-hardcore ,Post-metal"
282,Carach Angren,320,2003,The Netherlands,-,Symphonic black
283,Dark Moor,320,1994,Spain,1994,Symphonic power
284,Baroness,319,2003,USA,-,"Sludge,Stoner rock,Progressive rock"
285,King Crimson,319,1969,United Kingdom,1969,Progressive rock
286,Shape Of Despair,319,1995,Finland,-,Funeral doom
287,Bruce Dickinson,315,1989,United Kingdom,1989,Heavy
288,Demons And Wizards,315,1999,USA,-,"Heavy,Power"
289,Deathspell Omega,314,1998,France,1998,"Black,Avantgarde"
290,Lacrimosa,312,1990,Germany,-,"Gothic,Symphonic"
291,Coroner,311,1985,Switzerland,1985,Technical thrash
292,Masterplan,311,2001,Germany,-,Progressive power
293,Tarja,310,2004,Finland,2004,Symphonic
294,Ahab,309,2004,Germany,-,Funeral doom
295,Melechesh,307,1993,"Israel, The Netherlands",1993,"Melodic black,Folk"
296,Rage,306,1986,Germany,-,Heavy
297,Cult Of Luna,305,1998,Sweden,1998,"Post-metal,Sludge"
298,Suidakra,305,1994,Germany,-,"Melodic death,Folk"
299,Yngwie Malmsteen,304,1978,Sweden,1978,Neoclassical power
300,Kyuss,301,1988,USA,1995,"Stoner,Stoner rock"
301,All That Remains,298,1998,USA,1998,Melodic metalcore
302,Marilyn Manson,298,1989,USA,-,"Industrial rock,Alternative,Industrial,Glam rock,Alternative rock"
303,S�lstafir,297,1995,Iceland,1995,"Atmospheric black,Post-rock"
304,Woods Of Ypres,297,2002,Canada,2011,"Melodic black,Doom,Gothic doom"
305,Blut Aus Nord,296,1994,France,1994,"Atmospheric black,Industrial"
306,Godsmack,296,1995,USA,-,"Alternative,Hard rock"
307,Haken,293,2007,United Kingdom,2007,Progressive
308,HIM,293,1995,Finland,-,Suomi
309,Warbringer,293,2004,USA,2004,Thrash
310,Havok,289,2004,USA,-,Thrash
311,Novembre,288,1990,Italy,1990,"Death doom,Extreme progressive"
312,Evile,285,2004,United Kingdom,-,Thrash
313,Six Feet Under,283,1993,USA,1993,Death
314,Leaves' Eyes,281,2003,Germany,-,Atmospheric symphonic
315,Old Man's Child,281,1989,Norway,1989,"Thrash,Death,Symphonic black"
316,Chimaira,280,1998,USA,2014,Groove thrash
317,Persefone,279,2001,Andorra,2001,"Melodic death,Progressive"
318,Heaven Shall Burn,276,1996,Germany,-,"Metalcore,Melodic death"
319,Myrath,275,2001,"Tunisia, France",2001,"Progressive,Oriental folk"
320,Freedom Call,272,1998,Germany,-,Power
321,Green Carnation,272,1990,Norway,1990,"Death,Gothic,Progressive"
322,High On Fire,272,1998,USA,-,"Stoner,Sludge"
323,Metal Church,268,1980,USA,1980,"Heavy,Thrash"
324,Sylosis,267,2000,United Kingdom,-,"Melodic death,Progressive thrash"
325,Danzig,266,1988,USA,1988,Hard rock
326,Elvenking,265,1997,Italy,-,"Folk,Power"
327,Triptykon,265,2008,Switzerland,2008,"Blackened thrash,Death"
328,Volbeat,264,2001,Denmark,-,"Heavy,Hard rock"
329,The Haunted,263,1996,Sweden,1996,"Alternative thrash,Thrash,Melodic death"
330,Carpathian Forest,262,1990,Norway,-,Black
331,Van Halen,262,1972,USA,1972,"Hard rock,Heavy"
332,Falconer,261,1999,Sweden,-,"Folk,Power"
333,Pain,261,1996,Sweden,1996,Gothic industrial
334,Unleashed,260,1989,Sweden,-,Melodic death
335,Protest The Hero,258,2001,Canada,2001,"Metalcore,Progressive metalcore"
336,Gorguts,257,1989,Canada,-,"Death,Technical death,Avantgarde"
337,Circus Maximus,256,2000,Norway,2000,Progressive
338,Aborted,255,1995,Belgium,-,"Brutal death,Melodic death,Grindcore"
339,Municipal Waste,254,2000,USA,2000,Crossover thrash
340,Virgin Black,253,1995,Australia,-,"Gothic,Doom"
341,Dismember,252,1988,Sweden,1988,Death
342,Joe Satriani,252,1984,USA,-,"Hard rock,Rock,Instrumental"
343,Barren Earth,250,2007,Finland,2007,"Melodic death,Progressive"
344,Dream Evil,250,1999,Sweden,-,"Heavy,Power"
345,Krisiun,249,1990,Brazil,1990,Brutal death
346,Negur? Bunget,249,1995,Romania,-,"Black,Folk"
347,Uaral,248,1996,Chile,1996,"Doom,Neofolk"
348,Amaranthe,247,2008,Sweden,-,"Power,Industrial"
349,Whitesnake,247,1978,United Kingdom,1978,Hard rock
350,Quo Vadis,246,1992,Canada,-,Technical death
351,Mercenary,245,1991,Denmark,1991,"Melodic death,Thrash,Gothenburg,Heavy"
352,Pestilence,245,1986,The Netherlands,-,"Death,Progressive death,Technical death"
353,The Agonist,244,2004,Canada,2004,"Metalcore,Melodic death"
354,Cavalera Conspiracy,243,2007,USA,-,Thrash
355,Mudvayne,243,1996,USA,1996,"Nu,Alternative"
356,Origin,243,1997,USA,-,Technical death
357,The Ocean,243,2000,Germany,2000,"Post-metal,Sludge,Hardcore"
358,Vintersorg,243,1994,Sweden,-,"Black,Progressive,Folk"
359,Voivod,243,1982,Canada,1982,"Thrash,Progressive"
360,Fates Warning,242,1982,USA,-,"Us power,Progressive"
361,Skid Row,240,1987,USA,1987,"Heavy,Hard rock"
362,Unexpect,239,1996,Canada,2015,Extreme avantgarde
363,Vital Remains,239,1989,USA,1989,Death
364,Kvelertak,238,2007,Norway,-,"Blackened hardcore,Punk"
365,1349,236,1997,Norway,1997,Black
366,M�tley Cr�e,236,1981,USA,2015,"Glam rock,Glam"
367,Tankard,236,1982,Germany,1982,Thrash
368,Dragonland,235,1999,Sweden,-,Symphonic power
369,Cattle Decapitation,234,1996,USA,1996,"Deathgrind,Goregrind"
370,Revocation,234,2006,USA,-,"Technical death,Thrash"
371,Pagan's Mind,233,2000,Norway,2000,"Progressive,Power"
372,Artillery,232,1982,Denmark,-,Thrash
373,Shade Empire,232,1999,Finland,1999,Symphonic black
374,Arsis,231,2000,USA,-,"Melodic death,Technical death"
375,Autopsy,231,1987,USA,1987,Death
376,Dark Fortress,230,1994,Germany,-,Black
377,Lake Of Tears,230,1992,Sweden,1992,"Gothic,Doom"
378,Daylight Dies,229,1996,USA,-,"Melodic death,Doom"
379,Lost Horizon,229,1990,Sweden,1990,Power
380,TesseracT,226,2003,United Kingdom,-,"Progressive math,Djent"
381,Keep Of Kalessin,222,1994,Norway,1994,"Black,Melodic black,Progressive black"
382,Toxic Holocaust,222,1999,USA,-,"Blackened thrash,Crossover thrash"
383,Possessed,220,1983,USA,1983,"Death,Thrash"
384,3 Inches Of Blood,219,1999,Canada,2015,"Heavy,Power"
385,Allegaeon,218,2005,USA,2005,"Technical death,Melodic death"
386,Beyond Creation,217,2005,Canada,-,"Technical death,Progressive death"
387,Catamenia,215,1995,Finland,1995,"Melodic black,Melodic death,Heavy"
388,Def Leppard,215,1977,United Kingdom,-,"New wave of british heavy,Hard rock"
389,Hatebreed,215,1994,USA,1994,"Hardcore,Metalcore"
390,Heavenly,215,1994,France,-,Power
391,Heidevolk,215,2002,The Netherlands,2002,Folk
392,Soundgarden,215,1984,USA,-,"Grunge ,Stoner"
393,Textures,215,2001,The Netherlands,2001,Progressive math
394,Sigh,214,1989,Japan,-,"Death,Black,Avantgarde,Thrash"
395,Antimatter,213,1998,United Kingdom,1998,Atmospheric rock
396,Clutch,213,1990,USA,-,"Hard rock,Stoner rock"
397,Crematory,211,1991,Germany,1991,"Death,Gothic"
398,Gorod,211,1997,France,-,Technical death
399,Les Discrets,211,2003,France,2003,"Black,Shoegaze"
400,October Tide,211,1995,Sweden,-,Death doom
401,Periphery,211,2005,USA,2005,"Progressive math,Djent"
402,Seventh Wonder,211,2000,Sweden,-,Progressive
403,Stone Sour,209,1992,USA,1992,"Hard rock,Alternative"
404,Estatic Fear,208,1994,Austria,1999,Symphonic doom
405,Malevolent Creation,208,1987,USA,1987,Death
406,Esoteric,207,1992,United Kingdom,-,"Psychedelic doom,Funeral doom"
407,Hate Eternal,207,1996,USA,1996,Brutal death
408,The Foreshadowing,207,1999,Italy,-,"Doom,Gothic"
409,Atoma,206,2011,Sweden,2011,"Post-metal,Post-rock"
410,Deathstars,206,2000,Sweden,-,Industrial gothic
411,Luca Turilli's Rhapsody,206,2011,Italy,2011,Symphonic power
412,Iron Savior,205,1996,Germany,-,Power
413,Asphyx,204,1987,The Netherlands,1987,Death
414,Control Denied,204,1995,USA,2001,Progressive
415,Job For A Cowboy,203,2002,USA,2002,"Deathcore,Death"
416,Heaven And Hell,201,2006,USA,2010,Heavy
417,Thyrfing,200,1995,Sweden,1995,Viking black
418,Ministry,199,1981,USA,-,"Industrial,Synth pop"
419,Queens Of The Stone Age,199,1997,USA,1997,"Stoner,Stoner rock"
420,Slumber,199,2002,Sweden,2010,Melodic doom
421,Threshold,199,1988,United Kingdom,1988,Progressive
422,Grave,198,1986,Sweden,-,Death
423,Naglfar,198,1992,Sweden,1992,Melodic black
424,Benighted,197,1998,France,-,"Brutal death,Blackened death,Grindcore"
425,Lordi,195,1992,Finland,1992,"Hard rock,Glam"
426,Alter Bridge,194,2004,USA,-,"Hard rock,Rock"
427,Doom:VS,194,2004,Sweden,2004,Funeral doom
428,Finsterforst,194,2004,Germany,-,Pagan folk
429,Luca Turilli,192,1999,Italy,1999,Symphonic power
430,Shadows Fall,192,1996,USA,-,"Modern thrash,Melodic death"
431,Steve Vai,191,1982,USA,1982,Progressive rock
432,Twisted Sister,191,1972,USA,-,"Hard rock,Glam"
433,Suicidal Tendencies,190,1981,USA,1981,"Crossover thrash,Hardcore,Punk"
434,Whitechapel,189,2006,USA,-,Deathcore
435,Jeff Loomis,188,2005,USA,2005,"Progressive,Instrumental"
436,M�negarm,188,1995,Sweden,-,"Black,Viking folk"
437,Van Canto,188,2006,Germany,2006,"Power,A,Cappella"
438,Nuclear Assault,187,1984,USA,-,Thrash
439,A Forest Of Stars,186,2007,United Kingdom,2007,Atmospheric black
440,All Shall Perish,186,2002,USA,-,Deathcore
441,The Sword,186,2003,USA,2003,"Doom,Stoner"
442,Caladan Brood,185,2008,USA,-,"Atmospheric black,Folk"
443,Galneryus,185,2001,Japan,2001,Power
444,Adagio,184,2000,France,-,"Progressive,Symphonic power"
445,Akercocke,184,1996,United Kingdom,1996,"Black,Death,Progressive death"
446,Axel Rudi Pell,184,1989,Germany,-,"Heavy,Power"
447,Edenbridge,184,1998,Austria,1998,"Symphonic,Progressive,Power"
448,Inquisition,184,1988,"Colombia, USA",-,"Black,Thrash"
449,Chthonic,183,1995,Taiwan,1995,"Melodic black,Extreme power,Folk"
450,Dark Angel,183,1981,USA,-,Bay area thrash
451,Parkway Drive,183,2002,Australia,2002,Metalcore
452,Psycroptic,183,1999,Australia,-,Technical death
453,Poisonblack,182,2000,Finland,2000,"Suomi,Depressive heavy"
454,The Dillinger Escape Plan,182,1997,USA,-,"Math,Metalcore"
455,Deafheaven,179,2010,USA,2010,"Atmospheric black,Post-metal,Shoegaze"
456,Rapture,179,1998,Finland,-,"Melodic death,Doom"
457,Kauan,178,2005,Russia,2005,"Folk,Doom,Black"
458,Into Eternity,177,1997,Canada,-,"Melodic death,Progressive"
459,Thy Catafalque,177,1998,"Hungary, United Kingdom",1998,Avantgarde black
460,Enshine,175,2009,,-,Gothic doom
461,Kylesa,173,2001,USA,2001,Sludge
462,Cain's Offering,172,2005,Finland,-,Power
463,Cathedral,172,1989,United Kingdom,1989,"Doom,Stoner"
464,Forbidden,172,1985,USA,-,Bay area thrash
465,Spawn Of Possession,172,1997,Sweden,1997,"Brutal death,Technical death"
466,Soen,171,2004,Sweden,-,"Progressive,Alternative"
467,Dalriada,170,2006,Hungary,2006,Folk
468,Evoken,170,1992,USA,-,"Death,Funeral doom"
469,Misery Index,170,2001,USA,2001,Deathgrind
470,August Burns Red,169,2003,USA,-,Technical metalcore
471,Disarmonia Mundi,169,2000,Italy,2000,Gothenburg
472,In Vain,168,2003,Norway,-,"Death,Progressive death"
473,Jorn,167,2000,Norway,2000,Heavy
474,Absu,166,1989,USA,-,"Death,Blackened thrash"
475,Anorexia Nervosa,166,1995,France,1995,"Symphonic black,Industrial"
476,Charon,166,1992,Finland,2011,"Suomi,Death"
477,Suicide Silence,166,2002,USA,2002,Deathcore
478,Vomitory,166,1989,Sweden,2013,Death
479,Born Of Osiris,165,2003,USA,2003,Progressive deathcore
480,Sleep,165,1990,USA,-,Stoner
481,Unearth,165,1998,USA,1998,Metalcore
482,Forest Of Shadows,164,1997,Sweden,-,"Death doom,Atmospheric doom"
483,Goatwhore,164,1997,USA,1997,"Blackened thrash,Blackened death"
484,Noumena,164,1998,Finland,-,Melodic death
485,Stream Of Passion,164,2005,The Netherlands,2005,Symphonic progressive
486,White Zombie,164,1985,USA,1998,"Noise rock,Alternative thrash,Industrial"
487,Onslaught,162,1983,United Kingdom,1983,Thrash
488,Thin Lizzy,162,1969,Ireland,-,"Hard rock,Heavy"
489,Ulcerate,162,2000,New Zealand,2000,Technical death
490,Battlelore,161,1999,Finland,-,"Folk,Power"
491,Black Sun Aeon,161,2008,Finland,2008,"Melodic death,Doom"
492,Lacrimas Profundere,161,1993,Germany,-,"Doom,Gothic"
493,Nocturnal Rites,161,1990,Sweden,1990,Power
494,Heathen,160,1984,USA,-,Bay area thrash
495,Pelican,160,2001,USA,2001,Instrumental post-metal
496,Acid Bath,159,1990,USA,1997,"Doom,Sludge"
497,Amberian Dawn,158,2006,Finland,2006,Symphonic power
498,Converge,158,1990,USA,-,"Metalcore,Hardcore,Post-hardcore,Punk"
499,Serenity,158,2001,Austria,2001,Symphonic power
500,Star One,158,2002,The Netherlands,-,Progressive
501,Mar De Grises,157,2000,Chile,2000,Doom
502,Wolfheart,157,2013,Finland,-,Melodic death
503,Darkspace,156,1999,Switzerland,1999,Ambient black
504,Legion Of The Damned,156,2005,The Netherlands,-,"Thrash,Death"
505,Liquid Tension Experiment,155,1998,USA,1998,"Progressive,Instrumental"
506,Tarot,155,1985,Finland,-,Power
507,The Sins Of Thy Beloved,154,1996,Norway,1996,Symphonic gothic
508,The Vision Bleak,154,2000,Germany,-,Gothic
509,Fallujah,153,2007,USA,2007,"Progressive death,Technical deathcore"
510,Witherscape,153,2013,Sweden,-,"Atmospheric death,Extreme progressive"
511,Einherjer,152,1993,Norway,1993,Viking folk
512,Primus,152,1984,USA,-,"Alternative,Experimental rock"
513,Sunn O))),152,1998,USA,1998,"Drone doom,Dark,Ambient"
514,Airbourne,151,2001,Australia,-,Hard rock
515,Decrepit Birth,151,2001,USA,2001,"Brutal death,Technical death"
516,Grand Magus,151,1996,Sweden,-,"Doom,Heavy"
517,Uriah Heep,151,1969,United Kingdom,1969,Hard rock
518,Flotsam And Jetsam,150,1983,USA,-,Thrash
519,Blotted Science,149,2005,USA,2005,"Progressive,Instrumental"
520,Limbonic Art,149,1993,Norway,-,"Symphonic black,Black"
521,Shadow Gallery,149,1985,USA,1985,Progressive
522,Fen,148,2006,United Kingdom,-,"Atmospheric black,Post-rock"
523,Skyfire,148,1995,Sweden,1995,Extreme power
524,Corrosion Of Conformity,146,1982,USA,-,Stoner
525,Vanden Plas,146,1990,Germany,1990,"Power,Progressive"
526,Halford,145,1999,United Kingdom,-,Heavy
527,In Extremo,145,1995,Germany,1995,Medieval folk
528,Mg?a,145,2000,Poland,-,Black
529,Solution .45,145,2007,Sweden,2007,Melodic death
530,Whispered,145,2001,Finland,-,Extreme power
531,Diamond Head,144,1976,United Kingdom,1976,"New wave of british heavy,Heavy"
532,Hate,144,1990,Poland,-,Death
533,God Dethroned,143,1990,The Netherlands,1990,"Death,Thrash"
534,Vreid,143,2004,Norway,-,Black
535,In The Silence,142,2009,USA,2009,Progressive
536,Static-X,142,1994,USA,2013,"Nu,Industrial,Alternative"
537,Nachtmystium,141,2000,USA,2000,"Black,Psychedelic black"
538,Royal Hunt,141,1989,Denmark,-,Symphonic power
539,Xasthur,141,1995,USA,1995,Depressive black
540,Suicidal Angels,140,2001,Greece,-,Thrash
541,Wolfchant,140,2003,Germany,2003,"Pagan folk,Melodic death"
542,ReVamp,139,2009,The Netherlands,2016,"Symphonic,Progressive"
543,Sadus,139,1984,USA,1984,"Death,Technical thrash"
544,Blackfield,138,2000,Israel,-,"Progressive rock,Avantgarde rock"
545,Nightrage,138,2000,"Greece, Sweden",2000,Melodic death
546,The 69 Eyes,138,1990,Finland,-,"Gothic,Glam rock,Gothic rock,Punk rock"
547,Pyramaze,137,2001,Denmark,2001,Progressive power
548,Serj Tankian,137,2007,USA,-,"Alternative,Hard rock"
549,Gloryhammer,136,2010,United Kingdom,2010,Power
550,Hour Of Penance,136,1999,Italy,-,Brutal death
551,Kalisia,136,1994,France,1994,Progressive death
552,Nargaroth,136,1996,Germany,-,Black
553,Trail Of Tears,136,1996,Norway,1996,Gothic
554,Sanctuary,135,1985,USA,-,Us power
555,Woods Of Desolation,135,2005,Australia,2005,Atmospheric black
556,Agathodaimon,134,1995,Germany,2014,"Symphonic black,Extreme gothic"
557,Sinergy,134,1997,"Sweden, Finland",1997,"Heavy,Power"
558,Sonic Syndicate,134,2002,Sweden,-,"Gothenburg,Metalcore"
559,Wuthering Heights,134,1989,Denmark,1989,"Progressive power,Folk"
560,I,133,2006,Norway,-,Blackened heavy
561,Heavenwood,132,1992,Portugal,1992,"Death,Gothic,Gothic doom"
562,Pig Destroyer,132,1997,USA,-,Grindcore
563,Doro,131,1987,Germany,1987,"Hard rock,Heavy"
564,Incantation,131,1989,USA,-,Death
565,Virgin Steele,131,1981,USA,1981,"Heavy,Symphonic"
566,Anvil,130,1978,Canada,-,Heavy
567,Bal-Sagoth,130,1989,United Kingdom,1989,"Symphonic black,Power"
568,Crowbar,130,1989,USA,-,Sludge
569,Mourning Beloveth,130,1992,Ireland,1992,Death doom
570,Oranssi Pazuzu,130,2007,Finland,-,Psychedelic black
571,Saor,130,2013,United Kingdom,2013,"Atmospheric black,Folk"
572,Ancient Bards,129,2006,Italy,-,Symphonic power
573,Dark Lunacy,129,1997,Italy,1997,"Melodic death,Symphonic"
574,Fairyland,129,1998,France,-,Symphonic power
575,Gama Bomb,129,2002,Ireland,2002,Thrash
576,In The Woods...,129,1991,Norway,-,"Black,Avantgarde,Progressive"
577,Leviathan,129,1998,USA,1998,Ambient black
578,Sybreed,129,2003,Switzerland,2013,"Groove thrash,Industrial"
579,Spiritual Beggars,127,1992,Sweden,1992,"Heavy,Stoner"
580,In This Moment,126,2005,USA,-,"Melodic metalcore,Alternative"
581,Saint Vitus,126,1979,USA,1979,Doom
582,U.D.O.,126,1987,Germany,-,Heavy
583,Atreyu,125,1998,USA,1998,"Melodic metalcore,Alternative"
584,Communic,125,2003,Norway,-,Progressive
585,Godflesh,125,1988,United Kingdom,1988,Industrial
586,Nightingale,125,1994,Sweden,-,"Gothic,Progressive"
587,Anubis Gate,124,2001,Denmark,2001,"Progressive,Power"
588,Destr�yer 666,124,1994,"Australia, United Kingdom",-,Blackened thrash
589,Europe,124,1979,Sweden,1979,"Heavy,Hard rock"
590,Pentagram,124,1971,USA,-,Doom
591,Zyklon,124,1998,Norway,1998,"Black,Death"
592,Aeon,122,1999,Sweden,-,Death
593,Orden Ogan,122,1996,Germany,1996,"Medieval folk,Power"
594,Skyclad,122,1990,United Kingdom,-,Folk
595,Stormlord,122,1991,Italy,1991,Symphonic black
596,X Japan,122,1982,Japan,-,Power
597,Aquilus,121,2000,Australia,2000,"Atmospheric black,Symphonic black,Ambient"
598,Hail Spirit Noir,121,2010,Greece,-,"Blackened progressive,Psychedelic rock"
599,Wine From Tears,121,2002,Russia,2002,Death doom
600,Amesoeurs,120,2004,France,2009,"Black,Shoegaze"
601,Kampfar,120,1994,Norway,1994,"Black,Folk"
602,Unisonic,120,2009,Germany,-,"Melodic power,Hard rock"
603,Visions Of Atlantis,120,2000,Austria,2000,Symphonic
604,Karnivool,119,1996,Australia,-,"Alternative,Progressive"
605,OSI,119,2003,USA,2003,Progressive
606,Ouroboros,119,2001,Australia,-,"Technical death,Thrash"
607,Russian Circles,119,2004,USA,2004,Post-metal
608,Vulture Industries,119,1998,Norway,-,"Avantgarde,Progressive"
609,Blue �yster Cult,118,1967,USA,1967,Hard rock
610,Drowning Pool,118,1996,USA,-,Alternative
611,Hellhammer,118,1982,Switzerland,1982,First wave of black
612,Benediction,117,1989,United Kingdom,-,Death
613,Blood Red Throne,117,1998,Norway,1998,Death
614,Gwar,117,1985,USA,-,"Alternative,Thrash,Hardcore,Punk"
615,Illnath,117,1997,Denmark,1997,Symphonic black
616,Crimson Glory,116,1982,USA,-,Progressive heavy
617,James LaBrie,116,1998,Canada,1998,Progressive
618,Witchcraft,116,2000,Sweden,-,Stoner
619,Darkest Hour,115,1995,USA,1995,"Melodic death,Metalcore"
620,Otep,115,2000,USA,-,"Nu,Alternative"
621,Red Fang,115,2005,USA,2005,"Stoner,Stoner rock"
622,Sacred Reich,115,1985,USA,-,"Speed,Thrash"
623,Solefald,115,1995,Norway,1995,"Progressive black,Avantgarde"
624,Solitude Aeturnus,115,1987,USA,-,Doom
625,Cruachan,114,1992,Ireland,1992,Celtic folk
626,D.R.I.,114,1982,USA,-,"Crossover thrash,Hardcore,Punk"
627,Exhumed,114,1991,USA,1991,Deathgrind
628,Forefather,114,1997,United Kingdom,-,"Folk,Black"
629,The Ruins Of Beverast,114,2003,Germany,2003,"Black,Doom"
630,Vision Divine,114,1998,Italy,-,Power
631,Dokken,113,1977,USA,1977,Heavy
632,Hollenthon,113,1994,Austria,-,"Symphonic,Melodic death"
633,M�go De Oz,113,1989,Spain,1989,"Heavy,Folk"
634,Tribulation,113,2001,Sweden,-,"Thrash,Death,Black"
635,Battle Beast,112,2008,Finland,2008,Heavy
636,Bring Me The Horizon,112,2004,United Kingdom,-,"Metalcore,Deathcore,Post-hardcore"
637,Ex Deo,112,2008,Canada,2008,Symphonic death
638,Metsat�ll,112,1999,Estonia,-,"Heavy,Folk"
639,Skepticism,112,1991,Finland,1991,Funeral doom
640,Dordeduh,111,2009,Romania,-,Atmospheric black
641,Redemption,111,2000,USA,2000,Progressive
642,Scale The Summit,111,2004,USA,-,"Progressive,Instrumental"
643,Vildhjarta,111,2005,Sweden,2005,"Progressive math,Djent"
644,Blood Stain Child,110,2000,Japan,-,"Extreme power,Trancecore,Melodic death"
645,Gorefest,110,1989,The Netherlands,1989,"Death,Hard rock"
646,Intronaut,110,2004,USA,-,"Post-metal,Atmospheric sludge"
647,Monster Magnet,110,1989,USA,1989,Stoner
648,Sinister,110,1989,The Netherlands,-,Death
649,Impaled Nazarene,109,1990,Finland,1990,"Black,Grindcore,Crust punk"
650,Kiuas,109,2000,Finland,2013,Power
651,While Heaven Wept,109,1989,USA,1989,"Doom,Progressive power"
652,Brymir,108,2006,Finland,-,Extreme folk
653,Celesty,108,1998,Finland,1998,Power
654,Darkseed,108,1992,Germany,-,Gothic
655,Die Apokalyptischen Reiter,108,1995,Germany,1995,"Death,Heavy"
656,Gris,108,2006,Canada,-,Depressive black
657,Orange Goblin,108,1995,United Kingdom,1995,Stoner
658,The Crown,108,1998,Sweden,-,"Death,Thrash"
659,Theocracy,108,2002,USA,2002,Progressive power
660,Violator,108,2002,Brazil,-,Thrash
661,Mechina,107,2004,USA,2004,Industrial death
662,Necrophobic,107,1989,Sweden,-,Death
663,Om,107,2003,USA,2003,"Stoner,Drone doom"
664,Vesania,107,1997,Poland,-,Symphonic black
665,Lifelover,106,2005,Sweden,2005,"Depressive black,Post-punk"
666,The Kovenant,106,1998,Norway,-,Industrial
667,Monstrosity,105,1990,USA,1990,Death
668,Persuader,104,1997,Sweden,-,"Power,Heavy"
669,Razor,104,1984,Canada,1984,Thrash
670,Svartsot,104,2005,Denmark,-,Folk
671,Avatarium,103,2013,Sweden,2013,Doom
672,Caliban,103,1997,Germany,-,Metalcore
673,Graveyard,103,2006,Sweden,2006,"Hard rock,Blues rock"
674,Hail Of Bullets,103,2006,The Netherlands,-,Death
675,Melvins,103,1984,USA,1984,"Sludge,Doom"
676,Oomph!,103,1989,Germany,-,"E,B,M ,Industrial,Industrial rock,Industrial"
677,UnSun,103,2006,Poland,2006,Gothic
678,Vio-lence,103,1985,USA,2005,Thrash
679,Abbath,102,2015,Norway,2015,Black
680,Angelus Apatrida,102,2000,Spain,-,Thrash
681,Blackmore's Night,102,1997,United Kingdom,1997,Folk rock
682,Labyrinth,102,1991,Italy,-,Progressive power
683,Shining (NOR),102,1999,Norway,1999,"Jazz,Experimental,Jazz ,Avantgarde"
684,Steel Panther,102,2000,USA,-,"Glam,Hard rock"
685,Toxik,102,1985,USA,1985,Technical thrash
686,Tsjuder,102,1993,Norway,-,Black
687,Bilocate,101,2003,Jordan,2003,"Blackened death,Death doom,Extreme progressive"
688,Brainstorm,101,1989,Germany,-,Power
689,ColdWorld,101,2005,Germany,2005,Ambient black
690,Forgotten Tomb,101,1999,Italy,-,"Doom,Black,Melodic black"
691,Nasum,101,1993,Sweden,1993,Grindcore
692,Beherit,100,1989,Finland,-,"Black,Ambient"
693,Lord Belial,100,1992,Sweden,1992,Black
694,Marillion,100,1979,United Kingdom,-,Progressive rock
695,Deadlock,99,1997,Germany,1997,"Alternative,Melodic metalcore,Melodic death"
696,Dominia,99,1999,Russia,-,"Symphonic death,Melodic death,Gothic"
697,Lazarus A.D.,99,2005,USA,2005,Thrash
698,Midnattsol,99,2002,Norway,-,"Folk,Gothic"
699,Pathfinder,99,2006,Poland,2006,Symphonic power
700,Skyforger,99,1991,Latvia,-,"Black,Folk"
701,Thurisaz,99,1997,Belgium,1997,"Atmospheric black,Death doom"
702,Altar Of Plagues,98,2006,Ireland,2013,"Black,Post-metal"
703,Angel Witch,98,1977,United Kingdom,1977,"New wave of british heavy,Heavy"
704,Cephalic Carnage,98,1992,USA,-,Grindcore
705,Demon Hunter,98,2000,USA,2000,Metalcore
706,Neurotech,98,2007,Slovenia,-,"Industrial,Symphonic"
707,Thy Light,98,2005,Brazil,2005,Depressive black
708,Abigail Williams,97,2005,USA,-,"Symphonic black,Metalcore,Atmospheric black"
709,Aura Noir,97,1993,Norway,1993,"Black,Thrash"
710,Enforcer,97,2005,Sweden,-,"Heavy,Speed"
711,Hell,97,1982,United Kingdom,1982,"New wave of british heavy,Heavy"
712,Jesu,97,2003,United Kingdom,-,"Drone,Shoegaze ,Post-metal"
713,Obscure Sphinx,97,2008,Poland,2008,"Post-metal,Doom,Sludge"
714,Prong,97,1986,USA,-,"Thrash,Industrial"
715,Earth,96,1990,USA,1990,"Drone doom,Psychedelic rock"
716,Killing Joke,96,1979,United Kingdom,-,"Industrial,Post-,Punk,Darkwave"
717,Mr. Bungle,96,1985,USA,1985,Avantgarde
718,MyGrain,96,2004,Finland,2015,Gothenburg
719,October Falls,96,2001,Finland,2001,"Doom,Folk,Ambient black"
720,Trees Of Eternity,96,2008,Finland,-,Gothic doom
721,Wilderun,96,2012,USA,2012,Symphonic folk
722,Disillusion,95,1994,Germany,-,"Extreme progressive,Progressive"
723,Dreamtale,95,1998,Finland,1998,Power
724,Mushroomhead,95,1993,USA,-,"Alternative,Industrial,Nu"
725,Officium Triste,95,1994,The Netherlands,1994,Death doom
726,Rosetta,95,2003,USA,-,"Post-metal,Sludge"
727,Silencer,95,1995,Sweden,1995,Black
728,Trollfest,95,2004,Norway,-,Folk
729,Varg,95,2005,Germany,2005,"Melodic black,Pagan folk"
730,Angtoria,94,2004,United Kingdom,2011,Symphonic
731,Blackguard,94,2001,Canada,2001,"Gothic,Folk,Power"
732,Dir En Grey,94,1997,Japan,-,Alternative
733,Forest Stream,94,1995,Russia,1995,Doom
734,Morbid Saint,94,1986,USA,-,Thrash
735,Terrorizer,94,1986,USA,1986,"Grindcore,Death"
736,Threat Signal,94,2004,Canada,-,Melodic death
737,Axxis,93,1988,Germany,1988,"Heavy,Power"
738,Carnifex,93,2005,USA,-,Deathcore
739,Eyehategod,93,1988,USA,1988,"Doom,Sludge"
740,Riot V,93,1976,USA,-,"Heavy,Hard rock"
741,Stormwarrior,93,1998,Germany,1998,Power
742,Terra Tenebrosa,93,2009,Sweden,-,"Avantgarde,Ambient"
743,Theatres Des Vampires,93,1994,Italy,1994,"Symphonic black,Gothic"
744,Witchery,93,1997,Sweden,-,Thrash
745,Darkane,92,1998,Sweden,1998,"Death,Thrash"
746,Diabolical Masquerade,92,1993,Sweden,2004,Avantgarde black
747,Gotthard,92,1992,Switzerland,1992,Hard rock
748,Isole,92,1990,Sweden,-,Epic doom
749,Dan Swan�,91,1998,Sweden,1998,Extreme progressive
750,Deeds Of Flesh,91,1993,USA,-,Brutal death
751,Thunderstone,91,2000,Finland,2000,"Power,Heavy"
752,Warning,91,1993,United Kingdom,2009,Epic doom
753,Xerath,91,2007,United Kingdom,2007,Symphonic math
754,40 Watt Sun,90,2009,United Kingdom,-,Doom
755,Allen/Lande,90,2005,USA,2005,Heavy
756,KMFDM,90,1984,Germany,-,"Industrial,Dance"
757,Savage Circus,90,2004,Germany,2004,Power
758,Beseech,89,1992,Sweden,-,Gothic
759,King Of Asgard,89,2008,Sweden,2008,Viking black
760,Machinae Supremacy,89,2000,Sweden,-,Power
761,Pallbearer,89,2008,USA,2008,Doom
762,Ratt,89,1983,USA,-,"Glam,Hard rock"
763,The Absence,89,2002,USA,2002,Melodic death
764,The Project Hate MCMXCIX,89,1998,Sweden,-,Industrial death
765,Voyager,89,1999,Australia,1999,Symphonic progressive
766,Demolition Hammer,88,1986,USA,-,Thrash
767,Entwine,88,1999,Finland,1999,Suomi
768,Kivimets�n Druidi,88,2002,Finland,-,Symphonic folk
769,Mordab,88,2001,Iran,2001,Progressive death
770,Sk�lm�ld,88,2009,Iceland,-,Viking folk
771,Warmen,88,2000,Finland,2000,Progressive power
772,Agent Steel,87,1984,USA,-,"Speed,Thrash"
773,Anata,87,1993,Sweden,1993,Technical death
774,Andromeda,87,1999,Sweden,-,Progressive
775,Brujeria,87,1989,Mexico,1989,"Grindcore,Death"
776,Enthroned,87,1993,Belgium,-,Black
777,Lantl�s,87,2005,Germany,2005,"Atmospheric black,Post-rock"
778,Mnemic,87,1998,Denmark,-,"Industrial,Nu"
779,Penumbra,87,1996,France,1996,Symphonic gothic
780,Veil Of Maya,87,2004,USA,-,Deathcore
781,Augury,86,2001,Canada,2001,Technical death
782,Austere,86,2007,Australia,2010,Depressive black
783,Northern Kings,86,2007,Finland,2007,Symphonic
784,Portal,86,1994,Australia,-,Experimental death
785,Rata Blanca,86,1985,Argentina,1985,"Heavy,Hard rock,Power"
786,To/Die/For,86,1993,Finland,2016,Suomi
787,UFO,85,1969,United Kingdom,1969,"Hard rock,Heavy"
788,Fields Of The Nephilim,84,1984,United Kingdom,-,"Gothic rock,Gothic,Death"
789,Helevorn,84,1999,Spain,1999,Gothic doom
790,Lunatica,84,1998,Switzerland,-,Symphonic power
791,Aenaon,83,2005,Greece,2005,Progressive black
792,At Vance,83,1998,Germany,-,"Heavy,Power"
793,Behexen,83,1994,Finland,1994,Black
794,Holy Grail,83,2008,USA,-,"Heavy,Power"
795,Zonaria,83,2001,Sweden,2001,"Power,Melodic death"
796,Dark The Suns,82,2005,Finland,2013,Gothic
797,Funeral,82,1991,Norway,1991,"Funeral doom,Doom"
798,Hellyeah,82,2006,USA,-,Groove heavy
799,Jag Panzer,82,1981,USA,1981,Us power
800,Mournful Congregation,82,1993,Australia,-,Funeral doom
801,Ragnarok,82,1994,Norway,1994,Black
802,Wodensthrone,82,2005,United Kingdom,2016,Atmospheric black
803,Yob,82,1996,USA,1996,"Doom,Stoner"
804,An Autumn For Crippled Children,81,2008,The Netherlands,-,"Atmospheric black,Post-rock,Shoegaze"
805,Flowing Tears,81,1999,Germany,1999,Gothic
806,Helstar,81,1982,USA,-,"Power,Speed,Thrash"
807,Mezarkabul,81,1987,Turkey,1987,"Heavy,Thrash"
808,The 3rd And The Mortal,81,1992,Norway,2005,"Atmospheric doom,Experimental doom,Jazz rock"
809,Abigor,80,1993,Austria,1993,Black
810,Bonded By Blood,80,2005,USA,-,Thrash
811,Sabbat,80,1985,United Kingdom,1985,Pagan thrash
812,Slash,80,2009,USA,-,"Hard rock,Blues rock"
813,Turmion K�til�t,80,2003,Finland,2003,Industrial
814,Almah,79,2006,Brazil,-,"Power,Heavy"
815,Anciients,79,2010,Canada,2010,Progressive
816,Ark,79,1990,Norway,2011,"Heavy,Progressive"
817,Blindead,79,1999,Poland,1999,"Progressive,Post-metal"
818,Cobalt,79,2003,USA,-,Black
819,Devourment,79,1995,USA,1995,Brutal death
820,Divine Heresy,79,2006,USA,-,Death
821,Gehenna,79,1993,Norway,1993,Black
822,Grim Reaper,79,1979,United Kingdom,1988,"Heavy,New wave of british heavy"
823,Iron Fire,79,1995,Denmark,1995,"Speed,Power,Heavy"
824,Nervecell,79,2000,UAE,-,"Hardcore,Death"
825,Nortt,79,1995,Denmark,1995,"Funeral doom,Black"
826,Versailles,79,2007,Japan,-,"J rock,Power"
827,Ancient Rites,78,1988,Belgium,1988,Viking black
828,Crimfall,78,2007,Finland,-,Symphonic folk
829,Exumer,78,1985,Germany,1985,Thrash
830,Fractal Gates,78,2007,France,-,Melodic death
831,Hirax,78,1984,USA,1984,Thrash
832,Lethian Dreams,78,2002,France,-,Atmospheric doom
833,Mystic Prophecy,78,2000,Germany,2000,Power
834,Stam1na,78,1996,Finland,-,"Alternative thrash,Progressive"
835,Winterfylleth,78,2007,United Kingdom,2007,"Atmospheric black,Pagan black"
836,Abysmal Dawn,77,2003,USA,-,Death
837,Arkan,77,2005,France,2005,"Melodic death,Oriental folk"
838,DGM,77,1994,Italy,-,Progressive
839,Diabulus In Musica,77,2006,Spain,2006,Symphonic
840,Fair To Midland,77,1998,USA,-,"Progressive,Alternative"
841,God Forbid,77,1996,USA,1996,"Melodic thrash,Metalcore"
842,In Solitude,77,2002,Sweden,2015,Heavy
843,Kittie,77,1996,Canada,1996,"Nu,Alternative"
844,Marty Friedman,77,1988,USA,-,"Neoclassical heavy,Progressive"
845,Power Quest,77,2001,United Kingdom,2001,Power
846,Reverend Bizarre,77,1994,Finland,2007,Doom
847,SikTh,77,2001,United Kingdom,2001,"Math,Progressive metalcore"
848,Skinless,77,1992,USA,-,Brutal death
849,Stormtroopers Of Death,77,1985,USA,1985,"Crossover thrash,Hardcore,Punk"
850,The Angelic Process,77,1999,USA,2007,"Drone,Ambient,Shoegaze"
851,Urgehal,77,1992,Norway,1992,Black
852,Armored Saint,76,1982,USA,-,Heavy
853,Brutal Truth,76,1990,USA,1990,Grindcore
854,For My Pain,76,1999,Finland,-,Suomi
855,Madder Mortem,76,1993,Norway,1993,"Avantgarde,Gothic"
856,Mirrorthrone,76,2000,Switzerland,-,Avantgarde
857,Neuraxis,76,1994,Canada,1994,Technical death
858,Thrawsunblat,76,2009,Canada,-,Blackened folk
859,Thulcandra,76,2003,Germany,2003,"Melodic black,Melodic death"
860,Ajattara,75,1996,Finland,2012,Black
861,Aria,75,1985,Russia,1985,Heavy
862,Boris,75,1992,Japan,-,"Drone doom,Psychedelic stoner"
863,Despised Icon,75,2002,Canada,2002,Deathcore
864,Hibria,75,1996,Brazil,-,Heavy
865,Imperanon,75,1999,Finland,1999,"Extreme power,Melodic death"
866,Manilla Road,75,1976,USA,-,"Heavy,Power"
867,Shaman,75,2000,Brazil,2000,Progressive power
868,Vallenfyre,75,2010,United Kingdom,-,Death
869,Alkaloid,74,2014,Germany,2014,Extreme progressive
870,Bloodbound,74,2004,Sweden,-,Heavy
871,Caligula's Horse,74,2011,Australia,2011,"Alternative,Progressive"
872,Damageplan,74,2003,USA,2004,Groove metal
873,Demonaz,74,2007,Norway,2007,Viking black
874,Ektomorf,74,1994,Hungary,-,"Groove thrash,Hardcore"
875,Elis,74,2003,Liechtenstein,2003,Gothic
876,Nocturnus AD,74,1986,USA,-,"Atmospheric death,Technical death"
877,Sarc�fago,74,1985,Brazil,1985,"Black,Thrash,Death"
878,Warrel Dane,74,2007,USA,-,"Gothic,Gothic rock"
879,Whiplash,74,1984,USA,1984,Thrash
880,Beneath The Massacre,73,2004,Canada,-,"Brutal death,Technical death"
881,Blaze Bayley,73,2007,United Kingdom,2007,Heavy
882,Bloodshot Dawn,73,2003,United Kingdom,-,Melodic death
883,Colosseum,73,2006,Finland,2006,Funeral doom
884,Derdian,73,1998,Italy,-,Symphonic power
885,Godgory,73,1992,Sweden,1992,Melodic death
886,Halestorm,73,1998,USA,-,Hard rock
887,Process Of Guilt,73,2002,Portugal,2002,"Doom,Atmospheric sludge"
888,Warlock,73,1983,Germany,1988,Heavy
889,Lumsk,72,2000,Norway,2000,Viking folk
890,MaYaN,72,2010,The Netherlands,-,Melodic death
891,Morgoth,72,1987,Germany,1987,"Death,Industrial"
892,Paradox,72,1986,Germany,-,Thrash
893,Rebellion,72,2001,Germany,2001,"Heavy,Power"
894,Ufomammut,72,1999,Italy,-,"Doom,Stoner"
895,As Blood Runs Black,71,2003,USA,2003,Deathcore
896,Astral Doors,71,2002,Sweden,-,Heavy
897,Babymetal,71,2010,Japan,2010,"J-,Pop,Melodic death"
898,Demilich,71,1990,Finland,-,Progressive death
899,Exhorder,71,1985,USA,1985,"Thrash,Groove thrash"
900,Hatesphere,71,1993,Denmark,-,"Death,Thrash"
901,Iron Mask,71,2002,Belgium,2002,Power
902,Martyr,71,1994,Canada,-,Technical death
903,Mistur,71,2005,Norway,2005,"Black,Viking folk"
904,Raintime,71,1999,Italy,2012,"Progressive,Extreme power"
905,Sevendust,71,1994,USA,1994,"Nu,Alternative"
906,Amaseffer,70,2004,Israel,-,"Progressive,Oriental folk"
907,Ancient,70,1992,Norway,1992,Melodic black
908,Darkwater,70,2003,Sweden,-,Melodic progressive
909,Dornenreich,70,1996,Austria,1996,"Melodic black,Acoustic rock,Ambient"
910,Opera IX,70,1988,Italy,-,"Symphonic black,Black,Folk"
911,Trouble,70,1979,USA,1979,"Doom,Psychedelic doom"
912,Andre Matos,69,2006,Brazil,-,Power
913,Conception,69,1989,Norway,1989,"Thrash,Progressive,Power"
914,Diablo,69,1995,Finland,-,"Melodic death,Progressive,Groove thrash"
915,Illdisposed,69,1991,Denmark,1991,Death
916,Rotten Sound,69,1993,Finland,-,Grindcore
917,WarCry,69,2001,Spain,2001,Power
918,Winds Of Plague,69,2002,USA,-,"Deathcore,Symphonic"
919,Bethlehem,68,1991,Germany,1991,"Black,Gothic rock"
920,Civil War,68,2012,Sweden,-,"Heavy,Power"
921,Darzamat,68,1995,Poland,1995,"Symphonic black,Gothic"
922,Freak Kitchen,68,1992,Sweden,-,"Melodic hard rock,Progressive hard rock"
923,Krypteria,68,2004,Germany,2004,Symphonic gothic
924,Nemesea,68,2002,The Netherlands,-,"Symphonic gothic,Gothic rock"
925,Pretty Maids,68,1981,Denmark,1981,Heavy
926,Psychotic Waltz,68,1985,USA,-,Progressive
927,Satan,68,1979,United Kingdom,1979,"New wave of british heavy,Thrash,Heavy"
928,Astarte,67,1995,Greece,2014,Black
929,Beyond Twilight,67,1992,Denmark,1992,Progressive
930,Cinderella,67,1982,USA,-,Glam
931,Coal Chamber,67,1994,USA,1994,Nu
932,Cor Scorpii,67,2004,Norway,-,Black
933,Cormorant,67,2007,USA,2007,"Melodic death,Progressive"
934,Cult Of Fire,67,2010,Czech Republic,-,Black
935,Dew-Scented,67,1992,Germany,1992,"Death,Thrash"
936,Nocturnal Depression,67,2004,France,-,Depressive black
937,The Cult,67,1983,United Kingdom,1983,"Heavy,Hard rock,Gothic rock"
938,The Fall Of Every Season,67,2004,Norway,-,Atmospheric doom
939,Tierra Santa,67,1997,Spain,1997,"Heavy,Power"
940,After The Burial,66,2004,USA,-,"Progressive deathcore,Metalcore"
941,Secrets Of The Moon,66,1995,Germany,1995,Black
942,Thy Art Is Murder,66,2006,Australia,-,Technical deathcore
943,Arckanum,65,1992,Sweden,1992,Black
944,Elysion,65,2006,Greece,-,Symphonic gothic
945,Ereb Altor,65,2003,Sweden,2003,"Doom,Pagan black"
946,Jason Becker,65,1988,USA,-,"Neoclassical heavy,Progressive"
947,Jungle Rot,65,1994,USA,1994,Death
948,Remembrance,65,2004,France,-,"Funeral doom,Death doom"
949,To-Mera,65,2005,United Kingdom,2005,Symphonic progressive
950,Wolverine,65,1995,Sweden,-,"Melodic death,Progressive"
951,Batushka,64,2015,Poland,2015,"Black,Doom"
952,Black Tide,64,2004,USA,-,Heavy
953,Bucovina,64,2000,Romania,2000,Folk
954,Gary Moore,64,1970,Ireland,2011,"Hard rock,Blues rock,Heavy"
955,Myrkgrav,64,2003,"Norway, Finland",2003,"Black,Folk"
956,Newsted,64,2012,USA,2013,Heavy
957,Panopticon,64,2007,USA,2007,Atmospheric black
958,Savage Messiah,64,2007,United Kingdom,-,Thrash
959,Sear Bliss,64,1993,Hungary,1993,Black
960,Wizard,64,1989,Germany,-,Power
961,Amiensus,63,2010,USA,2010,"Melodic black,Progressive"
962,Brain Drill,63,2005,USA,-,"Technical death,Grindcore"
963,Cacophony,63,1986,USA,1986,"Neoclassical power,Progressive"
964,Desire,63,1992,Portugal,2015,Doom
965,Hacride,63,2001,France,2001,"Progressive death,Alternative,Progressive"
966,Horna,63,1993,Finland,-,Black
967,Ill Ni�o,63,1999,USA,1999,Nu
968,Killer Be Killed,63,2011,USA,-,Groove metal
969,Massacre,63,1984,USA,1984,Death
970,Mekong Delta,63,1985,Germany,-,Progressive thrash
971,Royal Thunder,63,2006,USA,2006,"Heavy,Stoner"
972,Symfonia,63,2010,Finland,2011,Power
973,The Monolith Deathcult,63,2002,The Netherlands,2002,"Death,Atmospheric death,Brutal death"
974,Throes Of Dawn,63,1994,Finland,-,"Extreme symphonic,Gothic"
975,Adrenaline Mob,62,2011,USA,2011,Heavy
976,Black Crown Initiate,62,2013,USA,-,Progressive death
977,Defeated Sanity,62,1994,Germany,1994,Brutal death
978,Desaster,62,1988,Germany,-,Blackened thrash
979,Falloch,62,2010,United Kingdom,2010,"Folk,Post-,Rock"
980,Loudness,62,1981,Japan,-,"Hard rock,Heavy"
981,Subrosa,62,2005,USA,2005,Sludge
982,Swashbuckle,62,2005,USA,-,Thrash
983,The Human Abstract,62,2004,USA,2004,Progressive metalcore
984,XIV Dark Centuries,62,1998,Germany,-,Viking folk
985,Year Of No Light,62,2001,France,2001,Atmospheric sludge
986,Angel Dust,61,1984,Germany,2011,"Thrash,Power"
987,Battlecross,61,2003,USA,2003,"Melodic death,Thrash"
988,Cannabis Corpse,61,2006,USA,-,Death
989,Clouds,61,2013,,2013,Atmospheric doom
990,Dagoba,61,2000,France,-,"Industrial thrash,Groove thrash"
991,God Seed,61,2009,Norway,2009,Black
992,Heathen Foray,61,2005,Austria,-,"Viking folk,Pagan folk"
993,Midnight Odyssey,61,2007,Australia,2007,"Atmospheric black,Ambient black"
994,Powerglove,61,2005,USA,-,Instrumental power
995,Racer X,61,1985,USA,1985,Heavy
996,Slough Feg,61,2005,USA,-,Heavy
997,Thorns,61,1989,Norway,1989,Industrial black
998,Tuatha De Danann,61,1995,Brazil,-,Celtic folk
999,White Wizzard,61,2007,USA,2007,Heavy
1000,Xanthochroid,61,2005,USA,-,"Melodic black,Progressive black"
1001,Xentrix,61,1985,United Kingdom,1985,Thrash
1002,Avalanch,60,1989,Spain,2012,"Heavy,Power"
1003,Circle II Circle,60,2001,USA,2001,"Progressive power,Progressive heavy"
1004,Dawn Of Tears,60,1999,Spain,-,Melodic death
1005,Exciter,60,1978,Canada,1978,"Speed,Thrash"
1006,Lich King,60,2004,USA,-,Thrash
1007,Nails,60,2007,USA,2007,"Grindcore,Hardcore,Punk"
1008,Stolen Babies,60,1997,USA,-,"Extreme avantgarde,Dark cabaret"
1009,Stryper,60,1982,USA,1982,"Heavy,Glam"
1010,Susperia,60,1998,Norway,-,"Blackened thrash,Melodic death,Thrash"
1011,Urfaust,60,2003,The Netherlands,2003,Black
1012,Blood Ceremony,59,2006,Canada,-,Psychedelic doom
1013,Exivious,59,1997,The Netherlands,1997,"Progressive,Fusion,Instrumental"
1014,Forever Storm,59,2006,Serbia,-,"Heavy,Power"
1015,Kroda,59,2003,Ukraine,2003,"Black,Pagan folk"
1016,Kypck,59,2007,Finland,-,Doom
1017,Northland,59,2004,Spain,2004,"Extreme folk,Melodic death"
1018,Raven,59,1974,"United Kingdom, USA",-,"New wave of british heavy,Heavy"
1019,The Gentle Storm,59,2014,The Netherlands,2014,"Symphonic progressive,Acoustic,Folk"
1020,Void Of Silence,59,1999,Italy,-,Doom
1021,B�lzer,58,2008,Switzerland,2008,"Black,Death"
1022,Bleeding Through,58,1999,USA,2014,Metalcore
1023,D��th,58,2000,USA,2000,"Death,Industrial death,Thrash"
1024,D�dheimsgard,58,1994,Norway,-,"Black,Avantgarde black,Industrial black"
1025,Funeral Mist,58,1993,Sweden,1993,Black
1026,Holy Moses,58,1980,Germany,-,Thrash
1027,Lurker Of Chalice,58,2001,USA,2001,Ambient black
1028,Lustre,58,2008,Sweden,-,Atmospheric black
1029,Neaera,58,2003,Germany,2003,"Melodic death,Metalcore"
1030,Nightfall,58,1991,Greece,-,Melodic death
1031,Pantheist,58,2000,"Belgium, United Kingdom",2000,Funeral doom
1032,Revolution Renaissance,58,2008,Finland,2010,"Heavy,Power"
1033,Rigor Mortis,58,1983,USA,1983,"Speed,Thrash"
1034,Scarab,58,2001,Egypt,-,Brutal death
1035,Severe Torture,58,1997,The Netherlands,1997,"Brutal death,Death"
1036,The Great Old Ones,58,2009,France,-,"Atmospheric black,Ambient"
1037,Tvangeste,58,1996,"Russia, Canada",1996,Symphonic black
1038,Wisdom,58,2001,Hungary,-,Power
1039,Witchfinder General,58,1979,United Kingdom,1979,"New wave of british heavy,Heavy,Doom"
1040,Words Of Farewell,58,2007,Germany,-,Melodic death
1041,Aeternam,57,2007,Canada,2007,Melodic death
1042,Agrypnie,57,2004,Germany,-,"Melodic black,Post-metal"
1043,Alchemist,57,1987,Australia,1987,Progressive
1044,Architects,57,2004,United Kingdom,-,"Math,Hardcore,Metalcore"
1045,Avatar,57,2001,Sweden,2001,"Melodic death,Nu"
1046,Conquering Dystopia,57,2013,USA,-,Progressive
1047,Dark Age,57,1994,Germany,1994,"Gothenburg,Metalcore"
1048,Devil Doll,57,1987,Slovenia,-,"Progressive rock,Symphonic rock"
1049,Guilt Machine,57,2009,The Netherlands,2009,Progressive
1050,ICS Vortex,57,2011,Norway,-,Progressive
1051,Isengard,57,1989,Norway,1989,"Black,Folk"
1052,Mithotyn,57,1992,Sweden,1999,"Black,Folk"
1053,Saratoga,57,1992,Spain,1992,"Heavy,Power"
1054,Sargeist,57,1999,Finland,-,Black
1055,Secret Sphere,57,1997,Italy,1997,Power
1056,Sieges Even,57,1986,Germany,2008,Progressive
1057,Silentium,57,1995,Finland,1995,"Gothic,Doom"
1058,Tesla,57,1984,USA,-,Hard rock
1059,Twilightning,57,1998,Finland,1998,"Power,Heavy,Hard rock"
1060,Vanishing Point,57,1997,Australia,-,"Progressive,Symphonic power"
1061,Watchtower,57,1982,USA,1982,Progressive thrash
1062,Wolf,57,1995,Sweden,-,Heavy
1063,Asking Alexandria,56,2008,United Kingdom,2008,"Metalcore,Trancecore"
1064,Dawn Of Solace,56,2006,Finland,2013,"Doom,Gothic"
1065,Dimension Zero,56,1995,Sweden,1995,Gothenburg
1066,Hardcore Superstar,56,1997,Sweden,-,"Glam rock,Glam"
1067,Krallice,56,2007,USA,2007,Black
1068,Mortemia,56,2009,Norway,-,Symphonic gothic
1069,Siebenb�rgen,56,1994,Sweden,1994,Melodic black
1070,Avulsed,55,1991,Spain,-,Brutal death
1071,Debauchery,55,2000,Germany,2000,Death
1072,Kronos,55,1994,France,-,"Heavy,Death,Thrash"
1073,Lost Soul,55,1990,Poland,1990,Technical death
1074,Lunar Aurora,55,1994,Germany,2012,Black
1075,Planet X,55,1999,USA,1999,"Progressive,Fusion"
1076,Silent Stream Of Godless Elegy,55,1995,Czech Republic,-,"Doom,Folk"
1077,Soulfallen,55,2003,Finland,2003,"Symphonic,Melodic death"
1078,Twilight Force,55,2011,Sweden,-,"Power,Symphonic"
1079,Winds,55,1998,Norway,1998,"Avantgarde,Progressive,Symphonic"
1080,Axenstar,54,1998,Sweden,-,Power
1081,Black Messiah,54,1994,Germany,1994,"Symphonic black,Pagan folk"
1082,Der Weg Einer Freiheit,54,2009,Germany,-,Black
1083,Eisbrecher,54,2002,Germany,2002,Industrial
1084,Gnaw Their Tongues,54,2005,The Netherlands,-,"Experimental black,Noise,Drone"
1085,Impellitteri,54,1987,USA,1987,Heavy
1086,Judas Iscariot,54,1992,USA,2002,Black
1087,Keldian,54,2005,Norway,2005,"Symphonic power,Adult,Oriented rock"
1088,Menhir,54,1995,Germany,-,Viking black
1089,Myrkur,54,2013,Denmark,2013,Black
1090,Nifelheim,54,1990,Sweden,-,"Black,Speed"
1091,Scars On Broadway,54,2005,USA,2005,"Alternative,Hard rock"
1092,Schammasch,54,2009,Switzerland,-,"Black,Death"
1093,The Devil's Blood,54,2007,The Netherlands,2007,Hard rock
1094,Uneven Structure,54,2008,France,-,"Djent,Ambient"
1095,Wyrd,54,1997,Finland,1997,"Black,Folk"
1096,Cerebral Bore,53,2006,United Kingdom,-,Brutal death
1097,Dark Empire,53,2004,USA,2004,Progressive power
1098,Dragged Into Sunlight,53,2006,United Kingdom,-,"Blackened sludge,Death"
1099,Hanging Garden,53,2004,Finland,2004,Death doom
1100,Hexen,53,2003,USA,-,Thrash
1101,Kingcrow,53,1996,Italy,1996,"Heavy,Progressive"
1102,Mob Rules,53,1994,Germany,-,Power
1103,Quiet Riot,53,1973,USA,1973,"Glam,Hard rock,Heavy"
1104,Subway To Sally,53,1992,Germany,-,"Industrial heavy,Medieval folk"
1105,Wolfmother,53,2004,Australia,2004,Hard rock
1106,!T.O.O.H.!,52,1990,Czech Republic,2013,"Technical death,Progressive grindcore"
1107,Agoraphobic Nosebleed,52,1994,USA,1994,Grindcore
1108,Akphaezya,52,2002,France,-,Avantgarde
1109,Anacrusis,52,1986,USA,1986,Progressive thrash
1110,Cadaveria,52,2001,Italy,-,"Avantgarde,Symphonic"
1111,Deadsoul Tribe,52,2000,Austria,2000,Progressive
1112,Dolorian,52,1997,Finland,-,"Black,Doom"
1113,Glorior Belli,52,2002,France,2002,"Black,Sludge"
1114,Hypno5e,52,2003,France,-,"Experimental progressive,Math,Metalcore"
1115,Silent Force,52,1999,Germany,1999,Progressive power
1116,Ter�sbetoni,52,2003,Finland,-,"Power,Hard rock"
1117,The Meads Of Asphodel,52,1998,United Kingdom,1998,Experimental black
1118,The Unguided,52,2010,Sweden,-,Melodic death
1119,Todtgelichter,52,2002,Germany,2002,"Black,Avantgarde"
1120,Torture Killer,52,2002,Finland,-,Death
1121,Unleash The Archers,52,2007,Canada,2007,"Heavy,Power"
1122,Vallendusk,52,2011,Indonesia,-,Atmospheric black
1123,Acrassicauda,51,2001,"Iraq, USA",2001,Thrash
1124,Aina,51,2003,The Netherlands,-,Progressive power
1125,Klimt 1918,51,1999,Italy,1999,"Gothic,Atmospheric rock"
1126,Lyriel,51,2003,Germany,-,Folk
1127,Monolithe,51,2001,France,2001,Doom
1128,Mortician,51,1989,USA,-,Deathgrind
1129,SIG:AR:TYR,51,2003,Canada,2003,Blackened folk
1130,Skiltron,51,2004,Argentina,-,Folk
1131,Azarath,50,1998,Poland,1998,Blackened death
1132,Chrome Division,50,2004,Norway,-,Heavy
1133,DoomSword,50,1997,Italy,1997,Doom
1134,Folkearth,50,2004,Lithuania,-,Folk
1135,Indukti,50,2001,Poland,2001,"Progressive,Progressive rock"
1136,Kontinuum,50,2001,Iceland,-,"Death doom,Post-metal"
1137,Luca Turilli's Dreamquest,50,2005,Italy,2005,Electronic symphonic
1138,Nagelfar,50,1993,Germany,2002,Black
1139,Pagan Altar,50,1978,United Kingdom,1978,Doom
1140,ShamRain,50,2000,Finland,-,Gothic
1141,Slugdge,50,2012,United Kingdom,2012,"Blackened death,Sludge"
1142,The Duskfall,50,1999,Sweden,-,Melodic death
1143,Triosphere,50,2004,Norway,2004,"Progressive,Power"
1144,Acid Drinkers,49,1986,Poland,-,"Crossover thrash,Groove thrash"
1145,Black Majesty,49,2002,Australia,2002,Power
1146,Cloudkicker,49,2005,USA,-,"Progressive,Instrumental"
1147,Dead Congregation,49,2004,Greece,2004,Death
1148,Demonical,49,2006,Sweden,-,Death
1149,Manticora,49,1996,Denmark,1996,Progressive power
1150,Metalium,49,1999,Germany,2011,Power
1151,Ov Hell,49,2009,Norway,2009,Black
1152,Tank,49,1980,United Kingdom,-,"New wave of british heavy,Heavy"
1153,Tengger Cavalry,49,2010,China,2010,"Melodic death,Folk"
1154,Abominable Putridity,48,2003,Russia,-,Brutal death
1155,Alkonost,48,1995,Russia,1995,Pagan folk
1156,Arsames,48,2002,Iran,-,"Death,Thrash"
1157,Autumn,48,1995,The Netherlands,1995,"Gothic,Symphonic rock,Symphonic"
1158,Disembowelment,48,1989,Australia,1993,Death doom
1159,Dragonlord,48,2000,USA,2000,Symphonic black
1160,Ephel Duath,48,1998,Italy,2014,"Progressive black,Avantgarde"
1161,Fant�mas,48,1998,USA,1998,Avantgarde
1162,Jon Oliva's Pain,48,2003,USA,-,Progressive
1163,Kotipelto,48,2002,Finland,2002,Power
1164,Macbeth,48,1995,Italy,-,Gothic
1165,Magica,48,2002,Romania,2002,Symphonic power
1166,Majesty,48,1997,Germany,-,"Heavy,Power"
1167,Mortal Sin,48,1985,Australia,1985,Thrash
1168,Skyharbor,48,2009,India,-,"Progressive math,Djent"
1169,Sleepytime Gorilla Museum,48,1999,USA,1999,"Avantgarde,Avantgarde rock"
1170,The Berzerker,48,1995,Australia,2010,"Industrial grindcore,Death"
1171,Becoming The Archetype,47,1999,USA,1999,Progressive metalcore
1172,Cancer,47,1987,United Kingdom,-,"Death,Thrash"
1173,Chelsea Grin,47,2007,USA,2007,Deathcore
1174,Entrails,47,1990,Sweden,-,Death
1175,Lux Occulta,47,1994,Poland,1994,"Atmospheric black,Avantgarde black,Extreme avantgarde"
1176,Noctem,47,2001,Spain,-,"Melodic black,Death"
1177,Ophis,47,2001,Germany,2001,Death doom
1178,Skull Fist,47,2006,Canada,-,"Heavy,Speed"
1179,Tourniquet,47,1990,USA,1990,Thrash
1180,Tracedawn,47,2005,Finland,-,Melodic death
1181,Aeternus,46,1993,Norway,1993,Blackened death
1182,Aghora,46,1995,USA,-,Progressive
1183,Alghazanth,46,1995,Finland,1995,Symphonic black
1184,Anterior,46,2003,United Kingdom,2012,Metalcore
1185,Arjen Anthony Lucassen,46,1980,The Netherlands,1980,Progressive rock
1186,Dark Suns,46,1997,Germany,-,"Progressive death,Extreme progressive,Progressive,Progressive rock"
1187,Imperium Dekadenz,46,2004,Germany,2004,Black
1188,Lock Up,46,1998,United Kingdom,-,"Death,Grindcore"
1189,Miseration,46,2006,Sweden,2006,Death
1190,Pens�es Nocturnes,46,2009,France,-,"Depressive black,Neoclassical"
1191,Raunchy,46,1994,Denmark,1994,"Alternative,Industrial,Melodic death"
1192,ReinXeed,46,2002,Sweden,-,Power
1193,Sulphur Aeon,46,2010,Germany,2010,Death
1194,The Man-Eating Tree,46,2009,Finland,-,Suomi
1195,Thy Majestie,46,1998,Italy,1998,Symphonic power
1196,Transcending Bizarre?,46,2000,Greece,-,"Avantgarde,Symphonic black"
1197,Ved Buens Ende,46,1994,Norway,1994,"Black,Avantgarde"
1198,Warlord,46,1980,USA,-,Heavy
1199,Ava Inferi,45,2005,Portugal,2005,Gothic doom
1200,Before The Rain,45,1997,Portugal,-,Death doom
1201,ETHS,45,1999,France,1999,"Nu,Metalcore"
1202,Euphoreon,45,2009,New Zealand,-,Extreme power
1203,Extol,45,1993,Norway,1993,"Progressive death,Extreme progressive"
1204,Feared,45,2007,Sweden,-,Progressive death
1205,Harakiri For The Sky,45,2011,Austria,2011,"Black,Post-metal"
1206,Impending Doom,45,2005,USA,-,Deathcore
1207,Lord Mantis,45,2008,USA,2008,Blackened sludge
1208,Macabre,45,1985,USA,-,"Grindcore,Death"
1209,Mutiny Within,45,2002,USA,2002,"Progressive metalcore,Extreme power"
1210,Pink Cream 69,45,1987,Germany,-,"Melodic hard rock,Heavy"
1211,Repulsion,45,1985,USA,1985,Grindcore
1212,Rishloo,45,2002,USA,-,"Alternative,Progressive"
1213,Timeless Miracle,45,2001,Sweden,2001,Power
1214,Universum,45,2006,Australia,-,Gothenburg
1215,Archgoat,44,1989,Finland,1989,"Black,Death"
1216,Archspire,44,2007,Canada,-,Technical death
1217,Disgorge,44,1992,USA,1992,Brutal death
1218,Engel,44,2004,Sweden,-,Modern gothenburg
1219,Entombed A.D.,44,2014,Sweden,2014,Death
1220,Hannes Grossmann,44,2013,Germany,-,"Progressive death,Technical death"
1221,Impaled,44,1997,USA,1997,"Deathgrind,Goregrind ,Death"
1222,Lindemann,44,2015,Germany,-,Industrial
1223,Shylmagoghnar,44,2004,The Netherlands,2004,"Atmospheric black,Progressive black,Melodic death"
1224,The Old Dead Tree,44,1997,France,-,Gothic
1225,Waylander,44,1993,United Kingdom,1993,Celtic folk
1226,Zero Hour,44,1993,USA,2008,Progressive
1227,Abyssal,43,2011,United Kingdom,2011,Blackened death
1228,Amenra,43,2003,Belgium,-,"Doom,Sludge,Hardcore"
1229,Antestor,43,1990,Norway,1990,"Death doom,Black,Symphonic black"
1230,Ataraxie,43,2000,France,-,"Death,Funeral doom"
1231,Black Tusk,43,2005,USA,2005,"Sludge,Hardcore,Punk"
1232,Deceased,43,1985,USA,-,"Death,Thrash,Heavy"
1233,Dionysus,43,1999,Sweden,1999,Melodic power
1234,Elysian Blaze,43,2003,Australia,-,"Atmospheric black,Funeral doom"
1235,Enthrope,43,2006,Finland,2006,Melodic death
1236,Horrendous,43,2009,USA,-,Death
1237,Imperia,43,2003,Norway,2003,"Symphonic,Gothic"
1238,Infestus,43,2003,Germany,-,Black
1239,Jolly,43,2008,USA,2008,Progressive
1240,Kromlek,43,2004,Germany,2012,Pagan folk
1241,Lost Society,43,2010,Finland,2010,Thrash
1242,Master,43,1983,USA,-,Death
1243,Morgana Lefay,43,1986,Sweden,1986,Power
1244,Sacramentum,43,1990,Sweden,2001,"Black,Death"
1245,Skindred,43,1999,United Kingdom,1999,"Nu,Alternative,Ragga"
1246,Starkill,43,2012,USA,-,Melodic death
1247,Virus,43,2000,Norway,2000,Avantgarde
1248,Atrocity,42,1985,Germany,-,"Death,Gothic industrial"
1249,Borealis,42,2005,Canada,2005,Power
1250,Cancer Bats,42,2004,Canada,-,"Hardcore,Metalcore,Punk"
1251,Charred Walls Of The Damned,42,2009,USA,2009,"Us power,Thrash"
1252,Clawfinger,42,1990,Sweden,-,"Alternative,Nu"
1253,Crimson Shadows,42,2006,Canada,2006,Extreme power
1254,Degradead,42,2006,Sweden,-,Gothenburg
1255,Demonic Resurrection,42,2000,India,2000,"Death,Symphonic,Blackened death"
1256,Echoes Of Eternity,42,2005,USA,-,Symphonic progressive
1257,Evocation,42,1991,Sweden,1991,Death
1258,Galadriel,42,1995,Slovak Republic,-,Symphonic doom
1259,Helrunar,42,2001,Germany,2001,Black
1260,Hooded Menace,42,2007,Finland,-,Death doom
1261,Ikuinen Kaamos,42,1997,Finland,1997,"Black,Death doom,Progressive death"
1262,Kat,42,1979,Poland,-,"Heavy,Speed,Thrash"
1263,Klone,42,1999,France,1999,"Alternative,Progressive"
1264,Magic Kingdom,42,1998,Belgium,-,Power
1265,Maximum The Hormone,42,1998,Japan,1998,"Alternative,Hardcore,Punk"
1266,Mouth Of The Architect,42,2003,USA,-,"Atmospheric sludge,Post-metal"
1267,Nadja,42,2002,Canada,2002,"Ambient,Drone ,Doom"
1268,Nocte Obducta,42,1995,Germany,-,"Black,Progressive black,Avantgarde black"
1269,Otyg,42,1995,Sweden,1995,Folk
1270,Setherial,42,1993,Sweden,-,Black
1271,Skogen,42,2009,Sweden,2009,Black
1272,SOiL,42,1997,USA,-,"Hard rock,Grunge"
1273,Timo Tolkki's Avalon,42,2012,Finland,2012,"Power,Symphonic"
1274,Unanimated,42,1988,Sweden,-,Melodic death
1275,Vicious Rumors,42,1980,USA,1980,Us power
1276,36 Crazyfists,41,1994,USA,-,"Alternative,Metalcore,Melodic metalcore"
1277,Acid Witch,41,2007,USA,2007,Death doom
1278,Carnivore,41,1982,USA,2010,"Crossover thrash,Hardcore,Punk"
1279,Craft,41,1994,Sweden,1994,Black
1280,Dark Forest,41,2003,Canada,-,Viking black
1281,Darkestrah,41,1999,"Kyrgyzstan, Germany",1999,Pagan black
1282,Excalion,41,2000,Finland,-,Power
1283,Fleshcrawl,41,1987,Germany,1987,Death
1284,Heljareyga,41,2009,Faroe Islands,-,Progressive
1285,Mithras,41,1998,United Kingdom,1998,"Atmospheric death,Brutal death"
1286,Necrophagia,41,1983,USA,-,Death
1287,Pathology,41,2006,USA,2006,Brutal death
1288,Peccatum,41,1998,Norway,2006,Avantgarde
1289,Saint Deamon,41,2006,Sweden,2006,"Heavy,Power"
1290,Saltatio Mortis,41,2000,Germany,-,Medieval folk
1291,Suspyre,41,2001,USA,2001,Progressive
1292,Taranis,41,1999,Hungary,2013,"Symphonic black,Progressive"
1293,Trepalium,41,2000,France,2000,Death
1294,A Pale Horse Named Death,40,2011,USA,-,"Doom,Gothic"
1295,Ablaze In Hatred,40,2004,Finland,2004,"Melodic death,Doom"
1296,Aetherian,40,2013,Greece,-,Melodic death
1297,Alm�ra,40,2001,Turkey,2001,"Power,Folk"
1298,Dreamshade,40,2006,Switzerland,-,Melodic death
1299,Dredg,40,1993,USA,1993,"Alternative,Progressive rock"
1300,Gwydion,40,1995,Portugal,-,Viking folk
1301,Huntress,40,2009,USA,2009,Heavy
1302,Inborn Suffering,40,2002,France,-,"Death,Doom"
1303,Leverage,40,2004,Finland,2004,"Symphonic power,Progressive heavy"
1304,Man Must Die,40,2002,United Kingdom,-,Technical death
1305,Mandragora Scream,40,1997,Italy,1997,Gothic
1306,Mokoma,40,1996,Finland,-,"Grunge rock,Thrash"
1307,Mortal Love,40,2000,Norway,2000,Gothic
1308,Mortiis,40,1993,Norway,-,"Ambient,Darkwave,Gothic industrial"
1309,Sunset In The 12th House,40,2011,Romania,2011,"Post-metal,Post-rock,Psychedelic rock"
1310,Warrant,40,1984,USA,-,Hard rock
1311,Assassin,39,1982,Germany,1982,Thrash
1312,Azaghal,39,1995,Finland,-,Black
1313,Brutality,39,1986,USA,1986,Death
1314,Budgie,39,1967,United Kingdom,-,"Hard rock,Heavy,Progressive rock"
1315,Cauldron,39,2006,Canada,2006,Heavy
1316,Demigod,39,1990,Finland,2008,Death
1317,Dissona,39,2005,USA,2005,"Progressive,Avantgarde"
1318,Ixion,39,2004,France,-,Atmospheric doom
1319,Katra,39,2006,Finland,2006,Symphonic
1320,Nomans Land,39,1996,Russia,-,"Doom,Viking folk,Viking black"
1321,Ondskapt,39,2000,Sweden,2000,Black
1322,Rudra,39,1992,Singapore,-,"Death,Thrash"
1323,Shattered Hope,39,2002,Greece,2002,Death doom
1324,Spastic Ink,39,1993,USA,-,"Progressive,Instrumental"
1325,Wormed,39,1998,Spain,1998,"Brutal death,Grindcore"
1326,Aborym,38,1991,Italy,-,Industrial black
1327,Belenos,38,1995,France,1995,Pagan black
1328,Church Of Misery,38,1995,Japan,-,"Doom,Stoner"
1329,Cirith Ungol,38,1972,USA,1972,"Heavy,Doom"
1330,Crystal Viper,38,2003,Poland,-,Heavy
1331,Darkwell,38,1999,Austria,1999,Gothic
1332,Destinity,38,1996,France,-,"Symphonic black,Melodic death"
1333,Dismal Euphony,38,1992,Norway,1992,"Death,Melodic black"
1334,Divinefire,38,2004,Sweden,-,Power
1335,Domine,38,1983,Italy,1983,Power
1336,Falls Of Rauros,38,2005,USA,-,"Atmospheric black,Neofolk"
1337,Gates Of Ishtar,38,1992,Sweden,1992,Melodic death
1338,Girlschool,38,1975,United Kingdom,-,"New wave of british heavy,Heavy"
1339,Gorgasm,38,1996,USA,1996,Brutal death
1340,Hecate Enthroned,38,1993,United Kingdom,-,"Symphonic black,Blackened death,Melodic black"
1341,Intervals,38,2011,Canada,2011,Progressive
1342,Lita Ford,38,1979,USA,-,"Hard rock,Heavy"
1343,Luna Mortis,38,2008,USA,2008,Melodic death
1344,Morgul,38,1991,Norway,-,Black
1345,Outworld,38,1997,USA,1997,Progressive power
1346,Pomegranate Tiger,38,2008,Canada,-,"Progressive,Instrumental"
1347,Seven Kingdoms,38,2006,USA,2006,Power
1348,Striker,38,2007,Canada,-,"Thrash,Speed"
1349,Uncle Acid & The Deadbeats,38,2009,United Kingdom,2009,"Doom,Psychedelic rock"
1350,Varathron,38,1988,Greece,-,Black
1351,Wormrot,38,2007,Singapore,2007,Grindcore
1352,Yearning,38,1994,Finland,2010,"Symphonic gothic,Atmospheric doom"
1353,Adorned Brood,37,1993,Germany,1993,"Folk,Black"
1354,Ancient Wisdom,37,1992,Sweden,-,Atmospheric black
1355,Burst,37,1993,Sweden,1993,"Progressive metalcore,Hardcore,Post-hardcore ,Post-metal,Progressive sludge"
1356,Demonoid,37,2002,Sweden,-,"Death,Thrash"
1357,Detonation,37,1997,The Netherlands,1997,"Melodic death,Thrash"
1358,Downfall Of Nur,37,2013,Argentina,-,"Atmospheric black,Folk"
1359,Grip Inc.,37,1993,USA,1993,Thrash
1360,Katalepsy,37,2003,Russia,-,Brutal death
1361,Khors,37,2004,Ukraine,2004,Black
1362,Mael M�rdha,37,1998,Ireland,-,Celtic doom
1363,Omen,37,1983,USA,1983,"Heavy,Us power"
1364,On Thorns I Lay,37,1992,Greece,-,"Gothic,Death doom,Doom"
1365,Progenie Terrestre Pura,37,2009,Italy,2009,"Atmospheric black,Industrial black"
1366,Pungent Stench,37,1988,Austria,2007,Death
1367,Steel Attack,37,1995,Sweden,1995,"Heavy,Power"
1368,Superjoint Ritual,37,1993,USA,2004,Sludge
1369,Torchbearer,37,2003,Sweden,2003,"Blackened death,Thrash"
1370,Viikate,37,1996,Finland,-,Melodic heavy
1371,Waltari,37,1986,Finland,1986,"Progressive thrash,Avantgarde,Alternative,Symphonic death,Industrial"
1372,�ther Realm,36,2010,USA,-,"Melodic death,Folk"
1373,...And Oceans,36,1995,Finland,1995,"Symphonic black,Industrial"
1374,Agruss,36,2009,Ukraine,-,"Atmospheric black,Death"
1375,Anal Cunt,36,1988,USA,1988,"Grindcore,Noisecore"
1376,Aquaria,36,1999,Brazil,-,Symphonic power
1377,Arena,36,1995,United Kingdom,1995,Progressive
1378,Broken Hope,36,1988,USA,-,"Death,Goregrind"
1379,Chimp Spanner,36,2004,United Kingdom,2004,"Progressive,Djent,Instrumental"
1380,Crisix,36,2008,Spain,-,Thrash
1381,Draugnim,36,1999,Finland,1999,Pagan black
1382,Fueled By Fire,36,2002,USA,-,Thrash
1383,Hammers Of Misfortune,36,1998,USA,1998,Progressive
1384,Khold,36,2000,Norway,-,Black
1385,Krampus,36,2009,Italy,2009,"Folk,Melodic death"
1386,Krux,36,2002,Sweden,-,Doom
1387,Lunarsea,36,2003,Italy,2003,Melodic death
1388,Mitochondrion,36,2003,Canada,-,"Progressive death,Blackened death"
1389,Monuments,36,2006,United Kingdom,2006,"Progressive math,Djent"
1390,Mortification,36,1990,Australia,-,Death
1391,Nader Sadek,36,2011,USA,2011,Death
1392,Nightmare,36,1979,France,-,"Heavy,Symphonic power"
1393,Paul Wardingham,36,2010,Australia,2010,Progressive math
1394,Protector,36,1986,Germany,-,"Death,Thrash"
1395,Putrid Pile,36,2000,USA,2000,Brutal death
1396,Times Of Grace,36,2007,USA,-,Melodic metalcore
1397,Tombs,36,2007,USA,2007,"Black,Sludge"
1398,Trick Or Treat,36,2002,Italy,-,Power
1399,Tyranny,36,2001,Finland,2001,Funeral doom
1400,Vehemence,36,1997,USA,-,Technical death
1401,Aesma Daeva,35,1998,USA,1998,Symphonic
1402,Altaria,35,1999,Finland,2016,Power
1403,Chevelle,35,1995,USA,1995,"Alternative,Hard rock"
1404,Dirge,35,1994,France,-,"Sludge,Industrial,Atmospheric sludge,Doom"
1405,Estradasphere,35,1998,USA,1998,"Avantgarde,Fusion"
1406,Evereve,35,1993,Germany,-,Atmospheric gothic
1407,Fferyllt,35,2003,Russia,2003,Folk
1408,Inferi,35,2006,USA,-,"Melodic death,Technical death"
1409,Kahtmayan,35,1998,Iran,1998,"Progressive,Thrash,Instrumental"
1410,Kimaera,35,2000,Lebanon,-,Death doom
1411,Korzus,35,1983,Brazil,1983,Thrash
1412,Minsk,35,2002,USA,-,Post-metal
1413,Noekk,35,2004,Germany,2004,Progressive doom
1414,Nyktalgia,35,2001,Germany,2008,Depressive black
1415,Odious Mortem,35,1998,USA,1998,Technical death
1416,Orchid,35,2007,USA,-,Doom
1417,Pan.thy.monium,35,1990,Sweden,1990,"Avantgarde,Progressive death"
1418,Pro-Pain,35,1992,USA,-,"Crossover thrash,Hardcore"
1419,Spectral Lore,35,2005,Greece,2005,"Atmospheric black,Dark ambient"
1420,Steelwing,35,2009,Sweden,-,Heavy
1421,Subsignal,35,2007,Germany,2007,Progressive
1422,Subterranean Masquerade,35,1997,,-,"Progressive,Psychedelic rock"
1423,Walls Of Jericho,35,1998,USA,1998,Metalcore
1424,Abnormality,34,2005,USA,-,"Brutal death,Technical death"
1425,Ambeon,34,2001,The Netherlands,2001,"Progressive,Ambient"
1426,Arafel,34,1997,Israel,-,Melodic black
1427,Ashes Of Ares,34,2012,USA,2012,Heavy
1428,Ashes You Leave,34,1995,Croatia,-,"Doom,Gothic doom"
1429,Atrophy,34,1986,USA,1986,Thrash
1430,Dawn Of Demise,34,2003,Denmark,-,Death
1431,Emptiness,34,1998,Belgium,1998,Blackened death
1432,Ghost Bath,34,2012,USA,-,"Depressive black,Post-metal"
1433,Menace Ruine,34,2006,Canada,2006,"Atmospheric black,Drone doom,Neofolk,Noise"
1434,Prostitute Disfigurement,34,2000,The Netherlands,-,Brutal death
1435,Pythia,34,2007,United Kingdom,2007,Symphonic power
1436,Sadist,34,1991,Italy,-,Progressive death
1437,Shaolin Death Squad,34,2001,USA,2001,"Progressive,Avantgarde"
1438,Storm,34,1993,Norway,1995,Blackened folk
1439,Tad Morose,34,1991,Sweden,1991,Progressive power
1440,Torture Squad,34,1990,Brazil,-,"Death,Thrash"
1441,Tygers Of Pan Tang,34,1978,United Kingdom,1978,"New wave of british heavy,Heavy"
1442,White Skull,34,1988,Italy,-,Power
1443,Acid King,33,1993,USA,1993,Stoner
1444,Age Of Silence,33,2004,Norway,-,Avantgarde
1445,Antaeus,33,1994,France,1994,Black
1446,Aosoth,33,2002,France,-,Black
1447,Artrosis,33,1995,Poland,1995,Gothic
1448,Beyond The Black,33,2014,Germany,-,Symphonic
1449,Butterfly Temple,33,1995,Russia,1995,Pagan folk
1450,Callisto,33,2001,Finland,-,Post-metal
1451,Eye Of Solitude,33,2010,United Kingdom,2010,Death doom
1452,Falchion,33,2002,Finland,2009,"Melodic death,Folk"
1453,Fjoergyn,33,2003,Germany,2003,"Folk,Symphonic"
1454,Funeralium,33,2003,France,-,Funeral doom
1455,InnerWish,33,1995,Greece,1995,Power
1456,Kalevala,33,2007,Russia,-,Folk
1457,Life Of Agony,33,1989,USA,1989,"Hardcore,Alternative,Grunge"
1458,Loits,33,1996,Estonia,-,Black
1459,Manes,33,1993,Norway,1993,"Black,Electro avantgarde"
1460,Mis�yrming,33,2013,Iceland,-,Black
1461,Morgion,33,1990,USA,1990,"Death,Doom"
1462,Obsidian Kingdom,33,2005,Spain,-,Extreme progressive
1463,Olympos Mons,33,2002,Finland,2002,Power
1464,Slaughter,33,1984,Canada,1990,"Death,Thrash"
1465,Spineshank,33,1996,USA,1996,"Industrial,Nu"
1466,Sunburst,33,2010,Greece,-,"Progressive,Power"
1467,The 11th Hour,33,2008,The Netherlands,2008,Doom
1468,The Exploited,33,1979,United Kingdom,-,"Hardcore,Crossover thrash,Punk"
1469,Thergothon,33,1990,Finland,1990,Funeral doom
1470,Torche,33,2004,USA,-,"Stoner,Sludge"
1471,Viathyn,33,2006,Canada,2006,Progressive power
1472,Weeping Silence,33,1998,Malta,-,"Gothic,Doom"
1473,Whyzdom,33,2007,France,2007,Symphonic
1474,�smegin,32,1998,Norway,-,Viking folk
1475,Arthemesia,32,1994,Finland,1994,Melodic black
1476,Botanist,32,2009,USA,-,Experimental black
1477,Coffins,32,1996,Japan,1996,Death
1478,Crashd�et,32,2000,Sweden,-,Glam
1479,Cryptic Wintermoon,32,1993,Germany,1993,"Symphonic black,Thrash"
1480,Dawn Of Destiny,32,2005,Germany,-,Power
1481,Deals Death,32,2008,Sweden,2008,Gothenburg
1482,Elder,32,2006,USA,-,"Psychedelic rock,Stoner"
1483,Enslavement Of Beauty,32,1995,Norway,1995,"Melodic black,Gothic"
1484,Ghoul,32,2001,USA,-,"Death,Thrash"
1485,Hamfer�,32,2008,Faroe Islands,2008,Doom
1486,Heavens Gate,32,1987,Germany,1999,Heavy
1487,Megaherz,32,1993,Germany,1993,"Industrial,Alternative"
1488,Michael Angelo Batio,32,1993,USA,-,"Neoclassical heavy,Instrumental hard rock"
1489,Nanowar Of Steel,32,2003,Italy,2003,"Heavy,Power"
1490,Narnia,32,1996,Sweden,-,Power
1491,Native Construct,32,2011,USA,2011,Progressive
1492,Nox Aurea,32,2005,Sweden,-,"Melodic death,Doom"
1493,Raventale,32,2005,Ukraine,2005,"Atmospheric black,Doom"
1494,Sinner,32,1980,Germany,-,Heavy
1495,SpellBlast,32,1999,Italy,1999,"Folk,Power"
1496,Spiral Architect,32,1993,Norway,-,Technical progressive
1497,Three,32,1994,USA,1994,Progressive rock
1498,Windhand,32,2008,USA,-,"Doom,Stoner"
1499,Amoral,31,1997,Finland,1997,"Technical death,Power,Death,Thrash"
1500,Blind Stare,31,1999,Finland,-,"Melodic death,Extreme power"
1501,Coffinworm,31,2007,USA,2007,"Blackened sludge,Doom"
1502,Crucified Barbara,31,1998,Sweden,2016,"Hard rock,Heavy"
1503,Desultory,31,1989,Sweden,1989,Death
1504,Devian,31,2006,Sweden,2011,"Black,Death"
1505,Dreadnought,31,2012,USA,2012,"Black,Folk,Progressive"
1506,Endstille,31,2000,Germany,-,Black
1507,Faithful Darkness,31,2004,Sweden,2004,Gothenburg
1508,Forest Silence,31,1997,Hungary,-,"Dark,Ambient,Atmospheric black"
1509,Helheim,31,1992,Norway,1992,Viking black
1510,Human Fortress,31,1997,Germany,-,"Hard rock,Power"
1511,Lascaille's Shroud,31,2008,USA,2008,Progressive death
1512,Le Grand Guignol,31,1996,Luxembourg,-,"Symphonic black,Avantgarde black"
1513,Lingua Mortis Orchestra,31,2013,Germany,2013,Symphonic
1514,Longing For Dawn,31,2002,Canada,-,"Death doom,Funeral doom"
1515,Murmu�re,31,2006,France,2006,Ambient black
1516,Nailbomb,31,1994,Brazil,1995,Industrial thrash
1517,Negative,31,1997,Finland,1997,"Suomi,Glam"
1518,Panzerchrist,31,1994,Denmark,-,"Death,Blackened death"
1519,Rivers Of Nihil,31,2009,USA,2009,Technical death
1520,Root,31,1987,Czech Republic,-,Black
1521,Skuggsj�,31,2014,Norway,2014,Pagan folk
1522,System Divide,31,2008,USA,2014,Melodic death
1523,Teitanblood,31,2003,Spain,2003,"Black,Death"
1524,The Chasm,31,1993,Mexico,-,Death
1525,The Red Chord,31,1999,USA,1999,"Deathcore,Grindcore,Technical deathcore"
1526,Verdunkeln,31,1998,Germany,-,Psychedelic black
1527,Abruptum,30,1990,Sweden,1990,"Black,Ambient,Noise"
1528,Cadacross,30,1997,Finland,2005,"Death,Melodic death,Folk,Power"
1529,Carpe Noctem,30,2005,Iceland,2005,Black
1530,Cloak Of Altering,30,2011,The Netherlands,-,Avantgarde black
1531,Code,30,1998,United Kingdom,1998,"Black,Doom,Post-rock,Progressive rock"
1532,Criminal,30,1991,Chile,-,"Death,Thrash"
1533,Cryonic Temple,30,1996,Sweden,1996,Power
1534,Extreme Noise Terror,30,1985,United Kingdom,-,"Crust,Punk ,Death,Grindcore"
1535,Faal,30,2005,The Netherlands,2005,"Black,Doom"
1536,Gormathon,30,2009,Sweden,-,Melodic death
1537,Heretoir,30,2006,Germany,2006,Depressive black
1538,Herm�tica,30,1987,Argentina,1994,Thrash
1539,Highland Glory,30,2001,Norway,2001,Power
1540,Iskald,30,2005,Norway,-,Melodic black
1541,Katharsis,30,1994,Germany,1994,Black
1542,Kawir,30,1993,Greece,-,Pagan black
1543,Kuolemanlaakso,30,2010,Finland,2010,Death doom
1544,Light This City,30,2002,USA,2008,"Melodic death,Metalcore"
1545,Lizzy Borden,30,1983,USA,1983,Heavy
1546,Lullacry,30,1999,Finland,2014,Suomi
1547,Merciless,30,1986,Sweden,1986,Thrash
1548,Mourning Lenore,30,2008,Portugal,2012,Death doom
1549,Netherion,30,2010,Syria,2010,Death
1550,Phideaux,30,1996,USA,-,Progressive rock
1551,Runic,30,2001,Spain,2001,"Viking folk,Extreme power"
1552,Saurom,30,1996,Spain,-,"Folk,Power"
1553,ScoX,30,2010,Iran,2010,Brutal death
1554,Solstice,30,1990,United Kingdom,-,Epic doom
1555,Todesbonden,30,2003,USA,2003,"Atmospheric doom,Atmospheric gothic"
1556,Troll,30,1992,Norway,-,Industrial black
1557,Valkyrja,30,2004,Sweden,2004,Black
1558,Wulfgar,30,2005,Sweden,-,Melodic death
1559,�vangelist,29,2010,USA,2010,Blackened death
1560,Almafuerte,29,1995,Argentina,-,"Heavy,Thrash,Folk"
1561,American Head Charge,29,1996,USA,1996,"Industrial,Nu"
1562,Autumnblaze,29,1996,Germany,-,"Black,Gothic rock,Doom,Gothic"
1563,Beheaded,29,1991,Malta,1991,"Brutal death,Technical death"
1564,Christian Mistress,29,2008,USA,-,Heavy
1565,Daemonarch,29,1998,Portugal,1998,Melodic black
1566,Destrage,29,2005,Italy,-,"Melodic death,Metalcore"
1567,Hammerforce,29,2006,Russia,2006,"Symphonic,Power,Progressive"
1568,King's X,29,1980,USA,-,"Progressive rock,Progressive"
1569,Mare Cognitum,29,2011,USA,2011,Atmospheric black
1570,Nahemah,29,1997,Spain,2012,"Symphonic black,Progressive death,Post-metal"
1571,Necrodeath,29,1984,Italy,1984,Blackened thrash
1572,Nothgard,29,2008,Germany,-,Pagan black
1573,Onmyo-Za,29,1999,Japan,1999,"Heavy,Folk"
1574,Pharaoh,29,1997,USA,-,"Heavy,Us power"
1575,Procession,29,2006,Chile,2006,Doom
1576,Scar The Martyr,29,2013,USA,-,"Alternative,Industrial"
1577,Stravaganzza,29,2003,Spain,2003,Symphonic
1578,Sunless Rise,29,2006,Russia,-,"Melodic death,Extreme power"
1579,Theory In Practice,29,1995,Sweden,1995,"Melodic death,Technical death"
1580,Thrudvangar,29,1998,Germany,-,Viking black
1581,Trauma,29,1988,Poland,1988,Death
1582,Vale Of Pnath,29,2006,USA,-,Technical death
1583,Zimmers Hole,29,1991,Canada,1991,"Speed,Thrash"
1584,Acheron,28,1988,USA,-,Blackened death
1585,Barathrum,28,1990,Finland,1990,Black
1586,Bell Witch,28,2010,USA,-,Funeral doom
1587,Bifr�st,28,2005,Austria,2005,"Pagan black,Folk"
1588,Biomechanical,28,2001,United Kingdom,-,"Progressive,Thrash"
1589,Black Flag,28,1976,USA,1976,"Sludge,Hardcore,Punk"
1590,Dies Irae,28,1992,Poland,2005,Death
1591,Dreams Of Sanity,28,1991,Austria,1991,Symphonic
1592,Ekove Efrits,28,2001,Iran,-,Black
1593,Folkstone,28,2004,Italy,2004,Folk
1594,Gloria Morti,28,1999,Finland,-,"Thrash,Melodic black,Melodic death"
1595,K�lter,28,2006,Canada,2006,"Melodic death,Progressive"
1596,Kobra And The Lotus,28,2008,Canada,-,Heavy
1597,Kongh,28,2004,Sweden,2004,"Sludge,Doom"
1598,Negator,28,2003,Germany,-,Black
1599,Nervosa,28,2010,Brazil,2010,Thrash
1600,Nightbringer,28,1999,USA,-,Black
1601,Obliteration,28,2001,Norway,2001,Death
1602,Odious,28,1998,Egypt,-,"Black,Oriental folk"
1603,Omega Lithium,28,2007,Croatia,2007,Gothic industrial
1604,Poema Arcanus,28,1992,Chile,-,Progressive doom
1605,Scarve,28,1994,France,1994,Technical death
1606,Sceptic,28,1994,Poland,-,Technical death
1607,Schandmaul,28,1998,Germany,1998,"Medieval folk,Medieval,Folk rock"
1608,Skagos,28,2007,Canada,-,Atmospheric black
1609,SpiRitual,28,2005,Germany,2005,Gothic
1610,Svartby,28,2004,Russia,-,Folk
1611,The Amenta,28,2002,Australia,2002,Industrial death
1612,The Axis Of Perdition,28,2002,United Kingdom,2013,"Industrial black,Dark,Ambient"
1613,Weakling,28,1998,USA,1998,Black
1614,Welicoruss,28,2005,Russia,-,Symphonic black
1615,When Nothing Remains,28,2010,Sweden,2010,Funeral doom
1616,Winger,28,1987,USA,-,"Glam,Hard rock"
1617,Wretched,28,2005,USA,2005,"Melodic deathcore,Technical death"
1618,Zeal And Ardor,28,2014,USA,-,Avantgarde black
1619,Armageddon,27,1997,Sweden,1997,"Melodic death,Heavy,Power"
1620,Atlantean Kodex,27,2005,Germany,-,"Heavy,Doom"
1621,Beautiful Sin,27,2005,Germany,2005,Heavy
1622,Callenish Circle,27,1992,The Netherlands,2007,Gothenburg
1623,Chaos Divine,27,2005,Australia,2005,"Melodic death,Progressive"
1624,Crionics,27,1997,Poland,2011,"Black,Death"
1625,Crom,27,1997,Germany,1997,"Viking folk,Power"
1626,Decadence,27,2003,Sweden,-,"Thrash,Melodic death"
1627,Dekadent,27,2005,Slovenia,2005,Symphonic black
1628,Dr�psnatt,27,2005,Sweden,-,"Atmospheric black,Pagan black"
1629,Emigrate,27,2005,Germany,2005,Industrial
1630,Eucharist,27,1989,Sweden,-,Melodic death
1631,Frosttide,27,2009,Finland,2009,Extreme power
1632,Hammer Horde,27,2007,USA,-,Pagan black
1633,Immortal Souls,27,1991,Finland,1991,"Melodic death,Heavy,Doom"
1634,Ingested,27,2004,United Kingdom,-,Brutal death
1635,Insania,27,1992,Sweden,1992,Power
1636,Kekal,27,1995,Indonesia,-,"Black,Avantgarde"
1637,Khanate,27,2000,USA,2000,"Extreme sludge,Doom"
1638,Leah,27,2010,Canada,-,Symphonic
1639,Oceans Of Sadness,27,1995,Belgium,1995,"Extreme avantgarde,Extreme progressive"
1640,Paragon,27,1990,Germany,-,Power
1641,Parasite Inc.,27,2007,Germany,2007,Melodic death
1642,Planet Of Zeus,27,2000,Greece,-,Stoner
1643,Sister Sin,27,2002,Sweden,2002,Heavy
1644,Slechtvalk,27,1999,The Netherlands,-,Black
1645,Sons Of Seasons,27,2007,Germany,2007,Symphonic progressive
1646,Sun Of The Blind,27,2006,Switzerland,-,Avantgarde black
1647,Svart Crown,27,2004,France,2004,"Black,Death"
1648,The Few Against Many,27,2008,Sweden,-,"Melodic death,Symphonic"
1649,The Haarp Machine,27,2007,United Kingdom,2007,"Technical death,Progressive"
1650,Therapy?,27,1989,United Kingdom,-,"Alternative,Hard rock"
1651,Thou,27,2005,USA,2005,"Sludge,Doom"
1652,Timo Tolkki,27,1994,Finland,-,"Neoclassical power,Progressive"
1653,Worship,27,1998,Germany,1998,Funeral doom
1654,Al-Namrood,26,2008,Saudi Arabia,-,Black
1655,An Abstract Illusion,26,2007,Sweden,2007,"Melodic death,Progressive death"
1656,Arakain,26,1982,Czech Republic,-,Thrash
1657,Arcana Coelestia,26,2005,Italy,2005,"Funeral doom,Atmospheric black"
1658,Bornholm,26,2000,Hungary,-,Pagan black
1659,Bulldozer,26,1980,Italy,1980,Thrash
1660,Cage,26,1992,USA,-,Heavy
1661,Cold Body Radiation,26,2009,The Netherlands,2009,"Atmospheric black,Shoegaze,Post-rock"
1662,Crystal Eyes,26,1992,Sweden,-,Power
1663,Deathchain,26,2001,Finland,2001,"Thrash,Death"
1664,Derek Sherinian,26,1996,USA,-,"Progressive,Progressive rock"
1665,Desolate Shrine,26,2010,Finland,2010,Death
1666,Destroy Destroy Destroy,26,2003,USA,-,Extreme power
1667,Drowning The Light,26,2003,Australia,2003,Black
1668,Elegy,26,1992,The Netherlands,-,Progressive power
1669,Elf,26,1967,USA,1967,"Blues rock,Hard rock"
1670,Fozzy,26,1999,USA,-,Heavy
1671,Gardenian,26,1996,Sweden,1996,Melodic death
1672,Hades Almighty,26,1998,Norway,-,Black
1673,Holy Terror,26,1985,USA,1985,Thrash
1674,HolyHell,26,2005,USA,-,Symphonic power
1675,Illidiance,26,2004,Russia,2004,"Symphonic black,Industrial"
1676,Lord,26,2003,Australia,-,"Power,Heavy"
1677,Manslaughter,26,2007,Poland,2007,"Death,Black"
1678,Obtest,26,1992,Lithuania,-,"Brutal death,Pagan black,Pagan folk"
1679,Oceans Of Slumber,26,2011,USA,2011,Extreme progressive
1680,Ram-Zet,26,1998,Norway,-,Extreme avantgarde
1681,Sacrifice,26,1983,Canada,1983,Thrash
1682,Salem,26,1985,Israel,-,"Black,Doom,Death"
1683,Satariel,26,1993,Sweden,1993,"Black,Melodic death"
1684,Shakra,26,1997,Switzerland,-,"Hard rock,Heavy"
1685,Tharaphita,26,1995,Estonia,1995,Pagan black
1686,The Black Mages,26,2003,Japan,2010,Progressive
1687,Thy Serpent,26,1992,Finland,1992,Melodic black
1688,To Cast A Shadow,26,2005,Norway,-,"Doom,Gothic"
1689,Yggdrasil,26,2001,Sweden,2001,Folk
1690,1000 Funerals,25,2005,Iran,2011,Funeral doom
1691,Aaskereia,25,1997,Germany,1997,Pagan black
1692,Amaran,25,2000,Sweden,2005,Gothenburg
1693,Angelcorpse,25,1995,USA,1995,Blackened death
1694,ASP,25,1999,Germany,-,"Industrial gothic,Gothic rock"
1695,Beyond Fear,25,2005,USA,2005,Heavy
1696,Blackthorn,25,2004,Russia,-,Symphonic gothic
1697,Blitzkrieg,25,1980,United Kingdom,1980,"New wave of british heavy,Heavy"
1698,Christian Muenzner,25,2011,Germany,-,"Progressive,Instrumental"
1699,Christopher Lee,25,2009,United Kingdom,2009,"Heavy,Power"
1700,Concerto Moon,25,1996,Japan,-,Power
1701,Coronatus,25,2002,Germany,2002,Gothic
1702,Death Breath,25,2005,Sweden,-,Death
1703,Depressed Mode,25,2005,Finland,2005,"Funeral doom,Melodic death"
1704,Fall Of The Leafe,25,1996,Finland,2007,"Melodic death,Gothic,Heavy"
1705,Forever Slave,25,2000,Spain,2000,Gothic
1706,Gallhammer,25,2003,Japan,-,"Black,Crust,Punk"
1707,Germ,25,2003,Australia,2003,"Depressive black,Electronica,Shoegaze"
1708,Glittertind,25,2001,Norway,-,"Viking folk,Punk rock"
1709,Irminsul,25,2005,Sweden,2005,Viking folk
1710,Izegrim,25,1996,The Netherlands,-,"Death,Melodic death,Thrash"
1711,L��z Rockit,25,1982,USA,1982,Bay area thrash
1712,Make Them Suffer,25,2008,Australia,-,Symphonic deathcore
1713,Michael Schenker's Temple Of Rock,25,1979,Germany,1979,Hard rock
1714,Moi Dix Mois,25,2002,Japan,-,Symphonic gothic
1715,Mustasch,25,1998,Sweden,1998,Heavy
1716,Odroerir,25,1998,Germany,-,Pagan folk
1717,Pillorian,25,2016,USA,2016,Atmospheric black
1718,Sanctity,25,2000,USA,2008,Melodic thrash
1719,Saviour Machine,25,1989,USA,1989,Gothic
1720,Sinamore,25,1998,Finland,-,"Gothic,Gothic rock"
1721,Sons Of Aeon,25,2009,Finland,2009,Melodic death
1722,Steelheart,25,1990,USA,-,"Glam,Gothic"
1723,Stone,25,1985,Finland,1985,"Speed,Thrash"
1724,The Howling Void,25,2007,USA,-,"Funeral doom,Symphonic doom"
1725,The Prophecy,25,2001,United Kingdom,2001,Death doom
1726,Thronar,25,1998,The Netherlands,2009,"Atmospheric black,Folk"
1727,Toundra,25,2007,Spain,2007,Instrumental post-metal
1728,Tremonti,25,2011,USA,-,Heavy
1729,Visceral Bleeding,25,1999,Sweden,1999,Brutal death
1730,Winter,25,1988,USA,-,Death doom
1731,Alarum,24,1992,Australia,1992,"Progressive,Fusion"
1732,Bar�n Rojo,24,1980,Spain,-,"Hard rock,Heavy"
1733,Battle Of Mice,24,2005,USA,2005,Post-metal
1734,Benedictum,24,2005,USA,-,Heavy
1735,Bison B.C.,24,2006,Canada,2006,Sludge
1736,Black Country Communion,24,2009,USA,2013,"Hard rock,Blues rock"
1737,Carnal Forge,24,1997,Sweden,1997,"Death,Thrash"
1738,Cemetary,24,1989,Sweden,2005,"Death,Gothic"
1739,Demon,24,1979,United Kingdom,1979,"New wave of british heavy,Hard rock,Heavy"
1740,Diamond Plate,24,2004,USA,-,Thrash
1741,Disincarnate,24,1992,USA,1992,Death
1742,End Of You,24,2003,Finland,-,Suomi
1743,Eulen,24,2009,Syria,2009,"Doom,Black"
1744,Forsaken,24,1990,Malta,-,"Doom,Heavy"
1745,Galloglass,24,1999,Germany,1999,Power
1746,Grave Miasma,24,2006,United Kingdom,-,Death
1747,Harmony,24,2000,Sweden,2000,Progressive power
1748,Hatriot,24,2010,USA,-,Thrash
1749,Headspace,24,2006,United Kingdom,2006,"Progressive,Progressive rock"
1750,Horseback,24,2006,USA,-,"Ambient,Drone,Post-,Rock"
1751,Hoth,24,2011,USA,2011,"Melodic black,Melodic death"
1752,Hunter,24,1986,Poland,-,"Thrash,Alternative"
1753,Indian,24,2003,USA,2003,"Blackened sludge,Doom"
1754,Living Sacrifice,24,1989,USA,-,"Death,Metalcore,Thrash"
1755,Naildown,24,2003,Finland,2003,Melodic death
1756,One Man Army And The Undead Quartet,24,2004,Sweden,2012,"Death,Thrash"
1757,Prototype,24,1994,USA,1994,Progressive
1758,Regurgitate,24,1990,Sweden,-,Goregrind
1759,Sahg,24,2004,Norway,2004,Stoner
1760,Severed Savior,24,1999,USA,-,"Brutal death,Technical death"
1761,Spheric Universe Experience,24,1999,France,1999,Progressive
1762,Tokyo Blade,24,1982,United Kingdom,-,"New wave of british heavy,Heavy"
1763,Votum,24,2003,Poland,2003,"Heavy,Progressive"
1764,Ade,23,2007,Italy,-,Death
1765,Anti,23,2004,Germany,2004,Depressive black
1766,Arch/Matheos,23,2010,USA,-,Progressive
1767,Believer,23,1986,USA,1986,Technical thrash
1768,Blaze Of Perdition,23,2004,Poland,-,Black
1769,Byfrost,23,2007,Norway,2007,"Black,Thrash"
1770,Catacombs,23,2000,USA,-,Funeral doom
1771,Conan,23,2006,United Kingdom,2006,"Doom,Stoner"
1772,Count Raven,23,1989,Sweden,-,Doom
1773,Cripper,23,2005,Germany,2005,Thrash
1774,Darkest Era,23,2005,United Kingdom,-,"Folk,Doom,Heavy"
1775,Defiance,23,1985,USA,1985,Thrash
1776,Demonica,23,2008,Denmark,-,Thrash
1777,Downfall Of Gaia,23,2008,Germany,2008,"Atmospheric sludge,Post-metal"
1778,Fifth Angel,23,1983,USA,-,Us power
1779,Galar,23,2004,Norway,2004,"Viking black,Folk,Neofolk"
1780,Helltrain,23,2002,Sweden,-,"Death ',N',Roll"
1781,Hypomanie,23,2007,The Netherlands,2007,"Shoegaze ,Black"
1782,Inter Arma,23,2006,USA,-,Blackened sludge
1783,Iommi,23,2000,United Kingdom,2000,"Heavy,Hard rock"
1784,Kipelov,23,1997,Russia,-,Heavy
1785,Mantic Ritual,23,2005,USA,2005,Thrash
1786,Massacra,23,1986,France,1997,"Death,Groove thrash,Heavy,Thrash"
1787,Mechanical Poet,23,2002,Russia,2002,Symphonic progressive
1788,Mindplotter,23,2008,Ukraine,-,Math
1789,Misery Signals,23,2002,USA,2002,Metalcore
1790,Nasheim,23,2001,Sweden,-,Black
1791,Nazxul,23,1993,Australia,1993,Black
1792,Obscurity,23,1997,Germany,-,"Pagan folk,Viking black"
1793,Ramp,23,1989,Portugal,1989,"Heavy,Industrial thrash,Thrash"
1794,Regarde Les Hommes Tomber,23,2011,France,-,"Black,Post-metal,Sludge"
1795,Runemagick,23,1990,Sweden,1990,"Death,Death doom"
1796,Shrinebuilder,23,2008,USA,-,"Doom,Sludge,Stoner"
1797,Stormwitch,23,1979,Germany,1979,Heavy
1798,Thanatos,23,1984,The Netherlands,-,"Death,Thrash"
1799,The Hourglass,23,2002,Syria,2002,Heavy
1800,The Provenance,23,1995,Sweden,2008,"Experimental gothic,Progressive death,Doom"
1801,The Rotted,23,1997,United Kingdom,1997,"Grindcore,Brutal death,Death,Punk"
1802,Today Is The Day,23,1992,USA,-,"Hardcore,Noise rock"
1803,Vampiria,23,1997,Argentina,1997,Blackened gothic
1804,Wormlust,23,2003,Iceland,-,Black
1805,Yyrkoon,23,1995,France,1995,Death
1806,Zonata,23,1998,Sweden,2003,Power
1807,�rkenkj�tt,22,2005,Norway,2005,Extreme progressive
1808,Acherontas,22,2007,Greece,-,Black
1809,Alabama Thunderpussy,22,1996,USA,1996,"Stoner,Heavy"
1810,Antediluvian,22,2006,Canada,-,Blackened death
1811,Argus,22,2005,USA,2005,"Doom,Heavy"
1812,Black Fast,22,2010,USA,-,"Thrash,Progressive black"
1813,Breakdown Of Sanity,22,2007,Switzerland,2007,"Metalcore,Deathcore"
1814,Celeste,22,2005,France,-,"Black,Sludge,Hardcore"
1815,Chaos Moon,22,2004,USA,2004,Atmospheric black
1816,Christ Agony,22,1990,Poland,-,Black
1817,Comatose Vigil,22,2003,Russia,2003,Funeral doom
1818,Crimson Moonlight,22,1997,Sweden,-,Black
1819,De Profundis,22,2005,United Kingdom,2005,"Death doom,Extreme progressive,Technical death"
1820,Demians,22,2007,France,-,"Alternative rock,Progressive"
1821,Descending,22,2007,Greece,2007,"Gothenburg,Metalcore"
1822,Dreamscape,22,1986,Germany,-,Progressive
1823,For Today,22,2005,USA,2005,Metalcore
1824,Frailty,22,2003,Latvia,-,Death doom
1825,Genghis Tron,22,2004,USA,2004,Cyber grindcore
1826,Gernotshagen,22,1999,Germany,-,"Pagan black,Folk"
1827,Happy Days,22,2004,USA,2004,Depressive black
1828,Hatchet,22,2006,USA,-,Bay area thrash
1829,How Like A Winter,22,1999,Italy,1999,Gothic doom
1830,Liege Lord,22,1982,USA,-,"Us power,Thrash"
1831,Loudblast,22,1985,France,1985,"Death,Thrash"
1832,Lychgate,22,2001,United Kingdom,-,"Progressive black,Atmospheric black"
1833,M�tiilation,22,1991,France,1991,Black
1834,Magrudergrind,22,2002,USA,-,Grindcore
1835,Michael Kiske,22,1996,Germany,1996,Hard rock
1836,Misanthrope,22,1988,France,-,Melodic death
1837,Nirvana 2002,22,1988,Sweden,1988,Death
1838,Orphanage,22,1993,The Netherlands,2005,"Melodic death,Gothic"
1839,Ovid's Withering,22,2010,USA,2010,"Blackened deathcore,Symphonic deathcore,Progressive deathcore"
1840,Realm,22,1985,USA,1992,Progressive thrash
1841,Repugnant,22,1998,Sweden,1998,"Death,Thrash"
1842,Rob Rock,22,2000,USA,-,Us power
1843,RoutaSielu,22,2010,Finland,2010,Melodic death
1844,Shadowside,22,2001,Brazil,-,Power
1845,Signum Regis,22,2007,Slovak Republic,2007,"Progressive,Power"
1846,Sombres For�ts,22,2005,Canada,-,Black
1847,Sunpocrisy,22,2007,Italy,2007,"Progressive death,Atmospheric sludge,Post-metal"
1848,Symphorce,22,1998,Germany,2011,Power
1849,The Arcane Order,22,2000,Denmark,2000,"Melodic death,Thrash"
1850,The Browning,22,2005,USA,-,"Metalcore,Trancecore"
1851,The Flight Of Sleipnir,22,2007,USA,2007,"Doom,Folk,Stoner"
1852,Turbo,22,1980,Poland,-,"Hard rock,Heavy,Thrash,Speed"
1853,Until Death Overtakes Me,22,1999,Belgium,1999,"Funeral doom,Ambient"
1854,Vinnie Moore,22,1986,USA,-,"Hard rock,Neoclassical,Instrumental"
1855,Viraemia,22,2008,USA,2008,"Brutal death,Technical death"
1856,Voices,22,2011,United Kingdom,-,Black
1857,Wormphlegm,22,2000,Finland,2000,"Funeral doom,Drone"
1858,Act Of Defiance,21,2014,USA,-,"Heavy,Thrash"
1859,Aes Dana,21,1994,France,1994,"Atmospheric black,Celtic black"
1860,Aeveron,21,2002,Germany,-,"Melodic death,Black"
1861,Aluk Todolo,21,2004,France,2004,"Black,Krautrock"
1862,Armory,21,2001,USA,-,Power
1863,Autumnia,21,2003,Ukraine,2003,"Melodic death,Doom"
1864,Avrigus,21,1995,Australia,-,"Gothic doom,Neoclassical darkwave"
1865,Blazing Eternity,21,1993,Denmark,1993,Atmospheric doom
1866,Catafalque,21,1997,Turkey,-,Gothic
1867,Chalice Of Doom,21,2010,Jordan,2010,"Melodic death,Doom"
1868,Chthe'ilist,21,2010,Canada,-,Death
1869,Cruciamentum,21,2005,United Kingdom,2005,Death
1870,Divinity,21,1999,Canada,-,"Progressive death,Thrash"
1871,Dol Ammad,21,2000,Greece,2000,Electronic symphonic
1872,Dreamland,21,2003,Sweden,-,"Heavy,Power"
1873,Eisregen,21,1995,Germany,1995,Gothic black
1874,Eyefear,21,1994,Australia,-,"Progressive,Power"
1875,Fear Of Domination,21,2006,Finland,2006,"Melodic death,Industrial"
1876,First Fragment,21,2007,Canada,-,Technical death
1877,Frequency Of Butterfly Wings,21,2009,Iran,2009,"Melodic death,Doom"
1878,Fuck The Facts,21,1999,Canada,-,"Grindcore,Noise"
1879,Grey Heaven Fall,21,2006,Russia,2006,"Black,Death"
1880,Gruesome,21,2014,USA,-,Death
1881,Illogicist,21,1997,Italy,1997,Technical death
1882,Insect Warfare,21,2004,USA,2008,Grindcore
1883,Ion Dissonance,21,2002,Canada,2002,"Deathcore,Math,Metalcore"
1884,Istapp,21,2005,Sweden,-,Melodic black
1885,Kriegsmaschine,21,2002,Poland,2002,Black
1886,M�rk Gryning,21,1993,Sweden,2005,Black
1887,Mar?olea,21,2008,Romania,2008,Pagan black
1888,Nevid,21,2004,Russia,-,Pagan folk
1889,Nostradameus,21,1998,Sweden,1998,"Power,Thrash"
1890,Phantasma (NED),21,2015,The Netherlands,-,Symphonic
1891,Psyopus,21,2002,USA,2002,"Metalcore,Technical grindcore"
1892,Rise Of Avernus,21,2010,Australia,-,"Progressive gothic,Progressive doom"
1893,Sarke,21,2008,Norway,2008,"Black,Black 'n,Roll"
1894,Serious Black,21,2013,Germany,-,Power
1895,Seth,21,1995,France,1995,Black
1896,Supreme Majesty,21,1999,Sweden,-,Power
1897,Symphonity,21,1994,Czech Republic,1994,Symphonic power
1898,The Wretched End,21,2008,Norway,-,"Death,Thrash"
1899,Unholy,21,1988,Finland,1988,Death doom
1900,Valtari,21,2010,Australia,-,Melodic death
1901,Volumes,21,2009,USA,2009,"Math,Djent"
1902,�rst��ir L�fsins,20,2008,Iceland,-,"Black,Folk"
1903,Advent Sorrow,20,2010,Australia,2010,"Symphonic black,Death"
1904,Amogh Symphony,20,2003,India,-,"Progressive death,Avantgarde"
1905,Ancient Ascendant,20,2005,United Kingdom,2005,Death
1906,Annotations Of An Autopsy,20,2006,United Kingdom,2013,"Deathcore,Brutal death"
1907,Attacker,20,1983,USA,1983,Us power
1908,Canaan,20,1996,Italy,-,Doom
1909,Carcariass,20,1991,France,1991,Technical death
1910,Centinex,20,1990,Sweden,-,Death
1911,Ceremonial Oath,20,1988,Sweden,1988,"Melodic death,Gothenburg"
1912,Circle Of Dead Children,20,1998,USA,2013,Grindcore
1913,Convulse,20,1988,Finland,1988,"Death,Speed"
1914,Crystalic,20,1998,Finland,-,"Progressive,Melodic death"
1915,Doom,20,1987,United Kingdom,1987,"Crust,Punk"
1916,Enter Shikari,20,1999,United Kingdom,-,"Metalcore,Trancecore"
1917,Flourishing,20,2009,USA,2009,"Technical death,Grindcore,Sludge"
1918,Forgotten Tales,20,1999,Canada,-,Power
1919,Garden Of Shadows,20,1995,USA,1995,Melodic death
1920,Grayceon,20,2005,USA,-,Progressive
1921,Hackneyed,20,2006,Germany,2006,Death
1922,I Killed The Prom Queen,20,2000,Australia,-,Metalcore
1923,Infinite Tales,20,2007,Ukraine,2007,Gothenburg
1924,Insision,20,1997,Sweden,-,Brutal death
1925,iwrestledabearonce,20,2007,USA,2007,"Avantgarde metalcore,Avantgarde math"
1926,Karlahan,20,2006,Spain,-,"Melodic death,Symphonic death"
1927,Karma To Burn,20,1994,USA,1994,Stoner
1928,Krieg,20,1995,USA,-,Black
1929,Lamented Souls,20,1991,Norway,1991,Doom
1930,Landmine Marathon,20,2004,USA,-,Death
1931,Malignancy,20,1992,USA,1992,Brutal death
1932,Myrkskog,20,1993,Norway,-,"Black,Brutal death"
1933,Necros Christos,20,2001,Germany,2001,"Black,Death"
1934,Netherbird,20,2004,Sweden,-,Melodic black
1935,November-7,20,2005,Switzerland,2005,"Symphonic,Heavy,Industrial"
1936,Octavia Sperati,20,2000,Norway,-,Gothic
1937,Old Man Gloom,20,1999,USA,1999,"Post-metal,Sludge"
1938,Pokolg�p,20,1980,Hungary,-,Heavy
1939,Pressure Points,20,2004,Finland,2004,"Progressive,Death"
1940,Profetus,20,2006,Finland,-,Funeral doom
1941,Psychonaut 4,20,2010,Georgia,2010,Depressive black
1942,Raubtier,20,2008,Sweden,-,Industrial
1943,Ride The Sky,20,2006,Sweden,2006,Progressive power
1944,Ripping Corpse,20,1987,USA,1993,"Death,Thrash"
1945,Steve Harris,20,2012,United Kingdom,2012,Heavy
1946,Sunrise,20,2003,Ukraine,-,Power
1947,Thank You Scientist,20,2009,USA,2009,Progressive rock
1948,The Gates Of Slumber,20,1998,USA,2013,Doom
1949,Vordven,20,1996,Finland,1996,Atmospheric black
1950,Abyssic Hate,19,1993,Australia,-,"Black,Depressive black"
1951,Ador Dorath,19,1997,Czech Republic,1997,Gothic black
1952,Agora,19,1995,Mexico,-,Progressive
1953,Alkerdeel,19,2005,Belgium,2005,"Black,Sludge"
1954,Arion,19,2011,Finland,-,"Symphonic,Power"
1955,Arizmenda,19,2007,USA,2007,Psychedelic black
1956,Arrayan Path,19,2011,"USA, Cyprus",-,"Power,Heavy"
1957,Ash Borer,19,2008,USA,2008,Black
1958,Atargatis,19,1997,Germany,-,Symphonic gothic
1959,Battleroar,19,2000,Greece,2000,Heavy
1960,Besatt,19,1991,Poland,-,Black
1961,Blood Tsunami,19,2004,Norway,2004,"Thrash,Death"
1962,Bullet,19,2001,Sweden,-,"Heavy,Hard rock"
1963,Cirith Gorgor,19,1993,The Netherlands,1993,Black
1964,Coprofago,19,1993,Chile,-,"Technical thrash,Progressive thrash,Math"
1965,Darksun,19,2002,Spain,2002,Symphonic power
1966,Dawnbringer,19,1995,USA,-,"Blackened heavy,Heavy"
1967,Den Saakaldte,19,2006,Norway,2006,Black
1968,Device,19,2012,USA,-,"Alternative,Industrial"
1969,Dezperadoz,19,1999,Germany,1999,Heavy
1970,Empyrios,19,2001,Italy,-,Progressive thrash
1971,FEJD,19,2001,Sweden,2001,Folk
1972,Filter,19,1993,USA,-,"Industrial rock,Alternative rock"
1973,Fort��,19,2002,Iceland,2002,Black
1974,Guardians Of Time,19,1997,Norway,-,Power
1975,Hangar,19,1997,Brazil,1997,Power
1976,Heol Telwen,19,1999,France,-,"Celtic black,Celtic folk"
1977,Krypt,19,2006,Norway,2006,Black
1978,Machine Men,19,1998,Finland,2011,Heavy
1979,Marionette,19,2005,Sweden,2005,"Melodic death,Metalcore"
1980,Meliah Rage,19,1987,USA,-,"Power,Thrash"
1981,Minas Morgul,19,1997,Germany,1997,Pagan black
1982,Mystic Circle,19,1992,Germany,-,Melodic black
1983,Narjahanam,19,2004,Bahrain,2004,Death
1984,Norma Jean,19,1997,USA,-,Metalcore
1985,Pryapisme,19,2000,France,2000,Avantgarde
1986,Revenge,19,2000,Canada,-,"Black,Death"
1987,Scanner,19,1986,Germany,1986,Power
1988,Seeds Of Iblis,19,2011,Iraq,-,Black
1989,Seraphim,19,2001,Taiwan,2001,Power
1990,Sex Machineguns,19,1989,Japan,-,"Power,Speed"
1991,Skylark,19,1994,Italy,1994,Power
1992,Striborg,19,1994,Australia,-,Ambient black
1993,Sun Caged,19,1999,The Netherlands,1999,Progressive
1994,Sun Devoured Earth,19,2009,Latvia,-,"Atmospheric black,Post-,Rock,Shoegaze"
1995,Teramaze,19,1993,Australia,1993,Progressive
1996,The Bishop Of Hexen,19,1994,Israel,-,Symphonic black
1997,The Blinded,19,2000,Sweden,2000,"Gothenburg,Melodic metalcore"
1998,The Murder Of My Sweet,19,2007,Sweden,-,Symphonic
1999,Trist,19,2000,Germany,2000,Ambient black
2000,Usurper,19,1993,USA,-,"Black,Death,Thrash"
2001,What Mad Universe,19,2008,France,2008,"Post-,Rock,Atmospheric sludge"
2002,�xx� X��x,18,2005,France,-,"Doom,Gothic"
2003,Akelei,18,2006,The Netherlands,2006,Atmospheric doom
2004,Alda,18,2007,USA,-,"Atmospheric black,Neofolk"
2005,Appearance Of Nothing,18,2004,Switzerland,2004,"Progressive,Symphonic power"
2006,Arven,18,2006,Germany,2015,Melodic power
2007,Battlesoul,18,2007,Canada,2007,"Folk,Thrash"
2008,Beto V�zquez Infinity,18,2000,Argentina,-,Symphonic
2009,Betraying The Martyrs,18,2008,France,2008,"Progressive deathcore,Symphonic death"
2010,Borgne,18,1998,Switzerland,-,Atmospheric black
2011,Bran Barr,18,1995,France,1995,Celtic folk
2012,Cloudscape,18,2001,Sweden,-,Progressive
2013,Cryptic Slaughter,18,1984,USA,1984,Crossover thrash
2014,Crystallion,18,2003,Germany,-,Power
2015,Dark Flood,18,1996,Finland,1996,Melodic death
2016,Darkened Nocturn Slaughtercult,18,1997,Germany,-,Black
2017,Deathhammer,18,2005,Norway,2005,Thrash
2018,Eden's Curse,18,2006,United Kingdom,-,"Hard rock,Heavy"
2019,Evil Masquerade,18,2003,Denmark,2003,"Power,Progressive"
2020,Farshid Arabi,18,2003,Iran,-,Heavy
2021,Funeral Mourning,18,2005,Australia,2005,"Black,Funeral doom"
2022,George Kollias,18,2008,Greece,-,Death
2023,Ghost Ship Octavius,18,2012,USA,2012,Progressive
2024,Hands Of Despair,18,2008,Canada,-,Progressive black
2025,Hanoi Rocks,18,1979,Finland,1979,Glam rock
2026,Holocaust,18,1977,United Kingdom,-,"New wave of british heavy,Heavy,Progressive"
2027,Inactive Messiah,18,2001,Greece,2001,"Industrial death,Melodic death"
2028,Infern�l M�jesty,18,1986,Canada,-,Thrash
2029,Khemmis,18,2012,USA,2012,Doom
2030,Lonewolf,18,1992,France,-,"Heavy,Power"
2031,Mind's Eye,18,1992,Sweden,1992,Progressive
2032,Mortad,18,2010,United Kingdom,-,"Death,Thrash"
2033,My Shameful,18,1999,Finland,1999,Death doom
2034,My Sleeping Karma,18,2005,Germany,-,"Psychedelic rock,Stoner rock"
2035,Nazgul,18,1996,Italy,1996,"Black,Folk"
2036,Nero Di Marte,18,2007,Italy,-,"Extreme progressive,Progressive death,Alternative"
2037,New Keepers Of The Water Towers,18,2009,Sweden,2009,"Doom,Stoner,Progressive rock"
2038,Okera,18,2006,Australia,-,"Melodic death,Doom"
2039,Priestess,18,2003,Canada,2003,"Hard rock,Stoner rock"
2040,Profane Omen,18,1999,Finland,-,"Groove thrash,Alternative"
2041,Red Harvest,18,1989,Norway,1989,"Thrash,Industrial"
2042,Reflexion,18,1996,Finland,-,Suomi
2043,Resurrection,18,1990,USA,1990,Death
2044,Semargl,18,1997,Ukraine,-,"Melodic black,Blackened death,Industrial,Electronic"
2045,Skitliv,18,2005,Norway,2005,"Black,Doom"
2046,Son Of Aurelius,18,2009,USA,-,"Technical death,Progressive"
2047,Sworn,18,2005,Norway,2005,Melodic black
2048,The Atlas Moth,18,2007,USA,-,"Stoner,Sludge"
2049,The Forsaken,18,1997,Sweden,1997,Melodic death
2050,Ultra Vomit,18,1999,France,-,"Grindcore,Hard rock,Heavy,Gothenburg"
2051,Verjnuarmu,18,2001,Finland,2001,Melodic death
2052,Vertigo Steps,18,2007,Portugal,-,Progressive
2053,Vomit The Soul,18,1999,Italy,1999,Brutal death
2054,Wayfarer,18,2012,USA,-,Atmospheric black
2055,Wovenwar,18,2013,USA,2013,Alternative
2056,Accu�er,17,1986,Germany,-,Thrash
2057,Almanac,17,2015,Germany,2015,Symphonic power
2058,Anthem,17,1981,Japan,-,Heavy
2059,Apocynthion,17,2010,Spain,2010,"Black,Post-metal"
2060,Brocas Helm,17,1982,USA,-,Heavy
2061,Burden Of Grief,17,1994,Germany,1994,Melodic death
2062,Burning Point,17,1999,Finland,-,Melodic power
2063,Bury Tomorrow,17,2006,United Kingdom,2006,Melodic metalcore
2064,Cadaver,17,1988,Norway,-,Death
2065,Cave In,17,1991,USA,1991,"Alternative rock,Hardcore"
2066,Channel Zero,17,1990,Belgium,-,Thrash
2067,Chaos Ech?s,17,2011,France,2011,"Death,Doom"
2068,Corpsessed,17,2007,Finland,-,Death
2069,Corpus Christii,17,1998,Portugal,1998,Black
2070,Darkest Horizon,17,2010,Germany,-,Melodic death
2071,Dawn Of Ashes,17,2001,USA,2001,"Aggrotech,Melodic black,Industrial"
2072,Deinonychus,17,1992,The Netherlands,-,"Black,Doom"
2073,Demiurg,17,2006,Sweden,2006,Death
2074,Disbelief,17,1991,Germany,-,"Death,Sludge"
2075,Disfiguring The Goddess,17,2006,USA,2006,"Brutal death,Grindcore"
2076,Dominici,17,2004,USA,-,Progressive
2077,Doomed,17,2011,Germany,2011,Death doom
2078,Eldritch,17,1991,Italy,-,"Power,Thrash"
2079,Elexorien,17,2004,The Netherlands,2004,"Symphonic power,Black"
2080,Enchant,17,1989,USA,-,"Progressive,Progressive rock"
2081,Enthring,17,2006,Finland,2006,"Melodic death,Symphonic"
2082,Faanefjell,17,2009,Norway,-,"Symphonic black,Folk"
2083,Facebreaker,17,1999,Sweden,1999,"Death,Thrash"
2084,Fragments Of Unbecoming,17,2000,Germany,-,Melodic death
2085,General Surgery,17,1988,Sweden,1988,Grindcore
2086,Haemorrhage,17,1990,Spain,-,Goregrind
2087,Hearse,17,2001,Sweden,2001,Melodic death
2088,Horn Of The Rhino,17,2005,Spain,2016,"Doom,Sludge"
2089,Icewind,17,2001,Canada,2001,Power
2090,Impetigo,17,1987,USA,1993,"Grindcore,Death"
2091,Impiety,17,1990,Singapore,1990,"Death,Blackened thrash"
2092,Inanimate Existence,17,2010,USA,-,"Brutal death,Technical death"
2093,Indesinence,17,2001,United Kingdom,2001,Death doom
2094,Jambinai,17,2009,"Korea, South",-,"Folk,Post-metal"
2095,Kaledon,17,1998,Italy,1998,Power
2096,Kill Devil Hill,17,2011,USA,-,Heavy
2097,Legenda Aurea,17,2005,Switzerland,2005,"Symphonic power,Symphonic progressive"
2098,Leng Tch'e,17,2001,Belgium,-,Grindcore
2099,Lion's Share,17,1987,Sweden,1987,"Power,Thrash"
2100,Loch Vostok,17,2001,Sweden,-,"Extreme progressive,Melodic death"
2101,Lost In Thought,17,2007,United Kingdom,2007,Progressive
2102,Malefice,17,2003,United Kingdom,-,Metalcore
2103,Manigance,17,1995,France,1995,Heavy
2104,Metal Allegiance,17,2014,USA,-,"Heavy,Thrash"
2105,Monumental Torment,17,2009,Russia,2009,Technical death
2106,Moonlyght,17,1995,Canada,-,Progressive
2107,Mumakil,17,2004,Switzerland,2004,Grindcore
2108,Mysticum,17,1992,Norway,-,Industrial black
2109,Necronomicon,17,1983,Germany,1983,Thrash
2110,Nothingface,17,1994,USA,2009,"Nu,Alternative"
2111,Primitive Man,17,2012,USA,2012,"Blackened sludge,Noise"
2112,Rose Tattoo,17,1976,Australia,-,"Heavy,Hard rock"
2113,Ruins,17,2002,Australia,2002,Black
2114,Saattue,17,2001,Finland,-,"Melodic doom,Melodic death"
2115,Satan's Host,17,1977,USA,1977,"Us power,Blackened death,Blackened heavy"
2116,Seance,17,1990,Sweden,-,Death
2117,Souldrainer,17,1998,Sweden,1998,Melodic death
2118,SSS,17,2005,United Kingdom,-,Crossover thrash
2119,The Obsessed,17,1976,USA,1976,Doom
2120,Thy Disease,17,1999,Poland,-,Industrial death
2121,Tribuzy,17,2005,Brazil,2005,Power
2122,Tystnaden,17,1998,Italy,-,"Gothic,Gothenburg"
2123,VON,17,1987,USA,1987,Black
2124,Vorna,17,2008,Finland,-,"Pagan folk,Melodic black"
2125,Winterstorm,17,2009,Germany,2009,"Power,Folk"
2126,Witch Mountain,17,1997,USA,-,Doom
2127,Zierler,17,2012,Denmark,2012,Progressive
2128,A Storm Of Light,16,2007,USA,-,Post-metal
2129,Aeon Zen,16,2008,United Kingdom,2008,Progressive
2130,Alogia,16,2000,Serbia,-,"Power,Progressive"
2131,Amon,16,1987,USA,1987,Death
2132,Anonymus,16,1989,Canada,-,Thrash
2133,Appalachian Winter,16,2008,USA,2008,Symphonic black
2134,Armagedda,16,2000,Sweden,2004,Black
2135,Asrai,16,1988,The Netherlands,1988,Gothic
2136,Atrox,16,1990,Norway,-,Progressive gothic
2137,Bend The Sky,16,2010,Australia,2010,"Progressive,Djent,Instrumental"
2138,Bong,16,2005,United Kingdom,-,"Drone doom,Psychedelic doom"
2139,Bongzilla,16,1995,USA,1995,"Sludge,Stoner"
2140,Bossk,16,2005,United Kingdom,-,Atmospheric sludge
2141,Capharnaum,16,1993,USA,1993,Technical death
2142,Cianide,16,1988,USA,-,Death doom
2143,Conquest,16,1996,Ukraine,1996,Power
2144,David Maxim Micic,16,2010,Serbia,-,"Progressive rock,Progressive"
2145,Death SS,16,1977,Italy,1977,"Heavy,Industrial,Doom"
2146,Devil You Know,16,2012,USA,-,Metalcore
2147,Disavowed,16,1994,The Netherlands,1994,"Death,Brutal death"
2148,Dissimulation,16,1993,Lithuania,-,"Black,Thrash"
2149,Dreamtone & Iris Mavraki's Neverland,16,2004,Turkey,2004,"Progressive,Power"
2150,Dust Bolt,16,2006,Germany,-,Thrash
2151,Eibon,16,2005,France,2005,"Black,Doom,Sludge"
2152,Eldamar,16,2015,Norway,-,"Atmospheric black,Ambient black"
2153,Enochian Theory,16,2004,United Kingdom,2004,Progressive
2154,Eternal Deformity,16,1993,Poland,-,"Progressive,Doom"
2155,Evenoire,16,2006,Italy,2006,"Symphonic,Folk"
2156,Eventide,16,1998,Sweden,-,"Gothenburg,Progressive"
2157,Evig Natt,16,2003,Norway,2003,"Death doom,Gothic"
2158,Golden Resurrection,16,2008,Sweden,-,Neoclassical power
2159,Grift,16,2011,Sweden,2011,Black
2160,Hallows Eve,16,1983,USA,-,"Thrash,Speed"
2161,Hayagriva,16,1993,Malaysia,1993,Melodic black
2162,Heed,16,2004,Sweden,2008,Power
2163,Hellveto,16,1995,Poland,1995,Atmospheric black
2164,Hevein,16,1992,Finland,-,Melodic thrash
2165,Holy Martyr,16,1994,Italy,1994,Heavy
2166,Iron Reagan,16,2012,USA,-,"Hardcore,Punk"
2167,Jupiter,16,2013,Japan,2013,Symphonic power
2168,Khonsu,16,2012,Norway,-,"Black,Industrial,Progressive"
2169,Koldbrann,16,2001,Norway,2001,Black
2170,Kryptos,16,1998,India,-,"Heavy,Thrash"
2171,Lanfear,16,1993,Germany,1993,"Progressive,Power"
2172,Leatherwolf,16,1981,USA,-,"Heavy,Us power"
2173,Lord Symphony,16,2005,Indonesia,2005,Power
2174,Mastifal,16,1995,Argentina,-,"Thrash,Death"
2175,Merrow,16,2009,USA,2009,"Progressive,Instrumental"
2176,Metalforce,16,2008,Germany,2011,"Heavy,Power"
2177,Nachtblut,16,2005,Germany,2005,Melodic black
2178,Noble Beast,16,2007,USA,-,Power
2179,Obsequiae,16,1998,USA,1998,"Black,Death,Melodic black,Folk"
2180,Obtained Enslavement,16,1989,Norway,2000,"Symphonic black,Death,Black"
2181,Omit,16,2009,Norway,2009,"Doom,Symphonic"
2182,P.H.O.B.O.S.,16,2000,France,-,Industrial doom
2183,Phlebotomized,16,1989,The Netherlands,1989,Progressive death
2184,Pitbulls In The Nursery,16,1996,France,-,"Technical death,Progressive"
2185,Pyrithion,16,2012,USA,2012,Death
2186,Ravenscry,16,2008,Italy,-,"Alternative,Gothic"
2187,Revolting,16,2008,Sweden,2008,Death
2188,Saille,16,2008,Belgium,-,Symphonic black
2189,Sebastien,16,1999,Czech Republic,1999,Melodic power
2190,Svart,16,2007,Sweden,-,"Depressive black,Funeral doom"
2191,The Answer,16,2000,United Kingdom,2000,Hard rock
2192,The Elysian Fields,16,1993,Greece,-,"Black,Melodic death"
2193,The Stone,16,2001,Serbia,2001,Black
2194,Trigger The Bloodshed,16,2006,United Kingdom,-,Death
2195,Tyrant Of Death,16,2010,Canada,2010,Extreme industrial
2196,Unmoored,16,1993,Sweden,-,"Progressive death,Death"
2197,Urna,16,2004,Italy,2004,"Black,Funeral doom"
2198,Vangough,16,2008,USA,-,Progressive
2199,Vattnet Viskar,16,2010,USA,2010,"Atmospheric black,Doom"
2200,Vendetta,16,2006,United Kingdom,-,Heavy
2201,Wildernessking,16,2011,South Africa,2011,Progressive black
2202,Withered,16,2003,USA,-,Blackened death
2203,Wormfood,16,2001,France,2001,"Gothic,Avantgarde,Industrial thrash"
2204,Zao,16,1993,USA,-,Metalcore
2205,Agressor,15,1986,France,1986,"Death,Thrash"
2206,Arcane,15,2006,Australia,2015,Progressive
2207,Au-Dessus,15,2014,Lithuania,2014,"Black,Post-metal"
2208,Behold The Arctopus,15,2001,USA,-,Progressive
2209,Black Anvil,15,2007,USA,2007,"Black,Thrash"
2210,Black Cobra,15,2002,USA,-,Sludge
2211,Blaze,15,1999,United Kingdom,1999,Heavy
2212,Blinded By Faith,15,1996,Canada,-,"Melodic black,Death,Thrash"
2213,Blodsrit,15,1998,Sweden,1998,Black
2214,Butcher Babies,15,2010,USA,-,"Metalcore,Nu"
2215,Castevet,15,2006,USA,2006,"Progressive black,Post-metal,Hardcore"
2216,Ceremonial Castings,15,1996,USA,-,Black
2217,Cloven Hoof,15,1979,United Kingdom,1979,"New wave of british heavy,Heavy"
2218,Consummatum Est,15,2003,Italy,-,"Black,Funeral doom"
2219,Daysend,15,2003,Australia,2003,Thrash
2220,De Magia Veterum,15,2003,The Netherlands,2014,Avantgarde black
2221,Devilish Impressions,15,2000,Poland,2000,"Avantgarde,Black"
2222,Devilment,15,2011,United Kingdom,-,"Gothic,Symphonic"
2223,Enochian Crescent,15,1995,Finland,1995,Black
2224,Eyes Of Noctum,15,2005,USA,2012,Symphonic black
2225,HDK,15,2006,The Netherlands,2006,"Thrash,Symphonic"
2226,Head Control System,15,2003,Portugal,-,Alternative
2227,Heavy Load,15,1976,Sweden,1976,Heavy
2228,Highlord,15,1996,Italy,-,Power
2229,Holocausto Canibal,15,1997,Portugal,1997,"Brutal death,Goregrind"
2230,Howls Of Ebb,15,2012,USA,-,"Black,Death"
2231,Insidious Decrepancy,15,2000,USA,2000,"Brutal death,Technical death"
2232,Intestine Baalism,15,1991,Japan,-,"Thrash,Death"
2233,Judicator,15,2012,USA,2012,Power
2234,Kells,15,2001,France,2015,"Symphonic gothic,Alternative"
2235,Ketzer,15,2003,Germany,2003,"Black,Thrash"
2236,King Parrot,15,2010,Australia,-,"Thrash,Grindcore"
2237,Klabautamann,15,1998,Germany,1998,"Atmospheric black,Folk"
2238,Kowai,15,2006,The Netherlands,-,"Gothic,Gothic rock"
2239,Lair Of The Minotaur,15,2003,USA,2003,Sludge
2240,Liberteer,15,2011,USA,-,Grindcore
2241,Milking The Goatmachine,15,2008,Germany,2008,"Death,Grindcore"
2242,Mortifera,15,2001,France,-,Black
2243,Nasty Savage,15,1983,USA,1983,"Thrash,Us power"
2244,Obscenity,15,1989,Germany,-,Death
2245,Operation: Mindcrime,15,2014,USA,2014,Progressive
2246,Orkrist,15,2000,Slovak Republic,2003,"Melodic black,Doom"
2247,Riger,15,1996,Germany,1996,Pagan black
2248,Saturnian,15,2007,United Kingdom,-,"Extreme symphonic,Symphonic black"
2249,Scarpoint,15,1999,Sweden,1999,Melodic death
2250,Seth.ECT,15,2008,Turkey,-,Industrial
2251,Six Magics,15,1996,Chile,1996,Power
2252,So Hideous,15,2013,USA,-,"Black,Post-metal"
2253,Solar Fragment,15,2004,Germany,2004,"Power,Heavy"
2254,Space Odyssey,15,2003,Sweden,-,"Progressive,Neoclassical"
2255,Tenet,15,1996,Canada,1996,"Death,Thrash"
2256,The Body,15,1999,USA,-,"Sludge,Industrial,Avantgarde"
2257,Trials,15,2008,USA,2008,Thrash
2258,Vredehammer,15,2009,Norway,-,"Black,Death"
2259,Vulcano,15,1981,Brazil,1981,"Death,Thrash"
2260,Wastefall,15,2003,Greece,-,Progressive
2261,Wedard,15,2002,Germany,2002,Depressive black
2262,Weedpecker,15,2012,Poland,-,"Psychedelic stoner,Grunge"
2263,Winterborn,15,2004,Finland,2004,Power
2264,Wolven Ancestry,15,2005,Canada,-,Melodic black
2265,Xystus,15,1998,The Netherlands,1998,Progressive power
2266,4th Dimension,14,2005,Italy,-,Symphonic power
2267,A Sound Of Thunder,14,2008,USA,2008,"Heavy,Power,Progressive"
2268,Ablaze My Sorrow,14,1993,Sweden,-,Melodic death
2269,Ace Frehley,14,1984,USA,1984,"Hard rock,Glam"
2270,Acyl,14,2006,France,-,"Progressive,Oriental folk"
2271,Agent Fresco,14,2008,Iceland,2008,"Progressive,Alternative"
2272,Anthelion,14,2001,Taiwan,-,Symphonic black
2273,Arise,14,1996,Sweden,1996,"Death,Thrash"
2274,Aurora Borealis,14,1995,USA,-,Blackened death
2275,Black Obelisk,14,1986,Russia,1986,"Heavy,Thrash"
2276,Bloodsoaked,14,2006,USA,2015,Brutal death
2277,Cargo,14,1985,Romania,1985,"Hard rock,Heavy"
2278,Cemetery Of Scream,14,1992,Poland,-,Gothic doom
2279,Cock And Ball Torture,14,1997,Germany,1997,"Goregrind,Deathgrind"
2280,Crysalys,14,2004,Italy,-,"Melodic death,Symphonic,Gothic"
2281,Dark Buddha Rising,14,2007,Finland,2007,"Drone doom,Dark,Ambient"
2282,Darkology,14,2004,USA,-,"Us power,Progressive"
2283,Darkwoods My Betrothed,14,1993,Finland,1993,Black
2284,Delight,14,1997,Poland,-,Gothic
2285,Diabolical,14,1996,Sweden,1996,Blackened death
2286,Division By Zero,14,2003,Poland,-,Progressive
2287,Dopethrone,14,2009,Canada,2009,Stoner
2288,Dread Sovereign,14,2013,Ireland,-,Doom
2289,Dungeon,14,1989,Australia,1989,Power
2290,Earthside,14,2014,USA,-,Progressive
2291,Engraved Disillusion,14,2008,United Kingdom,2008,Melodic death
2292,Epidemia,14,1993,Russia,-,Power
2293,Eternal Oath,14,1991,Sweden,1991,"Death,Gothic"
2294,Ex Libris,14,2004,The Netherlands,-,"Symphonic,Gothic"
2295,Falling Leaves,14,2009,Jordan,2009,Death doom
2296,Funeral Tears,14,2007,Russia,-,Funeral doom
2297,God Macabre,14,1989,Sweden,1989,Death
2298,Grand Supreme Blood Court,14,2009,The Netherlands,-,"Death,Doom"
2299,He Came From The Sun,14,1993,Belgium,1993,"Technical death,Progressive death,Blackened death,Death doom,Death,Symphonic death"
2300,Hellsaw,14,2002,Austria,2015,Black
2301,Hieronymus Bosch,14,1993,Russia,1993,Progressive death
2302,Hourglass,14,1999,USA,-,Progressive
2303,Hyubris,14,1998,Portugal,1998,"Folk,Heavy,Hard rock"
2304,Konkhra,14,1989,Denmark,-,Death
2305,Krohm,14,1995,USA,1995,"Black,Atmospheric black,Depressive black"
2306,Lord Vicar,14,2007,Finland,-,Doom
2307,Lucifer,14,2014,Germany,2014,"Doom,Stoner"
2308,Mandrake,14,1997,Germany,-,Gothic
2309,Monarque,14,2003,Canada,2003,Black
2310,My Silent Wake,14,2005,United Kingdom,-,"Death doom,Gothic"
2311,Nechochwen,14,2005,USA,2005,"Neofolk ,Black"
2312,Necrowretch,14,2008,France,-,Death
2313,Noctiferia,14,1992,Slovenia,1992,"Black,Industrial,Death"
2314,Nordjevel,14,2015,Norway,-,Black
2315,Nu.Clear.Dawn,14,1997,Syria,1997,Progressive
2316,Oakenshield,14,2004,United Kingdom,-,Viking folk
2317,Oddland,14,2002,Finland,2002,"Progressive rock,Progressive"
2318,Once Human,14,2015,USA,-,Melodic death
2319,Ophthalamia,14,1989,Sweden,1989,Black
2320,Ossian,14,1986,Hungary,-,Heavy
2321,Outre,14,2012,Poland,2012,Black
2322,Panzerballett,14,2004,Germany,-,"Progressive,Jazz"
2323,Pestifer,14,2004,Belgium,2004,Technical death
2324,Postmortem,14,2004,Iran,-,"Death,Doom"
2325,Psilocybe Larvae,14,1996,Russia,1996,"Progressive black,Death doom"
2326,Qutin,14,2002,Iran,-,"Progressive death,Technical thrash"
2327,Rain Delay,14,2003,Serbia,2003,Avantgarde
2328,Ramesses,14,2003,United Kingdom,-,"Doom,Stoner"
2329,Svarttjern,14,2003,Norway,2003,Black
2330,Synarchy,14,2004,Faroe Islands,-,"Melodic death,Thrash"
2331,The Eternal,14,2003,Australia,2003,"Gothic doom,Gothic,Gothic rock"
2332,The Wounded,14,1998,The Netherlands,-,"Gothic,Atmospheric rock"
2333,Undersmile,14,2009,United Kingdom,2009,"Sludge,Doom"
2334,Unshine,14,2001,Finland,-,Symphonic
2335,Voodoo Circle,14,2008,Germany,2008,"Heavy,Power,Hard rock"
2336,Voodoocult,14,1994,Germany,1996,Thrash
2337,Waking The Cadaver,14,2004,USA,2004,"Brutal deathcore,Death"
2338,Wayd,14,1994,Slovak Republic,-,Progressive death
2339,Wo Fat,14,2003,USA,2003,"Psychedelic doom,Stoner rock"
2340,(EchO),13,2007,Italy,-,Psychedelic doom
2341,Absentation,13,2001,Syria,2001,Death
2342,Ahoora,13,2001,Iran,-,Progressive
2343,All Pigs Must Die,13,2010,USA,2010,"Grindcore,Hardcore"
2344,Amederia,13,2006,Russia,-,"Doom,Gothic"
2345,Anagnorisis,13,2003,USA,2003,"Death,Black"
2346,Anthriel,13,2004,Finland,-,"Progressive,Neoclassical power"
2347,Antigama,13,2000,Poland,2000,Experimental grindcore
2348,Avec Tristesse,13,2000,Brazil,-,Extreme progressive
2349,Beastwars,13,2007,New Zealand,2007,"Sludge,Stoner"
2350,Candiria,13,1992,USA,-,"Jazz,Avantgarde math,Grindcore,Fusion"
2351,Celtic Legacy,13,1997,Ireland,1997,Heavy
2352,Chalice,13,1997,Australia,2007,Gothic doom
2353,Claymore,13,1999,Bulgaria,1999,"Melodic death,Melodic black"
2354,Cornerstone,13,1999,Denmark,-,"Hard rock,Heavy"
2355,Crow Black Sky,13,2009,South Africa,2009,"Melodic death,Black"
2356,D�cembre Noir,13,2008,Germany,-,Death doom
2357,Dark Castle,13,2005,USA,2005,"Doom,Sludge"
2358,Deranged,13,1991,Sweden,-,Death
2359,Dirty Shirt,13,1995,Romania,1995,"Alternative,Crossover folk,Progressive"
2360,Distorted Harmony,13,2009,Israel,-,Progressive
2361,Djevel,13,2009,Norway,2009,Black
2362,Dragony,13,2007,Austria,-,Power
2363,Earth And Pillars,13,2014,Italy,2014,Atmospheric black
2364,Elysian,13,2006,Australia,-,Progressive death
2365,Enfold Darkness,13,2006,USA,2006,"Black,Death"
2366,Fac�nora,13,2006,Brazil,-,Thrash
2367,Farmakon,13,2001,Finland,2001,Extreme progressive
2368,Fleurety,13,1991,Norway,-,"Black,Avantgarde"
2369,Frontside,13,1993,Poland,1993,Metalcore
2370,Fyrnask,13,2008,Germany,-,Black
2371,Grailknights,13,2002,Germany,2002,"Gothenburg,Power"
2372,Hortus Animae,13,1997,Italy,-,Symphonic black
2373,Human Rejection,13,2005,"Greece, USA",2005,Brutal death
2374,In Malice's Wake,13,2001,Australia,-,Thrash
2375,In Slumber,13,2002,Austria,2002,Melodic death
2376,Interment,13,1988,Sweden,-,Death
2377,Intruder,13,1984,USA,1984,Technical thrash
2378,Jordan Rudess,13,1988,USA,-,"Progressive,New age"
2379,Kaamos,13,1998,Sweden,1998,Death
2380,Kadenzza,13,1993,Japan,-,Avantgarde black
2381,Karelia,13,1999,France,1999,"Symphonic power,Gothic,Industrial"
2382,Kult Ov Azazel,13,2000,USA,-,Black
2383,Liv Moon,13,2009,Japan,2009,Symphonic
2384,Lord Vampyr,13,2004,Italy,-,"Black,Gothic"
2385,Lunatic Gods,13,1993,Slovak Republic,1993,"Atmospheric black,Death doom"
2386,Lycus,13,2008,USA,-,Funeral doom
2387,Mantar,13,2012,Germany,2012,Sludge
2388,Modern Day Babylon,13,2010,Czech Republic,-,"Progressive,Djent"
2389,Murder Construct,13,2001,USA,2001,Deathgrind
2390,Obsession,13,1982,USA,-,Us power
2391,Panzer (GER),13,2014,Germany,2014,Heavy
2392,Pathosray,13,2000,Italy,-,Progressive
2393,Plebeian Grandstand,13,2005,France,2005,"Black,Hardcore"
2394,Probot,13,2001,USA,2004,"Heavy,Stoner"
2395,Psygnosis,13,2009,France,2009,Extreme progressive
2396,Purtenance,13,1989,Finland,-,Death
2397,Quorthon,13,1993,Sweden,1993,"Alternative,Alternative rock"
2398,Redwood Hill,13,2010,Denmark,-,"Post-metal,Black"
2399,Reverence,13,1998,France,1998,"Black,Industrial"
2400,Saga,13,1977,Canada,-,Progressive rock
2401,Selvans,13,2014,Italy,2014,"Atmospheric black,Folk"
2402,Septycal Gorge,13,2004,Italy,-,"Brutal death,Technical death"
2403,Sir Lord Baltimore,13,1968,USA,1968,"Heavy,Hard rock"
2404,Sk�phe,13,2014,USA,-,Black
2405,Sleestak,13,2003,USA,2003,"Stoner,Psychedelic rock"
2406,Sotajumala,13,1998,Finland,2016,Death
2407,Soul Secret,13,2004,Italy,2004,Progressive
2408,Sound Storm,13,2002,Italy,-,Symphonic power
2409,Soziedad Alkoholika,13,1988,Spain,1988,Crossover thrash
2410,Spitfire,13,1984,Greece,-,Power
2411,Switchtense,13,2002,Portugal,2002,Groove thrash
2412,Synestesia,13,2001,Finland,2012,Gothenburg
2413,Talanas,13,2008,United Kingdom,2008,Progressive death
2414,The Legion,13,1999,Sweden,2010,Black
2415,The SLoT,13,2002,Russia,2002,"Alternative,Nu"
2416,The Slow Death,13,2007,Australia,-,Death doom
2417,The Spektrum,13,2005,Portugal,2005,"Death,Gothic"
2418,Thine Eyes Bleed,13,2002,Canada,-,"Death,Thrash"
2419,This Ending,13,2005,Sweden,2005,Melodic death
2420,Thy Darkened Shade,13,1999,Greece,-,Black
2421,"Tim ""Ripper"" Owens",13,2008,USA,2008,Heavy
2422,Tomorrow's Eve,13,1998,Germany,-,Progressive
2423,Trollech,13,1999,Czech Republic,1999,Pagan black
2424,Trooper,13,1995,Romania,-,Heavy
2425,Vanhelgd,13,2007,Sweden,2007,Death
2426,Vanir,13,2009,Denmark,-,"Viking folk,Melodic death"
2427,Vastum,13,2009,USA,2009,Death
2428,Vendetta (GER),13,1984,Germany,-,Thrash
2429,Vh�l,13,2012,USA,2012,"Heavy,Crust punk"
2430,Visceral Disgorge,13,2007,USA,-,Brutal death
2431,Voices Of Destiny,13,2004,Germany,2004,"Symphonic,Heavy"
2432,Wargasm,13,1982,USA,1995,"Thrash,Heavy"
2433,World Under Blood,13,2006,USA,2006,Melodic death
2434,Aarni,12,1998,Finland,-,Avantgarde
2435,Addaura,12,2008,USA,2008,Experimental black
2436,Anarchadia,12,2012,Syria,-,Thrash
2437,Apathy Noir,12,2003,Sweden,2003,"Death doom,Progressive"
2438,Aras,12,2001,Iran,-,Atmospheric black
2439,Atriarch,12,2009,USA,2009,Blackened doom
2440,Backyard Babies,12,1987,Sweden,-,"Hard rock,Glam"
2441,Black River,12,2008,Poland,2008,"Heavy,Stoner"
2442,Black Wreath,12,2002,Denmark,-,"Funeral doom,Death doom"
2443,Bloody Panda,12,2003,USA,2003,"Drone doom,Sludge"
2444,Botch,12,1993,USA,2002,"Math,Metalcore"
2445,Burnt By The Sun,12,1999,USA,1999,Metalcore
2446,Ca�na,12,2004,United Kingdom,-,"Black,Post-metal"
2447,Castle,12,2009,USA,2009,"Doom,Heavy"
2448,Cripple Bastards,12,1988,Italy,-,Grindcore
2449,Damned Spirits' Dance,12,2002,Hungary,2002,"Black,Avantgarde,Melodic black"
2450,Devolved,12,1996,Australia,-,"Death,Industrial,Technical death"
2451,Domain,12,1988,Germany,1988,Power
2452,Dream Death,12,1985,USA,-,"Doom,Death,Thrash"
2453,E�s,12,2010,Germany,2010,Black
2454,Eidolon,12,1993,Canada,-,"Power,Speed"
2455,Elegeion,12,1995,Australia,1995,Doom
2456,Emyn Muil,12,2012,Italy,-,Atmospheric black
2457,Entropia (POL),12,2007,Poland,2007,"Black,Post-metal"
2458,Explode,12,1999,Iran,-,Progressive
2459,Foscor,12,1997,Spain,1997,Black
2460,Gospel Of The Horns,12,1993,Australia,-,Black
2461,Grimner,12,2008,Sweden,2008,Folk
2462,H�ive,12,2002,Finland,-,"Black,Folk"
2463,Hammercult,12,2010,"Israel, Germany",2010,"Death,Thrash"
2464,Hermh,12,1993,Poland,-,"Black,Symphonic black,Gothic"
2465,Holy Blood,12,1999,Ukraine,1999,"Hardcore,Melodic death,Black,Folk,Brutal death"
2466,Holy Knights,12,1998,Italy,-,"Power,Symphonic"
2467,Impious,12,1994,Sweden,1994,"Death,Thrash"
2468,In-Quest,12,1994,Belgium,2014,Technical death
2469,Izah,12,2006,The Netherlands,2006,Sludge
2470,Kistvaen,12,2008,Romania,-,Black
2471,Kraanium,12,2001,Norway,2001,Brutal death
2472,Letzte Instanz,12,1996,Germany,-,"Folk,Industrial,Gothic"
2473,Lords Of Black,12,2014,Spain,2014,Heavy
2474,Luna Ad Noctum,12,1998,Poland,-,Symphonic black
2475,Macabre Omen,12,1994,Greece,1994,Pagan black
2476,Majestic,12,1997,Sweden,-,Power
2477,Mencea,12,2004,Greece,2004,Progressive death
2478,Minority Sound,12,2007,Czech Republic,-,Electronic industrial
2479,Miserere Luminis,12,2008,Canada,2008,Black
2480,Nebelhorn,12,2004,Germany,-,Viking black
2481,Neonfly,12,2008,United Kingdom,2008,Power
2482,No Return,12,1989,France,-,"Death,Thrash"
2483,Oathbreaker,12,2008,Belgium,2008,"Black,Post-metal,Hardcore"
2484,Obsidian,12,1997,The Netherlands,2012,Progressive death
2485,Otargos,12,2001,France,2001,Black
2486,Pegazus,12,1993,Australia,-,Heavy
2487,Philip H. Anselmo & The Illegals,12,2011,USA,2011,Sludge
2488,Porta Nigra,12,2010,Germany,-,"Avantgarde black,Doom"
2489,Portrait,12,2006,Sweden,2006,Heavy
2490,Psychostick,12,2000,USA,-,"Groove thrash,Comedy"
2491,Razorwyre,12,2008,New Zealand,2008,Thrash
2492,Salamandra,12,1998,Czech Republic,-,"Power,Speed"
2493,Sanctification,12,2001,Sweden,2001,Death
2494,Sarpanitum,12,2003,United Kingdom,-,Brutal death
2495,Scorpion Child,12,2006,USA,2006,Hard rock
2496,Seven Witches,12,1998,USA,-,Heavy
2497,Sivyj Yar,12,2006,Russia,2006,Pagan black
2498,Soulgrind,12,1992,Finland,-,"Black,Gothic"
2499,Spires,12,2008,United Kingdom,2008,Extreme progressive
2500,Spiritus Mortis,12,1987,Finland,-,Doom
2501,Survivor,12,1976,USA,1976,Heavy
2502,Survivors Zero,12,2006,Finland,-,Melodic death
2503,Symbyosis,12,1998,France,1998,Progressive death
2504,Tarantula,12,1981,Portugal,-,"Power,Heavy"
2505,Temple Of Baal,12,1998,France,1998,Black
2506,The Fading,12,2006,Israel,-,Melodic death
2507,The Safety Fire,12,2006,United Kingdom,2006,Progressive
2508,Theudho,12,2003,Belgium,-,Pagan black
2509,Thrown To The Sun,12,2010,Turkey,2010,Progressive death
2510,Torture Division,12,2007,Sweden,2014,Death
2511,Unearthly Trance,12,2000,USA,2000,"Doom,Sludge"
2512,V8,12,1979,Argentina,1987,Heavy
2513,White Walls,12,2009,Romania,2009,Progressive
2514,Wilds Forlorn,12,2008,The Netherlands,-,"Atmospheric black,Depressive black"
2515,Winter In Eden,12,2007,United Kingdom,2007,Symphonic gothic
2516,Woe,12,2007,USA,-,Black
2517,5ive,11,2000,USA,2000,"Sludge,Post-metal"
2518,Abgott,11,1997,United Kingdom,-,Black
2519,Abiotic,11,2010,USA,2010,"Progressive deathcore,Technical death"
2520,Abske Fides,11,2003,Brazil,-,"Funeral doom,Death doom"
2521,Across The Sun,11,2004,USA,2004,Metalcore
2522,Aeba,11,1992,Germany,2013,Black
2523,Aeon Of Horus,11,2006,Australia,2006,"Progressive death,Technical death"
2524,Agonizer,11,1998,Finland,-,Heavy
2525,Akrea,11,2005,Germany,2005,Melodic death
2526,Alterbeast,11,2013,USA,-,Technical death
2527,Ancestral Legacy,11,1995,Norway,1995,"Symphonic black,Gothic"
2528,Animations,11,2007,Poland,-,"Progressive,Progressive death,Metalcore"
2529,Antropomorphia,11,1989,The Netherlands,1989,Death
2530,Argus Megere,11,2005,Romania,-,Black
2531,Arwen,11,1996,Spain,1996,"Power,Progressive"
2532,Astra (USA),11,2006,USA,-,"Progressive rock,Psychedelic rock"
2533,Audrey Horne,11,2002,Norway,2002,"Hard rock,Alternative rock"
2534,Black Tongue,11,2013,United Kingdom,-,Deathcore
2535,Black Witchery,11,1991,USA,1991,"Black,Death"
2536,Blood Feast,11,1986,USA,-,"Death,Thrash"
2537,Blood Of Kingu,11,2005,Ukraine,2005,Black
2538,Bonfire,11,1985,Germany,-,"Hard rock,Heavy"
2539,Canopy,11,2002,Sweden,2002,Melodic death
2540,Creation's End,11,2003,USA,-,Progressive
2541,Cronian,11,2005,Norway,2005,Progressive
2542,Crystal Ball,11,1995,Switzerland,-,Power
2543,Dark Quarterer,11,1974,Italy,1974,"Heavy,Progressive,Hard rock"
2544,Dead To A Dying World,11,2010,USA,-,"Blackened doom,Sludge,Crust,Punk"
2545,Desecravity,11,2007,Japan,2007,"Technical death,Brutal death"
2546,Duskmourn,11,2012,USA,-,"Folk,Melodic death"
2547,Dylath-Leen,11,1999,France,1999,Melodic death
2548,Elfon�a,11,2001,Mexico,2006,"Progressive,Progressive rock"
2549,Enforsaken,11,1998,USA,1998,Gothenburg
2550,Eschatos,11,2012,Latvia,-,Progressive black
2551,Ethereal Shroud,11,2013,United Kingdom,2013,"Black,Funeral doom"
2552,Evertale,11,2007,Germany,-,"Power,Heavy"
2553,Farsot,11,1999,Germany,1999,Black
2554,Faustcoven,11,2002,Norway,-,"Black,Doom"
2555,Fear Of Eternity,11,2000,Italy,2000,Atmospheric black
2556,Fleshgrind,11,1993,USA,2005,Death
2557,Frantic Amber,11,2008,Sweden,2008,Melodic death
2558,Fukpig,11,2001,United Kingdom,-,"Black,Crust,Punk"
2559,Fungoid Stream,11,2003,Argentina,2003,Funeral doom
2560,Gaia Epicus,11,1992,Norway,-,Power
2561,Golem,11,2000,Italy,2000,Melodic death
2562,Gyze,11,2009,Japan,-,Extreme power
2563,Headhunter,11,1989,Germany,1989,"Power,Thrash"
2564,Hexx,11,1983,USA,-,"Us power,Speed,Thrash"
2565,Himinbjorg,11,1996,France,1996,Pagan black
2566,Horn,11,2003,Germany,-,Black
2567,House Of Lords,11,1988,USA,1988,Hard rock
2568,In Lingua Mortua,11,1999,Norway,-,Melodic black
2569,Iniquity,11,1989,Denmark,1989,Technical death
2570,Iron Angel,11,1980,Germany,-,"Power,Speed,Thrash,Heavy"
2571,Ironsword,11,1995,Portugal,1995,Heavy
2572,Irreversible,11,2005,USA,2015,Atmospheric sludge
2573,IXXI,11,2006,Sweden,2006,Black
2574,Liturgy (US-NY),11,2005,USA,-,Experimental black
2575,Lycanthia,11,1996,Australia,1996,"Death doom,Gothic doom"
2576,Malpractice,11,1994,Finland,-,"Thrash,Progressive"
2577,Memoira,11,2007,Finland,2007,Gothic
2578,Messenger,11,1990,Germany,-,Heavy
2579,Mindflow,11,2003,Brazil,2003,Progressive
2580,Morifade,11,1992,Sweden,-,Power
2581,Mortem,11,1986,Peru,1986,Death
2582,Mournful Gust,11,1999,Ukraine,-,"Death doom,Gothic"
2583,Nidingr,11,1992,Norway,1992,Black
2584,Nominon,11,1993,Sweden,-,"Blackened death,Death"
2585,Nylithia,11,2008,Canada,2008,Thrash
2586,Omb,11,2009,Israel,-,"Progressive,Avantgarde"
2587,Omega Massif,11,2005,Germany,2005,Sludge
2588,Pain Confessor,11,2002,Finland,-,Melodic death
2589,Phobia,11,1990,USA,1990,Grindcore
2590,Pitchshifter,11,1989,United Kingdom,-,"Industrial,Alternative"
2591,Power Symphony,11,1994,Italy,1994,Power
2592,Puteraeon,11,2008,Sweden,-,Death
2593,Radiance (FIN),11,2007,Finland,2007,"Progressive,Math"
2594,Radogost,11,2006,Poland,-,Folk
2595,Rwake,11,1996,USA,1996,"Doom,Sludge"
2596,Sacred Steel,11,1997,Germany,-,"Heavy,Power"
2597,Samhain,11,1983,USA,1983,"Death rock,Hard rock,Horror,Punk"
2598,Sanatorium,11,1987,Macedonia,-,"Speed,Thrash"
2599,Serenity In Murder,11,2009,Japan,2009,"Symphonic black,Symphonic death"
2600,Shadow,11,1993,Japan,-,Melodic death
2601,Shadowsphere,11,2000,Portugal,2000,Gothenburg
2602,Shattered Skies,11,2011,Ireland,-,"Progressive,Djent"
2603,Shear,11,2008,Finland,2008,Power
2604,Soilent Green,11,1988,USA,-,"Sludge,Grindcore"
2605,Steel Prophet,11,1983,USA,1983,Us power
2606,Sumac,11,2014,USA,-,"Post-metal,Sludge"
2607,Sworn Enemy,11,1997,USA,1997,"Metalcore,Hardcore"
2608,Sylvaine,11,2013,Norway,-,"Atmospheric black,Shoegaze"
2609,Tears Of Martyr,11,1996,Spain,1996,Gothic
2610,Tempel,11,2003,USA,-,"Extreme progressive,Instrumental"
2611,The Great Kat,11,1986,USA,1986,"Neoclassical heavy,Speed,Thrash"
2612,Thunder,11,1989,United Kingdom,-,Hard rock
2613,Twilight Guardians,11,1996,Finland,1996,Power
2614,Twilight Of The Gods,11,2010,,-,Heavy
2615,Vanguard,11,1999,Finland,1999,Gothic
2616,Viking,11,1985,USA,-,Thrash
2617,Virgin Snatch,11,2001,Poland,2001,"Thrash,Groove thrash"
2618,Weeping Birth,11,1999,Switzerland,-,"Brutal death,Black"
2619,With The Dead,11,2014,United Kingdom,2014,"Doom,Stoner"
2620,Wolvhammer,11,2008,USA,-,Blackened sludge
2621,Zhrine,11,2015,Iceland,2015,Death
2622,Zyklon-B,11,1995,Norway,1999,Black
2623,�rsaidh,10,2012,United Kingdom,2012,"Atmospheric black,Folk"
2624,6:33,10,2010,France,-,"Alternative,Avantgarde"
2625,A Dream Of Poe,10,2005,"Portugal, United Kingdom",2005,"Doom,Gothic"
2626,A Million Dead Birds Laughing,10,2008,Australia,-,"Technical death,Grindcore"
2627,Abattoir,10,1982,USA,1982,Speed
2628,Abstract Spirit,10,2006,Russia,-,Funeral doom
2629,Adimiron,10,1999,Italy,1999,"Melodic death,Melodic black,Progressive death,Thrash"
2630,After Oblivion,10,2007,Bosnia and Herzegovina,-,Technical thrash
2631,Against The Plagues,10,2005,USA,2005,"Symphonic black,Melodic death"
2632,Alaskan,10,2008,Canada,-,Sludge
2633,Alpine Fault,10,2005,Australia,2005,Melodic progressive
2634,Alunah,10,2006,United Kingdom,-,"Doom,Stoner"
2635,Andras,10,1994,Germany,1994,"Black,Pagan black"
2636,Anomalie,10,2011,Austria,-,"Black,Post-metal"
2637,Atrocious Abnormality,10,2006,USA,2006,Brutal death
2638,Autumn's Dawn,10,2013,Australia,-,Depressive black
2639,Betzefer,10,1997,Israel,1997,"Death,Sludge"
2640,Blaakyum,10,1995,Lebanon,-,"Doom,Thrash,Heavy,Progressive"
2641,Brimstone Coven,10,2011,USA,2011,"Doom,Stoner rock"
2642,Casketgarden,10,1998,Hungary,2012,Thrash
2643,Catalepsia,10,2005,Latvia,2005,Gothic doom
2644,Cautiva,10,2007,Spain,-,"Thrash,Progressive"
2645,Celestial Crown,10,1999,Estonia,1999,"Black,Gothic doom"
2646,Cnoc An Tursa,10,2006,United Kingdom,-,"Folk,Black"
2647,Cult Of Herodias,10,2012,USA,2012,Doom
2648,D'espairsRay,10,1999,Japan,2011,"Industrial,J rock"
2649,Dark At Dawn,10,1993,Germany,1993,Power
2650,Dawn Of Azazel,10,1997,New Zealand,-,Death
2651,Dawn Of Disease,10,2003,Germany,2003,Death
2652,Dawnless,10,2003,Switzerland,-,"Heavy,Power"
2653,Death Fetishist,10,2015,USA,2015,Psychedelic black
2654,Dee Snider,10,1997,USA,-,Heavy
2655,Defiled,10,1992,Japan,1992,Brutal death
2656,Defleshed,10,1991,Sweden,2005,"Death,Thrash"
2657,Demisery,10,2011,USA,2011,Death
2658,Diathra,10,1995,Belarus,-,"Doom,Gothic"
2659,Diocletian,10,2004,New Zealand,2004,"Black,Death"
2660,Disentomb,10,2009,Australia,-,Brutal death
2661,Disforia,10,2007,USA,2007,"Power,Progressive"
2662,Disharmonic Orchestra,10,1987,Austria,-,"Death,Grindcore,Avantgarde,Progressive"
2663,Dissenter,10,1989,Poland,1989,Brutal death
2664,Divine Empire,10,1997,USA,-,"Death,Thrash"
2665,Dreamaker,10,2003,Spain,2003,"Power,Thrash"
2666,Dreaming Dead,10,2006,USA,-,"Death,Thrash"
2667,Dyrathor,10,2006,Germany,2006,Pagan folk
2668,Dyscordia,10,2010,Belgium,-,Progressive
2669,Dysrhythmia,10,1998,USA,1998,Technical progressive
2670,Ebonylake,10,1997,United Kingdom,-,"Avantgarde,Black"
2671,Embryonic Devourment,10,2002,USA,2002,"Brutal death,Grindcore"
2672,Emeth,10,1997,Belgium,-,"Death,Brutal death,Technical death"
2673,Eternal Gray,10,2001,Israel,2001,"Technical death,Melodic death"
2674,Fall Of Serenity,10,1998,Germany,-,"Gothenburg,Death"
2675,Faster Pussycat,10,1986,USA,1986,"Hard rock,Glam"
2676,Fjorsvartnir,10,2007,Denmark,-,Melodic black
2677,Gadget,10,1999,Sweden,1999,Grindcore
2678,Gates Of Winter,10,2003,Canada,-,Symphonic progressive
2679,Geezer,10,1985,USA,1985,"Heavy,Industrial heavy"
2680,Ghost Machinery,10,2002,Finland,-,Power
2681,Girug�mesh,10,2003,Japan,2003,"J rock,Alternative,Power"
2682,Godkiller,10,1994,Monaco,-,"Death,Black,Industrial black,Electronic,Metal"
2683,Grave Flowers,10,1993,Sweden,1993,Doom
2684,Guillotine,10,1995,Sweden,-,Thrash
2685,Halloween,10,1981,USA,1981,Heavy
2686,Heidra,10,2006,Denmark,-,Viking folk
2687,Hollow Haze,10,2003,Italy,2003,Progressive heavy
2688,Irreversible Mechanism,10,2012,Belarus,-,"Technical death,Symphonic death"
2689,Ivory Tower,10,1996,Germany,1996,"Progressive,Power"
2690,Kab�t,10,1983,Czech Republic,-,"Thrash,Melodic heavy,Hard rock"
2691,Lana Lane,10,1995,USA,1995,Progressive
2692,Lay Down Rotten,10,1999,Germany,2015,Death
2693,Light Bearer,10,2010,United Kingdom,2010,"Post-metal,Sludge"
2694,Livsnekad,10,2007,Sweden,2012,"Black,Doom"
2695,Lord Dying,10,2010,USA,2010,Sludge
2696,Luciferian Light Orchestra,10,2014,Sweden,-,Psychedelic rock
2697,Ludicra,10,1998,USA,1998,Black
2698,Lunaris,10,1998,Norway,-,Progressive black
2699,McAuley Schenker Group,10,1986,Germany,1986,"Hard rock,Glam"
2700,Miasmal,10,2007,Sweden,-,Death
2701,Misery Loves Co.,10,1993,Sweden,1993,"Industrial,Alternative"
2702,Monolord,10,2013,Sweden,-,"Stoner,Doom"
2703,Mortillery,10,2008,Canada,2008,Thrash
2704,Morton,10,2009,Ukraine,-,"Heavy,Power"
2705,Mythological Cold Towers,10,1994,Brazil,1994,Doom
2706,Neuromist,10,2004,Moldova,-,Progressive death
2707,Night Of Suicide,10,2005,The Netherlands,2005,Funeral doom
2708,Nine Treasures,10,2011,China,-,Folk
2709,Noisem,10,2013,USA,2013,"Death,Thrash"
2710,Nordheim,10,2006,Canada,-,"Blackened folk,Melodic death"
2711,Northlane,10,2009,Australia,2009,Progressive metalcore
2712,Opprobrium,10,1999,USA,-,"Death,Thrash"
2713,Orakle,10,1994,France,1994,"Atmospheric black,Avantgarde"
2714,Ortega,10,2007,The Netherlands,-,"Doom,Sludge"
2715,Outcast,10,1998,France,1998,"Progressive thrash,Progressive death"
2716,Potentiam,10,1997,Iceland,-,"Avantgarde black,Blackened death,Suomi"
2717,Prey For Nothing,10,2005,Israel,2005,Melodic death
2718,Razor Of Occam,10,1998,Australia,-,"Black,Thrash"
2719,Satura,10,2008,Iran,2008,"Metalcore,Groove thrash"
2720,Scream Silence,10,1998,Germany,-,Gothic
2721,Secrets Of The Sky,10,2010,USA,2010,"Black,Doom"
2722,Sight Of Emptiness,10,2005,Costa Rica,-,Gothenburg
2723,Syn Ze ?ase Tri,10,2007,Romania,2007,Symphonic black
2724,Tales Of Dark...,10,2001,Serbia,-,"Death doom,Gothic"
2725,The Interbeing,10,2006,Denmark,2006,Industrial
2726,The Poodles,10,2005,Sweden,-,"Glam,Melodic heavy,Hard rock"
2727,The Resistance,10,2011,Sweden,2011,Death
2728,Thr�nenkind,10,2007,Germany,-,"Black,Post-punk"
2729,Twilight,10,2004,USA,2004,Black
2730,Valient Thorr,10,2000,USA,-,Heavy
2731,Waldgefl�ster,10,2005,Germany,2005,Black
2732,Waning,10,2007,Sweden,2016,Progressive black
2733,Wind Rose,10,2009,Italy,2009,"Progressive,Power"
2734,Within Y,10,2002,Sweden,-,Melodic death
2735,Abandoned,9,1999,Germany,1999,Thrash
2736,Abidetherein,9,2010,Syria,-,"Black,Folk"
2737,Abscess,9,1994,USA,1994,Death
2738,Acid Reign,9,1985,United Kingdom,-,Thrash
2739,Afgrund,9,2006,Sweden,2006,"Grindcore,Crust punk"
2740,Alpha Tiger,9,2007,Germany,-,"Thrash,Power"
2741,Anup Sastry,9,2012,USA,2012,"Progressive,Djent,Instrumental"
2742,Arbor,9,2011,USA,-,"Doom,Folk,Progressive"
2743,Arrow Haze,9,2011,Belgium,2011,Hard rock
2744,Arsafes,9,2009,Russia,-,"Extreme progressive,Industrial"
2745,As You Drown,9,2001,Sweden,2001,"Death,Deathcore"
2746,Bare Infinity,9,2003,Greece,-,Symphonic power
2747,Beneath,9,2007,Iceland,2007,Technical death
2748,Cadavrul,9,2005,Romania,-,Death
2749,Canga�o,9,2010,Brazil,2010,Progressive death
2750,Cans,9,2003,Sweden,-,Heavy
2751,Cardiant,9,2000,Finland,2000,Power
2752,Carnophage,9,2006,Turkey,-,"Technical death,Brutal death"
2753,Catharsis,9,1996,Russia,1996,"Doom,Neoclassical power"
2754,Celestial Season,9,1991,The Netherlands,-,"Death,Doom,Stoner"
2755,Chain Reaction,9,2002,Poland,2002,Groove thrash
2756,Chris Caffery,9,2003,USA,-,Progressive power
2757,Confessor,9,1986,USA,1986,Doom
2758,Crown,9,2011,France,-,"Doom,Sludge"
2759,Diminished,9,2005,USA,2005,"Brutal death,Grindcore"
2760,Dirge Within,9,2007,USA,2013,"Thrash,Metalcore"
2761,Discordance Axis,9,1992,USA,1992,Grindcore
2762,Divlje Jagode,9,1976,"Bosnia and Herzegovina, Croatia",-,"Heavy,Hard rock"
2763,Domovoyd,9,2010,Finland,2010,Psychedelic stoner
2764,Dotma,9,2005,Finland,-,Symphonic power
2765,Drautran,9,1996,Germany,1996,Black
2766,Ebony Ark,9,2002,Spain,-,"Power,Progressive"
2767,Echoterra,9,2007,USA,2007,Symphonic
2768,Ecnephias,9,1996,Italy,-,"Blackened death,Doom,Gothic death"
2769,Eden Circus,9,2010,Germany,2010,"Alternative,Progressive,Post-metal"
2770,Emir Hot,9,2007,Bosnia and Herzegovina,-,Progressive
2771,Enthrallment,9,1998,Bulgaria,1998,Brutal death
2772,Eudaimony,9,2007,Germany,-,"Post-metal,Black"
2773,Evil Invaders,9,2007,Belgium,2007,"Speed,Thrash"
2774,Exsecratus,9,2004,Finland,2013,"Melodic death,Gothic"
2775,Fogalord,9,2007,Italy,2007,"Power,Symphonic"
2776,Graves At Sea,9,2002,USA,-,"Doom,Sludge"
2777,Heir Apparent,9,1983,USA,1983,Progressive
2778,Hevisaurus,9,2009,Finland,-,"Heavy,Power"
2779,Hjarnidaudi,9,2005,Norway,2005,Drone doom
2780,Hope For The Dying,9,2006,USA,-,Progressive death
2781,Horde,9,1994,Australia,1994,Black
2782,Human Mincer,9,1996,Spain,-,Brutal death
2783,Icon & The Black Roses,9,1999,Portugal,1999,Gothic
2784,Illuminandi,9,1998,Poland,-,Gothic folk
2785,Inner Sanctum,9,2006,India,2006,"Death,Thrash"
2786,Innosense,9,2005,Greece,-,Melodic progressive
2787,Iris,9,1977,Romania,1977,Hard rock
2788,Japanische Kampfh�rspiele,9,1998,Germany,-,Grindcore
2789,Jucifer,9,1993,USA,1993,"Alternative rock,Sludge,Alternative,Noise"
2790,Khthoniik Cerviiks,9,2013,Germany,-,"Black,Death"
2791,Latitudes,9,2006,United Kingdom,2006,"Post-metal,Sludge"
2792,Los Random,9,2009,Argentina,-,"Progressive,Avantgarde"
2793,Loss (USA),9,2003,USA,2003,Funeral doom
2794,Mastercastle,9,2008,Italy,-,Heavy
2795,Memory Garden,9,1992,Sweden,1992,"Heavy,Doom"
2796,Moby Dick,9,1980,Hungary,-,Thrash
2797,Moonlight Agony,9,1999,Sweden,1999,Power
2798,Mordred,9,1984,USA,-,"Thrash,Funk rock"
2799,Mortals,9,2009,USA,2009,"Sludge,Hardcore,Blackened sludge,Punk"
2800,Na�ra,9,2008,Iceland,-,Black
2801,Narrow House,9,2008,Ukraine,2008,"Funeral doom,Doom"
2802,Nemertines,9,2009,Russia,-,"Progressive math,Djent"
2803,Nhor,9,2009,United Kingdom,2009,"Atmospheric black,Doom,Ambient,Folk"
2804,Nucleus Torn,9,1997,Switzerland,-,"Alternative,Neofolk"
2805,Oak Pantheon,9,2011,USA,2011,"Melodic black,Post-metal"
2806,Oracles,9,2014,Belgium,-,"Melodic death,Symphonic"
2807,Ordinance,9,2009,USA,2009,"Progressive death,Technical death"
2808,Paganizer,9,1998,Sweden,-,Death
2809,Pandemia,9,1995,Czech Republic,1995,Death
2810,Pantheon I,9,2002,Norway,-,Black
2811,Pantommind,9,1993,Bulgaria,1993,Progressive
2812,Rebel Meets Rebel,9,1999,USA,2004,"Heavy,Country"
2813,Ribspreader,9,2002,Sweden,2002,Death
2814,Sacred Oath,9,1985,USA,-,"Us power,Heavy"
2815,Samsara Blues Experiment,9,2007,Germany,2007,Stoner
2816,Satyrian,9,2004,The Netherlands,-,Gothic
2817,Savn,9,2013,Norway,2013,Symphonic gothic
2818,Sole Remedy,9,1998,Finland,-,Atmospheric progressive
2819,Sorcerer,9,1988,Sweden,1988,Epic doom
2820,Sortil�ge,9,1981,France,1986,Heavy
2821,Soulitude,9,2006,Spain,2006,Power
2822,Stille Volk,9,1994,France,-,Medieval folk
2823,Subversion,9,2008,United Kingdom,2008,"Melodic death,Symphonic,Djent"
2824,Success Will Write Apocalypse Across The Sky,9,2006,USA,-,Deathgrind
2825,Taak,9,2005,Estonia,2005,Doom
2826,Terhen,9,2004,Finland,-,Atmospheric doom
2827,The Bereaved,9,1998,Sweden,1998,Gothenburg
2828,The Crest,9,1996,Norway,2010,"Gothic,Gothic rock"
2829,The Graviators,9,2009,Sweden,2009,"Stoner,Doom"
2830,Thee Orakle,9,2004,Portugal,2013,"Progressive death,Gothic"
2831,Timeghoul,9,1987,USA,1987,Progressive death
2832,Uada,9,2014,USA,-,Black
2833,Vengeful,9,2003,Canada,2003,Technical death
2834,Vermin Womb,9,2014,USA,-,"Death,Grindcore"
2835,Victory,9,1984,Germany,1984,Heavy
2836,Visigoth,9,2010,USA,-,"Heavy,Power"
2837,Winterhymn,9,2010,USA,2010,Folk
2838,Aberrant Vascular,8,2003,Finland,-,"Avantgarde,Symphonic"
2839,Acacia,8,2012,Sweden,2012,"Black,Doom"
2840,Advent Of Bedlam,8,2009,Costa Rica,-,"Melodic death,Death"
2841,Age Of Taurus,8,2009,United Kingdom,2009,Doom
2842,Agrimonia,8,2005,Sweden,-,"Post-metal,Sludge,Crust punk"
2843,Akroma,8,2003,France,2003,"Progressive black,Symphonic black"
2844,Aldious,8,2008,Japan,-,Power
2845,Almyrkvi,8,2014,Iceland,2014,Black
2846,Another Messiah,8,2003,The Netherlands,2009,"Post-metal,Doom"
2847,Apostasy,8,2000,Sweden,2000,Black
2848,Arida Vortex,8,1998,Russia,-,Power
2849,Asylum Pyre,8,2003,France,2003,"Progressive,Power"
2850,Bane Of Winterstorm,8,2009,Australia,-,Symphonic power
2851,Below The Sun,8,2012,Russia,2012,Funeral doom
2852,Bestia,8,2000,Estonia,-,"Blackened death,Pagan black"
2853,Black Fate,8,1990,Greece,1990,"Power,Progressive"
2854,Born From Pain,8,1997,The Netherlands,-,"Hardcore,Metalcore"
2855,Britny Fox,8,1986,USA,1986,"Hard rock,Glam"
2856,Cenotaph,8,1989,Mexico,2002,Death
2857,Ceremonial Perfection,8,2007,Estonia,2007,Melodic death
2858,Clandestine Blaze,8,1998,Finland,-,Black
2859,Consciousness Removal Project,8,2004,Finland,2004,Post-metal
2860,Coram Lethe,8,1999,Italy,-,Melodic death
2861,Crimson Swan,8,2010,Germany,2010,"Gothic doom,Death doom"
2862,Crossfire,8,1998,Turkey,-,"Power,Thrash"
2863,Crypt Sermon,8,2013,USA,2013,Doom
2864,Dagor Dagorath,8,2003,Israel,-,"Symphonic black,Death"
2865,Dark Sarah,8,2012,Finland,2012,"Gothic,Symphonic"
2866,Darkend,8,2006,Italy,-,Symphonic black
2867,Deathbound,8,1995,Finland,1995,"Death,Grindcore"
2868,Deivos,8,1997,Poland,-,Death
2869,Dephosphorus,8,2008,Greece,2008,"Blackened death,Grindcore"
2870,Descend Into Despair,8,2010,Romania,-,Funeral doom
2871,Destrose,8,2005,Japan,2005,Heavy
2872,Destructor,8,1984,USA,-,"Us power,Thrash"
2873,Devathorn,8,2002,Greece,2002,Black
2874,Diskord,8,1999,Norway,-,"Progressive death,Technical death"
2875,Dragon Guardian,8,2006,Japan,2006,Symphonic power
2876,Drone,8,2004,Germany,-,Nu thrash
2877,Dusk,8,1993,USA,1993,Death doom
2878,E-an-na,8,2014,Romania,-,Folk
2879,Enid,8,1997,Germany,1997,Symphonic black
2880,Ensoph,8,1997,Italy,-,"Avantgarde,Gothic"
2881,Epizod,8,1988,Bulgaria,1988,Heavy
2882,Evenfall,8,1997,Italy,-,Gothic
2883,Fairytale Abuse,8,1995,Denmark,1995,Melodic black
2884,Fear Of God,8,1989,USA,1996,Thrash
2885,Fit For An Autopsy,8,2008,USA,2008,Deathcore
2886,Fleshgore,8,2000,Ukraine,-,Brutal death
2887,Full Of Hell,8,2009,USA,2009,"Grindcore,Hardcore,Punk"
2888,Gallows End,8,2007,Sweden,-,Heavy
2889,Gaza,8,2004,USA,2004,Grindcore
2890,Gothmog,8,2005,Spain,2012,"Melodic black,Symphonic black"
2891,Greymachine,8,2009,United Kingdom,2009,"Experimental industrial,Avantgarde"
2892,Hacktivist,8,2011,United Kingdom,-,"Nu,Djent,Rap"
2893,Hansen & Friends,8,2016,Germany,2016,"Heavy,Power"
2894,Heliosaga,8,2010,USA,-,Symphonic power
2895,Hellbringer,8,2010,Australia,2010,"Thrash,Speed"
2896,Hellish Crossfire,8,2002,Germany,-,Blackened thrash
2897,Helms Alee,8,2007,USA,2007,"Sludge,Noise rock,Post-hardcore"
2898,Horisont,8,2006,Sweden,-,Hard rock
2899,I Am I,8,2012,United Kingdom,2012,"Heavy,Power"
2900,Imagika,8,1993,USA,2011,"Thrash,Us power"
2901,Imperial Crystalline Entombment,8,2003,USA,2003,Black
2902,Infected Rain,8,2008,Moldova,-,Nu
2903,Inverloch,8,2011,Australia,2011,Death doom
2904,Invocator,8,1986,Denmark,-,"Speed,Technical thrash"
2905,Jack Frost,8,1989,Austria,1989,"Doom,Gothic doom"
2906,Kamijo,8,2013,Japan,-,"Symphonic power,J rock"
2907,Karybdis,8,2009,United Kingdom,2009,"Melodic death,Thrash"
2908,Kill The Client,8,2002,USA,-,Grindcore
2909,Kingfisher Sky,8,2001,The Netherlands,2001,"Gothic,Progressive rock"
2910,Lyria,8,2012,Brazil,-,"Symphonic,Alternative"
2911,Lyzanxia,8,1996,France,1996,Thrash
2912,Manimal,8,2001,Sweden,-,Power
2913,Mares Of Thrace,8,2009,Canada,2009,"Sludge,Doom"
2914,Marriages,8,2011,USA,-,Alternative
2915,Martyrd�d,8,2001,Sweden,2001,"Crust punk,D-beat"
2916,Masacre (COL),8,1988,Colombia,-,Death
2917,May Result,8,1995,Serbia,1995,Black
2918,Melted Space,8,2007,France,-,"Symphonic,Ambient,Neoclassical"
2919,Mirzadeh,8,2000,Finland,2000,Melodic black
2920,Moss,8,2000,United Kingdom,-,"Drone doom,Doom,Sludge"
2921,My Lament,8,2002,Belgium,2002,"Gothic doom,Death doom"
2922,Nachtgeschrei,8,2006,Germany,-,Folk
2923,Natan,8,2002,Belgium,2002,Pagan black
2924,Neglected Fields,8,1995,Latvia,-,Technical death
2925,Neh�mah,8,1992,France,1992,Black
2926,Oath To Vanquish,8,2001,Lebanon,-,"Black,Death"
2927,Obsidian Gate,8,1994,Germany,1994,Symphonic black
2928,Phazm,8,2003,France,-,"Death ',N',Roll"
2929,Place Of Skulls,8,2000,USA,2000,Doom
2930,Plague Widow,8,2011,USA,-,Deathgrind
2931,Platitude,8,1995,Sweden,1995,Neoclassical power
2932,Primitive Graven Image,8,2006,United Kingdom,-,Black
2933,Putridity,8,2005,Italy,2005,Brutal death
2934,Ravage,8,1995,USA,-,Heavy
2935,Rebaelliun,8,1998,Brazil,1998,Death
2936,Recueil Morbide,8,2000,France,-,Brutal death
2937,Red Descending,8,2003,Australia,2003,Melodic death
2938,Resurrected,8,1993,Germany,-,Brutal death
2939,Ross The Boss,8,2006,USA,2006,"Heavy,Us power"
2940,S.D.I.,8,1986,Germany,-,Speed
2941,Sannhet,8,2010,USA,2010,Experimental black
2942,Sarissa,8,1985,Greece,-,"Heavy,Power,Progressive"
2943,Sinmara,8,2008,Iceland,2008,Black
2944,Sister,8,2006,Sweden,-,Glam
2945,Slugathor,8,1999,Finland,1999,Death
2946,Slumpark Correctional,8,2003,Syria,-,"Death,Thrash"
2947,Sorcier Des Glaces,8,1997,Canada,1997,Black
2948,Southern Cross,8,2001,Canada,-,"Progressive,Progressive power"
2949,Space Eater,8,2004,Serbia,2004,Thrash
2950,Spidkilz,8,2010,Italy,-,"Speed,Heavy,Thrash"
2951,Spirit Caravan,8,1996,USA,1996,"Doom,Stoner"
2952,Stabat Mater,8,2001,Finland,-,Funeral doom
2953,Tantara,8,2009,Norway,2009,Thrash
2954,Target,8,1986,Belgium,1990,Progressive thrash
2955,Tau Cross,8,2014,United Kingdom,2014,"Heavy,Crust,Punk"
2956,Thaw,8,2010,Poland,-,"Experimental black,Ambient noise"
2957,The Final Harvest,8,2007,Finland,2007,"Thrash,Melodic death"
2958,The Kindred,8,2013,Canada,-,Progressive
2959,The Neologist,8,2009,USA,2009,Melodic death
2960,The Oath,8,2012,Germany,2014,"Doom,Hard rock"
2961,The Secret,8,2003,Italy,2003,"Black,Grindcore,Metalcore"
2962,The Wounded Kings,8,2005,United Kingdom,2016,Doom
2963,The Zenith Passage,8,2012,USA,2012,Technical death
2964,Thrashless,8,2010,Estonia,-,Thrash
2965,Twisted Tower Dire,8,1995,USA,1995,Us power
2966,Unseen Terror,8,1986,United Kingdom,1990,"Death,Thrash,Grindcore"
2967,Urkraft,8,1995,Denmark,1995,"Melodic death,Thrash"
2968,VI,8,2007,France,-,Black
2969,Vola,8,2005,Denmark,2005,"Djent ,Progressive,Progressive rock"
2970,Volahn,8,2003,USA,-,Black
2971,Volturyon,8,2005,Sweden,2005,Death
2972,Vorum,8,2006,Finland,-,Death
2973,Way To End,8,2006,France,2006,Avantgarde black
2974,White Empress,8,2013,USA,-,Extreme symphonic
2975,Winterage,8,2008,Italy,2008,"Power,Symphonic"
2976,Wolfbrigade,8,1995,Sweden,-,Crust punk
2977,X-Panda,8,2009,Estonia,2009,"Progressive,Jazz fusion"
2978,Young And In The Way,8,2009,USA,-,"Black,Crust,Punk"
2979,Zandelle,8,1996,USA,1996,"Heavy,Power"
2980,Zuul Fx,8,2003,France,-,"Death,Thrash"
2981,?,7,2012,Iceland,2012,"Depressive black,Doom"
2982,0 X � S T,7,2008,Finland,2016,Death doom
2983,7th Reign,7,2005,Canada,2005,Progressive power
2984,A Sense Of Gravity,7,2011,USA,-,Progressive math
2985,Abonos,7,1999,Serbia,1999,Gothic
2986,Abused Majesty,7,1998,Poland,-,"Symphonic black,Death"
2987,Adastreia,7,2004,United Kingdom,2004,"Gothic,Symphonic"
2988,ADX,7,1982,France,-,Speed
2989,Aegaeon,7,2008,USA,2008,Deathcore
2990,Aethyr,7,2014,Spain,-,"Melodic death,Folk"
2991,After All,7,1987,Belgium,1987,Thrash
2992,Ajdath,7,1995,Jordan,-,Death
2993,Alister,7,1999,Serbia,1999,"Thrash,Heavy"
2994,Angeldark,7,2007,Spain,-,"Gothic,Symphonic"
2995,Anthropia,7,2003,France,2003,Progressive
2996,Archivist,7,2015,,-,"Atmospheric black,Post-metal"
2997,Ariadna Project,7,1999,Argentina,1999,Power
2998,Asgaard,7,1994,Poland,-,Experimental black
2999,Ashbringer,7,2013,USA,2013,Atmospheric black
3000,Astral Sleep,7,2004,Finland,-,"Death,Atmospheric doom"
3001,Atomikyl�,7,2011,Finland,2011,"Psychedelic doom,Drone"
3002,Atra Vetosus,7,2011,Australia,-,Melodic black
3003,Bakos Attila,7,2012,Hungary,2012,Progressive
3004,Bast,7,2008,United Kingdom,-,"Black,Doom,Sludge"
3005,Beatrik,7,1998,Italy,1998,"Black,Doom"
3006,Below,7,2012,Sweden,-,Epic doom
3007,Beltaine,7,1996,Czech Republic,1996,Pagan folk
3008,Black Moth,7,2010,United Kingdom,-,"Stoner rock,Doom,Stoner"
3009,Black Space Riders,7,2008,Germany,2008,"Progressive,Stoner"
3010,Bone Gnawer,7,2009,Sweden,2015,Death
3011,Bosse-De-Nage,7,2006,USA,2006,Black
3012,Brown Jenkins,7,2006,USA,2009,"Black,Doom"
3013,Burning Circle,7,2006,Serbia,2006,Progressive
3014,Celtachor,7,2007,Ireland,-,"Black,Celtic folk"
3015,Civilization One,7,2006,Germany,2006,Power
3016,Colosso,7,2011,Portugal,-,Death
3017,Comeback Kid,7,2000,Canada,2000,"Hardcore,Metalcore"
3018,Contradiction,7,1989,Germany,-,Thrash
3019,Corporation 187,7,1995,Sweden,1995,"Melodic death,Thrash"
3020,Corpsefucking Art,7,1993,Italy,-,Brutal death
3021,Crest Of Darkness,7,1995,Norway,1995,Black
3022,Crystalmoors,7,1995,Spain,-,"Celtic black,Pagan black"
3023,Cynthesis,7,2010,USA,2010,Progressive
3024,Cytotoxin,7,2010,Germany,-,Brutal death
3025,Darkflight,7,2000,Bulgaria,2000,"Black,Doom"
3026,Dawn Of Silence,7,2000,Sweden,-,Melodic heavy
3027,Daylight Misery,7,2008,Greece,2008,"Gothic,Death doom"
3028,Deadsquad,7,2006,Indonesia,-,"Brutal death,Technical death"
3029,Deep Mountains,7,2009,China,2009,"Atmospheric black,Folk"
3030,Devil,7,2009,Norway,-,"Doom,Heavy"
3031,Divinity Destroyed,7,1999,USA,1999,Progressive
3032,Dodecahedron,7,2006,The Netherlands,-,Black
3033,Dodsferd,7,2001,Greece,2001,Black
3034,Drakkar,7,1995,Italy,-,Power
3035,Drakum,7,2009,Spain,2009,Folk
3036,Draugr,7,2002,Italy,2013,"Melodic death,Pagan black"
3037,Dreadful Shadows,7,1993,Germany,1993,Gothic
3038,Edge Of Serenity,7,2007,The Netherlands,-,Melodic death
3039,Elixir,7,1983,United Kingdom,1983,"New,Wave,Of british heavy,Heavy"
3040,Elizium,7,1991,The Netherlands,-,"Doom,Gothic"
3041,Enemy Of Reality,7,2013,Greece,2013,Symphonic progressive
3042,Eternal Idol,7,2016,Italy,-,"Power,Symphonic,Heavy,Progressive"
3043,Fistula,7,1998,USA,1998,"Sludge,Drone doom"
3044,Flagitious Idiosyncrasy In The Dilapidation,7,2001,Japan,-,Grindcore
3045,Forgive Me,7,2009,Jordan,2009,Depressive black
3046,Fragile Vastness,7,2000,Greece,-,"Progressive,Progressive rock"
3047,Gnostic,7,2005,USA,2005,"Technical death,Technical thrash"
3048,Graveyard Dirt,7,1994,Ireland,-,"Death,Doom"
3049,Gridlink,7,2004,USA,2004,Technical grindcore
3050,Harlott,7,2006,Australia,-,Thrash
3051,Heaven Grey,7,1993,Latvia,1993,Gothic doom
3052,Hel,7,1994,Germany,2012,Pagan folk
3053,Ignivomous,7,2006,Australia,2006,Death
3054,Illuminata,7,2006,Austria,-,"Melodic power,Gothic"
3055,Immensity,7,2009,Greece,2009,Atmospheric doom
3056,Infernal Poetry,7,1996,Italy,2014,"Experimental death,Progressive death"
3057,Insanity,7,1985,USA,1985,Death
3058,Interitus,7,1993,Czech Republic,-,Symphonic
3059,Isvind,7,1993,Norway,1993,Black
3060,J.B.O.,7,1989,Germany,-,"Industrial,Comedy rock"
3061,Jacobs Dream,7,2000,USA,2000,"Us power,Progressive"
3062,Jig-Ai,7,2005,Czech Republic,-,"Death,Grindcore"
3063,Kadavar,7,2007,Italy,2007,Death
3064,KerecsenS�lyom,7,2004,Hungary,-,Symphonic folk
3065,Lapis Lazuli,7,2005,Sweden,2005,Symphonic
3066,Legend,7,1978,USA,1979,"Heavy,Progressive rock"
3067,Litrosis,7,2010,Greece,2010,"Symphonic black,Extreme power"
3068,Logar's Diary,7,1998,Germany,-,Power
3069,Luctus,7,2001,Lithuania,2001,"Black,Thrash"
3070,Lumus,7,2009,USA,-,Symphonic power
3071,Lust Of Decay,7,1996,USA,1996,"Thrash,Brutal death"
3072,Lvcifyre,7,2007,United Kingdom,-,"Black,Death"
3073,Magnitude 9,7,1998,USA,1998,"Progressive,Power"
3074,Malice,7,1980,USA,-,"Us heavy,Power"
3075,Mastic Scum,7,1992,Austria,1992,Grindcore
3076,Messiah's Kiss,7,2001,Germany,-,Heavy
3077,Midnight Priest,7,2008,Portugal,2008,Heavy
3078,Moon,7,2007,Australia,-,Black
3079,Morost,7,2010,Slovenia,2010,Progressive death
3080,Mortal Decay,7,1991,USA,-,Brutal death
3081,Nibiru,7,2012,Italy,2012,"Psychedelic sludge,Drone"
3082,Nydvind,7,2000,France,-,Pagan black
3083,Odyssea,7,2004,Italy,2004,"Heavy,Power"
3084,Operatika Element,7,2002,USA,-,Symphonic power
3085,Palms,7,2011,USA,2011,"Post-rock,Post-metal"
3086,Posthumous Blasphemer,7,2001,Belarus,-,Technical death
3087,Poverty's No Crime,7,1991,Germany,1991,Progressive
3088,Project: Failing Flesh,7,2001,USA,-,"Industrial thrash,Avantgarde"
3089,Putrevore,7,2004,Spain,2004,Death
3090,Quadrivium,7,2005,Norway,-,"Avantgarde,Black"
3091,RandomWalk,7,2005,Greece,2005,"Gothic,Metalcore"
3092,Rorcal,7,2006,Switzerland,-,"Doom,Sludge,Hardcore,Black"
3093,Rumpelstiltskin Grinder,7,2002,USA,2002,Technical thrash
3094,Sanctium,7,2007,Australia,-,"Melodic death,Progressive"
3095,Seven Thorns,7,1998,Denmark,1998,Power
3096,Shroud Of Bereavement,7,1996,USA,-,"Death doom,Neoclassical"
3097,Silent Kingdom,7,1999,Bosnia and Herzegovina,1999,"Melodic death,Extreme folk"
3098,Silent Planet,7,2010,USA,-,Metalcore
3099,Slartibartfass,7,2005,Germany,2005,Viking folk
3100,So Much For Nothing,7,2007,Norway,-,"Avantgarde,Depressive black"
3101,Sorcery (Swe),7,1986,Sweden,1986,Death
3102,Soulburn,7,1996,The Netherlands,-,Death
3103,Spiders,7,2010,Sweden,2010,"Hard rock,Heavy"
3104,Stick To Your Guns,7,2003,USA,-,"Metalcore,Hardcore"
3105,Strydegor,7,2005,Germany,2005,Viking black
3106,Su Ta Gar,7,1987,Spain,-,Heavy
3107,Subhuman,7,2001,Italy,2001,"Death,Thrash"
3108,Subliminal Fear,7,2001,Italy,-,Melodic death
3109,Sycronomica,7,1996,Germany,1996,Melodic black
3110,The Dogma,7,1999,Italy,-,Symphonic power
3111,The Drowning,7,2004,United Kingdom,2004,"Doom,Death"
3112,The Great Deceiver,7,2000,Sweden,-,Alternative
3113,The Moth Gatherer,7,2009,Sweden,2009,"Post-metal,Sludge"
3114,The Soulless,7,2010,United Kingdom,-,Melodic metalcore
3115,The Storyteller,7,1995,Sweden,1995,"Heavy,Power"
3116,The Wandering Midget,7,2005,Finland,-,Doom
3117,Thirdmoon,7,1994,Austria,1994,Death
3118,Thor,7,1973,Canada,-,"Hard rock,Heavy,Power"
3119,Thundra,7,1998,Norway,1998,Viking black
3120,Thy Worshiper,7,1993,Poland,-,"Pagan folk,Black"
3121,Tublatanka,7,1982,Slovak Republic,1982,"Melodic heavy,Hard rock"
3122,Tysondog,7,1983,United Kingdom,-,"New wave of british heavy,Heavy"
3123,Unfathomable Ruination,7,2010,United Kingdom,2010,Brutal death
3124,Urt,7,2004,Estonia,-,Pagan black
3125,Usnea,7,2011,USA,2011,Blackened doom
3126,Valkiria,7,1996,Italy,-,"Gothic,Black"
3127,Vaura,7,2012,USA,2012,Progressive
3128,Vemod,7,2000,Norway,-,Black
3129,Venomous Concept,7,2004,USA,2004,"Grindcore,Hardcore,Punk"
3130,Verw�stung,7,2010,USA,-,"Ambient black,Shoegaze,Drone doom,Post-,Rock"
3131,Vicious Art,7,2002,Sweden,2002,"Death,Thrash"
3132,Wallachia,7,1992,Norway,-,Symphonic black
3133,War From A Harlots Mouth,7,2005,Germany,2005,"Math,Metalcore"
3134,Warrior,7,1983,USA,-,"Heavy,Power"
3135,Wiegedood,7,2014,Belgium,2014,Black
3136,Winter's Verge,7,2004,Cyprus,-,Power
3137,Wolfpakk,7,2010,Germany,2010,Heavy
3138,Wraith Of The Ropes,7,2001,USA,-,Funeral doom
3139,2 Times Terror,6,2006,Finland,2006,Industrial
3140,5 Star Grave,6,2005,Italy,-,Melodic death
3141,Abysmal Grief,6,1995,Italy,1995,Gothic doom
3142,Adversarial,6,2007,Canada,-,Blackened death
3143,Age Of Artemis,6,2006,Brazil,2006,Melodic power
3144,Airborn,6,1995,Italy,-,Power
3145,Airged L'amh,6,1987,Greece,1987,"Heavy,Power,Folk"
3146,Aletheian,6,2003,USA,-,Melodic death
3147,Alkemyst,6,1998,France,1998,Progressive power
3148,Allfader,6,2001,Norway,-,"Black,Death"
3149,Altar (ROM),6,1991,Romania,1991,Thrash
3150,Amestigon,6,1993,Austria,-,Black
3151,Amulance,6,1984,USA,1984,"Power,Speed"
3152,Angel Blake,6,2004,Sweden,-,Heavy
3153,Antropofagus,6,1998,Italy,1998,Brutal death
3154,Aoria,6,2007,Sweden,-,"Progressive,Post-rock"
3155,Arkham Witch,6,2008,United Kingdom,2008,Doom
3156,Artefact,6,2000,France,-,Melodic black
3157,Asenblut,6,2006,Germany,2006,Pagan black
3158,Aska,6,1990,USA,-,"Heavy,Us power"
3159,Aspherium,6,2007,Norway,2007,Melodic death
3160,Balrog,6,1999,France,-,Black
3161,Bastard Priest,6,2002,Sweden,2002,Death
3162,Behind The Scenery,6,1996,Germany,-,"Gothenburg,Progressive"
3163,Benighted In Sodom,6,2004,USA,2004,Atmospheric black
3164,Bergraven,6,2002,Sweden,-,Black
3165,Bible Of The Devil,6,1999,USA,1999,Stoner
3166,Big End Bolt,6,2007,Russia,-,Brutal death
3167,Birth Of Depravity,6,2005,Greece,2005,Brutal death
3168,Bl�od D�ster,6,1991,Australia,-,Grindcore
3169,Black Autumn,6,1995,Germany,1995,"Ambient black,Doom"
3170,Black Bomb A,6,1995,France,-,Metalcore
3171,Black Monolith,6,2010,USA,2010,"Black,Post-metal,Crust,Punk"
3172,Black Steel,6,2000,Australia,-,"Heavy,Power"
3173,Blackstar Halo,6,1998,Finland,1998,Melodic heavy
3174,Bumblefoot,6,1998,USA,-,Progressive hard rock
3175,Burn The Priest,6,1994,USA,1994,Death
3176,Buzzov?en,6,1989,USA,-,Sludge
3177,Cain's Dinasty,6,2006,Spain,2006,Power
3178,Car Bomb,6,2000,USA,-,"Math,Metalcore"
3179,Carpathian Full Moon,6,1990,Norway,1990,"Black,Doom"
3180,Cauldron Born,6,1994,USA,2003,Us power
3181,Centurian,6,1997,The Netherlands,1997,Death
3182,Cerebral Fix,6,1986,United Kingdom,-,Thrash
3183,Chapel Of Disease,6,2008,Germany,2008,Death
3184,Clinging To The Trees Of A Forest Fire,6,2006,USA,2013,Grindcore
3185,Cold Snap,6,2003,Croatia,2003,Nu
3186,Coldworker,6,2006,Sweden,2013,Death
3187,Crimson Death,6,1994,Peru,1994,Gothenburg
3188,Crises,6,1995,Germany,-,Progressive
3189,Crocell,6,2007,Denmark,2007,Melodic death
3190,Cruxifiction,6,2005,France,-,"Melodic black,Death,Thrash"
3191,D�mmerfarben,6,2005,Germany,2005,Atmospheric black
3192,Dark Illusion,6,1982,Sweden,-,"Hard rock,Power"
3193,Deathember,6,2008,Sweden,2008,Groove thrash
3194,Decayed,6,1990,Portugal,-,Black
3195,Decaying,6,2010,Finland,2010,Death
3196,December's Cold Winter,6,2000,Costa Rica,2009,Melodic death
3197,Degial,6,2004,Sweden,2004,Death
3198,Detrimentum,6,1996,United Kingdom,-,Death
3199,Dimlight,6,2006,Greece,2006,Gothic
3200,Disgorge (MEX),6,1994,Mexico,-,"Brutal death,Grindcore"
3201,Doctor Cyclops,6,2007,Italy,2007,"Doom,Psychedelic rock"
3202,Dragobrath,6,2004,Ukraine,-,Black
3203,Dragonhammer,6,1999,Italy,1999,Power
3204,Dysnomia,6,2007,Spain,-,Melodic death
3205,Earthship,6,2010,Germany,2010,Sludge
3206,Eclipse Hunter,6,2004,Russia,-,Progressive power
3207,Elenium,6,1995,Finland,1995,Melodic death
3208,Embassy Of Silence,6,2007,Finland,-,"Progressive,Symphonic"
3209,Empyrean,6,2003,Australia,2003,Symphonic death
3210,F�rn,6,2012,USA,-,"Doom,Sludge"
3211,Fastkill,6,1996,Japan,1996,Thrash
3212,Fimbulvet,6,2003,Germany,-,Pagan folk
3213,Firespawn,6,2015,Sweden,2015,Death
3214,From The Vastland,6,2010,"Iran, Norway",-,Black
3215,Fuath,6,2015,United Kingdom,2015,Atmospheric black
3216,Fuck I'm Dead,6,2000,Australia,-,Grindcore
3217,Furia,6,1997,France,1997,"Death,Heavy"
3218,Gevolt,6,2001,Israel,-,Industrial folk
3219,Gigan,6,2006,USA,2006,"Progressive death,Technical death"
3220,Gjallarhorn,6,2003,Italy,-,Viking folk
3221,GOD � The Barbarian Horde,6,1993,Romania,1993,"Atmospheric gothic,Pagan folk"
3222,Gonin-ish,6,1996,Japan,-,Extreme progressive
3223,Gorath,6,1995,Belgium,1995,Black
3224,Grey Widow,6,2013,United Kingdom,-,"Doom,Blackened sludge"
3225,Heart Attack,6,2007,France,2007,Groove thrash
3226,Hegemon,6,1996,France,-,Black
3227,Hell Militia,6,2001,France,2001,Black
3228,Hetroertzen,6,2001,Chile,-,Black
3229,Holocausto,6,1985,Brazil,1985,"Black,Thrash,Technical thrash"
3230,Homo Iratus,6,1998,Greece,-,Death
3231,Hope Drone,6,2011,Australia,2011,"Atmospheric black,Post-metal"
3232,Horse Latitudes,6,2009,Finland,-,"Doom,Sludge"
3233,Icarus Witch,6,2004,USA,2004,Heavy
3234,Icycore,6,1998,Italy,-,Progressive
3235,Immersed,6,2008,Canada,2008,Death
3236,In Each Hand A Cutlass,6,2011,Singapore,-,"Post-metal,Progressive"
3237,Insidious Disease,6,2004,Norway,2004,Death
3238,Interitus Dei,6,1994,Romania,-,Gothic
3239,Isacaarum,6,1994,Czech Republic,1994,"Death,Grindcore"
3240,Jack Starr's Burning Starr,6,1984,USA,-,"Heavy,Us power"
3241,Jaguar,6,1979,United Kingdom,1979,"Heavy,New wave of british heavy"
3242,JesusMartyr,6,1994,Argentina,-,"Death,Thrash"
3243,Joel Grind,6,2012,USA,2012,"Black,Speed"
3244,Kall,6,2012,Sweden,-,Depressive black
3245,Killing Touch,6,2008,Italy,2008,Melodic power
3246,King Goat,6,2012,United Kingdom,-,Psychedelic doom
3247,Kjeld,6,2004,The Netherlands,2004,Black
3248,L�vi,6,1976,Latvia,2010,"Hard rock,Heavy"
3249,Lancer,6,2009,Sweden,2009,"Speed,Power"
3250,Lilitu,6,1999,USA,-,"Death,Gothic"
3251,Lost Inside,6,2009,USA,2009,"Depressive black,Atmospheric black"
3252,Magenta Harvest,6,2005,Finland,-,Melodic death
3253,Medicated,6,2005,Finland,2005,Melodic death
3254,Men Eater,6,2004,Portugal,-,"Stoner,Sludge"
3255,Mesmerize,6,1988,Italy,1988,Heavy
3256,Mistress,6,1999,United Kingdom,2008,"Death,Grindcore,Sludge"
3257,Morne,6,2005,USA,2005,"Post-metal,Sludge"
3258,Morphinist,6,2013,Germany,-,"Atmospheric black,Post-metal"
3259,Mors Subita,6,1999,Finland,1999,"Melodic death,Thrash"
3260,Mourning Caress,6,1998,Germany,2015,Depressive heavy
3261,Mourning Dawn,6,2002,France,2002,Depressive black
3262,Myrkvar,6,2003,The Netherlands,-,"Black,Folk"
3263,N�tts�l,6,2006,Norway,2006,"Black,Folk"
3264,Netra,6,2003,France,-,"Black,Trip-,Hop,Ambient"
3265,NightCreepers,6,2003,France,2003,"Folk,Pagan black"
3266,Njiqahdda,6,2005,USA,-,"Atmospheric black,Psychedelic rock"
3267,Non Opus Dei,6,1997,Poland,1997,Black
3268,Oblivion,6,2008,USA,-,Technical death
3269,Occultation,6,2010,USA,2010,Doom
3270,Old Corpse Road,6,2008,United Kingdom,-,"Black,Folk"
3271,Onward,6,1999,USA,1999,Us power
3272,Order Of Orias,6,2004,Australia,-,Black
3273,Ossastorium,6,2001,Lithuania,2001,Technical death
3274,Oz,6,1977,"Finland, Sweden",-,Heavy
3275,Project Silence,6,2008,Finland,2008,Industrial
3276,Sad,6,2005,Greece,-,Black
3277,Sammath Naur,6,1999,Poland,1999,"Avantgarde black,Death"
3278,Satanic Slaughter,6,1985,Sweden,-,"Black,Death,Thrash"
3279,Saviours,6,2004,USA,2004,Stoner
3280,Scamp,6,2003,Denmark,-,Thrash
3281,Scelerata,6,2002,Brazil,2002,Power
3282,Seven Sisters Of Sleep,6,2009,USA,-,"Sludge,Hardcore"
3283,Shadowgarden,6,1996,Sweden,1996,"Gothic,Gothic rock"
3284,Silent Opera,6,2007,France,-,Symphonic gothic
3285,Sithu Aye,6,2011,United Kingdom,2011,Progressiveinstrumental
3286,Skeletal Spectre,6,2008,Sweden,2014,"Death,Doom"
3287,Skyward,6,2000,Finland,2000,Symphonic power
3288,Smothered,6,2010,Sweden,-,Death
3289,Sonne Adam,6,2007,Israel,2007,Death
3290,Sorrows Path,6,1993,Greece,-,"Power,Doom"
3291,Soul Stealer,6,2003,Lithuania,2003,"Heavy,Power"
3292,StarGazer,6,1995,Australia,-,"Avantgarde black,Death"
3293,Stench,6,2007,Sweden,2007,Death
3294,Steve Grimmett's Grim Reaper,6,2006,United Kingdom,-,Heavy
3295,Supreme Pain,6,2006,The Netherlands,2006,Death
3296,Svarti Loghin,6,2005,Sweden,-,"Black,Neofolk"
3297,Take Over And Destroy,6,2008,USA,2008,Blackened sludge
3298,The Antichrist Imperium,6,2010,United Kingdom,-,"Black,Death"
3299,The Disciples Of Zoldon,6,2005,New Zealand,2005,"Death,Doom"
3300,The Equinox Ov The Gods,6,1990,Sweden,-,"Doom,Gothic"
3301,The Funeral Orchestra,6,2002,Sweden,2002,Funeral doom
3302,The Lamp Of Thoth,6,2006,United Kingdom,-,Doom
3303,The Levitation Hex,6,2010,Australia,2010,Extreme progressive
3304,The Rain I Bleed,6,2008,Greece,-,Progressive symphonic
3305,Throane,6,2016,France,2016,Industrial black
3306,Thy?,6,2002,USA,2012,"Progressive,Metalcore"
3307,Trist (CZE),6,2003,Czech Republic,2003,Depressive black
3308,Triumph,6,1975,Canada,-,"Hard rock,Progressive rock"
3309,Troldhaugen,6,2008,Australia,2008,Experimental folk
3310,Twins Crew,6,2007,Sweden,-,"Heavy,Power"
3311,Twinspirits,6,2002,Italy,2002,Progressive
3312,Uncanny,6,1989,Sweden,-,Death
3313,Utst�tt,6,2013,USA,2013,Atmospheric black
3314,Vanhelga,6,2001,Sweden,-,Black
3315,Vanitas,6,1996,Austria,1996,Gothic
3316,Vesperia,6,2005,Canada,-,"Black,Symphonic folk,Celtic death"
3317,Vexillum,6,2004,Italy,2004,"Melodic power,Folk"
3318,Vulvodynia,6,2014,South Africa,-,"Brutal death,Deathcore"
3319,We Are The Catalyst,6,2012,Sweden,2012,Alternative
3320,Where Angels Fall,6,2003,Norway,-,Gothic
3321,WHOURKR,6,2005,France,2005,"Experimental death,Cybergrind"
3322,Winterdome,6,1996,Germany,-,Folk
3323,Wishdoom,6,2007,Greece,2007,"Heavy,Doom"
3324,Witchsorrow,6,2005,United Kingdom,-,Doom
3325,Yorblind,6,2002,France,2002,Gothenburg
3326,Yyl,6,2014,France,-,"Industrial,Post-metal,Progressive"
3327,11 As In Adversaries,5,2010,France,2010,Extreme avantgarde
3328,A Loathing Requiem,5,2007,USA,-,Technical death
3329,A Night In Texas,5,2010,Australia,2010,Technical deathcore
3330,Abhorrence,5,1989,Finland,-,Death
3331,Abstrakt Algebra,5,1995,Sweden,1995,"Doom,Heavy"
3332,Adamantine,5,2006,Portugal,-,Melodic thrash
3333,Altar Of Betelgeuze,5,2010,Finland,2010,"Death doom,Stoner"
3334,Ancient Ceremony,5,1989,Germany,2005,Melodic black
3335,Anguish,5,2007,Sweden,2007,Doom
3336,Apati,5,2008,Sweden,2011,Depressive black
3337,Apotheosis,5,1993,Malta,1993,"Symphonic black,Thrash"
3338,Arachnes,5,1995,Italy,-,Power
3339,Asgaroth,5,1995,Spain,1995,"Melodic black,Doom"
3340,Astral Domine,5,2011,Italy,-,Symphonic power
3341,At War,5,1983,USA,1983,"Speed,Thrash"
3342,Auroch,5,2006,Canada,-,"Thrash,Blackened death"
3343,Author & Punisher,5,2004,USA,2004,"Industrial doom,Drone"
3344,Autokrator,5,2014,France,-,"Industrial death,Drone"
3345,Autolatry,5,2009,USA,2009,"Melodic black,Progressive black"
3346,Avsky,5,2002,Sweden,-,Black
3347,Balance Of Power,5,1995,United Kingdom,1995,Progressive
3348,Beautality,5,2009,United Kingdom,-,"Atmospheric black,Progressive black"
3349,Black Oath,5,2006,Italy,2006,Doom
3350,Blacklodge,5,1998,France,-,Industrial black
3351,Blasphemophagher,5,2002,Italy,2002,"Black,Death"
3352,Blood Farmers,5,1989,USA,-,Doom
3353,Bloodway,5,2013,Romania,2013,Progressive black
3354,Bombs Of Hades,5,2002,Sweden,-,Death
3355,Chain Collector,5,2003,Norway,2003,Melodic death
3356,Chainsaw,5,1997,Poland,-,"Heavy,Power"
3357,Changer,5,1999,Iceland,1999,"Thrash,Death"
3358,Chrch,5,2015,USA,-,"Doom,Sludge"
3359,Cold Cell,5,2012,Switzerland,2012,Black
3360,Continuo Renacer,5,1994,Spain,-,"Technical death,Progressive,Instrumental"
3361,Corelia,5,2010,USA,2010,Progressive
3362,Corpus Mortale,5,1993,Denmark,-,Brutal death
3363,Cretin,5,1992,USA,1992,"Death,Grindcore"
3364,Crown Of Autumn,5,1996,Italy,-,Gothic
3365,Cult Of Daath,5,1999,USA,1999,Black
3366,Cut Up,5,2014,Sweden,-,Death
3367,D�tente,5,1984,USA,1984,"Speed,Thrash"
3368,D.C. Cooper,5,1998,USA,-,Progressive
3369,Dark Sermon,5,2009,USA,2009,"Death,Deathcore"
3370,Dark Tribe,5,1997,Germany,2015,Black
3371,Darkmoon,5,1997,Switzerland,1997,"Extreme gothic,Melodic death,Black,Thrash"
3372,Dauntless,5,1991,Finland,-,"Thrash,Death"
3373,Dead Summer Society,5,2010,Italy,2010,Gothic doom
3374,Decrepitaph,5,2005,USA,-,Death
3375,Deep-Pression,5,2006,Poland,2006,"Black,Doom"
3376,Deluge,5,2013,France,-,"Black,Post-metal,Hardcore"
3377,Denouncement Pyre,5,2003,Australia,2003,"Black,Death"
3378,Derelict Earth,5,2009,France,-,Extreme progressive
3379,Devious,5,1998,The Netherlands,1998,Death
3380,Die Like Gentlemen,5,2012,USA,-,Progressive sludge
3381,Distress,5,1996,France,1996,"Death doom,Gothic doom,Progressive doom"
3382,Divercia,5,1998,Finland,-,Suomi
3383,Drawn And Quartered,5,1993,USA,1993,Death
3384,Drottnar,5,1996,Norway,-,"Death,Black,Technical black"
3385,Dystera,5,2006,Switzerland,2006,Symphonic power
3386,Dystopia,5,2003,Hungary,-,Progressive heavy
3387,Dystopia N�!,5,2010,Norway,2010,Depressive black
3388,Eccentric Pendulum,5,2008,India,-,Progressive
3389,Eciton,5,2000,Denmark,2000,Death
3390,Ego Depths,5,2007,"Ukraine, Canada",-,Funeral doom
3391,Elite,5,2001,Norway,2001,Black
3392,Elvenpath,5,2001,Germany,-,Power
3393,Elyose,5,2009,France,2009,"Industrial,Gothic"
3394,Empty Tremor,5,1993,Italy,-,Progressive
3395,Enabler,5,2010,USA,2010,"Hardcore,Metalcore,Punk"
3396,Encoffination,5,2008,USA,-,Death doom
3397,End Of Aeon,5,2011,Finland,2011,"Death doom,Melodic death"
3398,Episode 13,5,2001,Turkey,-,Black
3399,Epoch Of Unlight,5,1990,USA,1990,"Black,Death"
3400,Esoterica,5,2011,USA,2016,Black
3401,Estertor,5,1996,Bolivia,1996,"Melodic death,Doom"
3402,Eternal Elysium,5,1991,Japan,-,"Psychedelic doom,Stoner"
3403,Eternity's End,5,2014,Germany,2014,"Progressive,Power"
3404,Euphoric Defilement,5,2009,USA,-,Brutal death
3405,Exiled From Light,5,2007,New Zealand,2007,Depressive black
3406,Fifth To Infinity,5,1997,Sweden,-,"Black,Death"
3407,For Selena And Sin,5,2004,Finland,2004,"Gothic,Suomi"
3408,Force Of Evil,5,2002,Denmark,-,Heavy
3409,Genius: A Rock Opera,5,2002,Italy,2002,Symphonic power
3410,Goat The Head,5,2002,Norway,-,Death
3411,Godiva,5,2001,Switzerland,2001,Heavy
3412,Gr�,5,2010,Sweden,-,Black
3413,Grey Skies Fallen,5,1997,USA,1997,"Melodic death,Progressive"
3414,Hades,5,1992,Norway,1998,Black
3415,Hadriel,5,2007,Sweden,2007,Progressive doom
3416,Haiduk,5,2009,Canada,-,"Melodic death,Thrash,Brutal death"
3417,Hail!Hornet,5,2006,USA,2006,Sludge
3418,Hate Meditation,5,2003,USA,-,Black
3419,Hatred,5,1998,Germany,1998,Thrash
3420,Heavy Lord,5,2002,The Netherlands,-,"Doom,Sludge"
3421,Herder,5,2010,The Netherlands,2010,"Sludge,Stoner"
3422,Hideous Divinity,5,2007,Italy,-,"Brutal death,Technical death"
3423,Iconocaust,5,2005,USA,2005,"Death,Thrash"
3424,Ilium,5,1998,Australia,-,Power
3425,Illuminati,5,2008,Romania,2008,"Progressive thrash,Technical death"
3426,InAeona,5,2009,USA,-,Progressive
3427,Inhume,5,1994,The Netherlands,1994,"Brutal death,Grindcore"
3428,Just Before Dawn,5,2012,Sweden,-,Death
3429,Kalidia,5,2010,Italy,2010,Symphonic power
3430,Kataplexia,5,2002,Finland,-,Brutal death
3431,Kick Axe,5,1976,Canada,1976,"Glam,Heavy"
3432,Krv,5,2003,Bosnia and Herzegovina,2010,Black
3433,Lantern,5,2007,Finland,2007,Death
3434,Lecherous Nocturne,5,1997,USA,-,"Brutal death,Technical death"
3435,Lethal,5,1982,USA,1982,Us power
3436,Lords Of The Trident,5,2008,USA,-,Heavy
3437,Louna,5,2008,Russia,2008,"Nu,Alternative rock"
3438,Maim,5,2006,Sweden,-,Death
3439,Manic Movement,5,1993,Belgium,1993,"Death,Symphonic"
3440,Manii,5,2011,Norway,-,Depressive black
3441,Marshall Law,5,1988,United Kingdom,1988,"Heavy,Power"
3442,Mendel,5,2011,The Netherlands,-,"Progressive,Instrumental"
3443,Mephorash,5,2010,Sweden,2010,Black
3444,Metallic Taste Of Blood,5,2011,,-,"Progressive,Instrumental"
3445,Moonreich,5,2008,France,2008,Black
3446,More,5,1979,United Kingdom,2000,"New wave of british heavy,Heavy"
3447,Mutilation Rites,5,2009,USA,2009,Black
3448,My Enchantment,5,2000,Portugal,-,Black
3449,Myraeth,5,2009,Australia,2009,"Death doom,Gothic"
3450,N�voa,5,2014,Portugal,-,Atmospheric black
3451,Nitro,5,1987,USA,1987,"Heavy,Glam"
3452,Noein,5,2007,France,-,Industrial death
3453,Nontinuum,5,2010,Australia,2010,"Atmospheric black,Depressive black"
3454,Noothgrush,5,1994,USA,-,"Doom,Sludge"
3455,Noturna,5,2002,Brazil,2002,"Gothic,Progressive"
3456,Noveria,5,2014,Italy,-,Power
3457,Nox,5,2003,The Netherlands,2003,Death
3458,Obsidian Tongue,5,2009,USA,-,Atmospheric black
3459,Odraza,5,2009,Poland,2009,Black
3460,One Machine,5,2008,USA,-,Progressive thrash
3461,Opus Doria,5,2009,France,2009,Symphonic power
3462,Overlorde,5,1985,USA,-,Us power
3463,Parasitic Extirpation,5,2007,USA,2007,"Brutal death,Technical death"
3464,Pariah,5,1988,United Kingdom,1998,"Power,Thrash"
3465,Pestilential Shadows,5,2003,Australia,2003,Black
3466,Phoenix Rising,5,2007,Spain,-,Symphonic power
3467,Pictures Of Pain,5,2004,Norway,2004,Extreme progressive
3468,Profundi,5,2006,Sweden,-,Black
3469,Pulse Of Nebulae,5,2013,Latvia,2013,Progressive death
3470,Radigost,5,1994,Russia,-,"Doom,Black"
3471,Raging Speedhorn,5,1998,United Kingdom,1998,Nu
3472,Raise Hell,5,1996,Sweden,-,"Black,Thrash"
3473,Reciprocal,5,2007,USA,2007,"Technical death,Brutal death"
3474,Resistance,5,1987,USA,-,"Thrash,Progressive,Heavy,Us power"
3475,Reverence (USA),5,2010,USA,2010,Progressive power
3476,Rising,5,2008,Denmark,-,Sludge
3477,Rising Dream,5,2004,Croatia,2004,"Heavy,Extreme power,Power"
3478,Ruthless,5,1982,USA,-,"Heavy,Us power"
3479,Sammath,5,1994,The Netherlands,1994,Black
3480,Scythian,5,2004,United Kingdom,-,"Blackened death,Thrash"
3481,Senmuth,5,2004,Russia,2004,"Ambient ,Doom,Electronica,Experimental ,Industrial"
3482,Serpentine Path,5,2011,USA,-,"Death,Doom"
3483,Six Degrees Of Separation,5,1996,Czech Republic,1996,Doom
3484,Skogmark,5,2012,Russia,-,Atmospheric black
3485,Skumring,5,2004,Norway,2004,Doom
3486,Slivers Of Silence,5,2008,Finland,-,Melodic death
3487,Solbrud,5,2009,Denmark,2009,Atmospheric black
3488,Somnus Aeternus,5,2007,Czech Republic,-,"Death doom,Gothic"
3489,Soulmass,5,2013,USA,2013,Death
3490,Spelljammer,5,2007,Sweden,-,"Stoner,Doom"
3491,Spoil Engine,5,2004,Belgium,2004,"Melodic death,Metalcore"
3492,Stillborn,5,2000,Malta,-,Symphonic
3493,Svartahrid,5,1994,Norway,1994,Black
3494,Sweet Savage,5,1979,United Kingdom,-,"New wave of british heavy,Heavy"
3495,Sweet Sorrow,5,1996,Slovenia,1996,"Heavy,Melodic death"
3496,Syrach,5,1993,Norway,-,Doom
3497,Taatsi,5,2013,Finland,2013,Atmospheric black
3498,Tacit Fury,5,2001,Russia,-,"Symphonic death,Doom,Death"
3499,Talamyus,5,2002,Canada,2002,"Melodic death,Thrash"
3500,Terzij De Horde,5,2010,The Netherlands,-,"Black,Post-metal"
3501,The Almighty,5,1988,United Kingdom,1988,Hard rock
3502,The Crevices Below,5,2011,Australia,2013,Black
3503,The Defaced,5,1995,Sweden,1995,"Melodic death,Thrash"
3504,The Grotesquery,5,2009,Sweden,-,Death
3505,The Lion's Daughter,5,2007,USA,2007,"Blackened sludge,Hardcore"
3506,The Lord Weird Slough Feg,5,1990,USA,2005,Heavy
3507,The Lucifer Principle,5,2004,The Netherlands,2004,Death
3508,The Mist And The Morning Dew,5,2000,Finland,2005,"Gothic doom,Folk"
3509,The Order Of Apollyon,5,2008,United Kingdom,2008,"Black,Death"
3510,The Union Underground,5,1996,USA,2002,"Nu,Industrial"
3511,The Wolves Of Avalon,5,2011,United Kingdom,2011,"Pagan black,Celtic folk"
3512,Tort,5,2009,Spain,-,Sludge
3513,Totenmond,5,1984,Germany,1984,"Punk rock,Death doom"
3514,Tulus,5,1993,Norway,-,Black
3515,Turbid North,5,2001,USA,2001,"Death,Groove thrash,Sludge,Stoner"
3516,Unseelie,5,2010,France,-,Gothic
3517,Vampire,5,2011,Sweden,2011,"Death,Blackened thrash"
3518,Vanadium,5,1980,Italy,1996,Heavy
3519,Vasaeleth,5,2008,USA,2008,Death
3520,Velnezers,5,2013,Latvia,-,Black
3521,Velnias,5,2006,USA,2006,"Blackened doom,Folk"
3522,Vhernen,5,2006,Faroe Islands,-,"Black,Doom"
3523,Vrani Volosa,5,2003,Bulgaria,2003,Pagan black
3524,Wall Of Sleep,5,2001,Hungary,-,"Doom,Stoner"
3525,Wedding In Hades,5,2006,France,2006,"Death,Gothic doom"
3526,Wederganger,5,2013,The Netherlands,-,Black
3527,Well Of Souls,5,1997,USA,1997,Doom
3528,Who Dies In Siberian Slush,5,2003,Russia,-,"Death,Funeral doom"
3529,Whorecore,5,2003,Israel,2003,Deathgrind
3530,Wide Eyes,5,2009,USA,-,"Progressive,Djent,Instrumental"
3531,Widowmaker,5,1992,USA,1992,Heavy
3532,Wino,5,2008,USA,-,"Doom,Stoner"
3533,Witchking,5,2003,Poland,2003,Heavy
3534,Wolves Den,5,2014,Germany,-,Black
3535,Woman Is The Earth,5,2007,USA,2007,Atmospheric black
3536,Yayla,5,2007,Turkey,-,Ambient black
3537,Year Of Desolation,5,2001,USA,2001,Thrash
3538,Your Shapeless Beauty,5,1994,France,-,"Melodic death,Doom"
3539,Zatokrev,5,2002,Switzerland,2002,"Doom,Sludge"
3540,69 Chambers,4,2001,Switzerland,-,"Heavy,Alternative"
3541,A Diadem Of Dead Stars,4,2014,Greece,2014,Atmospheric blackinstrumental
3542,Abnormal Thought Patterns,4,2008,USA,-,"Technical progressive,Instrumental,Shred"
3543,Absurdist,4,2011,USA,2011,Blackened grindcore
3544,Ad Nauseam,4,2011,Italy,-,Technical death
3545,Aeon Winds,4,2007,Slovak Republic,2007,"Atmospheric black,Ambient"
3546,Aethernaeum,4,2012,Germany,-,"Black,Folk"
3547,AfterBlood,4,2011,Greece,2011,"Death,Thrash"
3548,Ahumado Granujo,4,1999,Czech Republic,2005,Grindcore
3549,Aisling,4,1998,Italy,1998,"Melodic black,Pagan black"
3550,Alas,4,1995,USA,-,"Progressive,Symphonic"
3551,Algaion,4,1993,Sweden,1993,Atmospheric black
3552,Ambush,4,2013,Sweden,-,Heavy
3553,Amendfoil,4,2007,Finland,2007,"Alternative,Progressive"
3554,Anthemon,4,1997,France,2007,"Atmospheric doom,Symphonic doom,Atmospheric progressive"
3555,Antichrisis,4,1995,Germany,1995,"Gothic,Folk"
3556,Apophis,4,1989,Germany,2009,"Thrash,Death"
3557,Apostate,4,1993,Ukraine,1993,Death doom
3558,Armenia,4,2012,Canada,-,"Symphonic,Gothic"
3559,Assaulter,4,2005,Australia,2005,"Black,Thrash"
3560,Audiovision,4,2003,Sweden,-,"Heavy,Power"
3561,Auriga,4,2009,Lebanon,2009,Ambient black
3562,Avenger,4,1982,United Kingdom,-,"New wave of british heavy,Heavy"
3563,Averse Sefira,4,1996,USA,1996,Black
3564,Begrime Exemious,4,2005,Canada,-,Blackened death
3565,Bestia Arcana,4,2008,USA,2008,Black
3566,Black Like Vengeance,4,2005,Australia,-,Melodic death
3567,Black Shape Of Nexus,4,2005,Germany,2005,"Drone doom,Sludge"
3568,Black Sheep Wall,4,2006,USA,-,"Post-metal,Sludge,Hardcore"
3569,Bloodtruth,4,2009,Italy,2009,"Brutal death,Technical death"
3570,Bones,4,2009,USA,-,Death
3571,C�nstantine,4,2006,Finland,2006,Progressive
3572,Caelestia,4,2012,Greece,-,Melodic death
3573,Cales,4,1992,Czech Republic,1992,Pagan folk
3574,Cardamon,4,2004,The Netherlands,-,"Alternative,Gothic"
3575,Chaos Inception,4,2008,USA,2008,Death
3576,Chaoswave,4,2003,Italy,2011,"Melodic heavy,Progressive"
3577,Code Orange,4,2008,USA,2008,"Hardcore,Metalcore,Punk"
3578,Collision,4,2000,The Netherlands,-,Grindcore
3579,Condor,4,2009,Norway,2009,"Black,Thrash"
3580,Conorach,4,2005,The Netherlands,-,"Power,Viking folk"
3581,Construcdead,4,1999,Sweden,1999,Melodic death
3582,Control Human Delete,4,2001,The Netherlands,-,Industrial black
3583,Crimson Wind,4,2008,Italy,2008,Power
3584,Cryptborn,4,2010,Finland,-,Death
3585,CSSABA,4,2009,Poland,2009,Industrial black
3586,Cult Of Occult,4,2011,France,-,"Doom,Blackened sludge"
3587,Dantalion,4,2004,Spain,2004,Black
3588,Dark Embrace,4,2000,Spain,2009,Gothic doom
3589,Dark Forest (UK),4,2002,United Kingdom,2002,"Heavy,Power"
3590,Dark Millennium,4,1989,Germany,-,Death doom
3591,Dead Eyed Sleeper,4,1994,Germany,1994,Death
3592,Dead Raven Choir,4,1996,Poland,-,"Black,Acoustic folk,Neofolk"
3593,Deadborn,4,2002,Germany,2002,Technical death
3594,Deadly Carnage,4,2005,Italy,-,"Black,Atmospheric doom"
3595,Death Dealer,4,2012,USA,2012,Us power
3596,Death Engine,4,2012,France,-,"Hardcore,Noise"
3597,Defaced,4,2012,Switzerland,2012,Death
3598,Defecto,4,2011,Denmark,-,Progressive
3599,Demise,4,1995,Poland,1995,Melodic death
3600,Despondency,4,1999,Germany,2010,Brutal death
3601,Deus Mortem,4,2008,Poland,2008,Black
3602,Devil In The Kitchen,4,2003,USA,-,"Folk,Speed"
3603,Dhishti,4,2009,Sri Lanka,2009,"Depressive black,Atmospheric black"
3604,Diadema Tristis,4,2004,Argentina,-,Folk
3605,Dies Ater,4,1994,Germany,1994,Black
3606,Dirty Woman,4,2006,Mexico,-,Heavy
3607,Dis Pater,4,1993,Russia,1993,Doom
3608,Disaffected,4,1991,Portugal,-,"Death,Thrash,Progressive death"
3609,Distillator,4,2013,The Netherlands,2013,Thrash
3610,Domains,4,2005,Spain,-,Death
3611,Double Dealer,4,1999,Japan,1999,Heavy
3612,Dragonauta,4,1999,Argentina,-,"Doom,Stoner"
3613,Dragonsfire,4,2005,Germany,2005,Heavy
3614,Driver,4,1989,USA,-,Melodic heavy
3615,earthtone9,4,1998,United Kingdom,1998,Alternative
3616,Eastern Front,4,2006,United Kingdom,-,Black
3617,Easy Rider,4,1990,Spain,1990,Power
3618,Echoes Of Yul,4,2008,Poland,-,"Atmospheric doom,Drone"
3619,Ecliptica,4,2005,Austria,2005,Power
3620,Edge Of Attack,4,2008,Canada,-,"Heavy,Power"
3621,Eight Bells,4,2010,USA,2010,Experimental progressive
3622,Elferya,4,2008,Switzerland,-,Symphonic
3623,Embraze,4,1994,Finland,1994,Gothic
3624,End Of The Dream,4,2013,The Netherlands,-,Symphonic
3625,Endless Main,4,2007,Slovak Republic,2007,Power
3626,Enemy Of The Sun,4,2006,Germany,-,Progressive thrash
3627,EnkElination,4,2011,United Kingdom,2011,Symphonic
3628,Enthral,4,1995,Norway,-,Melodic black
3629,Execration,4,2004,Norway,2004,Death
3630,Fall Of The Idols,4,2000,Finland,-,Doom
3631,Feastem,4,2005,Finland,2005,Grindcore
3632,Fides Inversa,4,2006,Italy,-,Black
3633,Final Darkness,4,2011,Canada,2011,"Melodic death,Thrash"
3634,Fister,4,2009,USA,-,"Doom,Sludge,Stoner"
3635,Full Force Inc,4,2008,Sweden,2008,"Heavy,Power"
3636,Funerary,4,2013,USA,-,Funeral doom
3637,Ghost Iris,4,2012,Denmark,2012,"Progressive metalcore,Djent"
3638,Glaciation,4,2011,France,-,Black
3639,Glass Cloud,4,2011,USA,2011,Metalcore
3640,Gravecode Nebula,4,2006,USA,-,"Experimental black,Funeral doom"
3641,Gun Barrel,4,1998,Germany,1998,"Heavy,Power"
3642,Handful Of Hate,4,1993,Italy,-,Black
3643,Hierophant,4,2010,Italy,2010,"Black,Sludge,Hardcore"
3644,Hjel,4,2013,Germany,-,Black
3645,Hord,4,2002,France,2002,Progressive
3646,Huldre,4,2006,Denmark,-,Folk
3647,Ignominious Incarceration,4,2006,United Kingdom,2006,"Technical death,Melodic deathcore"
3648,Imber Luminis,4,2006,Belgium,-,Atmospheric doom
3649,Immortal Bird,4,2013,USA,2013,Death
3650,Imperial Triumphant,4,2005,USA,-,Black
3651,In Battle,4,1996,Sweden,1996,"Black,Death"
3652,In The Company Of Serpents,4,2011,USA,-,"Doom,Sludge,Stoner"
3653,In Tormentata Quiete,4,1998,Italy,1998,Progressive
3654,Incursed,4,2007,Spain,-,"Pagan folk,Viking folk"
3655,Infected Disarray,4,2000,United Kingdom,2000,Brutal death
3656,Ingrimm,4,2004,Germany,-,Medieval folk
3657,Integral Rigor,4,2009,Iran,2009,"Death,Thrash"
3658,Jarell,4,2006,France,-,"Gothenburg,Metalcore"
3659,Jorn Lande & Trond Holter,4,2014,Norway,2014,"Heavy,Symphonic power"
3660,Julie Christmas,4,2009,USA,-,Alternative
3661,Karkadan,4,1997,Germany,1997,Atmospheric black
3662,Katavasia,4,2014,Greece,-,Melodic black
3663,KEN Mode,4,1999,Canada,1999,"Noise rock,Hardcore"
3664,Kenn Nardi,4,2014,USA,-,Progressive thrash
3665,Killers,4,1984,France,1984,Speed
3666,King Conquer,4,2001,USA,-,Deathcore
3667,Koldborn,4,1997,Denmark,1997,"Melodic death,Thrash"
3668,Kozeljnik,4,2006,Serbia,-,Black
3669,Kruger,4,2001,Switzerland,2001,Sludge
3670,Laethora,4,2005,Sweden,-,Death
3671,Les Chants De Nihil,4,2007,France,2007,Black
3672,Lesbian,4,2004,USA,-,"Progressive doom,Stoner"
3673,Light Bringer,4,2005,Japan,2005,Power
3674,Lord Agheros,4,1999,Italy,-,Extreme gothic
3675,Lorna Shore,4,2010,USA,2010,"Metalcore,Deathcore"
3676,Love Sex Machine,4,2009,France,-,Sludge
3677,Luminaria,4,2002,Poland,2002,Gothic doom
3678,Lux Divina,4,1998,Spain,-,Pagan black
3679,Machinery,4,2001,Sweden,2001,"Thrash,Power"
3680,Made Out Of Babies,4,2005,USA,2012,"Post-metal,Sludge,Noise rock"
3681,Maladie,4,2009,Germany,2009,"Avantgarde,Progressive black"
3682,Mammoth Storm,4,2012,Sweden,-,"Stoner,Doom"
3683,Maruta,4,2005,USA,2005,Grindcore
3684,Mass Hysteria,4,1993,France,-,"Alternative,Industrial"
3685,Memfis,4,2003,Sweden,2003,Extreme progressive
3686,Miazma,4,2008,Australia,-,Death
3687,Mindfeeder,4,2003,Portugal,2003,"Heavy,Power"
3688,Misteyes,4,2012,Italy,-,"Melodic death,Gothic,Symphonic"
3689,Mondstille,4,2004,Austria,2004,Avantgarde black
3690,Morhana,4,2006,Poland,-,Folk
3691,Mortuus,4,2003,Sweden,2003,Black
3692,Mourning Mist,4,2013,Italy,-,"Blackened doom,Avantgarde doom"
3693,Na�ve,4,2007,France,2007,"Alternative,Trip-,Hop"
3694,Nachtvorst,4,2007,The Netherlands,-,Black
3695,Nadiwrath,4,2007,Greece,2007,Black
3696,Nailed To Obscurity,4,2005,Germany,-,Death doom
3697,Narcotic Wasteland,4,2011,USA,2011,Death
3698,Necronoclast,4,2003,United Kingdom,-,Black
3699,Neoheresy,4,2014,Poland,2014,"Pagan black,Symphonic black"
3700,Neosis,4,2010,Switzerland,-,Progressive math
3701,Nocturnal Fear,4,2000,USA,2000,"Death,Thrash"
3702,Nordor,4,1989,Greece,-,Death
3703,Nova Era,4,2008,Mexico,2008,Power
3704,Old Forest,4,1998,United Kingdom,-,Black
3705,Old Season,4,2003,Ireland,2003,Heavy
3706,Osmi Putnik,4,1985,Croatia,-,Heavy
3707,Panndora,4,2000,Brazil,2000,Heavy
3708,Parricide,4,1990,Poland,-,"Death,Brutal death,Grindcore"
3709,Persian Risk,4,1979,United Kingdom,1979,"New wave of british heavy,Heavy"
3710,Phaze I,4,2005,France,-,"Progressive black,Thrash"
3711,Phosphorus,4,2007,Canada,2007,"Black,Thrash"
3712,Pilgrim,4,2010,USA,-,Doom
3713,Pissing Razors,4,1994,USA,1994,Groove thrash
3714,Posthuman,4,2007,The Netherlands,2010,Melodic death
3715,Preternatural,4,1999,Latvia,1999,Melodic death
3716,Pyogenesis,4,1989,Germany,-,"Death,Gothic doom,Alternative rock,Punk rock"
3717,Q5,4,1983,USA,1983,"Hard rock,Heavy"
3718,Quartz,4,1974,United Kingdom,-,"New wave of british heavy,Heavy"
3719,Rage Nucl�aire,4,2006,Canada,2006,"Industrial black,Melodic black"
3720,Rage Of Romance,4,2010,Greece,-,"Power,Progressive"
3721,Raglaia,4,2015,Japan,2015,"Heavy,Speed"
3722,Railway,4,1977,Germany,-,Heavy
3723,Ramming Speed,4,2005,USA,2005,"Death,Thrash,Crossover thrash"
3724,Ripper,4,2007,Chile,-,"Thrash,Death"
3725,Scarleth,4,2005,Ukraine,2005,"Symphonic power,Gothic"
3726,Scars Of Chaos,4,1997,France,-,Symphonic black
3727,Schizoid Lloyd,4,2007,The Netherlands,2007,"Progressive,Avantgarde"
3728,Sepsism,4,1990,USA,-,Death
3729,Serenity Broken,4,2010,Greece,2010,"Alternative,Hard rock"
3730,Serpentine Dominion,4,2011,USA,-,Death
3731,Shadowkeep,4,1999,United Kingdom,1999,"Progressive,Power"
3732,Shah,4,1985,Russia,1996,Thrash
3733,Shatter Messiah,4,2005,USA,2005,"Us power,Thrash"
3734,Shepherd,4,2011,India,-,"Sludge,Hard rock"
3735,Shepherds Of Cassini,4,2012,New Zealand,2012,"Post-metal,Progressive rock"
3736,Shok Paris,4,1982,USA,-,"Heavy,Speed"
3737,Sin7sinS,4,2007,The Netherlands,2007,"Gothic,Gothic rock"
3738,Slash's Snakepit,4,1995,USA,2001,"Hard rock,Blues rock"
3739,Speed\Kill/Hate,4,2002,USA,2002,Thrash
3740,Spheron,4,2007,Germany,-,Death
3741,Sportlov,4,2000,Sweden,2000,Black
3742,Squash Bowels,4,1994,Poland,-,Goregrind
3743,Star Queen,4,2001,Bulgaria,2001,"Symphonic power,Symphonic gothic"
3744,Stormhammer,4,1993,Germany,-,Power
3745,Stride,4,1996,USA,1996,"Progressive,Progressive rock"
3746,Strikelight,4,1999,Greece,-,Heavy
3747,Sworn (ARM),4,2005,Armenia,2005,Symphonic black
3748,Symphonic Destiny,4,2014,Serbia,-,Symphonic
3749,Tacoma Narrows Bridge Disaster,4,2008,United Kingdom,2008,"Post-,Rock ,Post-metal"
3750,Teethgrinder,4,2013,The Netherlands,-,Grindcore
3751,The 3rd Attempt,4,2014,Norway,2014,Black
3752,The Infernal Sea,4,2010,United Kingdom,-,Black
3753,The Kill,4,2000,Australia,2000,Grindcore
3754,The Moaning,4,1994,Sweden,1997,Melodic death
3755,The Old Wind,4,2013,Sweden,2013,Post-metal
3756,The Ritual Aura,4,2015,Australia,-,"Progressive death,Technical death"
3757,The Scourger,4,2003,Finland,2003,Thrash
3758,The Ugly,4,2004,Sweden,-,Black
3759,Third Ion,4,2010,Canada,2010,Progressive
3760,This Gift Is A Curse,4,2008,Sweden,-,"Black,Sludge,Hardcore"
3761,Thormesis,4,2006,Germany,2006,Pagan black
3762,Thy Wicked,4,2000,Germany,-,"Pagan black,Folk"
3763,Total Devastation,4,1998,Finland,1998,Industrial death
3764,Undergang,4,2008,Denmark,-,Death
3765,Ur Draugr,4,2014,Australia,2014,Blackened death
3766,Vagrant God,4,2007,Norway,-,Gothic
3767,Vainaja,4,2011,Finland,2011,Death doom
3768,Valkyrie,4,2002,USA,-,"Doom,Heavy"
3769,Violet Cold,4,2013,Azerbaijan,2013,Shoegaze
3770,Visceral Throne,4,2009,USA,-,Brutal death
3771,Volture,4,2008,USA,2008,Heavy
3772,Vortech,4,2000,Finland,-,"Industrial,Death"
3773,Vulturium Memoriae,4,2006,Italy,2006,"Avantgarde doom,Drone"
3774,Weekend Nachos,4,2004,USA,2016,"Grindcore,Hardcore,Punk"
3775,Westfield Massacre,4,2014,USA,2014,"Metalcore,Melodic death"
3776,Whispering Woods,4,2008,Romania,-,Gothic doom
3777,Wild Throne,4,2013,USA,2013,Progressive
3778,Winterlong,4,1998,Sweden,-,"Power,Progressive"
3779,Wolfsbane,4,1984,United Kingdom,1984,"Glam,Heavy,Hard rock"
3780,Wormreich,4,2009,USA,-,Black
3781,Worms Of Sabnock,4,2003,United Kingdom,2003,Melodic black
3782,Wound,4,2011,Germany,-,Death
3783,Xibalba (USA),4,2007,USA,2007,"Death,Hardcore"
3784,Xul,4,2008,Canada,-,Blackened death
3785,Xysma,4,1988,Finland,1988,"Grindcore,Death ',N',Roll ,Hard rock,Rock"
3786,Yonder Realm,4,2009,USA,-,Folk
3787,�glise,3,2011,Denmark,2011,"Post-metal,Hardcore"
3788,(V.E.G.A.),3,1998,Italy,-,Industrial black
3789,2 Ton Predator,3,1993,Sweden,1993,Thrash
3790,24-7 Spyz,3,1986,USA,-,"Alternative,Funk rock,Crossover thrash"
3791,A Pregnant Light,3,2009,USA,2009,"Black,Post-metal,Hardcore"
3792,A.I.(d),3,2010,France,-,Djent
3793,A.M.S.G.,3,2007,Canada,2007,Black
3794,Abaddon Incarnate,3,1994,Ireland,-,"Grindcore,Death"
3795,Abaton,3,2009,Italy,2009,"Doom,Black"
3796,Ad Inferna,3,2000,France,2015,"Symphonic black,Gothic,Electro industrial"
3797,Aenygmist,3,2007,Canada,2007,Melodic black
3798,Ah Ciliz,3,2008,USA,-,"Atmospheric black,Depressive black"
3799,Aleph,3,1998,Italy,1998,"Death,Thrash,Progressive"
3800,AnachroniA,3,2000,France,-,"Gothic,Melodic progressive"
3801,Anal Stench,3,2001,Poland,2001,Death
3802,Angmar,3,2002,France,-,Black
3803,Anima Damnata,3,1996,Poland,1996,"Black,Death"
3804,Antipope,3,2004,Finland,-,"Black,Progressive black,Extreme progressive"
3805,Aphonic Threnody,3,2012,United Kingdom,2012,Funeral doom
3806,Apostle Of Solitude,3,2004,USA,-,Doom
3807,Archon,3,2008,USA,2008,"Psychedelic doom,Sludge,Stoner"
3808,As We Fight,3,2001,Denmark,2011,Metalcore
3809,Asmodeus (AUT),3,1996,Austria,1996,Black
3810,Assailant,3,2004,Sweden,-,Progressive power
3811,At The Lake,3,2005,Poland,2005,Symphonic folk
3812,Atrament,3,2014,USA,-,"Black,Crust,Punk"
3813,Atrorum,3,1998,Germany,1998,Avantgarde black
3814,Auspex,3,2001,France,-,"Power,Progressive power"
3815,Avenger (Ger),3,1984,Germany,1984,"Speed,Heavy"
3816,Baring Teeth,3,2007,USA,-,"Progressive death,Technical death"
3817,Barishi,3,2010,USA,2010,Progressive
3818,Bastard Sapling,3,2007,USA,-,Black
3819,Before Eden,3,1998,Brazil,1998,Progressive power
3820,Before The Harvest,3,2011,Australia,-,Symphonic deathcore
3821,Beyond The Dust,3,2010,France,2010,"Progressive,Djent"
3822,Black Hole Generator,3,2006,Norway,-,Industrial black
3823,Black Star Riders,3,2012,USA,2012,Hard rock
3824,Blessed Death,3,1984,USA,1992,"Thrash,Speed"
3825,Blind Fury,3,1983,United Kingdom,1983,"New,Wave,Of british heavy"
3826,Blockheads,3,1992,France,-,Grindcore
3827,Bloodmoon,3,2010,USA,2010,"Progressive sludge,Doom"
3828,Brothers Of The Sonic Cloth,3,2007,USA,-,"Doom,Sludge,Stoner"
3829,Brutart,3,2000,Slovenia,2000,Doom
3830,Buried At Sea,3,2001,USA,-,"Drone doom,Sludge"
3831,By Night,3,1999,Sweden,1999,Thrash
3832,Calvarium,3,2001,Finland,-,Black
3833,Cancerous Womb,3,2008,United Kingdom,2008,"Death,Grindcore"
3834,Celestial Decay,3,2008,Sweden,-,Symphonic power
3835,Centimani,3,2006,USA,2006,"Melodic death,Melodic black"
3836,Chasse-Galerie,3,2007,Canada,-,Black
3837,Chemical Breath,3,1990,Belgium,1990,"Technical death,Thrash"
3838,Church Bizarre,3,2001,Denmark,-,"Death,Black"
3839,Church Of Void,3,2010,Finland,2010,Doom
3840,Circle Of Dust,3,1988,USA,-,Industrial
3841,Clairvoyants,3,2001,Italy,2001,Heavy
3842,Cognizance,3,2012,United Kingdom,-,"Melodic death,Technical death,Deathcore"
3843,Collapse 7,3,1992,Austria,1992,Melodic death
3844,Contrarian,3,2014,USA,-,Progressive death
3845,Corrupt Moral Altar,3,2012,United Kingdom,2012,Grindcore
3846,Cowards,3,2011,France,-,"Black,Sludge,Hardcore"
3847,Crescent Shield,3,2000,USA,2000,Power
3848,Crimsonfire,3,1997,Australia,-,Power
3849,Crowhurst,3,2011,USA,2011,"Experimental black,Noise"
3850,Crowned,3,2010,Australia,-,Black
3851,Cruadalach,3,2008,Czech Republic,2008,Folk
3852,Curse,3,1995,Iceland,-,Black
3853,Cyanide Serenity,3,2008,United Kingdom,2008,Melodic metalcore
3854,Cyclone,3,1980,Belgium,1993,Thrash
3855,Danse Macabre,3,1995,The Netherlands,1995,Gothic
3856,Dark Domination,3,1996,Latvia,-,Black
3857,Dawn Of Winter,3,1990,Germany,1990,Doom
3858,Dawn On Sedna,3,2013,Italy,-,Post-metal
3859,De Arma,3,2009,Sweden,2009,"Black,Post-metal"
3860,Dead Instrument,3,2007,Denmark,-,Grindcore
3861,Death Strike,3,1984,USA,1984,Death
3862,Deathraiser,3,2006,Brazil,-,Thrash
3863,Decomposed,3,1990,United Kingdom,1990,"Death,Doom"
3864,Derk�ta,3,1988,USA,-,Death doom
3865,Desolation Angels,3,1981,United Kingdom,1981,"New wave of british heavy,Heavy"
3866,Destroying Divinity,3,2001,Czech Republic,-,Death
3867,DinUmbr?,3,1998,Romania,1998,"Death doom,Gothic doom"
3868,Dissolution,3,2003,Canada,-,"Melodic death,Technical thrash"
3869,Dol Theeta,3,2008,Greece,2008,Electronic symphonic
3870,Down Among The Dead Men,3,2013,Sweden,-,Death
3871,Duff McKagan's Loaded,3,1999,USA,1999,Hard rock
3872,Dungortheb,3,1996,France,-,Technical death
3873,Dynazty,3,2007,Sweden,2007,"Heavy,Hard rock,Melodic power"
3874,Dyslesia,3,1986,France,-,Melodic power
3875,Ecferus,3,2014,USA,2014,Black
3876,Echo Of Dalriada,3,1998,Hungary,2006,Folk
3877,Eden Weint Im Grab,3,2004,Germany,2004,Gothic
3878,Edenfall,3,2009,United Kingdom,-,Gothic doom
3879,Effloresce,3,2008,Germany,2008,Progressive
3880,Ellipsis,3,1995,France,-,Symphonic progressive
3881,Emergency Gate,3,1996,Germany,1996,Power
3882,Eternal Majesty,3,1995,France,-,Black
3883,Ethereal Blue,3,2002,Greece,2002,Atmospheric death
3884,Evidence One,3,2001,Germany,-,Melodic hard rock
3885,Ewigkeit,3,1994,United Kingdom,1994,Black
3886,Executer,3,1985,Brazil,-,Thrash
3887,Exhale,3,2004,Sweden,2004,Grindcore
3888,Exmortem,3,1992,Denmark,2010,Death
3889,Face Of Oblivion,3,2009,USA,2009,Technical death
3890,Falaise,3,2015,Italy,-,"Atmospheric black,Post-metal"
3891,Fall Of Empyrean,3,2000,USA,2000,Death doom
3892,Fate,3,1984,Denmark,-,Hard rock
3893,Feridea,3,2012,Finland,2012,"Symphonic,Gothic"
3894,Feto In Fetus,3,2004,Poland,-,Deathgrind
3895,Finnugor,3,2001,Hungary,2001,"Symphonic black,Industrial black"
3896,Fogland,3,1997,Romania,-,"Folk,Melodic black"
3897,Forgive-Me-Not,3,1996,Russia,1996,Gothic doom
3898,Fright Night,3,2005,Russia,-,"Gothic rock,Gothic"
3899,Ge�st,3,2005,Germany,2005,Black
3900,Generation Kill,3,2009,USA,-,Crossover thrash
3901,Geoff Tate's Queensr�che,3,2012,USA,2012,Progressive
3902,Gillan,3,1978,United Kingdom,1982,Hard rock
3903,Goathemy,3,1995,Finland,1995,Melodic black
3904,God.Fear.None,3,2004,Greece,-,"Melodic death,Metalcore"
3905,Graveshadow,3,2012,USA,2012,"Symphonic,Gothic"
3906,Graveyard (ESP),3,2007,Spain,-,Death
3907,Grifteg�rd,3,2005,Sweden,2005,Doom
3908,Grima,3,2014,Russia,-,Atmospheric black
3909,Grimfist,3,2001,Norway,2001,"Black,Death"
3910,Gurd,3,1994,Switzerland,-,Thrash
3911,Hacavitz,3,2003,Mexico,2003,"Blackened death,Black"
3912,Haeres,3,2009,Canada,-,Black
3913,Hardingrock,3,2005,Norway,2005,"Folk,Rock"
3914,Havoc Unit,3,2005,Finland,2013,"Industrial,Experimental black"
3915,Hell:On,3,2005,Ukraine,2005,Thrash
3916,Hellfueled,3,1998,Sweden,-,Heavy
3917,Hexis,3,2010,Denmark,2010,"Black,Hardcore"
3918,High Priest Of Saturn,3,2011,Norway,-,"Doom,Stoner,Psychedelic rock"
3919,High Spirits,3,2009,USA,2009,"Hard rock,Heavy"
3920,Horizon Ablaze,3,2008,Norway,-,Death
3921,Houwitser,3,1997,The Netherlands,1997,Death
3922,Hybris,3,2010,United Kingdom,-,Progressive thrash
3923,Hyems,3,2000,Germany,2000,Melodic black
3924,Ian Gillan,3,1982,United Kingdom,-,"Hard rock,Pop rock,Blues rock"
3925,Implant Pentru Refuz,3,1995,Romania,1995,"Hardcore,Metalcore"
3926,In Twilight's Embrace,3,2005,Poland,-,"Metalcore,Melodic death,Death"
3927,Infera Bruo,3,2009,USA,2009,Progressive black
3928,Inspell,3,2003,Bulgaria,-,Symphonic black
3929,Iron Hearse,3,2002,United Kingdom,2002,Doom
3930,Jaded Star,3,2013,Greece,-,Melodic power
3931,Kenziner,3,1997,Finland,1997,Power
3932,Kinetik,3,2007,USA,-,"Industrial,Groove thrash"
3933,Kowloon Walled City,3,2007,USA,2007,Sludge
3934,L'Esprit Du Clan,3,1992,France,-,Metalcore
3935,Last Sacrament,3,2005,USA,2005,Death
3936,Laster,3,2012,The Netherlands,-,Atmospheric black
3937,Latitude Egress,3,2007,Germany,2007,"Black,Funeral doom,Atmospheric doom"
3938,Lechery,3,2004,Sweden,-,Heavy
3939,Lefay,3,1997,Sweden,1997,"Power,Thrash"
3940,Let Me Dream,3,1989,Finland,-,Gothic doom
3941,Level 10,3,2014,,2014,"Heavy,Power"
3942,Lightning,3,2002,Japan,-,"Heavy,Power"
3943,Lorn,3,1999,Italy,1999,Black
3944,Loss,3,2000,Sweden,-,Death
3945,Lothl�ryen,3,2002,Brazil,2002,"Melodic power,Folk"
3946,Love Lies Bleeding,3,1996,France,2008,"Atmospheric black,Doom"
3947,Magister Templi,3,2008,Norway,2008,"Hard rock,Heavy,Doom"
3948,Majster Kat,3,2001,Slovak Republic,-,Thrash
3949,Makrothumia,3,1994,Romania,1994,"Death doom,Progressive"
3950,Mandator,3,1987,The Netherlands,1993,"Speed,Thrash"
3951,Manitou,3,1997,Finland,1997,Progressive heavy
3952,Maveth,3,2007,Finland,-,Blackened death
3953,Mayze,3,2012,Germany,2012,"Progressive,Gothic"
3954,Medico Peste,3,2010,Poland,-,Black
3955,Mefisto,3,1984,Sweden,1984,"Black,Death,Thrash"
3956,Menace,3,2013,United Kingdom,-,"Progressive,Hard rock"
3957,Mhorgl,3,2004,Australia,2004,Black
3958,Middian,3,2005,USA,2008,"Doom,Sludge"
3959,Mind Odyssey,3,1993,Germany,1993,Progressive
3960,Misery Inc.,3,2001,Finland,2008,"Gothic,Death"
3961,Morbosidad,3,1993,USA,1993,"Black,Death"
3962,Moth,3,2011,USA,-,"Melodic death,Progressive"
3963,Mother Witch & Dead Water Ghosts,3,2013,Ukraine,2013,"Doom,Psychedelic rock"
3964,Mystic Force,3,1986,USA,2005,"Us power,Progressive"
3965,Nachtlieder,3,2008,Sweden,2008,Black
3966,Necrite,3,2004,USA,-,"Ambient black,Drone"
3967,Nevaloth,3,2008,Slovak Republic,2008,Atmospheric black
3968,Nevolution,3,2004,Iceland,-,Melodic death
3969,Night Magic,3,2006,USA,2006,Doom
3970,No-Big-Silence,3,1989,Estonia,-,"Death,Industrial"
3971,Noisear,3,1999,USA,1999,Grindcore
3972,Nonsun,3,2011,Ukraine,-,"Drone doom,Sludge"
3973,Norska,3,2009,USA,2009,"Doom,Sludge"
3974,Ocean Chief,3,2001,Sweden,-,"Doom,Sludge,Stoner"
3975,"Oh, Sleeper",3,2006,USA,2006,Metalcore
3976,Ol Drake,3,2013,United Kingdom,-,"Heavy,Hard rock"
3977,Omen (HUN),3,1990,Hungary,1990,"Thrash,Speed"
3978,Omnerod,3,2009,Belgium,-,Extreme progressive
3979,Ordog,3,2005,Finland,2005,Doom
3980,Oruga,3,2010,France,-,"Doom,Sludge,Stoner"
3981,Ostrogoth,3,1976,Belgium,1976,Heavy
3982,Over Your Threshold,3,2006,Germany,-,Progressive death
3983,P.L.F.,3,1999,USA,1999,Grindcore
3984,Persephone's Dream,3,1993,USA,-,"Progressive rock,Progressive"
3985,Perzonal War,3,1996,Germany,1996,"Power,Thrash"
3986,Phantom Winter,3,2014,Germany,-,Sludge
3987,Planks,3,2007,Germany,2007,Blackened sludge
3988,Plateau Sigma,3,2010,Italy,-,Doom
3989,Poison Sun,3,2010,Germany,2010,Heavy
3990,Possession,3,2012,Belgium,-,"Black,Death"
3991,Posthum,3,2004,Norway,2004,Progressive black
3992,Primal Rock Rebellion,3,2011,United Kingdom,-,"Heavy,Alternative"
3993,Profusion,3,2001,Italy,2001,"Progressive,Fusion"
3994,Prohod,3,2012,Romania,-,"Atmospheric black,Melodic black"
3995,Project Pain,3,2011,The Netherlands,2011,Thrash
3996,Queiron,3,1995,Brazil,-,Brutal death
3997,Quest Of Aidance,3,2004,Sweden,2004,"Melodic death,Grindcore"
3998,Ravager,3,1997,Mexico,2003,Brutal death
3999,Reasons Behind,3,2010,Italy,2010,Symphonic power
4000,Rendezvous Point,3,2010,Norway,-,Progressive
4001,Resurrection Kings,3,2015,USA,2015,Hard rock
4002,Revolted Masses,3,2008,Greece,-,"Progressive death,Thrash"
4003,Rippikoulu,3,1990,Finland,1990,Death
4004,RoadkillSoda,3,2011,Romania,-,"Sludge,Stoner"
4005,Rosae Crucis,3,1990,Italy,1990,Heavy
4006,Sadness,3,1989,Switzerland,1998,"Death doom,Gothic doom"
4007,Samothrace,3,2006,USA,2006,"Doom,Stoner"
4008,Sanctimony,3,1994,Latvia,-,"Death,Death ',N',Roll"
4009,Saturnalia Temple,3,2006,Sweden,2006,"Doom,Stoner"
4010,Sear,3,2001,Finland,-,"Black,Death"
4011,Season's End,3,1998,United Kingdom,1998,Gothic
4012,Sektemtum,3,2009,France,-,Black
4013,Self-Inflicted Violence,3,2007,United Kingdom,2007,"Black,Post-rock"
4014,Sengir,3,1995,Belgium,2007,"Gothic,Death doom"
4015,Sepia Dreamer,3,2003,Sweden,2003,Progressive
4016,Septic Mind,3,2006,Russia,-,Funeral doom
4017,Sethian,3,1998,Finland,1998,"Hard rock,Suomi"
4018,Sexcrement,3,2005,USA,-,Death
4019,Shadow Host,3,1993,Russia,1993,"Power,Thrash"
4020,Shadowdances,3,1995,"Lithuania, United Kingdom",-,"Doom,Melodic death"
4021,Sheavy,3,1993,Canada,1993,"Doom,Stoner"
4022,Shining Fury,3,2001,Italy,-,Power
4023,Shturm,3,2003,Russia,2003,"Black,Death"
4024,Sideburn,3,1997,Sweden,-,Stoner
4025,Silent Voices,3,1995,Finland,1995,Progressive
4026,Sinister Realm,3,2008,USA,-,"Heavy,Doom"
4027,Skeletal Remains,3,2011,USA,2011,Death
4028,Smallman,3,2001,Bulgaria,-,"Folk,Post-metal"
4029,Smargroth,3,2006,Slovenia,2006,Black
4030,Sorathian Dawn,3,2009,Australia,-,"Black,Death"
4031,Sororicide,3,1990,Iceland,1990,Death
4032,Sorrow Plagues,3,2014,United Kingdom,-,"Atmospheric black,Post-rock"
4033,Soul Takers,3,1998,Italy,1998,Progressive
4034,Soulfractured,3,1999,USA,2006,Progressive
4035,Spazmosity,3,1994,Sweden,1994,"Black,Death"
4036,Squealer,3,1986,Germany,-,"Heavy,Power,Thrash"
4037,Status Abnormis,3,2010,Finland,2010,"Death,Thrash,Industrial"
4038,Stigma,3,2000,Italy,-,Melodic deathcore
4039,Stillborn (POL),3,1997,Poland,1997,"Black,Death"
4040,Stone Gods,3,2006,United Kingdom,-,"Hard rock,Heavy"
4041,Sulphur,3,1999,Norway,1999,"Black,Death"
4042,Sumerlands,3,2014,USA,-,"Heavy,Power"
4043,Svartelder,3,2015,Norway,2015,Black
4044,Syrens Call,3,1997,France,-,"Progressive,Symphonic,Power"
4045,The Crown Of Yamhad,3,2015,Syria,2015,"Atmospheric folk,Symphonic"
4046,The Deathtrip,3,2007,Norway,-,Black
4047,The Enochian,3,2007,Greece,2007,Melodic black
4048,The Lumberjack Feedback,3,2008,France,-,"Doom,Sludge"
4049,The Order Of Israfel,3,2012,Sweden,2012,Doom
4050,The Ox,3,2012,Spain,-,Progressive
4051,The Seven Gates,3,2005,France,2005,Death
4052,The Skull,3,2012,USA,-,Doom
4053,The Undivine,3,2005,Finland,2005,"Death,Thrash"
4054,The Weakening,3,2007,Sweden,-,"Melodic death,Djent"
4055,Thornafire,3,1998,Chile,1998,Death
4056,Thought Machine,3,2009,Italy,-,Industrial
4057,Throneum,3,1996,Poland,1996,"Death,Black"
4058,Thunderbolt,3,2000,Norway,-,Heavy
4059,Thy Final Pain,3,2007,Germany,2007,Death
4060,Thy Flesh Consumed,3,2001,Canada,2010,Death
4061,Thy Primordial,3,1994,Sweden,1994,Black
4062,Today I Caught The Plague,3,2007,Canada,2013,"Progressive metalcore,Progressive"
4063,Tonic Breed,3,2006,Norway,2006,Groove thrash
4064,Torrens Conscientium,3,2009,Ukraine,-,Funeral doom
4065,Total Fucking Destruction,3,1999,USA,1999,Grindcore
4066,Total Negation,3,2007,Germany,-,Black
4067,Totalt J�vla M�rker,3,1996,Sweden,1996,"Blackened hardcore,Crust,Punk"
4068,Transient,3,2008,USA,-,Grindcore
4069,Triton Enigma,3,2005,Sweden,2005,"Melodic death,Thrash"
4070,Tsar Bomba,3,2011,France,-,Stoner
4071,Tungsten,3,2011,USA,2011,"Progressive rock,Progressive"
4072,Unsilence,3,1993,United Kingdom,-,Doom
4073,Uroboros,3,2012,Argentina,2012,"Death,Sludge"
4074,Urskumug,3,2001,Latvia,-,Black
4075,Vaee Solis,3,2014,Portugal,2014,Blackened doom
4076,Valborg,3,2002,Germany,-,"Progressive doom,Death"
4077,Valhall,3,1987,Norway,1987,"Black,Doom"
4078,Valhalla,3,1997,Spain,2010,"Heavy,Power"
4079,Vandroya,3,2001,Brazil,2001,Progressive power
4080,Vanisher,3,2010,USA,-,Metalcore
4081,Venomous Maximus,3,2010,USA,2010,"Doom,Heavy"
4082,Vermiform,3,2010,USA,-,Death
4083,Verminous,3,2002,Sweden,2002,Death
4084,Vinterblot,3,2008,Italy,-,Melodic death
4085,Virus IV,3,2006,Belgium,2006,"Progressive power,Progressive heavy"
4086,Viuda Negra,3,1996,Ecuador,2010,Progressive
4087,Voice Of The Soul,3,2007,UAE,2007,Death
4088,Vorkreist,3,1999,France,-,"Black,Death"
4089,Vulcain,3,1981,France,1981,Heavy
4090,Waken Eyes,3,2013,Canada,-,"Progressive rock,Progressive"
4091,Walk Through Fire,3,2008,Sweden,2008,"Sludge,Doom"
4092,War,3,1995,Sweden,2001,Black
4093,Warhorse,3,1996,USA,1996,"Doom,Stoner"
4094,We All Die (Laughing),3,2013,France,-,"Avantgarde,Progressive"
4095,Whales And Aurora,3,2008,Italy,2008,Atmospheric sludge
4096,Wijlen Wij,3,2002,Belgium,2014,Funeral doom
4097,WildeStarr,3,2003,USA,2003,Heavy
4098,Wintersoul,3,2006,United Kingdom,-,Black
4099,Witheria,3,1999,Finland,1999,Thrash
4100,Wooden Stake,3,2010,USA,-,Death doom
4101,Wormwood,3,2014,Sweden,2014,Atmospheric black
4102,Wotan,3,1988,Italy,-,Heavy
4103,WRVTH,3,2007,USA,2007,"Technical death,Deathcore,Post-metal,Hardcore"
4104,X Wild,3,1992,Germany,1996,Heavy
4105,XXX Maniak,3,2003,USA,2003,Grindcore
4106,Yaotl Mictlan,3,1998,"Mexico, USA",-,"Black,Folk"
4107,Zealotry,3,2005,USA,2005,Death
4108,ZX Spectrum,3,2001,Latvia,-,"Death ',N',Roll"
4109,???????,2,2011,Japan,2011,Black
4110,�GES,2,2010,USA,-,Alternative
4111,�nimus (SWE),2,2009,Sweden,2009,"Heavy,Power"
4112,�-Nirik,2,2006,France,-,"Melodic death,Brutal death"
4113,2 Wolves,2,2010,Finland,2010,"Industrial,Symphonic"
4114,A Canorous Quintet,2,1993,Sweden,1999,Melodic death
4115,Aabsynthum,2,2004,Romania,2004,"Black,Funeral doom"
4116,Abramis Brama,2,1997,Sweden,-,Stoner
4117,Abscession,2,2009,Sweden,2009,Death
4118,Abstracter,2,2010,USA,-,"Black,Doom,Sludge,Crust,Punk"
4119,Abyssaria,2,1998,Germany,1998,"Black,Gothic"
4120,Aclla,2,2007,Brazil,-,Heavy
4121,Adaliah,2,2008,USA,2008,"Deathcore,Melodic hardcore"
4122,Admiral Sir Cloudesley Shovell,2,2008,United Kingdom,-,Psychedelic hard rock
4123,Aftershok,2,1996,USA,1996,Heavy
4124,Agro,2,1994,South Africa,-,"Power,Thrash"
4125,Ahamkara,2,2013,United Kingdom,2013,Atmospheric black
4126,Aion,2,2013,Switzerland,-,Black
4127,Altars,2,2005,Australia,2005,Death
4128,Amnis Nihili,2,2008,Greece,-,Black
4129,Anal Blasphemy,2,2002,Finland,2002,Black
4130,Ancestors Revenge,2,2008,Canada,-,Death
4131,ANJ,2,2003,Russia,2003,"Alternative,Hard rock"
4132,Antropophobia,2,2009,Russia,-,"Atmospheric black,Doom"
4133,Apothecary,2,2012,USA,2012,Death doom
4134,AraPacis,2,2003,Canada,-,"Progressive,Doom,Hard rock"
4135,Arctic Winter,2,1989,Germany,1989,"Power,Heavy"
4136,Arkhe,2,1995,Mexico,-,Technical death
4137,Arms,2,2012,USA,2012,"Math,Grindcore"
4138,Asguard,2,1996,Belarus,-,Melodic death
4139,Ass To Mouth,2,2004,Poland,2004,"Brutal death,Grindcore"
4140,Athelstan,2,2010,United Kingdom,-,Folk
4141,Atrium Noctis,2,2002,Germany,2002,Melodic black
4142,Aus Der Transzendenz,2,2009,Austria,-,Black
4143,Axevyper,2,2009,Italy,2009,Heavy
4144,Axewitch,2,1979,Sweden,-,Heavy
4145,Azoic,2,2011,Iceland,2011,Black
4146,Azure Agony,2,2006,Italy,-,Progressive
4147,Bar�s,2,2015,France,2015,Progressive death
4148,Barghest,2,2006,USA,-,Black
4149,Beaten To Death,2,2010,Norway,2010,Grindcore
4150,Beholder (ITA),2,1998,Italy,2005,Melodic heavy
4151,Belfegor,2,1998,Poland,1998,Black
4152,Bellfast,2,1993,Japan,-,Celtic folk
4153,Beorn,2,2008,Russia,2008,"Power,Symphonic"
4154,Bill Ward,2,1989,United Kingdom,-,Hard rock
4155,Birds Of Prey,2,2006,USA,2006,"Sludge,Death"
4156,Birth Through Gore,2,2007,Greece,-,Brutal death
4157,Black Knight Symfonia,2,2008,Monaco,2008,"Gothic,Symphonic,Power"
4158,Blackfinger,2,2012,USA,-,Doom
4159,Blackwater,2,2011,USA,2011,"Heavy,Doom"
4160,Blackwood,2,2015,Italy,-,"Drone doom,Industrial"
4161,Blood Revolt,2,2010,Canada,2010,"Black,Death"
4162,Blood Stained Dusk,2,1998,USA,-,Black
4163,Boomerang,2,1996,Germany,1996,"Heavy,Power"
4164,Camel Of Doom,2,2001,United Kingdom,-,"Doom,Stoner"
4165,Cap De Craniu,2,2007,Romania,2007,"Death,Grindcore"
4166,Cardinals Folly,2,2007,Finland,-,Doom
4167,Carn D�m,2,2012,Germany,2012,Black
4168,Carnal Lust,2,1998,France,-,Brutal death
4169,Carpatica,2,2009,Romania,2009,"Pagan black,Folk"
4170,Catarsis Incarne,2,2002,Costa Rica,-,Death
4171,Cavus,2,2008,Finland,2008,Black
4172,Chaos Magic,2,2015,Chile,-,"Symphonic,Gothic"
4173,Chaosfear,2,1999,Brazil,1999,Thrash
4174,Chariot,2,1981,United Kingdom,-,"New wave of british heavy,Heavy"
4175,Chariots Of The Gods,2,2007,Canada,2007,"Melodic death,Metalcore"
4176,Christgrinder,2,2009,United Kingdom,-,"Black,Death"
4177,Cloud Rat,2,2010,USA,2010,Grindcore
4178,Coliseum,2,2003,USA,-,"Hardcore,Post-,Hardcore,Punk"
4179,Colombian Necktie,2,2010,USA,2010,"Sludge,Alternative"
4180,Common Grave,2,1999,Italy,-,"Brutal death,Black"
4181,Communion Of Thieves,2,2010,USA,2010,"Black,Grindcore"
4182,Coprolith,2,2001,Finland,-,"Death,Black"
4183,Coven 13,2,1985,USA,1985,Doom
4184,Crehated,2,2005,Italy,-,"Death,Thrash"
4185,Cretura,2,2010,Norway,2010,Extreme symphonic
4186,Crimson Sun,2,2001,Finland,-,Symphonic
4187,Crom Dubh,2,2003,United Kingdom,2003,Black
4188,Crossbreed,2,1996,USA,-,Industrial
4189,Cryptal Darkness,2,1993,Australia,1993,"Gothic doom,Death doom"
4190,Cryptic Warning,2,2000,USA,2006,"Technical death,Thrash"
4191,Dahakara,2,2013,Turkey,2013,"Ambient,Experimental black"
4192,Dakesis,2,2008,United Kingdom,-,Progressive power
4193,Dark Arena,2,2004,USA,2004,"Power,Progressive,Thrash"
4194,Dead In The Dirt,2,2008,USA,2014,Grindcore
4195,Dead Infection,2,1990,Poland,1990,Deathgrind
4196,Dead River Runs Dry,2,2012,Australia,-,Black
4197,Deadlands,2,2010,USA,2010,Us power
4198,Deadly Mosh,2,2008,Serbia,-,Thrash
4199,Deafening Silence,2,1997,France,1997,Heavy
4200,Death Of Self,2,2008,USA,2012,Grindcore
4201,Death Penalty,2,2013,,2013,"Doom,Heavy"
4202,Death Toll 80k,2,2005,Finland,-,Grindcore
4203,Deathrite,2,2010,Germany,2010,Grindcore
4204,Defender,2,1984,The Netherlands,-,"Power,Thrash"
4205,Desolate Pathway,2,2013,United Kingdom,2013,Epic doom
4206,Despair (SYR),2,2009,Syria,-,Black
4207,Desperado,2,1988,USA,1988,Heavy
4208,Despond,2,1995,France,2004,Doom
4209,Deuil,2,2012,Belgium,2012,"Black,Doom,Sludge"
4210,Deus X Machina,2,2012,Argentina,-,"Progressive,Power"
4211,Di'Anno,2,1983,United Kingdom,1983,"Hard rock,Heavy"
4212,Dialectic Soul,2,2000,Belarus,-,"Symphonic black,Progressive"
4213,Dictator,2,2005,Cyprus,2005,"Black,Funeral doom,Dark,Ambient"
4214,Dissension,2,2007,Canada,-,"Melodic death,Melodic black"
4215,Distaste,2,2000,Austria,2000,Grindcore
4216,Doctor Livingstone,2,1998,France,-,"Hardcore,Black,Punk"
4217,Doga,2,1989,Czech Republic,1989,"Thrash,Heavy"
4218,Doyle,2,2012,USA,-,"Groove metal ,Hardcore"
4219,Dr.X,2,2013,Spain,2013,Heavy
4220,Dramatvm,2,2003,Mexico,-,"Melodic death,Gothic"
4221,Dreamlost,2,1996,France,1996,Progressive
4222,Dysrider,2,2014,Switzerland,-,Symphonic
4223,Dysylumn,2,2010,France,2010,"Progressive black,Death"
4224,E-Force,2,2001,"Canada, France",-,Thrash
4225,Ebonillumini,2,2008,United Kingdom,2008,Avantgarde black
4226,Edgedown,2,2008,Germany,-,Heavy
4227,Eeriness,2,1996,Switzerland,1996,"Heavy,Gothic"
4228,Ehnahre,2,2006,USA,-,"Black,Death,Doom"
4229,Eibon la Furies,2,2005,United Kingdom,2005,"Gothic,Avantgarde black"
4230,Elvira Madigan,2,1995,Sweden,2008,Symphonic black
4231,Empires Of Eden,2,2008,Australia,2008,Melodic power
4232,Encorion,2,2007,The Netherlands,-,Viking folk
4233,Entheos (CAN),2,2011,Canada,2011,Black
4234,Epistasis,2,2008,USA,-,Experimental black
4235,Eternal Reign,2,1997,Germany,1997,Power
4236,Eternal Sorrow,2,1994,Brazil,-,Gothic doom
4237,Ethernity,2,2000,Belgium,2000,Progressive power
4238,Exhausted Prayer,2,1997,USA,-,"Progressive black,Progressive death"
4239,Exiled,2,1997,USA,1997,"Power,Speed,Thrash"
4240,Felony,2,1992,Switzerland,-,Melodic heavy
4241,Filii Nigrantium Infernalium,2,1989,Portugal,1989,"Black,Thrash"
4242,Final Crusade,2,2011,Switzerland,-,Heavy
4243,Forces United,2,2013,Russia,2013,Power
4244,Fornicus,2,2013,USA,-,Black
4245,Foul Body Autopsy,2,2010,United Kingdom,2010,Death
4246,Freitod,2,2005,Germany,-,Black
4247,Frightmare,2,2002,USA,2002,"Death,Thrash,Grindcore"
4248,Frozen Winds,2,2007,Cyprus,-,Black
4249,Funeral Whore,2,2006,The Netherlands,2006,Death
4250,Gateway To Selfdestruction,2,2013,Germany,-,Black
4251,Gehennah,2,1992,Sweden,1992,Thrash
4252,Genocide Shrines,2,2011,Sri Lanka,-,"Black,Death"
4253,Ghee-Yeh,2,2008,Chile,2008,Heavy
4254,Ghost Voyage,2,2008,Finland,-,Death doom
4255,Goblin Hovel,2,2010,USA,2010,Folk
4256,God Mother,2,2012,Sweden,-,Grindcore
4257,Gone Postal,2,2007,Iceland,2007,Death
4258,Goodbye To Gravity,2,2011,Romania,2015,Melodic metalcore
4259,Gothic Knights,2,1990,USA,1990,Power
4260,Grave Upheaval,2,2008,Australia,-,Death
4261,Gravehill,2,2001,USA,2001,"Thrash,Death"
4262,Griffar,2,1997,France,-,Melodic black
4263,Gverr,2,2007,Albania,2007,"Progressive death,Death,Thrash"
4264,Gypsyhawk,2,2008,USA,2015,Heavy
4265,H�then,2,2009,USA,2009,Black
4266,Haar,2,2008,United Kingdom,-,"Atmospheric black,Progressive black"
4267,Hadean,2,2012,USA,2012,"Progressive,Hardcore,Jazz fusion"
4268,Haikai No Ku,2,2012,United Kingdom,-,"Doom,Stoner"
4269,Heavydeath,2,2013,Sweden,2013,Death doom
4270,Hegemone,2,2010,Poland,-,"Black,Post-metal,Sludge"
4271,Hell Within,2,1998,USA,1998,Metalcore
4272,Hemelbestormer,2,2012,Belgium,-,Post-metal
4273,Herald,2,2000,Estonia,2000,Heavy
4274,Hourswill,2,2009,Portugal,-,Progressive
4275,House Of Low Culture,2,2000,USA,2000,"Drone doom,Ambient,Experimental"
4276,Howling Syn,2,1998,Canada,-,Gothic
4277,Human Cull,2,2007,United Kingdom,2007,Grindcore
4278,Hydra Vein,2,1987,United Kingdom,1990,Thrash
4279,I Chaos,2,2009,The Netherlands,2009,Brutal death
4280,Iluminato,2,2010,Brazil,-,Gothic
4281,Implore,2,2013,Germany,2013,Grindcore
4282,Inciter,2,2000,Croatia,-,Thrash
4283,Infinitum Obscure,2,2000,Mexico,2000,Death
4284,Insane,2,1997,France,-,"Power,Thrash"
4285,Iskra,2,2002,Canada,2002,"Black,Crust,Punk"
4286,Johansson & Speckmann,2,2013,Sweden,-,Death
4287,Karmaflow,2,2013,The Netherlands,2013,Symphonic
4288,Karyn Crisis' Gospel Of The Witches,2,2009,USA,-,"Doom,Gothic"
4289,Khaotika,2,2014,USA,2014,"Melodic black,Gothic"
4290,Killers (UK),2,1991,United Kingdom,2003,Heavy
4291,King Fear,2,2011,Germany,2011,Black
4292,King's-Evil,2,1989,Japan,-,Thrash
4293,Kingdragon,2,2006,Greece,2006,"Melodic heavy,Hard rock"
4294,Kognitiv Tod,2,2014,USA,-,Black
4295,Kolp,2,2007,Hungary,2007,"Black,Doom"
4296,Korum,2,1999,France,-,Death
4297,Kragens,2,2000,France,2000,"Heavy,Power,Thrash"
4298,Krokmit�n,2,1991,Canada,-,Experimental death
4299,Krokodil,2,2011,United Kingdom,2011,Progressive sludge
4300,Kultika,2,2008,Romania,-,"Black,Post-metal"
4301,Landskap,2,2012,United Kingdom,2012,"Doom,Psychedelic rock"
4302,Last In Line,2,2012,USA,-,"Heavy,Hard rock"
4303,Legend (JE),2,1980,Jersey,1980,"New,Wave,Of british heavy,Heavy"
4304,Liquorworks,2,2006,Finland,-,Experimental progressive
4305,Lody Kong,2,2011,USA,2011,"Crossover thrash,Hardcore,Punk"
4306,Lonely Kamel,2,2005,Norway,-,Stoner rock
4307,Looking For An Answer,2,1999,Spain,1999,Grindcore
4308,Lunar Path,2,2006,Finland,-,Gothic
4309,Lunarium,2,2005,USA,2005,Folk
4310,Malrun,2,2005,Denmark,-,Melodic hard rock
4311,Man Made Origin,2,2008,United Kingdom,2008,Progressive
4312,Maniac Butcher,2,1992,Czech Republic,-,Black
4313,Marche Fun�bre,2,2007,Belgium,2007,"Death,Doom"
4314,Marseille,2,1976,United Kingdom,-,"New wave of british heavy,Heavy"
4315,Mastermind,2,1986,USA,1986,"Progressive rock,Symphonic rock,Fusion ,Progressive,Instrumental"
4316,Masterstroke,2,2002,Finland,-,Heavy
4317,Means End,2,2011,Sweden,2011,Progressive
4318,Mena Brinno,2,2006,USA,-,"Gothic,Symphonic"
4319,Mephistopheles,2,2004,Australia,2004,Technical death
4320,Merkabah,2,2002,Canada,-,Heavy
4321,Methadone Skies,2,2009,Romania,2009,"Atmospheric sludge,Stoner,Psychedelic rock"
4322,Moon (POL),2,1996,Poland,-,"Black,Death"
4323,Mordbrand,2,2006,Sweden,2006,Death
4324,Morgain,2,1995,Slovak Republic,2015,"Atmospheric doom,Folk"
4325,Morian,2,2002,Finland,2002,"Gothic,Heavy"
4326,Myopia,2,2003,USA,2011,Progressive
4327,Myrah,2,2005,Sweden,2005,Gothic
4328,Mysto Dysto,2,1983,The Netherlands,1987,"Speed,Thrash"
4329,N R C S S S T,2,2011,"Lithuania, Germany",2011,"Atmospheric black,Post-metal,Shoegaze"
4330,N.I.L.,2,2004,USA,-,"Black,Doom"
4331,Naamah,2,1996,Poland,1996,"Gothic,Progressive"
4332,Nailed,2,2000,United Kingdom,-,Brutal death
4333,Nasty Idols,2,1987,Sweden,1987,"Heavy,Glam,Glam rock"
4334,Natron,2,1992,Italy,-,Death
4335,Nebukadnezza,2,2002,United Kingdom,2002,"Death,Thrash,Hardcore"
4336,Necromancing The Stone,2,2014,USA,-,Melodic death
4337,Nerve End,2,2009,Finland,2009,"Alternative,Progressive"
4338,Next To None,2,2013,USA,-,Progressive
4339,Night Viper,2,2014,Sweden,2014,Heavy
4340,Nightly Gale,2,1996,Poland,-,"Black,Doom"
4341,Noctum,2,2009,Sweden,2009,"Doom,Heavy,Hard rock"
4342,Non Serviam,2,1995,Sweden,-,Death
4343,North (USA),2,2005,USA,2005,"Post-metal,Sludge"
4344,Northern Plague,2,2009,Poland,-,"Black,Death"
4345,NunFuckRitual,2,2006,Norway,2006,Black
4346,Nycticorax,2,2003,Latvia,-,Black
4347,Oblivionized,2,2008,United Kingdom,2008,"Technical death,Grindcore"
4348,Obsidian Sea,2,2009,Bulgaria,-,Doom
4349,Ocultan,2,1994,Brazil,1994,Black
4350,Odyssey,2,1989,Spain,-,Progressive
4351,Ogre,2,1999,USA,1999,"Doom,Hard rock"
4352,Oleg Izotov,2,2003,Russia,-,"Alternative,Instrumental heavy"
4353,One Step Beyond,2,1997,Australia,1997,Experimental death
4354,Onirism,2,2014,France,-,Symphonic black
4355,Op?a Opasnost,2,1992,Croatia,1992,Hard rock
4356,Orchid's Curse,2,2005,Canada,-,Metalcore
4357,Ordinul Negru,2,2004,Romania,2004,Black
4358,Oxiplegatz,2,1993,Sweden,1998,Avantgarde
4359,Pain Principle,2,1993,USA,1993,"Thrash,Death"
4360,Paragon Of Beauty,2,1994,Germany,2001,Gothic
4361,Paramnesia,2,2005,France,2005,Black
4362,Phantom,2,2005,Denmark,-,Black
4363,Protean,2,2013,Latvia,2013,Black
4364,Psudoku,2,2010,Norway,-,"Avantgarde,Grindcore"
4365,Pure Inc,2,2001,Switzerland,2001,"Hard rock,Alternative"
4366,Pyrrhon,2,2008,USA,-,Technical death
4367,Quinta Essentia,2,2004,USA,2004,"Black,Death"
4368,Reality Grey,2,2004,Italy,-,Melodic death
4369,Realmbuilder,2,2008,USA,2008,"Epic doom,Heavy"
4370,Resurrecturis,2,1990,Italy,-,Death
4371,Retriem,2,2003,Russia,2003,Power
4372,Rev 16:8,2,2008,Sweden,2012,Black
4373,Revelation's Hammer,2,2007,Norway,2007,Black
4374,Romuvos,2,2014,Lithuania,-,Folk
4375,Rudhira,2,2010,Norway,2010,Progressive
4376,Sabachthani,2,2002,Sweden,-,"Gothic,Doom"
4377,Sadistic Gore,2,2004,Brazil,2004,Death
4378,Sandalinas,2,2001,Spain,-,Melodic progressive
4379,Santo Rostro,2,2013,Spain,2013,"Doom,Stoner"
4380,Saracen,2,1976,United Kingdom,-,"New wave of british heavy,Heavy,Progressive"
4381,Sarcofagus,2,1977,Finland,1977,Progressive heavy
4382,Sargatanas Reign,2,1997,Sweden,2008,Death
4383,Scald (RUS),2,1993,Russia,1993,Epic doom
4384,Scar Of The Sun,2,2004,"United Kingdom, Greece",-,Gothic doom
4385,Scarblade,2,2015,"Greece, Sweden",2015,Heavy
4386,Sea Witch,2,2014,Canada,-,"Blackened doom,Sludge"
4387,Seamount,2,2007,Germany,2007,Doom
4388,Sectu,2,2005,Sweden,-,Death
4389,Sedna,2,2009,Italy,2009,"Black,Sludge"
4390,Seita,2,2007,The Netherlands,-,"Death,Thrash"
4391,Septic Death,2,1981,USA,1981,Hardcore
4392,Serpent Omega,2,2011,Sweden,-,"Doom,Sludge"
4393,Serpent Venom,2,2008,United Kingdom,2008,Doom
4394,Severed,2,2014,Iceland,-,"Brutal death,Technical death"
4395,Shadow Of The Colossus,2,2009,USA,2009,Deathcore
4396,Shallow Rivers,2,2007,Russia,-,"Death doom,Atmospheric doom"
4397,Shaman (FIN),2,1997,Finland,1997,Folk
4398,Shannon,2,1998,France,-,"Hard rock,Heavy"
4399,Shatterpoint,2,2001,Canada,2001,"Power,Thrash"
4400,Shredding The Envelope,2,2008,USA,-,"Heavy,Thrash"
4401,Silent Memorial,2,1992,Switzerland,1992,"Heavy,Progressive"
4402,Siren,2,2012,USA,-,"Black,Doom,Heavy"
4403,Sirocco,2,2003,Ireland,2003,"Heavy,Folk,Thrash"
4404,Skraeckoedlan,2,2009,Sweden,-,Psychedelic stoner
4405,Slabdragger,2,2008,United Kingdom,2008,"Doom,Sludge"
4406,Slidhr,2,2005,Ireland,-,Black
4407,Slivers Cross,2,2008,Latvia,2008,"Metalcore,Alternative"
4408,Slow,2,2007,Belgium,-,"Atmospheric doom,Funeral doom"
4409,Solifvgae,2,2014,Brazil,2014,"Atmospheric black,Post-metal"
4410,Sonic Reign,2,1997,Germany,-,Black
4411,Sorrowful,2,2009,Sweden,2009,Death doom
4412,Sorrowful Angels,2,1999,Greece,-,Gothic
4413,Soul Dissolution,2,2012,Belgium,2012,Black
4414,Soulless,2,1997,USA,-,"Melodic death,Thrash"
4415,Sourvein,2,1993,USA,1993,"Doom,Sludge"
4416,Spaceking,2,2009,Russia,-,"Progressive,Progressive rock,Stoner rock,Stonerinstrumental"
4417,Spartan Warrior,2,1980,United Kingdom,1980,"New wave of british heavy,Heavy"
4418,Splattered Mermaids,2,2005,Sweden,2015,"Brutal death,Grindcore"
4419,Srogo??,2,2013,Poland,2013,Black
4420,Standing Ovation,2,2006,Finland,-,Progressive
4421,Station Dysthymia,2,2007,Russia,2007,Funeral doom
4422,T?zmad�r,2,1999,Hungary,-,Power
4423,Tanagra,2,2010,USA,2010,"Us power,Heavy"
4424,Tempestuous Fall,2,2011,Australia,2013,"Funeral doom,Death doom"
4425,Temple Of Evil,2,2008,Cyprus,2008,Black
4426,Terror Empire,2,2009,Portugal,-,Groove thrash
4427,Tesa,2,2005,Latvia,2005,"Post-metal,Sludge,Hardcore"
4428,The Arson Project,2,2005,Sweden,-,Grindcore
4429,The Batallion,2,2006,Norway,2006,Thrash
4430,The Belonging,2,1998,United Kingdom,-,Blackened death
4431,The Doomsday Kingdom,2,2016,Sweden,2016,Doom
4432,The Earls Of Mars,2,2012,United Kingdom,-,Avantgarde
4433,The Everdawn,2,1993,Sweden,1993,Melodic death
4434,The Experiment No.Q,2,2012,Italy,-,Progressive
4435,The Night Flight Orchestra,2,2007,Sweden,2007,Hard rock
4436,The Oracle,2,2006,Canada,2011,Extreme progressive
4437,The Order Of Chaos,2,2003,Canada,2003,"Heavy,Power,Thrash"
4438,The Silent Wedding,2,2006,Greece,-,Heavy
4439,The Wakedead Gathering,2,2007,USA,2007,Death
4440,Theories,2,2010,USA,-,Deathgrind
4441,Those Who Bring The Torture,2,2007,Sweden,2007,"Death,Grindcore"
4442,Throes Of Sanity,2,-,USA,-,Us power
4443,Titaan,2,2015,Italy,2015,Black
4444,Tribune,2,2004,Canada,-,"Melodic thrash,Progressive"
4445,Trimonium,2,1998,Germany,1998,Pagan black
4446,Triumfall,2,2006,Serbia,-,Black
4447,Trophallaxy,2,2007,Swaziland,2007,"Power,Symphonic"
4448,Unchained,2,1998,Sweden,2006,Heavy
4449,Unholy Matrimony,2,2000,Switzerland,2000,Black
4450,Unwritten Pages,2,2005,The Netherlands,-,Progressive
4451,Urban Tales,2,2005,Portugal,2005,"Gothic rock,Alternative"
4452,Usurpress,2,2010,Sweden,-,Death
4453,V�d�n,2,2012,United Kingdom,2012,"Stoner,Psychedelic rock"
4454,Vaalnor,2,2009,Switzerland,-,Folk
4455,Valkenrag,2,2006,Poland,2006,Melodic death
4456,Vardis,2,1973,United Kingdom,-,"New wave of british heavy,Heavy"
4457,Venin Noir,2,2001,Brazil,2001,Gothic
4458,Vermilion,2,2008,Romania,2015,Experimental black
4459,VII Gates,2,1999,Sweden,1999,"Heavy,Progressive power"
4460,Villainy,2,2010,The Netherlands,-,"Blackened thrash,Crust,Punk"
4461,Vise Versa,2,2012,France,2012,Alternative
4462,Vista Chino,2,2010,USA,2014,Stoner rock
4463,Vitriol,2,2007,Italy,2007,Progressive
4464,Void Of Sleep,2,2010,Italy,-,Sludge
4465,Vomitile,2,2007,Cyprus,2007,"Death,Thrash"
4466,Vox Tempus,2,2003,USA,-,Progressive
4467,Wells Valley,2,2011,Portugal,2011,"Progressive sludge,Post-metal"
4468,When Woods Make Graves,2,2011,United Kingdom,-,Atmospheric black
4469,Whitehorse,2,2004,Australia,2004,"Drone doom,Sludge"
4470,Wilt,2,2010,Canada,-,Atmospheric black
4471,Winds Of Torment,2,2001,France,2001,Melodic death
4472,Witchbound,2,2013,Germany,-,"Melodic power,Heavy"
4473,Within The Fall,2,2010,Sweden,2010,Death doom
4474,WIZ,2,1996,Sweden,-,Power
4475,Woburn House,2,2005,Germany,2005,Post-metal
4476,Wolvserpent,2,2005,USA,-,Drone doom
4477,Woods Of Belial,2,1995,Finland,1995,"Black,Funeral doom,Industrial doom,Doom"
4478,Worth Dying For,2,2002,Canada,-,"Progressive death,Melodic death"
4479,Yawarhiem,2,2005,Peru,2005,"Symphonic power,Folk"
4480,Yogth Sothoth,2,2003,Colombia,-,Brutal death
4481,Zavorash,2,1996,Sweden,1996,Black
4482,11Paranoias,1,2011,United Kingdom,-,"Doom,Sludge"
4483,48 Crash,1,1975,Germany,1975,"Progressive rock,Heavy"
4484,7 H. Target,1,2005,Russia,-,Brutal death
4485,A Gruesome Find,1,1998,USA,1998,Blackened death
4486,A New Dawn,1,1997,The Netherlands,-,"Gothic,Symphonic"
4487,Abhorrent,1,2007,USA,2007,"Brutal death,Technical death"
4488,Absconditus,1,2010,France,-,Black
4489,Acrosome,1,2009,Turkey,2009,"Depressive black,Dark ambient"
4490,Adagio (BRA),1,1995,Brazil,-,Death doom
4491,Aeon Throne,1,2010,Norway,2010,"Black,Death"
4492,Against Nature,1,2004,USA,-,"Doom,Hard rock,Progressive rock"
4493,Against Tolerance,1,2009,Brazil,2009,"Metalcore,Experimental thrash"
4494,Age Of Woe,1,2010,Sweden,-,"Death,Crust,Punk"
4495,Airdash,1,1986,Finland,1986,Thrash
4496,Akem Manah,1,2007,Belgium,-,"Death,Doom"
4497,Akem Manah (USA),1,2009,USA,2009,Death doom
4498,Akhenaten,1,2012,USA,-,"Black,Death"
4499,Aktor,1,2013,Finland,2013,"Psychedelic hard rock,Heavy"
4500,Alien Syndrome 777,1,2007,Italy,-,Avantgarde black
4501,Alkimya,1,2004,France,2004,Progressive
4502,Alkoholizer,1,2006,"Italy, Spain",-,Thrash
4503,Amor E Morte,1,2004,Bulgaria,2004,"Gothic,Symphonic black"
4504,Ancient Altar,1,2013,USA,-,"Sludge,Doom"
4505,Andacht,1,2008,USA,2008,Atmospheric black
4506,Angmaer,1,2013,United Kingdom,-,Black
4507,Angrepp,1,2005,Sweden,2005,"Black,Thrash"
4508,Anima Tempo,1,2009,Mexico,-,Progressive death
4509,Antagonist Zero,1,2010,Finland,2010,Death doom
4510,Antlion,1,2012,Canada,-,Progressive death
4511,Apa Simbetii,1,2009,Romania,2009,"Progressive death,Black"
4512,Apathie,1,2009,Germany,-,Black
4513,Aposthate,1,2004,Italy,2004,Brutal death
4514,Arbitrator (CAN),1,2010,Canada,-,Industrial death
4515,Architects Of Chaoz,1,2014,Germany,2014,Heavy
4516,Armahda,1,2011,Brazil,-,"Heavy,Power"
4517,Arryan Path,1,1997,"USA, Cyprus",1997,"Heavy,Power"
4518,Arsh Anubis,1,2011,USA,-,Black
4519,Artisian,1,2004,United Kingdom,2004,"Black,Death"
4520,As Autumn Calls,1,2005,Canada,-,"Death,Doom"
4521,Ashen Horde,1,2013,USA,2013,Progressive black
4522,Ashtar,1,2012,Switzerland,-,"Sludge,Drone"
4523,Aspectra,1,2014,Norway,2014,"Black,Death"
4524,Astral Tears,1,2009,France,-,"Progressive,Alternative"
4525,Asymmetry,1,2011,Serbia,2011,Progressive
4526,Aurinko,1,2011,Canada,2013,"Doom,Folk"
4527,Autumn: Death,1,2011,Sweden,2011,"Melodic black,Melodic death"
4528,Axial Lead,1,2011,Romania,-,Progressive
4529,Azavatar,1,2013,Germany,2013,Black
4530,Baptists,1,2010,Canada,-,"Hardcore,Punk"
4531,Basement Torture Killings,1,2007,United Kingdom,2007,Death
4532,Bask,1,2013,USA,-,"Post-metal,Stoner rock,Psychedelic rock"
4533,Battlezone,1,1985,United Kingdom,1985,"Groove thrash,Heavy"
4534,Beaten Back To Pure,1,1998,USA,-,"Doom,Sludge"
4535,Before God,1,1997,USA,1997,"Black,Folk"
4536,Bersimbah Darah,1,2007,Indonesia,-,Deathgrind
4537,Beyond The Flesh,1,2000,USA,2000,Melodic death
4538,Bhleg,1,2013,Sweden,-,Atmospheric black
4539,Black Succubi,1,2005,Denmark,2005,Heavy
4540,Blackened,1,1997,Germany,2007,"Heavy,Power"
4541,Blackwelder,1,2012,USA,2012,Power
4542,Blade Of Spirit,1,1996,Greece,-,Power
4543,Blastanus,1,2007,Finland,2007,"Brutal death,Grindcore"
4544,Blliigghhtted,1,2014,Turkey,-,Experimental black
4545,Bloodgut,1,2004,Sweden,2004,Death
4546,Blustery Caveat,1,2002,Greece,-,Brutal death
4547,Born From Ruins,1,2009,USA,2009,"Alternative,Hard rock"
4548,Brainchoke,1,2000,United Kingdom,-,"Grindcore,Death"
4549,Bubonic Wrath,1,2005,USA,2005,"Black,Death,Thrash"
4550,Burnsred,1,2007,USA,-,"Progressive sludge,Doom,Post-metal"
4551,Burweed,1,2009,Finland,2009,"Atmospheric sludge,Post-metal"
4552,Cadmium,1,2010,France,-,Symphonic
4553,Cannibal Accident,1,2007,Finland,2007,Grindcore
4554,Cara Neir,1,2008,USA,-,Experimental black
4555,Carry The Storm,1,2008,USA,2008,"Thrash,Death"
4556,Castrator,1,2013,USA,-,Death
4557,Casual Silence,1,1993,The Netherlands,1993,Progressive
4558,Cat O' Nine Tails,1,2012,Finland,-,"Folk,Symphonic power"
4559,Ceremonia,1,2011,France,2011,Atmospheric doom
4560,Cetacean,1,2015,USA,-,"Doom,Sludge"
4561,Chrome Waves,1,2010,USA,2010,"Atmospheric black,Post-metal"
4562,Citizen,1,2004,USA,2011,Grindcore
4563,Code Of Nelson's Folly,1,2012,Croatia,2012,Folk
4564,Cold Night For Alligators,1,2008,Denmark,-,"Progressive math,Djent"
4565,Collateral Damage,1,2004,Italy,2004,Heavy
4566,Collide,1,2003,Latvia,-,Thrash
4567,Coltsblood,1,2010,United Kingdom,2010,"Doom,Sludge"
4568,Conjuro Nuclear,1,2012,Spain,-,"Black,Darkwave"
4569,Contemplator,1,2011,Canada,2011,"Progressive,Instrumental"
4570,Corr Mh�na,1,2009,Ireland,-,"Doom,Heavy,Celtic black"
4571,Corrupted Melody,1,1995,Slovak Republic,1995,"Death,Atmospheric doom"
4572,Cr�puscule,1,2007,Canada,-,Atmospheric black
4573,Cryogenic,1,1993,Germany,1993,Symphonic black
4574,Crypt Of Kerberos,1,1990,Sweden,-,"Death doom,Progressive death"
4575,Cursed 13,1,1998,Sweden,1998,Black
4576,Daedalus,1,2000,Italy,-,Progressive
4577,Dalkhu,1,2003,Slovenia,2003,"Black,Death"
4578,Dark Covenant,1,2009,Canada,-,Doom
4579,Dark Wings Syndrome,1,2008,Portugal,2008,"Gothic,Progressive"
4580,Darkall Slaves,1,2005,France,-,Brutal death
4581,Darkened Souls,1,2006,Finland,2006,"Doom,Melodic death"
4582,DarkRise,1,1998,Switzerland,-,Brutal death
4583,Dawn Of Oblivion,1,1991,Sweden,1991,Gothic
4584,Dead Head,1,1989,The Netherlands,-,Thrash
4585,Deadalus,1,2010,Belgium,2010,Progressive death
4586,Deadspace,1,2014,Australia,-,Depressive black
4587,Dearly Beheaded,1,1993,United Kingdom,1993,"Thrash,Power"
4588,Death Mechanism,1,2003,Italy,-,Thrash
4589,Death Wolf,1,2011,Sweden,2011,"Heavy,Punk"
4590,Decease,1,2011,Romania,-,"Death,Thrash"
4591,Deceiver,1,2002,Sweden,2002,"Heavy,Thrash"
4592,Demonstealer,1,1998,India,-,"Black,Death,Thrash"
4593,Dendritic Arbor,1,2012,USA,2012,"Black,Grindcore"
4594,Deos,1,2013,United Kingdom,-,Funeral doom
4595,Diamonds Are Forever,1,2011,Romania,2011,Metalcore
4596,Die Toten Kehren Wieder Mit Dem Wind,1,1995,Germany,-,Black
4597,Dodenkrocht,1,2004,The Netherlands,2004,"Black,Doom"
4598,Domg�rd,1,1997,Sweden,-,Black
4599,Doomocracy,1,-,Greece,-,Doom
4600,Douce Morphine,1,2000,France,2009,Atmospheric doom
4601,Dracena,1,1994,Sweden,1994,"Death,Thrash"
4602,Drag The Dead,1,2009,USA,-,"Death,Grindcore"
4603,Dryade,1,1997,France,1997,"Progressive,Melodic progressive"
4604,Dyecrest,1,1993,Finland,-,"Heavy,Power"
4605,Dyscord,1,2003,Australia,2003,Metalcore
4606,Ecliptyka,1,1998,Brazil,-,Heavy
4607,Ectovoid,1,2010,USA,2010,Death
4608,Eden Sands,1,2013,USA,-,"Doom,Stoner"
4609,El Comer Ocho,1,2008,Belgium,2008,Deathcore
4610,Elderoth,1,2007,Canada,-,Progressive power
4611,Elgibbor,1,1999,Poland,1999,Black
4612,Elusion,1,2015,Belgium,-,"Gothic,Symphonic"
4613,Embers,1,2004,USA,2004,"Black,Doom,Crust,Punk"
4614,Empire Auriga,1,2008,USA,-,"Industrial black,Ambient"
4615,Equinox,1,2013,France,2013,"Symphonic,Progressive"
4616,Ergot,1,2009,Italy,-,Atmospheric black
4617,Erik Norlander,1,1993,USA,1993,Progressive
4618,Errorgeist,1,2013,USA,-,"Industrial,Death"
4619,Estoner,1,2009,Estonia,2009,Stoner
4620,Eternal Mourning,1,1995,Portugal,-,Gothic doom
4621,Evenmore,1,2011,Switzerland,2011,"Power,Progressive,Folk"
4622,Evil Survives,1,2008,Canada,-,Heavy
4623,Evoh�,1,2000,France,2000,Pagan black
4624,Ex Dementia,1,2005,USA,-,"Death,Thrash"
4625,Face Off,1,2006,Serbia,2006,"Alternative,Post-metal"
4626,Fallen Yggdrasil,1,1996,Germany,-,Death
4627,Fange,1,2013,France,2013,Blackened doom
4628,Farseer,1,2008,United Kingdom,-,"Power,Heavy"
4629,Fatal Smile,1,1995,Sweden,1995,Hard rock
4630,Fever Sea,1,2011,United Kingdom,-,"Atmospheric black,Post-metal"
4631,Fire Trails,1,2002,Italy,2002,"Heavy,Hard rock"
4632,Fireproven,1,2008,Finland,-,Extreme progressive
4633,Flowing Tears & Withered Flowers,1,1995,Germany,1995,Gothic doom
4634,Fondlecorpse,1,1996,The Netherlands,-,Death
4635,Frowning,1,2011,Germany,2011,Funeral doom
4636,Funeral Moth,1,2005,Japan,-,Funeral doom
4637,Funerarium,1,2000,Luxembourg,2000,Black
4638,Fury UK,1,2002,United Kingdom,-,Heavy
4639,Geryon,1,2012,USA,2012,Technical death
4640,Ghoulgotha,1,2012,USA,-,Death doom
4641,Gjenferdsel,1,2002,Norway,2002,Black
4642,Gloom,1,2002,Spain,-,Death
4643,Gloson,1,2014,Sweden,2014,"Post-metal,Sludge"
4644,Goddess Of Desire,1,1995,The Netherlands,2009,Heavy
4645,GodHateCode,1,2007,Austria,2007,"Death,Grindcore"
4646,Gorrch,1,2010,Italy,-,Black
4647,Grey,1,2004,USA,2004,Doom
4648,Grimegod,1,1991,Romania,-,"Death,Doom,Gothic"
4649,Grimpen Mire,1,2007,United Kingdom,2007,"Doom,Sludge"
4650,Gris�tre,1,2006,France,-,"Atmospheric black,Depressive black"
4651,Groinchurn,1,1994,South Africa,1994,Grindcore
4652,Gutfed,1,2011,Turkey,-,"Brutal death,Grindcore"
4653,Hadal Maw,1,2010,Australia,2010,Technical death
4654,Hanternoz,1,2006,France,-,"Celtic folk,Black"
4655,Head Phones President,1,2000,Japan,2000,Alternative
4656,Helion,1,1995,Finland,-,Progressive
4657,Hell's Thrash Horsemen,1,2007,Russia,2007,Thrash
4658,Heonia,1,2006,France,-,"Symphonic,Progressive"
4659,Highgate,1,2005,USA,2005,Doom
4660,Hlidolf,1,2002,Norway,2004,"Drone,Dark ambient"
4661,Hordes Of The Lunar Eclipse,1,1995,USA,1995,Black
4662,Horizon Of The Mute,1,2015,Finland,-,"Funeral doom,Drone doom"
4663,Horncrowned,1,2001,Colombia,2001,Black
4664,Humanfly,1,2000,United Kingdom,-,"Atmospheric,Sludge,Metal"
4665,Huron,1,2007,United Kingdom,2007,"Melodic thrash,Progressive"
4666,Husqvarna,1,1989,Latvia,-,"Death,Thrash"
4667,Ibex Angel Order,1,2013,The Netherlands,2013,Black
4668,Ides Of Winter,1,2011,Canada,-,Black
4669,Ilsa,1,2008,USA,2008,"Death doom,Crust,Punk"
4670,Immorior,1,2013,Germany,-,"Atmospheric black,Post-metal"
4671,Imperceptum,1,2014,Germany,2014,"Atmospheric black,Funeral doom"
4672,In Cauda Venenum,1,2010,France,-,Black
4673,In Vain (ESP),1,2001,Spain,2001,"Heavy,Power"
4674,Incapacitate,1,2002,USA,-,"Thrash,Grindcore"
4675,Infection,1,2006,Peru,2006,Death
4676,Infernal Angels,1,2002,Italy,-,Melodic black
4677,Infinite Waste,1,2014,USA,2014,Grindcore
4678,Infinity�,1,2015,Russia,-,"Progressive,Alternative rock"
4679,Inhepsie,1,2001,France,2001,Atmospheric gothic
4680,Inimical,1,2005,Denmark,-,"Death,Metalcore"
4681,Into The Nethermost,1,1998,Spain,1998,"Death,Black,Thrash"
4682,Intrinsic,1,1984,USA,-,"Power,Progressive,Thrash"
4683,Iron Void,1,1998,United Kingdom,1998,Doom
4684,Itnuveth,1,2013,Spain,-,Pagan black
4685,Jackdevil,1,2010,Brazil,2010,"Thrash,Heavy"
4686,Jesus Ain't In Poland,1,2004,Italy,-,"Grindcore,Deathgrind"
4687,Jezabel,1,1993,Argentina,1993,Power
4688,K.F.R,1,2013,France,-,"Black,Ambient"
4689,K.L.L.K.,1,2010,France,2010,Atmospheric black
4690,Kalmankantaja,1,2011,Finland,-,Depressive black
4691,Kanashimi,1,2007,Japan,2007,"Depressive black,Funeral doom"
4692,Kardashev,1,2012,USA,-,"Atmospheric death,Deathcore"
4693,Kempes,1,2013,Romania,2013,"Heavy,Hard rock"
4694,Khanus,1,2015,Finland,-,Death
4695,Khaotic,1,2012,Brazil,2012,Black
4696,Kill Ritual,1,2010,USA,-,Thrash
4697,Killing Addiction,1,1988,USA,1988,Death
4698,Kilmara,1,2003,Spain,-,"Heavy,Progressive power"
4699,Kinetic,1,2002,Greece,2002,Progressive death
4700,Knelt Rote,1,2008,USA,-,"Grindcore,Noise,Power,Electronics ,Black"
4701,Kommandant,1,2005,USA,2005,"Blackened death,Thrash"
4702,Krle?,1,1990,Czech Republic,-,Heavy
4703,Kroh,1,2011,United Kingdom,2011,"Doom,Stoner"
4704,L'Hiver En Deuil,1,2010,Belgium,-,Black
4705,Leeds Point,1,2012,USA,2012,"Heavy,Stoner"
4706,Legacy ID,1,2012,Latvia,-,Progressive
4707,Lenore S. Fingers,1,2010,Italy,2010,Gothic
4708,Licht- Und Schattensaiten,1,2001,Germany,-,Avantgarde black
4709,Linea 77,1,1993,Italy,1993,Nu
4710,Lion Twin,1,2011,Germany,-,"Heavy,Hard rock"
4711,Lionheart,1,2004,USA,2004,Hardcore
4712,Liquid Graveyard,1,2006,Spain,-,Progressive death
4713,Lo-Ruhamah,1,2004,USA,2004,Death
4714,Lucifixion,1,1990,USA,-,"Death,Melodic death"
4715,Lumbar,1,2013,USA,2013,"Doom,Sludge"
4716,Luna Field,1,1998,Germany,-,"Black,Death"
4717,Luthor,1,2003,Australia,2003,Heavy
4718,Macabra,1,2011,Belgium,-,Death
4719,Mangog,1,2014,USA,2014,Doom
4720,Manimalism,1,1992,Norway,-,"Black,Avantgarde"
4721,Massakren,1,2008,USA,2008,"Extreme power,Melodic death"
4722,Masters Of Metal,1,2011,USA,-,"Speed,Thrash"
4723,Materia,1,2007,Poland,2007,Deathcore
4724,Maudlin,1,2004,Belgium,-,"Post-metal,Sludge"
4725,MCM,1,2004,USA,2004,Progressive
4726,Mefitic,1,2004,Italy,-,"Black,Death"
4727,Megaton Leviathan,1,2007,USA,2007,Drone doom
4728,Melencolia Estatica,1,2004,Italy,-,Black
4729,Mercury Rain,1,1999,United Kingdom,1999,"Power,Gothic"
4730,Merda Mundi,1,2006,Belgium,-,Black
4731,Mesmur,1,2013,USA,2013,Funeral doom
4732,Metalstorm,1,2011,Australia,2015,Thrash
4733,Methedras,1,1996,Italy,1996,Thrash
4734,Michael Schenker's Temple Of Rock,1,2011,Germany,-,"Heavy,Hard rock"
4735,Midwinter,1,2000,France,2000,Gothic
4736,Mincing Fury And Guttural Clamour Of Queer Decay,1,1996,Czech Republic,-,"Brutal death,Goregrind"
4737,Mion's Hill,1,2012,Norway,2012,Black
4738,Mirror Of Deception,1,1990,Germany,-,Doom
4739,Misere Nobis,1,2011,Italy,2011,Depressive black
4740,Monolith (GER),1,2010,Germany,-,Psychedelic doom
4741,Monolithian,1,2010,United Kingdom,2010,Blackened sludge
4742,Mor Dagor,1,1996,Germany,-,Black
4743,Morgenstern,1,1998,Germany,1998,Folk
4744,Morgue Orgy,1,2008,United Kingdom,-,Melodic death
4745,Morni� Ut�li�,1,2013,Poland,2013,Black
4746,Motor Sister,1,2014,USA,-,Hard rock
4747,Movimento D'Avanguardia Ermetico,1,2005,Italy,2005,Atmospheric black
4748,Mudbath,1,2011,France,-,"Sludge,Blackened hardcore"
4749,Myrk,1,1997,Iceland,1997,Black
4750,Mystica,1,1999,Belgium,-,"Melodic death,Black"
4751,Mythopoeia,1,1993,Czech Republic,1993,"Melodic doom,Death"
4752,Naga,1,2013,Italy,-,"Sludge,Doom"
4753,Napalm Strike,1,2012,USA,2012,Thrash
4754,Narwhal Tusk,1,2006,Russia,-,Symphonic power
4755,Nashgul,1,2001,Spain,2001,Grindcore
4756,Necropsy,1,2008,USA,2013,"Death,Thrash"
4757,Need,1,2003,Greece,2003,Progressive
4758,Nefandus,1,1993,Sweden,-,Black
4759,Negative Core Project,1,2010,Romania,2010,Metalcore
4760,Nekrokraft,1,2012,Sweden,-,"Black,Death,Thrash"
4761,Nifrost,1,2005,Norway,2005,"Viking folk,Folk black"
4762,Nightslug,1,2011,Germany,-,Sludge
4763,Ningen Isu,1,1987,Japan,1987,"Doom,Heavy,Hard rock,Progressive rock"
4764,No�s,1,2010,Australia,-,"Doom,Sludge"
4765,Nolentia,1,2007,France,2007,Grindcore
4766,Norilsk,1,2012,Canada,-,"Death doom,Funeral doom"
4767,Northless,1,2007,USA,2007,"Doom,Sludge"
4768,Nyctophilia,1,2014,Poland,-,Depressive black
4769,Oceans Of Night,1,2007,USA,2007,Progressive
4770,Ofdrykkja,1,2012,Sweden,-,Depressive black
4771,Offal,1,2003,Brazil,2003,Death
4772,Okazaki Fragments,1,2014,Canada,2015,"Technical death,Grindcore"
4773,Oliver/Dawson Saxon,1,1999,United Kingdom,1999,Heavy
4774,Omr�de,1,2014,France,-,"Experimental rock,Electro avantgarde"
4775,"One Tail, One Head",1,2008,Norway,2008,Black
4776,Opened Paradise,1,2003,Greece,-,"Gothic,Gothic rock"
4777,Orbweaver,1,2010,USA,2010,Psychedelic death
4778,Ordo Inferus,1,2012,Sweden,-,Death
4779,Organ Dealer,1,2013,USA,2013,Grindcore
4780,Oubliette,1,2011,USA,-,Melodic black
4781,Overgarven,1,2001,Greece,2001,Melodic death
4782,Overtures,1,2003,Italy,-,Heavy
4783,P.O.O.R.,1,2006,USA,2006,Grindcore
4784,Paganize,1,2001,Norway,-,Heavy
4785,Paganus,1,2000,Finland,2000,Doom
4786,Palace Of Worms,1,2007,USA,-,Black
4787,Pale Chalice,1,2008,USA,2008,Black
4788,Paroxsihzem,1,2007,Canada,-,"Black,Death"
4789,Paul Chain,1,1979,Italy,1979,"Doom,Psychedelic rock"
4790,Pavor,1,1987,Germany,-,Technical death
4791,Perfecitizen,1,2011,Czech Republic,2011,Deathgrind
4792,Perpetual Fire,1,1999,Italy,-,"Heavy,Power"
4793,Philadelphia,1,1976,USA,1976,Heavy
4794,Phobonoid,1,2013,Italy,-,"Black,Doom,Industrial"
4795,Pime� Mets�,1,2006,Spain,2006,Viking folk
4796,Pink Mass,1,2014,USA,-,"Crust,Punk ,Black,Grindcore"
4797,Plague Of Stars,1,2012,USA,2012,Gothic doom
4798,Plaguewielder,1,2012,Luxembourg,-,Atmospheric doom
4799,Pombagira,1,2007,United Kingdom,2007,"Psychedelic doom,Stoner"
4800,Pr�ternatura,1,2014,USA,-,Black
4801,Profanator,1,1999,Mexico,1999,Thrash
4802,Project: Roenwolfe,1,2011,USA,-,"Power,Thrash"
4803,Psycho Symphony,1,1992,Romania,1992,Progressive thrash
4804,Pulsar Colony,1,2008,USA,-,"Experimental black,Ambient black,Avantgarde black"
4805,Purple Hill Witch,1,2010,Norway,2010,Doom
4806,Putrid Offal,1,1991,France,-,"Death,Grindcore"
4807,Pyriphlegethon,1,2014,The Netherlands,2014,Black
4808,Quiet Child,1,2004,Australia,-,Alternative
4809,Rabenwolf,1,2007,Germany,2007,"Pagan folk,Black"
4810,Reactor,1,1997,Finland,-,"Doom,Stoner,Rock"
4811,Regnvm Animale,1,2013,Sweden,2013,"Black,Crust,Punk"
4812,Rex Mundi,1,2002,Greece,-,"Progressive,Thrash"
4813,Rezident EX,1,2012,Romania,2012,"Hard rock,Heavy"
4814,Rhevan,1,2007,Brazil,-,Gothic
4815,Rhino,1,2004,Spain,2004,"Doom,Sludge"
4816,Rintrah,1,2009,USA,-,"Psychedelic doom,Stoner"
4817,Risen To Reclaim,1,2007,Croatia,2007,Heavy
4818,Ritual Chamber,1,2013,USA,-,Death
4819,Rosa �gnea,1,2003,Brazil,2003,Gothic
4820,Rosicrucian,1,2010,United Kingdom,2011,Black
4821,Rustless,1,-,Italy,-,Heavy
4822,Ruthless Steel,1,2012,"Greece, Sweden",2015,Heavy
4823,Sacramento,1,2009,Chile,2009,Gothic
4824,Sacred Dawn,1,2005,USA,-,Melodic progressive
4825,Sacrist,1,1992,Czech Republic,1992,Black
4826,Sage's Recital,1,2013,Denmark,-,Neoclassical symphonic
4827,Samhain (US-NH),1,2014,USA,2014,"Atmospheric black,Doom"
4828,Saxorior,1,1994,Germany,-,Melodic black
4829,Scala Mercalli,1,1992,Italy,1992,"Heavy,Power"
4830,Scavenger,1,2001,Ireland,2006,"Thrash,Heavy"
4831,Scumpulse,1,2013,United Kingdom,2013,"Black,Crust,Punk"
4832,Sea Bastard,1,2011,United Kingdom,-,Doom
4833,Sedulity,1,2009,USA,2009,"Progressive death,Progressive thrash"
4834,Selbst,1,2011,Venezuela,-,Black
4835,Selbstentleibung,1,2006,Austria,2006,Depressive black
4836,Self Spiller,1,2006,USA,-,"Avantgarde,Experimental black"
4837,Serpentcult,1,2006,Belgium,2006,Doom
4838,Shadow Of The Torturer,1,2006,USA,-,"Doom,Sludge"
4839,Shadowdance,1,1999,USA,1999,Power
4840,Sheol,1,2012,United Kingdom,-,Death
4841,Shroud Of Despondency,1,1999,USA,1999,Black
4842,Shtack,1,2008,The Netherlands,-,"Melodic death,Folk"
4843,Silence,1,1995,Germany,1995,Gothic
4844,Silence In The Grey,1,2013,USA,-,Doom
4845,Sin Origin,1,1999,USA,1999,Black
4846,SinHeresY,1,2009,Italy,-,"Symphonic,Melodic heavy"
4847,Sinners Burn,1,2007,Sweden,2007,Death
4848,Skadika,1,2005,Germany,-,"Power,Folk"
4849,Skeleton Of God,1,1993,USA,1993,"Death,Grindcore,Psychedelic death"
4850,Skineater,1,2008,Sweden,-,Death
4851,Skullhog,1,2006,The Netherlands,2006,Goregrind
4852,Snailking,1,2010,Sweden,-,"Doom,Sludge,Stoner"
4853,Soijl,1,2014,Sweden,2014,Death doom
4854,Solisia,1,2006,Italy,-,"Progressive power,Symphonic"
4855,Son Of A Bitch,1,1994,United Kingdom,1994,Heavy
4856,Sorg Uten T�rer,1,2006,Finland,-,"Melodic black,Folk"
4857,Soulsearch,1,1991,Austria,1991,Doom
4858,Soulslide,1,2002,Germany,-,Symphonic gothic
4859,Soundcrawler,1,2011,France,2011,Alternative
4860,Sources Of I,1,2014,Bulgaria,-,Black
4861,Southern Empire,1,2014,Australia,2014,Progressive rock
4862,Sphere Of Souls,1,2004,The Netherlands,-,Progressive
4863,Spidergawd,1,2013,Norway,2013,"Hard rock,Psychedelic rock"
4864,Spirit Adrift,1,2015,USA,-,Doom
4865,Splitter,1,2003,Sweden,2003,Grindcore
4866,Spylacopa,1,2000,USA,-,"Avantgarde,Progressive"
4867,Starbreeze,1,2008,Russia,2008,Symphonic
4868,Stickoxydal,1,2003,Belarus,-,"Grindcore,Gore grindcore"
4869,Stigmhate,1,1998,Italy,1998,Black
4870,StoneLake,1,2002,Sweden,-,"Melodic heavy,Hard rock"
4871,Stranger Aeons,1,2002,Lithuania,2002,"Progressive,Progressive rock"
4872,Subliminal Crusher,1,2002,Italy,-,"Melodic death,Thrash"
4873,Suffer Yourself,1,2011,"Poland, Sweden",2011,Funeral doom
4874,Suicide Emotions,1,2012,Italy,-,Depressive black
4875,Sukekiyo,1,2013,Japan,2013,"Progressive,J-rock"
4876,Surtr,1,2009,France,-,Doom
4877,Sus Scrofa,1,1991,France,1991,Pagan black
4878,Swamp Witch,1,2009,USA,-,"Doom,Sludge"
4879,Sweet & Lynch,1,2014,USA,2014,Hard rock
4880,Taka Minamino,1,2005,Japan,-,Neoclassical power
4881,Tears Of Mankind,1,2002,Russia,2002,"Gothic,Doom"
4882,Temple,1,2011,The Netherlands,-,Death
4883,Temple Nightside,1,2010,Australia,2010,"Black,Death"
4884,Teodasia,1,2006,Italy,-,Symphonic gothic
4885,The Atrocity Exhibit,1,2005,United Kingdom,2005,Grindcore
4886,The Conjuration,1,2010,USA,-,"Avantgarde,Death"
4887,The Coven,1,2004,Finland,2004,Doom
4888,The Crescent,1,2012,Finland,-,Black
4889,The Drip,1,2007,USA,2007,Grindcore
4890,The Embodiment,1,1994,The Netherlands,2009,Thrash
4891,The End,1,2015,USA,2015,Death
4892,The Howling Wind,1,2006,USA,-,"Black,Noise"
4893,The Iniquity Descent,1,2009,Finland,2009,Black
4894,The Konstellation,1,2009,Hungary,-,"Black,Death"
4895,The Living Fields,1,2002,USA,2002,Epic doom
4896,The Local Band,1,2013,Finland,-,Heavy
4897,The Nihilistic Front,1,2005,Australia,2005,"Death,Doom"
4898,The Order Of The Solar Temple,1,2012,Canada,-,"Doom,Heavy,Hard rock,Psychedelic rock"
4899,The Poisoned Glass,1,2015,USA,2015,Drone doom
4900,The Ransack,1,2001,Portugal,-,Death
4901,The Senseless,1,1997,United Kingdom,1997,Deathgrind
4902,The Steve Grimmett Band,1,2006,United Kingdom,-,Heavy
4903,The Temple,1,2005,Greece,2005,Doom
4904,The Voynich Code,1,2013,Portugal,-,"Progressive deathcore,Technical deathcore"
4905,Thera Roya,1,2011,USA,2011,"Sludge,Post-metal"
4906,Third Storm,1,1986,Sweden,-,Black
4907,Throes,1,2011,United Kingdom,2011,Blackened death
4908,Timo Komulainen,1,2011,Finland,-,Progressive
4909,Tine,1,2011,USA,2011,"Symphonic black,Death"
4910,Tod Huetet Uebel,1,2012,Portugal,-,Black
4911,Tombstone,1,2001,Finland,2001,Heavy
4912,Tome Of The Unreplenished,1,2012,Cyprus,-,Atmospheric black
4913,Tony C,1,2013,USA,2013,"Progressive,Instrumental"
4914,Torn Apart,1,2005,Sweden,2009,Death
4915,Totem,1,2002,Poland,2002,"Death,Thrash"
4916,Totem Skin,1,2012,Sweden,-,Blackened hardcore
4917,Trauma (USA),1,1981,USA,1981,"Power,Speed"
4918,Trauma Moralis,1,2006,Latvia,-,Grindcore
4919,Trial,1,2007,Sweden,2007,Heavy
4920,Trifixion,1,2009,United Kingdom,2014,"Brutal death,Technical death"
4921,Triumvir Foul,1,2014,USA,2014,Death
4922,Tulsadoom,1,2007,Austria,-,"Blackened heavy,Thrash"
4923,Tummler And Solomon,1,2010,USA,2010,Stoner
4924,Tyrant Eyes,1,1993,Germany,-,Power
4925,Umbah,1,1990,United Kingdom,1990,"Avantgarde,Death,Industrial"
4926,Under That Spell,1,2008,Germany,2014,Black
4927,Union,1,2005,Poland,2005,Black
4928,Unrest,1,2006,USA,-,Grindcore
4929,Unru,1,2012,Germany,2012,"Black,Crust,Punk"
4930,Ur�arm�ni,1,2015,Sweden,-,Depressive black
4931,Ureas,1,2003,Denmark,2003,"Power,Progressive"
4932,Valpurgis Night,1,2008,United Kingdom,-,Heavy
4933,Varga,1,1989,Canada,1989,"Progressive thrash,Industrial thrash,Thrash,Groove thrash"
4934,Vassafor,1,1994,New Zealand,-,Black
4935,Vehement,1,2002,Italy,2002,Thrash
4936,Verdun,1,2010,France,-,"Sludge,Hardcore"
4937,Vermin,1,2002,The Netherlands,2002,Death
4938,Vin de Mia Trix,1,2007,Ukraine,-,Death doom
4939,Vitacit,1,1972,Czech Republic,1972,Heavy
4940,Voices From Beyond,1,2006,Italy,-,Thrash
4941,Voidless Form,1,2015,Romania,2015,"Noise,Drone doom"
4942,Volition,1,2005,United Kingdom,-,Doom
4943,Voodooshock,1,1998,Germany,1998,Doom
4944,Vuyvr,1,2011,Switzerland,-,Black
4945,Wagars,1,2012,Latvia,2012,"Crust,Punk ,Black"
4946,Wake,1,2009,Canada,-,Grindcore
4947,Warlord U.K.,1,1993,United Kingdom,1993,"Death,Thrash"
4948,Weapon UK,1,-,United Kingdom,-,"New wave of british heavy,Heavy"
4949,Wheelfall,1,2009,France,2009,Stoner
4950,Where She Wept,1,1996,USA,2014,"Black,Death,Gothic doom"
4951,Winters,1,2005,United Kingdom,2005,"Sludge,Doom"
4952,Wistful,1,2010,Portugal,-,"Atmospheric black,Shoegaze"
4953,Witchcurse,1,2005,Greece,2005,Heavy
4954,Witchrist,1,2006,New Zealand,-,"Black,Death"
4955,Withershin,1,2006,Sweden,2006,Black
4956,Wolfpack,1,1995,Sweden,2001,"Crust punk,D-beat"
4957,Wolves Carry My Name,1,2011,Germany,2011,"Stoner,Sludge"
4958,Wood Of Suicides,1,2006,Australia,-,"Black,Doom"
4959,Wovoka,1,2013,USA,2013,"Doom,Post-metal,Sludge"
4960,Wretch,1,2015,USA,-,Doom
4961,Wrong,1,2012,Spain,2012,Black
4962,WVRM,1,2013,USA,-,Grindcore
4963,Wyruz,1,2002,Norway,2002,"Death,Thrash"
4964,Xeri�n,1,2001,Spain,-,Celtic black
4965,Xsavior,1,2003,Sweden,2003,Progressive
4966,Yautja,1,2011,USA,-,"Sludge,Hardcore"
4967,Ye Goat-Herd Gods,1,2010,Canada,2010,Blackened heavy
4968,Yellow Eyes,1,2010,USA,-,Black
4969,Yhdarl,1,2006,Belgium,2006,"Black,Drone doom"
4970,Your Chance To Die,1,2007,USA,-,"Melodic death,Metalcore"
4971,Your Tomorrow Alone,1,2009,Italy,2009,"Progressive doom,Gothic"
4972,?rec,1,2004,Czech Republic,-,Pagan folk
4973,�mheten,0,2012,Sweden,2012,Depressive black
4974,(In)Trance,0,2009,Russia,-,Gothic
4975,6th Dimension,0,2008,Cyprus,2008,"Alternative,Progressive"
4976,9.7 Richter,0,2006,Romania,-,Heavy
4977,A Lower Deep,0,2000,USA,2000,"Progressive,Thrash,Power"
4978,Absence Of The Sacred,0,2005,Singapore,-,"Progressive death,Thrash"
4979,Ace Of Hearts,0,2008,United Kingdom,2008,"Gothic,Hard rock"
4980,Aeturnus Dominion,0,2003,Australia,-,Death
4981,Algy Ward's Tank,0,2007,United Kingdom,2007,Heavy
4982,Altars Of Grief,0,2013,Canada,-,"Funeral doom,Death doom,Atmospheric doom"
4983,Anatomia,0,2002,Japan,2002,"Death,Doom"
4984,Anger As Art,0,2004,USA,-,Thrash
4985,Angist,0,2009,Iceland,2009,Death
4986,Anmod,0,2005,Brazil,-,Brutal death
4987,Apokalyptic Raids,0,1997,Brazil,1997,Black
4988,Apothesary,0,2009,USA,-,"Thrash,Melodic death"
4989,Apparatus,0,2012,Denmark,2012,Blackened death
4990,Arctic Spirits,0,2003,Greenland,-,"Heavy,Hard rock"
4991,Argus (Ro),0,1996,Romania,1996,Black
4992,Arrest,0,1992,Germany,-,"Hard rock,Heavy"
4993,As I Lay Dying (AUT),0,1991,Austria,1991,"Death,Melodic doom"
4994,Asofy,0,2000,Italy,-,"Black,Doom"
4995,Atara,0,2006,France,2006,"Black,Grindcore"
4996,Avicularia,0,2003,Croatia,-,Avantgarde death
4997,Awake,0,2006,United Kingdom,2006,"Heavy,Progressive"
4998,Axatak,0,1983,Australia,1988,"Hard rock,Heavy"
4999,Axis Of Despair,0,2014,Sweden,2014,Grindcore
`;