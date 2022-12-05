import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsC extends Component {
    articles = [
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Tierney Sneed, Jessica Schneider, Devon M. Sayers, Nick Valencia",
        "title": "Judge weighs 'urgent' decision on whether to allow early voting in Georgia runoff on Saturday after Thanksgiving - CNN",
        "description": "A judge in Georgia on Friday ruled to allow early voting on November 26 in the state's US Senate runoff election.",
        "url": "https://www.cnn.com/2022/11/18/politics/judge-georgia-runoff-early-voting/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221106112630-warnock-campaign-1105.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2022-11-19T00:06:00Z",
        "content": "A judge in Georgia on Friday ruled to allow early voting on November 26 in the states US Senate runoff election.\r\nIn a written ruling, Fulton County Superior Court Judge Thomas Cox said that after he… [+3541 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MLB Trade Rumors"
        },
        "author": "Anthony Franco",
        "title": "Dodgers To Non-Tender Cody Bellinger - MLB Trade Rumors",
        "description": "The Dodgers will not tender a contract to Cody Bellinger for his final year of arbitration eligibility, reports Ken Rosenthal of the &hellip;",
        "url": "https://www.mlbtraderumors.com/2022/11/dodgers-to-non-tender-cody-bellinger.html",
        "urlToImage": "https://cdn.mlbtraderumors.com/files/2022/11/USATSI_19222375-1024x715.jpg",
        "publishedAt": "2022-11-18T23:50:32Z",
        "content": "The Dodgers will not tender a contract to Cody Bellinger for his final year of arbitration eligibility, reports Ken Rosenthal of the Athletic (Twitter link). MLBTR contributor Matt Swartz had project… [+5900 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Gawon Bae, Junko Ogura, Brad Lendon, Rhea Mogul, Larry Register",
        "title": "North Korea claims Friday's launch was a 'new kind of intercontinental ballistic missile' - CNN",
        "description": "North Korea said that it conducted a \"test firing of a new kind\" of intercontinental ballistic missile (ICBM) on Friday, according to the government-run KCNA news agency.",
        "url": "https://www.cnn.com/2022/11/17/asia/north-korea-ballistic-missile-friday-intl-hnk/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221116185739-kim-jong-un-october-17.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2022-11-18T23:23:00Z",
        "content": "North Korea said that it conducted a test firing of a new kind of intercontinental ballistic missile (ICBM) on Friday, according to the government-run KCNA news agency.\r\nJapan warned on earlier on Fr… [+8755 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "U.S. Justice Dept. names war crimes expert as special counsel for Trump probes - Reuters.com",
        "description": "U.S. Attorney General Merrick Garland on Friday named Jack Smith, a war crimes prosecutor, to serve as special counsel to oversee Justice Department investigations related to Donald Trump including the former president's handling of sensitive documents and ef…",
        "url": "https://www.reuters.com/world/us/us-justice-department-appoints-special-prosecutor-trump-probes-2022-11-18/",
        "urlToImage": "https://www.reuters.com/resizer/4cLFH4fskOl0gqBLD76wKEssDeg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3KAESW4EDRPZBFSYSQXHF4TFHY.jpg",
        "publishedAt": "2022-11-18T23:11:00Z",
        "content": "WASHINGTON, Nov 18 (Reuters) - U.S. Attorney General Merrick Garland on Friday named Jack Smith, a war crimes prosecutor, to serve as special counsel to oversee Justice Department investigations rela… [+5057 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "PEOPLE"
        },
        "author": "https://www.facebook.com/peoplemag",
        "title": "Harry Styles and Olivia Wilde 'Taking a Break' After Nearly 2 Years - PEOPLE",
        "description": "Harry Styles and Olivia Wilde are hitting pause on their relationship after first being linked in January 2021 while working together on Don't Worry Darling",
        "url": "https://people.com/music/harry-styles-olivia-wilde-taking-break-after-2-years-together-sources/",
        "urlToImage": "https://people.com/thmb/JcNiwQU3Wh7sFX3ordoUFUDUpKw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(344x289:346x291)/Olivia-Wilde-15c42a096b044bcd8a492ffc0c6d96bc.jpg",
        "publishedAt": "2022-11-18T23:00:00Z",
        "content": "Harry Styles and Olivia Wilde are hitting the brakes on their romance.\r\nThe \"As It Was\" singer, 28, and the Don't Worry Darling director, 38, are \"taking a break\" from their relationship after nearly… [+3464 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Women's Health"
        },
        "author": "Korin Miller",
        "title": "Elizabeth Holmes Has Gotten Pregnant Twice During Her Legal Proceedings - Yahoo Life",
        "description": "Theranos founder Elizabeth Holmes faced her criminal sentencing on Nov. 18. She had a baby in 2021 with Billy Evans, and is now pregnant with her second...",
        "url": "https://www.womenshealthmag.com/life/a42004313/elizabeth-holmes-kids/",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/_fcF1iTgD8rnZosuYaxIoA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDM-/https://media.zenfs.com/en/hearst_womens_health_52/da99c62f31571cb5d46d2f14e4c0fce1",
        "publishedAt": "2022-11-18T22:36:00Z",
        "content": "Elizabeth Holmes' Kids: Her Baby And 2nd PregnancyKimberly White - Getty Images\r\n\"Hearst Magazines and Yahoo may earn commission or revenue on some items through the links below.\"\r\nElizabeth Holmes, … [+4633 chars]"
        },
        {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
        },
        "author": "Ashley R. Williams and Doyle Rice, USA TODAY",
        "title": "Buffalo lake effect snow storm blamed for 2 deaths; snow keeps falling - USA TODAY",
        "description": "A lake-effect snowstorm canceled flights and stranded drivers in Buffalo, New York, as it continues dumping heavy snow.",
        "url": "https://www.usatoday.com/story/news/nation/2022/11/18/buffalo-new-york-snow-storm/10725985002/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2022/11/18/USAT/233719ef-7ffb-4b23-8e74-669c4df63fb3-AP22322562118683.jpg?auto=webp&crop=2999,1687,x0,y152&format=pjpg&width=1200",
        "publishedAt": "2022-11-18T22:07:19Z",
        "content": "A lake-effect snowstorm dumped several inches of snow over western New York early Friday, with snowfall totals expected to reach at least 4 feet through Sunday in the Buffalo area.\r\nThe storm was bla… [+4750 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "US midterms: Lauren Boebert's Democratic challenger concedes - BBC",
        "description": "The Republican firebrand faced an unexpectedly close race in her bid for re-election in Colorado.",
        "url": "https://www.bbc.com/news/world-us-canada-63683194",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/34ED/production/_127694531_boebs.jpg",
        "publishedAt": "2022-11-18T22:00:51Z",
        "content": "Colorado congresswoman Lauren Boebert is likely headed back to Washington after her Democratic challenger called her to concede the race on Friday. \r\nThe surprisingly tight House race is still expect… [+2554 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Natasha Turak, Rocio Fabbro",
        "title": "10 million Ukrainians without power, Kyiv says; Evidence of 'gross sabotage' found at Nord Stream blast site - CNBC",
        "description": "The U.N. warns that a greater humanitarian crisis lies ahead for Ukraine.",
        "url": "https://www.cnbc.com/2022/11/18/russia-ukraine-live-updates.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107143435-1667235583380-gettyimages-1244380258-AFP_32MJ4NJ.jpeg?v=1668768128&w=1920&h=1080",
        "publishedAt": "2022-11-18T21:34:00Z",
        "content": "The United States Agency for International Development will provide up to $20 million for the \"Grain from Ukraine\" initiative, a new program to further combat global food insecurity announced by Ukra… [+1387 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "8News"
        },
        "author": "Tannock Blair",
        "title": "‘Those are the worst scenes involving kids’: Mass shooting suspect arrested, victims identified in Chesterfield County - WRIC ABC 8News",
        "description": "Police have now identified the victims as 39-year-old JoAnna M. Cottle, 13-year-old Kaelyn M. Parson, 4-year-old Kinsey M. Cottle and 4-year-old Jayson L. Cottle. Police said JoAnna Cottle was the mother of the three children and all four victims lived at the…",
        "url": "https://www.wric.com/news/local-news/chesterfield-county/mass-shooting-suspect-arrested-victims-identified-in-chesterfield-county/",
        "urlToImage": "https://www.wric.com/wp-content/uploads/sites/74/2022/11/MicrosoftTeams-image-13.jpg?w=1280",
        "publishedAt": "2022-11-18T21:13:21Z",
        "content": "CHESTERFIELD COUNTY, Va. (WRIC) — A suspect in the killing of a mother and her three children was arrested in Maryland on Friday, hours after their bodies were found inside a home in Chester.\r\nShortl… [+2418 chars]"
        },
        {
        "source": {
        "id": "ign",
        "name": "IGN"
        },
        "author": "Carson Burton",
        "title": "Pokémon Scarlet and Violet Don't Include Pokérus - IGN",
        "description": "Pokémon Scarlet and Violet just released on Thursday, but players are already discovering the rare disease Pokérus is not present in the games.",
        "url": "https://www.ign.com/articles/pokmon-scarlet-and-violet-dont-include-pokrus",
        "urlToImage": "https://assets-prd.ignimgs.com/2022/10/25/pokemonscarletvioletlandstowns-blog-1666697068432.jpg?width=1280",
        "publishedAt": "2022-11-18T21:06:57Z",
        "content": "It's seemingly official: Pokérus is gone. Pokémon Scarlet and Violet just released on Thursday, but players are already discovering the rare, fictional disease is not present in the new games. \r\nPoké… [+1943 chars]"
        },
        {
        "source": {
        "id": "ars-technica",
        "name": "Ars Technica"
        },
        "author": "Andrew Cunningham",
        "title": "Nvidia releases RTX 4090 and 4080 firmware update to fix display output bug - Ars Technica",
        "description": "Update can be installed on both Founders Edition and third-party GeForce GPUs.",
        "url": "https://arstechnica.com/gadgets/2022/11/nvidia-releases-rtx-4090-and-4080-firmware-update-to-fix-display-output-bug/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/11/rtx-4080-760x380.jpeg",
        "publishedAt": "2022-11-18T20:31:34Z",
        "content": "12 with 0 posters participating\r\nNvidia has released a firmware update tool for its new GeForce RTX 4090 and 4080 GPUs to fix a bug that could break display output, causing the GPU to show a blank sc… [+1540 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CBS Sports"
        },
        "author": "",
        "title": "Prisco's Week 11 NFL picks: Patriots sweep Jets; Vikings stay hot vs. Cowboys; Eagles struggle to edge Colts - CBS Sports",
        "description": "Pete Prisco reveals all of his Week 11 NFL picks",
        "url": "https://www.cbssports.com/nfl/news/priscos-week-11-nfl-picks-patriots-sweep-jets-vikings-stay-hot-vs-cowboys-eagles-struggle-to-edge-colts/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/11/17/3b067494-d30c-4116-b6c7-0e3423bcd585/thumbnail/1200x675/bd49d05b08dde4ceeb5c6a3082db0cf7/getty-justin-jefferson-vikings.jpg",
        "publishedAt": "2022-11-18T20:13:00Z",
        "content": "For some strange reason, I just can't get it going with my picks, particularly when it comes to my CBSSports.com expert picks. I am under .500 and it gets worse by the week. I was 5-9 last week, whic… [+5657 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Frank Pallotta",
        "title": "Taylor Swift: Ticketmaster fiasco 'excruciating for me' - CNN",
        "description": "Taylor Swift spoke out Friday about the ticketing debacle that took place this week, as many fans were unable to purchase tickets for her upcoming tour on Ticketmaster.",
        "url": "https://www.cnn.com/2022/11/18/media/taylor-swift-ticketmaster/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221118091059-taylor-swift-0828-restricted.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2022-11-18T19:56:00Z",
        "content": "Taylor Swift spoke out Friday about the ticketing debacle that took place this week, as many fans were unable to purchase tickets for her upcoming tour on Ticketmaster.\r\nIt goes without saying that I… [+5770 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Anna Bahney",
        "title": "US home sales fall for 9th month in a row in October - CNN",
        "description": "Home sales in the United States declined for the ninth month in a row in October as surging mortgage rates and high prices pushed buyers out of the market.",
        "url": "https://www.cnn.com/2022/11/18/homes/existing-home-sales-october-2022/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221118083140-us-existing-home-sales-october-restricted.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2022-11-18T18:51:00Z",
        "content": "Home sales in the United States declined for the ninth month in a row in October as surging mortgage rates and high prices pushed buyers out of the market.\r\nSales of existing homes which include sing… [+4380 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Alex Hern, Dan Milmo",
        "title": "What do we know so far about collapse of crypto exchange FTX? - The Guardian",
        "description": "How did Sam Bankman-Fried’s FTX fail and what does the firm’s fate tell us about cryptocurrencies?",
        "url": "https://www.theguardian.com/technology/2022/nov/18/how-did-crypto-firm-ftx-collapse",
        "urlToImage": "https://i.guim.co.uk/img/media/77d2d2d6dc96220e47933a57b31c56a0b8f22a44/0_62_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c58b18d7a21389f241a35ab5c6ac17b6",
        "publishedAt": "2022-11-18T18:49:00Z",
        "content": "The collapse of FTX, one of the worlds largest cryptocurrency exchanges, has unleashed another bout of volatility in the highly speculative digital asset market. The fortune of FTXs founder, Sam Bank… [+6866 chars]"
        },
        {
        "source": {
        "id": "fox-news",
        "name": "Fox News"
        },
        "author": "Julia Musto",
        "title": "Leonid meteor shower peaks: How to see it - Fox News",
        "description": "The annual Leonid meteor shower peaks late on Friday night. However, NASA reports that viewing could be impacted by a bright moon, which is about 35% full.",
        "url": "https://www.foxnews.com/science/leonid-meteor-shower-peaks-see-it",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/11/Leonids.jpg",
        "publishedAt": "2022-11-18T18:43:43Z",
        "content": "The annual Leonid meteor shower peaks late Friday night. \r\nAccording to NASA, the Leonids are debris shed by comet Tempel-Tuttle as it passes close to the sun. \r\nAs bits of comet debris enter the Ear… [+1627 chars]"
        }
        ]

    constructor(){
        super();
        this.state = {
            articles: this.articles,
        }
    }
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>NewsApp - Top headlines</h2>
          <div className="row my-3">
            {
                this.state.articles.map((ele) => {
                   return <div className="col-md-4 ">
                        <NewsItem title={ele.title.slice(0, 45)} description={ele.description.slice(0, 88)} imageUrl={ele.urlToImage} url={ele.url}/>
                    </div>
                })
            }
            </div>
        </div>
      </>
    );
  }
}

export default NewsC;
