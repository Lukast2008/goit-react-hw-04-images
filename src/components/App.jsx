import { useState, useEffect } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { GetDataArr } from '../ApiGallery/ApiGallery';

export const App = () => {
  const [dataArr, setDataArr] = useState([]);
  const [page, setPage] = useState(1);
  const [searchItems, setSearchItems] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    searchItems &&
      GetDataArr(searchItems, page)
        .then(data => {
          setDataArr([...dataArr, ...data]);
          data && setIsLoading(false);
          data.length === 12 ? setButtonVisible(true) : setButtonVisible(false);
        })
        .catch(console.log);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchItems, page]);

  useEffect(() => {
    searchItems && setIsLoading(true);
  }, [searchItems, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const onSubmit = (val) => {
    val && setDataArr([]);
    setPage(1);
    val && setSearchItems(val);
  };

  const openModal = data => {
    setLargeImageURL(data);
  };

  const closeModal = () => {
    setLargeImageURL(null);
  };

  return (
    <div>
      <SearchBar onsubmit={onSubmit} />
      <ImageGallery
        gallery={dataArr}
        largeImage={largeImageURL}
        openModal={openModal}
      />
      {buttonVisible ? (
        <Button text="Load more" handleClickMore={loadMore} />
      ) : null}

      <Loader loud={isLoading} />
      {largeImageURL && (
        <Modal largeImage={largeImageURL} closeModal={closeModal} />
      )}
    </div>
  );
};
