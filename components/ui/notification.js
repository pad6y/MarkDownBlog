import ReactDOM from 'react-dom';
// @ts-ignore
import classes from './notification.module.css';

function Notification(props) {
  const { title, message, status, closeNotification } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  if (status === 'pending') {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={activeClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications')
  );
}

export default Notification;
