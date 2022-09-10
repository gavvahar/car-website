const React = require('react')
const Def = require('../default')

function about(){
    return(
        <Def>
            <head>
                <title>About Page</title>
            </head>
            <main>
                {/* <h1>Racer's Heaven</h1> */}
                <div>
                    <video width="40%" controls>
                        <source src='/images/racers-heaven.mp4'/>
                    </video>
                </div>
            </main>
        </Def>
    )
}

module.exports = about