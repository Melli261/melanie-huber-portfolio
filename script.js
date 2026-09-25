const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  document.getElementById('progressBar').style.width = `${ratio * 100}%`;
});

// Show a video only if its source file is actually available.
document.querySelectorAll('.video-shell video').forEach(video => {
  video.addEventListener('loadedmetadata', () => video.closest('.video-shell').classList.add('has-video'));
  video.addEventListener('error', () => video.closest('.video-shell').classList.remove('has-video'));
});
