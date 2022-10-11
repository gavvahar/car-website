const React = require('react')
const Def = require('../default')

function index (data) {
  let carsFormatted = data.cars.map((car) => {
    return (
      <div key="1" className='col-sm-6'>
        <h2 className='text-center'>
            <a href={`/places/${car.id}`}>
              {car.year} {car.make} {car.model}
            </a>
          </h2>
        <p className='text-center'>
          
        </p>
        <img src={car.pic} alt={car.model} className='center' width="100%" height="50%"/>
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

module.exports = index