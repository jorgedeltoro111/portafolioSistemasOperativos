import React from "react";
import {Header} from '../Header/index';
import {ListActivities} from '../ListActivities/index';
import {Activity} from '../Activity/index';
import {Footer} from '../Footer/index';

const object = [
  {title: 'El hardware de la computadora y el sistema operativo', subtitle: 'A01', description: 'Investigación del proceso de encendido de una máquina fisica', link: 'https://drive.google.com/file/d/1mByg8B-VHjfiErVPQLSRhQ0MzVuNoMDY/view?usp=drive_link'},
  {title: 'Sistemas operativos y sus tipos', subtitle: 'A02', description: 'investigacion de embebidos', link: 'https://drive.google.com/file/d/1tmlbACUlbngRNNBfcEpDrgX-85Nrps-K/view?usp=drive_link'},
];

function App() {
  return (
    <div className="App">
      <div className="main border border-dark m-5">
        <Header/>
        <ListActivities>
          {
            object.map((obj, key) => {
              return(
                <Activity
                  title={obj.title}
                  subtitle={obj.subtitle}
                  description={obj.description}
                  link={obj.link}
                  key={key}
                />
              )
            })
          }
        </ListActivities>
        <Footer/>
      </div>
    </div>
  );
}

export {App};
