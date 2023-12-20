import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalComments } from '../../store';
import { useGetCommentsMutation } from '../../store';
import { CommentList } from '../../components/index';

import './comments.scss';

export const CommentsModal = () => {
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);
  const user = useSelector((state) => state.user.user);
  const selected_ad = useSelector((state) => state.adv.selected_ad);

  const [getComments] = useGetCommentsMutation();

  useEffect(() => {
    getComments(selected_ad.id).then((res) => {
      setComments(res);
    });
  }, [getComments, selected_ad]);

  return (
    <div className="modal-overlay">
      <div className="container-bg">
        <div className="modal__block">
          <div className="modal__content">
            <h3 className="modal__title">Отзывы</h3>
            <div className="modal__btn-close">
              <div
                className="modal__btn-close-line"
                onClick={() => dispatch(setModalComments(false))}
              ></div>
            </div>
            <div className="modal__scroll">
              {user ? (
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
                <p style={{ color: 'gray' }}>
                  Авторизуйтесь чтобы оставить комментарий
                </p>
              )}
              <CommentList comments={comments} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
