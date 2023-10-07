import React from "react";
import {Header} from '../Header/index';
import {ListActivities} from '../ListActivities/index';
import {Activity} from '../Activity/index';
import {Footer} from '../Footer/index';

const object = [
  {title: 'El hardware de la computadora y el sistema operativo', subtitle: 'A01', description: 'Investigación del proceso de encendido de una máquina fisica', link: 'https://drive.google.com/file/d/1mByg8B-VHjfiErVPQLSRhQ0MzVuNoMDY/view?usp=drive_link'},
  {title: 'Sistemas operativos y sus tipos', subtitle: 'A02', description: 'Comparación de sistemas operativos', link: 'https://drive.google.com/file/d/1tmlbACUlbngRNNBfcEpDrgX-85Nrps-K/view?usp=drive_link'},
  {title: 'Configuración de dispositivos', subtitle: 'A03', description: 'Investigación de USB booteable', link: 'https://drive.google.com/file/d/1TAWQhEgJRONwwCh26V9_Qt2KwgH6mFni/view'},
  {title: 'Dispositivos fisicos', subtitle: 'A04', description: 'Tipos de dispositivos fisicos', link: 'https://drive.google.com/file/d/1IWbtVaRsDyhrZN86do9-KUpKYdC7dFeF/view?usp=drive_link'},
  {title: 'Concepto de máquina virtual y partición de disco', subtitle: 'A05', description: 'Creación de maquina virtual con tres SO', link: 'https://drive.google.com/file/d/1bxeBoMLDCANStmi1ZJeMvcSK8SjO4OXB/view?usp=drive_link'},
  {title: 'Distribuciones y licencias de un sistema operativo', subtitle: 'A06', description: 'Investigación acerca de licencias de software', link: 'https://drive.google.com/file/d/1rtW5zh2s8nFsXPVoSTAHmWWxHbe_JmHF/view?usp=drive_link'},
  {title: 'Portafolio de evidencias', subtitle: 'A07', description: 'Unidad tematica 1, conclusión', link: 'https://drive.google.com/file/d/1xTEeu4JaVxHFQ-F_2rbRcdV-HjrgwpUD/view?usp=drive_link'},
  {title: 'Procesos e hilos', subtitle: 'A08', description: 'Conociendo los procesos y manejo de hilos', link: 'https://drive.google.com/file/d/1lXLRHfIT2ehPBc5I4u7udoz2Btd5ef6T/view?usp=drive_link'},
  {title: 'Concurrencia', subtitle: 'A09', description: 'Glosario de conceptos', link: 'https://drive.google.com/file/d/16DCGHDjRnKUB70YSgM7VSm0pZV6IwHF_/view?usp=drive_link'},
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
