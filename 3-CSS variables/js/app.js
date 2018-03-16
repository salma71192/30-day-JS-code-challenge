const inputs = document.querySelectorAll('.controls input');

function handleChange() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperity(`--${this.name}`, this.value);
}

inputs.forEach(input => input.addEventListener('change', handleChange));
