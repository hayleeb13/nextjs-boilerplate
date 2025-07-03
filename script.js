async function fetchBook() {
  try {
    const res = await fetch('/api/fetchBooks');
    const data = await res.json();
    document.getElementById('output').innerText = data.books.join(', ');
  } catch (err) {
    document.getElementById('output').innerText = 'Client-side error occurred. See console.';
    console.error('Client-side error:', err);
  }
}
