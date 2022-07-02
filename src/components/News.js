import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "FX Empire"
      },
      "author": "Reuters",
      "title": "Tesla hit by new lawsuit alleging racial abuse against Black workers",
      "description": "(Editor’s note: Paragraph 3 contains offensive racial language)",
      "url": "https://www.fxempire.com/news/article/tesla-hit-by-new-lawsuit-alleging-racial-abuse-against-black-workers-1051242",
      "urlToImage": "https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2022/07/tagreuters.com2022newsml_LYNXMPEI6018D2.jpg",
      "publishedAt": "2022-07-01T02:51:58Z",
      "content": "SAN FRANCISCO (Reuters) Fifteen Black former or current employees at Tesla filed a lawsuit against the electric car maker on Thursday, alleging they were subjected to racial abuse and harassment at i… [+1704 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Animalpolitico.com"
      },
      "author": "Redacción Animal Político",
      "title": "Presunto feminicida de la cantante Yrma Lydya seguirá en prisión; es vinculado a proceso",
      "description": "Un juez del Reclusorio Oriente ordenó 4 meses de plazo para que concluyan las investigaciones por el asesinato de la joven dentro de un restaurante.\nEl cargo Presunto feminicida de la cantante Yrma Lydya seguirá en prisión; es vinculado a proceso apareció pri…",
      "url": "https://www.animalpolitico.com/2022/06/presunto-feminicida-cantante-yrma-lydya-proceso/",
      "urlToImage": "https://www.animalpolitico.com/wp-content/uploads/2022/06/presunto-feminicida-cantante-yrma-lydya-proceso.jpeg",
      "publishedAt": "2022-07-01T02:50:46Z",
      "content": "Decenas ciudades chinas se encuentran estos días bajo confinamientos parciales o totales, después de un nuevo auge en casos de coronavirus en el gigante asiático que amenazan la controvertida estrate… [+6125 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo Australia"
      },
      "author": "Asha Barbaschow",
      "title": "The Good Guys Says It’s No Longer Trialling Facial Recognition Tech",
      "description": "The Good Guys has announced it will temporarily stop using facial recognition technology in its stores.\nThe post The Good Guys Says It’s No Longer Trialling Facial Recognition Tech appeared first on Gizmodo Australia.\n  Related Stories\r\n<ul><li>The Good Guys …",
      "url": "https://www.gizmodo.com.au/2022/07/the-good-guys-facial-recognition/",
      "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2022/07/01/gizmodo-2.png?quality=80&resize=1280,720",
      "publishedAt": "2022-07-01T02:45:23Z",
      "content": "A few weeks ago, we reported that Kmart, Bunnings Warehouse and The Good Guys were all using facial recognition technology in-store. This week, however, theres been a bit of a back pedal.\r\nAs reveale… [+3739 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Tesla hit by new lawsuit alleging racial abuse against Black workers - Reuters",
      "description": "Tesla hit by new lawsuit alleging racial abuse against Black workers  Reuters",
      "url": "https://www.reuters.com/business/autos-transportation/tesla-hit-by-new-lawsuit-alleging-racial-abuse-against-black-workers-2022-07-01/",
      "urlToImage": "https://www.reuters.com/resizer/qh1dv7OfgPBBnN1sNOPPajPgWQE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DRHMOZQUXZIXHOYL3IKE6GUYZE.jpg",
      "publishedAt": "2022-07-01T02:45:00Z",
      "content": "SAN FRANCISCO, June 30 (Reuters) - (Editors note: Paragraph 3 contains offensive racial language)\r\nFifteen Black former or current employees at Tesla (TSLA.O) filed a lawsuit against the electric car… [+1993 chars]"
    }
  ]
  constructor() {
    super();
    console.log('Hi, this is constructor!');
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>News SR Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem imageUrl={element.urlToImage} title={element.title.slice(0,44)} description={element.description.slice(0,88)} newsURL={element.url} />
            </div>
          })}


        </div>
      </div>
    )
  }
}

export default News
