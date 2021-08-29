import images from '../assets/images';
import LayoutContainer from '../components/Layout';
import Heading from '../components/Heading';
import FsLightbox from 'fslightbox-react';
import { Gallery, PhotoGalleryProps } from '../components/gallery';
import { useEffect, useState } from 'react';

const GalleryScreen: React.FC = () => {

    const [gallery, setGallery] = useState<PhotoGalleryProps[]>([]);
    const [toggler, setToggler] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    /**
    * Check if this project has gallery.
    * If so, display images on gallery
    */
    useEffect(() => {
        if (images.length) {
            let result: PhotoGalleryProps[] = [];
            images.map((picture, i) => {
                result.push({
                    src: picture.src,
                    width: picture.width,
                    height: picture.height,
                });
            });

            setGallery(result);
        }
    }, []);

    /**
    * Handle photo selected in gallery
    * @param index current index of photo
    */
    const handlePhoto = (index: number) => {
        setToggler(!toggler);
        setCurrentIndex(index + 1);
    };

    return (
        <LayoutContainer>
            <Heading
                title="Gallery"
                message="This is how zTuber app looks on your Android" />

            <div className="inner">
                <div className="portfolio-thumb-inner mt-4">
                    <Gallery photos={gallery} onClick={handlePhoto} />
                    <FsLightbox
                        toggler={toggler}
                        sources={gallery.map(image => image.src)}
                        slide={currentIndex}
                    />
                </div>
            </div>
        </LayoutContainer>
    );
}

export default GalleryScreen;