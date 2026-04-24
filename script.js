
  /* ─── PAGE ROUTING ─── */
  function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + name).classList.add('active');

    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const navEl = document.getElementById('nav-' + name);
    if (navEl) navEl.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
    return false;
  }

  /* ─── HAMBURGER ─── */
  function toggleMenu() {
    const links = document.getElementById('navLinks');
    const btn = document.getElementById('hamburger');
    const overlay = document.getElementById('navOverlay');
    links.classList.toggle('open');
    btn.classList.toggle('open');
    overlay.classList.toggle('open');
  }

  function closeMenu() {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('navOverlay').classList.remove('open');
  }

  /* ─── FORM VALIDATION ─── */
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Name
    const nameField = document.getElementById('field-name');
    if (name.value.trim().length < 2) {
      nameField.classList.add('error'); valid = false;
    } else { nameField.classList.remove('error'); }

    // Email
    const emailField = document.getElementById('field-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      emailField.classList.add('error'); valid = false;
    } else { emailField.classList.remove('error'); }

    // Subject
    const subjectField = document.getElementById('field-subject');
    if (!subject.value) {
      subjectField.classList.add('error'); valid = false;
    } else { subjectField.classList.remove('error'); }

    // Message
    const messageField = document.getElementById('field-message');
    if (message.value.trim().length < 10) {
      messageField.classList.add('error'); valid = false;
    } else { messageField.classList.remove('error'); }

    if (valid) {
      document.getElementById('contactForm').style.display = 'none';
      document.getElementById('successMsg').style.display = 'block';
    }
  });

  // Clear errors on input
  ['name','email','subject','message'].forEach(id => {
    const el = document.getElementById(id);
    const field = document.getElementById('field-' + id);
    el.addEventListener('input', () => field.classList.remove('error'));
    el.addEventListener('change', () => field.classList.remove('error'));
  });
