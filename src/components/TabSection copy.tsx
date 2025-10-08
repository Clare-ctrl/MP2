import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TabButton from '../components/TabButton';
import SearchInput from '../components/SearchInput';
import GalleryView from '../components/GalleryView';
import "./TabSection.css";

export default function TabSection() {
  type Topic = "search" | "gallery" | null;
  const [selectedTopic, setSelectedTopic] = useState<Topic>(null);
  const [galleryKey, setGalleryKey] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const isCarousel = location.pathname.startsWith('/carousel/');
  function handleSelect(selectedButton: Topic) {
    setSelectedTopic(selectedButton);
    // Navigate back to root if on carousel route
    if (isCarousel) {
      navigate('/');
    }
    if (selectedTopic === 'gallery') {
      setGalleryKey(k => k+1);
    }
  }

  let tabContent = null;
  if (selectedTopic === 'search') {
    tabContent = (
      <div id="tab-content">
        <SearchInput />
      </div>
    );
  } else if (selectedTopic === 'gallery') {
    tabContent = <GalleryView />;
  }

  return (
    <section id="selection">
      <menu>
        <TabButton
          isSelected={selectedTopic === "search"}
          onSelect={() => handleSelect("search")}
        >
          Search
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "gallery"}
          onSelect={() => handleSelect("gallery")}
        >
          Gallery
        </TabButton>
      </menu>
      {!isCarousel && tabContent}
    </section>
  );
}