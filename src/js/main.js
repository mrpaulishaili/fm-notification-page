const MarkAllAsReadButton = document.querySelector('#markRead');

//  FUNCTION : mark all notifications read

function MarkAllAsRead() {
  const allUnreadNotifications = document.querySelectorAll('.notRead');

  allUnreadNotifications.forEach((notification) =>
    notification.classList.remove('notRead')
  );

  //   Remove Button when function is completed
  setTimeout(() => {
    MarkAllAsReadButton.style.display = 'none';
  }, 300);
}

MarkAllAsReadButton.addEventListener('click', MarkAllAsRead);
