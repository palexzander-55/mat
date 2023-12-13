import Script from "next/script";

export default function FBPage(){
    return (
        // <div className="container is-large">
      

        <div className="notification is-primary is-hidden-mobile">

        <div id="fb-root"/>
        <Script async defer crossOrigin='anonymous' src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0' nonce='hpxHqHqr'/>
            {/* <iframe src="https://www.instagram.com/p/BdJRABkDbXU/embed/" width="400" height="500" style={{objectFit:'fill'}} scrolling="no"  ></iframe> */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* <div className="fb-post" data-href={"https://www.facebook.com/photo.php?fbid=209603668798591&amp;set=pb.100092468774489.-2207520000&amp;type=3"} data-width="" data-show-text="false"><blockquote cite={"https://www.facebook.com/permalink.php?story_fbid=209603685465256&amp;id=100092468774489"} className="fb-xfbml-parse-ignore"><p>When they trust you so much, they let go of the bar because they know you won&#039;t drop them! I always got you sweet Livi♡</p>Posted by <a href="https://www.facebook.com/people/Minnesota-Academy-of-Tumbling/100092468774489/">Minnesota Academy of Tumbling </a> on&nbsp;<a href={"https://www.facebook.com/permalink.php?story_fbid=209603685465256&amp;id=100092468774489"}>Friday, September 22, 2023</a></blockquote></div> */}
                <div className="fb-page" data-href="https://www.facebook.com/profile.php?id=100092468774489" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/profile.php?id=100092468774489" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/profile.php?id=100092468774489">Minnesota Academy of Tumbling </a></blockquote></div>

                {/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0y6CbaxLSEbrcF6K3kLZe31kjGxUhV9MF32STk4aboHQv1tTsuQipJ5KLU9EvCbYBl%26id%3D100092468774489&show_text=false" width="500" height="497" style={{border:'none',overflow:'hidden'}}  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
                {/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0y6CbaxLSEbrcF6K3kLZe31kjGxUhV9MF32STk4aboHQv1tTsuQipJ5KLU9EvCbYBl%26id%3D100092468774489&show_text=true" width="500" height="609" style={{ border: 'none', overflow: 'hidden' }} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
            </div>
        </div>
    // </div>
    );
}