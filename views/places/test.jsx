// const React = require('react')
// const Def = require('../default')

// function test(){
//     return(
//         <Def>
//             <head>
//                 <title>Test Page</title>
//             </head>
//             <main>
//                <p>This is to test shit!!!!!!!</p>
//             </main>
//         </Def>
//     )
// }

// module.exports = test

const React = require('react')
const Def = require('../default')

function test (data) {
  let carsFormatted = data.cars.map((car) => {
    return (
      <div key="1" className='col-sm-6'>
        <h2 className='text-center'>
            <a href={`/places/${car.id}`}>
              {car.make}
            </a>
          </h2>
        <p className='text-center'>
          {car.model}
        </p>
        <img src={car.pic} alt={car.model} className='center' width="100%" height="50%"/>
        {/* <p className='text-center'>
          Located in {place.city}, {place.state}
        </p> */}
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Welcome to Racer's Heaven</h1>
            <div className='row'>
              {carsFormatted}
            </div>
        </main>
    </Def>
)
}

module.exports = test