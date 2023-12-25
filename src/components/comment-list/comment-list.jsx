/* eslint-disable react/prop-types */

import { useSelector } from 'react-redux';
import './comment-list.scss';

export const CommentList = ({ comments }) => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="modal__reviews reviews">
      <div className="reviews__review review">
        { comments.data ? (
          comments.data.map((comment) => (
            <div className="review__item" key={comment && comment.id}>
              <div className="review__left">
                <div className="review__img">
                  <img src={`http://localhost:8090/${user.avatar}`} alt="" />
                </div>
              </div>
              <div className="review__right">
                <p className="review__name font-t">
                  {comment && comment.author.name}<span>{comment && comment.created_on}</span>
                </p>
                <h5 className="review__title font-t">Комментарий</h5>
                <p className="review__text font-t">
                  {comment && comment.text}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Отзывов нет</p>
        )}
      </div>
    </div>
  );
};
