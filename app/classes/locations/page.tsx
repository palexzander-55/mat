import Link from "next/link";

export default function Locations() {
    return (
      <main>
      <div>
          <p>Locations</p>

          <Link className="navbar-item" href="/classes/locations/cloquet" >Cloquet</Link>
          <Link className="navbar-item" href="/classes/locations/duluth" >Duluth</Link>
          <Link className="navbar-item" href="/classes/locations/proctor" >Proctor</Link>
          <Link className="navbar-item" href="/classes/locations/twoharbors" >Two Harbors</Link>

      </div>
    </main>
    );
}