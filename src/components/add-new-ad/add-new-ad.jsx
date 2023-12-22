import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModal } from '../../store';
import { usePostAdvMutation, usePatchAdvMutation } from '../../store';

import './add-new-ad.scss';

export const NewAdModal = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const selected_ad = useSelector((state) => state.adv.selected_ad);

  const [postAdv] = usePostAdvMutation();
  const [patchAdv] = usePatchAdvMutation();

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);

  const [newTitle, setNewTitle] = useState()
  const [newDescription, setNewDescription] = useState()
  const [newPrice, setNewPrice] = useState()

  useEffect(() => {
    console.log(selected_ad)
    if (selected_ad.user_id === user.id) {
      setNewTitle(selected_ad.title)
      setNewDescription(selected_ad.description)
      setNewPrice(selected_ad.price)
    }
  }, [selected_ad, selected_ad.description, selected_ad.price, selected_ad.title, selected_ad.user_id, user.id])

  console.log(newTitle)
  console.log(newDescription)
  console.log(newPrice)

  const handlePostAdv = (event) => {
    event.preventDefault();
    postAdv({ title, description, price }).then((res) => {
      if (res.data) {
        console.log(res.data);
      } else {
        console.log(res.error);
      }
    });
  };


  const handlePatchAdvClick = (event) => {
    event.preventDefault()
    patchAdv({
      id: selected_ad.id,
      body: {
        title: newTitle,
        description: newDescription,
        price: newPrice,
      },
    }).then((res) => console.log(res))
      .catch((error) => console.log(error))
  };

  return (
    <div className="modal-overlay">
      <div className="container-bg">
        <div className="modal__block">
          <div className="modal__content">
            {selected_ad.user_id === user.id ? (
              <h3 className="modal__title">Редактировать объявление</h3>
            ) : (
              <h3 className="modal__title">Новое объявление</h3>
            )}
            <div className="modal__btn-close">
              <div
                className="modal__btn-close-line"
                onClick={() => dispatch(setIsModal(false))}
              ></div>
            </div>
            <form
              className="modal__form-newArt form-newArt"
              id="formNewArt"
              action="#"
            >
              <div className="form-newArt__block">
                <label htmlFor="name">Название</label>
                <input
                  className="form-newArt__input"
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  defaultValue={selected_ad.user_id === user.id ? newTitle : ''}
                  onChange={(e) => selected_ad.user_id === user.id ? setNewTitle(e.target.value) : setTitle(e.target.value)}
                />
              </div>
              <div className="form-newArt__block">
                <label htmlFor="text">Описание</label>
                <textarea
                  className="form-newArt__area"
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                  defaultValue={selected_ad.user_id === user.id ? newDescription : ''}
                  onChange={(e) => selected_ad.user_id === user.id ? setNewDescription(e.target.value) : setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="form-newArt__block">
                <p className="form-newArt__p">
                  Фотографии товара<span>не более 5 фотографий</span>
                </p>
                <div className="form-newArt__bar-img">
                  <div className="form-newArt__img">
                    <img src="" alt="" />
                    <div className="form-newArt__img-cover"></div>
                  </div>
                  <div className="form-newArt__img">
                    <img src="" alt="" />
                    <div className="form-newArt__img-cover"></div>
                  </div>
                  <div className="form-newArt__img">
                    <div className="form-newArt__img-cover"></div>
                    <img src="" alt="" />
                  </div>
                  <div className="form-newArt__img">
                    <div className="form-newArt__img-cover"></div>
                    <img src="" alt="" />
                  </div>
                  <div className="form-newArt__img">
                    <div className="form-newArt__img-cover"></div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="form-newArt__block block-price">
                <label htmlFor="price">Цена</label>
                <input
                  className="form-newArt__input-price"
                  type="text"
                  name="price"
                  id="formName"
                  defaultValue={selected_ad.user_id === user.id ? newPrice : ''}
                  onChange={(e) => selected_ad.user_id === user.id ? setNewPrice(e.target.value) : setPrice(e.target.value)}
                />
                <div className="form-newArt__input-price-cover"></div>
              </div>
              {selected_ad.user_id === user.id ? (
                <button
                  className="form-newArt__btn-pub btn-hov02"
                  id="btnPublish"
                  onClick={handlePatchAdvClick}
                >
                  Сохранить изменения
                </button>
              ) : (
                <button
                  className="form-newArt__btn-pub btn-hov02"
                  id="btnPublish"
                  onClick={handlePostAdv}
                >
                  Опубликовать
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
