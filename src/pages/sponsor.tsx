import React, { ReactElement } from 'react'
import SpearTitle from "../components/SpearTitle"

import './sponsor.css'

const Sponsor = (props: any): ReactElement => (
  <div className={"sponsor hor" + (props.isLeft ? "" : " reverse")}>

    <div className="sponsor-image-holder">
      {console.log(require('../img/sponsors/' + props.imgPath))}
      <img alt={props.name + " logo"} src={require('../img/sponsors/' + props.imgPath)} />
    </div>

    <div className="sponsor-text-holder">
      <p> {props.description} </p>
    </div>

    <div style={{ width: '20vw' }}></div>

  </div>
)

const uofa = { img: "uofa.png", description: "UAlberta is a Top 5 Canadian university and one of the Top 100 in the world, home to more than 500 graduate programs, 200 undergraduate programs and 450 active student groups. https://www.ualberta.ca/" }
const shell = { img: "shell.png", description: "The Shell Canada Enhanced Learning Fund (SELF) provides funding for University of Alberta students to participate in experiential learning opportunities that have a focus on sustainable energy, the environment and the economy. https://www.shell.ca/" }

const sponsors = [uofa, shell, shell, shell]
const SpearSponsorPage: React.FC = () => (
  <div className="ver">
    <SpearTitle title="Sponsors" img={require('../img/logos/supporters.svg')} />

    <div className="sponsor-intro">
      <p> Without the support of our sponsors, our mission would not be
      possible. Our sponsors have allowed our team to incredible things in
      the in the past year and we hope to do more incredible things in the
            future. So, thank you for your support. </p>
    </div>

    <div>
      {sponsors.map((s, i) => (
        <Sponsor name={s.img.split('.')[0]} isLeft={i % 2 === 0}
          imgPath={s.img} description={s.description} />
      ))}
    </div>
  </div>
)

export default SpearSponsorPage;