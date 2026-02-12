export default async function handler(req, res) {
    try {
        const response = await fetch("https://app.tapdigest.com/api/result-statistics", {
            headers: {
                "origin": "https://electionwatchbd.com",
                "referer": "https://electionwatchbd.com/",
                "user-agent": "Mozilla/5.0"
            }
        });

        const data = await response.json();
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}
