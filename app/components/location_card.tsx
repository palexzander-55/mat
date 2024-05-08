

export default function LocationCard({ locationName, mapImgUrl }: { locationName: string, mapImgUrl: string }) {
    return (
        <div className='box ' style={{backgroundColor:'teal'}}>
            <div className='columns'>
                <div className='column is-6 '>

                    {/* <h1 className="" style={{ fontSize: 42 }}>{locationName}</h1> */}

                    <h1 className="title is-size-2-desktop pt-2 px-2 has-text-link-light" style={{}}>{locationName}</h1>


                    {/* <div style={{ width: 500 }}>
                    <Image
                        src="/cloquet_high_school.png"
                        alt="Vercel Logo"
                        // className={styles.vercelLogo}
                        // fill={true}
                        style={{ maxWidth: '1000px', maxHeight: '500px', objectFit: 'fill' }}
                        // width={800}
                        // height={400}
                        fill={true}
                        // objectFit='fill'
                        priority
                    />
                </div> */}


                    <figure className="image is-16by9">
                        <img src={mapImgUrl} />
                    </figure>

                </div>


                <div className='column is-6'>

                    <div className='box'>
                        {/* <p style={{position: 'fixed', width:'100%', height:'100%', alignItems:'start', display:'flex', justifyContent:'right'}}> */}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quidem suscipit impedit enim pariatur voluptatum provident. Non doloremque vitae illum provident eos, nostrum illo laudantium temporibus voluptate earum quod deserunt?
                        {/* </p> */}
                    </div>

                    <div className="buttons is-right">
                        <a href="https://www.google.com/maps/dir//Cloquet+Senior+High+School,+1000+18th+St,+Cloquet,+MN+55720" target="_blank">
                        <button className="button is-primary">
                            Get Directions
                        </button>
                        </a>
                        <a href="/classes/locations/cloquet">
                            <button className="button is-light">
                                Class Schedule
                            </button>
                        </a>
                    </div>

                </div>

            </div>

        </div>
    );
}