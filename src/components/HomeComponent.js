import React from 'react';
import CarouselComponent from './CarouselComponent'
  

function Home(props)  {
    return (
        <div className="container">
                <div className="col-12 col-sm-6">
                        <h1>Bazaar</h1>
                        <p>Shop on Doorstep</p>
                </div>
                <CarouselComponent />
        </div>
    );
}

export default Home;