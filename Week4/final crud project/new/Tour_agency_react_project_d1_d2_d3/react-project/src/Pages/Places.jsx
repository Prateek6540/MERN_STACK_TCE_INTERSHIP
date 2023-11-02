import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Places() {
  const [filterCategory, setFilterCategory] = useState('All');

  const placesData = [
    {
      name: 'Om Beach',
      image: 'https://www.tripiwiki.com/images/places/uploads/Om_Beach.jpg',
      description: "Om Beach in Gokarna is famous for its 'Om' shape, serene vibe, and spirituality. The golden sands are perfect for strolls and beach fun. At the south, a Shiva temple adds a spiritual touch, and the viewpoint offers stunning sunset views over the Arabian Sea.",
      category: 'Beach',
    },
    {
      name: 'Vibhuti Falls',
      image: 'https://4.bp.blogspot.com/-Ql4bUNK19VQ/Ux38Umb-LEI/AAAAAAAABAQ/_ae72j3Olac/s1600/Vibhuti+falls-SirsiToursism.blogspot.com+(1).jpg',
      description: "Vibhuti Falls is another beautiful waterfall in the region near Gokarna, Karnataka, India. The distance between Gokarna and Vibhuti Falls is approximately 50 to 60 kilometers, similar to the distance to Unchalli Falls. It usually takes around 1.5 to 2 hours to reach Vibhuti Falls by road from Gokarna.",
      category: 'Waterfall',
    },
    {
      name: 'Kudle Beach',
      image: 'https://i.postimg.cc/0N3TVfQG/shutterstock-689470045.jpg',
      description: "Kudle Beach in Gokarna is renowned for its vibrant party culture, featuring beachfront restro-bars, live music, and full moon celebrations. This creates an energetic and entertaining atmosphere by the sea, making it a popular destination for those seeking lively beachfront evenings.",
      category: 'Beach',
    },
    {
      name: 'Unchalli Falls',
      image: 'https://i0.wp.com/stepstogether.in/wp-content/uploads/2017/11/20232767_478909865776321_9001143631725026022_o.png?resize=960%2C634',
      description: "Unchalli Falls, also known as Lushington Falls, is a stunning waterfall located near the town of Siddapur in the Uttara Kannada district of the Indian state of Karnataka. Unchalli Falls is a hidden gem in the Western Ghats, offering a serene and unspoiled natural setting for nature enthusiasts.",
      category: 'Waterfall',
    },
    {
      name: 'Paradise Beach',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/4f/59/4a/img-20161211-095659-largejpg.jpg',
      description: "Paradise Beach in Gokarna, also known as Full Moon Beach, is a serene and secluded coastal haven. It's a perfect spot for those seeking tranquility, with opportunities for swimming and sunbathing in a pristine natural setting. The beach is accessible via a scenic forest hike.",
      category: 'Beach',
    },
    {
      name: 'Vajragundi Falls',
      image: 'https://1.bp.blogspot.com/-10OkPwcyePA/XiRA64iPVkI/AAAAAAAAGmQ/Zqoner85J4cx9YQruMHiVUU2Bb_mIOj0gCEwYBhgL/s1600/DSCN0125.JPG',
      description: "Vajragundi Falls is a tranquil and relatively undiscovered natural gem in the Western Ghats, offering a peaceful retreat into the lap of nature for those seeking a less crowded and more secluded waterfall experience. Vajragundi Falls is known for peace and serenity around the waterfalls.",
      category: 'Waterfall',
    },
    {
      name: 'Half Moon Beach',
      image: 'https://media2.thrillophilia.com/images/photos/000/391/039/original/1676707963_1571307264_shutterstock_709631098.jpg.jpg?w=753&h=450&dpr=1.0',
      description: "Beaches are awesome but a thick and lush jungle overlooking an infinite stretch of the Arabian Ocean is ecstatic. Half-moon beach is such an experience where you get to engage in myriads of activities like swimming, kayaking, peddle boats, trekking, camping, etc...",
      category: 'Beach',
    },
    {
      name: 'Gokarna Beach',
      image: 'https://media2.thrillophilia.com/images/photos/000/391/038/original/1676707947_1522145024_Gokarna-1200x800-1024x683.jpg.jpg?w=753&h=450&dpr=1.0',
      description: "One of the most popular beaches in Gokarna, Gokarna Beach recently gained fame for being a surfing site. It is also famous for its scenic trekking excursion one can take from here. Located in close proximity to the Mahabaleshwara Temple, Gokarna Beach includes surfing, jet skiing, snorkeling, etc.",
      category: 'Beach',
    },
    {
      name: 'Nirvana Beach',
      image: 'https://imgmedia.lbb.in/media/2019/04/5cab7f25c80044685fc86d24_1554743077597.jpg',
      description: "The entrancing environs of Nirvana beach make you feel like you are in an unreal setting. The beach has a very long shoreline, and you hardly find fellow travelers around as it is little off the beaten. If you are traveling to Nirvana beach, you are suggested to carry food and water as there are no such facilities.",
      category: 'Beach',
    },
    {
      name: 'Baada Beach',
      image: 'https://www.connectingtraveller.com/images/localtip/1631706669images%20(62).jpeg',
      description: "Baada beach falls while walking down the trail from Kirki to Gokarna. It is the cleanest beach in Gokarna, also because it is located remotely around 10 KM away from the Kumta bus stand. The beach has some boulders in the middle and is encircled by hillocks on two sides.",
      category: 'Beach',
    },
    {
      name: 'Belekan Beach',
      image: 'https://goldenglowtrips.com/wp-content/uploads/2023/10/Kudle-Beach-1-1.jpg',
      description: "Belekan Beach is one of the most remote Gokarna Beaches. To reach here, you can take a boat ride from Gokarna Beach. Moreover, you can also spot dolphins from this beach if you get lucky. Located close to Moonlight Beach, Belekan Beach is one of the most tranquil spots in all of Gokarna.",
      category: 'Beach',
    },
    

  ];

  const filteredPlaces = filterCategory === 'All'
    ? placesData
    : placesData.filter(place => place.category === filterCategory);

  return (
    <>
      <div className="container" style={{ marginTop: '5%' }}>
        <div className="row">
          <h2 className="font-fw-medium" style={{ fontWeight: 'bolder' }}>Places to visit</h2>
          <p className="font-fw-medium">Embark on a remarkable journey as you explore the wealth of captivating destinations in and around the magnificent town of Gokarna. From pristine beaches to lush hills, historic temples, and cultural treasures, there's a world of adventure awaiting your discovery.</p>
          <br></br>
          <br></br>
        </div>

        <div>
          <select className="form-select" onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Beach">Beach</option>
            <option value="Waterfall">Waterfall</option>
          </select>
        </div>

        <div className="row pt-0">
          {filteredPlaces.map(place => (
            <div className="col-md-4" key={place.name}>
              <div className="card card1 mt-5" style={{}}>
                <img src={place.image} className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
                <h4 className="font-fw-medium pt-3 p-2">{place.name}</h4>
                <div className="card-body">
                                    <p className="card-text font-fw-medium">{place.description}</p>
                  <button type="button" className="btn btn-dark">More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center text-white mb-0" style={{ backgroundColor: 'black' }}>
        <div className="container p-4"></div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
          <Link className="text-white" to="#">Group C5</Link>
        </div>
      </footer>
    </>
  );
}

export default Places;


