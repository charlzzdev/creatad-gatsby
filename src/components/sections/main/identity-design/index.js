import React from 'react';

import './index.scss';
import Tooltip from '../../../tooltip';

const IdentityDesign = () => {
  return (
    <section className="identity-design container">
      <h1>Hogy néz ki egy komplett arculattervezés?</h1>
      <article className="identity-design--flow">
        <div className="identity-design--flow--step" data-step="1">
          <h3>Igényfelmérés</h3>
          <p>Ha eldöntötted, hogy szükséged van egy igényes arculatra, logóra, egyeztetünk, majd együtt
          kitaláljuk, hogy mi az elképzelés, mi az, ami a leginkább kifejezi céged, leendő vállalkozásod
            lényegét.</p>
        </div>
        <div className="identity-design--flow--step" data-step="2">
          <h3>Tervezés</h3>
          <p>Az igényfelmérés után nekiállok a tervezésnek, majd létrehozom az első variációt, a te
            elképzelésed és az én ötleteim alapján.</p>
        </div>
        <div className="identity-design--flow--step" data-step="3">
          <h3>Prezentálás</h3>
          <p>Ha elkészült az első terv, bemutatom neked. Majd újra egyeztetünk, hozzáteszünk, elveszünk,
            változtatunk. A kész logo a közös, sikeres eredményünk lesz.</p>
        </div>
        <div className="identity-design--flow--step" data-step="4">
          <h3>Átadás</h3>
          <p>Az előre egyeztetett file formátumokban, e-mailen keresztül történik a logók, arculati elemek
          átadása. Innentől neked az a fő feladatod, hogy megismertesd az ügyfelekkel az új kinézetet, ezáltal
            a cégedet.</p>
        </div>
      </article>
      <article className="offer-card">
        <h3>Az ajánlat tartalmazza:</h3>
        <ul>
          <li>online konzultációk</li>
          <li>előre egyeztetett logó, arculati elem koncepció</li>
          <li>közösségi média elem koncepció</li>
          <li>
            elemenként 2 módosítási kör <Tooltip>Egy módosítási kör alatt a kiválasztott verzión való változtatás (szín, forma vagy plusz grafikai elem) értjük.</Tooltip>
          </li>
          <li>arculat átadása PNG, PDF formátumokban</li>
          <li>
            arculati leírás <Tooltip>Az arculati leírás tartalmazza a színkódokat, a betűtípusok megnevezését.</Tooltip>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default IdentityDesign;
