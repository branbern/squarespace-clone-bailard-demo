import React from 'react'
import '../Styles/News.scss';
import ContentCard from '../Comps/ContentCard'

const News = () =>  {
    const contentCards = [
        {date: '5/28/19', title: 'Get Out There!', description: 'It all begins with an idea.', left: true, image: 'https://images.squarespace-cdn.com/content/v1/5d3b3ed8084b6f00015405ba/1565293172618-9TPLZVFQZTTRPJTA4X0F/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/20140302_Trade+151_0503.jpg?format=750w'},
        {date: '5/28/19', title: 'Why Deserts Matter Too', description: 'It all begins with an idea.', left: false, image: 'https://images.squarespace-cdn.com/content/v1/5d3b3ed8084b6f00015405ba/1565293197733-OWIB0TKFXVUS3L3F4Z6H/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/20140228_Trade+151_0067+%281%29.jpg?format=750w'},
        {date: '5/28/19', title: 'New Hope in Old Appalachia', description: 'It all begins with an idea.', left: true, image: 'https://images.squarespace-cdn.com/content/v1/5d3b3ed8084b6f00015405ba/1565293230589-3NNMU9DR2ZZ08H64NAKX/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/20140302_trade+151_0677.jpg?format=750w'},
    ]


    let cards = []
    contentCards.map((card) => {
        cards.push(<ContentCard cardData={card} />)
    })

    return (
        <div className='news'>
            {cards}
        </div>)
}

export default News;
