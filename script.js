const notifButton = document.querySelector('.notif-button')

notifButton.addEventListener('click', (e) => {
	Notification.requestPermission().then((perm) => {
		if (perm === 'granted') {
			new Notification(`One particular element comes to mind`, {
				body: `Aaaaahhh Wire`,
				// Overrides one notification
				tag: `Breaking Bad`,
			})
		} else {
			alert('Please enable notifications for this site')
		}
	})
})
