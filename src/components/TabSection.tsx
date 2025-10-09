import { useState} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SearchInput from '../components/SearchInput';
import GalleryView from '../components/GalleryView';
import "./TabSection.css";

export default function TabSection() {
  type Topic = "search" | "gallery" | null;
  const [selectedTopic] = useState<Topic>(null);
  const [galleryKey] = useState(0);
  const location = useLocation();
 // const navigate = useNavigate();

  const isCarousel = location.pathname.startsWith('/carousel/');
  // Navigate back to root if on carousel route
   //  if (isCarousel) {
   //   navigate('/');
   // }

  let tabContent = null;
  if (selectedTopic === 'search') {
    tabContent = (
      <div id="tab-content">
        <SearchInput />
      </div>
    );
  } else if (selectedTopic === 'gallery') {
  tabContent = <GalleryView key={galleryKey} />; 
}

  return (
    <section id="selection">
      <menu>
        <button
          //isSelected={selectedTopic === "search"}
          //onSelect={() => handleSelect("search")}
        >
          <Link to={'/'}>Search</Link>
        </button>
        <button
          //isSelected={selectedTopic === "gallery"}
          //onSelect={() => handleSelect("gallery")}
        >
          <Link to={'/gallery'}>Gallery</Link>
        </button>
      </menu>
      <main>{!isCarousel && tabContent}</main>
    </section>
  );
}