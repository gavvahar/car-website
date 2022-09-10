const React = require('react')
const Def = require('./default')

function home(){
    return(
        <Def>
            <head>
                <title>Home Page</title>
            </head>
            <main>
                <div>
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

module.exports = home