const laser = document.getElementById('laser');

        laser.addEventListener('mouseover', () => {
            const newX = Math.random() * (window.innerWidth - laser.offsetWidth);
            const newY = Math.random() * (window.innerHeight - laser.offsetHeight);
            laser.style.left = newX + 'px';
            laser.style.top = newY + 'px';
        });