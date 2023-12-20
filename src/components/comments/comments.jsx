import { useDispatch, useSelector } from 'react-redux'
import { setModalComments } from '../../store'

import './comments.scss';

export const CommentsModal = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  console.log(user)
  return (
    <div className="modal-overlay">
      <div className="container-bg">
        <div className="modal__block">
          <div className="modal__content">
            <h3 className="modal__title">Отзывы</h3>
            <div className="modal__btn-close">
              <div className="modal__btn-close-line" onClick={() => dispatch(setModalComments(false))}></div>
            </div>
            <div className="modal__scroll">
              { user ? (
                              <form
                              className="modal__form-newArt form-newArt"
                              id="formNewArt"
                              action="#"
                            >
                              <div className="form-newArt__block">
                                <label htmlFor="text">Add a Review</label>
                                <textarea
                                  className="form-newArt__area"
                                  name="text"
                                  id="formArea"
                                  cols="auto"
                                  rows="5"
                                  placeholder="Enter your review"
                                ></textarea>
                              </div>
                              <button
                                className="form-newArt__btn-pub btn-hov02"
                                id="btnPublish"
                              >
                                Publish
                              </button>
                            </form>
              ) : (
                <p style={{'color': 'gray'}}>Авторизуйтесь чтобы оставить комментарий</p>
              )}
              <div className="modal__reviews reviews">
                <div className="reviews__review review">
                  <div className="review__item">
                    <div className="review__left">
                      <div className="review__img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="review__right">
                      <p className="review__name font-t">
                        Кристина <span>Август 14</span>
                      </p>
                      <h5 className="review__title font-t">Комментарий</h5>
                      <p className="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
