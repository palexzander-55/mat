export default function Cloquet() {
    return (
      <main>
      <div>
          <p>Cloquet</p>
          <div style={{display:'flex', justifyContent: 'center', margin: 8}}>

          <iframe width="600" height="450" style={{border:0}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvwZzRuIxrlIRSwc8dVLEgHU&key=AIzaSyA_1VSuOU190Z4iSd7FSgjsu5dkSP_lf7w"></iframe>
          </div>

          <div className="container">
          <iframe  style={{border:0, width:'100%', height: '100%'}} loading="lazy" allowFullScreen src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsDirect?OrgId=551569&Loc=004"></iframe>

          </div>
      </div>
    </main>
    );
}