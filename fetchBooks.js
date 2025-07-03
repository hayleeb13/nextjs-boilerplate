export default async function handler(req, res) {
  res.status(200).json({ books: ["Test Book A", "Test Book B", "Test Book C"] });
}
