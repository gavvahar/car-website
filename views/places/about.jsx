const React = require('react')
const Def = require('../default')

function about(){
    return(
        <Def>
            <main>
                <h1>Racer's Heaven</h1>
                <div>
                    {/* <img src="/images/Nihar_final0001-0300.mp4" alt="Racer's Heaven" width="40%"/> */}
                    <video width="40%" controls>
                        <source src='/images/racers-heaven.mp4'/>
                    </video>
                </div>
                {/* <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a> */}
            </main>
        </Def>
    )
}

module.exports = about