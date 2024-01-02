import Link from "next/link";

export default function Schedule() {
    return (
      <main>
      <div>
          <p>All Classes Schedule</p>

          <Link className="navbar-item" href="/classes/locations/cloquet" >Cloquet</Link>
          <Link className="navbar-item" href="/classes/locations/duluth" >Duluth</Link>
          <Link className="navbar-item" href="/classes/locations/proctor" >Proctor</Link>
          <Link className="navbar-item" href="/classes/locations/twoharbors" >Two Harbors</Link>
      </div>
      <iframe  style={{border:0, width:'100%', height: '100%'}} loading="lazy" allowFullScreen src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsDirect?OrgId=551569"></iframe>

    </main>
    );
}