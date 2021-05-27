import React from 'react'
import '../Styles/Main.scss'

const Main = () =>  {
   
    return (
        <div className='main'>
            <img src='https://images.squarespace-cdn.com/content/v1/5d3b3ed8084b6f00015405ba/1565894754450-WS80DFXY4IPD2YN9LCI8/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/landing-full-topleft-01.jpg?format=original' />
            <div className='main-overlay'>
                <p>Sustainability</p>
                <h1>Starts With You</h1>
                <button>Learn More</button>
            </div>
            <div className='main-content'>
                <div className='main-intro'>
                    <h1>We conserve land through outreach and restoration.</h1>
                    <p>Some of the Earth's greatest landscapes are threatened by increased road construction, oil and gas exploration, and mining. We aim to protect these areas from inappropriate development, but we cannot achieve our goals alone. Find out how you can help.</p>
                </div>
                <div className='content-card-wrapper'>
                    <div className='content-card'>
                    <img src='https://images.squarespace-cdn.com/content/v1/5d3b3ed8084b6f00015405ba/1565292809235-XZT8EMYC8YNFNGLGWJKE/ke17ZwdGBToddI8pDm48kNelEQHH6ObyKXhPVtuHdZJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URRnb5gEg87j_u_CnS6lshZ4YkRnSBu_Tm16f7Acf5j6LgOZgZlG0NTwuNC4AvKbWw/20140302_Trade%2B151_0503.jpg?format=750w' />
                        <div className='content-card-info'>
                            <h2>Our Organization</h2>
                            <p>Find out about our mission, methods, and the results of our decades of advocacy.</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className='content-card'>
                        <div className='content-card-info'>
                            <h2>Take Action</h2>
                            <p>Ready to take the next step? You can become a contributor to our cause, or participate yourself.</p>
                            <button>Find Out How</button>
                        </div>
                        <img src='https://images.squarespace-cdn.com/content/v1/5d3b3ed8084b6f00015405ba/1565894861758-1VX9YII126C6IJKL3AQP/ke17ZwdGBToddI8pDm48kNelEQHH6ObyKXhPVtuHdZJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URRnb5gEg87j_u_CnS6lshZ4YkRnSBu_Tm16f7Acf5j6LgOZgZlG0NTwuNC4AvKbWw/Aro%252BHa_0073.jpg?format=750w' />
                    </div>
                </div>
            </div>

            <div className='main-subscribe'>
                <h1>Subscribe</h1>
                <p>Sign up with your email address to receive news and updates.</p>
                <input placeholder='Email Address' />
                <button>Sign up</button>
            </div>
        </div>
        )
}

export default Main;
