export default function() {
    const inlineVideos = Array.from(document.querySelectorAll('.js-inline-video'));

    function getYouTubeID(url) {
        const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return match && match[1].length == 11 ? match[1] : false;
    }

    function mountVideoIframe(parent, id) {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1`);
        Array.from(parent.children).forEach(child => child.remove());
        parent.appendChild(iframe);
    }

    inlineVideos.forEach(video => {
        try {
            const link = video.querySelector('a');
            const id = getYouTubeID(link.href);
            link.addEventListener('click', e => {
                e.preventDefault();
                mountVideoIframe(video, id);
            });
        } catch (err) {
            console.error(err.message);
        }

        
    });
}
