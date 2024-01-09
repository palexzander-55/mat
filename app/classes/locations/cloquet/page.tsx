import Link from "next/link";

export default function Cloquet() {
  return (
    <main>
      <div className="container">
        <h1 className="title is-1 pt-3" style={{ }}>Cloquet High School</h1>

        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><Link className="navbar-item" href="/classes/schedule" >Class Schedule</Link></li>
            <li className="is-active"><a href="#" aria-current="page">Cloquet</a></li>
          </ul>
        </nav>

        {/* <div style={{ display: 'flex', justifyContent: 'center', margin: 8 }}>

          <iframe width="600" height="450" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvwZzRuIxrlIRSwc8dVLEgHU&key=AIzaSyA_1VSuOU190Z4iSd7FSgjsu5dkSP_lf7w"></iframe>
        </div> */}
        <div className="box">
          <h1 className="title is-4" style={{}}>Cloquet Class Schedule</h1>
          <iframe style={{ border: 0, width: '100%', height: '20vh' }} loading="lazy" allowFullScreen src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsDirect?OrgId=551569&Loc=004"></iframe>
        </div>
        <div className="columns">

        <div className="column is-half is-hidden-tablet">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus voluptate quas quisquam corrupti fuga nesciunt officia vitae nulla distinctio quam, iure at animi cupiditate deleniti cum dolor minima quia.</p>
          </div>

          <div className="column is-half">
            <iframe width="100%" height="450" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvwZzRuIxrlIRSwc8dVLEgHU&key=AIzaSyA_1VSuOU190Z4iSd7FSgjsu5dkSP_lf7w"></iframe>
          </div>

          <div className="column is-half is-hidden-mobile">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus voluptate quas quisquam corrupti fuga nesciunt officia vitae nulla distinctio quam, iure at animi cupiditate deleniti cum dolor minima quia.</p>
          </div>

        </div>


      </div>
    </main>
  );
}