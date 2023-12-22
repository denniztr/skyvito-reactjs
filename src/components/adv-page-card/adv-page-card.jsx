/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedAdd, setModalComments, setIsModal } from '../../store';
import { useDeleteAdvMutation, useGetImagesMutation } from '../../store';

import './adv-page-card.scss';

export const AdvCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const [deleteAdv] = useDeleteAdvMutation();
  const [getImages] = useGetImagesMutation();

  const selected_ad = useSelector((state) => state.adv.selected_ad);

  useEffect(() => {
    if (data) {
      const selected_ad = data.find((ad) => ad.id === Number(id));
      dispatch(setSelectedAdd(selected_ad));
    }
  }, [data, dispatch, id]);

  const [adImages, setAdImages] = useState(null)

  useEffect(() => {
      console.log(selected_ad.id)
      getImages().then((res) => {
        console.log("🚀 ~ file: adv-page-card.jsx:33 ~ getImages ~ res:", res)
        const images = res.data.find((ad) => ad.ad_id === selected_ad.id)
        setAdImages(images)
      })
  }, [getImages, selected_ad, selected_ad.id])

  console.log(adImages)

  const handleClickUserProfile = () => {
    navigate(`/seller/${selected_ad.user.id}`);
  };

  const user = useSelector((state) => state.user.user);

  const handleDeleteAdvClick = () => {
    deleteAdv(selected_ad.id)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="artic__content article">
      <div className="article__left">
        <div className="article__fill-img">
          <div className="article__img">
            <img src="" alt="" />
          </div>
          <div className="article__img-bar">
            {[...Array(6)].map((_, index) => (
              <div className="article__img-bar-div" key={index}>
                <img src="" alt="" />
              </div>
            ))}
          </div>
          <div className="article__img-bar-mob img-bar-mob">
            {[...Array(5)].map((_, index) => (
              <div
                className={
                  index === 0
                    ? 'img-bar-mob__circle circle-active'
                    : 'img-bar-mob__circle'
                }
                key={index}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="article__right">
        <div className="article__block">
          <h3 className="article__title title">
            {selected_ad && selected_ad.title}
          </h3>
          <div className="article__info">
            <p className="article__date">
              {selected_ad && selected_ad.created_on}
            </p>
            <p className="article__city">
              {selected_ad && selected_ad.user.city}
            </p>
            <a
              className="article__link"
              onClick={() => dispatch(setModalComments())}
            >
              Отзывы
            </a>
          </div>
          <p className="article__price">{selected_ad && selected_ad.price} ₽</p>
          {user && selected_ad.user_id === user.id ? (
            <div>
              <button
                className="article__btn btn-hov-02"
                onClick={() => dispatch(setIsModal(true))}
              >
                Редактировать
              </button>
              <button
                className="article__btn btn-hov-02"
                onClick={handleDeleteAdvClick}
              >
                Снять с публикации
              </button>
            </div>
          ) : (
            <button className="article__btn btn-hov-02">
              Показать телефон
              <span>{selected_ad && selected_ad.user.phone}</span>
            </button>
          )}
          <div
            className="article__author author"
            onClick={handleClickUserProfile}
          >
            <div className="author__img">
              <img src={selected_ad && selected_ad.user.avatar} alt="" />
            </div>
            <div className="author__cont">
              <p className="author__name">
                {selected_ad && selected_ad.user.name}
              </p>
              <p className="author__about">
                {selected_ad && selected_ad.user.sells_from}
              </p>
            </div>
          </div>
          <p>{selected_ad && selected_ad.description}</p>
        </div>
      </div>
    </div>
  );
};
