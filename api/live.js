export default async function handler(req, res) {
  try {
    const response = await fetch("https://app.tapdigest.com/api/result-statistics");
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch API" });
  }
}
