import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsModal } from '../../store';
import { usePostAdvMutation } from '../../store';


import './add-new-ad.scss';

export const NewAdModal = () => {
  const dispatch = useDispatch()

  const [postAdv] = usePostAdvMutation()

  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [price, setPrice] = useState(null)
 
  const handlePostAdv = (event) => {
    event.preventDefault()
    postAdv({ title, description, price }).then((res) => {
    if (res.data) {
      console.log(res.data)
    } else {
      console.log(res.error)
    }
    });
  }

  return (
    <div className="modal-overlay">
      <div className="container-bg">
        <div className="modal__block">
          <div className="modal__content">
            <h3 className="modal__title">Новое объявление</h3>
            <div className="modal__btn-close">
              <div className="modal__btn-close-line" onClick={() => dispatch(setIsModal(false))}></div>
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
                  onChange={(e) => setTitle(e.target.value)}
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
                  onChange={(e) => setDescription(e.target.value)}
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
                  onChange={(e) => setPrice(e.target.value)}
                />
                <div className="form-newArt__input-price-cover"></div>
              </div>
              <button
                className="form-newArt__btn-pub btn-hov02"
                id="btnPublish"
                onClick={handlePostAdv}
              >
                Опубликовать
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
