import LocationCard from "@/app/components/location_card";
import Link from "next/link";

export default function Locations() {
  return (
    <main>
      <div className="container is-large">
        <h1 className="title is-1 pt-3" style={{ }}>Class Locations</h1>

        <div className="content">
          <p>
            The following locations are available for classes:
          </p>
        </div>


          {/* <Link className="navbar-item" href="/classes/locations/cloquet" >Cloquet</Link>
        <Link className="navbar-item" href="/classes/locations/duluth" >Duluth</Link>
        <Link className="navbar-item" href="/classes/locations/proctor" >Proctor</Link>
        <Link className="navbar-item" href="/classes/locations/twoharbors" >Two Harbors</Link> */}

          {/* <nav className="breadcrumb is-large has-dot-separator" aria-label="breadcrumbs">
            <ul>
              <li ><Link className="button mx-3 pl-3" href="/classes/locations/cloquet" >Cloquet</Link></li>
              <li ><Link className="button mx-3" href="/classes/locations/cloquet" >Cloquet</Link></li>
              <li ><Link className="button mx-3" href="/classes/locations/cloquet" >Cloquet</Link></li>
              <li ><Link className="button mx-3 " href="/classes/locations/cloquet" >Cloquet</Link></li>
              <li ><Link className="button mx-3" href="/classes/locations/cloquet" >Cloquet</Link></li>
              <li ><Link className="button mx-3" href="/classes/locations/cloquet" >Cloquet</Link></li>
              <li ><Link className="button mx-3" href="/classes/locations/cloquet" >Cloquet</Link></li>
            </ul>
          </nav> */}

        <ul>
          <LocationCard locationName="Cloquet High School" mapImgUrl="/cloquet_high_school.png" />
          <LocationCard locationName="Cloquet High School" mapImgUrl="/cloquet_high_school.png" />
          <LocationCard locationName="Cloquet High School" mapImgUrl="/cloquet_high_school.png" />
          <LocationCard locationName="Cloquet High School" mapImgUrl="/cloquet_high_school.png" />
          <LocationCard locationName="Cloquet High School" mapImgUrl="/cloquet_high_school.png" />
          <LocationCard locationName="Cloquet High School" mapImgUrl="/cloquet_high_school.png" />
          <LocationCard locationName="Cloquet High School" mapImgUrl="/cloquet_high_school.png" />
        </ul>
      </div>
    </main>
  );
}